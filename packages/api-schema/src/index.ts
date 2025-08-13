import { writeFileSync } from "fs";
import { join } from "path";
import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
} from "@asteasolutions/zod-to-openapi";

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
  TaskParamsSchema,
  UpdateTaskParamsSchema,
  DeleteTaskParamsSchema,
  ProjectParamsSchema,
  UpdateProjectParamsSchema,
  DeleteProjectParamsSchema,
  AreaParamsSchema,
  UpdateAreaParamsSchema,
  DeleteAreaParamsSchema,
  UploadChangesResponseSchema,
  DownloadChangesRequestSchema,
} from "@planner/types";
import z from "zod";
// Создаем реестр для OpenAPI схем
const registry = new OpenAPIRegistry();

// Регистрируем security scheme
registry.registerComponent("securitySchemes", "bearerAuth", {
  type: "http",
  scheme: "bearer",
  bearerFormat: "JWT",
});

registry.registerPath({
  method: "post",
  path: "/auth",
  summary: "Аутентификация пользователя",
  tags: ["Auth"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: AuthRequestSchema.openapi("AuthRequest"),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Успешная аутентификация",
      content: {
        "application/json": {
          schema: AuthResponseSchema.openapi("AuthResponse"),
        },
      },
    },
    401: {
      description: "Ошибка аутентификации",
      content: {
        "application/json": {
          schema: ErrorResponseSchema.openapi("ErrorResponse"),
        },
      },
    },
  },
});

