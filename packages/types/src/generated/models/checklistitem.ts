import * as z from "zod"
import { CompleteTask, RelatedTaskModel } from "./index"

export const ChecklistItemModel = z.object({
  id: z.string(),
  text: z.string(),
  completed: z.boolean(),
  position: z.number().int().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  taskId: z.string(),
  syncId: z.string().nullish(),
  lastSync: z.date().nullish(),
  isDeleted: z.boolean(),
  version: z.number().int(),
})

export interface CompleteChecklistItem extends z.infer<typeof ChecklistItemModel> {
  task: CompleteTask
}

/**
 * RelatedChecklistItemModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedChecklistItemModel: z.ZodSchema<CompleteChecklistItem> = z.lazy(() => ChecklistItemModel.extend({
  task: RelatedTaskModel,
}))
