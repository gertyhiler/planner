import * as z from "zod";

import {
  CompleteAreas,
  CompleteCalendars,
  CompleteTasks,
  RelatedAreasModel,
  RelatedCalendarsModel,
  RelatedTasksModel,
} from "./index";

export const UsersModel = z.object({
  id: z.number().int(),
  created_at: z.date().nullish(),
  updated_at: z.date().nullish(),
  name: z.string().nullish(),
});

export interface CompleteUsers extends z.infer<typeof UsersModel> {
  Areas: CompleteAreas[];
  Calendars: CompleteCalendars[];
  Tasks: CompleteTasks[];
}

/**
 * RelatedUsersModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUsersModel: z.ZodSchema<CompleteUsers> = z.lazy(() =>
  UsersModel.extend({
    Areas: RelatedAreasModel.array(),
    Calendars: RelatedCalendarsModel.array(),
    Tasks: RelatedTasksModel.array(),
  })
);
