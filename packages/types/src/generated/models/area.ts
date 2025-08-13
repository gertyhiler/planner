import * as z from "zod"
import { CompleteUser, RelatedUserModel, CompleteTask, RelatedTaskModel } from "./index"

export const AreaModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  color: z.string().nullish(),
  position: z.number().int().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  syncId: z.string().nullish(),
  lastSync: z.date().nullish(),
  isDeleted: z.boolean(),
  version: z.number().int(),
})

export interface CompleteArea extends z.infer<typeof AreaModel> {
  user: CompleteUser
  tasks: CompleteTask[]
}

/**
 * RelatedAreaModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAreaModel: z.ZodSchema<CompleteArea> = z.lazy(() => AreaModel.extend({
  user: RelatedUserModel,
  tasks: RelatedTaskModel.array(),
}))
