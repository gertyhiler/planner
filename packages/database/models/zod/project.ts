import * as z from "zod"
import * as imports from "../../prisma/null"
import { CompleteUser, RelatedUserModel, CompleteTask, RelatedTaskModel, CompleteSection, RelatedSectionModel } from "./index"

export const ProjectModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  color: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  syncId: z.string().nullish(),
  lastSync: z.date().nullish(),
  isDeleted: z.boolean(),
  version: z.number().int(),
})

export interface CompleteProject extends z.infer<typeof ProjectModel> {
  user: CompleteUser
  tasks: CompleteTask[]
  sections: CompleteSection[]
}

/**
 * RelatedProjectModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProjectModel: z.ZodSchema<CompleteProject> = z.lazy(() => ProjectModel.extend({
  user: RelatedUserModel,
  tasks: RelatedTaskModel.array(),
  sections: RelatedSectionModel.array(),
}))
