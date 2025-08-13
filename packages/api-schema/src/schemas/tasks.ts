import { z } from "zod";
import { TaskStatusSchema, PrioritySchema } from "./common";
import { UserResponseSchema } from "./auth";

export const CreateTaskRequestSchema = z.object({
  name: z.string().min(1, "Название задачи обязательно"),
  description: z.string().optional(),
  status: TaskStatusSchema.optional().default("ACTIVE"),
  priority: PrioritySchema.optional().default("MEDIUM"),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  allDay: z.boolean().optional().default(false),
  projectId: z.string().optional(),
  areaId: z.string().optional(),
  sectionId: z.string().optional(),
  parentTaskId: z.string().optional(),
});

export const UpdateTaskParamsSchema = z.object({
  id: z.string(),
});

export const UpdateTaskRequestSchema = z.object({
  name: z.string().min(1, "Название задачи обязательно").optional(),
  description: z.string().optional(),
  status: TaskStatusSchema.optional(),
  priority: PrioritySchema.optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  allDay: z.boolean().optional(),
  projectId: z.string().optional(),
  areaId: z.string().optional(),
  sectionId: z.string().optional(),
  parentTaskId: z.string().optional(),
});

export const TaskResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  type: z.string().nullable(),
  status: z.string(),
  priority: z.string(),
  startDate: z.string().nullable(),
  endDate: z.string().nullable(),
  allDay: z.boolean(),
  position: z.number().nullable(),
  sort: z.number().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  userId: z.string(),
  projectId: z.string().nullable(),
  areaId: z.string().nullable(),
  sectionId: z.string().nullable(),
  parentTaskId: z.string().nullable(),
  calendarId: z.string().nullable(),
  recurrenceId: z.string().nullable(),
  syncId: z.string().nullable(),
  lastSync: z.string().nullable(),
  isDeleted: z.boolean(),
  version: z.number(),
  user: UserResponseSchema.optional(),
  project: z
    .object({
      id: z.string(),
      name: z.string(),
      description: z.string().nullable(),
      color: z.string().nullable(),
      createdAt: z.string(),
      updatedAt: z.string(),
      userId: z.string(),
      syncId: z.string().nullable(),
      lastSync: z.string().nullable(),
      isDeleted: z.boolean(),
      version: z.number(),
    })
    .optional(),
  area: z
    .object({
      id: z.string(),
      name: z.string(),
      description: z.string().nullable(),
      color: z.string().nullable(),
      position: z.number().nullable(),
      createdAt: z.string(),
      updatedAt: z.string(),
      userId: z.string(),
      syncId: z.string().nullable(),
      lastSync: z.string().nullable(),
      isDeleted: z.boolean(),
      version: z.number(),
    })
    .optional(),
});

export const TaskParamsSchema = z.object({
  status: TaskStatusSchema.optional(),
  priority: PrioritySchema.optional(),
  projectId: z.string().optional(),
});

export const DeleteTaskParamsSchema = z.object({
  id: z.string(),
});

export type CreateTaskRequest = z.infer<typeof CreateTaskRequestSchema>;
export type UpdateTaskRequest = z.infer<typeof UpdateTaskRequestSchema>;
export type TaskResponse = z.infer<typeof TaskResponseSchema>;
export type TaskParams = z.infer<typeof TaskParamsSchema>;
export type UpdateTaskParams = z.infer<typeof UpdateTaskParamsSchema>;
export type DeleteTaskParams = z.infer<typeof DeleteTaskParamsSchema>;
