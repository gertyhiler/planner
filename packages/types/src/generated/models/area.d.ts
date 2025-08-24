import * as z from "zod";
import { CompleteUser, CompleteTask } from "./index";
export declare const AreaModel: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    position: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    userId: z.ZodString;
    syncId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastSync: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    isDeleted: z.ZodBoolean;
    version: z.ZodNumber;
}, z.core.$strip>;
export interface CompleteArea extends z.infer<typeof AreaModel> {
    user: CompleteUser;
    tasks: CompleteTask[];
}
/**
 * RelatedAreaModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedAreaModel: z.ZodSchema<CompleteArea>;
//# sourceMappingURL=area.d.ts.map