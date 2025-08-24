import * as z from "zod";
import { CompleteUser } from "./index";
export declare const OAuthProviderModel: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    provider: z.ZodString;
    providerUserId: z.ZodString;
    accessToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    refreshToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export interface CompleteOAuthProvider extends z.infer<typeof OAuthProviderModel> {
    user: CompleteUser;
}
/**
 * RelatedOAuthProviderModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedOAuthProviderModel: z.ZodSchema<CompleteOAuthProvider>;
//# sourceMappingURL=oauthprovider.d.ts.map