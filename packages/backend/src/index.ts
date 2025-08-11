import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import jwt from "@fastify/jwt";
import swagger from "@fastify/swagger";
import swaggerUi from "@fastify/swagger-ui";
import openapiGlue from "fastify-openapi-glue";
import { join } from "path";
import { PlannerService } from "./services/planner-service";
import { SecurityService } from "./services/security-service";

async function start() {
  const fastify = Fastify({
    logger: true,
  });

  // Регистрируем плагины
  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(helmet);

  await fastify.register(jwt, {
    secret: process.env.JWT_SECRET || "your-secret-key",
  });

  // Swagger документация
  await fastify.register(swagger, {
    openapi: {
      info: {
        title: "Planner API",
        version: "1.0.0",
        description: "API для планировщика задач с поддержкой синхронизации",
      },
      servers: [
        {
          url: "http://localhost:3001",
          description: "Development server",
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
    },
  });

  await fastify.register(swaggerUi, {
    routePrefix: "/docs",
    uiConfig: {
      docExpansion: "full",
      deepLinking: false,
    },
    uiHooks: {
      onRequest: function (request, reply, next) {
        next();
      },
      preHandler: function (request, reply, next) {
        next();
      },
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, request, reply) => {
      return swaggerObject;
    },
    transformSpecificationClone: true,
  });

  // Обработчик ошибок
  fastify.setErrorHandler((error, request, reply) => {
    fastify.log.error(error);
    reply.status(500).send({
      error: "Internal Server Error",
      message: "Произошла внутренняя ошибка сервера",
      statusCode: 500,
    });
  });

  // Регистрируем маршруты
  async function registerRoutes() {
    // Health check
    fastify.get("/health", async (request, reply) => {
      return {
        status: "OK",
        timestamp: new Date().toISOString(),
        services: {
          database: "connected",
          sync: "enabled",
        },
      };
    });

    // Регистрируем OpenAPI маршруты
    const openApiSpecPath = join(
      __dirname,
      "../node_modules/@planner/api-schema/generated/openapi.yaml"
    );

    await fastify.register(openapiGlue, {
      specification: openApiSpecPath,
      serviceHandlers: new PlannerService(),
      securityHandlers: new SecurityService(),
      prefix: "",
    });
  }

  await registerRoutes();

  // Запускаем сервер
  try {
    await fastify.listen({ port: 3001, host: "0.0.0.0" });
    console.log("🚀 Backend сервер запущен на http://localhost:3001");
    console.log("📚 Swagger документация: http://localhost:3001/docs");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
