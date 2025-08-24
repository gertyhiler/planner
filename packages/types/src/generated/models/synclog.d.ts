import * as z from "zod";
export declare const SyncLogModel: z.ZodObject<{
    id: z.ZodString;
    entityId: z.ZodString;
    entityType: z.ZodString;
    operation: z.ZodString;
    data: z.ZodString;
    timestamp: z.ZodDate;
    synced: z.ZodBoolean;
}, z.core.$strip>;
//# sourceMappingURL=synclog.d.ts.map