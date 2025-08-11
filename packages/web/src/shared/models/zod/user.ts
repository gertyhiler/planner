import * as z from "zod";

import {
  CompleteAccount,
  CompleteAreas,
  CompleteAuthenticator,
  CompleteCalendars,
  CompleteSession,
  CompleteTasks,
  RelatedAccountModel,
  RelatedAreasModel,
  RelatedAuthenticatorModel,
  RelatedCalendarsModel,
  RelatedSessionModel,
  RelatedTasksModel,
} from "./index";

export const UserModel = z.object({
  id: z.string(),
  name: z.string().nullish(),
  email: z.string(),
  emailVerified: z.date().nullish(),
  image: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export interface CompleteUser extends z.infer<typeof UserModel> {
  accounts: CompleteAccount[];
  Authenticator: CompleteAuthenticator[];
  sessions: CompleteSession[];
  Areas: CompleteAreas[];
  Calendars: CompleteCalendars[];
  Tasks: CompleteTasks[];
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() =>
  UserModel.extend({
    accounts: RelatedAccountModel.array(),
    Authenticator: RelatedAuthenticatorModel.array(),
    sessions: RelatedSessionModel.array(),
    Areas: RelatedAreasModel.array(),
    Calendars: RelatedCalendarsModel.array(),
    Tasks: RelatedTasksModel.array(),
  })
);
