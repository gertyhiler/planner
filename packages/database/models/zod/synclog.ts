import * as z from "zod"
import * as imports from "../../prisma/null"

export const SyncLogModel = z.object({
  id: z.string(),
  entityId: z.string(),
  entityType: z.string(),
  operation: z.string(),
  data: z.string(),
  timestamp: z.date(),
  synced: z.boolean(),
})
