import * as z from "zod";

import { CompleteTasks, RelatedTasksModel } from "./index";

export const TagsModel = z.object({
  id: z.string(),
  sort: z.number().int().nullish(),
  user_created: z.string().nullish(),
  created_at: z.date().nullish(),
  user_updated: z.string().nullish(),
  updated_at: z.date().nullish(),
  name: z.string().nullish(),
  color: z.string().nullish(),
  task_ids: z.string().nullish(),
});

export interface CompleteTags extends z.infer<typeof TagsModel> {
  Tasks?: CompleteTasks | null;
}

/**
 * RelatedTagsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTagsModel: z.ZodSchema<CompleteTags> = z.lazy(() =>
  TagsModel.extend({
    Tasks: RelatedTasksModel.nullish(),
  })
);
