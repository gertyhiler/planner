import * as z from "zod";

import { CompleteTasks, RelatedTasksModel } from "./index";

export const ChecklistItemsModel = z.object({
  id: z.string(),
  created_at: z.date().nullish(),
  updated_at: z.date().nullish(),
  position: z.number().int().nullish(),
  name: z.string().nullish(),
  status: z.boolean().nullish(),
  task_id: z.string().nullish(),
});

export interface CompleteChecklistItems extends z.infer<typeof ChecklistItemsModel> {
  Tasks_ChecklistItems_task_idToTasks?: CompleteTasks | null;
  Tasks_Tasks_checklist_idToChecklistItems: CompleteTasks[];
}

/**
 * RelatedChecklistItemsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedChecklistItemsModel: z.ZodSchema<CompleteChecklistItems> = z.lazy(
  () =>
    ChecklistItemsModel.extend({
      Tasks_ChecklistItems_task_idToTasks: RelatedTasksModel.nullish(),
      Tasks_Tasks_checklist_idToChecklistItems: RelatedTasksModel.array(),
    })
);
