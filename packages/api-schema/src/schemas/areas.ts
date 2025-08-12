import { z } from "zod";
import { UserResponseSchema } from "./auth";
import { TaskResponseSchema } from "./tasks";

export const CreateAreaRequestSchema = z.object({
  name: z.string().min(1, "Название области обязательно"),
  description: z.string().optional(),
  color: z.string().optional(),
});

export const UpdateAreaRequestSchema = z.object({
  name: z.string().min(1, "Название области обязательно").optional(),
  description: z.string().optional(),
  color: z.string().optional(),
});

export const AreaResponseSchema = z.object({
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
  user: UserResponseSchema.optional(),
  tasks: z.array(TaskResponseSchema).optional(),
});

export const AreaParamsSchema = z.object({
  id: z.string(),
});

export const UpdateAreaParamsSchema = z.object({
  id: z.string(),
});

export const DeleteAreaParamsSchema = z.object({
  id: z.string(),
});

export type CreateAreaRequest = z.infer<typeof CreateAreaRequestSchema>;
export type UpdateAreaRequest = z.infer<typeof UpdateAreaRequestSchema>;
export type AreaResponse = z.infer<typeof AreaResponseSchema>;
