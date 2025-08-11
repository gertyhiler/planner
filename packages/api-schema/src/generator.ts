import { writeFileSync } from "fs";
import { join } from "path";
import {
  OpenAPIRegistry,
  extendZodWithOpenApi,
  OpenApiGeneratorV3,
} from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

// Расширяем Zod с OpenAPI функциональностью
extendZodWithOpenApi(z);

import {
  AuthRequestSchema,
  AuthResponseSchema,
  UserResponseSchema,
  CreateTaskRequestSchema,
  UpdateTaskRequestSchema,
  TaskResponseSchema,
  CreateProjectRequestSchema,
  UpdateProjectRequestSchema,
  ProjectResponseSchema,
  CreateAreaRequestSchema,
  UpdateAreaRequestSchema,
  AreaResponseSchema,
  ErrorResponseSchema,
  UploadChangesRequestSchema,
  DownloadChangesResponseSchema,
  SyncStatusResponseSchema,
} from "@planner/api-schema/src/schemas";

// Создаем реестр для OpenAPI схем
const registry = new OpenAPIRegistry();

// Регистрируем security scheme
registry.registerComponent("securitySchemes", "bearerAuth", {
  type: "http",
  scheme: "bearer",
  bearerFormat: "JWT",
});

// Регистрируем все схемы
registry.register("AuthRequest", AuthRequestSchema);
registry.register("AuthResponse", AuthResponseSchema);
registry.register("UserResponse", UserResponseSchema);
registry.register("CreateTaskRequest", CreateTaskRequestSchema);
registry.register("UpdateTaskRequest", UpdateTaskRequestSchema);
registry.register("TaskResponse", TaskResponseSchema);
registry.register("CreateProjectRequest", CreateProjectRequestSchema);
registry.register("UpdateProjectRequest", UpdateProjectRequestSchema);
registry.register("ProjectResponse", ProjectResponseSchema);
registry.register("CreateAreaRequest", CreateAreaRequestSchema);
registry.register("UpdateAreaRequest", UpdateAreaRequestSchema);
registry.register("AreaResponse", AreaResponseSchema);
registry.register("ErrorResponse", ErrorResponseSchema);
registry.register("UploadChangesRequest", UploadChangesRequestSchema);
registry.register("DownloadChangesResponse", DownloadChangesResponseSchema);
registry.register("SyncStatusResponse", SyncStatusResponseSchema);

// Регистрируем пути API
registry.registerPath({
  method: "post",
  path: "/auth",
  summary: "Аутентификация пользователя",
  tags: ["Auth"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/AuthRequest",
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "Успешная аутентификация",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/AuthResponse",
          },
        },
      },
    },
    401: {
      description: "Ошибка аутентификации",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/ErrorResponse",
          },
        },
      },
    },
  },
});

// Пути для задач
registry.registerPath({
  method: "get",
  path: "/api/tasks",
  summary: "Получить список задач",
  tags: ["Tasks"],
  security: [{ bearerAuth: [] }],
  request: {
    query: z.object({
      status: z
        .enum(["ACTIVE", "COMPLETED", "ARCHIVED", "CANCELLED"])
        .optional(),
      priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]).optional(),
      projectId: z.string().optional(),
    }),
  },
  responses: {
    200: {
      description: "Список задач",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/TaskResponse",
          },
        },
      },
    },
  },
});

registry.registerPath({
  method: "post",
  path: "/api/tasks",
  summary: "Создать новую задачу",
  tags: ["Tasks"],
  security: [{ bearerAuth: [] }],
  request: {
    body: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/CreateTaskRequest",
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: "Задача создана",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/TaskResponse",
          },
        },
      },
    },
    400: {
      description: "Ошибка валидации",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/ErrorResponse",
          },
        },
      },
    },
  },
});

registry.registerPath({
  method: "get",
  path: "/api/tasks/{id}",
  summary: "Получить задачу по ID",
  tags: ["Tasks"],
  security: [{ bearerAuth: [] }],
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    200: {
      description: "Задача найдена",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/TaskResponse",
          },
        },
      },
    },
    404: {
      description: "Задача не найдена",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/ErrorResponse",
          },
        },
      },
    },
  },
});

registry.registerPath({
  method: "put",
  path: "/api/tasks/{id}",
  summary: "Обновить задачу",
  tags: ["Tasks"],
  security: [{ bearerAuth: [] }],
  request: {
    params: z.object({
      id: z.string(),
    }),
    body: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/UpdateTaskRequest",
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "Задача обновлена",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/TaskResponse",
          },
        },
      },
    },
    404: {
      description: "Задача не найдена",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/ErrorResponse",
          },
        },
      },
    },
  },
});

registry.registerPath({
  method: "delete",
  path: "/api/tasks/{id}",
  summary: "Удалить задачу",
  tags: ["Tasks"],
  security: [{ bearerAuth: [] }],
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    204: {
      description: "Задача удалена",
    },
    404: {
      description: "Задача не найдена",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/ErrorResponse",
          },
        },
      },
    },
  },
});

// Пути для проектов
registry.registerPath({
  method: "get",
  path: "/api/projects",
  summary: "Получить список проектов",
  tags: ["Projects"],
  security: [{ bearerAuth: [] }],
  responses: {
    200: {
      description: "Список проектов",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/ProjectResponse",
          },
        },
      },
    },
  },
});

