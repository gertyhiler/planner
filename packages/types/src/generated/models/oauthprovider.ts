import * as z from "zod"
import { CompleteUser, RelatedUserModel } from "./index"

export const OAuthProviderModel = z.object({
  id: z.string(),
  userId: z.string(),
  provider: z.string(),
  providerUserId: z.string(),
  accessToken: z.string().nullish(),
  refreshToken: z.string().nullish(),
  expiresAt: z.date().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export interface CompleteOAuthProvider extends z.infer<typeof OAuthProviderModel> {
  user: CompleteUser
}

/**
 * RelatedOAuthProviderModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedOAuthProviderModel: z.ZodSchema<CompleteOAuthProvider> = z.lazy(() => OAuthProviderModel.extend({
  user: RelatedUserModel,
}))
