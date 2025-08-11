import * as z from "zod";

import { CompleteTasks, RelatedTasksModel } from "./index";

export const SectionsModel = z.object({
  id: z.string(),
  project_id: z.string().nullish(),
  name: z.string().nullish(),
  position: z.number().int().nullish(),
});

export interface CompleteSections extends z.infer<typeof SectionsModel> {
  Tasks_Sections_project_idToTasks?: CompleteTasks | null;
  Tasks_Tasks_section_idToSections: CompleteTasks[];
}

/**
 * RelatedSectionsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedSectionsModel: z.ZodSchema<CompleteSections> = z.lazy(() =>
  SectionsModel.extend({
    Tasks_Sections_project_idToTasks: RelatedTasksModel.nullish(),
    Tasks_Tasks_section_idToSections: RelatedTasksModel.array(),
  })
);
