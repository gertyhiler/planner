import * as z from "zod";
import { CompleteUser, CompleteProject, CompleteArea, CompleteSection, CompleteCalendar, CompleteRecurrence, CompleteChecklistItem, CompleteTag } from "./index";
export declare const TaskModel: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodString;
    priority: z.ZodString;
    startDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    endDate: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    allDay: z.ZodBoolean;
    position: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    sort: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    userId: z.ZodString;
    projectId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    areaId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sectionId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    parentTaskId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    calendarId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    recurrenceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    syncId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastSync: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    isDeleted: z.ZodBoolean;
    version: z.ZodNumber;
}, z.core.$strip>;
export interface CompleteTask extends z.infer<typeof TaskModel> {
    user: CompleteUser;
    project?: CompleteProject | null;
    area?: CompleteArea | null;
    section?: CompleteSection | null;
    parentTask?: CompleteTask | null;
    subtasks: CompleteTask[];
    calendar?: CompleteCalendar | null;
    recurrence?: CompleteRecurrence | null;
    checklistItems: CompleteChecklistItem[];
    tags: CompleteTag[];
}
/**
 * RelatedTaskModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export declare const RelatedTaskModel: z.ZodSchema<CompleteTask>;
//# sourceMappingURL=task.d.ts.map