import * as z from "zod";
import { CompleteTask } from "./index";
export declare const RecurrenceModel: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodString;
    interval: z.ZodNumber;
    endDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    syncId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastSync: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    isDeleted: z.ZodBoolean;
    version: z.ZodNumber;
}, z.core.$strip>;
export interface CompleteRecurrence extends z.infer<typeof RecurrenceModel> {
    tasks: CompleteTask[];
}
/**
 * RelatedRecurrenceModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedRecurrenceModel: z.ZodSchema<CompleteRecurrence>;
//# sourceMappingURL=recurrence.d.ts.map