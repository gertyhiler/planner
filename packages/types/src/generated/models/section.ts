import * as z from "zod"
import { CompleteProject, RelatedProjectModel, CompleteTask, RelatedTaskModel } from "./index"

export const SectionModel = z.object({
  id: z.string(),
  name: z.string(),
  position: z.number().int().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  projectId: z.string(),
  syncId: z.string().nullish(),
  lastSync: z.date().nullish(),
  isDeleted: z.boolean(),
  version: z.number().int(),
})

export interface CompleteSection extends z.infer<typeof SectionModel> {
  project: CompleteProject
  tasks: CompleteTask[]
}

/**
 * RelatedSectionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSectionModel: z.ZodSchema<CompleteSection> = z.lazy(() => SectionModel.extend({
  project: RelatedProjectModel,
  tasks: RelatedTaskModel.array(),
}))
