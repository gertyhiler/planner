import * as z from "zod";

import { CompleteTasks, RelatedTasksModel } from "./index";

// Helper schema for JSON fields
type Literal = boolean | number | string;
type Json = Literal | { [key: string]: Json } | Json[];
const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodSchema<Json> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)])
);

export const RecurrencesModel = z.object({
  id: z.string(),
  task_id: z.string().nullish(),
  frequency: z.string().nullish(),
  interval: z.number().int().nullish(),
  days_of_week: jsonSchema,
  end_date: z.date().nullish(),
  notification_times: jsonSchema,
});

export interface CompleteRecurrences extends z.infer<typeof RecurrencesModel> {
  Tasks_Recurrences_task_idToTasks?: CompleteTasks | null;
  Tasks_Tasks_recurrence_idToRecurrences: CompleteTasks[];
}

/**
 * RelatedRecurrencesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedRecurrencesModel: z.ZodSchema<CompleteRecurrences> = z.lazy(() =>
  RecurrencesModel.extend({
    Tasks_Recurrences_task_idToTasks: RelatedTasksModel.nullish(),
    Tasks_Tasks_recurrence_idToRecurrences: RelatedTasksModel.array(),
  })
);
