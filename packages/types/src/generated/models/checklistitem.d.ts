import * as z from "zod";
import { CompleteTask } from "./index";
export declare const ChecklistItemModel: z.ZodObject<{
    id: z.ZodString;
    text: z.ZodString;
    completed: z.ZodBoolean;
    position: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    taskId: z.ZodString;
    syncId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastSync: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    isDeleted: z.ZodBoolean;
    version: z.ZodNumber;
}, z.core.$strip>;
export interface CompleteChecklistItem extends z.infer<typeof ChecklistItemModel> {
    task: CompleteTask;
}
/**
 * RelatedChecklistItemModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedChecklistItemModel: z.ZodSchema<CompleteChecklistItem>;
//# sourceMappingURL=checklistitem.d.ts.map