import * as z from "zod";
import { RelatedUserModel, RelatedProjectModel, RelatedAreaModel, RelatedSectionModel, RelatedCalendarModel, RelatedRecurrenceModel, RelatedChecklistItemModel, RelatedTagModel } from "./index";
export const TaskModel = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullish(),
    type: z.string().nullish(),
    status: z.string(),
    priority: z.string(),
    startDate: z.date().nullish(),
    endDate: z.date().nullish(),
    allDay: z.boolean(),
    position: z.number().int().nullish(),
    sort: z.number().int().nullish(),
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.string(),
    projectId: z.string().nullish(),
    areaId: z.string().nullish(),
    sectionId: z.string().nullish(),
    parentTaskId: z.string().nullish(),
    calendarId: z.string().nullish(),
    recurrenceId: z.string().nullish(),
    syncId: z.string().nullish(),
    lastSync: z.date().nullish(),
    isDeleted: z.boolean(),
    version: z.number().int(),
});
/**
 * RelatedTaskModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTaskModel = z.lazy(() => TaskModel.extend({
    user: RelatedUserModel,
    project: RelatedProjectModel.nullish(),
    area: RelatedAreaModel.nullish(),
    section: RelatedSectionModel.nullish(),
    parentTask: RelatedTaskModel.nullish(),
    subtasks: RelatedTaskModel.array(),
    calendar: RelatedCalendarModel.nullish(),
    recurrence: RelatedRecurrenceModel.nullish(),
    checklistItems: RelatedChecklistItemModel.array(),
    tags: RelatedTagModel.array(),
}));
//# sourceMappingURL=task.js.map