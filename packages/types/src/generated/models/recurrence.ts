import * as z from "zod"
import { CompleteTask, RelatedTaskModel } from "./index"

export const RecurrenceModel = z.object({
  id: z.string(),
  type: z.string(),
  interval: z.number().int(),
  endDate: z.date().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  syncId: z.string().nullish(),
  lastSync: z.date().nullish(),
  isDeleted: z.boolean(),
  version: z.number().int(),
})

export interface CompleteRecurrence extends z.infer<typeof RecurrenceModel> {
  tasks: CompleteTask[]
}

/**
 * RelatedRecurrenceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedRecurrenceModel: z.ZodSchema<CompleteRecurrence> = z.lazy(() => RecurrenceModel.extend({
  tasks: RelatedTaskModel.array(),
}))
