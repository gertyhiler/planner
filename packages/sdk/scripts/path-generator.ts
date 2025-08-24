import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

// Типы для OpenAPI схемы
interface OpenAPISchema {
  paths: Record<string, Record<string, any>>;
}

interface PathParam {
  name: string;
  type: "string" | "number";
}

interface RouteInfo {
  path: string;
  method: string;
  operationId: string;
  params: PathParam[];
}

/**
 * Генератор констант путей из OpenAPI схемы
 */
export class PathGenerator {
  private schema: OpenAPISchema;

  constructor(schemaPath: string) {
    const schemaContent = readFileSync(schemaPath, "utf-8");
    this.schema = JSON.parse(schemaContent);
  }

  /**
   * Извлекает параметры пути из строки пути
   */
  private extractPathParams(path: string): PathParam[] {
    const params: PathParam[] = [];
    const paramMatches = path.match(/\{([^}]+)\}/g);

    if (paramMatches) {
      paramMatches.forEach((match) => {
        const paramName = match.slice(1, -1); // Убираем { и }
        params.push({
          name: paramName,
          type: "string", // По умолчанию считаем строкой, можно расширить
        });
      });
    }

    return params;
  }

  /**
   * Конвертирует путь OpenAPI в константу
   */
  private pathToConstantName(path: string, method: string): string {
    // Убираем /api/, заменяем / на _, {id} на ById и т.д.
    let constName = path
      .replace(/^\/api\//, "") // убираем /api/ в начале
      .replace(/^\//, "") // убираем / в начале
      .replace(/\{([^}]+)\}/g, "_by_$1") // {id} -> _by_id
      .replace(/\//g, "_") // / -> _
      .toUpperCase();

    // Добавляем метод если это не GET
    if (method.toUpperCase() !== "GET") {
      constName = `${method.toUpperCase()}_${constName}`;
    }

    return constName;
  }

  /**
   * Генерирует TypeScript код для констант путей
   */
  generatePathConstants(): string {
    const routes: RouteInfo[] = [];

    // Извлекаем все маршруты из схемы
    Object.entries(this.schema.paths).forEach(([path, methods]) => {
      Object.entries(methods).forEach(([method, operation]) => {
        // Добавляем все маршруты, даже без operationId
        routes.push({
          path,
          method: method.toUpperCase(),
          operationId:
            operation.operationId ||
            `${method}_${path.replace(/[^a-zA-Z0-9]/g, "_")}`,
          params: this.extractPathParams(path),
        });
      });
    });

    // Генерируем код
    let code = `/**
 * Автоматически сгенерированные константы путей API
 * Сгенерировано из OpenAPI схемы
 */

// Базовые константы путей
export const API_PATHS = {
`;

    // Добавляем константы путей
    routes.forEach((route) => {
      const constName = this.pathToConstantName(route.path, route.method);
      code += `  ${constName}: '${route.path}' as const,\n`;
    });

    code += `} as const;\n\n`;

    // Генерируем типы для параметров путей
    code += `// Типы параметров путей\n`;
    routes.forEach((route) => {
      if (route.params.length > 0) {
        const constName = this.pathToConstantName(route.path, route.method);
        code += `export interface ${constName}_PARAMS {\n`;
        route.params.forEach((param) => {
          code += `  ${param.name}: ${param.type};\n`;
        });
        code += `}\n\n`;
      }
    });

    // Генерируем вспомогательные функции для подстановки параметров
    code += `// Вспомогательные функции для подстановки параметров\n`;
    code += `export const buildPath = {\n`;

    routes.forEach((route) => {
      if (route.params.length > 0) {
        const constName = this.pathToConstantName(route.path, route.method);
        const funcName = constName.toLowerCase();
        const paramType = `${constName}_PARAMS`;

        code += `  ${funcName}: (params: ${paramType}): string => {\n`;
        code += `    let path = API_PATHS.${constName};\n`;
        route.params.forEach((param) => {
          code += `    path = path.replace('{${param.name}}', String(params.${param.name})) as typeof path;\n`;
        });
        code += `    return path;\n`;
        code += `  },\n\n`;
      }
    });

    code += `};\n\n`;

    // Генерируем объект с группировкой по ресурсам
    code += `// Группировка путей по ресурсам\n`;
    code += `export const PATHS = {\n`;

    const grouped = this.groupPathsByResource(routes);
    Object.entries(grouped).forEach(([resource, resourceRoutes]) => {
      code += `  ${resource.toUpperCase()}: {\n`;
      resourceRoutes.forEach((route) => {
        const constName = this.pathToConstantName(route.path, route.method);
        const methodName = this.getMethodName(route);
        code += `    ${methodName}: API_PATHS.${constName},\n`;
      });
      code += `  },\n`;
    });

    code += `};\n\n`;

    // Экспортируем типы
    code += `// Экспорт всех типов параметров\n`;
    code += `export type PathParams = {\n`;
    routes.forEach((route) => {
      if (route.params.length > 0) {
        const constName = this.pathToConstantName(route.path, route.method);
        code += `  ${constName}: ${constName}_PARAMS;\n`;
      }
    });
    code += `};\n`;

    return code;
  }

  /**
   * Группирует пути по ресурсам (users, tasks, projects и т.д.)
   */
  private groupPathsByResource(
    routes: RouteInfo[]
  ): Record<string, RouteInfo[]> {
    const grouped: Record<string, RouteInfo[]> = {};

    routes.forEach((route) => {
      // Извлекаем ресурс из пути, например /api/tasks -> tasks
      const match = route.path.match(/^\/api\/([^\/]+)/);
      const resource = match ? match[1] : "root";

      if (!grouped[resource]) {
        grouped[resource] = [];
      }
      grouped[resource].push(route);
    });

    return grouped;
  }

  /**
   * Генерирует имя метода для использования в группированных путях
   */
  private getMethodName(route: RouteInfo): string {
    const hasParams = route.params.length > 0;
    const pathParts = route.path.split("/").filter(Boolean);
    const lastPart = pathParts[pathParts.length - 1];

    switch (route.method) {
      case "GET":
        if (hasParams) {
          return "GET_BY_ID";
        } else if (lastPart === "download") {
          return "DOWNLOAD";
        } else if (lastPart === "status") {
          return "GET_STATUS";
        } else {
          return "GET_ALL";
        }
      case "POST":
        if (lastPart === "upload") {
          return "UPLOAD";
        }
        return "CREATE";
      case "PUT":
        return "UPDATE";
      case "DELETE":
        return "DELETE";
      case "PATCH":
        return "PATCH";
      default:
        return route.method;
    }
  }

  /**
   * Записывает сгенерированные константы в файл
   */
  writeToFile(outputPath: string): void {
    const code = this.generatePathConstants();
    writeFileSync(outputPath, code, "utf-8");
    console.log(`✅ Константы путей сгенерированы: ${outputPath}`);
  }
}

const checkExists = (path: string) => {
  if (existsSync(path)) {
    return true;
  }
  return false;
};

const createDir = (path: string) => {
  const dirPath = path.split("/").slice(0, -1).join("/");
  if (!checkExists(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
};

// Скрипт для CLI использования
if (require.main === module) {
  const schemaPath =
    process.argv[2] ||
    join(
      __dirname,
      "../node_modules/@planner/api-schema/generated/openapi.json"
    );
  const outputPath =
    process.argv[3] || join(__dirname, "../src/generated/paths.ts");

  createDir(outputPath);

  try {
    const generator = new PathGenerator(schemaPath);
    generator.writeToFile(outputPath);
  } catch (error) {
    console.error("❌ Ошибка генерации констант путей:", error);
    process.exit(1);
  }
}