registry.registerPath({
  method: "post",
  path: "/api/projects",
  summary: "Создать новый проект",
  tags: ["Projects"],
  security: [{ bearerAuth: [] }],
  request: {
    body: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/CreateProjectRequest",
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: "Проект создан",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/ProjectResponse",
          },
        },
      },
    },
  },
});

registry.registerPath({
  method: "get",
  path: "/api/projects/{id}",
  summary: "Получить проект по ID",
  tags: ["Projects"],
  security: [{ bearerAuth: [] }],
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    200: {
      description: "Проект найден",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/ProjectResponse",
          },
        },
      },
    },
    404: {
      description: "Проект не найден",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/ErrorResponse",
          },
        },
      },
    },
  },
});

registry.registerPath({
  method: "put",
  path: "/api/projects/{id}",
  summary: "Обновить проект",
  tags: ["Projects"],
  security: [{ bearerAuth: [] }],
  request: {
    params: z.object({
      id: z.string(),
    }),
    body: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/UpdateProjectRequest",
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "Проект обновлен",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/ProjectResponse",
          },
        },
      },
    },
    404: {
      description: "Проект не найден",
      content: {
        "application/json": {
          schema: ErrorResponseSchema,
        },
      },
    },
  },
});

registry.registerPath({
  method: "delete",
  path: "/api/projects/{id}",
  summary: "Удалить проект",
  tags: ["Projects"],
  security: [{ bearerAuth: [] }],
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    204: {
      description: "Проект удален",
    },
    404: {
      description: "Проект не найден",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/ErrorResponse",
          },
        },
      },
    },
  },
});

// Пути для областей
registry.registerPath({
  method: "get",
  path: "/api/areas",
  summary: "Получить список областей",
  tags: ["Areas"],
  security: [{ bearerAuth: [] }],
  responses: {
    200: {
      description: "Список областей",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/AreaResponse",
          },
        },
      },
    },
  },
});

registry.registerPath({
  method: "post",
  path: "/api/areas",
  summary: "Создать новую область",
  tags: ["Areas"],
  security: [{ bearerAuth: [] }],
  request: {
    body: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/CreateAreaRequest",
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: "Область создана",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/AreaResponse",
          },
        },
      },
    },
  },
});

registry.registerPath({
  method: "get",
  path: "/api/areas/{id}",
  summary: "Получить область по ID",
  tags: ["Areas"],
  security: [{ bearerAuth: [] }],
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    200: {
      description: "Область найдена",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/AreaResponse",
          },
        },
      },
    },
    404: {
      description: "Область не найдена",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/ErrorResponse",
          },
        },
      },
    },
  },
});

registry.registerPath({
  method: "put",
  path: "/api/areas/{id}",
  summary: "Обновить область",
  tags: ["Areas"],
  security: [{ bearerAuth: [] }],
  request: {
    params: z.object({
      id: z.string(),
    }),
    body: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/UpdateAreaRequest",
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "Область обновлена",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/AreaResponse",
          },
        },
      },
    },
    404: {
      description: "Область не найдена",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/ErrorResponse",
          },
        },
      },
    },
  },
});

registry.registerPath({
  method: "delete",
  path: "/api/areas/{id}",
  summary: "Удалить область",
  tags: ["Areas"],
  security: [{ bearerAuth: [] }],
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    204: {
      description: "Область удалена",
    },
    404: {
      description: "Область не найдена",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/ErrorResponse",
          },
        },
      },
    },
  },
});

// Пути для синхронизации
registry.registerPath({
  method: "post",
  path: "/api/sync/upload",
  summary: "Загрузить изменения на сервер",
  tags: ["Sync"],
  security: [{ bearerAuth: [] }],
  request: {
    body: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/UploadChangesRequest",
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "Изменения загружены",
      content: {
        "application/json": {
          schema: z.object({
            success: z.boolean(),
            message: z.string(),
          }),
        },
      },
    },
  },
});

registry.registerPath({
  method: "get",
  path: "/api/sync/download",
  summary: "Скачать изменения с сервера",
  tags: ["Sync"],
  security: [{ bearerAuth: [] }],
  request: {
    query: z.object({
      lastSync: z.string().datetime().optional(),
    }),
  },
  responses: {
    200: {
      description: "Изменения с сервера",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/DownloadChangesResponse",
          },
        },
      },
    },
  },
});

registry.registerPath({
  method: "get",
  path: "/api/sync/status",
  summary: "Получить статус синхронизации",
  tags: ["Sync"],
  security: [{ bearerAuth: [] }],
  responses: {
    200: {
      description: "Статус синхронизации",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/SyncStatusResponse",
          },
        },
      },
    },
  },
});

export function generateOpenAPISchema() {
  // Создаем генератор с нашим реестром
  const generator = new OpenApiGeneratorV3(registry.definitions);

  // Генерируем OpenAPI документ
  const openApiDocument = generator.generateDocument({
    openapi: "3.0.0",
    info: {
      title: "Planner API",
      version: "1.0.0",
      description: "API для планировщика задач с поддержкой синхронизации",
    },
    servers: [{ url: "http://localhost:3001" }],
  });

  // Записываем схему в файл
  const outputPath = join(__dirname, "..", "generated", "openapi.yaml");
  const yamlContent = JSON.stringify(openApiDocument, null, 2);

  writeFileSync(outputPath, yamlContent, "utf8");

  console.log("✅ OpenAPI схема сгенерирована:", outputPath);
}
