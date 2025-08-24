import * as z from "zod";
import { CompleteTask } from "./index";
export declare const CalendarModel: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    syncId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastSync: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    isDeleted: z.ZodBoolean;
    version: z.ZodNumber;
}, z.core.$strip>;
export interface CompleteCalendar extends z.infer<typeof CalendarModel> {
    tasks: CompleteTask[];
}
/**
 * RelatedCalendarModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedCalendarModel: z.ZodSchema<CompleteCalendar>;
//# sourceMappingURL=calendar.d.ts.map