import * as z from "zod";

import {
  CompleteAreas,
  CompleteCalendars,
  CompleteChecklistItems,
  CompleteRecurrences,
  CompleteSections,
  CompleteTags,
  CompleteUser,
  RelatedAreasModel,
  RelatedCalendarsModel,
  RelatedChecklistItemsModel,
  RelatedRecurrencesModel,
  RelatedSectionsModel,
  RelatedTagsModel,
  RelatedUserModel,
} from "./index";

export const TasksModel = z.object({
  id: z.string(),
  user_created: z.string().nullish(),
  created_at: z.date().nullish(),
  user_updated: z.string().nullish(),
  updated_at: z.date().nullish(),
  name: z.string().nullish(),
  type: z.string().nullish(),
  description: z.string().nullish(),
  area_id: z.string().nullish(),
  start_date: z.date().nullish(),
  end_date: z.date().nullish(),
  all_day: z.boolean().nullish(),
  position: z.number().int().nullish(),
  calendar_id: z.string().nullish(),
  recurrence_id: z.string().nullish(),
  parent_id: z.string().nullish(),
  status: z.string().nullish(),
  section_id: z.string().nullish(),
  checklist_id: z.string().nullish(),
  owner_id: z.string().nullish(),
});

export interface CompleteTasks extends z.infer<typeof TasksModel> {
  ChecklistItems_ChecklistItems_task_idToTasks: CompleteChecklistItems[];
  Recurrences_Recurrences_task_idToTasks: CompleteRecurrences[];
  Sections_Sections_project_idToTasks: CompleteSections[];
  Tags: CompleteTags[];
  Areas?: CompleteAreas | null;
  Calendars?: CompleteCalendars | null;
  ChecklistItems_Tasks_checklist_idToChecklistItems?: CompleteChecklistItems | null;
  User?: CompleteUser | null;
  Tasks?: CompleteTasks | null;
  other_Tasks: CompleteTasks[];
  Recurrences_Tasks_recurrence_idToRecurrences?: CompleteRecurrences | null;
  Sections_Tasks_section_idToSections?: CompleteSections | null;
}

/**
 * RelatedTasksModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTasksModel: z.ZodSchema<CompleteTasks> = z.lazy(() =>
  TasksModel.extend({
    ChecklistItems_ChecklistItems_task_idToTasks: RelatedChecklistItemsModel.array(),
    Recurrences_Recurrences_task_idToTasks: RelatedRecurrencesModel.array(),
    Sections_Sections_project_idToTasks: RelatedSectionsModel.array(),
    Tags: RelatedTagsModel.array(),
    Areas: RelatedAreasModel.nullish(),
    Calendars: RelatedCalendarsModel.nullish(),
    ChecklistItems_Tasks_checklist_idToChecklistItems:
      RelatedChecklistItemsModel.nullish(),
    User: RelatedUserModel.nullish(),
    Tasks: RelatedTasksModel.nullish(),
    other_Tasks: RelatedTasksModel.array(),
    Recurrences_Tasks_recurrence_idToRecurrences: RelatedRecurrencesModel.nullish(),
    Sections_Tasks_section_idToSections: RelatedSectionsModel.nullish(),
  })
);
