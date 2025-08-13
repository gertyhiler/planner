import { z } from "zod";
import { UserResponseSchema } from "./auth";
import { TaskResponseSchema } from "./tasks";
import { ProjectModel } from "../generated/models";

export const CreateProjectRequestSchema = z.object({
  name: ProjectModel.shape.name.min(1, "Название проекта обязательно"),
  description: ProjectModel.shape.description,
  color: ProjectModel.shape.color,
});

export const UpdateProjectRequestSchema = z.object({
  name: ProjectModel.shape.name
    .min(1, "Название проекта обязательно")
    .optional(),
  description: ProjectModel.shape.description.optional(),
  color: ProjectModel.shape.color.optional(),
});

export const ProjectResponseSchema = z.object({
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
  user: UserResponseSchema.optional(),
  tasks: z.array(TaskResponseSchema).optional(),
});

export const ProjectParamsSchema = z.object({
  id: ProjectModel.shape.id,
});

export const UpdateProjectParamsSchema = z.object({
  id: ProjectModel.shape.id,
});

export const DeleteProjectParamsSchema = z.object({
  id: ProjectModel.shape.id,
});

export type CreateProjectRequest = z.infer<typeof CreateProjectRequestSchema>;
export type UpdateProjectRequest = z.infer<typeof UpdateProjectRequestSchema>;
export type ProjectResponse = z.infer<typeof ProjectResponseSchema>;
export type ProjectParams = z.infer<typeof ProjectParamsSchema>;
export type UpdateProjectParams = z.infer<typeof UpdateProjectParamsSchema>;
