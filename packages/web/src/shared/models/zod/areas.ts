import * as z from "zod";

import {
  CompleteTasks,
  CompleteUser,
  RelatedTasksModel,
  RelatedUserModel,
} from "./index";

export const AreasModel = z.object({
  id: z.string(),
  sort: z.number().int().nullish(),
  user_created: z.string().nullish(),
  created_at: z.date().nullish(),
  user_updated: z.string().nullish(),
  updated_at: z.date().nullish(),
  name: z.string().nullish(),
  description: z.string().nullish(),
  owner_id: z.string().nullish(),
  position: z.number().int().nullish(),
});

export interface CompleteAreas extends z.infer<typeof AreasModel> {
  User?: CompleteUser | null;
  Tasks: CompleteTasks[];
}

/**
 * RelatedAreasModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedAreasModel: z.ZodSchema<CompleteAreas> = z.lazy(() =>
  AreasModel.extend({
    User: RelatedUserModel.nullish(),
    Tasks: RelatedTasksModel.array(),
  })
);
