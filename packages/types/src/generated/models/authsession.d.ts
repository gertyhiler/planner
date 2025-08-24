import * as z from "zod";
import { CompleteUser } from "./index";
export declare const AuthSessionModel: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    token: z.ZodString;
    expires: z.ZodDate;
    createdAt: z.ZodDate;
}, z.core.$strip>;
export interface CompleteAuthSession extends z.infer<typeof AuthSessionModel> {
    user: CompleteUser;
}
/**
 * RelatedAuthSessionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedAuthSessionModel: z.ZodSchema<CompleteAuthSession>;
//# sourceMappingURL=authsession.d.ts.map