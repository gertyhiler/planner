import { z } from "zod";
export declare const TaskStatusSchema: z.ZodEnum<{
    ACTIVE: "ACTIVE";
    COMPLETED: "COMPLETED";
    ARCHIVED: "ARCHIVED";
    CANCELLED: "CANCELLED";
}>;
export declare const PrioritySchema: z.ZodEnum<{
    LOW: "LOW";
    MEDIUM: "MEDIUM";
    HIGH: "HIGH";
    URGENT: "URGENT";
}>;
export declare const ErrorResponseSchema: z.ZodObject<{
    error: z.ZodString;
    message: z.ZodString;
    statusCode: z.ZodNumber;
}, z.core.$strip>;
export type TaskStatus = z.infer<typeof TaskStatusSchema>;
export type Priority = z.infer<typeof PrioritySchema>;
export type ErrorResponse = z.infer<typeof ErrorResponseSchema>;
//# sourceMappingURL=common.d.ts.map