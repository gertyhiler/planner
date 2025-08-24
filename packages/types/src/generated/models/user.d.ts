import * as z from "zod";
import { CompleteTask, CompleteProject, CompleteArea, CompleteAuthSession, CompleteOAuthProvider } from "./index";
export declare const UserModel: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    password: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    emailVerified: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    emailVerificationToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    passwordResetToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    passwordResetExpires: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
}, z.core.$strip>;
export interface CompleteUser extends z.infer<typeof UserModel> {
    tasks: CompleteTask[];
    projects: CompleteProject[];
    areas: CompleteArea[];
    authSessions: CompleteAuthSession[];
    oauthProviders: CompleteOAuthProvider[];
}
/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedUserModel: z.ZodSchema<CompleteUser>;
//# sourceMappingURL=user.d.ts.map