import * as z from "zod";

import {
  CompleteTasks,
  CompleteUser,
  RelatedTasksModel,
  RelatedUserModel,
} from "./index";

export const CalendarsModel = z.object({
  id: z.string(),
  created_at: z.date().nullish(),
  updated_at: z.date().nullish(),
  name: z.string().nullish(),
  description: z.string().nullish(),
  color: z.string().nullish(),
  owner_id: z.string().nullish(),
});

export interface CompleteCalendars extends z.infer<typeof CalendarsModel> {
  User?: CompleteUser | null;
  Tasks: CompleteTasks[];
}

/**
 * RelatedCalendarsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCalendarsModel: z.ZodSchema<CompleteCalendars> = z.lazy(() =>
  CalendarsModel.extend({
    User: RelatedUserModel.nullish(),
    Tasks: RelatedTasksModel.array(),
  })
);
