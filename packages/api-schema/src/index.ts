// Экспортируем все схемы
export * from "./schemas";

// Экспортируем генератор
export { generateOpenAPISchema } from "@planner/api-schema/src/generator";

// Константы API
export const API_BASE_URL =
  process.env.API_BASE_URL || "http://localhost:3001/api";
export const API_VERSION = "v1";

// Endpoints
export const ENDPOINTS = {
  AUTH: "/auth",
  TASKS: "/tasks",
  PROJECTS: "/projects",
  AREAS: "/areas",
} as const;

// HTTP методы
export const HTTP_METHODS = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
  PATCH: "PATCH",
} as const;
