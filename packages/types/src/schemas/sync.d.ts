import { z } from "zod";
export declare const SyncOperationSchema: z.ZodObject<{
    id: z.ZodString;
    entityType: z.ZodString;
    operation: z.ZodEnum<{
        CREATE: "CREATE";
        UPDATE: "UPDATE";
        DELETE: "DELETE";
    }>;
}, z.core.$strip>;
export declare const UploadChangesRequestSchema: z.ZodObject<{
    operations: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        entityType: z.ZodString;
        operation: z.ZodEnum<{
            CREATE: "CREATE";
            UPDATE: "UPDATE";
            DELETE: "DELETE";
        }>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const UploadChangesResponseSchema: z.ZodObject<{
    success: z.ZodBoolean;
    message: z.ZodString;
}, z.core.$strip>;
export declare const SyncChangeSchema: z.ZodObject<{
    id: z.ZodString;
    entityType: z.ZodString;
    operation: z.ZodString;
}, z.core.$strip>;
export declare const DownloadChangesRequestSchema: z.ZodObject<{
    lastSync: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export declare const DownloadChangesResponseSchema: z.ZodObject<{
    changes: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        entityType: z.ZodString;
        operation: z.ZodString;
    }, z.core.$strip>>;
    lastSync: z.ZodString;
}, z.core.$strip>;
export declare const SyncStatusResponseSchema: z.ZodObject<{
    status: z.ZodString;
    lastSync: z.ZodString;
    pendingChanges: z.ZodNumber;
}, z.core.$strip>;
export type SyncOperation = z.infer<typeof SyncOperationSchema>;
export type UploadChangesRequest = z.infer<typeof UploadChangesRequestSchema>;
export type SyncChange = z.infer<typeof SyncChangeSchema>;
export type DownloadChangesResponse = z.infer<typeof DownloadChangesResponseSchema>;
export type SyncStatusResponse = z.infer<typeof SyncStatusResponseSchema>;
//# sourceMappingURL=sync.d.ts.map