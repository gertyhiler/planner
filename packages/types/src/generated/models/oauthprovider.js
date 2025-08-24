import * as z from "zod";
import { RelatedUserModel } from "./index";
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
});
/**
 * RelatedOAuthProviderModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedOAuthProviderModel = z.lazy(() => OAuthProviderModel.extend({
    user: RelatedUserModel,
}));
//# sourceMappingURL=oauthprovider.js.map