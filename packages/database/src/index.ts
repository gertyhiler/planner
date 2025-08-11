// Database Client
export { dbClient, DatabaseClient, type DatabaseType } from "./client";

// Services
export { taskService, TaskService } from "./services/task-service";
export { projectService, ProjectService } from "./services/project-service";
export { areaService, AreaService } from "./services/area-service";
export { userService, UserService } from "./services/user-service";

// Base Service
export { BaseService } from "./services/base-service";
export type {
  BaseEntity,
  CreateEntityData,
  UpdateEntityData,
  EntityFilters,
} from "./services/base-service";

// Sync
export { syncManager, SyncManager } from "./sync/sync-manager";
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
  Account,
  Session,
  VerificationToken,
  SyncLog,
} from "../generated/client";
