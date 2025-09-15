import type { DatabaseContext } from "./client";
// Database DI helpers (no singletons)
export { createPrismaClient, createDatabaseContext } from "./client";
export type { DatabaseType } from "./client";
export type { DatabaseContext } from "./client";

// Services (classes only; singletons are deprecated in favor of DI)
export { TaskService } from "./services/task-service";
export { ProjectService } from "./services/project-service";
export { AreaService } from "./services/area-service";
export { UserService } from "./services/user-service";

// Factory to create services from a prisma instance
export function createServices(context: DatabaseContext) {
  return {
    taskService: new (require("./services/task-service").TaskService)(context),
    projectService: new (require("./services/project-service").ProjectService)(
      context
    ),
    areaService: new (require("./services/area-service").AreaService)(context),
    userService: new (require("./services/user-service").UserService)(context),
  } as const;
}

// Base Service
export { BaseService } from "./services/base-service";
export type {
  BaseEntity,
  CreateEntityData,
  UpdateEntityData,
  EntityFilters,
} from "./services/base-service";

// Sync
export { SyncManager } from "./sync/sync-manager";
export type {
  SyncOperation,
  SyncResult,
  SyncConfig,
} from "./sync/sync-manager";

// Types
export type {
  CreateTaskData,
  UpdateTaskData,
  TaskFilters,
} from "./services/task-service";

export type {
  CreateProjectData,
  UpdateProjectData,
  ProjectFilters,
} from "./services/project-service";

export type {
  CreateAreaData,
  UpdateAreaData,
  AreaFilters,
} from "./services/area-service";

export type {
  CreateUserData,
  UpdateUserData,
  UserFilters,
} from "./services/user-service";

// Re-export Prisma types
export type {
  Task,
  Project,
  Area,
  User,
  Section,
  Calendar,
  ChecklistItem,
  Tag,
  Recurrence,
  AuthSession,
  OAuthProvider,
  SyncLog,
} from "../generated/client";
