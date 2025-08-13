import * as z from "zod"
import { CompleteTask, RelatedTaskModel, CompleteProject, RelatedProjectModel, CompleteArea, RelatedAreaModel, CompleteAccount, RelatedAccountModel, CompleteSession, RelatedSessionModel } from "./index"

export const UserModel = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().nullish(),
  image: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  tasks: CompleteTask[]
  projects: CompleteProject[]
  areas: CompleteArea[]
  accounts: CompleteAccount[]
  sessions: CompleteSession[]
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() => UserModel.extend({
  tasks: RelatedTaskModel.array(),
  projects: RelatedProjectModel.array(),
  areas: RelatedAreaModel.array(),
  accounts: RelatedAccountModel.array(),
  sessions: RelatedSessionModel.array(),
}))
