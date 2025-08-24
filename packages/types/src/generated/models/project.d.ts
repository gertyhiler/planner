import * as z from "zod";
import { CompleteUser, CompleteTask, CompleteSection } from "./index";
export declare const ProjectModel: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    userId: z.ZodString;
    syncId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastSync: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    isDeleted: z.ZodBoolean;
    version: z.ZodNumber;
}, z.core.$strip>;
export interface CompleteProject extends z.infer<typeof ProjectModel> {
    user: CompleteUser;
    tasks: CompleteTask[];
    sections: CompleteSection[];
}
/**
 * RelatedProjectModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedProjectModel: z.ZodSchema<CompleteProject>;
//# sourceMappingURL=project.d.ts.map