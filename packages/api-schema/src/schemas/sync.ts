import { z } from "zod";

export const SyncOperationSchema = z.object({
  id: z.string(),
  entityType: z.string(),
  operation: z.enum(["CREATE", "UPDATE", "DELETE"]),
  // data: z.record(z.string(), z.unknown()),
});

export const UploadChangesRequestSchema = z.object({
  operations: z.array(SyncOperationSchema),
});

export const UploadChangesResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export const SyncChangeSchema = z.object({
  id: z.string(),
  entityType: z.string(),
  operation: z.string(),
  // data: z.record(z.string(), z.unknown()),
});

export const DownloadChangesRequestSchema = z.object({
  lastSync: z.date().optional(),
});

export const DownloadChangesResponseSchema = z.object({
  changes: z.array(SyncChangeSchema),
  lastSync: z.string(),
});

export const SyncStatusResponseSchema = z.object({
  status: z.string(),
  lastSync: z.string(),
  pendingChanges: z.number(),
});

export type SyncOperation = z.infer<typeof SyncOperationSchema>;
export type UploadChangesRequest = z.infer<typeof UploadChangesRequestSchema>;
export type SyncChange = z.infer<typeof SyncChangeSchema>;
export type DownloadChangesResponse = z.infer<
  typeof DownloadChangesResponseSchema
>;
export type SyncStatusResponse = z.infer<typeof SyncStatusResponseSchema>;
