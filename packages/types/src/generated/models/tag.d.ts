import * as z from "zod";
import { CompleteTask } from "./index";
export declare const TagModel: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sort: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    syncId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastSync: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    isDeleted: z.ZodBoolean;
    version: z.ZodNumber;
}, z.core.$strip>;
export interface CompleteTag extends z.infer<typeof TagModel> {
    tasks: CompleteTask[];
}
/**
 * RelatedTagModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedTagModel: z.ZodSchema<CompleteTag>;
//# sourceMappingURL=tag.d.ts.map