registry.registerPath({
  method: "get",
  path: "/api/users/me",
  summary: "Получить информацию о текущем пользователе",
  tags: ["Users"],
  security: [{ bearerAuth: [] }],
  responses: {
    200: {
      description: "Информация о пользователе",
      content: {
        "application/json": {
          schema: UserResponseSchema.openapi("UserResponse"),
        },
      },
    },
    401: {
      description: "Ошибка аутентификации",
      content: {
        "application/json": {
          schema: ErrorResponseSchema.openapi("ErrorResponse"),
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
    query: TaskParamsSchema.openapi("TaskParams"),
  },
  responses: {
    200: {
      description: "Список задач",
      content: {
        "application/json": {
          schema: TaskResponseSchema.openapi("TaskResponse"),
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
          schema: CreateTaskRequestSchema.openapi("CreateTaskRequest"),
        },
      },
    },
  },
  responses: {
    201: {
      description: "Задача создана",
      content: {
        "application/json": {
          schema: TaskResponseSchema.openapi("TaskResponse"),
        },
      },
    },
    400: {
      description: "Ошибка валидации",
      content: {
        "application/json": {
          schema: ErrorResponseSchema.openapi("ErrorResponse"),
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
    query: TaskParamsSchema.openapi("TaskParams"),
  },
  responses: {
    200: {
      description: "Задача найдена",
      content: {
        "application/json": {
          schema: TaskResponseSchema.openapi("TaskResponse"),
        },
      },
    },
    404: {
      description: "Задача не найдена",
      content: {
        "application/json": {
          schema: ErrorResponseSchema.openapi("ErrorResponse"),
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
    params: UpdateTaskParamsSchema.openapi("UpdateTaskParams"),
    body: {
      content: {
        "application/json": {
          schema: UpdateTaskRequestSchema.openapi("UpdateTaskRequest"),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Задача обновлена",
      content: {
        "application/json": {
          schema: TaskResponseSchema.openapi("TaskResponse"),
        },
      },
    },
    404: {
      description: "Задача не найдена",
      content: {
        "application/json": {
          schema: ErrorResponseSchema.openapi("ErrorResponse"),
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
    params: DeleteTaskParamsSchema.openapi("DeleteTaskParams"),
  },
  responses: {
    204: {
      description: "Задача удалена",
    },
    404: {
      description: "Задача не найдена",
      content: {
        "application/json": {
          schema: ErrorResponseSchema.openapi("ErrorResponse"),
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
          schema: ProjectResponseSchema.openapi("ProjectResponse"),
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
          schema: CreateProjectRequestSchema.openapi("CreateProjectRequest"),
        },
      },
    },
  },
  responses: {
    201: {
      description: "Проект создан",
      content: {
        "application/json": {
          schema: ProjectResponseSchema.openapi("ProjectResponse"),
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
    params: ProjectParamsSchema.openapi("ProjectParams"),
  },
  responses: {
    200: {
      description: "Проект найден",
      content: {
        "application/json": {
          schema: ProjectResponseSchema.openapi("ProjectResponse"),
        },
      },
    },
    404: {
      description: "Проект не найден",
      content: {
        "application/json": {
          schema: ErrorResponseSchema.openapi("ErrorResponse"),
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
    params: UpdateProjectParamsSchema.openapi("UpdateProjectParams"),
    body: {
      content: {
        "application/json": {
          schema: UpdateProjectRequestSchema.openapi("UpdateProjectRequest"),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Проект обновлен",
      content: {
        "application/json": {
          schema: ProjectResponseSchema.openapi("ProjectResponse"),
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
    params: DeleteProjectParamsSchema.openapi("DeleteProjectParams"),
  },
  responses: {
    204: {
      description: "Проект удален",
    },
    404: {
      description: "Проект не найден",
      content: {
        "application/json": {
          schema: ErrorResponseSchema.openapi("ErrorResponse"),
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
          schema: AreaResponseSchema.openapi("AreaResponse"),
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
          schema: CreateAreaRequestSchema.openapi("CreateAreaRequest"),
        },
      },
    },
  },
  responses: {
    201: {
      description: "Область создана",
      content: {
        "application/json": {
          schema: AreaResponseSchema.openapi("AreaResponse"),
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
    params: AreaParamsSchema.openapi("AreaParams"),
  },
  responses: {
    200: {
      description: "Область найдена",
      content: {
        "application/json": {
          schema: AreaResponseSchema.openapi("AreaResponse"),
        },
      },
    },
    404: {
      description: "Область не найдена",
      content: {
        "application/json": {
          schema: ErrorResponseSchema.openapi("ErrorResponse"),
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
    params: UpdateAreaParamsSchema.openapi("UpdateAreaParams"),
    body: {
      content: {
        "application/json": {
          schema: UpdateAreaRequestSchema.openapi("UpdateAreaRequest"),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Область обновлена",
      content: {
        "application/json": {
          schema: AreaResponseSchema.openapi("AreaResponse"),
        },
      },
    },
    404: {
      description: "Область не найдена",
      content: {
        "application/json": {
          schema: ErrorResponseSchema.openapi("ErrorResponse"),
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
    params: DeleteAreaParamsSchema.openapi("DeleteAreaParams"),
  },
  responses: {
    204: {
      description: "Область удалена",
    },
    404: {
      description: "Область не найдена",
      content: {
        "application/json": {
          schema: ErrorResponseSchema.openapi("ErrorResponse"),
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
          schema: UploadChangesRequestSchema.openapi("UploadChangesRequest"),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Изменения загружены",
      content: {
        "application/json": {
          schema: UploadChangesResponseSchema.openapi("UploadChangesResponse"),
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
    query: DownloadChangesRequestSchema.openapi("DownloadChangesRequest"),
  },
  responses: {
    200: {
      description: "Изменения с сервера",
      content: {
        "application/json": {
          schema: DownloadChangesResponseSchema.openapi(
            "DownloadChangesResponse"
          ),
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
          schema: SyncStatusResponseSchema.openapi("SyncStatusResponse"),
        },
      },
    },
  },
});

const generator = new OpenApiGeneratorV3(registry.definitions);

const openApiSchema = generator.generateDocument({
  openapi: "3.0.0",
  info: {
    title: "Test API",
    version: "1.0.0",
  },
});

console.log("✅ Schema generated");

const path = join(__dirname, "../generated/openapi.json");
console.log(`Writing schema to file ${path}`);

writeFileSync(path, JSON.stringify(openApiSchema, null, 2), {
  encoding: "utf-8",
});

console.log("✅ Schema written to file");
