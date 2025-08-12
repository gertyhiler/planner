import { z } from "zod";
import { UserResponseSchema } from "./auth";
import { TaskResponseSchema } from "./tasks";

export const CreateProjectRequestSchema = z.object({
  name: z.string().min(1, "Название проекта обязательно"),
  description: z.string().optional(),
  color: z.string().optional(),
});

export const UpdateProjectRequestSchema = z.object({
  name: z.string().min(1, "Название проекта обязательно").optional(),
  description: z.string().optional(),
  color: z.string().optional(),
});

export const ProjectResponseSchema = z.object({
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
  user: UserResponseSchema.optional(),
  tasks: z.array(TaskResponseSchema).optional(),
});

export const ProjectParamsSchema = z.object({
  id: z.string(),
});

export const UpdateProjectParamsSchema = z.object({
  id: z.string(),
});

export const DeleteProjectParamsSchema = z.object({
  id: z.string(),
});

export type CreateProjectRequest = z.infer<typeof CreateProjectRequestSchema>;
export type UpdateProjectRequest = z.infer<typeof UpdateProjectRequestSchema>;
export type ProjectResponse = z.infer<typeof ProjectResponseSchema>;
export type ProjectParams = z.infer<typeof ProjectParamsSchema>;
export type UpdateProjectParams = z.infer<typeof UpdateProjectParamsSchema>;
