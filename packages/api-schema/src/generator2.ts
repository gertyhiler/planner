import { writeFileSync } from "fs";
import { join } from "path";
import { z } from "zod";

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

export function generateOpenAPISchema() {
  const openApiDocument = {
    openapi: "3.0.0",
    info: {
      title: "Planner API",
      version: "1.0.0",
      description: "API для планировщика задач с поддержкой синхронизации",
    },
    servers: [{ url: "http://localhost:3001" }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        AuthRequest: AuthRequestSchema.shape,
        AuthResponse: AuthResponseSchema.shape,
        UserResponse: UserResponseSchema.shape,
        CreateTaskRequest: CreateTaskRequestSchema.shape,
        UpdateTaskRequest: UpdateTaskRequestSchema.shape,
        TaskResponse: TaskResponseSchema.shape,
        CreateProjectRequest: CreateProjectRequestSchema.shape,
        UpdateProjectRequest: UpdateProjectRequestSchema.shape,
        ProjectResponse: ProjectResponseSchema.shape,
        CreateAreaRequest: CreateAreaRequestSchema.shape,
        UpdateAreaRequest: UpdateAreaRequestSchema.shape,
        AreaResponse: AreaResponseSchema.shape,
        ErrorResponse: ErrorResponseSchema.shape,
        UploadChangesRequest: UploadChangesRequestSchema.shape,
        DownloadChangesResponse: DownloadChangesResponseSchema.shape,
        SyncStatusResponse: SyncStatusResponseSchema.shape,
      },
    },
    paths: {
      "/auth": {
        post: {
          summary: "Аутентификация пользователя",
          tags: ["Auth"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/AuthRequest" },
              },
            },
          },
          responses: {
            "200": {
              description: "Успешная аутентификация",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/AuthResponse" },
                },
              },
            },
            "401": {
              description: "Ошибка аутентификации",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ErrorResponse" },
                },
              },
            },
          },
        },
      },
      "/api/tasks": {
        get: {
          summary: "Получить список задач",
          tags: ["Tasks"],
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "status",
              in: "query",
              schema: {
                type: "string",
                enum: ["ACTIVE", "COMPLETED", "ARCHIVED", "CANCELLED"],
              },
            },
            {
              name: "priority",
              in: "query",
              schema: {
                type: "string",
                enum: ["LOW", "MEDIUM", "HIGH", "URGENT"],
              },
            },
            {
              name: "projectId",
              in: "query",
              schema: { type: "string" },
            },
          ],
          responses: {
            "200": {
              description: "Список задач",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: { $ref: "#/components/schemas/TaskResponse" },
                  },
                },
              },
            },
          },
        },
        post: {
          summary: "Создать новую задачу",
          tags: ["Tasks"],
          security: [{ bearerAuth: [] }],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/CreateTaskRequest" },
              },
            },
          },
          responses: {
            "201": {
              description: "Задача создана",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/TaskResponse" },
                },
              },
            },
            "400": {
              description: "Ошибка валидации",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ErrorResponse" },
                },
              },
            },
          },
        },
      },
      "/api/tasks/{id}": {
        get: {
          summary: "Получить задачу по ID",
          tags: ["Tasks"],
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            "200": {
              description: "Задача найдена",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/TaskResponse" },
                },
              },
            },
            "404": {
              description: "Задача не найдена",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ErrorResponse" },
                },
              },
            },
          },
        },
        put: {
          summary: "Обновить задачу",
          tags: ["Tasks"],
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/UpdateTaskRequest" },
              },
            },
          },
          responses: {
            "200": {
              description: "Задача обновлена",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/TaskResponse" },
                },
              },
            },
            "404": {
              description: "Задача не найдена",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ErrorResponse" },
                },
              },
            },
          },
        },
        delete: {
          summary: "Удалить задачу",
          tags: ["Tasks"],
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            "204": {
              description: "Задача удалена",
            },
            "404": {
              description: "Задача не найдена",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ErrorResponse" },
                },
              },
            },
          },
        },
      },
      "/api/projects": {
        get: {
          summary: "Получить список проектов",
          tags: ["Projects"],
          security: [{ bearerAuth: [] }],
          responses: {
            "200": {
              description: "Список проектов",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: { $ref: "#/components/schemas/ProjectResponse" },
                  },
                },
              },
            },
          },
        },
        post: {
          summary: "Создать новый проект",
          tags: ["Projects"],
          security: [{ bearerAuth: [] }],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/CreateProjectRequest" },
              },
            },
          },
          responses: {
            "201": {
              description: "Проект создан",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ProjectResponse" },
                },
              },
            },
          },
        },
      },
      "/api/projects/{id}": {
        get: {
          summary: "Получить проект по ID",
          tags: ["Projects"],
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            "200": {
              description: "Проект найден",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ProjectResponse" },
                },
              },
            },
            "404": {
              description: "Проект не найден",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ErrorResponse" },
                },
              },
            },
          },
        },
        put: {
          summary: "Обновить проект",
          tags: ["Projects"],
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/UpdateProjectRequest" },
              },
            },
          },
          responses: {
            "200": {
              description: "Проект обновлен",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ProjectResponse" },
                },
              },
            },
            "404": {
              description: "Проект не найден",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ErrorResponse" },
                },
              },
            },
          },
        },
        delete: {
          summary: "Удалить проект",
          tags: ["Projects"],
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            "204": {
              description: "Проект удален",
            },
            "404": {
              description: "Проект не найден",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ErrorResponse" },
                },
              },
            },
          },
        },
      },
      "/api/areas": {
        get: {
          summary: "Получить список областей",
          tags: ["Areas"],
          security: [{ bearerAuth: [] }],
          responses: {
            "200": {
              description: "Список областей",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: { $ref: "#/components/schemas/AreaResponse" },
                  },
                },
              },
            },
          },
        },
        post: {
          summary: "Создать новую область",
          tags: ["Areas"],
          security: [{ bearerAuth: [] }],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/CreateAreaRequest" },
              },
            },
          },
          responses: {
            "201": {
              description: "Область создана",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/AreaResponse" },
                },
              },
            },
          },
        },
      },
      "/api/areas/{id}": {
        get: {
          summary: "Получить область по ID",
          tags: ["Areas"],
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            "200": {
              description: "Область найдена",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/AreaResponse" },
                },
              },
            },
            "404": {
              description: "Область не найдена",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ErrorResponse" },
                },
              },
            },
          },
        },
        put: {
          summary: "Обновить область",
          tags: ["Areas"],
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/UpdateAreaRequest" },
              },
            },
          },
          responses: {
            "200": {
              description: "Область обновлена",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/AreaResponse" },
                },
              },
            },
            "404": {
              description: "Область не найдена",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ErrorResponse" },
                },
              },
            },
          },
        },
        delete: {
          summary: "Удалить область",
          tags: ["Areas"],
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            "204": {
              description: "Область удалена",
            },
            "404": {
              description: "Область не найдена",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ErrorResponse" },
                },
              },
            },
          },
        },
      },
      "/api/sync/upload": {
        post: {
          summary: "Загрузить изменения на сервер",
          tags: ["Sync"],
          security: [{ bearerAuth: [] }],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/UploadChangesRequest" },
              },
            },
          },
          responses: {
            "200": {
              description: "Изменения загружены",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      success: { type: "boolean" },
                      message: { type: "string" },
                    },
                    required: ["success", "message"],
                  },
                },
              },
            },
          },
        },
      },
      "/api/sync/download": {
        get: {
          summary: "Скачать изменения с сервера",
          tags: ["Sync"],
          security: [{ bearerAuth: [] }],
          parameters: [
            {
              name: "lastSync",
              in: "query",
              schema: { type: "string", format: "date-time" },
            },
          ],
          responses: {
            "200": {
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
        },
      },
      "/api/sync/status": {
        get: {
          summary: "Получить статус синхронизации",
          tags: ["Sync"],
          security: [{ bearerAuth: [] }],
          responses: {
            "200": {
              description: "Статус синхронизации",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/SyncStatusResponse" },
                },
              },
            },
          },
        },
      },
    },
  };

  // Записываем схему в файл
  const outputPath = join(__dirname, "..", "generated", "openapi.yaml");
  const yamlContent = JSON.stringify(openApiDocument, null, 2);

  writeFileSync(outputPath, yamlContent, "utf8");

  console.log("✅ OpenAPI схема сгенерирована:", outputPath);
}
