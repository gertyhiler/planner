import * as z from "zod"
import { CompleteTask, RelatedTaskModel, CompleteProject, RelatedProjectModel, CompleteArea, RelatedAreaModel, CompleteAuthSession, RelatedAuthSessionModel, CompleteOAuthProvider, RelatedOAuthProviderModel } from "./index"

export const UserModel = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().nullish(),
  image: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  password: z.string().nullish(),
  emailVerified: z.date().nullish(),
  emailVerificationToken: z.string().nullish(),
  passwordResetToken: z.string().nullish(),
  passwordResetExpires: z.date().nullish(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  tasks: CompleteTask[]
  projects: CompleteProject[]
  areas: CompleteArea[]
  authSessions: CompleteAuthSession[]
  oauthProviders: CompleteOAuthProvider[]
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
  authSessions: RelatedAuthSessionModel.array(),
  oauthProviders: RelatedOAuthProviderModel.array(),
}))
