import { z } from "zod";

export const TaskStatusSchema = z.enum([
  "ACTIVE",
  "COMPLETED",
  "ARCHIVED",
  "CANCELLED",
]);

export const PrioritySchema = z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]);

export const ErrorResponseSchema = z.object({
  error: z.string(),
  message: z.string(),
  statusCode: z.number(),
});

export type TaskStatus = z.infer<typeof TaskStatusSchema>;
export type Priority = z.infer<typeof PrioritySchema>;
export type ErrorResponse = z.infer<typeof ErrorResponseSchema>;
