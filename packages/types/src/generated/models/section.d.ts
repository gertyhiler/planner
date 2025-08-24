import * as z from "zod";
import { CompleteProject, CompleteTask } from "./index";
export declare const SectionModel: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    position: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    projectId: z.ZodString;
    syncId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastSync: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    isDeleted: z.ZodBoolean;
    version: z.ZodNumber;
}, z.core.$strip>;
export interface CompleteSection extends z.infer<typeof SectionModel> {
    project: CompleteProject;
    tasks: CompleteTask[];
}
/**
 * RelatedSectionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedSectionModel: z.ZodSchema<CompleteSection>;
//# sourceMappingURL=section.d.ts.map