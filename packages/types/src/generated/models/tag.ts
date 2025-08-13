import * as z from "zod"
import { CompleteTask, RelatedTaskModel } from "./index"

export const TagModel = z.object({
  id: z.string(),
  name: z.string(),
  color: z.string().nullish(),
  sort: z.number().int().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  syncId: z.string().nullish(),
  lastSync: z.date().nullish(),
  isDeleted: z.boolean(),
  version: z.number().int(),
})

export interface CompleteTag extends z.infer<typeof TagModel> {
  tasks: CompleteTask[]
}

/**
 * RelatedTagModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTagModel: z.ZodSchema<CompleteTag> = z.lazy(() => TagModel.extend({
  tasks: RelatedTaskModel.array(),
}))
