import * as z from "zod"
import { CompleteTask, RelatedTaskModel } from "./index"

export const CalendarModel = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullish(),
  color: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
  syncId: z.string().nullish(),
  lastSync: z.date().nullish(),
  isDeleted: z.boolean(),
  version: z.number().int(),
})

export interface CompleteCalendar extends z.infer<typeof CalendarModel> {
  tasks: CompleteTask[]
}

/**
 * RelatedCalendarModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCalendarModel: z.ZodSchema<CompleteCalendar> = z.lazy(() => CalendarModel.extend({
  tasks: RelatedTaskModel.array(),
}))
