import * as z from "zod";
import { RelatedUserModel, RelatedTaskModel, RelatedSectionModel } from "./index";
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
});
/**
 * RelatedProjectModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedProjectModel = z.lazy(() => ProjectModel.extend({
    user: RelatedUserModel,
    tasks: RelatedTaskModel.array(),
    sections: RelatedSectionModel.array(),
}));
//# sourceMappingURL=project.js.map