import * as z from "zod";
import { RelatedUserModel } from "./index";
export const AuthSessionModel = z.object({
    id: z.string(),
    userId: z.string(),
    token: z.string(),
    expires: z.date(),
    createdAt: z.date(),
});
/**
 * RelatedAuthSessionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAuthSessionModel = z.lazy(() => AuthSessionModel.extend({
    user: RelatedUserModel,
}));
//# sourceMappingURL=authsession.js.map