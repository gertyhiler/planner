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
//# sourceMappingURL=common.js.map