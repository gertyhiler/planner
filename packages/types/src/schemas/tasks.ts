import { z } from "zod";
import { TaskStatusSchema, PrioritySchema } from "./common";
import { UserResponseSchema } from "./auth";
import { AreaModel, ProjectModel, TaskModel } from "../generated/models";

export const CreateTaskRequestSchema = z.object({
  name: TaskModel.shape.name.min(1, "Название задачи обязательно"),
  description: TaskModel.shape.description,
  status: TaskStatusSchema.optional().default("ACTIVE"),
  priority: PrioritySchema.optional().default("MEDIUM"),
  startDate: TaskModel.shape.startDate,
  endDate: TaskModel.shape.endDate,
  allDay: TaskModel.shape.allDay.default(false),
  projectId: TaskModel.shape.projectId,
  areaId: TaskModel.shape.areaId,
  sectionId: TaskModel.shape.sectionId,
  parentTaskId: TaskModel.shape.parentTaskId,
});

export const UpdateTaskParamsSchema = z.object({
  id: TaskModel.shape.id,
});

export const UpdateTaskRequestSchema = z.object({
  name: TaskModel.shape.name.min(1, "Название задачи обязательно").optional(),
  description: TaskModel.shape.description.optional(),
  status: TaskStatusSchema.optional(),
  priority: PrioritySchema.optional(),
  startDate: TaskModel.shape.startDate.optional(),
  endDate: TaskModel.shape.endDate.optional(),
  allDay: TaskModel.shape.allDay.optional(),
  projectId: TaskModel.shape.projectId.optional(),
  areaId: TaskModel.shape.areaId.optional(),
  sectionId: TaskModel.shape.sectionId.optional(),
  parentTaskId: TaskModel.shape.parentTaskId.optional(),
});

export const TaskResponseSchema = z.object({
  id: TaskModel.shape.id,
  name: TaskModel.shape.name,
  description: TaskModel.shape.description,
  type: TaskModel.shape.type,
  status: TaskStatusSchema.optional(),
  priority: PrioritySchema.optional(),
  startDate: TaskModel.shape.startDate,
  endDate: TaskModel.shape.endDate,
  allDay: TaskModel.shape.allDay,
  position: TaskModel.shape.position,
  sort: TaskModel.shape.sort,
  createdAt: TaskModel.shape.createdAt,
  updatedAt: TaskModel.shape.updatedAt,
  userId: TaskModel.shape.userId,
  projectId: TaskModel.shape.projectId,
  areaId: TaskModel.shape.areaId,
  sectionId: TaskModel.shape.sectionId,
  parentTaskId: TaskModel.shape.parentTaskId,
  calendarId: TaskModel.shape.calendarId,
  recurrenceId: TaskModel.shape.recurrenceId,
  syncId: TaskModel.shape.syncId,
  lastSync: TaskModel.shape.lastSync,
  isDeleted: TaskModel.shape.isDeleted,
  version: TaskModel.shape.version,
  user: UserResponseSchema.optional(),
  project: z
    .object({
      id: ProjectModel.shape.id,
      name: ProjectModel.shape.name,
      description: ProjectModel.shape.description,
      color: ProjectModel.shape.color,
      createdAt: ProjectModel.shape.createdAt,
      updatedAt: ProjectModel.shape.updatedAt,
      userId: ProjectModel.shape.userId,
      syncId: ProjectModel.shape.syncId,
      lastSync: ProjectModel.shape.lastSync,
      isDeleted: ProjectModel.shape.isDeleted,
      version: ProjectModel.shape.version,
    })
    .optional(),
  area: z
    .object({
      id: AreaModel.shape.id,
      name: AreaModel.shape.name,
      description: AreaModel.shape.description,
      color: AreaModel.shape.color,
      position: AreaModel.shape.position,
      createdAt: AreaModel.shape.createdAt,
      updatedAt: AreaModel.shape.updatedAt,
      userId: AreaModel.shape.userId,
      syncId: AreaModel.shape.syncId,
      lastSync: AreaModel.shape.lastSync,
      isDeleted: AreaModel.shape.isDeleted,
      version: AreaModel.shape.version,
    })
    .optional(),
});

export const TaskParamsSchema = z.object({
  status: TaskStatusSchema.optional(),
  priority: PrioritySchema.optional(),
  projectId: TaskModel.shape.projectId.optional(),
});

export const DeleteTaskParamsSchema = z.object({
  id: TaskModel.shape.id,
});

export type CreateTaskRequest = z.infer<typeof CreateTaskRequestSchema>;
export type UpdateTaskRequest = z.infer<typeof UpdateTaskRequestSchema>;
export type TaskResponse = z.infer<typeof TaskResponseSchema>;
export type TaskParams = z.infer<typeof TaskParamsSchema>;
export type UpdateTaskParams = z.infer<typeof UpdateTaskParamsSchema>;
export type DeleteTaskParams = z.infer<typeof DeleteTaskParamsSchema>;
