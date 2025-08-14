
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  name: 'name',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  password: 'password',
  emailVerified: 'emailVerified',
  emailVerificationToken: 'emailVerificationToken',
  passwordResetToken: 'passwordResetToken',
  passwordResetExpires: 'passwordResetExpires'
};

exports.Prisma.TaskScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  type: 'type',
  status: 'status',
  priority: 'priority',
  startDate: 'startDate',
  endDate: 'endDate',
  allDay: 'allDay',
  position: 'position',
  sort: 'sort',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId',
  projectId: 'projectId',
  areaId: 'areaId',
  sectionId: 'sectionId',
  parentTaskId: 'parentTaskId',
  calendarId: 'calendarId',
  recurrenceId: 'recurrenceId',
  syncId: 'syncId',
  lastSync: 'lastSync',
  isDeleted: 'isDeleted',
  version: 'version'
};

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  color: 'color',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId',
  syncId: 'syncId',
  lastSync: 'lastSync',
  isDeleted: 'isDeleted',
  version: 'version'
};

exports.Prisma.AreaScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  color: 'color',
  position: 'position',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId',
  syncId: 'syncId',
  lastSync: 'lastSync',
  isDeleted: 'isDeleted',
  version: 'version'
};

exports.Prisma.SectionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  position: 'position',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  projectId: 'projectId',
  syncId: 'syncId',
  lastSync: 'lastSync',
  isDeleted: 'isDeleted',
  version: 'version'
};

exports.Prisma.CalendarScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  color: 'color',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  syncId: 'syncId',
  lastSync: 'lastSync',
  isDeleted: 'isDeleted',
  version: 'version'
};

exports.Prisma.ChecklistItemScalarFieldEnum = {
  id: 'id',
  text: 'text',
  completed: 'completed',
  position: 'position',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  taskId: 'taskId',
  syncId: 'syncId',
  lastSync: 'lastSync',
  isDeleted: 'isDeleted',
  version: 'version'
};

exports.Prisma.TagScalarFieldEnum = {
  id: 'id',
  name: 'name',
  color: 'color',
  sort: 'sort',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  syncId: 'syncId',
  lastSync: 'lastSync',
  isDeleted: 'isDeleted',
  version: 'version'
};

exports.Prisma.RecurrenceScalarFieldEnum = {
  id: 'id',
  type: 'type',
  interval: 'interval',
  endDate: 'endDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  syncId: 'syncId',
  lastSync: 'lastSync',
  isDeleted: 'isDeleted',
  version: 'version'
};

exports.Prisma.SyncLogScalarFieldEnum = {
  id: 'id',
  entityId: 'entityId',
  entityType: 'entityType',
  operation: 'operation',
  data: 'data',
  timestamp: 'timestamp',
  synced: 'synced'
};

exports.Prisma.AuthSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  token: 'token',
  expires: 'expires',
  createdAt: 'createdAt'
};

exports.Prisma.OAuthProviderScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  provider: 'provider',
  providerUserId: 'providerUserId',
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Task: 'Task',
  Project: 'Project',
  Area: 'Area',
  Section: 'Section',
  Calendar: 'Calendar',
  ChecklistItem: 'ChecklistItem',
  Tag: 'Tag',
  Recurrence: 'Recurrence',
  SyncLog: 'SyncLog',
  AuthSession: 'AuthSession',
  OAuthProvider: 'OAuthProvider'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
