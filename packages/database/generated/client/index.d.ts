
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Area
 * 
 */
export type Area = $Result.DefaultSelection<Prisma.$AreaPayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model Calendar
 * 
 */
export type Calendar = $Result.DefaultSelection<Prisma.$CalendarPayload>
/**
 * Model ChecklistItem
 * 
 */
export type ChecklistItem = $Result.DefaultSelection<Prisma.$ChecklistItemPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Recurrence
 * 
 */
export type Recurrence = $Result.DefaultSelection<Prisma.$RecurrencePayload>
/**
 * Model SyncLog
 * 
 */
export type SyncLog = $Result.DefaultSelection<Prisma.$SyncLogPayload>
/**
 * Model AuthSession
 * 
 */
export type AuthSession = $Result.DefaultSelection<Prisma.$AuthSessionPayload>
/**
 * Model OAuthProvider
 * 
 */
export type OAuthProvider = $Result.DefaultSelection<Prisma.$OAuthProviderPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.area`: Exposes CRUD operations for the **Area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.AreaDelegate<ExtArgs>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs>;

  /**
   * `prisma.calendar`: Exposes CRUD operations for the **Calendar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Calendars
    * const calendars = await prisma.calendar.findMany()
    * ```
    */
  get calendar(): Prisma.CalendarDelegate<ExtArgs>;

  /**
   * `prisma.checklistItem`: Exposes CRUD operations for the **ChecklistItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChecklistItems
    * const checklistItems = await prisma.checklistItem.findMany()
    * ```
    */
  get checklistItem(): Prisma.ChecklistItemDelegate<ExtArgs>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs>;

  /**
   * `prisma.recurrence`: Exposes CRUD operations for the **Recurrence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recurrences
    * const recurrences = await prisma.recurrence.findMany()
    * ```
    */
  get recurrence(): Prisma.RecurrenceDelegate<ExtArgs>;

  /**
   * `prisma.syncLog`: Exposes CRUD operations for the **SyncLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncLogs
    * const syncLogs = await prisma.syncLog.findMany()
    * ```
    */
  get syncLog(): Prisma.SyncLogDelegate<ExtArgs>;

  /**
   * `prisma.authSession`: Exposes CRUD operations for the **AuthSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthSessions
    * const authSessions = await prisma.authSession.findMany()
    * ```
    */
  get authSession(): Prisma.AuthSessionDelegate<ExtArgs>;

  /**
   * `prisma.oAuthProvider`: Exposes CRUD operations for the **OAuthProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OAuthProviders
    * const oAuthProviders = await prisma.oAuthProvider.findMany()
    * ```
    */
  get oAuthProvider(): Prisma.OAuthProviderDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "task" | "project" | "area" | "section" | "calendar" | "checklistItem" | "tag" | "recurrence" | "syncLog" | "authSession" | "oAuthProvider"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Area: {
        payload: Prisma.$AreaPayload<ExtArgs>
        fields: Prisma.AreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findFirst: {
            args: Prisma.AreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findMany: {
            args: Prisma.AreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          create: {
            args: Prisma.AreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          createMany: {
            args: Prisma.AreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          delete: {
            args: Prisma.AreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          update: {
            args: Prisma.AreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          deleteMany: {
            args: Prisma.AreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.AreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      Calendar: {
        payload: Prisma.$CalendarPayload<ExtArgs>
        fields: Prisma.CalendarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalendarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalendarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          findFirst: {
            args: Prisma.CalendarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalendarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          findMany: {
            args: Prisma.CalendarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>[]
          }
          create: {
            args: Prisma.CalendarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          createMany: {
            args: Prisma.CalendarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalendarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>[]
          }
          delete: {
            args: Prisma.CalendarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          update: {
            args: Prisma.CalendarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          deleteMany: {
            args: Prisma.CalendarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalendarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CalendarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarPayload>
          }
          aggregate: {
            args: Prisma.CalendarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendar>
          }
          groupBy: {
            args: Prisma.CalendarGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalendarGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalendarCountArgs<ExtArgs>
            result: $Utils.Optional<CalendarCountAggregateOutputType> | number
          }
        }
      }
      ChecklistItem: {
        payload: Prisma.$ChecklistItemPayload<ExtArgs>
        fields: Prisma.ChecklistItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChecklistItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChecklistItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>
          }
          findFirst: {
            args: Prisma.ChecklistItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChecklistItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>
          }
          findMany: {
            args: Prisma.ChecklistItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>[]
          }
          create: {
            args: Prisma.ChecklistItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>
          }
          createMany: {
            args: Prisma.ChecklistItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChecklistItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>[]
          }
          delete: {
            args: Prisma.ChecklistItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>
          }
          update: {
            args: Prisma.ChecklistItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>
          }
          deleteMany: {
            args: Prisma.ChecklistItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChecklistItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChecklistItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>
          }
          aggregate: {
            args: Prisma.ChecklistItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChecklistItem>
          }
          groupBy: {
            args: Prisma.ChecklistItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChecklistItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChecklistItemCountArgs<ExtArgs>
            result: $Utils.Optional<ChecklistItemCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Recurrence: {
        payload: Prisma.$RecurrencePayload<ExtArgs>
        fields: Prisma.RecurrenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecurrenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecurrenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload>
          }
          findFirst: {
            args: Prisma.RecurrenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecurrenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload>
          }
          findMany: {
            args: Prisma.RecurrenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload>[]
          }
          create: {
            args: Prisma.RecurrenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload>
          }
          createMany: {
            args: Prisma.RecurrenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecurrenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload>[]
          }
          delete: {
            args: Prisma.RecurrenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload>
          }
          update: {
            args: Prisma.RecurrenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload>
          }
          deleteMany: {
            args: Prisma.RecurrenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecurrenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecurrenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurrencePayload>
          }
          aggregate: {
            args: Prisma.RecurrenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurrence>
          }
          groupBy: {
            args: Prisma.RecurrenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecurrenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecurrenceCountArgs<ExtArgs>
            result: $Utils.Optional<RecurrenceCountAggregateOutputType> | number
          }
        }
      }
      SyncLog: {
        payload: Prisma.$SyncLogPayload<ExtArgs>
        fields: Prisma.SyncLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyncLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyncLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          findFirst: {
            args: Prisma.SyncLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyncLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          findMany: {
            args: Prisma.SyncLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>[]
          }
          create: {
            args: Prisma.SyncLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          createMany: {
            args: Prisma.SyncLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SyncLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>[]
          }
          delete: {
            args: Prisma.SyncLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          update: {
            args: Prisma.SyncLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          deleteMany: {
            args: Prisma.SyncLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyncLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SyncLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          aggregate: {
            args: Prisma.SyncLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyncLog>
          }
          groupBy: {
            args: Prisma.SyncLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyncLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyncLogCountArgs<ExtArgs>
            result: $Utils.Optional<SyncLogCountAggregateOutputType> | number
          }
        }
      }
      AuthSession: {
        payload: Prisma.$AuthSessionPayload<ExtArgs>
        fields: Prisma.AuthSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          findFirst: {
            args: Prisma.AuthSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          findMany: {
            args: Prisma.AuthSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          create: {
            args: Prisma.AuthSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          createMany: {
            args: Prisma.AuthSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>[]
          }
          delete: {
            args: Prisma.AuthSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          update: {
            args: Prisma.AuthSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          deleteMany: {
            args: Prisma.AuthSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuthSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthSessionPayload>
          }
          aggregate: {
            args: Prisma.AuthSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthSession>
          }
          groupBy: {
            args: Prisma.AuthSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthSessionCountArgs<ExtArgs>
            result: $Utils.Optional<AuthSessionCountAggregateOutputType> | number
          }
        }
      }
      OAuthProvider: {
        payload: Prisma.$OAuthProviderPayload<ExtArgs>
        fields: Prisma.OAuthProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OAuthProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OAuthProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthProviderPayload>
          }
          findFirst: {
            args: Prisma.OAuthProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OAuthProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthProviderPayload>
          }
          findMany: {
            args: Prisma.OAuthProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthProviderPayload>[]
          }
          create: {
            args: Prisma.OAuthProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthProviderPayload>
          }
          createMany: {
            args: Prisma.OAuthProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OAuthProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthProviderPayload>[]
          }
          delete: {
            args: Prisma.OAuthProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthProviderPayload>
          }
          update: {
            args: Prisma.OAuthProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthProviderPayload>
          }
          deleteMany: {
            args: Prisma.OAuthProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OAuthProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OAuthProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OAuthProviderPayload>
          }
          aggregate: {
            args: Prisma.OAuthProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOAuthProvider>
          }
          groupBy: {
            args: Prisma.OAuthProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OAuthProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OAuthProviderCountArgs<ExtArgs>
            result: $Utils.Optional<OAuthProviderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tasks: number
    projects: number
    areas: number
    authSessions: number
    oauthProviders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    areas?: boolean | UserCountOutputTypeCountAreasArgs
    authSessions?: boolean | UserCountOutputTypeCountAuthSessionsArgs
    oauthProviders?: boolean | UserCountOutputTypeCountOauthProvidersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAreasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOauthProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthProviderWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    subtasks: number
    checklistItems: number
    tags: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtasks?: boolean | TaskCountOutputTypeCountSubtasksArgs
    checklistItems?: boolean | TaskCountOutputTypeCountChecklistItemsArgs
    tags?: boolean | TaskCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountSubtasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountChecklistItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistItemWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    tasks: number
    sections: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ProjectCountOutputTypeCountTasksArgs
    sections?: boolean | ProjectCountOutputTypeCountSectionsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
  }


  /**
   * Count Type AreaCountOutputType
   */

  export type AreaCountOutputType = {
    tasks: number
  }

  export type AreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | AreaCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCountOutputType
     */
    select?: AreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    tasks: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | SectionCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type CalendarCountOutputType
   */

  export type CalendarCountOutputType = {
    tasks: number
  }

  export type CalendarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | CalendarCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * CalendarCountOutputType without action
   */
  export type CalendarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarCountOutputType
     */
    select?: CalendarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CalendarCountOutputType without action
   */
  export type CalendarCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    tasks: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | TagCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type RecurrenceCountOutputType
   */

  export type RecurrenceCountOutputType = {
    tasks: number
  }

  export type RecurrenceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | RecurrenceCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * RecurrenceCountOutputType without action
   */
  export type RecurrenceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurrenceCountOutputType
     */
    select?: RecurrenceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecurrenceCountOutputType without action
   */
  export type RecurrenceCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    password: string | null
    emailVerified: Date | null
    emailVerificationToken: string | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    password: string | null
    emailVerified: Date | null
    emailVerificationToken: string | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    image: number
    createdAt: number
    updatedAt: number
    password: number
    emailVerified: number
    emailVerificationToken: number
    passwordResetToken: number
    passwordResetExpires: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    password?: true
    emailVerified?: true
    emailVerificationToken?: true
    passwordResetToken?: true
    passwordResetExpires?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    password?: true
    emailVerified?: true
    emailVerificationToken?: true
    passwordResetToken?: true
    passwordResetExpires?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    password?: true
    emailVerified?: true
    emailVerificationToken?: true
    passwordResetToken?: true
    passwordResetExpires?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    image: string | null
    createdAt: Date
    updatedAt: Date
    password: string | null
    emailVerified: Date | null
    emailVerificationToken: string | null
    passwordResetToken: string | null
    passwordResetExpires: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    password?: boolean
    emailVerified?: boolean
    emailVerificationToken?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
    tasks?: boolean | User$tasksArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    areas?: boolean | User$areasArgs<ExtArgs>
    authSessions?: boolean | User$authSessionsArgs<ExtArgs>
    oauthProviders?: boolean | User$oauthProvidersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    password?: boolean
    emailVerified?: boolean
    emailVerificationToken?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    password?: boolean
    emailVerified?: boolean
    emailVerificationToken?: boolean
    passwordResetToken?: boolean
    passwordResetExpires?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | User$tasksArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    areas?: boolean | User$areasArgs<ExtArgs>
    authSessions?: boolean | User$authSessionsArgs<ExtArgs>
    oauthProviders?: boolean | User$oauthProvidersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      areas: Prisma.$AreaPayload<ExtArgs>[]
      authSessions: Prisma.$AuthSessionPayload<ExtArgs>[]
      oauthProviders: Prisma.$OAuthProviderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      image: string | null
      createdAt: Date
      updatedAt: Date
      password: string | null
      emailVerified: Date | null
      emailVerificationToken: string | null
      passwordResetToken: string | null
      passwordResetExpires: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany"> | Null>
    areas<T extends User$areasArgs<ExtArgs> = {}>(args?: Subset<T, User$areasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany"> | Null>
    authSessions<T extends User$authSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$authSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findMany"> | Null>
    oauthProviders<T extends User$oauthProvidersArgs<ExtArgs> = {}>(args?: Subset<T, User$oauthProvidersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthProviderPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly emailVerificationToken: FieldRef<"User", 'String'>
    readonly passwordResetToken: FieldRef<"User", 'String'>
    readonly passwordResetExpires: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.areas
   */
  export type User$areasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    cursor?: AreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * User.authSessions
   */
  export type User$authSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    where?: AuthSessionWhereInput
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    cursor?: AuthSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * User.oauthProviders
   */
  export type User$oauthProvidersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthProvider
     */
    select?: OAuthProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthProviderInclude<ExtArgs> | null
    where?: OAuthProviderWhereInput
    orderBy?: OAuthProviderOrderByWithRelationInput | OAuthProviderOrderByWithRelationInput[]
    cursor?: OAuthProviderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OAuthProviderScalarFieldEnum | OAuthProviderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    position: number | null
    sort: number | null
    version: number | null
  }

  export type TaskSumAggregateOutputType = {
    position: number | null
    sort: number | null
    version: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type: string | null
    status: string | null
    priority: string | null
    startDate: Date | null
    endDate: Date | null
    allDay: boolean | null
    position: number | null
    sort: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    projectId: string | null
    areaId: string | null
    sectionId: string | null
    parentTaskId: string | null
    calendarId: string | null
    recurrenceId: string | null
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean | null
    version: number | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    type: string | null
    status: string | null
    priority: string | null
    startDate: Date | null
    endDate: Date | null
    allDay: boolean | null
    position: number | null
    sort: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    projectId: string | null
    areaId: string | null
    sectionId: string | null
    parentTaskId: string | null
    calendarId: string | null
    recurrenceId: string | null
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean | null
    version: number | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    name: number
    description: number
    type: number
    status: number
    priority: number
    startDate: number
    endDate: number
    allDay: number
    position: number
    sort: number
    createdAt: number
    updatedAt: number
    userId: number
    projectId: number
    areaId: number
    sectionId: number
    parentTaskId: number
    calendarId: number
    recurrenceId: number
    syncId: number
    lastSync: number
    isDeleted: number
    version: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    position?: true
    sort?: true
    version?: true
  }

  export type TaskSumAggregateInputType = {
    position?: true
    sort?: true
    version?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    status?: true
    priority?: true
    startDate?: true
    endDate?: true
    allDay?: true
    position?: true
    sort?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    projectId?: true
    areaId?: true
    sectionId?: true
    parentTaskId?: true
    calendarId?: true
    recurrenceId?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    status?: true
    priority?: true
    startDate?: true
    endDate?: true
    allDay?: true
    position?: true
    sort?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    projectId?: true
    areaId?: true
    sectionId?: true
    parentTaskId?: true
    calendarId?: true
    recurrenceId?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    type?: true
    status?: true
    priority?: true
    startDate?: true
    endDate?: true
    allDay?: true
    position?: true
    sort?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    projectId?: true
    areaId?: true
    sectionId?: true
    parentTaskId?: true
    calendarId?: true
    recurrenceId?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    name: string
    description: string | null
    type: string | null
    status: string
    priority: string
    startDate: Date | null
    endDate: Date | null
    allDay: boolean
    position: number | null
    sort: number | null
    createdAt: Date
    updatedAt: Date
    userId: string
    projectId: string | null
    areaId: string | null
    sectionId: string | null
    parentTaskId: string | null
    calendarId: string | null
    recurrenceId: string | null
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean
    version: number
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    priority?: boolean
    startDate?: boolean
    endDate?: boolean
    allDay?: boolean
    position?: boolean
    sort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    projectId?: boolean
    areaId?: boolean
    sectionId?: boolean
    parentTaskId?: boolean
    calendarId?: boolean
    recurrenceId?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | Task$projectArgs<ExtArgs>
    area?: boolean | Task$areaArgs<ExtArgs>
    section?: boolean | Task$sectionArgs<ExtArgs>
    parentTask?: boolean | Task$parentTaskArgs<ExtArgs>
    subtasks?: boolean | Task$subtasksArgs<ExtArgs>
    calendar?: boolean | Task$calendarArgs<ExtArgs>
    recurrence?: boolean | Task$recurrenceArgs<ExtArgs>
    checklistItems?: boolean | Task$checklistItemsArgs<ExtArgs>
    tags?: boolean | Task$tagsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    priority?: boolean
    startDate?: boolean
    endDate?: boolean
    allDay?: boolean
    position?: boolean
    sort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    projectId?: boolean
    areaId?: boolean
    sectionId?: boolean
    parentTaskId?: boolean
    calendarId?: boolean
    recurrenceId?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | Task$projectArgs<ExtArgs>
    area?: boolean | Task$areaArgs<ExtArgs>
    section?: boolean | Task$sectionArgs<ExtArgs>
    parentTask?: boolean | Task$parentTaskArgs<ExtArgs>
    calendar?: boolean | Task$calendarArgs<ExtArgs>
    recurrence?: boolean | Task$recurrenceArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    status?: boolean
    priority?: boolean
    startDate?: boolean
    endDate?: boolean
    allDay?: boolean
    position?: boolean
    sort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    projectId?: boolean
    areaId?: boolean
    sectionId?: boolean
    parentTaskId?: boolean
    calendarId?: boolean
    recurrenceId?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | Task$projectArgs<ExtArgs>
    area?: boolean | Task$areaArgs<ExtArgs>
    section?: boolean | Task$sectionArgs<ExtArgs>
    parentTask?: boolean | Task$parentTaskArgs<ExtArgs>
    subtasks?: boolean | Task$subtasksArgs<ExtArgs>
    calendar?: boolean | Task$calendarArgs<ExtArgs>
    recurrence?: boolean | Task$recurrenceArgs<ExtArgs>
    checklistItems?: boolean | Task$checklistItemsArgs<ExtArgs>
    tags?: boolean | Task$tagsArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | Task$projectArgs<ExtArgs>
    area?: boolean | Task$areaArgs<ExtArgs>
    section?: boolean | Task$sectionArgs<ExtArgs>
    parentTask?: boolean | Task$parentTaskArgs<ExtArgs>
    calendar?: boolean | Task$calendarArgs<ExtArgs>
    recurrence?: boolean | Task$recurrenceArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs> | null
      area: Prisma.$AreaPayload<ExtArgs> | null
      section: Prisma.$SectionPayload<ExtArgs> | null
      parentTask: Prisma.$TaskPayload<ExtArgs> | null
      subtasks: Prisma.$TaskPayload<ExtArgs>[]
      calendar: Prisma.$CalendarPayload<ExtArgs> | null
      recurrence: Prisma.$RecurrencePayload<ExtArgs> | null
      checklistItems: Prisma.$ChecklistItemPayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      type: string | null
      status: string
      priority: string
      startDate: Date | null
      endDate: Date | null
      allDay: boolean
      position: number | null
      sort: number | null
      createdAt: Date
      updatedAt: Date
      userId: string
      projectId: string | null
      areaId: string | null
      sectionId: string | null
      parentTaskId: string | null
      calendarId: string | null
      recurrenceId: string | null
      syncId: string | null
      lastSync: Date | null
      isDeleted: boolean
      version: number
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    project<T extends Task$projectArgs<ExtArgs> = {}>(args?: Subset<T, Task$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    area<T extends Task$areaArgs<ExtArgs> = {}>(args?: Subset<T, Task$areaArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    section<T extends Task$sectionArgs<ExtArgs> = {}>(args?: Subset<T, Task$sectionArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    parentTask<T extends Task$parentTaskArgs<ExtArgs> = {}>(args?: Subset<T, Task$parentTaskArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    subtasks<T extends Task$subtasksArgs<ExtArgs> = {}>(args?: Subset<T, Task$subtasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    calendar<T extends Task$calendarArgs<ExtArgs> = {}>(args?: Subset<T, Task$calendarArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    recurrence<T extends Task$recurrenceArgs<ExtArgs> = {}>(args?: Subset<T, Task$recurrenceArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    checklistItems<T extends Task$checklistItemsArgs<ExtArgs> = {}>(args?: Subset<T, Task$checklistItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "findMany"> | Null>
    tags<T extends Task$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Task$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly name: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly type: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'String'>
    readonly priority: FieldRef<"Task", 'String'>
    readonly startDate: FieldRef<"Task", 'DateTime'>
    readonly endDate: FieldRef<"Task", 'DateTime'>
    readonly allDay: FieldRef<"Task", 'Boolean'>
    readonly position: FieldRef<"Task", 'Int'>
    readonly sort: FieldRef<"Task", 'Int'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
    readonly userId: FieldRef<"Task", 'String'>
    readonly projectId: FieldRef<"Task", 'String'>
    readonly areaId: FieldRef<"Task", 'String'>
    readonly sectionId: FieldRef<"Task", 'String'>
    readonly parentTaskId: FieldRef<"Task", 'String'>
    readonly calendarId: FieldRef<"Task", 'String'>
    readonly recurrenceId: FieldRef<"Task", 'String'>
    readonly syncId: FieldRef<"Task", 'String'>
    readonly lastSync: FieldRef<"Task", 'DateTime'>
    readonly isDeleted: FieldRef<"Task", 'Boolean'>
    readonly version: FieldRef<"Task", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }

  /**
   * Task.project
   */
  export type Task$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * Task.area
   */
  export type Task$areaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
  }

  /**
   * Task.section
   */
  export type Task$sectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
  }

  /**
   * Task.parentTask
   */
  export type Task$parentTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
  }

  /**
   * Task.subtasks
   */
  export type Task$subtasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task.calendar
   */
  export type Task$calendarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    where?: CalendarWhereInput
  }

  /**
   * Task.recurrence
   */
  export type Task$recurrenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    where?: RecurrenceWhereInput
  }

  /**
   * Task.checklistItems
   */
  export type Task$checklistItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    where?: ChecklistItemWhereInput
    orderBy?: ChecklistItemOrderByWithRelationInput | ChecklistItemOrderByWithRelationInput[]
    cursor?: ChecklistItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChecklistItemScalarFieldEnum | ChecklistItemScalarFieldEnum[]
  }

  /**
   * Task.tags
   */
  export type Task$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    version: number | null
  }

  export type ProjectSumAggregateOutputType = {
    version: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean | null
    version: number | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean | null
    version: number | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    color: number
    createdAt: number
    updatedAt: number
    userId: number
    syncId: number
    lastSync: number
    isDeleted: number
    version: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    version?: true
  }

  export type ProjectSumAggregateInputType = {
    version?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    description: string | null
    color: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean
    version: number
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    sections?: boolean | Project$sectionsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    sections?: boolean | Project$sectionsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      sections: Prisma.$SectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      color: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
      syncId: string | null
      lastSync: Date | null
      isDeleted: boolean
      version: number
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tasks<T extends Project$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Project$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    sections<T extends Project$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Project$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly color: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly userId: FieldRef<"Project", 'String'>
    readonly syncId: FieldRef<"Project", 'String'>
    readonly lastSync: FieldRef<"Project", 'DateTime'>
    readonly isDeleted: FieldRef<"Project", 'Boolean'>
    readonly version: FieldRef<"Project", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project.tasks
   */
  export type Project$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Project.sections
   */
  export type Project$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaAvgAggregateOutputType = {
    position: number | null
    version: number | null
  }

  export type AreaSumAggregateOutputType = {
    position: number | null
    version: number | null
  }

  export type AreaMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    color: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean | null
    version: number | null
  }

  export type AreaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    color: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean | null
    version: number | null
  }

  export type AreaCountAggregateOutputType = {
    id: number
    name: number
    description: number
    color: number
    position: number
    createdAt: number
    updatedAt: number
    userId: number
    syncId: number
    lastSync: number
    isDeleted: number
    version: number
    _all: number
  }


  export type AreaAvgAggregateInputType = {
    position?: true
    version?: true
  }

  export type AreaSumAggregateInputType = {
    position?: true
    version?: true
  }

  export type AreaMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
  }

  export type AreaMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
  }

  export type AreaCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Area to aggregate.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type AreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithAggregationInput | AreaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: AreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _avg?: AreaAvgAggregateInputType
    _sum?: AreaSumAggregateInputType
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    id: string
    name: string
    description: string | null
    color: string | null
    position: number | null
    createdAt: Date
    updatedAt: Date
    userId: string
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean
    version: number
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends AreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type AreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Area$tasksArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
  }

  export type AreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tasks?: boolean | Area$tasksArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AreaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Area"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      color: string | null
      position: number | null
      createdAt: Date
      updatedAt: Date
      userId: string
      syncId: string | null
      lastSync: Date | null
      isDeleted: boolean
      version: number
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type AreaGetPayload<S extends boolean | null | undefined | AreaDefaultArgs> = $Result.GetResult<Prisma.$AreaPayload, S>

  type AreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AreaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface AreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Area'], meta: { name: 'Area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {AreaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaFindUniqueArgs>(args: SelectSubset<T, AreaFindUniqueArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AreaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaFindFirstArgs>(args?: SelectSubset<T, AreaFindFirstArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaWithIdOnly = await prisma.area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AreaFindManyArgs>(args?: SelectSubset<T, AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Area.
     * @param {AreaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends AreaCreateArgs>(args: SelectSubset<T, AreaCreateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Areas.
     * @param {AreaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaCreateManyArgs>(args?: SelectSubset<T, AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Areas and returns the data saved in the database.
     * @param {AreaCreateManyAndReturnArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Areas and only return the `id`
     * const areaWithIdOnly = await prisma.area.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AreaCreateManyAndReturnArgs>(args?: SelectSubset<T, AreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Area.
     * @param {AreaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends AreaDeleteArgs>(args: SelectSubset<T, AreaDeleteArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Area.
     * @param {AreaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaUpdateArgs>(args: SelectSubset<T, AreaUpdateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Areas.
     * @param {AreaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaDeleteManyArgs>(args?: SelectSubset<T, AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaUpdateManyArgs>(args: SelectSubset<T, AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Area.
     * @param {AreaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends AreaUpsertArgs>(args: SelectSubset<T, AreaUpsertArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends AreaCountArgs>(
      args?: Subset<T, AreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaGroupByArgs['orderBy'] }
        : { orderBy?: AreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Area model
   */
  readonly fields: AreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tasks<T extends Area$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Area$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Area model
   */ 
  interface AreaFieldRefs {
    readonly id: FieldRef<"Area", 'String'>
    readonly name: FieldRef<"Area", 'String'>
    readonly description: FieldRef<"Area", 'String'>
    readonly color: FieldRef<"Area", 'String'>
    readonly position: FieldRef<"Area", 'Int'>
    readonly createdAt: FieldRef<"Area", 'DateTime'>
    readonly updatedAt: FieldRef<"Area", 'DateTime'>
    readonly userId: FieldRef<"Area", 'String'>
    readonly syncId: FieldRef<"Area", 'String'>
    readonly lastSync: FieldRef<"Area", 'DateTime'>
    readonly isDeleted: FieldRef<"Area", 'Boolean'>
    readonly version: FieldRef<"Area", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Area findUnique
   */
  export type AreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findUniqueOrThrow
   */
  export type AreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findFirst
   */
  export type AreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findFirstOrThrow
   */
  export type AreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findMany
   */
  export type AreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Areas to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area create
   */
  export type AreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to create a Area.
     */
    data: XOR<AreaCreateInput, AreaUncheckedCreateInput>
  }

  /**
   * Area createMany
   */
  export type AreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
  }

  /**
   * Area createManyAndReturn
   */
  export type AreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Area update
   */
  export type AreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to update a Area.
     */
    data: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
    /**
     * Choose, which Area to update.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area updateMany
   */
  export type AreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
  }

  /**
   * Area upsert
   */
  export type AreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The filter to search for the Area to update in case it exists.
     */
    where: AreaWhereUniqueInput
    /**
     * In case the Area found by the `where` argument doesn't exist, create a new Area with this data.
     */
    create: XOR<AreaCreateInput, AreaUncheckedCreateInput>
    /**
     * In case the Area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
  }

  /**
   * Area delete
   */
  export type AreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter which Area to delete.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area deleteMany
   */
  export type AreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Areas to delete
     */
    where?: AreaWhereInput
  }

  /**
   * Area.tasks
   */
  export type Area$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Area without action
   */
  export type AreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionAvgAggregateOutputType = {
    position: number | null
    version: number | null
  }

  export type SectionSumAggregateOutputType = {
    position: number | null
    version: number | null
  }

  export type SectionMinAggregateOutputType = {
    id: string | null
    name: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean | null
    version: number | null
  }

  export type SectionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean | null
    version: number | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    name: number
    position: number
    createdAt: number
    updatedAt: number
    projectId: number
    syncId: number
    lastSync: number
    isDeleted: number
    version: number
    _all: number
  }


  export type SectionAvgAggregateInputType = {
    position?: true
    version?: true
  }

  export type SectionSumAggregateInputType = {
    position?: true
    version?: true
  }

  export type SectionMinAggregateInputType = {
    id?: true
    name?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    name?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    name?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _avg?: SectionAvgAggregateInputType
    _sum?: SectionSumAggregateInputType
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: string
    name: string
    position: number | null
    createdAt: Date
    updatedAt: Date
    projectId: string
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean
    version: number
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tasks?: boolean | Section$tasksArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>

  export type SectionSelectScalar = {
    id?: boolean
    name?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
  }

  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    tasks?: boolean | Section$tasksArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      position: number | null
      createdAt: Date
      updatedAt: Date
      projectId: string
      syncId: string | null
      lastSync: Date | null
      isDeleted: boolean
      version: number
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sections and returns the data saved in the database.
     * @param {SectionCreateManyAndReturnArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sections and only return the `id`
     * const sectionWithIdOnly = await prisma.section.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tasks<T extends Section$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Section$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Section model
   */ 
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'String'>
    readonly name: FieldRef<"Section", 'String'>
    readonly position: FieldRef<"Section", 'Int'>
    readonly createdAt: FieldRef<"Section", 'DateTime'>
    readonly updatedAt: FieldRef<"Section", 'DateTime'>
    readonly projectId: FieldRef<"Section", 'String'>
    readonly syncId: FieldRef<"Section", 'String'>
    readonly lastSync: FieldRef<"Section", 'DateTime'>
    readonly isDeleted: FieldRef<"Section", 'Boolean'>
    readonly version: FieldRef<"Section", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
  }

  /**
   * Section createManyAndReturn
   */
  export type SectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
  }

  /**
   * Section.tasks
   */
  export type Section$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model Calendar
   */

  export type AggregateCalendar = {
    _count: CalendarCountAggregateOutputType | null
    _avg: CalendarAvgAggregateOutputType | null
    _sum: CalendarSumAggregateOutputType | null
    _min: CalendarMinAggregateOutputType | null
    _max: CalendarMaxAggregateOutputType | null
  }

  export type CalendarAvgAggregateOutputType = {
    version: number | null
  }

  export type CalendarSumAggregateOutputType = {
    version: number | null
  }

  export type CalendarMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean | null
    version: number | null
  }

  export type CalendarMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    color: string | null
    createdAt: Date | null
    updatedAt: Date | null
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean | null
    version: number | null
  }

  export type CalendarCountAggregateOutputType = {
    id: number
    name: number
    description: number
    color: number
    createdAt: number
    updatedAt: number
    syncId: number
    lastSync: number
    isDeleted: number
    version: number
    _all: number
  }


  export type CalendarAvgAggregateInputType = {
    version?: true
  }

  export type CalendarSumAggregateInputType = {
    version?: true
  }

  export type CalendarMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
  }

  export type CalendarMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
  }

  export type CalendarCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    createdAt?: true
    updatedAt?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
    _all?: true
  }

  export type CalendarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calendar to aggregate.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: CalendarOrderByWithRelationInput | CalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Calendars
    **/
    _count?: true | CalendarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CalendarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CalendarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendarMaxAggregateInputType
  }

  export type GetCalendarAggregateType<T extends CalendarAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendar[P]>
      : GetScalarType<T[P], AggregateCalendar[P]>
  }




  export type CalendarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarWhereInput
    orderBy?: CalendarOrderByWithAggregationInput | CalendarOrderByWithAggregationInput[]
    by: CalendarScalarFieldEnum[] | CalendarScalarFieldEnum
    having?: CalendarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendarCountAggregateInputType | true
    _avg?: CalendarAvgAggregateInputType
    _sum?: CalendarSumAggregateInputType
    _min?: CalendarMinAggregateInputType
    _max?: CalendarMaxAggregateInputType
  }

  export type CalendarGroupByOutputType = {
    id: string
    name: string
    description: string | null
    color: string | null
    createdAt: Date
    updatedAt: Date
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean
    version: number
    _count: CalendarCountAggregateOutputType | null
    _avg: CalendarAvgAggregateOutputType | null
    _sum: CalendarSumAggregateOutputType | null
    _min: CalendarMinAggregateOutputType | null
    _max: CalendarMaxAggregateOutputType | null
  }

  type GetCalendarGroupByPayload<T extends CalendarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalendarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendarGroupByOutputType[P]>
            : GetScalarType<T[P], CalendarGroupByOutputType[P]>
        }
      >
    >


  export type CalendarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
    tasks?: boolean | Calendar$tasksArgs<ExtArgs>
    _count?: boolean | CalendarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["calendar"]>

  export type CalendarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
  }, ExtArgs["result"]["calendar"]>

  export type CalendarSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
  }

  export type CalendarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Calendar$tasksArgs<ExtArgs>
    _count?: boolean | CalendarCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CalendarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CalendarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Calendar"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      color: string | null
      createdAt: Date
      updatedAt: Date
      syncId: string | null
      lastSync: Date | null
      isDeleted: boolean
      version: number
    }, ExtArgs["result"]["calendar"]>
    composites: {}
  }

  type CalendarGetPayload<S extends boolean | null | undefined | CalendarDefaultArgs> = $Result.GetResult<Prisma.$CalendarPayload, S>

  type CalendarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CalendarFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CalendarCountAggregateInputType | true
    }

  export interface CalendarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Calendar'], meta: { name: 'Calendar' } }
    /**
     * Find zero or one Calendar that matches the filter.
     * @param {CalendarFindUniqueArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalendarFindUniqueArgs>(args: SelectSubset<T, CalendarFindUniqueArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Calendar that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CalendarFindUniqueOrThrowArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalendarFindUniqueOrThrowArgs>(args: SelectSubset<T, CalendarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Calendar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarFindFirstArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalendarFindFirstArgs>(args?: SelectSubset<T, CalendarFindFirstArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Calendar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarFindFirstOrThrowArgs} args - Arguments to find a Calendar
     * @example
     * // Get one Calendar
     * const calendar = await prisma.calendar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalendarFindFirstOrThrowArgs>(args?: SelectSubset<T, CalendarFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Calendars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Calendars
     * const calendars = await prisma.calendar.findMany()
     * 
     * // Get first 10 Calendars
     * const calendars = await prisma.calendar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calendarWithIdOnly = await prisma.calendar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalendarFindManyArgs>(args?: SelectSubset<T, CalendarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Calendar.
     * @param {CalendarCreateArgs} args - Arguments to create a Calendar.
     * @example
     * // Create one Calendar
     * const Calendar = await prisma.calendar.create({
     *   data: {
     *     // ... data to create a Calendar
     *   }
     * })
     * 
     */
    create<T extends CalendarCreateArgs>(args: SelectSubset<T, CalendarCreateArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Calendars.
     * @param {CalendarCreateManyArgs} args - Arguments to create many Calendars.
     * @example
     * // Create many Calendars
     * const calendar = await prisma.calendar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalendarCreateManyArgs>(args?: SelectSubset<T, CalendarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Calendars and returns the data saved in the database.
     * @param {CalendarCreateManyAndReturnArgs} args - Arguments to create many Calendars.
     * @example
     * // Create many Calendars
     * const calendar = await prisma.calendar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Calendars and only return the `id`
     * const calendarWithIdOnly = await prisma.calendar.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalendarCreateManyAndReturnArgs>(args?: SelectSubset<T, CalendarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Calendar.
     * @param {CalendarDeleteArgs} args - Arguments to delete one Calendar.
     * @example
     * // Delete one Calendar
     * const Calendar = await prisma.calendar.delete({
     *   where: {
     *     // ... filter to delete one Calendar
     *   }
     * })
     * 
     */
    delete<T extends CalendarDeleteArgs>(args: SelectSubset<T, CalendarDeleteArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Calendar.
     * @param {CalendarUpdateArgs} args - Arguments to update one Calendar.
     * @example
     * // Update one Calendar
     * const calendar = await prisma.calendar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalendarUpdateArgs>(args: SelectSubset<T, CalendarUpdateArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Calendars.
     * @param {CalendarDeleteManyArgs} args - Arguments to filter Calendars to delete.
     * @example
     * // Delete a few Calendars
     * const { count } = await prisma.calendar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalendarDeleteManyArgs>(args?: SelectSubset<T, CalendarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Calendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Calendars
     * const calendar = await prisma.calendar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalendarUpdateManyArgs>(args: SelectSubset<T, CalendarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Calendar.
     * @param {CalendarUpsertArgs} args - Arguments to update or create a Calendar.
     * @example
     * // Update or create a Calendar
     * const calendar = await prisma.calendar.upsert({
     *   create: {
     *     // ... data to create a Calendar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Calendar we want to update
     *   }
     * })
     */
    upsert<T extends CalendarUpsertArgs>(args: SelectSubset<T, CalendarUpsertArgs<ExtArgs>>): Prisma__CalendarClient<$Result.GetResult<Prisma.$CalendarPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Calendars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarCountArgs} args - Arguments to filter Calendars to count.
     * @example
     * // Count the number of Calendars
     * const count = await prisma.calendar.count({
     *   where: {
     *     // ... the filter for the Calendars we want to count
     *   }
     * })
    **/
    count<T extends CalendarCountArgs>(
      args?: Subset<T, CalendarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Calendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CalendarAggregateArgs>(args: Subset<T, CalendarAggregateArgs>): Prisma.PrismaPromise<GetCalendarAggregateType<T>>

    /**
     * Group by Calendar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CalendarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalendarGroupByArgs['orderBy'] }
        : { orderBy?: CalendarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CalendarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Calendar model
   */
  readonly fields: CalendarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Calendar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalendarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends Calendar$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Calendar$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Calendar model
   */ 
  interface CalendarFieldRefs {
    readonly id: FieldRef<"Calendar", 'String'>
    readonly name: FieldRef<"Calendar", 'String'>
    readonly description: FieldRef<"Calendar", 'String'>
    readonly color: FieldRef<"Calendar", 'String'>
    readonly createdAt: FieldRef<"Calendar", 'DateTime'>
    readonly updatedAt: FieldRef<"Calendar", 'DateTime'>
    readonly syncId: FieldRef<"Calendar", 'String'>
    readonly lastSync: FieldRef<"Calendar", 'DateTime'>
    readonly isDeleted: FieldRef<"Calendar", 'Boolean'>
    readonly version: FieldRef<"Calendar", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Calendar findUnique
   */
  export type CalendarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * Filter, which Calendar to fetch.
     */
    where: CalendarWhereUniqueInput
  }

  /**
   * Calendar findUniqueOrThrow
   */
  export type CalendarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * Filter, which Calendar to fetch.
     */
    where: CalendarWhereUniqueInput
  }

  /**
   * Calendar findFirst
   */
  export type CalendarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * Filter, which Calendar to fetch.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: CalendarOrderByWithRelationInput | CalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calendars.
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calendars.
     */
    distinct?: CalendarScalarFieldEnum | CalendarScalarFieldEnum[]
  }

  /**
   * Calendar findFirstOrThrow
   */
  export type CalendarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * Filter, which Calendar to fetch.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: CalendarOrderByWithRelationInput | CalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Calendars.
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Calendars.
     */
    distinct?: CalendarScalarFieldEnum | CalendarScalarFieldEnum[]
  }

  /**
   * Calendar findMany
   */
  export type CalendarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * Filter, which Calendars to fetch.
     */
    where?: CalendarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Calendars to fetch.
     */
    orderBy?: CalendarOrderByWithRelationInput | CalendarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Calendars.
     */
    cursor?: CalendarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Calendars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Calendars.
     */
    skip?: number
    distinct?: CalendarScalarFieldEnum | CalendarScalarFieldEnum[]
  }

  /**
   * Calendar create
   */
  export type CalendarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * The data needed to create a Calendar.
     */
    data: XOR<CalendarCreateInput, CalendarUncheckedCreateInput>
  }

  /**
   * Calendar createMany
   */
  export type CalendarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Calendars.
     */
    data: CalendarCreateManyInput | CalendarCreateManyInput[]
  }

  /**
   * Calendar createManyAndReturn
   */
  export type CalendarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Calendars.
     */
    data: CalendarCreateManyInput | CalendarCreateManyInput[]
  }

  /**
   * Calendar update
   */
  export type CalendarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * The data needed to update a Calendar.
     */
    data: XOR<CalendarUpdateInput, CalendarUncheckedUpdateInput>
    /**
     * Choose, which Calendar to update.
     */
    where: CalendarWhereUniqueInput
  }

  /**
   * Calendar updateMany
   */
  export type CalendarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Calendars.
     */
    data: XOR<CalendarUpdateManyMutationInput, CalendarUncheckedUpdateManyInput>
    /**
     * Filter which Calendars to update
     */
    where?: CalendarWhereInput
  }

  /**
   * Calendar upsert
   */
  export type CalendarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * The filter to search for the Calendar to update in case it exists.
     */
    where: CalendarWhereUniqueInput
    /**
     * In case the Calendar found by the `where` argument doesn't exist, create a new Calendar with this data.
     */
    create: XOR<CalendarCreateInput, CalendarUncheckedCreateInput>
    /**
     * In case the Calendar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalendarUpdateInput, CalendarUncheckedUpdateInput>
  }

  /**
   * Calendar delete
   */
  export type CalendarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
    /**
     * Filter which Calendar to delete.
     */
    where: CalendarWhereUniqueInput
  }

  /**
   * Calendar deleteMany
   */
  export type CalendarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Calendars to delete
     */
    where?: CalendarWhereInput
  }

  /**
   * Calendar.tasks
   */
  export type Calendar$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Calendar without action
   */
  export type CalendarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Calendar
     */
    select?: CalendarSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CalendarInclude<ExtArgs> | null
  }


  /**
   * Model ChecklistItem
   */

  export type AggregateChecklistItem = {
    _count: ChecklistItemCountAggregateOutputType | null
    _avg: ChecklistItemAvgAggregateOutputType | null
    _sum: ChecklistItemSumAggregateOutputType | null
    _min: ChecklistItemMinAggregateOutputType | null
    _max: ChecklistItemMaxAggregateOutputType | null
  }

  export type ChecklistItemAvgAggregateOutputType = {
    position: number | null
    version: number | null
  }

  export type ChecklistItemSumAggregateOutputType = {
    position: number | null
    version: number | null
  }

  export type ChecklistItemMinAggregateOutputType = {
    id: string | null
    text: string | null
    completed: boolean | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
    taskId: string | null
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean | null
    version: number | null
  }

  export type ChecklistItemMaxAggregateOutputType = {
    id: string | null
    text: string | null
    completed: boolean | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
    taskId: string | null
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean | null
    version: number | null
  }

  export type ChecklistItemCountAggregateOutputType = {
    id: number
    text: number
    completed: number
    position: number
    createdAt: number
    updatedAt: number
    taskId: number
    syncId: number
    lastSync: number
    isDeleted: number
    version: number
    _all: number
  }


  export type ChecklistItemAvgAggregateInputType = {
    position?: true
    version?: true
  }

  export type ChecklistItemSumAggregateInputType = {
    position?: true
    version?: true
  }

  export type ChecklistItemMinAggregateInputType = {
    id?: true
    text?: true
    completed?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    taskId?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
  }

  export type ChecklistItemMaxAggregateInputType = {
    id?: true
    text?: true
    completed?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    taskId?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
  }

  export type ChecklistItemCountAggregateInputType = {
    id?: true
    text?: true
    completed?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    taskId?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
    _all?: true
  }

  export type ChecklistItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChecklistItem to aggregate.
     */
    where?: ChecklistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistItems to fetch.
     */
    orderBy?: ChecklistItemOrderByWithRelationInput | ChecklistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChecklistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChecklistItems
    **/
    _count?: true | ChecklistItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChecklistItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChecklistItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChecklistItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChecklistItemMaxAggregateInputType
  }

  export type GetChecklistItemAggregateType<T extends ChecklistItemAggregateArgs> = {
        [P in keyof T & keyof AggregateChecklistItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChecklistItem[P]>
      : GetScalarType<T[P], AggregateChecklistItem[P]>
  }




  export type ChecklistItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistItemWhereInput
    orderBy?: ChecklistItemOrderByWithAggregationInput | ChecklistItemOrderByWithAggregationInput[]
    by: ChecklistItemScalarFieldEnum[] | ChecklistItemScalarFieldEnum
    having?: ChecklistItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChecklistItemCountAggregateInputType | true
    _avg?: ChecklistItemAvgAggregateInputType
    _sum?: ChecklistItemSumAggregateInputType
    _min?: ChecklistItemMinAggregateInputType
    _max?: ChecklistItemMaxAggregateInputType
  }

  export type ChecklistItemGroupByOutputType = {
    id: string
    text: string
    completed: boolean
    position: number | null
    createdAt: Date
    updatedAt: Date
    taskId: string
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean
    version: number
    _count: ChecklistItemCountAggregateOutputType | null
    _avg: ChecklistItemAvgAggregateOutputType | null
    _sum: ChecklistItemSumAggregateOutputType | null
    _min: ChecklistItemMinAggregateOutputType | null
    _max: ChecklistItemMaxAggregateOutputType | null
  }

  type GetChecklistItemGroupByPayload<T extends ChecklistItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChecklistItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChecklistItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChecklistItemGroupByOutputType[P]>
            : GetScalarType<T[P], ChecklistItemGroupByOutputType[P]>
        }
      >
    >


  export type ChecklistItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    completed?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taskId?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklistItem"]>

  export type ChecklistItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    completed?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taskId?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklistItem"]>

  export type ChecklistItemSelectScalar = {
    id?: boolean
    text?: boolean
    completed?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    taskId?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
  }

  export type ChecklistItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type ChecklistItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $ChecklistItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChecklistItem"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      completed: boolean
      position: number | null
      createdAt: Date
      updatedAt: Date
      taskId: string
      syncId: string | null
      lastSync: Date | null
      isDeleted: boolean
      version: number
    }, ExtArgs["result"]["checklistItem"]>
    composites: {}
  }

  type ChecklistItemGetPayload<S extends boolean | null | undefined | ChecklistItemDefaultArgs> = $Result.GetResult<Prisma.$ChecklistItemPayload, S>

  type ChecklistItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChecklistItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChecklistItemCountAggregateInputType | true
    }

  export interface ChecklistItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChecklistItem'], meta: { name: 'ChecklistItem' } }
    /**
     * Find zero or one ChecklistItem that matches the filter.
     * @param {ChecklistItemFindUniqueArgs} args - Arguments to find a ChecklistItem
     * @example
     * // Get one ChecklistItem
     * const checklistItem = await prisma.checklistItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChecklistItemFindUniqueArgs>(args: SelectSubset<T, ChecklistItemFindUniqueArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ChecklistItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChecklistItemFindUniqueOrThrowArgs} args - Arguments to find a ChecklistItem
     * @example
     * // Get one ChecklistItem
     * const checklistItem = await prisma.checklistItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChecklistItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ChecklistItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ChecklistItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemFindFirstArgs} args - Arguments to find a ChecklistItem
     * @example
     * // Get one ChecklistItem
     * const checklistItem = await prisma.checklistItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChecklistItemFindFirstArgs>(args?: SelectSubset<T, ChecklistItemFindFirstArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ChecklistItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemFindFirstOrThrowArgs} args - Arguments to find a ChecklistItem
     * @example
     * // Get one ChecklistItem
     * const checklistItem = await prisma.checklistItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChecklistItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ChecklistItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ChecklistItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChecklistItems
     * const checklistItems = await prisma.checklistItem.findMany()
     * 
     * // Get first 10 ChecklistItems
     * const checklistItems = await prisma.checklistItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checklistItemWithIdOnly = await prisma.checklistItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChecklistItemFindManyArgs>(args?: SelectSubset<T, ChecklistItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ChecklistItem.
     * @param {ChecklistItemCreateArgs} args - Arguments to create a ChecklistItem.
     * @example
     * // Create one ChecklistItem
     * const ChecklistItem = await prisma.checklistItem.create({
     *   data: {
     *     // ... data to create a ChecklistItem
     *   }
     * })
     * 
     */
    create<T extends ChecklistItemCreateArgs>(args: SelectSubset<T, ChecklistItemCreateArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ChecklistItems.
     * @param {ChecklistItemCreateManyArgs} args - Arguments to create many ChecklistItems.
     * @example
     * // Create many ChecklistItems
     * const checklistItem = await prisma.checklistItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChecklistItemCreateManyArgs>(args?: SelectSubset<T, ChecklistItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChecklistItems and returns the data saved in the database.
     * @param {ChecklistItemCreateManyAndReturnArgs} args - Arguments to create many ChecklistItems.
     * @example
     * // Create many ChecklistItems
     * const checklistItem = await prisma.checklistItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChecklistItems and only return the `id`
     * const checklistItemWithIdOnly = await prisma.checklistItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChecklistItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ChecklistItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ChecklistItem.
     * @param {ChecklistItemDeleteArgs} args - Arguments to delete one ChecklistItem.
     * @example
     * // Delete one ChecklistItem
     * const ChecklistItem = await prisma.checklistItem.delete({
     *   where: {
     *     // ... filter to delete one ChecklistItem
     *   }
     * })
     * 
     */
    delete<T extends ChecklistItemDeleteArgs>(args: SelectSubset<T, ChecklistItemDeleteArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ChecklistItem.
     * @param {ChecklistItemUpdateArgs} args - Arguments to update one ChecklistItem.
     * @example
     * // Update one ChecklistItem
     * const checklistItem = await prisma.checklistItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChecklistItemUpdateArgs>(args: SelectSubset<T, ChecklistItemUpdateArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ChecklistItems.
     * @param {ChecklistItemDeleteManyArgs} args - Arguments to filter ChecklistItems to delete.
     * @example
     * // Delete a few ChecklistItems
     * const { count } = await prisma.checklistItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChecklistItemDeleteManyArgs>(args?: SelectSubset<T, ChecklistItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChecklistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChecklistItems
     * const checklistItem = await prisma.checklistItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChecklistItemUpdateManyArgs>(args: SelectSubset<T, ChecklistItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChecklistItem.
     * @param {ChecklistItemUpsertArgs} args - Arguments to update or create a ChecklistItem.
     * @example
     * // Update or create a ChecklistItem
     * const checklistItem = await prisma.checklistItem.upsert({
     *   create: {
     *     // ... data to create a ChecklistItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChecklistItem we want to update
     *   }
     * })
     */
    upsert<T extends ChecklistItemUpsertArgs>(args: SelectSubset<T, ChecklistItemUpsertArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ChecklistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemCountArgs} args - Arguments to filter ChecklistItems to count.
     * @example
     * // Count the number of ChecklistItems
     * const count = await prisma.checklistItem.count({
     *   where: {
     *     // ... the filter for the ChecklistItems we want to count
     *   }
     * })
    **/
    count<T extends ChecklistItemCountArgs>(
      args?: Subset<T, ChecklistItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChecklistItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChecklistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChecklistItemAggregateArgs>(args: Subset<T, ChecklistItemAggregateArgs>): Prisma.PrismaPromise<GetChecklistItemAggregateType<T>>

    /**
     * Group by ChecklistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChecklistItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChecklistItemGroupByArgs['orderBy'] }
        : { orderBy?: ChecklistItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChecklistItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChecklistItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChecklistItem model
   */
  readonly fields: ChecklistItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChecklistItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChecklistItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChecklistItem model
   */ 
  interface ChecklistItemFieldRefs {
    readonly id: FieldRef<"ChecklistItem", 'String'>
    readonly text: FieldRef<"ChecklistItem", 'String'>
    readonly completed: FieldRef<"ChecklistItem", 'Boolean'>
    readonly position: FieldRef<"ChecklistItem", 'Int'>
    readonly createdAt: FieldRef<"ChecklistItem", 'DateTime'>
    readonly updatedAt: FieldRef<"ChecklistItem", 'DateTime'>
    readonly taskId: FieldRef<"ChecklistItem", 'String'>
    readonly syncId: FieldRef<"ChecklistItem", 'String'>
    readonly lastSync: FieldRef<"ChecklistItem", 'DateTime'>
    readonly isDeleted: FieldRef<"ChecklistItem", 'Boolean'>
    readonly version: FieldRef<"ChecklistItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ChecklistItem findUnique
   */
  export type ChecklistItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistItem to fetch.
     */
    where: ChecklistItemWhereUniqueInput
  }

  /**
   * ChecklistItem findUniqueOrThrow
   */
  export type ChecklistItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistItem to fetch.
     */
    where: ChecklistItemWhereUniqueInput
  }

  /**
   * ChecklistItem findFirst
   */
  export type ChecklistItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistItem to fetch.
     */
    where?: ChecklistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistItems to fetch.
     */
    orderBy?: ChecklistItemOrderByWithRelationInput | ChecklistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChecklistItems.
     */
    cursor?: ChecklistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChecklistItems.
     */
    distinct?: ChecklistItemScalarFieldEnum | ChecklistItemScalarFieldEnum[]
  }

  /**
   * ChecklistItem findFirstOrThrow
   */
  export type ChecklistItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistItem to fetch.
     */
    where?: ChecklistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistItems to fetch.
     */
    orderBy?: ChecklistItemOrderByWithRelationInput | ChecklistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChecklistItems.
     */
    cursor?: ChecklistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChecklistItems.
     */
    distinct?: ChecklistItemScalarFieldEnum | ChecklistItemScalarFieldEnum[]
  }

  /**
   * ChecklistItem findMany
   */
  export type ChecklistItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistItems to fetch.
     */
    where?: ChecklistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistItems to fetch.
     */
    orderBy?: ChecklistItemOrderByWithRelationInput | ChecklistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChecklistItems.
     */
    cursor?: ChecklistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistItems.
     */
    skip?: number
    distinct?: ChecklistItemScalarFieldEnum | ChecklistItemScalarFieldEnum[]
  }

  /**
   * ChecklistItem create
   */
  export type ChecklistItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ChecklistItem.
     */
    data: XOR<ChecklistItemCreateInput, ChecklistItemUncheckedCreateInput>
  }

  /**
   * ChecklistItem createMany
   */
  export type ChecklistItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChecklistItems.
     */
    data: ChecklistItemCreateManyInput | ChecklistItemCreateManyInput[]
  }

  /**
   * ChecklistItem createManyAndReturn
   */
  export type ChecklistItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ChecklistItems.
     */
    data: ChecklistItemCreateManyInput | ChecklistItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChecklistItem update
   */
  export type ChecklistItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ChecklistItem.
     */
    data: XOR<ChecklistItemUpdateInput, ChecklistItemUncheckedUpdateInput>
    /**
     * Choose, which ChecklistItem to update.
     */
    where: ChecklistItemWhereUniqueInput
  }

  /**
   * ChecklistItem updateMany
   */
  export type ChecklistItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChecklistItems.
     */
    data: XOR<ChecklistItemUpdateManyMutationInput, ChecklistItemUncheckedUpdateManyInput>
    /**
     * Filter which ChecklistItems to update
     */
    where?: ChecklistItemWhereInput
  }

  /**
   * ChecklistItem upsert
   */
  export type ChecklistItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ChecklistItem to update in case it exists.
     */
    where: ChecklistItemWhereUniqueInput
    /**
     * In case the ChecklistItem found by the `where` argument doesn't exist, create a new ChecklistItem with this data.
     */
    create: XOR<ChecklistItemCreateInput, ChecklistItemUncheckedCreateInput>
    /**
     * In case the ChecklistItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChecklistItemUpdateInput, ChecklistItemUncheckedUpdateInput>
  }

  /**
   * ChecklistItem delete
   */
  export type ChecklistItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * Filter which ChecklistItem to delete.
     */
    where: ChecklistItemWhereUniqueInput
  }

  /**
   * ChecklistItem deleteMany
   */
  export type ChecklistItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChecklistItems to delete
     */
    where?: ChecklistItemWhereInput
  }

  /**
   * ChecklistItem without action
   */
  export type ChecklistItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    sort: number | null
    version: number | null
  }

  export type TagSumAggregateOutputType = {
    sort: number | null
    version: number | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    sort: number | null
    createdAt: Date | null
    updatedAt: Date | null
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean | null
    version: number | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    sort: number | null
    createdAt: Date | null
    updatedAt: Date | null
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean | null
    version: number | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    color: number
    sort: number
    createdAt: number
    updatedAt: number
    syncId: number
    lastSync: number
    isDeleted: number
    version: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    sort?: true
    version?: true
  }

  export type TagSumAggregateInputType = {
    sort?: true
    version?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    sort?: true
    createdAt?: true
    updatedAt?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    sort?: true
    createdAt?: true
    updatedAt?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    sort?: true
    createdAt?: true
    updatedAt?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    color: string | null
    sort: number | null
    createdAt: Date
    updatedAt: Date
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean
    version: number
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    sort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
    tasks?: boolean | Tag$tasksArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    sort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    sort?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
  }

  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Tag$tasksArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      color: string | null
      sort: number | null
      createdAt: Date
      updatedAt: Date
      syncId: string | null
      lastSync: Date | null
      isDeleted: boolean
      version: number
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends Tag$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Tag$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */ 
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly color: FieldRef<"Tag", 'String'>
    readonly sort: FieldRef<"Tag", 'Int'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
    readonly syncId: FieldRef<"Tag", 'String'>
    readonly lastSync: FieldRef<"Tag", 'DateTime'>
    readonly isDeleted: FieldRef<"Tag", 'Boolean'>
    readonly version: FieldRef<"Tag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
  }

  /**
   * Tag.tasks
   */
  export type Tag$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Recurrence
   */

  export type AggregateRecurrence = {
    _count: RecurrenceCountAggregateOutputType | null
    _avg: RecurrenceAvgAggregateOutputType | null
    _sum: RecurrenceSumAggregateOutputType | null
    _min: RecurrenceMinAggregateOutputType | null
    _max: RecurrenceMaxAggregateOutputType | null
  }

  export type RecurrenceAvgAggregateOutputType = {
    interval: number | null
    version: number | null
  }

  export type RecurrenceSumAggregateOutputType = {
    interval: number | null
    version: number | null
  }

  export type RecurrenceMinAggregateOutputType = {
    id: string | null
    type: string | null
    interval: number | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean | null
    version: number | null
  }

  export type RecurrenceMaxAggregateOutputType = {
    id: string | null
    type: string | null
    interval: number | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean | null
    version: number | null
  }

  export type RecurrenceCountAggregateOutputType = {
    id: number
    type: number
    interval: number
    endDate: number
    createdAt: number
    updatedAt: number
    syncId: number
    lastSync: number
    isDeleted: number
    version: number
    _all: number
  }


  export type RecurrenceAvgAggregateInputType = {
    interval?: true
    version?: true
  }

  export type RecurrenceSumAggregateInputType = {
    interval?: true
    version?: true
  }

  export type RecurrenceMinAggregateInputType = {
    id?: true
    type?: true
    interval?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
  }

  export type RecurrenceMaxAggregateInputType = {
    id?: true
    type?: true
    interval?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
  }

  export type RecurrenceCountAggregateInputType = {
    id?: true
    type?: true
    interval?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    syncId?: true
    lastSync?: true
    isDeleted?: true
    version?: true
    _all?: true
  }

  export type RecurrenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recurrence to aggregate.
     */
    where?: RecurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recurrences to fetch.
     */
    orderBy?: RecurrenceOrderByWithRelationInput | RecurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recurrences
    **/
    _count?: true | RecurrenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecurrenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecurrenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecurrenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecurrenceMaxAggregateInputType
  }

  export type GetRecurrenceAggregateType<T extends RecurrenceAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurrence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurrence[P]>
      : GetScalarType<T[P], AggregateRecurrence[P]>
  }




  export type RecurrenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurrenceWhereInput
    orderBy?: RecurrenceOrderByWithAggregationInput | RecurrenceOrderByWithAggregationInput[]
    by: RecurrenceScalarFieldEnum[] | RecurrenceScalarFieldEnum
    having?: RecurrenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecurrenceCountAggregateInputType | true
    _avg?: RecurrenceAvgAggregateInputType
    _sum?: RecurrenceSumAggregateInputType
    _min?: RecurrenceMinAggregateInputType
    _max?: RecurrenceMaxAggregateInputType
  }

  export type RecurrenceGroupByOutputType = {
    id: string
    type: string
    interval: number
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    syncId: string | null
    lastSync: Date | null
    isDeleted: boolean
    version: number
    _count: RecurrenceCountAggregateOutputType | null
    _avg: RecurrenceAvgAggregateOutputType | null
    _sum: RecurrenceSumAggregateOutputType | null
    _min: RecurrenceMinAggregateOutputType | null
    _max: RecurrenceMaxAggregateOutputType | null
  }

  type GetRecurrenceGroupByPayload<T extends RecurrenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecurrenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecurrenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecurrenceGroupByOutputType[P]>
            : GetScalarType<T[P], RecurrenceGroupByOutputType[P]>
        }
      >
    >


  export type RecurrenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    interval?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
    tasks?: boolean | Recurrence$tasksArgs<ExtArgs>
    _count?: boolean | RecurrenceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurrence"]>

  export type RecurrenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    interval?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
  }, ExtArgs["result"]["recurrence"]>

  export type RecurrenceSelectScalar = {
    id?: boolean
    type?: boolean
    interval?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    syncId?: boolean
    lastSync?: boolean
    isDeleted?: boolean
    version?: boolean
  }

  export type RecurrenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Recurrence$tasksArgs<ExtArgs>
    _count?: boolean | RecurrenceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecurrenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RecurrencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recurrence"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      interval: number
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
      syncId: string | null
      lastSync: Date | null
      isDeleted: boolean
      version: number
    }, ExtArgs["result"]["recurrence"]>
    composites: {}
  }

  type RecurrenceGetPayload<S extends boolean | null | undefined | RecurrenceDefaultArgs> = $Result.GetResult<Prisma.$RecurrencePayload, S>

  type RecurrenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecurrenceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecurrenceCountAggregateInputType | true
    }

  export interface RecurrenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recurrence'], meta: { name: 'Recurrence' } }
    /**
     * Find zero or one Recurrence that matches the filter.
     * @param {RecurrenceFindUniqueArgs} args - Arguments to find a Recurrence
     * @example
     * // Get one Recurrence
     * const recurrence = await prisma.recurrence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecurrenceFindUniqueArgs>(args: SelectSubset<T, RecurrenceFindUniqueArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Recurrence that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RecurrenceFindUniqueOrThrowArgs} args - Arguments to find a Recurrence
     * @example
     * // Get one Recurrence
     * const recurrence = await prisma.recurrence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecurrenceFindUniqueOrThrowArgs>(args: SelectSubset<T, RecurrenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Recurrence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceFindFirstArgs} args - Arguments to find a Recurrence
     * @example
     * // Get one Recurrence
     * const recurrence = await prisma.recurrence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecurrenceFindFirstArgs>(args?: SelectSubset<T, RecurrenceFindFirstArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Recurrence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceFindFirstOrThrowArgs} args - Arguments to find a Recurrence
     * @example
     * // Get one Recurrence
     * const recurrence = await prisma.recurrence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecurrenceFindFirstOrThrowArgs>(args?: SelectSubset<T, RecurrenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Recurrences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recurrences
     * const recurrences = await prisma.recurrence.findMany()
     * 
     * // Get first 10 Recurrences
     * const recurrences = await prisma.recurrence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recurrenceWithIdOnly = await prisma.recurrence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecurrenceFindManyArgs>(args?: SelectSubset<T, RecurrenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Recurrence.
     * @param {RecurrenceCreateArgs} args - Arguments to create a Recurrence.
     * @example
     * // Create one Recurrence
     * const Recurrence = await prisma.recurrence.create({
     *   data: {
     *     // ... data to create a Recurrence
     *   }
     * })
     * 
     */
    create<T extends RecurrenceCreateArgs>(args: SelectSubset<T, RecurrenceCreateArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Recurrences.
     * @param {RecurrenceCreateManyArgs} args - Arguments to create many Recurrences.
     * @example
     * // Create many Recurrences
     * const recurrence = await prisma.recurrence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecurrenceCreateManyArgs>(args?: SelectSubset<T, RecurrenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recurrences and returns the data saved in the database.
     * @param {RecurrenceCreateManyAndReturnArgs} args - Arguments to create many Recurrences.
     * @example
     * // Create many Recurrences
     * const recurrence = await prisma.recurrence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recurrences and only return the `id`
     * const recurrenceWithIdOnly = await prisma.recurrence.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecurrenceCreateManyAndReturnArgs>(args?: SelectSubset<T, RecurrenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Recurrence.
     * @param {RecurrenceDeleteArgs} args - Arguments to delete one Recurrence.
     * @example
     * // Delete one Recurrence
     * const Recurrence = await prisma.recurrence.delete({
     *   where: {
     *     // ... filter to delete one Recurrence
     *   }
     * })
     * 
     */
    delete<T extends RecurrenceDeleteArgs>(args: SelectSubset<T, RecurrenceDeleteArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Recurrence.
     * @param {RecurrenceUpdateArgs} args - Arguments to update one Recurrence.
     * @example
     * // Update one Recurrence
     * const recurrence = await prisma.recurrence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecurrenceUpdateArgs>(args: SelectSubset<T, RecurrenceUpdateArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Recurrences.
     * @param {RecurrenceDeleteManyArgs} args - Arguments to filter Recurrences to delete.
     * @example
     * // Delete a few Recurrences
     * const { count } = await prisma.recurrence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecurrenceDeleteManyArgs>(args?: SelectSubset<T, RecurrenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recurrences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recurrences
     * const recurrence = await prisma.recurrence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecurrenceUpdateManyArgs>(args: SelectSubset<T, RecurrenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recurrence.
     * @param {RecurrenceUpsertArgs} args - Arguments to update or create a Recurrence.
     * @example
     * // Update or create a Recurrence
     * const recurrence = await prisma.recurrence.upsert({
     *   create: {
     *     // ... data to create a Recurrence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recurrence we want to update
     *   }
     * })
     */
    upsert<T extends RecurrenceUpsertArgs>(args: SelectSubset<T, RecurrenceUpsertArgs<ExtArgs>>): Prisma__RecurrenceClient<$Result.GetResult<Prisma.$RecurrencePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Recurrences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceCountArgs} args - Arguments to filter Recurrences to count.
     * @example
     * // Count the number of Recurrences
     * const count = await prisma.recurrence.count({
     *   where: {
     *     // ... the filter for the Recurrences we want to count
     *   }
     * })
    **/
    count<T extends RecurrenceCountArgs>(
      args?: Subset<T, RecurrenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecurrenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recurrence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecurrenceAggregateArgs>(args: Subset<T, RecurrenceAggregateArgs>): Prisma.PrismaPromise<GetRecurrenceAggregateType<T>>

    /**
     * Group by Recurrence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurrenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecurrenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecurrenceGroupByArgs['orderBy'] }
        : { orderBy?: RecurrenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecurrenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecurrenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recurrence model
   */
  readonly fields: RecurrenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recurrence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecurrenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends Recurrence$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Recurrence$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recurrence model
   */ 
  interface RecurrenceFieldRefs {
    readonly id: FieldRef<"Recurrence", 'String'>
    readonly type: FieldRef<"Recurrence", 'String'>
    readonly interval: FieldRef<"Recurrence", 'Int'>
    readonly endDate: FieldRef<"Recurrence", 'DateTime'>
    readonly createdAt: FieldRef<"Recurrence", 'DateTime'>
    readonly updatedAt: FieldRef<"Recurrence", 'DateTime'>
    readonly syncId: FieldRef<"Recurrence", 'String'>
    readonly lastSync: FieldRef<"Recurrence", 'DateTime'>
    readonly isDeleted: FieldRef<"Recurrence", 'Boolean'>
    readonly version: FieldRef<"Recurrence", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Recurrence findUnique
   */
  export type RecurrenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    /**
     * Filter, which Recurrence to fetch.
     */
    where: RecurrenceWhereUniqueInput
  }

  /**
   * Recurrence findUniqueOrThrow
   */
  export type RecurrenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    /**
     * Filter, which Recurrence to fetch.
     */
    where: RecurrenceWhereUniqueInput
  }

  /**
   * Recurrence findFirst
   */
  export type RecurrenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    /**
     * Filter, which Recurrence to fetch.
     */
    where?: RecurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recurrences to fetch.
     */
    orderBy?: RecurrenceOrderByWithRelationInput | RecurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recurrences.
     */
    cursor?: RecurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recurrences.
     */
    distinct?: RecurrenceScalarFieldEnum | RecurrenceScalarFieldEnum[]
  }

  /**
   * Recurrence findFirstOrThrow
   */
  export type RecurrenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    /**
     * Filter, which Recurrence to fetch.
     */
    where?: RecurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recurrences to fetch.
     */
    orderBy?: RecurrenceOrderByWithRelationInput | RecurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recurrences.
     */
    cursor?: RecurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recurrences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recurrences.
     */
    distinct?: RecurrenceScalarFieldEnum | RecurrenceScalarFieldEnum[]
  }

  /**
   * Recurrence findMany
   */
  export type RecurrenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    /**
     * Filter, which Recurrences to fetch.
     */
    where?: RecurrenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recurrences to fetch.
     */
    orderBy?: RecurrenceOrderByWithRelationInput | RecurrenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recurrences.
     */
    cursor?: RecurrenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recurrences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recurrences.
     */
    skip?: number
    distinct?: RecurrenceScalarFieldEnum | RecurrenceScalarFieldEnum[]
  }

  /**
   * Recurrence create
   */
  export type RecurrenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Recurrence.
     */
    data: XOR<RecurrenceCreateInput, RecurrenceUncheckedCreateInput>
  }

  /**
   * Recurrence createMany
   */
  export type RecurrenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recurrences.
     */
    data: RecurrenceCreateManyInput | RecurrenceCreateManyInput[]
  }

  /**
   * Recurrence createManyAndReturn
   */
  export type RecurrenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Recurrences.
     */
    data: RecurrenceCreateManyInput | RecurrenceCreateManyInput[]
  }

  /**
   * Recurrence update
   */
  export type RecurrenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Recurrence.
     */
    data: XOR<RecurrenceUpdateInput, RecurrenceUncheckedUpdateInput>
    /**
     * Choose, which Recurrence to update.
     */
    where: RecurrenceWhereUniqueInput
  }

  /**
   * Recurrence updateMany
   */
  export type RecurrenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recurrences.
     */
    data: XOR<RecurrenceUpdateManyMutationInput, RecurrenceUncheckedUpdateManyInput>
    /**
     * Filter which Recurrences to update
     */
    where?: RecurrenceWhereInput
  }

  /**
   * Recurrence upsert
   */
  export type RecurrenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Recurrence to update in case it exists.
     */
    where: RecurrenceWhereUniqueInput
    /**
     * In case the Recurrence found by the `where` argument doesn't exist, create a new Recurrence with this data.
     */
    create: XOR<RecurrenceCreateInput, RecurrenceUncheckedCreateInput>
    /**
     * In case the Recurrence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecurrenceUpdateInput, RecurrenceUncheckedUpdateInput>
  }

  /**
   * Recurrence delete
   */
  export type RecurrenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
    /**
     * Filter which Recurrence to delete.
     */
    where: RecurrenceWhereUniqueInput
  }

  /**
   * Recurrence deleteMany
   */
  export type RecurrenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recurrences to delete
     */
    where?: RecurrenceWhereInput
  }

  /**
   * Recurrence.tasks
   */
  export type Recurrence$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Recurrence without action
   */
  export type RecurrenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurrence
     */
    select?: RecurrenceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecurrenceInclude<ExtArgs> | null
  }


  /**
   * Model SyncLog
   */

  export type AggregateSyncLog = {
    _count: SyncLogCountAggregateOutputType | null
    _min: SyncLogMinAggregateOutputType | null
    _max: SyncLogMaxAggregateOutputType | null
  }

  export type SyncLogMinAggregateOutputType = {
    id: string | null
    entityId: string | null
    entityType: string | null
    operation: string | null
    data: string | null
    timestamp: Date | null
    synced: boolean | null
  }

  export type SyncLogMaxAggregateOutputType = {
    id: string | null
    entityId: string | null
    entityType: string | null
    operation: string | null
    data: string | null
    timestamp: Date | null
    synced: boolean | null
  }

  export type SyncLogCountAggregateOutputType = {
    id: number
    entityId: number
    entityType: number
    operation: number
    data: number
    timestamp: number
    synced: number
    _all: number
  }


  export type SyncLogMinAggregateInputType = {
    id?: true
    entityId?: true
    entityType?: true
    operation?: true
    data?: true
    timestamp?: true
    synced?: true
  }

  export type SyncLogMaxAggregateInputType = {
    id?: true
    entityId?: true
    entityType?: true
    operation?: true
    data?: true
    timestamp?: true
    synced?: true
  }

  export type SyncLogCountAggregateInputType = {
    id?: true
    entityId?: true
    entityType?: true
    operation?: true
    data?: true
    timestamp?: true
    synced?: true
    _all?: true
  }

  export type SyncLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncLog to aggregate.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncLogs
    **/
    _count?: true | SyncLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncLogMaxAggregateInputType
  }

  export type GetSyncLogAggregateType<T extends SyncLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncLog[P]>
      : GetScalarType<T[P], AggregateSyncLog[P]>
  }




  export type SyncLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncLogWhereInput
    orderBy?: SyncLogOrderByWithAggregationInput | SyncLogOrderByWithAggregationInput[]
    by: SyncLogScalarFieldEnum[] | SyncLogScalarFieldEnum
    having?: SyncLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncLogCountAggregateInputType | true
    _min?: SyncLogMinAggregateInputType
    _max?: SyncLogMaxAggregateInputType
  }

  export type SyncLogGroupByOutputType = {
    id: string
    entityId: string
    entityType: string
    operation: string
    data: string
    timestamp: Date
    synced: boolean
    _count: SyncLogCountAggregateOutputType | null
    _min: SyncLogMinAggregateOutputType | null
    _max: SyncLogMaxAggregateOutputType | null
  }

  type GetSyncLogGroupByPayload<T extends SyncLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyncLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncLogGroupByOutputType[P]>
            : GetScalarType<T[P], SyncLogGroupByOutputType[P]>
        }
      >
    >


  export type SyncLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entityId?: boolean
    entityType?: boolean
    operation?: boolean
    data?: boolean
    timestamp?: boolean
    synced?: boolean
  }, ExtArgs["result"]["syncLog"]>

  export type SyncLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entityId?: boolean
    entityType?: boolean
    operation?: boolean
    data?: boolean
    timestamp?: boolean
    synced?: boolean
  }, ExtArgs["result"]["syncLog"]>

  export type SyncLogSelectScalar = {
    id?: boolean
    entityId?: boolean
    entityType?: boolean
    operation?: boolean
    data?: boolean
    timestamp?: boolean
    synced?: boolean
  }


  export type $SyncLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SyncLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      entityId: string
      entityType: string
      operation: string
      data: string
      timestamp: Date
      synced: boolean
    }, ExtArgs["result"]["syncLog"]>
    composites: {}
  }

  type SyncLogGetPayload<S extends boolean | null | undefined | SyncLogDefaultArgs> = $Result.GetResult<Prisma.$SyncLogPayload, S>

  type SyncLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SyncLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SyncLogCountAggregateInputType | true
    }

  export interface SyncLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SyncLog'], meta: { name: 'SyncLog' } }
    /**
     * Find zero or one SyncLog that matches the filter.
     * @param {SyncLogFindUniqueArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyncLogFindUniqueArgs>(args: SelectSubset<T, SyncLogFindUniqueArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SyncLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SyncLogFindUniqueOrThrowArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyncLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SyncLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SyncLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindFirstArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyncLogFindFirstArgs>(args?: SelectSubset<T, SyncLogFindFirstArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SyncLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindFirstOrThrowArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyncLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SyncLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SyncLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncLogs
     * const syncLogs = await prisma.syncLog.findMany()
     * 
     * // Get first 10 SyncLogs
     * const syncLogs = await prisma.syncLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syncLogWithIdOnly = await prisma.syncLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyncLogFindManyArgs>(args?: SelectSubset<T, SyncLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SyncLog.
     * @param {SyncLogCreateArgs} args - Arguments to create a SyncLog.
     * @example
     * // Create one SyncLog
     * const SyncLog = await prisma.syncLog.create({
     *   data: {
     *     // ... data to create a SyncLog
     *   }
     * })
     * 
     */
    create<T extends SyncLogCreateArgs>(args: SelectSubset<T, SyncLogCreateArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SyncLogs.
     * @param {SyncLogCreateManyArgs} args - Arguments to create many SyncLogs.
     * @example
     * // Create many SyncLogs
     * const syncLog = await prisma.syncLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyncLogCreateManyArgs>(args?: SelectSubset<T, SyncLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SyncLogs and returns the data saved in the database.
     * @param {SyncLogCreateManyAndReturnArgs} args - Arguments to create many SyncLogs.
     * @example
     * // Create many SyncLogs
     * const syncLog = await prisma.syncLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SyncLogs and only return the `id`
     * const syncLogWithIdOnly = await prisma.syncLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SyncLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SyncLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SyncLog.
     * @param {SyncLogDeleteArgs} args - Arguments to delete one SyncLog.
     * @example
     * // Delete one SyncLog
     * const SyncLog = await prisma.syncLog.delete({
     *   where: {
     *     // ... filter to delete one SyncLog
     *   }
     * })
     * 
     */
    delete<T extends SyncLogDeleteArgs>(args: SelectSubset<T, SyncLogDeleteArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SyncLog.
     * @param {SyncLogUpdateArgs} args - Arguments to update one SyncLog.
     * @example
     * // Update one SyncLog
     * const syncLog = await prisma.syncLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyncLogUpdateArgs>(args: SelectSubset<T, SyncLogUpdateArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SyncLogs.
     * @param {SyncLogDeleteManyArgs} args - Arguments to filter SyncLogs to delete.
     * @example
     * // Delete a few SyncLogs
     * const { count } = await prisma.syncLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyncLogDeleteManyArgs>(args?: SelectSubset<T, SyncLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncLogs
     * const syncLog = await prisma.syncLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyncLogUpdateManyArgs>(args: SelectSubset<T, SyncLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SyncLog.
     * @param {SyncLogUpsertArgs} args - Arguments to update or create a SyncLog.
     * @example
     * // Update or create a SyncLog
     * const syncLog = await prisma.syncLog.upsert({
     *   create: {
     *     // ... data to create a SyncLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncLog we want to update
     *   }
     * })
     */
    upsert<T extends SyncLogUpsertArgs>(args: SelectSubset<T, SyncLogUpsertArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogCountArgs} args - Arguments to filter SyncLogs to count.
     * @example
     * // Count the number of SyncLogs
     * const count = await prisma.syncLog.count({
     *   where: {
     *     // ... the filter for the SyncLogs we want to count
     *   }
     * })
    **/
    count<T extends SyncLogCountArgs>(
      args?: Subset<T, SyncLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SyncLogAggregateArgs>(args: Subset<T, SyncLogAggregateArgs>): Prisma.PrismaPromise<GetSyncLogAggregateType<T>>

    /**
     * Group by SyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SyncLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncLogGroupByArgs['orderBy'] }
        : { orderBy?: SyncLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SyncLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SyncLog model
   */
  readonly fields: SyncLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyncLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SyncLog model
   */ 
  interface SyncLogFieldRefs {
    readonly id: FieldRef<"SyncLog", 'String'>
    readonly entityId: FieldRef<"SyncLog", 'String'>
    readonly entityType: FieldRef<"SyncLog", 'String'>
    readonly operation: FieldRef<"SyncLog", 'String'>
    readonly data: FieldRef<"SyncLog", 'String'>
    readonly timestamp: FieldRef<"SyncLog", 'DateTime'>
    readonly synced: FieldRef<"SyncLog", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SyncLog findUnique
   */
  export type SyncLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog findUniqueOrThrow
   */
  export type SyncLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog findFirst
   */
  export type SyncLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncLogs.
     */
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog findFirstOrThrow
   */
  export type SyncLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncLogs.
     */
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog findMany
   */
  export type SyncLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Filter, which SyncLogs to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog create
   */
  export type SyncLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * The data needed to create a SyncLog.
     */
    data: XOR<SyncLogCreateInput, SyncLogUncheckedCreateInput>
  }

  /**
   * SyncLog createMany
   */
  export type SyncLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SyncLogs.
     */
    data: SyncLogCreateManyInput | SyncLogCreateManyInput[]
  }

  /**
   * SyncLog createManyAndReturn
   */
  export type SyncLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SyncLogs.
     */
    data: SyncLogCreateManyInput | SyncLogCreateManyInput[]
  }

  /**
   * SyncLog update
   */
  export type SyncLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * The data needed to update a SyncLog.
     */
    data: XOR<SyncLogUpdateInput, SyncLogUncheckedUpdateInput>
    /**
     * Choose, which SyncLog to update.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog updateMany
   */
  export type SyncLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SyncLogs.
     */
    data: XOR<SyncLogUpdateManyMutationInput, SyncLogUncheckedUpdateManyInput>
    /**
     * Filter which SyncLogs to update
     */
    where?: SyncLogWhereInput
  }

  /**
   * SyncLog upsert
   */
  export type SyncLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * The filter to search for the SyncLog to update in case it exists.
     */
    where: SyncLogWhereUniqueInput
    /**
     * In case the SyncLog found by the `where` argument doesn't exist, create a new SyncLog with this data.
     */
    create: XOR<SyncLogCreateInput, SyncLogUncheckedCreateInput>
    /**
     * In case the SyncLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncLogUpdateInput, SyncLogUncheckedUpdateInput>
  }

  /**
   * SyncLog delete
   */
  export type SyncLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Filter which SyncLog to delete.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog deleteMany
   */
  export type SyncLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncLogs to delete
     */
    where?: SyncLogWhereInput
  }

  /**
   * SyncLog without action
   */
  export type SyncLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
  }


  /**
   * Model AuthSession
   */

  export type AggregateAuthSession = {
    _count: AuthSessionCountAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  export type AuthSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
  }

  export type AuthSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expires: Date | null
    createdAt: Date | null
  }

  export type AuthSessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expires: number
    createdAt: number
    _all: number
  }


  export type AuthSessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expires?: true
    createdAt?: true
  }

  export type AuthSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expires?: true
    createdAt?: true
  }

  export type AuthSessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expires?: true
    createdAt?: true
    _all?: true
  }

  export type AuthSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthSession to aggregate.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthSessions
    **/
    _count?: true | AuthSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthSessionMaxAggregateInputType
  }

  export type GetAuthSessionAggregateType<T extends AuthSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthSession[P]>
      : GetScalarType<T[P], AggregateAuthSession[P]>
  }




  export type AuthSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthSessionWhereInput
    orderBy?: AuthSessionOrderByWithAggregationInput | AuthSessionOrderByWithAggregationInput[]
    by: AuthSessionScalarFieldEnum[] | AuthSessionScalarFieldEnum
    having?: AuthSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthSessionCountAggregateInputType | true
    _min?: AuthSessionMinAggregateInputType
    _max?: AuthSessionMaxAggregateInputType
  }

  export type AuthSessionGroupByOutputType = {
    id: string
    userId: string
    token: string
    expires: Date
    createdAt: Date
    _count: AuthSessionCountAggregateOutputType | null
    _min: AuthSessionMinAggregateOutputType | null
    _max: AuthSessionMaxAggregateOutputType | null
  }

  type GetAuthSessionGroupByPayload<T extends AuthSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
            : GetScalarType<T[P], AuthSessionGroupByOutputType[P]>
        }
      >
    >


  export type AuthSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authSession"]>

  export type AuthSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expires?: boolean
    createdAt?: boolean
  }

  export type AuthSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuthSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expires: Date
      createdAt: Date
    }, ExtArgs["result"]["authSession"]>
    composites: {}
  }

  type AuthSessionGetPayload<S extends boolean | null | undefined | AuthSessionDefaultArgs> = $Result.GetResult<Prisma.$AuthSessionPayload, S>

  type AuthSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuthSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuthSessionCountAggregateInputType | true
    }

  export interface AuthSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthSession'], meta: { name: 'AuthSession' } }
    /**
     * Find zero or one AuthSession that matches the filter.
     * @param {AuthSessionFindUniqueArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthSessionFindUniqueArgs>(args: SelectSubset<T, AuthSessionFindUniqueArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuthSession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuthSessionFindUniqueOrThrowArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuthSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindFirstArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthSessionFindFirstArgs>(args?: SelectSubset<T, AuthSessionFindFirstArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuthSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindFirstOrThrowArgs} args - Arguments to find a AuthSession
     * @example
     * // Get one AuthSession
     * const authSession = await prisma.authSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuthSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthSessions
     * const authSessions = await prisma.authSession.findMany()
     * 
     * // Get first 10 AuthSessions
     * const authSessions = await prisma.authSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authSessionWithIdOnly = await prisma.authSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthSessionFindManyArgs>(args?: SelectSubset<T, AuthSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuthSession.
     * @param {AuthSessionCreateArgs} args - Arguments to create a AuthSession.
     * @example
     * // Create one AuthSession
     * const AuthSession = await prisma.authSession.create({
     *   data: {
     *     // ... data to create a AuthSession
     *   }
     * })
     * 
     */
    create<T extends AuthSessionCreateArgs>(args: SelectSubset<T, AuthSessionCreateArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuthSessions.
     * @param {AuthSessionCreateManyArgs} args - Arguments to create many AuthSessions.
     * @example
     * // Create many AuthSessions
     * const authSession = await prisma.authSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthSessionCreateManyArgs>(args?: SelectSubset<T, AuthSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthSessions and returns the data saved in the database.
     * @param {AuthSessionCreateManyAndReturnArgs} args - Arguments to create many AuthSessions.
     * @example
     * // Create many AuthSessions
     * const authSession = await prisma.authSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthSessions and only return the `id`
     * const authSessionWithIdOnly = await prisma.authSession.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuthSession.
     * @param {AuthSessionDeleteArgs} args - Arguments to delete one AuthSession.
     * @example
     * // Delete one AuthSession
     * const AuthSession = await prisma.authSession.delete({
     *   where: {
     *     // ... filter to delete one AuthSession
     *   }
     * })
     * 
     */
    delete<T extends AuthSessionDeleteArgs>(args: SelectSubset<T, AuthSessionDeleteArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuthSession.
     * @param {AuthSessionUpdateArgs} args - Arguments to update one AuthSession.
     * @example
     * // Update one AuthSession
     * const authSession = await prisma.authSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthSessionUpdateArgs>(args: SelectSubset<T, AuthSessionUpdateArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuthSessions.
     * @param {AuthSessionDeleteManyArgs} args - Arguments to filter AuthSessions to delete.
     * @example
     * // Delete a few AuthSessions
     * const { count } = await prisma.authSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthSessionDeleteManyArgs>(args?: SelectSubset<T, AuthSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthSessions
     * const authSession = await prisma.authSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthSessionUpdateManyArgs>(args: SelectSubset<T, AuthSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuthSession.
     * @param {AuthSessionUpsertArgs} args - Arguments to update or create a AuthSession.
     * @example
     * // Update or create a AuthSession
     * const authSession = await prisma.authSession.upsert({
     *   create: {
     *     // ... data to create a AuthSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthSession we want to update
     *   }
     * })
     */
    upsert<T extends AuthSessionUpsertArgs>(args: SelectSubset<T, AuthSessionUpsertArgs<ExtArgs>>): Prisma__AuthSessionClient<$Result.GetResult<Prisma.$AuthSessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuthSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionCountArgs} args - Arguments to filter AuthSessions to count.
     * @example
     * // Count the number of AuthSessions
     * const count = await prisma.authSession.count({
     *   where: {
     *     // ... the filter for the AuthSessions we want to count
     *   }
     * })
    **/
    count<T extends AuthSessionCountArgs>(
      args?: Subset<T, AuthSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthSessionAggregateArgs>(args: Subset<T, AuthSessionAggregateArgs>): Prisma.PrismaPromise<GetAuthSessionAggregateType<T>>

    /**
     * Group by AuthSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthSessionGroupByArgs['orderBy'] }
        : { orderBy?: AuthSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthSession model
   */
  readonly fields: AuthSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuthSession model
   */ 
  interface AuthSessionFieldRefs {
    readonly id: FieldRef<"AuthSession", 'String'>
    readonly userId: FieldRef<"AuthSession", 'String'>
    readonly token: FieldRef<"AuthSession", 'String'>
    readonly expires: FieldRef<"AuthSession", 'DateTime'>
    readonly createdAt: FieldRef<"AuthSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthSession findUnique
   */
  export type AuthSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession findUniqueOrThrow
   */
  export type AuthSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession findFirst
   */
  export type AuthSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession findFirstOrThrow
   */
  export type AuthSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSession to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthSessions.
     */
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession findMany
   */
  export type AuthSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter, which AuthSessions to fetch.
     */
    where?: AuthSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthSessions to fetch.
     */
    orderBy?: AuthSessionOrderByWithRelationInput | AuthSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthSessions.
     */
    cursor?: AuthSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthSessions.
     */
    skip?: number
    distinct?: AuthSessionScalarFieldEnum | AuthSessionScalarFieldEnum[]
  }

  /**
   * AuthSession create
   */
  export type AuthSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthSession.
     */
    data: XOR<AuthSessionCreateInput, AuthSessionUncheckedCreateInput>
  }

  /**
   * AuthSession createMany
   */
  export type AuthSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthSessions.
     */
    data: AuthSessionCreateManyInput | AuthSessionCreateManyInput[]
  }

  /**
   * AuthSession createManyAndReturn
   */
  export type AuthSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuthSessions.
     */
    data: AuthSessionCreateManyInput | AuthSessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthSession update
   */
  export type AuthSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthSession.
     */
    data: XOR<AuthSessionUpdateInput, AuthSessionUncheckedUpdateInput>
    /**
     * Choose, which AuthSession to update.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession updateMany
   */
  export type AuthSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthSessions.
     */
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyInput>
    /**
     * Filter which AuthSessions to update
     */
    where?: AuthSessionWhereInput
  }

  /**
   * AuthSession upsert
   */
  export type AuthSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthSession to update in case it exists.
     */
    where: AuthSessionWhereUniqueInput
    /**
     * In case the AuthSession found by the `where` argument doesn't exist, create a new AuthSession with this data.
     */
    create: XOR<AuthSessionCreateInput, AuthSessionUncheckedCreateInput>
    /**
     * In case the AuthSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthSessionUpdateInput, AuthSessionUncheckedUpdateInput>
  }

  /**
   * AuthSession delete
   */
  export type AuthSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
    /**
     * Filter which AuthSession to delete.
     */
    where: AuthSessionWhereUniqueInput
  }

  /**
   * AuthSession deleteMany
   */
  export type AuthSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthSessions to delete
     */
    where?: AuthSessionWhereInput
  }

  /**
   * AuthSession without action
   */
  export type AuthSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthSession
     */
    select?: AuthSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthSessionInclude<ExtArgs> | null
  }


  /**
   * Model OAuthProvider
   */

  export type AggregateOAuthProvider = {
    _count: OAuthProviderCountAggregateOutputType | null
    _min: OAuthProviderMinAggregateOutputType | null
    _max: OAuthProviderMaxAggregateOutputType | null
  }

  export type OAuthProviderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    providerUserId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OAuthProviderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: string | null
    providerUserId: string | null
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OAuthProviderCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    providerUserId: number
    accessToken: number
    refreshToken: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OAuthProviderMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerUserId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OAuthProviderMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerUserId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OAuthProviderCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    providerUserId?: true
    accessToken?: true
    refreshToken?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OAuthProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthProvider to aggregate.
     */
    where?: OAuthProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthProviders to fetch.
     */
    orderBy?: OAuthProviderOrderByWithRelationInput | OAuthProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OAuthProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OAuthProviders
    **/
    _count?: true | OAuthProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OAuthProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OAuthProviderMaxAggregateInputType
  }

  export type GetOAuthProviderAggregateType<T extends OAuthProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateOAuthProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOAuthProvider[P]>
      : GetScalarType<T[P], AggregateOAuthProvider[P]>
  }




  export type OAuthProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OAuthProviderWhereInput
    orderBy?: OAuthProviderOrderByWithAggregationInput | OAuthProviderOrderByWithAggregationInput[]
    by: OAuthProviderScalarFieldEnum[] | OAuthProviderScalarFieldEnum
    having?: OAuthProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OAuthProviderCountAggregateInputType | true
    _min?: OAuthProviderMinAggregateInputType
    _max?: OAuthProviderMaxAggregateInputType
  }

  export type OAuthProviderGroupByOutputType = {
    id: string
    userId: string
    provider: string
    providerUserId: string
    accessToken: string | null
    refreshToken: string | null
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: OAuthProviderCountAggregateOutputType | null
    _min: OAuthProviderMinAggregateOutputType | null
    _max: OAuthProviderMaxAggregateOutputType | null
  }

  type GetOAuthProviderGroupByPayload<T extends OAuthProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OAuthProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OAuthProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OAuthProviderGroupByOutputType[P]>
            : GetScalarType<T[P], OAuthProviderGroupByOutputType[P]>
        }
      >
    >


  export type OAuthProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerUserId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthProvider"]>

  export type OAuthProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerUserId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oAuthProvider"]>

  export type OAuthProviderSelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    providerUserId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OAuthProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OAuthProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OAuthProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OAuthProvider"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      provider: string
      providerUserId: string
      accessToken: string | null
      refreshToken: string | null
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["oAuthProvider"]>
    composites: {}
  }

  type OAuthProviderGetPayload<S extends boolean | null | undefined | OAuthProviderDefaultArgs> = $Result.GetResult<Prisma.$OAuthProviderPayload, S>

  type OAuthProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OAuthProviderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OAuthProviderCountAggregateInputType | true
    }

  export interface OAuthProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OAuthProvider'], meta: { name: 'OAuthProvider' } }
    /**
     * Find zero or one OAuthProvider that matches the filter.
     * @param {OAuthProviderFindUniqueArgs} args - Arguments to find a OAuthProvider
     * @example
     * // Get one OAuthProvider
     * const oAuthProvider = await prisma.oAuthProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OAuthProviderFindUniqueArgs>(args: SelectSubset<T, OAuthProviderFindUniqueArgs<ExtArgs>>): Prisma__OAuthProviderClient<$Result.GetResult<Prisma.$OAuthProviderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OAuthProvider that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OAuthProviderFindUniqueOrThrowArgs} args - Arguments to find a OAuthProvider
     * @example
     * // Get one OAuthProvider
     * const oAuthProvider = await prisma.oAuthProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OAuthProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, OAuthProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OAuthProviderClient<$Result.GetResult<Prisma.$OAuthProviderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OAuthProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthProviderFindFirstArgs} args - Arguments to find a OAuthProvider
     * @example
     * // Get one OAuthProvider
     * const oAuthProvider = await prisma.oAuthProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OAuthProviderFindFirstArgs>(args?: SelectSubset<T, OAuthProviderFindFirstArgs<ExtArgs>>): Prisma__OAuthProviderClient<$Result.GetResult<Prisma.$OAuthProviderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OAuthProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthProviderFindFirstOrThrowArgs} args - Arguments to find a OAuthProvider
     * @example
     * // Get one OAuthProvider
     * const oAuthProvider = await prisma.oAuthProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OAuthProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, OAuthProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OAuthProviderClient<$Result.GetResult<Prisma.$OAuthProviderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OAuthProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OAuthProviders
     * const oAuthProviders = await prisma.oAuthProvider.findMany()
     * 
     * // Get first 10 OAuthProviders
     * const oAuthProviders = await prisma.oAuthProvider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oAuthProviderWithIdOnly = await prisma.oAuthProvider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OAuthProviderFindManyArgs>(args?: SelectSubset<T, OAuthProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthProviderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OAuthProvider.
     * @param {OAuthProviderCreateArgs} args - Arguments to create a OAuthProvider.
     * @example
     * // Create one OAuthProvider
     * const OAuthProvider = await prisma.oAuthProvider.create({
     *   data: {
     *     // ... data to create a OAuthProvider
     *   }
     * })
     * 
     */
    create<T extends OAuthProviderCreateArgs>(args: SelectSubset<T, OAuthProviderCreateArgs<ExtArgs>>): Prisma__OAuthProviderClient<$Result.GetResult<Prisma.$OAuthProviderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OAuthProviders.
     * @param {OAuthProviderCreateManyArgs} args - Arguments to create many OAuthProviders.
     * @example
     * // Create many OAuthProviders
     * const oAuthProvider = await prisma.oAuthProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OAuthProviderCreateManyArgs>(args?: SelectSubset<T, OAuthProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OAuthProviders and returns the data saved in the database.
     * @param {OAuthProviderCreateManyAndReturnArgs} args - Arguments to create many OAuthProviders.
     * @example
     * // Create many OAuthProviders
     * const oAuthProvider = await prisma.oAuthProvider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OAuthProviders and only return the `id`
     * const oAuthProviderWithIdOnly = await prisma.oAuthProvider.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OAuthProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, OAuthProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OAuthProviderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OAuthProvider.
     * @param {OAuthProviderDeleteArgs} args - Arguments to delete one OAuthProvider.
     * @example
     * // Delete one OAuthProvider
     * const OAuthProvider = await prisma.oAuthProvider.delete({
     *   where: {
     *     // ... filter to delete one OAuthProvider
     *   }
     * })
     * 
     */
    delete<T extends OAuthProviderDeleteArgs>(args: SelectSubset<T, OAuthProviderDeleteArgs<ExtArgs>>): Prisma__OAuthProviderClient<$Result.GetResult<Prisma.$OAuthProviderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OAuthProvider.
     * @param {OAuthProviderUpdateArgs} args - Arguments to update one OAuthProvider.
     * @example
     * // Update one OAuthProvider
     * const oAuthProvider = await prisma.oAuthProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OAuthProviderUpdateArgs>(args: SelectSubset<T, OAuthProviderUpdateArgs<ExtArgs>>): Prisma__OAuthProviderClient<$Result.GetResult<Prisma.$OAuthProviderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OAuthProviders.
     * @param {OAuthProviderDeleteManyArgs} args - Arguments to filter OAuthProviders to delete.
     * @example
     * // Delete a few OAuthProviders
     * const { count } = await prisma.oAuthProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OAuthProviderDeleteManyArgs>(args?: SelectSubset<T, OAuthProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OAuthProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OAuthProviders
     * const oAuthProvider = await prisma.oAuthProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OAuthProviderUpdateManyArgs>(args: SelectSubset<T, OAuthProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OAuthProvider.
     * @param {OAuthProviderUpsertArgs} args - Arguments to update or create a OAuthProvider.
     * @example
     * // Update or create a OAuthProvider
     * const oAuthProvider = await prisma.oAuthProvider.upsert({
     *   create: {
     *     // ... data to create a OAuthProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OAuthProvider we want to update
     *   }
     * })
     */
    upsert<T extends OAuthProviderUpsertArgs>(args: SelectSubset<T, OAuthProviderUpsertArgs<ExtArgs>>): Prisma__OAuthProviderClient<$Result.GetResult<Prisma.$OAuthProviderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OAuthProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthProviderCountArgs} args - Arguments to filter OAuthProviders to count.
     * @example
     * // Count the number of OAuthProviders
     * const count = await prisma.oAuthProvider.count({
     *   where: {
     *     // ... the filter for the OAuthProviders we want to count
     *   }
     * })
    **/
    count<T extends OAuthProviderCountArgs>(
      args?: Subset<T, OAuthProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OAuthProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OAuthProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OAuthProviderAggregateArgs>(args: Subset<T, OAuthProviderAggregateArgs>): Prisma.PrismaPromise<GetOAuthProviderAggregateType<T>>

    /**
     * Group by OAuthProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OAuthProviderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OAuthProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OAuthProviderGroupByArgs['orderBy'] }
        : { orderBy?: OAuthProviderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OAuthProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOAuthProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OAuthProvider model
   */
  readonly fields: OAuthProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OAuthProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OAuthProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OAuthProvider model
   */ 
  interface OAuthProviderFieldRefs {
    readonly id: FieldRef<"OAuthProvider", 'String'>
    readonly userId: FieldRef<"OAuthProvider", 'String'>
    readonly provider: FieldRef<"OAuthProvider", 'String'>
    readonly providerUserId: FieldRef<"OAuthProvider", 'String'>
    readonly accessToken: FieldRef<"OAuthProvider", 'String'>
    readonly refreshToken: FieldRef<"OAuthProvider", 'String'>
    readonly expiresAt: FieldRef<"OAuthProvider", 'DateTime'>
    readonly createdAt: FieldRef<"OAuthProvider", 'DateTime'>
    readonly updatedAt: FieldRef<"OAuthProvider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OAuthProvider findUnique
   */
  export type OAuthProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthProvider
     */
    select?: OAuthProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthProviderInclude<ExtArgs> | null
    /**
     * Filter, which OAuthProvider to fetch.
     */
    where: OAuthProviderWhereUniqueInput
  }

  /**
   * OAuthProvider findUniqueOrThrow
   */
  export type OAuthProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthProvider
     */
    select?: OAuthProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthProviderInclude<ExtArgs> | null
    /**
     * Filter, which OAuthProvider to fetch.
     */
    where: OAuthProviderWhereUniqueInput
  }

  /**
   * OAuthProvider findFirst
   */
  export type OAuthProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthProvider
     */
    select?: OAuthProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthProviderInclude<ExtArgs> | null
    /**
     * Filter, which OAuthProvider to fetch.
     */
    where?: OAuthProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthProviders to fetch.
     */
    orderBy?: OAuthProviderOrderByWithRelationInput | OAuthProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthProviders.
     */
    cursor?: OAuthProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthProviders.
     */
    distinct?: OAuthProviderScalarFieldEnum | OAuthProviderScalarFieldEnum[]
  }

  /**
   * OAuthProvider findFirstOrThrow
   */
  export type OAuthProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthProvider
     */
    select?: OAuthProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthProviderInclude<ExtArgs> | null
    /**
     * Filter, which OAuthProvider to fetch.
     */
    where?: OAuthProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthProviders to fetch.
     */
    orderBy?: OAuthProviderOrderByWithRelationInput | OAuthProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OAuthProviders.
     */
    cursor?: OAuthProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OAuthProviders.
     */
    distinct?: OAuthProviderScalarFieldEnum | OAuthProviderScalarFieldEnum[]
  }

  /**
   * OAuthProvider findMany
   */
  export type OAuthProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthProvider
     */
    select?: OAuthProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthProviderInclude<ExtArgs> | null
    /**
     * Filter, which OAuthProviders to fetch.
     */
    where?: OAuthProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OAuthProviders to fetch.
     */
    orderBy?: OAuthProviderOrderByWithRelationInput | OAuthProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OAuthProviders.
     */
    cursor?: OAuthProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OAuthProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OAuthProviders.
     */
    skip?: number
    distinct?: OAuthProviderScalarFieldEnum | OAuthProviderScalarFieldEnum[]
  }

  /**
   * OAuthProvider create
   */
  export type OAuthProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthProvider
     */
    select?: OAuthProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a OAuthProvider.
     */
    data: XOR<OAuthProviderCreateInput, OAuthProviderUncheckedCreateInput>
  }

  /**
   * OAuthProvider createMany
   */
  export type OAuthProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OAuthProviders.
     */
    data: OAuthProviderCreateManyInput | OAuthProviderCreateManyInput[]
  }

  /**
   * OAuthProvider createManyAndReturn
   */
  export type OAuthProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthProvider
     */
    select?: OAuthProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OAuthProviders.
     */
    data: OAuthProviderCreateManyInput | OAuthProviderCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthProviderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OAuthProvider update
   */
  export type OAuthProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthProvider
     */
    select?: OAuthProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a OAuthProvider.
     */
    data: XOR<OAuthProviderUpdateInput, OAuthProviderUncheckedUpdateInput>
    /**
     * Choose, which OAuthProvider to update.
     */
    where: OAuthProviderWhereUniqueInput
  }

  /**
   * OAuthProvider updateMany
   */
  export type OAuthProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OAuthProviders.
     */
    data: XOR<OAuthProviderUpdateManyMutationInput, OAuthProviderUncheckedUpdateManyInput>
    /**
     * Filter which OAuthProviders to update
     */
    where?: OAuthProviderWhereInput
  }

  /**
   * OAuthProvider upsert
   */
  export type OAuthProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthProvider
     */
    select?: OAuthProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the OAuthProvider to update in case it exists.
     */
    where: OAuthProviderWhereUniqueInput
    /**
     * In case the OAuthProvider found by the `where` argument doesn't exist, create a new OAuthProvider with this data.
     */
    create: XOR<OAuthProviderCreateInput, OAuthProviderUncheckedCreateInput>
    /**
     * In case the OAuthProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OAuthProviderUpdateInput, OAuthProviderUncheckedUpdateInput>
  }

  /**
   * OAuthProvider delete
   */
  export type OAuthProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthProvider
     */
    select?: OAuthProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthProviderInclude<ExtArgs> | null
    /**
     * Filter which OAuthProvider to delete.
     */
    where: OAuthProviderWhereUniqueInput
  }

  /**
   * OAuthProvider deleteMany
   */
  export type OAuthProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OAuthProviders to delete
     */
    where?: OAuthProviderWhereInput
  }

  /**
   * OAuthProvider without action
   */
  export type OAuthProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OAuthProvider
     */
    select?: OAuthProviderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OAuthProviderInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TaskScalarFieldEnum: {
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

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
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

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const AreaScalarFieldEnum: {
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

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


  export const SectionScalarFieldEnum: {
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

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const CalendarScalarFieldEnum: {
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

  export type CalendarScalarFieldEnum = (typeof CalendarScalarFieldEnum)[keyof typeof CalendarScalarFieldEnum]


  export const ChecklistItemScalarFieldEnum: {
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

  export type ChecklistItemScalarFieldEnum = (typeof ChecklistItemScalarFieldEnum)[keyof typeof ChecklistItemScalarFieldEnum]


  export const TagScalarFieldEnum: {
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

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const RecurrenceScalarFieldEnum: {
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

  export type RecurrenceScalarFieldEnum = (typeof RecurrenceScalarFieldEnum)[keyof typeof RecurrenceScalarFieldEnum]


  export const SyncLogScalarFieldEnum: {
    id: 'id',
    entityId: 'entityId',
    entityType: 'entityType',
    operation: 'operation',
    data: 'data',
    timestamp: 'timestamp',
    synced: 'synced'
  };

  export type SyncLogScalarFieldEnum = (typeof SyncLogScalarFieldEnum)[keyof typeof SyncLogScalarFieldEnum]


  export const AuthSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expires: 'expires',
    createdAt: 'createdAt'
  };

  export type AuthSessionScalarFieldEnum = (typeof AuthSessionScalarFieldEnum)[keyof typeof AuthSessionScalarFieldEnum]


  export const OAuthProviderScalarFieldEnum: {
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

  export type OAuthProviderScalarFieldEnum = (typeof OAuthProviderScalarFieldEnum)[keyof typeof OAuthProviderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    password?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordResetExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    tasks?: TaskListRelationFilter
    projects?: ProjectListRelationFilter
    areas?: AreaListRelationFilter
    authSessions?: AuthSessionListRelationFilter
    oauthProviders?: OAuthProviderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpires?: SortOrderInput | SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    areas?: AreaOrderByRelationAggregateInput
    authSessions?: AuthSessionOrderByRelationAggregateInput
    oauthProviders?: OAuthProviderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    password?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordResetExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    tasks?: TaskListRelationFilter
    projects?: ProjectListRelationFilter
    areas?: AreaListRelationFilter
    authSessions?: AuthSessionListRelationFilter
    oauthProviders?: OAuthProviderListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetExpires?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    emailVerificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordResetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordResetExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    name?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    type?: StringNullableFilter<"Task"> | string | null
    status?: StringFilter<"Task"> | string
    priority?: StringFilter<"Task"> | string
    startDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    allDay?: BoolFilter<"Task"> | boolean
    position?: IntNullableFilter<"Task"> | number | null
    sort?: IntNullableFilter<"Task"> | number | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    userId?: StringFilter<"Task"> | string
    projectId?: StringNullableFilter<"Task"> | string | null
    areaId?: StringNullableFilter<"Task"> | string | null
    sectionId?: StringNullableFilter<"Task"> | string | null
    parentTaskId?: StringNullableFilter<"Task"> | string | null
    calendarId?: StringNullableFilter<"Task"> | string | null
    recurrenceId?: StringNullableFilter<"Task"> | string | null
    syncId?: StringNullableFilter<"Task"> | string | null
    lastSync?: DateTimeNullableFilter<"Task"> | Date | string | null
    isDeleted?: BoolFilter<"Task"> | boolean
    version?: IntFilter<"Task"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    project?: XOR<ProjectNullableRelationFilter, ProjectWhereInput> | null
    area?: XOR<AreaNullableRelationFilter, AreaWhereInput> | null
    section?: XOR<SectionNullableRelationFilter, SectionWhereInput> | null
    parentTask?: XOR<TaskNullableRelationFilter, TaskWhereInput> | null
    subtasks?: TaskListRelationFilter
    calendar?: XOR<CalendarNullableRelationFilter, CalendarWhereInput> | null
    recurrence?: XOR<RecurrenceNullableRelationFilter, RecurrenceWhereInput> | null
    checklistItems?: ChecklistItemListRelationFilter
    tags?: TagListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    allDay?: SortOrder
    position?: SortOrderInput | SortOrder
    sort?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrderInput | SortOrder
    areaId?: SortOrderInput | SortOrder
    sectionId?: SortOrderInput | SortOrder
    parentTaskId?: SortOrderInput | SortOrder
    calendarId?: SortOrderInput | SortOrder
    recurrenceId?: SortOrderInput | SortOrder
    syncId?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    area?: AreaOrderByWithRelationInput
    section?: SectionOrderByWithRelationInput
    parentTask?: TaskOrderByWithRelationInput
    subtasks?: TaskOrderByRelationAggregateInput
    calendar?: CalendarOrderByWithRelationInput
    recurrence?: RecurrenceOrderByWithRelationInput
    checklistItems?: ChecklistItemOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    syncId?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    name?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    type?: StringNullableFilter<"Task"> | string | null
    status?: StringFilter<"Task"> | string
    priority?: StringFilter<"Task"> | string
    startDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    allDay?: BoolFilter<"Task"> | boolean
    position?: IntNullableFilter<"Task"> | number | null
    sort?: IntNullableFilter<"Task"> | number | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    userId?: StringFilter<"Task"> | string
    projectId?: StringNullableFilter<"Task"> | string | null
    areaId?: StringNullableFilter<"Task"> | string | null
    sectionId?: StringNullableFilter<"Task"> | string | null
    parentTaskId?: StringNullableFilter<"Task"> | string | null
    calendarId?: StringNullableFilter<"Task"> | string | null
    recurrenceId?: StringNullableFilter<"Task"> | string | null
    lastSync?: DateTimeNullableFilter<"Task"> | Date | string | null
    isDeleted?: BoolFilter<"Task"> | boolean
    version?: IntFilter<"Task"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    project?: XOR<ProjectNullableRelationFilter, ProjectWhereInput> | null
    area?: XOR<AreaNullableRelationFilter, AreaWhereInput> | null
    section?: XOR<SectionNullableRelationFilter, SectionWhereInput> | null
    parentTask?: XOR<TaskNullableRelationFilter, TaskWhereInput> | null
    subtasks?: TaskListRelationFilter
    calendar?: XOR<CalendarNullableRelationFilter, CalendarWhereInput> | null
    recurrence?: XOR<RecurrenceNullableRelationFilter, RecurrenceWhereInput> | null
    checklistItems?: ChecklistItemListRelationFilter
    tags?: TagListRelationFilter
  }, "id" | "syncId">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    allDay?: SortOrder
    position?: SortOrderInput | SortOrder
    sort?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrderInput | SortOrder
    areaId?: SortOrderInput | SortOrder
    sectionId?: SortOrderInput | SortOrder
    parentTaskId?: SortOrderInput | SortOrder
    calendarId?: SortOrderInput | SortOrder
    recurrenceId?: SortOrderInput | SortOrder
    syncId?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    name?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    type?: StringNullableWithAggregatesFilter<"Task"> | string | null
    status?: StringWithAggregatesFilter<"Task"> | string
    priority?: StringWithAggregatesFilter<"Task"> | string
    startDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    allDay?: BoolWithAggregatesFilter<"Task"> | boolean
    position?: IntNullableWithAggregatesFilter<"Task"> | number | null
    sort?: IntNullableWithAggregatesFilter<"Task"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    userId?: StringWithAggregatesFilter<"Task"> | string
    projectId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    areaId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    sectionId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    parentTaskId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    calendarId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    recurrenceId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    syncId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    lastSync?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    isDeleted?: BoolWithAggregatesFilter<"Task"> | boolean
    version?: IntWithAggregatesFilter<"Task"> | number
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    color?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    userId?: StringFilter<"Project"> | string
    syncId?: StringNullableFilter<"Project"> | string | null
    lastSync?: DateTimeNullableFilter<"Project"> | Date | string | null
    isDeleted?: BoolFilter<"Project"> | boolean
    version?: IntFilter<"Project"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
    sections?: SectionListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    syncId?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
    user?: UserOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
    sections?: SectionOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    syncId?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    color?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    userId?: StringFilter<"Project"> | string
    lastSync?: DateTimeNullableFilter<"Project"> | Date | string | null
    isDeleted?: BoolFilter<"Project"> | boolean
    version?: IntFilter<"Project"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
    sections?: SectionListRelationFilter
  }, "id" | "syncId">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    syncId?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    color?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    userId?: StringWithAggregatesFilter<"Project"> | string
    syncId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    lastSync?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    isDeleted?: BoolWithAggregatesFilter<"Project"> | boolean
    version?: IntWithAggregatesFilter<"Project"> | number
  }

  export type AreaWhereInput = {
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    id?: StringFilter<"Area"> | string
    name?: StringFilter<"Area"> | string
    description?: StringNullableFilter<"Area"> | string | null
    color?: StringNullableFilter<"Area"> | string | null
    position?: IntNullableFilter<"Area"> | number | null
    createdAt?: DateTimeFilter<"Area"> | Date | string
    updatedAt?: DateTimeFilter<"Area"> | Date | string
    userId?: StringFilter<"Area"> | string
    syncId?: StringNullableFilter<"Area"> | string | null
    lastSync?: DateTimeNullableFilter<"Area"> | Date | string | null
    isDeleted?: BoolFilter<"Area"> | boolean
    version?: IntFilter<"Area"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type AreaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    syncId?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
    user?: UserOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type AreaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    syncId?: string
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    name?: StringFilter<"Area"> | string
    description?: StringNullableFilter<"Area"> | string | null
    color?: StringNullableFilter<"Area"> | string | null
    position?: IntNullableFilter<"Area"> | number | null
    createdAt?: DateTimeFilter<"Area"> | Date | string
    updatedAt?: DateTimeFilter<"Area"> | Date | string
    userId?: StringFilter<"Area"> | string
    lastSync?: DateTimeNullableFilter<"Area"> | Date | string | null
    isDeleted?: BoolFilter<"Area"> | boolean
    version?: IntFilter<"Area"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    tasks?: TaskListRelationFilter
  }, "id" | "syncId">

  export type AreaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    syncId?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
    _count?: AreaCountOrderByAggregateInput
    _avg?: AreaAvgOrderByAggregateInput
    _max?: AreaMaxOrderByAggregateInput
    _min?: AreaMinOrderByAggregateInput
    _sum?: AreaSumOrderByAggregateInput
  }

  export type AreaScalarWhereWithAggregatesInput = {
    AND?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    OR?: AreaScalarWhereWithAggregatesInput[]
    NOT?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Area"> | string
    name?: StringWithAggregatesFilter<"Area"> | string
    description?: StringNullableWithAggregatesFilter<"Area"> | string | null
    color?: StringNullableWithAggregatesFilter<"Area"> | string | null
    position?: IntNullableWithAggregatesFilter<"Area"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Area"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Area"> | Date | string
    userId?: StringWithAggregatesFilter<"Area"> | string
    syncId?: StringNullableWithAggregatesFilter<"Area"> | string | null
    lastSync?: DateTimeNullableWithAggregatesFilter<"Area"> | Date | string | null
    isDeleted?: BoolWithAggregatesFilter<"Area"> | boolean
    version?: IntWithAggregatesFilter<"Area"> | number
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: StringFilter<"Section"> | string
    name?: StringFilter<"Section"> | string
    position?: IntNullableFilter<"Section"> | number | null
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    projectId?: StringFilter<"Section"> | string
    syncId?: StringNullableFilter<"Section"> | string | null
    lastSync?: DateTimeNullableFilter<"Section"> | Date | string | null
    isDeleted?: BoolFilter<"Section"> | boolean
    version?: IntFilter<"Section"> | number
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    syncId?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
    project?: ProjectOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    syncId?: string
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    name?: StringFilter<"Section"> | string
    position?: IntNullableFilter<"Section"> | number | null
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    projectId?: StringFilter<"Section"> | string
    lastSync?: DateTimeNullableFilter<"Section"> | Date | string | null
    isDeleted?: BoolFilter<"Section"> | boolean
    version?: IntFilter<"Section"> | number
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    tasks?: TaskListRelationFilter
  }, "id" | "syncId">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    syncId?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _avg?: SectionAvgOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
    _sum?: SectionSumOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Section"> | string
    name?: StringWithAggregatesFilter<"Section"> | string
    position?: IntNullableWithAggregatesFilter<"Section"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
    projectId?: StringWithAggregatesFilter<"Section"> | string
    syncId?: StringNullableWithAggregatesFilter<"Section"> | string | null
    lastSync?: DateTimeNullableWithAggregatesFilter<"Section"> | Date | string | null
    isDeleted?: BoolWithAggregatesFilter<"Section"> | boolean
    version?: IntWithAggregatesFilter<"Section"> | number
  }

  export type CalendarWhereInput = {
    AND?: CalendarWhereInput | CalendarWhereInput[]
    OR?: CalendarWhereInput[]
    NOT?: CalendarWhereInput | CalendarWhereInput[]
    id?: StringFilter<"Calendar"> | string
    name?: StringFilter<"Calendar"> | string
    description?: StringNullableFilter<"Calendar"> | string | null
    color?: StringNullableFilter<"Calendar"> | string | null
    createdAt?: DateTimeFilter<"Calendar"> | Date | string
    updatedAt?: DateTimeFilter<"Calendar"> | Date | string
    syncId?: StringNullableFilter<"Calendar"> | string | null
    lastSync?: DateTimeNullableFilter<"Calendar"> | Date | string | null
    isDeleted?: BoolFilter<"Calendar"> | boolean
    version?: IntFilter<"Calendar"> | number
    tasks?: TaskListRelationFilter
  }

  export type CalendarOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    syncId?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type CalendarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    syncId?: string
    AND?: CalendarWhereInput | CalendarWhereInput[]
    OR?: CalendarWhereInput[]
    NOT?: CalendarWhereInput | CalendarWhereInput[]
    name?: StringFilter<"Calendar"> | string
    description?: StringNullableFilter<"Calendar"> | string | null
    color?: StringNullableFilter<"Calendar"> | string | null
    createdAt?: DateTimeFilter<"Calendar"> | Date | string
    updatedAt?: DateTimeFilter<"Calendar"> | Date | string
    lastSync?: DateTimeNullableFilter<"Calendar"> | Date | string | null
    isDeleted?: BoolFilter<"Calendar"> | boolean
    version?: IntFilter<"Calendar"> | number
    tasks?: TaskListRelationFilter
  }, "id" | "syncId">

  export type CalendarOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    color?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    syncId?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
    _count?: CalendarCountOrderByAggregateInput
    _avg?: CalendarAvgOrderByAggregateInput
    _max?: CalendarMaxOrderByAggregateInput
    _min?: CalendarMinOrderByAggregateInput
    _sum?: CalendarSumOrderByAggregateInput
  }

  export type CalendarScalarWhereWithAggregatesInput = {
    AND?: CalendarScalarWhereWithAggregatesInput | CalendarScalarWhereWithAggregatesInput[]
    OR?: CalendarScalarWhereWithAggregatesInput[]
    NOT?: CalendarScalarWhereWithAggregatesInput | CalendarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Calendar"> | string
    name?: StringWithAggregatesFilter<"Calendar"> | string
    description?: StringNullableWithAggregatesFilter<"Calendar"> | string | null
    color?: StringNullableWithAggregatesFilter<"Calendar"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Calendar"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Calendar"> | Date | string
    syncId?: StringNullableWithAggregatesFilter<"Calendar"> | string | null
    lastSync?: DateTimeNullableWithAggregatesFilter<"Calendar"> | Date | string | null
    isDeleted?: BoolWithAggregatesFilter<"Calendar"> | boolean
    version?: IntWithAggregatesFilter<"Calendar"> | number
  }

  export type ChecklistItemWhereInput = {
    AND?: ChecklistItemWhereInput | ChecklistItemWhereInput[]
    OR?: ChecklistItemWhereInput[]
    NOT?: ChecklistItemWhereInput | ChecklistItemWhereInput[]
    id?: StringFilter<"ChecklistItem"> | string
    text?: StringFilter<"ChecklistItem"> | string
    completed?: BoolFilter<"ChecklistItem"> | boolean
    position?: IntNullableFilter<"ChecklistItem"> | number | null
    createdAt?: DateTimeFilter<"ChecklistItem"> | Date | string
    updatedAt?: DateTimeFilter<"ChecklistItem"> | Date | string
    taskId?: StringFilter<"ChecklistItem"> | string
    syncId?: StringNullableFilter<"ChecklistItem"> | string | null
    lastSync?: DateTimeNullableFilter<"ChecklistItem"> | Date | string | null
    isDeleted?: BoolFilter<"ChecklistItem"> | boolean
    version?: IntFilter<"ChecklistItem"> | number
    task?: XOR<TaskRelationFilter, TaskWhereInput>
  }

  export type ChecklistItemOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    completed?: SortOrder
    position?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    syncId?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
    task?: TaskOrderByWithRelationInput
  }

  export type ChecklistItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    syncId?: string
    AND?: ChecklistItemWhereInput | ChecklistItemWhereInput[]
    OR?: ChecklistItemWhereInput[]
    NOT?: ChecklistItemWhereInput | ChecklistItemWhereInput[]
    text?: StringFilter<"ChecklistItem"> | string
    completed?: BoolFilter<"ChecklistItem"> | boolean
    position?: IntNullableFilter<"ChecklistItem"> | number | null
    createdAt?: DateTimeFilter<"ChecklistItem"> | Date | string
    updatedAt?: DateTimeFilter<"ChecklistItem"> | Date | string
    taskId?: StringFilter<"ChecklistItem"> | string
    lastSync?: DateTimeNullableFilter<"ChecklistItem"> | Date | string | null
    isDeleted?: BoolFilter<"ChecklistItem"> | boolean
    version?: IntFilter<"ChecklistItem"> | number
    task?: XOR<TaskRelationFilter, TaskWhereInput>
  }, "id" | "syncId">

  export type ChecklistItemOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    completed?: SortOrder
    position?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    syncId?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
    _count?: ChecklistItemCountOrderByAggregateInput
    _avg?: ChecklistItemAvgOrderByAggregateInput
    _max?: ChecklistItemMaxOrderByAggregateInput
    _min?: ChecklistItemMinOrderByAggregateInput
    _sum?: ChecklistItemSumOrderByAggregateInput
  }

  export type ChecklistItemScalarWhereWithAggregatesInput = {
    AND?: ChecklistItemScalarWhereWithAggregatesInput | ChecklistItemScalarWhereWithAggregatesInput[]
    OR?: ChecklistItemScalarWhereWithAggregatesInput[]
    NOT?: ChecklistItemScalarWhereWithAggregatesInput | ChecklistItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChecklistItem"> | string
    text?: StringWithAggregatesFilter<"ChecklistItem"> | string
    completed?: BoolWithAggregatesFilter<"ChecklistItem"> | boolean
    position?: IntNullableWithAggregatesFilter<"ChecklistItem"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ChecklistItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChecklistItem"> | Date | string
    taskId?: StringWithAggregatesFilter<"ChecklistItem"> | string
    syncId?: StringNullableWithAggregatesFilter<"ChecklistItem"> | string | null
    lastSync?: DateTimeNullableWithAggregatesFilter<"ChecklistItem"> | Date | string | null
    isDeleted?: BoolWithAggregatesFilter<"ChecklistItem"> | boolean
    version?: IntWithAggregatesFilter<"ChecklistItem"> | number
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    color?: StringNullableFilter<"Tag"> | string | null
    sort?: IntNullableFilter<"Tag"> | number | null
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    syncId?: StringNullableFilter<"Tag"> | string | null
    lastSync?: DateTimeNullableFilter<"Tag"> | Date | string | null
    isDeleted?: BoolFilter<"Tag"> | boolean
    version?: IntFilter<"Tag"> | number
    tasks?: TaskListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    sort?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    syncId?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    syncId?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    name?: StringFilter<"Tag"> | string
    color?: StringNullableFilter<"Tag"> | string | null
    sort?: IntNullableFilter<"Tag"> | number | null
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    lastSync?: DateTimeNullableFilter<"Tag"> | Date | string | null
    isDeleted?: BoolFilter<"Tag"> | boolean
    version?: IntFilter<"Tag"> | number
    tasks?: TaskListRelationFilter
  }, "id" | "syncId">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    sort?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    syncId?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    color?: StringNullableWithAggregatesFilter<"Tag"> | string | null
    sort?: IntNullableWithAggregatesFilter<"Tag"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    syncId?: StringNullableWithAggregatesFilter<"Tag"> | string | null
    lastSync?: DateTimeNullableWithAggregatesFilter<"Tag"> | Date | string | null
    isDeleted?: BoolWithAggregatesFilter<"Tag"> | boolean
    version?: IntWithAggregatesFilter<"Tag"> | number
  }

  export type RecurrenceWhereInput = {
    AND?: RecurrenceWhereInput | RecurrenceWhereInput[]
    OR?: RecurrenceWhereInput[]
    NOT?: RecurrenceWhereInput | RecurrenceWhereInput[]
    id?: StringFilter<"Recurrence"> | string
    type?: StringFilter<"Recurrence"> | string
    interval?: IntFilter<"Recurrence"> | number
    endDate?: DateTimeNullableFilter<"Recurrence"> | Date | string | null
    createdAt?: DateTimeFilter<"Recurrence"> | Date | string
    updatedAt?: DateTimeFilter<"Recurrence"> | Date | string
    syncId?: StringNullableFilter<"Recurrence"> | string | null
    lastSync?: DateTimeNullableFilter<"Recurrence"> | Date | string | null
    isDeleted?: BoolFilter<"Recurrence"> | boolean
    version?: IntFilter<"Recurrence"> | number
    tasks?: TaskListRelationFilter
  }

  export type RecurrenceOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    interval?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    syncId?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type RecurrenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    syncId?: string
    AND?: RecurrenceWhereInput | RecurrenceWhereInput[]
    OR?: RecurrenceWhereInput[]
    NOT?: RecurrenceWhereInput | RecurrenceWhereInput[]
    type?: StringFilter<"Recurrence"> | string
    interval?: IntFilter<"Recurrence"> | number
    endDate?: DateTimeNullableFilter<"Recurrence"> | Date | string | null
    createdAt?: DateTimeFilter<"Recurrence"> | Date | string
    updatedAt?: DateTimeFilter<"Recurrence"> | Date | string
    lastSync?: DateTimeNullableFilter<"Recurrence"> | Date | string | null
    isDeleted?: BoolFilter<"Recurrence"> | boolean
    version?: IntFilter<"Recurrence"> | number
    tasks?: TaskListRelationFilter
  }, "id" | "syncId">

  export type RecurrenceOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    interval?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    syncId?: SortOrderInput | SortOrder
    lastSync?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
    _count?: RecurrenceCountOrderByAggregateInput
    _avg?: RecurrenceAvgOrderByAggregateInput
    _max?: RecurrenceMaxOrderByAggregateInput
    _min?: RecurrenceMinOrderByAggregateInput
    _sum?: RecurrenceSumOrderByAggregateInput
  }

  export type RecurrenceScalarWhereWithAggregatesInput = {
    AND?: RecurrenceScalarWhereWithAggregatesInput | RecurrenceScalarWhereWithAggregatesInput[]
    OR?: RecurrenceScalarWhereWithAggregatesInput[]
    NOT?: RecurrenceScalarWhereWithAggregatesInput | RecurrenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recurrence"> | string
    type?: StringWithAggregatesFilter<"Recurrence"> | string
    interval?: IntWithAggregatesFilter<"Recurrence"> | number
    endDate?: DateTimeNullableWithAggregatesFilter<"Recurrence"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Recurrence"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Recurrence"> | Date | string
    syncId?: StringNullableWithAggregatesFilter<"Recurrence"> | string | null
    lastSync?: DateTimeNullableWithAggregatesFilter<"Recurrence"> | Date | string | null
    isDeleted?: BoolWithAggregatesFilter<"Recurrence"> | boolean
    version?: IntWithAggregatesFilter<"Recurrence"> | number
  }

  export type SyncLogWhereInput = {
    AND?: SyncLogWhereInput | SyncLogWhereInput[]
    OR?: SyncLogWhereInput[]
    NOT?: SyncLogWhereInput | SyncLogWhereInput[]
    id?: StringFilter<"SyncLog"> | string
    entityId?: StringFilter<"SyncLog"> | string
    entityType?: StringFilter<"SyncLog"> | string
    operation?: StringFilter<"SyncLog"> | string
    data?: StringFilter<"SyncLog"> | string
    timestamp?: DateTimeFilter<"SyncLog"> | Date | string
    synced?: BoolFilter<"SyncLog"> | boolean
  }

  export type SyncLogOrderByWithRelationInput = {
    id?: SortOrder
    entityId?: SortOrder
    entityType?: SortOrder
    operation?: SortOrder
    data?: SortOrder
    timestamp?: SortOrder
    synced?: SortOrder
  }

  export type SyncLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SyncLogWhereInput | SyncLogWhereInput[]
    OR?: SyncLogWhereInput[]
    NOT?: SyncLogWhereInput | SyncLogWhereInput[]
    entityId?: StringFilter<"SyncLog"> | string
    entityType?: StringFilter<"SyncLog"> | string
    operation?: StringFilter<"SyncLog"> | string
    data?: StringFilter<"SyncLog"> | string
    timestamp?: DateTimeFilter<"SyncLog"> | Date | string
    synced?: BoolFilter<"SyncLog"> | boolean
  }, "id">

  export type SyncLogOrderByWithAggregationInput = {
    id?: SortOrder
    entityId?: SortOrder
    entityType?: SortOrder
    operation?: SortOrder
    data?: SortOrder
    timestamp?: SortOrder
    synced?: SortOrder
    _count?: SyncLogCountOrderByAggregateInput
    _max?: SyncLogMaxOrderByAggregateInput
    _min?: SyncLogMinOrderByAggregateInput
  }

  export type SyncLogScalarWhereWithAggregatesInput = {
    AND?: SyncLogScalarWhereWithAggregatesInput | SyncLogScalarWhereWithAggregatesInput[]
    OR?: SyncLogScalarWhereWithAggregatesInput[]
    NOT?: SyncLogScalarWhereWithAggregatesInput | SyncLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SyncLog"> | string
    entityId?: StringWithAggregatesFilter<"SyncLog"> | string
    entityType?: StringWithAggregatesFilter<"SyncLog"> | string
    operation?: StringWithAggregatesFilter<"SyncLog"> | string
    data?: StringWithAggregatesFilter<"SyncLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"SyncLog"> | Date | string
    synced?: BoolWithAggregatesFilter<"SyncLog"> | boolean
  }

  export type AuthSessionWhereInput = {
    AND?: AuthSessionWhereInput | AuthSessionWhereInput[]
    OR?: AuthSessionWhereInput[]
    NOT?: AuthSessionWhereInput | AuthSessionWhereInput[]
    id?: StringFilter<"AuthSession"> | string
    userId?: StringFilter<"AuthSession"> | string
    token?: StringFilter<"AuthSession"> | string
    expires?: DateTimeFilter<"AuthSession"> | Date | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AuthSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuthSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: AuthSessionWhereInput | AuthSessionWhereInput[]
    OR?: AuthSessionWhereInput[]
    NOT?: AuthSessionWhereInput | AuthSessionWhereInput[]
    userId?: StringFilter<"AuthSession"> | string
    expires?: DateTimeFilter<"AuthSession"> | Date | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type AuthSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    _count?: AuthSessionCountOrderByAggregateInput
    _max?: AuthSessionMaxOrderByAggregateInput
    _min?: AuthSessionMinOrderByAggregateInput
  }

  export type AuthSessionScalarWhereWithAggregatesInput = {
    AND?: AuthSessionScalarWhereWithAggregatesInput | AuthSessionScalarWhereWithAggregatesInput[]
    OR?: AuthSessionScalarWhereWithAggregatesInput[]
    NOT?: AuthSessionScalarWhereWithAggregatesInput | AuthSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuthSession"> | string
    userId?: StringWithAggregatesFilter<"AuthSession"> | string
    token?: StringWithAggregatesFilter<"AuthSession"> | string
    expires?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"AuthSession"> | Date | string
  }

  export type OAuthProviderWhereInput = {
    AND?: OAuthProviderWhereInput | OAuthProviderWhereInput[]
    OR?: OAuthProviderWhereInput[]
    NOT?: OAuthProviderWhereInput | OAuthProviderWhereInput[]
    id?: StringFilter<"OAuthProvider"> | string
    userId?: StringFilter<"OAuthProvider"> | string
    provider?: StringFilter<"OAuthProvider"> | string
    providerUserId?: StringFilter<"OAuthProvider"> | string
    accessToken?: StringNullableFilter<"OAuthProvider"> | string | null
    refreshToken?: StringNullableFilter<"OAuthProvider"> | string | null
    expiresAt?: DateTimeNullableFilter<"OAuthProvider"> | Date | string | null
    createdAt?: DateTimeFilter<"OAuthProvider"> | Date | string
    updatedAt?: DateTimeFilter<"OAuthProvider"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type OAuthProviderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OAuthProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerUserId?: OAuthProviderProviderProviderUserIdCompoundUniqueInput
    AND?: OAuthProviderWhereInput | OAuthProviderWhereInput[]
    OR?: OAuthProviderWhereInput[]
    NOT?: OAuthProviderWhereInput | OAuthProviderWhereInput[]
    userId?: StringFilter<"OAuthProvider"> | string
    provider?: StringFilter<"OAuthProvider"> | string
    providerUserId?: StringFilter<"OAuthProvider"> | string
    accessToken?: StringNullableFilter<"OAuthProvider"> | string | null
    refreshToken?: StringNullableFilter<"OAuthProvider"> | string | null
    expiresAt?: DateTimeNullableFilter<"OAuthProvider"> | Date | string | null
    createdAt?: DateTimeFilter<"OAuthProvider"> | Date | string
    updatedAt?: DateTimeFilter<"OAuthProvider"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerUserId">

  export type OAuthProviderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OAuthProviderCountOrderByAggregateInput
    _max?: OAuthProviderMaxOrderByAggregateInput
    _min?: OAuthProviderMinOrderByAggregateInput
  }

  export type OAuthProviderScalarWhereWithAggregatesInput = {
    AND?: OAuthProviderScalarWhereWithAggregatesInput | OAuthProviderScalarWhereWithAggregatesInput[]
    OR?: OAuthProviderScalarWhereWithAggregatesInput[]
    NOT?: OAuthProviderScalarWhereWithAggregatesInput | OAuthProviderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OAuthProvider"> | string
    userId?: StringWithAggregatesFilter<"OAuthProvider"> | string
    provider?: StringWithAggregatesFilter<"OAuthProvider"> | string
    providerUserId?: StringWithAggregatesFilter<"OAuthProvider"> | string
    accessToken?: StringNullableWithAggregatesFilter<"OAuthProvider"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"OAuthProvider"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"OAuthProvider"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OAuthProvider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OAuthProvider"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    emailVerified?: Date | string | null
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    tasks?: TaskCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    areas?: AreaCreateNestedManyWithoutUserInput
    authSessions?: AuthSessionCreateNestedManyWithoutUserInput
    oauthProviders?: OAuthProviderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    emailVerified?: Date | string | null
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    areas?: AreaUncheckedCreateNestedManyWithoutUserInput
    authSessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
    oauthProviders?: OAuthProviderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: TaskUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    areas?: AreaUpdateManyWithoutUserNestedInput
    authSessions?: AuthSessionUpdateManyWithoutUserNestedInput
    oauthProviders?: OAuthProviderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    areas?: AreaUncheckedUpdateManyWithoutUserNestedInput
    authSessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
    oauthProviders?: OAuthProviderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    emailVerified?: Date | string | null
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskCreateInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    user: UserCreateNestedOneWithoutTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    area?: AreaCreateNestedOneWithoutTasksInput
    section?: SectionCreateNestedOneWithoutTasksInput
    parentTask?: TaskCreateNestedOneWithoutSubtasksInput
    subtasks?: TaskCreateNestedManyWithoutParentTaskInput
    calendar?: CalendarCreateNestedOneWithoutTasksInput
    recurrence?: RecurrenceCreateNestedOneWithoutTasksInput
    checklistItems?: ChecklistItemCreateNestedManyWithoutTaskInput
    tags?: TagCreateNestedManyWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    projectId?: string | null
    areaId?: string | null
    sectionId?: string | null
    parentTaskId?: string | null
    calendarId?: string | null
    recurrenceId?: string | null
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput
    checklistItems?: ChecklistItemUncheckedCreateNestedManyWithoutTaskInput
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    area?: AreaUpdateOneWithoutTasksNestedInput
    section?: SectionUpdateOneWithoutTasksNestedInput
    parentTask?: TaskUpdateOneWithoutSubtasksNestedInput
    subtasks?: TaskUpdateManyWithoutParentTaskNestedInput
    calendar?: CalendarUpdateOneWithoutTasksNestedInput
    recurrence?: RecurrenceUpdateOneWithoutTasksNestedInput
    checklistItems?: ChecklistItemUpdateManyWithoutTaskNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    subtasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput
    checklistItems?: ChecklistItemUncheckedUpdateManyWithoutTaskNestedInput
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    projectId?: string | null
    areaId?: string | null
    sectionId?: string | null
    parentTaskId?: string | null
    calendarId?: string | null
    recurrenceId?: string | null
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    user: UserCreateNestedOneWithoutProjectsInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
    sections?: SectionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    sections?: SectionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
    sections?: SectionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
    sections?: SectionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type AreaCreateInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    user: UserCreateNestedOneWithoutAreasInput
    tasks?: TaskCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    tasks?: TaskUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutAreasNestedInput
    tasks?: TaskUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type AreaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type AreaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type SectionCreateInput = {
    id?: string
    name: string
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    project: ProjectCreateNestedOneWithoutSectionsInput
    tasks?: TaskCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateInput = {
    id?: string
    name: string
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    tasks?: TaskUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutSectionsNestedInput
    tasks?: TaskUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: string
    name: string
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type SectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type CalendarCreateInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    tasks?: TaskCreateNestedManyWithoutCalendarInput
  }

  export type CalendarUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    tasks?: TaskUncheckedCreateNestedManyWithoutCalendarInput
  }

  export type CalendarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUpdateManyWithoutCalendarNestedInput
  }

  export type CalendarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutCalendarNestedInput
  }

  export type CalendarCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type CalendarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type CalendarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type ChecklistItemCreateInput = {
    id?: string
    text: string
    completed?: boolean
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    task: TaskCreateNestedOneWithoutChecklistItemsInput
  }

  export type ChecklistItemUncheckedCreateInput = {
    id?: string
    text: string
    completed?: boolean
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taskId: string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type ChecklistItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    task?: TaskUpdateOneRequiredWithoutChecklistItemsNestedInput
  }

  export type ChecklistItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type ChecklistItemCreateManyInput = {
    id?: string
    text: string
    completed?: boolean
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    taskId: string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type ChecklistItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type ChecklistItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: StringFieldUpdateOperationsInput | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TagCreateInput = {
    id?: string
    name: string
    color?: string | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    tasks?: TaskCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    color?: string | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    tasks?: TaskUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    color?: string | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type RecurrenceCreateInput = {
    id?: string
    type: string
    interval?: number
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    tasks?: TaskCreateNestedManyWithoutRecurrenceInput
  }

  export type RecurrenceUncheckedCreateInput = {
    id?: string
    type: string
    interval?: number
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    tasks?: TaskUncheckedCreateNestedManyWithoutRecurrenceInput
  }

  export type RecurrenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUpdateManyWithoutRecurrenceNestedInput
  }

  export type RecurrenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutRecurrenceNestedInput
  }

  export type RecurrenceCreateManyInput = {
    id?: string
    type: string
    interval?: number
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type RecurrenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type RecurrenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type SyncLogCreateInput = {
    id?: string
    entityId: string
    entityType: string
    operation: string
    data: string
    timestamp?: Date | string
    synced?: boolean
  }

  export type SyncLogUncheckedCreateInput = {
    id?: string
    entityId: string
    entityType: string
    operation: string
    data: string
    timestamp?: Date | string
    synced?: boolean
  }

  export type SyncLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SyncLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SyncLogCreateManyInput = {
    id?: string
    entityId: string
    entityType: string
    operation: string
    data: string
    timestamp?: Date | string
    synced?: boolean
  }

  export type SyncLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SyncLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    operation?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    synced?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AuthSessionCreateInput = {
    id?: string
    token: string
    expires: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuthSessionsInput
  }

  export type AuthSessionUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type AuthSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuthSessionsNestedInput
  }

  export type AuthSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionCreateManyInput = {
    id?: string
    userId: string
    token: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type AuthSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthProviderCreateInput = {
    id?: string
    provider: string
    providerUserId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOauthProvidersInput
  }

  export type OAuthProviderUncheckedCreateInput = {
    id?: string
    userId: string
    provider: string
    providerUserId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OAuthProviderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOauthProvidersNestedInput
  }

  export type OAuthProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthProviderCreateManyInput = {
    id?: string
    userId: string
    provider: string
    providerUserId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OAuthProviderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type AreaListRelationFilter = {
    every?: AreaWhereInput
    some?: AreaWhereInput
    none?: AreaWhereInput
  }

  export type AuthSessionListRelationFilter = {
    every?: AuthSessionWhereInput
    some?: AuthSessionWhereInput
    none?: AuthSessionWhereInput
  }

  export type OAuthProviderListRelationFilter = {
    every?: OAuthProviderWhereInput
    some?: OAuthProviderWhereInput
    none?: OAuthProviderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OAuthProviderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    password?: SortOrder
    emailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetExpires?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProjectNullableRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type AreaNullableRelationFilter = {
    is?: AreaWhereInput | null
    isNot?: AreaWhereInput | null
  }

  export type SectionNullableRelationFilter = {
    is?: SectionWhereInput | null
    isNot?: SectionWhereInput | null
  }

  export type TaskNullableRelationFilter = {
    is?: TaskWhereInput | null
    isNot?: TaskWhereInput | null
  }

  export type CalendarNullableRelationFilter = {
    is?: CalendarWhereInput | null
    isNot?: CalendarWhereInput | null
  }

  export type RecurrenceNullableRelationFilter = {
    is?: RecurrenceWhereInput | null
    isNot?: RecurrenceWhereInput | null
  }

  export type ChecklistItemListRelationFilter = {
    every?: ChecklistItemWhereInput
    some?: ChecklistItemWhereInput
    none?: ChecklistItemWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type ChecklistItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    allDay?: SortOrder
    position?: SortOrder
    sort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    areaId?: SortOrder
    sectionId?: SortOrder
    parentTaskId?: SortOrder
    calendarId?: SortOrder
    recurrenceId?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    position?: SortOrder
    sort?: SortOrder
    version?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    allDay?: SortOrder
    position?: SortOrder
    sort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    areaId?: SortOrder
    sectionId?: SortOrder
    parentTaskId?: SortOrder
    calendarId?: SortOrder
    recurrenceId?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    allDay?: SortOrder
    position?: SortOrder
    sort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    areaId?: SortOrder
    sectionId?: SortOrder
    parentTaskId?: SortOrder
    calendarId?: SortOrder
    recurrenceId?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    position?: SortOrder
    sort?: SortOrder
    version?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SectionListRelationFilter = {
    every?: SectionWhereInput
    some?: SectionWhereInput
    none?: SectionWhereInput
  }

  export type SectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type AreaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type AreaAvgOrderByAggregateInput = {
    position?: SortOrder
    version?: SortOrder
  }

  export type AreaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type AreaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type AreaSumOrderByAggregateInput = {
    position?: SortOrder
    version?: SortOrder
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type SectionAvgOrderByAggregateInput = {
    position?: SortOrder
    version?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type SectionSumOrderByAggregateInput = {
    position?: SortOrder
    version?: SortOrder
  }

  export type CalendarCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type CalendarAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type CalendarMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type CalendarMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type CalendarSumOrderByAggregateInput = {
    version?: SortOrder
  }

  export type TaskRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type ChecklistItemCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    completed?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type ChecklistItemAvgOrderByAggregateInput = {
    position?: SortOrder
    version?: SortOrder
  }

  export type ChecklistItemMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    completed?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type ChecklistItemMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    completed?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    taskId?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type ChecklistItemSumOrderByAggregateInput = {
    position?: SortOrder
    version?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    sort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    sort?: SortOrder
    version?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    sort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    sort?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    sort?: SortOrder
    version?: SortOrder
  }

  export type RecurrenceCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    interval?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type RecurrenceAvgOrderByAggregateInput = {
    interval?: SortOrder
    version?: SortOrder
  }

  export type RecurrenceMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    interval?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type RecurrenceMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    interval?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    syncId?: SortOrder
    lastSync?: SortOrder
    isDeleted?: SortOrder
    version?: SortOrder
  }

  export type RecurrenceSumOrderByAggregateInput = {
    interval?: SortOrder
    version?: SortOrder
  }

  export type SyncLogCountOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
    entityType?: SortOrder
    operation?: SortOrder
    data?: SortOrder
    timestamp?: SortOrder
    synced?: SortOrder
  }

  export type SyncLogMaxOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
    entityType?: SortOrder
    operation?: SortOrder
    data?: SortOrder
    timestamp?: SortOrder
    synced?: SortOrder
  }

  export type SyncLogMinOrderByAggregateInput = {
    id?: SortOrder
    entityId?: SortOrder
    entityType?: SortOrder
    operation?: SortOrder
    data?: SortOrder
    timestamp?: SortOrder
    synced?: SortOrder
  }

  export type AuthSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
  }

  export type OAuthProviderProviderProviderUserIdCompoundUniqueInput = {
    provider: string
    providerUserId: string
  }

  export type OAuthProviderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OAuthProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OAuthProviderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    providerUserId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type AreaCreateNestedManyWithoutUserInput = {
    create?: XOR<AreaCreateWithoutUserInput, AreaUncheckedCreateWithoutUserInput> | AreaCreateWithoutUserInput[] | AreaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutUserInput | AreaCreateOrConnectWithoutUserInput[]
    createMany?: AreaCreateManyUserInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type AuthSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
  }

  export type OAuthProviderCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuthProviderCreateWithoutUserInput, OAuthProviderUncheckedCreateWithoutUserInput> | OAuthProviderCreateWithoutUserInput[] | OAuthProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthProviderCreateOrConnectWithoutUserInput | OAuthProviderCreateOrConnectWithoutUserInput[]
    createMany?: OAuthProviderCreateManyUserInputEnvelope
    connect?: OAuthProviderWhereUniqueInput | OAuthProviderWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type AreaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AreaCreateWithoutUserInput, AreaUncheckedCreateWithoutUserInput> | AreaCreateWithoutUserInput[] | AreaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutUserInput | AreaCreateOrConnectWithoutUserInput[]
    createMany?: AreaCreateManyUserInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type AuthSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
  }

  export type OAuthProviderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OAuthProviderCreateWithoutUserInput, OAuthProviderUncheckedCreateWithoutUserInput> | OAuthProviderCreateWithoutUserInput[] | OAuthProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthProviderCreateOrConnectWithoutUserInput | OAuthProviderCreateOrConnectWithoutUserInput[]
    createMany?: OAuthProviderCreateManyUserInputEnvelope
    connect?: OAuthProviderWhereUniqueInput | OAuthProviderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type AreaUpdateManyWithoutUserNestedInput = {
    create?: XOR<AreaCreateWithoutUserInput, AreaUncheckedCreateWithoutUserInput> | AreaCreateWithoutUserInput[] | AreaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutUserInput | AreaCreateOrConnectWithoutUserInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutUserInput | AreaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AreaCreateManyUserInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutUserInput | AreaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutUserInput | AreaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type AuthSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    upsert?: AuthSessionUpsertWithWhereUniqueWithoutUserInput | AuthSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    set?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    disconnect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    delete?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    update?: AuthSessionUpdateWithWhereUniqueWithoutUserInput | AuthSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthSessionUpdateManyWithWhereWithoutUserInput | AuthSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
  }

  export type OAuthProviderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuthProviderCreateWithoutUserInput, OAuthProviderUncheckedCreateWithoutUserInput> | OAuthProviderCreateWithoutUserInput[] | OAuthProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthProviderCreateOrConnectWithoutUserInput | OAuthProviderCreateOrConnectWithoutUserInput[]
    upsert?: OAuthProviderUpsertWithWhereUniqueWithoutUserInput | OAuthProviderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuthProviderCreateManyUserInputEnvelope
    set?: OAuthProviderWhereUniqueInput | OAuthProviderWhereUniqueInput[]
    disconnect?: OAuthProviderWhereUniqueInput | OAuthProviderWhereUniqueInput[]
    delete?: OAuthProviderWhereUniqueInput | OAuthProviderWhereUniqueInput[]
    connect?: OAuthProviderWhereUniqueInput | OAuthProviderWhereUniqueInput[]
    update?: OAuthProviderUpdateWithWhereUniqueWithoutUserInput | OAuthProviderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuthProviderUpdateManyWithWhereWithoutUserInput | OAuthProviderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuthProviderScalarWhereInput | OAuthProviderScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput> | ProjectCreateWithoutUserInput[] | ProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutUserInput | ProjectCreateOrConnectWithoutUserInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput | ProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectCreateManyUserInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutUserInput | ProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutUserInput | ProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type AreaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AreaCreateWithoutUserInput, AreaUncheckedCreateWithoutUserInput> | AreaCreateWithoutUserInput[] | AreaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutUserInput | AreaCreateOrConnectWithoutUserInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutUserInput | AreaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AreaCreateManyUserInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutUserInput | AreaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutUserInput | AreaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type AuthSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput> | AuthSessionCreateWithoutUserInput[] | AuthSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthSessionCreateOrConnectWithoutUserInput | AuthSessionCreateOrConnectWithoutUserInput[]
    upsert?: AuthSessionUpsertWithWhereUniqueWithoutUserInput | AuthSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthSessionCreateManyUserInputEnvelope
    set?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    disconnect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    delete?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    connect?: AuthSessionWhereUniqueInput | AuthSessionWhereUniqueInput[]
    update?: AuthSessionUpdateWithWhereUniqueWithoutUserInput | AuthSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthSessionUpdateManyWithWhereWithoutUserInput | AuthSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
  }

  export type OAuthProviderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OAuthProviderCreateWithoutUserInput, OAuthProviderUncheckedCreateWithoutUserInput> | OAuthProviderCreateWithoutUserInput[] | OAuthProviderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OAuthProviderCreateOrConnectWithoutUserInput | OAuthProviderCreateOrConnectWithoutUserInput[]
    upsert?: OAuthProviderUpsertWithWhereUniqueWithoutUserInput | OAuthProviderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OAuthProviderCreateManyUserInputEnvelope
    set?: OAuthProviderWhereUniqueInput | OAuthProviderWhereUniqueInput[]
    disconnect?: OAuthProviderWhereUniqueInput | OAuthProviderWhereUniqueInput[]
    delete?: OAuthProviderWhereUniqueInput | OAuthProviderWhereUniqueInput[]
    connect?: OAuthProviderWhereUniqueInput | OAuthProviderWhereUniqueInput[]
    update?: OAuthProviderUpdateWithWhereUniqueWithoutUserInput | OAuthProviderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OAuthProviderUpdateManyWithWhereWithoutUserInput | OAuthProviderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OAuthProviderScalarWhereInput | OAuthProviderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    connect?: ProjectWhereUniqueInput
  }

  export type AreaCreateNestedOneWithoutTasksInput = {
    create?: XOR<AreaCreateWithoutTasksInput, AreaUncheckedCreateWithoutTasksInput>
    connectOrCreate?: AreaCreateOrConnectWithoutTasksInput
    connect?: AreaWhereUniqueInput
  }

  export type SectionCreateNestedOneWithoutTasksInput = {
    create?: XOR<SectionCreateWithoutTasksInput, SectionUncheckedCreateWithoutTasksInput>
    connectOrCreate?: SectionCreateOrConnectWithoutTasksInput
    connect?: SectionWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutSubtasksInput = {
    create?: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput
    connect?: TaskWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutParentTaskInput = {
    create?: XOR<TaskCreateWithoutParentTaskInput, TaskUncheckedCreateWithoutParentTaskInput> | TaskCreateWithoutParentTaskInput[] | TaskUncheckedCreateWithoutParentTaskInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentTaskInput | TaskCreateOrConnectWithoutParentTaskInput[]
    createMany?: TaskCreateManyParentTaskInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type CalendarCreateNestedOneWithoutTasksInput = {
    create?: XOR<CalendarCreateWithoutTasksInput, CalendarUncheckedCreateWithoutTasksInput>
    connectOrCreate?: CalendarCreateOrConnectWithoutTasksInput
    connect?: CalendarWhereUniqueInput
  }

  export type RecurrenceCreateNestedOneWithoutTasksInput = {
    create?: XOR<RecurrenceCreateWithoutTasksInput, RecurrenceUncheckedCreateWithoutTasksInput>
    connectOrCreate?: RecurrenceCreateOrConnectWithoutTasksInput
    connect?: RecurrenceWhereUniqueInput
  }

  export type ChecklistItemCreateNestedManyWithoutTaskInput = {
    create?: XOR<ChecklistItemCreateWithoutTaskInput, ChecklistItemUncheckedCreateWithoutTaskInput> | ChecklistItemCreateWithoutTaskInput[] | ChecklistItemUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ChecklistItemCreateOrConnectWithoutTaskInput | ChecklistItemCreateOrConnectWithoutTaskInput[]
    createMany?: ChecklistItemCreateManyTaskInputEnvelope
    connect?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutTasksInput = {
    create?: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput> | TagCreateWithoutTasksInput[] | TagUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTasksInput | TagCreateOrConnectWithoutTasksInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutParentTaskInput = {
    create?: XOR<TaskCreateWithoutParentTaskInput, TaskUncheckedCreateWithoutParentTaskInput> | TaskCreateWithoutParentTaskInput[] | TaskUncheckedCreateWithoutParentTaskInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentTaskInput | TaskCreateOrConnectWithoutParentTaskInput[]
    createMany?: TaskCreateManyParentTaskInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ChecklistItemUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<ChecklistItemCreateWithoutTaskInput, ChecklistItemUncheckedCreateWithoutTaskInput> | ChecklistItemCreateWithoutTaskInput[] | ChecklistItemUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ChecklistItemCreateOrConnectWithoutTaskInput | ChecklistItemCreateOrConnectWithoutTaskInput[]
    createMany?: ChecklistItemCreateManyTaskInputEnvelope
    connect?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutTasksInput = {
    create?: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput> | TagCreateWithoutTasksInput[] | TagUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTasksInput | TagCreateOrConnectWithoutTasksInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateOneWithoutTasksNestedInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    upsert?: ProjectUpsertWithoutTasksInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTasksInput, ProjectUpdateWithoutTasksInput>, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type AreaUpdateOneWithoutTasksNestedInput = {
    create?: XOR<AreaCreateWithoutTasksInput, AreaUncheckedCreateWithoutTasksInput>
    connectOrCreate?: AreaCreateOrConnectWithoutTasksInput
    upsert?: AreaUpsertWithoutTasksInput
    disconnect?: AreaWhereInput | boolean
    delete?: AreaWhereInput | boolean
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutTasksInput, AreaUpdateWithoutTasksInput>, AreaUncheckedUpdateWithoutTasksInput>
  }

  export type SectionUpdateOneWithoutTasksNestedInput = {
    create?: XOR<SectionCreateWithoutTasksInput, SectionUncheckedCreateWithoutTasksInput>
    connectOrCreate?: SectionCreateOrConnectWithoutTasksInput
    upsert?: SectionUpsertWithoutTasksInput
    disconnect?: SectionWhereInput | boolean
    delete?: SectionWhereInput | boolean
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutTasksInput, SectionUpdateWithoutTasksInput>, SectionUncheckedUpdateWithoutTasksInput>
  }

  export type TaskUpdateOneWithoutSubtasksNestedInput = {
    create?: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput
    upsert?: TaskUpsertWithoutSubtasksInput
    disconnect?: TaskWhereInput | boolean
    delete?: TaskWhereInput | boolean
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutSubtasksInput, TaskUpdateWithoutSubtasksInput>, TaskUncheckedUpdateWithoutSubtasksInput>
  }

  export type TaskUpdateManyWithoutParentTaskNestedInput = {
    create?: XOR<TaskCreateWithoutParentTaskInput, TaskUncheckedCreateWithoutParentTaskInput> | TaskCreateWithoutParentTaskInput[] | TaskUncheckedCreateWithoutParentTaskInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentTaskInput | TaskCreateOrConnectWithoutParentTaskInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutParentTaskInput | TaskUpsertWithWhereUniqueWithoutParentTaskInput[]
    createMany?: TaskCreateManyParentTaskInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutParentTaskInput | TaskUpdateWithWhereUniqueWithoutParentTaskInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutParentTaskInput | TaskUpdateManyWithWhereWithoutParentTaskInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type CalendarUpdateOneWithoutTasksNestedInput = {
    create?: XOR<CalendarCreateWithoutTasksInput, CalendarUncheckedCreateWithoutTasksInput>
    connectOrCreate?: CalendarCreateOrConnectWithoutTasksInput
    upsert?: CalendarUpsertWithoutTasksInput
    disconnect?: CalendarWhereInput | boolean
    delete?: CalendarWhereInput | boolean
    connect?: CalendarWhereUniqueInput
    update?: XOR<XOR<CalendarUpdateToOneWithWhereWithoutTasksInput, CalendarUpdateWithoutTasksInput>, CalendarUncheckedUpdateWithoutTasksInput>
  }

  export type RecurrenceUpdateOneWithoutTasksNestedInput = {
    create?: XOR<RecurrenceCreateWithoutTasksInput, RecurrenceUncheckedCreateWithoutTasksInput>
    connectOrCreate?: RecurrenceCreateOrConnectWithoutTasksInput
    upsert?: RecurrenceUpsertWithoutTasksInput
    disconnect?: RecurrenceWhereInput | boolean
    delete?: RecurrenceWhereInput | boolean
    connect?: RecurrenceWhereUniqueInput
    update?: XOR<XOR<RecurrenceUpdateToOneWithWhereWithoutTasksInput, RecurrenceUpdateWithoutTasksInput>, RecurrenceUncheckedUpdateWithoutTasksInput>
  }

  export type ChecklistItemUpdateManyWithoutTaskNestedInput = {
    create?: XOR<ChecklistItemCreateWithoutTaskInput, ChecklistItemUncheckedCreateWithoutTaskInput> | ChecklistItemCreateWithoutTaskInput[] | ChecklistItemUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ChecklistItemCreateOrConnectWithoutTaskInput | ChecklistItemCreateOrConnectWithoutTaskInput[]
    upsert?: ChecklistItemUpsertWithWhereUniqueWithoutTaskInput | ChecklistItemUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: ChecklistItemCreateManyTaskInputEnvelope
    set?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
    disconnect?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
    delete?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
    connect?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
    update?: ChecklistItemUpdateWithWhereUniqueWithoutTaskInput | ChecklistItemUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: ChecklistItemUpdateManyWithWhereWithoutTaskInput | ChecklistItemUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: ChecklistItemScalarWhereInput | ChecklistItemScalarWhereInput[]
  }

  export type TagUpdateManyWithoutTasksNestedInput = {
    create?: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput> | TagCreateWithoutTasksInput[] | TagUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTasksInput | TagCreateOrConnectWithoutTasksInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutTasksInput | TagUpsertWithWhereUniqueWithoutTasksInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutTasksInput | TagUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: TagUpdateManyWithWhereWithoutTasksInput | TagUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutParentTaskNestedInput = {
    create?: XOR<TaskCreateWithoutParentTaskInput, TaskUncheckedCreateWithoutParentTaskInput> | TaskCreateWithoutParentTaskInput[] | TaskUncheckedCreateWithoutParentTaskInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentTaskInput | TaskCreateOrConnectWithoutParentTaskInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutParentTaskInput | TaskUpsertWithWhereUniqueWithoutParentTaskInput[]
    createMany?: TaskCreateManyParentTaskInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutParentTaskInput | TaskUpdateWithWhereUniqueWithoutParentTaskInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutParentTaskInput | TaskUpdateManyWithWhereWithoutParentTaskInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ChecklistItemUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<ChecklistItemCreateWithoutTaskInput, ChecklistItemUncheckedCreateWithoutTaskInput> | ChecklistItemCreateWithoutTaskInput[] | ChecklistItemUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: ChecklistItemCreateOrConnectWithoutTaskInput | ChecklistItemCreateOrConnectWithoutTaskInput[]
    upsert?: ChecklistItemUpsertWithWhereUniqueWithoutTaskInput | ChecklistItemUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: ChecklistItemCreateManyTaskInputEnvelope
    set?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
    disconnect?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
    delete?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
    connect?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
    update?: ChecklistItemUpdateWithWhereUniqueWithoutTaskInput | ChecklistItemUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: ChecklistItemUpdateManyWithWhereWithoutTaskInput | ChecklistItemUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: ChecklistItemScalarWhereInput | ChecklistItemScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutTasksNestedInput = {
    create?: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput> | TagCreateWithoutTasksInput[] | TagUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTasksInput | TagCreateOrConnectWithoutTasksInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutTasksInput | TagUpsertWithWhereUniqueWithoutTasksInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutTasksInput | TagUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: TagUpdateManyWithWhereWithoutTasksInput | TagUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type SectionCreateNestedManyWithoutProjectInput = {
    create?: XOR<SectionCreateWithoutProjectInput, SectionUncheckedCreateWithoutProjectInput> | SectionCreateWithoutProjectInput[] | SectionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutProjectInput | SectionCreateOrConnectWithoutProjectInput[]
    createMany?: SectionCreateManyProjectInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type SectionUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<SectionCreateWithoutProjectInput, SectionUncheckedCreateWithoutProjectInput> | SectionCreateWithoutProjectInput[] | SectionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutProjectInput | SectionCreateOrConnectWithoutProjectInput[]
    createMany?: SectionCreateManyProjectInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type SectionUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SectionCreateWithoutProjectInput, SectionUncheckedCreateWithoutProjectInput> | SectionCreateWithoutProjectInput[] | SectionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutProjectInput | SectionCreateOrConnectWithoutProjectInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutProjectInput | SectionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SectionCreateManyProjectInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutProjectInput | SectionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutProjectInput | SectionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type SectionUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SectionCreateWithoutProjectInput, SectionUncheckedCreateWithoutProjectInput> | SectionCreateWithoutProjectInput[] | SectionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutProjectInput | SectionCreateOrConnectWithoutProjectInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutProjectInput | SectionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SectionCreateManyProjectInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutProjectInput | SectionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutProjectInput | SectionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAreasInput = {
    create?: XOR<UserCreateWithoutAreasInput, UserUncheckedCreateWithoutAreasInput>
    connectOrCreate?: UserCreateOrConnectWithoutAreasInput
    connect?: UserWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutAreaInput = {
    create?: XOR<TaskCreateWithoutAreaInput, TaskUncheckedCreateWithoutAreaInput> | TaskCreateWithoutAreaInput[] | TaskUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAreaInput | TaskCreateOrConnectWithoutAreaInput[]
    createMany?: TaskCreateManyAreaInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<TaskCreateWithoutAreaInput, TaskUncheckedCreateWithoutAreaInput> | TaskCreateWithoutAreaInput[] | TaskUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAreaInput | TaskCreateOrConnectWithoutAreaInput[]
    createMany?: TaskCreateManyAreaInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAreasNestedInput = {
    create?: XOR<UserCreateWithoutAreasInput, UserUncheckedCreateWithoutAreasInput>
    connectOrCreate?: UserCreateOrConnectWithoutAreasInput
    upsert?: UserUpsertWithoutAreasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAreasInput, UserUpdateWithoutAreasInput>, UserUncheckedUpdateWithoutAreasInput>
  }

  export type TaskUpdateManyWithoutAreaNestedInput = {
    create?: XOR<TaskCreateWithoutAreaInput, TaskUncheckedCreateWithoutAreaInput> | TaskCreateWithoutAreaInput[] | TaskUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAreaInput | TaskCreateOrConnectWithoutAreaInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAreaInput | TaskUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: TaskCreateManyAreaInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAreaInput | TaskUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAreaInput | TaskUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<TaskCreateWithoutAreaInput, TaskUncheckedCreateWithoutAreaInput> | TaskCreateWithoutAreaInput[] | TaskUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutAreaInput | TaskCreateOrConnectWithoutAreaInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutAreaInput | TaskUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: TaskCreateManyAreaInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutAreaInput | TaskUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutAreaInput | TaskUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutSectionsInput = {
    create?: XOR<ProjectCreateWithoutSectionsInput, ProjectUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSectionsInput
    connect?: ProjectWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutSectionInput = {
    create?: XOR<TaskCreateWithoutSectionInput, TaskUncheckedCreateWithoutSectionInput> | TaskCreateWithoutSectionInput[] | TaskUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSectionInput | TaskCreateOrConnectWithoutSectionInput[]
    createMany?: TaskCreateManySectionInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<TaskCreateWithoutSectionInput, TaskUncheckedCreateWithoutSectionInput> | TaskCreateWithoutSectionInput[] | TaskUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSectionInput | TaskCreateOrConnectWithoutSectionInput[]
    createMany?: TaskCreateManySectionInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<ProjectCreateWithoutSectionsInput, ProjectUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSectionsInput
    upsert?: ProjectUpsertWithoutSectionsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSectionsInput, ProjectUpdateWithoutSectionsInput>, ProjectUncheckedUpdateWithoutSectionsInput>
  }

  export type TaskUpdateManyWithoutSectionNestedInput = {
    create?: XOR<TaskCreateWithoutSectionInput, TaskUncheckedCreateWithoutSectionInput> | TaskCreateWithoutSectionInput[] | TaskUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSectionInput | TaskCreateOrConnectWithoutSectionInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutSectionInput | TaskUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: TaskCreateManySectionInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutSectionInput | TaskUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutSectionInput | TaskUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<TaskCreateWithoutSectionInput, TaskUncheckedCreateWithoutSectionInput> | TaskCreateWithoutSectionInput[] | TaskUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSectionInput | TaskCreateOrConnectWithoutSectionInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutSectionInput | TaskUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: TaskCreateManySectionInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutSectionInput | TaskUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutSectionInput | TaskUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskCreateNestedManyWithoutCalendarInput = {
    create?: XOR<TaskCreateWithoutCalendarInput, TaskUncheckedCreateWithoutCalendarInput> | TaskCreateWithoutCalendarInput[] | TaskUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCalendarInput | TaskCreateOrConnectWithoutCalendarInput[]
    createMany?: TaskCreateManyCalendarInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutCalendarInput = {
    create?: XOR<TaskCreateWithoutCalendarInput, TaskUncheckedCreateWithoutCalendarInput> | TaskCreateWithoutCalendarInput[] | TaskUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCalendarInput | TaskCreateOrConnectWithoutCalendarInput[]
    createMany?: TaskCreateManyCalendarInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUpdateManyWithoutCalendarNestedInput = {
    create?: XOR<TaskCreateWithoutCalendarInput, TaskUncheckedCreateWithoutCalendarInput> | TaskCreateWithoutCalendarInput[] | TaskUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCalendarInput | TaskCreateOrConnectWithoutCalendarInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCalendarInput | TaskUpsertWithWhereUniqueWithoutCalendarInput[]
    createMany?: TaskCreateManyCalendarInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCalendarInput | TaskUpdateWithWhereUniqueWithoutCalendarInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCalendarInput | TaskUpdateManyWithWhereWithoutCalendarInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutCalendarNestedInput = {
    create?: XOR<TaskCreateWithoutCalendarInput, TaskUncheckedCreateWithoutCalendarInput> | TaskCreateWithoutCalendarInput[] | TaskUncheckedCreateWithoutCalendarInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCalendarInput | TaskCreateOrConnectWithoutCalendarInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCalendarInput | TaskUpsertWithWhereUniqueWithoutCalendarInput[]
    createMany?: TaskCreateManyCalendarInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCalendarInput | TaskUpdateWithWhereUniqueWithoutCalendarInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCalendarInput | TaskUpdateManyWithWhereWithoutCalendarInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutChecklistItemsInput = {
    create?: XOR<TaskCreateWithoutChecklistItemsInput, TaskUncheckedCreateWithoutChecklistItemsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutChecklistItemsInput
    connect?: TaskWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutChecklistItemsNestedInput = {
    create?: XOR<TaskCreateWithoutChecklistItemsInput, TaskUncheckedCreateWithoutChecklistItemsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutChecklistItemsInput
    upsert?: TaskUpsertWithoutChecklistItemsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutChecklistItemsInput, TaskUpdateWithoutChecklistItemsInput>, TaskUncheckedUpdateWithoutChecklistItemsInput>
  }

  export type TaskCreateNestedManyWithoutTagsInput = {
    create?: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput> | TaskCreateWithoutTagsInput[] | TaskUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTagsInput | TaskCreateOrConnectWithoutTagsInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput> | TaskCreateWithoutTagsInput[] | TaskUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTagsInput | TaskCreateOrConnectWithoutTagsInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUpdateManyWithoutTagsNestedInput = {
    create?: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput> | TaskCreateWithoutTagsInput[] | TaskUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTagsInput | TaskCreateOrConnectWithoutTagsInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTagsInput | TaskUpsertWithWhereUniqueWithoutTagsInput[]
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTagsInput | TaskUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTagsInput | TaskUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput> | TaskCreateWithoutTagsInput[] | TaskUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTagsInput | TaskCreateOrConnectWithoutTagsInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTagsInput | TaskUpsertWithWhereUniqueWithoutTagsInput[]
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTagsInput | TaskUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTagsInput | TaskUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskCreateNestedManyWithoutRecurrenceInput = {
    create?: XOR<TaskCreateWithoutRecurrenceInput, TaskUncheckedCreateWithoutRecurrenceInput> | TaskCreateWithoutRecurrenceInput[] | TaskUncheckedCreateWithoutRecurrenceInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutRecurrenceInput | TaskCreateOrConnectWithoutRecurrenceInput[]
    createMany?: TaskCreateManyRecurrenceInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutRecurrenceInput = {
    create?: XOR<TaskCreateWithoutRecurrenceInput, TaskUncheckedCreateWithoutRecurrenceInput> | TaskCreateWithoutRecurrenceInput[] | TaskUncheckedCreateWithoutRecurrenceInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutRecurrenceInput | TaskCreateOrConnectWithoutRecurrenceInput[]
    createMany?: TaskCreateManyRecurrenceInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUpdateManyWithoutRecurrenceNestedInput = {
    create?: XOR<TaskCreateWithoutRecurrenceInput, TaskUncheckedCreateWithoutRecurrenceInput> | TaskCreateWithoutRecurrenceInput[] | TaskUncheckedCreateWithoutRecurrenceInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutRecurrenceInput | TaskCreateOrConnectWithoutRecurrenceInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutRecurrenceInput | TaskUpsertWithWhereUniqueWithoutRecurrenceInput[]
    createMany?: TaskCreateManyRecurrenceInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutRecurrenceInput | TaskUpdateWithWhereUniqueWithoutRecurrenceInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutRecurrenceInput | TaskUpdateManyWithWhereWithoutRecurrenceInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutRecurrenceNestedInput = {
    create?: XOR<TaskCreateWithoutRecurrenceInput, TaskUncheckedCreateWithoutRecurrenceInput> | TaskCreateWithoutRecurrenceInput[] | TaskUncheckedCreateWithoutRecurrenceInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutRecurrenceInput | TaskCreateOrConnectWithoutRecurrenceInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutRecurrenceInput | TaskUpsertWithWhereUniqueWithoutRecurrenceInput[]
    createMany?: TaskCreateManyRecurrenceInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutRecurrenceInput | TaskUpdateWithWhereUniqueWithoutRecurrenceInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutRecurrenceInput | TaskUpdateManyWithWhereWithoutRecurrenceInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAuthSessionsInput = {
    create?: XOR<UserCreateWithoutAuthSessionsInput, UserUncheckedCreateWithoutAuthSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuthSessionsNestedInput = {
    create?: XOR<UserCreateWithoutAuthSessionsInput, UserUncheckedCreateWithoutAuthSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthSessionsInput
    upsert?: UserUpsertWithoutAuthSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthSessionsInput, UserUpdateWithoutAuthSessionsInput>, UserUncheckedUpdateWithoutAuthSessionsInput>
  }

  export type UserCreateNestedOneWithoutOauthProvidersInput = {
    create?: XOR<UserCreateWithoutOauthProvidersInput, UserUncheckedCreateWithoutOauthProvidersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthProvidersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOauthProvidersNestedInput = {
    create?: XOR<UserCreateWithoutOauthProvidersInput, UserUncheckedCreateWithoutOauthProvidersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthProvidersInput
    upsert?: UserUpsertWithoutOauthProvidersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOauthProvidersInput, UserUpdateWithoutOauthProvidersInput>, UserUncheckedUpdateWithoutOauthProvidersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TaskCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    project?: ProjectCreateNestedOneWithoutTasksInput
    area?: AreaCreateNestedOneWithoutTasksInput
    section?: SectionCreateNestedOneWithoutTasksInput
    parentTask?: TaskCreateNestedOneWithoutSubtasksInput
    subtasks?: TaskCreateNestedManyWithoutParentTaskInput
    calendar?: CalendarCreateNestedOneWithoutTasksInput
    recurrence?: RecurrenceCreateNestedOneWithoutTasksInput
    checklistItems?: ChecklistItemCreateNestedManyWithoutTaskInput
    tags?: TagCreateNestedManyWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId?: string | null
    areaId?: string | null
    sectionId?: string | null
    parentTaskId?: string | null
    calendarId?: string | null
    recurrenceId?: string | null
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput
    checklistItems?: ChecklistItemUncheckedCreateNestedManyWithoutTaskInput
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
  }

  export type ProjectCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    tasks?: TaskCreateNestedManyWithoutProjectInput
    sections?: SectionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
    sections?: SectionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectCreateManyUserInputEnvelope = {
    data: ProjectCreateManyUserInput | ProjectCreateManyUserInput[]
  }

  export type AreaCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    tasks?: TaskCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    tasks?: TaskUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutUserInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutUserInput, AreaUncheckedCreateWithoutUserInput>
  }

  export type AreaCreateManyUserInputEnvelope = {
    data: AreaCreateManyUserInput | AreaCreateManyUserInput[]
  }

  export type AuthSessionCreateWithoutUserInput = {
    id?: string
    token: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type AuthSessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type AuthSessionCreateOrConnectWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    create: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput>
  }

  export type AuthSessionCreateManyUserInputEnvelope = {
    data: AuthSessionCreateManyUserInput | AuthSessionCreateManyUserInput[]
  }

  export type OAuthProviderCreateWithoutUserInput = {
    id?: string
    provider: string
    providerUserId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OAuthProviderUncheckedCreateWithoutUserInput = {
    id?: string
    provider: string
    providerUserId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OAuthProviderCreateOrConnectWithoutUserInput = {
    where: OAuthProviderWhereUniqueInput
    create: XOR<OAuthProviderCreateWithoutUserInput, OAuthProviderUncheckedCreateWithoutUserInput>
  }

  export type OAuthProviderCreateManyUserInputEnvelope = {
    data: OAuthProviderCreateManyUserInput | OAuthProviderCreateManyUserInput[]
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    name?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    type?: StringNullableFilter<"Task"> | string | null
    status?: StringFilter<"Task"> | string
    priority?: StringFilter<"Task"> | string
    startDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    allDay?: BoolFilter<"Task"> | boolean
    position?: IntNullableFilter<"Task"> | number | null
    sort?: IntNullableFilter<"Task"> | number | null
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    userId?: StringFilter<"Task"> | string
    projectId?: StringNullableFilter<"Task"> | string | null
    areaId?: StringNullableFilter<"Task"> | string | null
    sectionId?: StringNullableFilter<"Task"> | string | null
    parentTaskId?: StringNullableFilter<"Task"> | string | null
    calendarId?: StringNullableFilter<"Task"> | string | null
    recurrenceId?: StringNullableFilter<"Task"> | string | null
    syncId?: StringNullableFilter<"Task"> | string | null
    lastSync?: DateTimeNullableFilter<"Task"> | Date | string | null
    isDeleted?: BoolFilter<"Task"> | boolean
    version?: IntFilter<"Task"> | number
  }

  export type ProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectCreateWithoutUserInput, ProjectUncheckedCreateWithoutUserInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutUserInput, ProjectUncheckedUpdateWithoutUserInput>
  }

  export type ProjectUpdateManyWithWhereWithoutUserInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    color?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    userId?: StringFilter<"Project"> | string
    syncId?: StringNullableFilter<"Project"> | string | null
    lastSync?: DateTimeNullableFilter<"Project"> | Date | string | null
    isDeleted?: BoolFilter<"Project"> | boolean
    version?: IntFilter<"Project"> | number
  }

  export type AreaUpsertWithWhereUniqueWithoutUserInput = {
    where: AreaWhereUniqueInput
    update: XOR<AreaUpdateWithoutUserInput, AreaUncheckedUpdateWithoutUserInput>
    create: XOR<AreaCreateWithoutUserInput, AreaUncheckedCreateWithoutUserInput>
  }

  export type AreaUpdateWithWhereUniqueWithoutUserInput = {
    where: AreaWhereUniqueInput
    data: XOR<AreaUpdateWithoutUserInput, AreaUncheckedUpdateWithoutUserInput>
  }

  export type AreaUpdateManyWithWhereWithoutUserInput = {
    where: AreaScalarWhereInput
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyWithoutUserInput>
  }

  export type AreaScalarWhereInput = {
    AND?: AreaScalarWhereInput | AreaScalarWhereInput[]
    OR?: AreaScalarWhereInput[]
    NOT?: AreaScalarWhereInput | AreaScalarWhereInput[]
    id?: StringFilter<"Area"> | string
    name?: StringFilter<"Area"> | string
    description?: StringNullableFilter<"Area"> | string | null
    color?: StringNullableFilter<"Area"> | string | null
    position?: IntNullableFilter<"Area"> | number | null
    createdAt?: DateTimeFilter<"Area"> | Date | string
    updatedAt?: DateTimeFilter<"Area"> | Date | string
    userId?: StringFilter<"Area"> | string
    syncId?: StringNullableFilter<"Area"> | string | null
    lastSync?: DateTimeNullableFilter<"Area"> | Date | string | null
    isDeleted?: BoolFilter<"Area"> | boolean
    version?: IntFilter<"Area"> | number
  }

  export type AuthSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    update: XOR<AuthSessionUpdateWithoutUserInput, AuthSessionUncheckedUpdateWithoutUserInput>
    create: XOR<AuthSessionCreateWithoutUserInput, AuthSessionUncheckedCreateWithoutUserInput>
  }

  export type AuthSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthSessionWhereUniqueInput
    data: XOR<AuthSessionUpdateWithoutUserInput, AuthSessionUncheckedUpdateWithoutUserInput>
  }

  export type AuthSessionUpdateManyWithWhereWithoutUserInput = {
    where: AuthSessionScalarWhereInput
    data: XOR<AuthSessionUpdateManyMutationInput, AuthSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthSessionScalarWhereInput = {
    AND?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
    OR?: AuthSessionScalarWhereInput[]
    NOT?: AuthSessionScalarWhereInput | AuthSessionScalarWhereInput[]
    id?: StringFilter<"AuthSession"> | string
    userId?: StringFilter<"AuthSession"> | string
    token?: StringFilter<"AuthSession"> | string
    expires?: DateTimeFilter<"AuthSession"> | Date | string
    createdAt?: DateTimeFilter<"AuthSession"> | Date | string
  }

  export type OAuthProviderUpsertWithWhereUniqueWithoutUserInput = {
    where: OAuthProviderWhereUniqueInput
    update: XOR<OAuthProviderUpdateWithoutUserInput, OAuthProviderUncheckedUpdateWithoutUserInput>
    create: XOR<OAuthProviderCreateWithoutUserInput, OAuthProviderUncheckedCreateWithoutUserInput>
  }

  export type OAuthProviderUpdateWithWhereUniqueWithoutUserInput = {
    where: OAuthProviderWhereUniqueInput
    data: XOR<OAuthProviderUpdateWithoutUserInput, OAuthProviderUncheckedUpdateWithoutUserInput>
  }

  export type OAuthProviderUpdateManyWithWhereWithoutUserInput = {
    where: OAuthProviderScalarWhereInput
    data: XOR<OAuthProviderUpdateManyMutationInput, OAuthProviderUncheckedUpdateManyWithoutUserInput>
  }

  export type OAuthProviderScalarWhereInput = {
    AND?: OAuthProviderScalarWhereInput | OAuthProviderScalarWhereInput[]
    OR?: OAuthProviderScalarWhereInput[]
    NOT?: OAuthProviderScalarWhereInput | OAuthProviderScalarWhereInput[]
    id?: StringFilter<"OAuthProvider"> | string
    userId?: StringFilter<"OAuthProvider"> | string
    provider?: StringFilter<"OAuthProvider"> | string
    providerUserId?: StringFilter<"OAuthProvider"> | string
    accessToken?: StringNullableFilter<"OAuthProvider"> | string | null
    refreshToken?: StringNullableFilter<"OAuthProvider"> | string | null
    expiresAt?: DateTimeNullableFilter<"OAuthProvider"> | Date | string | null
    createdAt?: DateTimeFilter<"OAuthProvider"> | Date | string
    updatedAt?: DateTimeFilter<"OAuthProvider"> | Date | string
  }

  export type UserCreateWithoutTasksInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    emailVerified?: Date | string | null
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    projects?: ProjectCreateNestedManyWithoutUserInput
    areas?: AreaCreateNestedManyWithoutUserInput
    authSessions?: AuthSessionCreateNestedManyWithoutUserInput
    oauthProviders?: OAuthProviderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    emailVerified?: Date | string | null
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    areas?: AreaUncheckedCreateNestedManyWithoutUserInput
    authSessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
    oauthProviders?: OAuthProviderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type ProjectCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    user: UserCreateNestedOneWithoutProjectsInput
    sections?: SectionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    sections?: SectionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type AreaCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    user: UserCreateNestedOneWithoutAreasInput
  }

  export type AreaUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type AreaCreateOrConnectWithoutTasksInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutTasksInput, AreaUncheckedCreateWithoutTasksInput>
  }

  export type SectionCreateWithoutTasksInput = {
    id?: string
    name: string
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    project: ProjectCreateNestedOneWithoutSectionsInput
  }

  export type SectionUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type SectionCreateOrConnectWithoutTasksInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutTasksInput, SectionUncheckedCreateWithoutTasksInput>
  }

  export type TaskCreateWithoutSubtasksInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    user: UserCreateNestedOneWithoutTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    area?: AreaCreateNestedOneWithoutTasksInput
    section?: SectionCreateNestedOneWithoutTasksInput
    parentTask?: TaskCreateNestedOneWithoutSubtasksInput
    calendar?: CalendarCreateNestedOneWithoutTasksInput
    recurrence?: RecurrenceCreateNestedOneWithoutTasksInput
    checklistItems?: ChecklistItemCreateNestedManyWithoutTaskInput
    tags?: TagCreateNestedManyWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutSubtasksInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    projectId?: string | null
    areaId?: string | null
    sectionId?: string | null
    parentTaskId?: string | null
    calendarId?: string | null
    recurrenceId?: string | null
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    checklistItems?: ChecklistItemUncheckedCreateNestedManyWithoutTaskInput
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
  }

  export type TaskCreateOrConnectWithoutSubtasksInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
  }

  export type TaskCreateWithoutParentTaskInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    user: UserCreateNestedOneWithoutTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    area?: AreaCreateNestedOneWithoutTasksInput
    section?: SectionCreateNestedOneWithoutTasksInput
    subtasks?: TaskCreateNestedManyWithoutParentTaskInput
    calendar?: CalendarCreateNestedOneWithoutTasksInput
    recurrence?: RecurrenceCreateNestedOneWithoutTasksInput
    checklistItems?: ChecklistItemCreateNestedManyWithoutTaskInput
    tags?: TagCreateNestedManyWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutParentTaskInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    projectId?: string | null
    areaId?: string | null
    sectionId?: string | null
    calendarId?: string | null
    recurrenceId?: string | null
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput
    checklistItems?: ChecklistItemUncheckedCreateNestedManyWithoutTaskInput
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
  }

  export type TaskCreateOrConnectWithoutParentTaskInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutParentTaskInput, TaskUncheckedCreateWithoutParentTaskInput>
  }

  export type TaskCreateManyParentTaskInputEnvelope = {
    data: TaskCreateManyParentTaskInput | TaskCreateManyParentTaskInput[]
  }

  export type CalendarCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type CalendarUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type CalendarCreateOrConnectWithoutTasksInput = {
    where: CalendarWhereUniqueInput
    create: XOR<CalendarCreateWithoutTasksInput, CalendarUncheckedCreateWithoutTasksInput>
  }

  export type RecurrenceCreateWithoutTasksInput = {
    id?: string
    type: string
    interval?: number
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type RecurrenceUncheckedCreateWithoutTasksInput = {
    id?: string
    type: string
    interval?: number
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type RecurrenceCreateOrConnectWithoutTasksInput = {
    where: RecurrenceWhereUniqueInput
    create: XOR<RecurrenceCreateWithoutTasksInput, RecurrenceUncheckedCreateWithoutTasksInput>
  }

  export type ChecklistItemCreateWithoutTaskInput = {
    id?: string
    text: string
    completed?: boolean
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type ChecklistItemUncheckedCreateWithoutTaskInput = {
    id?: string
    text: string
    completed?: boolean
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type ChecklistItemCreateOrConnectWithoutTaskInput = {
    where: ChecklistItemWhereUniqueInput
    create: XOR<ChecklistItemCreateWithoutTaskInput, ChecklistItemUncheckedCreateWithoutTaskInput>
  }

  export type ChecklistItemCreateManyTaskInputEnvelope = {
    data: ChecklistItemCreateManyTaskInput | ChecklistItemCreateManyTaskInput[]
  }

  export type TagCreateWithoutTasksInput = {
    id?: string
    name: string
    color?: string | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type TagUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    color?: string | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type TagCreateOrConnectWithoutTasksInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput>
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: ProjectUpdateManyWithoutUserNestedInput
    areas?: AreaUpdateManyWithoutUserNestedInput
    authSessions?: AuthSessionUpdateManyWithoutUserNestedInput
    oauthProviders?: OAuthProviderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    areas?: AreaUncheckedUpdateManyWithoutUserNestedInput
    authSessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
    oauthProviders?: OAuthProviderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    sections?: SectionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    sections?: SectionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type AreaUpsertWithoutTasksInput = {
    update: XOR<AreaUpdateWithoutTasksInput, AreaUncheckedUpdateWithoutTasksInput>
    create: XOR<AreaCreateWithoutTasksInput, AreaUncheckedCreateWithoutTasksInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutTasksInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutTasksInput, AreaUncheckedUpdateWithoutTasksInput>
  }

  export type AreaUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutAreasNestedInput
  }

  export type AreaUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type SectionUpsertWithoutTasksInput = {
    update: XOR<SectionUpdateWithoutTasksInput, SectionUncheckedUpdateWithoutTasksInput>
    create: XOR<SectionCreateWithoutTasksInput, SectionUncheckedCreateWithoutTasksInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutTasksInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutTasksInput, SectionUncheckedUpdateWithoutTasksInput>
  }

  export type SectionUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TaskUpsertWithoutSubtasksInput = {
    update: XOR<TaskUpdateWithoutSubtasksInput, TaskUncheckedUpdateWithoutSubtasksInput>
    create: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutSubtasksInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutSubtasksInput, TaskUncheckedUpdateWithoutSubtasksInput>
  }

  export type TaskUpdateWithoutSubtasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    area?: AreaUpdateOneWithoutTasksNestedInput
    section?: SectionUpdateOneWithoutTasksNestedInput
    parentTask?: TaskUpdateOneWithoutSubtasksNestedInput
    calendar?: CalendarUpdateOneWithoutTasksNestedInput
    recurrence?: RecurrenceUpdateOneWithoutTasksNestedInput
    checklistItems?: ChecklistItemUpdateManyWithoutTaskNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutSubtasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    checklistItems?: ChecklistItemUncheckedUpdateManyWithoutTaskNestedInput
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutParentTaskInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutParentTaskInput, TaskUncheckedUpdateWithoutParentTaskInput>
    create: XOR<TaskCreateWithoutParentTaskInput, TaskUncheckedCreateWithoutParentTaskInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutParentTaskInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutParentTaskInput, TaskUncheckedUpdateWithoutParentTaskInput>
  }

  export type TaskUpdateManyWithWhereWithoutParentTaskInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutParentTaskInput>
  }

  export type CalendarUpsertWithoutTasksInput = {
    update: XOR<CalendarUpdateWithoutTasksInput, CalendarUncheckedUpdateWithoutTasksInput>
    create: XOR<CalendarCreateWithoutTasksInput, CalendarUncheckedCreateWithoutTasksInput>
    where?: CalendarWhereInput
  }

  export type CalendarUpdateToOneWithWhereWithoutTasksInput = {
    where?: CalendarWhereInput
    data: XOR<CalendarUpdateWithoutTasksInput, CalendarUncheckedUpdateWithoutTasksInput>
  }

  export type CalendarUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type CalendarUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type RecurrenceUpsertWithoutTasksInput = {
    update: XOR<RecurrenceUpdateWithoutTasksInput, RecurrenceUncheckedUpdateWithoutTasksInput>
    create: XOR<RecurrenceCreateWithoutTasksInput, RecurrenceUncheckedCreateWithoutTasksInput>
    where?: RecurrenceWhereInput
  }

  export type RecurrenceUpdateToOneWithWhereWithoutTasksInput = {
    where?: RecurrenceWhereInput
    data: XOR<RecurrenceUpdateWithoutTasksInput, RecurrenceUncheckedUpdateWithoutTasksInput>
  }

  export type RecurrenceUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type RecurrenceUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    interval?: IntFieldUpdateOperationsInput | number
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type ChecklistItemUpsertWithWhereUniqueWithoutTaskInput = {
    where: ChecklistItemWhereUniqueInput
    update: XOR<ChecklistItemUpdateWithoutTaskInput, ChecklistItemUncheckedUpdateWithoutTaskInput>
    create: XOR<ChecklistItemCreateWithoutTaskInput, ChecklistItemUncheckedCreateWithoutTaskInput>
  }

  export type ChecklistItemUpdateWithWhereUniqueWithoutTaskInput = {
    where: ChecklistItemWhereUniqueInput
    data: XOR<ChecklistItemUpdateWithoutTaskInput, ChecklistItemUncheckedUpdateWithoutTaskInput>
  }

  export type ChecklistItemUpdateManyWithWhereWithoutTaskInput = {
    where: ChecklistItemScalarWhereInput
    data: XOR<ChecklistItemUpdateManyMutationInput, ChecklistItemUncheckedUpdateManyWithoutTaskInput>
  }

  export type ChecklistItemScalarWhereInput = {
    AND?: ChecklistItemScalarWhereInput | ChecklistItemScalarWhereInput[]
    OR?: ChecklistItemScalarWhereInput[]
    NOT?: ChecklistItemScalarWhereInput | ChecklistItemScalarWhereInput[]
    id?: StringFilter<"ChecklistItem"> | string
    text?: StringFilter<"ChecklistItem"> | string
    completed?: BoolFilter<"ChecklistItem"> | boolean
    position?: IntNullableFilter<"ChecklistItem"> | number | null
    createdAt?: DateTimeFilter<"ChecklistItem"> | Date | string
    updatedAt?: DateTimeFilter<"ChecklistItem"> | Date | string
    taskId?: StringFilter<"ChecklistItem"> | string
    syncId?: StringNullableFilter<"ChecklistItem"> | string | null
    lastSync?: DateTimeNullableFilter<"ChecklistItem"> | Date | string | null
    isDeleted?: BoolFilter<"ChecklistItem"> | boolean
    version?: IntFilter<"ChecklistItem"> | number
  }

  export type TagUpsertWithWhereUniqueWithoutTasksInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutTasksInput, TagUncheckedUpdateWithoutTasksInput>
    create: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput>
  }

  export type TagUpdateWithWhereUniqueWithoutTasksInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutTasksInput, TagUncheckedUpdateWithoutTasksInput>
  }

  export type TagUpdateManyWithWhereWithoutTasksInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutTasksInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    color?: StringNullableFilter<"Tag"> | string | null
    sort?: IntNullableFilter<"Tag"> | number | null
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    syncId?: StringNullableFilter<"Tag"> | string | null
    lastSync?: DateTimeNullableFilter<"Tag"> | Date | string | null
    isDeleted?: BoolFilter<"Tag"> | boolean
    version?: IntFilter<"Tag"> | number
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    emailVerified?: Date | string | null
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    tasks?: TaskCreateNestedManyWithoutUserInput
    areas?: AreaCreateNestedManyWithoutUserInput
    authSessions?: AuthSessionCreateNestedManyWithoutUserInput
    oauthProviders?: OAuthProviderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    emailVerified?: Date | string | null
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    areas?: AreaUncheckedCreateNestedManyWithoutUserInput
    authSessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
    oauthProviders?: OAuthProviderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type TaskCreateWithoutProjectInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    user: UserCreateNestedOneWithoutTasksInput
    area?: AreaCreateNestedOneWithoutTasksInput
    section?: SectionCreateNestedOneWithoutTasksInput
    parentTask?: TaskCreateNestedOneWithoutSubtasksInput
    subtasks?: TaskCreateNestedManyWithoutParentTaskInput
    calendar?: CalendarCreateNestedOneWithoutTasksInput
    recurrence?: RecurrenceCreateNestedOneWithoutTasksInput
    checklistItems?: ChecklistItemCreateNestedManyWithoutTaskInput
    tags?: TagCreateNestedManyWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    areaId?: string | null
    sectionId?: string | null
    parentTaskId?: string | null
    calendarId?: string | null
    recurrenceId?: string | null
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput
    checklistItems?: ChecklistItemUncheckedCreateNestedManyWithoutTaskInput
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
  }

  export type TaskCreateOrConnectWithoutProjectInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskCreateManyProjectInputEnvelope = {
    data: TaskCreateManyProjectInput | TaskCreateManyProjectInput[]
  }

  export type SectionCreateWithoutProjectInput = {
    id?: string
    name: string
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    tasks?: TaskCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    tasks?: TaskUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutProjectInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutProjectInput, SectionUncheckedCreateWithoutProjectInput>
  }

  export type SectionCreateManyProjectInputEnvelope = {
    data: SectionCreateManyProjectInput | SectionCreateManyProjectInput[]
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: TaskUpdateManyWithoutUserNestedInput
    areas?: AreaUpdateManyWithoutUserNestedInput
    authSessions?: AuthSessionUpdateManyWithoutUserNestedInput
    oauthProviders?: OAuthProviderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    areas?: AreaUncheckedUpdateManyWithoutUserNestedInput
    authSessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
    oauthProviders?: OAuthProviderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
  }

  export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutProjectInput>
  }

  export type SectionUpsertWithWhereUniqueWithoutProjectInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutProjectInput, SectionUncheckedUpdateWithoutProjectInput>
    create: XOR<SectionCreateWithoutProjectInput, SectionUncheckedCreateWithoutProjectInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutProjectInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutProjectInput, SectionUncheckedUpdateWithoutProjectInput>
  }

  export type SectionUpdateManyWithWhereWithoutProjectInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutProjectInput>
  }

  export type SectionScalarWhereInput = {
    AND?: SectionScalarWhereInput | SectionScalarWhereInput[]
    OR?: SectionScalarWhereInput[]
    NOT?: SectionScalarWhereInput | SectionScalarWhereInput[]
    id?: StringFilter<"Section"> | string
    name?: StringFilter<"Section"> | string
    position?: IntNullableFilter<"Section"> | number | null
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    projectId?: StringFilter<"Section"> | string
    syncId?: StringNullableFilter<"Section"> | string | null
    lastSync?: DateTimeNullableFilter<"Section"> | Date | string | null
    isDeleted?: BoolFilter<"Section"> | boolean
    version?: IntFilter<"Section"> | number
  }

  export type UserCreateWithoutAreasInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    emailVerified?: Date | string | null
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    tasks?: TaskCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    authSessions?: AuthSessionCreateNestedManyWithoutUserInput
    oauthProviders?: OAuthProviderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAreasInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    emailVerified?: Date | string | null
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    authSessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
    oauthProviders?: OAuthProviderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAreasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAreasInput, UserUncheckedCreateWithoutAreasInput>
  }

  export type TaskCreateWithoutAreaInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    user: UserCreateNestedOneWithoutTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    section?: SectionCreateNestedOneWithoutTasksInput
    parentTask?: TaskCreateNestedOneWithoutSubtasksInput
    subtasks?: TaskCreateNestedManyWithoutParentTaskInput
    calendar?: CalendarCreateNestedOneWithoutTasksInput
    recurrence?: RecurrenceCreateNestedOneWithoutTasksInput
    checklistItems?: ChecklistItemCreateNestedManyWithoutTaskInput
    tags?: TagCreateNestedManyWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutAreaInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    projectId?: string | null
    sectionId?: string | null
    parentTaskId?: string | null
    calendarId?: string | null
    recurrenceId?: string | null
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput
    checklistItems?: ChecklistItemUncheckedCreateNestedManyWithoutTaskInput
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
  }

  export type TaskCreateOrConnectWithoutAreaInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAreaInput, TaskUncheckedCreateWithoutAreaInput>
  }

  export type TaskCreateManyAreaInputEnvelope = {
    data: TaskCreateManyAreaInput | TaskCreateManyAreaInput[]
  }

  export type UserUpsertWithoutAreasInput = {
    update: XOR<UserUpdateWithoutAreasInput, UserUncheckedUpdateWithoutAreasInput>
    create: XOR<UserCreateWithoutAreasInput, UserUncheckedCreateWithoutAreasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAreasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAreasInput, UserUncheckedUpdateWithoutAreasInput>
  }

  export type UserUpdateWithoutAreasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: TaskUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    authSessions?: AuthSessionUpdateManyWithoutUserNestedInput
    oauthProviders?: OAuthProviderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAreasInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    authSessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
    oauthProviders?: OAuthProviderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutAreaInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutAreaInput, TaskUncheckedUpdateWithoutAreaInput>
    create: XOR<TaskCreateWithoutAreaInput, TaskUncheckedCreateWithoutAreaInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutAreaInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutAreaInput, TaskUncheckedUpdateWithoutAreaInput>
  }

  export type TaskUpdateManyWithWhereWithoutAreaInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutAreaInput>
  }

  export type ProjectCreateWithoutSectionsInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    user: UserCreateNestedOneWithoutProjectsInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSectionsInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSectionsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSectionsInput, ProjectUncheckedCreateWithoutSectionsInput>
  }

  export type TaskCreateWithoutSectionInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    user: UserCreateNestedOneWithoutTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    area?: AreaCreateNestedOneWithoutTasksInput
    parentTask?: TaskCreateNestedOneWithoutSubtasksInput
    subtasks?: TaskCreateNestedManyWithoutParentTaskInput
    calendar?: CalendarCreateNestedOneWithoutTasksInput
    recurrence?: RecurrenceCreateNestedOneWithoutTasksInput
    checklistItems?: ChecklistItemCreateNestedManyWithoutTaskInput
    tags?: TagCreateNestedManyWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutSectionInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    projectId?: string | null
    areaId?: string | null
    parentTaskId?: string | null
    calendarId?: string | null
    recurrenceId?: string | null
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput
    checklistItems?: ChecklistItemUncheckedCreateNestedManyWithoutTaskInput
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
  }

  export type TaskCreateOrConnectWithoutSectionInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSectionInput, TaskUncheckedCreateWithoutSectionInput>
  }

  export type TaskCreateManySectionInputEnvelope = {
    data: TaskCreateManySectionInput | TaskCreateManySectionInput[]
  }

  export type ProjectUpsertWithoutSectionsInput = {
    update: XOR<ProjectUpdateWithoutSectionsInput, ProjectUncheckedUpdateWithoutSectionsInput>
    create: XOR<ProjectCreateWithoutSectionsInput, ProjectUncheckedCreateWithoutSectionsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSectionsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSectionsInput, ProjectUncheckedUpdateWithoutSectionsInput>
  }

  export type ProjectUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutSectionInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutSectionInput, TaskUncheckedUpdateWithoutSectionInput>
    create: XOR<TaskCreateWithoutSectionInput, TaskUncheckedCreateWithoutSectionInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutSectionInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutSectionInput, TaskUncheckedUpdateWithoutSectionInput>
  }

  export type TaskUpdateManyWithWhereWithoutSectionInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutSectionInput>
  }

  export type TaskCreateWithoutCalendarInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    user: UserCreateNestedOneWithoutTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    area?: AreaCreateNestedOneWithoutTasksInput
    section?: SectionCreateNestedOneWithoutTasksInput
    parentTask?: TaskCreateNestedOneWithoutSubtasksInput
    subtasks?: TaskCreateNestedManyWithoutParentTaskInput
    recurrence?: RecurrenceCreateNestedOneWithoutTasksInput
    checklistItems?: ChecklistItemCreateNestedManyWithoutTaskInput
    tags?: TagCreateNestedManyWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutCalendarInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    projectId?: string | null
    areaId?: string | null
    sectionId?: string | null
    parentTaskId?: string | null
    recurrenceId?: string | null
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput
    checklistItems?: ChecklistItemUncheckedCreateNestedManyWithoutTaskInput
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
  }

  export type TaskCreateOrConnectWithoutCalendarInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCalendarInput, TaskUncheckedCreateWithoutCalendarInput>
  }

  export type TaskCreateManyCalendarInputEnvelope = {
    data: TaskCreateManyCalendarInput | TaskCreateManyCalendarInput[]
  }

  export type TaskUpsertWithWhereUniqueWithoutCalendarInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutCalendarInput, TaskUncheckedUpdateWithoutCalendarInput>
    create: XOR<TaskCreateWithoutCalendarInput, TaskUncheckedCreateWithoutCalendarInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutCalendarInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutCalendarInput, TaskUncheckedUpdateWithoutCalendarInput>
  }

  export type TaskUpdateManyWithWhereWithoutCalendarInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutCalendarInput>
  }

  export type TaskCreateWithoutChecklistItemsInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    user: UserCreateNestedOneWithoutTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    area?: AreaCreateNestedOneWithoutTasksInput
    section?: SectionCreateNestedOneWithoutTasksInput
    parentTask?: TaskCreateNestedOneWithoutSubtasksInput
    subtasks?: TaskCreateNestedManyWithoutParentTaskInput
    calendar?: CalendarCreateNestedOneWithoutTasksInput
    recurrence?: RecurrenceCreateNestedOneWithoutTasksInput
    tags?: TagCreateNestedManyWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutChecklistItemsInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    projectId?: string | null
    areaId?: string | null
    sectionId?: string | null
    parentTaskId?: string | null
    calendarId?: string | null
    recurrenceId?: string | null
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
  }

  export type TaskCreateOrConnectWithoutChecklistItemsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutChecklistItemsInput, TaskUncheckedCreateWithoutChecklistItemsInput>
  }

  export type TaskUpsertWithoutChecklistItemsInput = {
    update: XOR<TaskUpdateWithoutChecklistItemsInput, TaskUncheckedUpdateWithoutChecklistItemsInput>
    create: XOR<TaskCreateWithoutChecklistItemsInput, TaskUncheckedCreateWithoutChecklistItemsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutChecklistItemsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutChecklistItemsInput, TaskUncheckedUpdateWithoutChecklistItemsInput>
  }

  export type TaskUpdateWithoutChecklistItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    area?: AreaUpdateOneWithoutTasksNestedInput
    section?: SectionUpdateOneWithoutTasksNestedInput
    parentTask?: TaskUpdateOneWithoutSubtasksNestedInput
    subtasks?: TaskUpdateManyWithoutParentTaskNestedInput
    calendar?: CalendarUpdateOneWithoutTasksNestedInput
    recurrence?: RecurrenceUpdateOneWithoutTasksNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutChecklistItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    subtasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type TaskCreateWithoutTagsInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    user: UserCreateNestedOneWithoutTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    area?: AreaCreateNestedOneWithoutTasksInput
    section?: SectionCreateNestedOneWithoutTasksInput
    parentTask?: TaskCreateNestedOneWithoutSubtasksInput
    subtasks?: TaskCreateNestedManyWithoutParentTaskInput
    calendar?: CalendarCreateNestedOneWithoutTasksInput
    recurrence?: RecurrenceCreateNestedOneWithoutTasksInput
    checklistItems?: ChecklistItemCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    projectId?: string | null
    areaId?: string | null
    sectionId?: string | null
    parentTaskId?: string | null
    calendarId?: string | null
    recurrenceId?: string | null
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput
    checklistItems?: ChecklistItemUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutTagsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutTagsInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutTagsInput, TaskUncheckedUpdateWithoutTagsInput>
    create: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutTagsInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutTagsInput, TaskUncheckedUpdateWithoutTagsInput>
  }

  export type TaskUpdateManyWithWhereWithoutTagsInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTagsInput>
  }

  export type TaskCreateWithoutRecurrenceInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    user: UserCreateNestedOneWithoutTasksInput
    project?: ProjectCreateNestedOneWithoutTasksInput
    area?: AreaCreateNestedOneWithoutTasksInput
    section?: SectionCreateNestedOneWithoutTasksInput
    parentTask?: TaskCreateNestedOneWithoutSubtasksInput
    subtasks?: TaskCreateNestedManyWithoutParentTaskInput
    calendar?: CalendarCreateNestedOneWithoutTasksInput
    checklistItems?: ChecklistItemCreateNestedManyWithoutTaskInput
    tags?: TagCreateNestedManyWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutRecurrenceInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    projectId?: string | null
    areaId?: string | null
    sectionId?: string | null
    parentTaskId?: string | null
    calendarId?: string | null
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput
    checklistItems?: ChecklistItemUncheckedCreateNestedManyWithoutTaskInput
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
  }

  export type TaskCreateOrConnectWithoutRecurrenceInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutRecurrenceInput, TaskUncheckedCreateWithoutRecurrenceInput>
  }

  export type TaskCreateManyRecurrenceInputEnvelope = {
    data: TaskCreateManyRecurrenceInput | TaskCreateManyRecurrenceInput[]
  }

  export type TaskUpsertWithWhereUniqueWithoutRecurrenceInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutRecurrenceInput, TaskUncheckedUpdateWithoutRecurrenceInput>
    create: XOR<TaskCreateWithoutRecurrenceInput, TaskUncheckedCreateWithoutRecurrenceInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutRecurrenceInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutRecurrenceInput, TaskUncheckedUpdateWithoutRecurrenceInput>
  }

  export type TaskUpdateManyWithWhereWithoutRecurrenceInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutRecurrenceInput>
  }

  export type UserCreateWithoutAuthSessionsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    emailVerified?: Date | string | null
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    tasks?: TaskCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    areas?: AreaCreateNestedManyWithoutUserInput
    oauthProviders?: OAuthProviderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthSessionsInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    emailVerified?: Date | string | null
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    areas?: AreaUncheckedCreateNestedManyWithoutUserInput
    oauthProviders?: OAuthProviderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthSessionsInput, UserUncheckedCreateWithoutAuthSessionsInput>
  }

  export type UserUpsertWithoutAuthSessionsInput = {
    update: XOR<UserUpdateWithoutAuthSessionsInput, UserUncheckedUpdateWithoutAuthSessionsInput>
    create: XOR<UserCreateWithoutAuthSessionsInput, UserUncheckedCreateWithoutAuthSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthSessionsInput, UserUncheckedUpdateWithoutAuthSessionsInput>
  }

  export type UserUpdateWithoutAuthSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: TaskUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    areas?: AreaUpdateManyWithoutUserNestedInput
    oauthProviders?: OAuthProviderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    areas?: AreaUncheckedUpdateManyWithoutUserNestedInput
    oauthProviders?: OAuthProviderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOauthProvidersInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    emailVerified?: Date | string | null
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    tasks?: TaskCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutUserInput
    areas?: AreaCreateNestedManyWithoutUserInput
    authSessions?: AuthSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOauthProvidersInput = {
    id?: string
    email: string
    name?: string | null
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    password?: string | null
    emailVerified?: Date | string | null
    emailVerificationToken?: string | null
    passwordResetToken?: string | null
    passwordResetExpires?: Date | string | null
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutUserInput
    areas?: AreaUncheckedCreateNestedManyWithoutUserInput
    authSessions?: AuthSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOauthProvidersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOauthProvidersInput, UserUncheckedCreateWithoutOauthProvidersInput>
  }

  export type UserUpsertWithoutOauthProvidersInput = {
    update: XOR<UserUpdateWithoutOauthProvidersInput, UserUncheckedUpdateWithoutOauthProvidersInput>
    create: XOR<UserCreateWithoutOauthProvidersInput, UserUncheckedCreateWithoutOauthProvidersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOauthProvidersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOauthProvidersInput, UserUncheckedUpdateWithoutOauthProvidersInput>
  }

  export type UserUpdateWithoutOauthProvidersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: TaskUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutUserNestedInput
    areas?: AreaUpdateManyWithoutUserNestedInput
    authSessions?: AuthSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOauthProvidersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutUserNestedInput
    areas?: AreaUncheckedUpdateManyWithoutUserNestedInput
    authSessions?: AuthSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TaskCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId?: string | null
    areaId?: string | null
    sectionId?: string | null
    parentTaskId?: string | null
    calendarId?: string | null
    recurrenceId?: string | null
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type ProjectCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type AreaCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    color?: string | null
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type AuthSessionCreateManyUserInput = {
    id?: string
    token: string
    expires: Date | string
    createdAt?: Date | string
  }

  export type OAuthProviderCreateManyUserInput = {
    id?: string
    provider: string
    providerUserId: string
    accessToken?: string | null
    refreshToken?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    project?: ProjectUpdateOneWithoutTasksNestedInput
    area?: AreaUpdateOneWithoutTasksNestedInput
    section?: SectionUpdateOneWithoutTasksNestedInput
    parentTask?: TaskUpdateOneWithoutSubtasksNestedInput
    subtasks?: TaskUpdateManyWithoutParentTaskNestedInput
    calendar?: CalendarUpdateOneWithoutTasksNestedInput
    recurrence?: RecurrenceUpdateOneWithoutTasksNestedInput
    checklistItems?: ChecklistItemUpdateManyWithoutTaskNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    subtasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput
    checklistItems?: ChecklistItemUncheckedUpdateManyWithoutTaskNestedInput
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUpdateManyWithoutProjectNestedInput
    sections?: SectionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
    sections?: SectionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type AreaUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    color?: NullableStringFieldUpdateOperationsInput | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type AuthSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthProviderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthProviderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OAuthProviderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateManyParentTaskInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    projectId?: string | null
    areaId?: string | null
    sectionId?: string | null
    calendarId?: string | null
    recurrenceId?: string | null
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type ChecklistItemCreateManyTaskInput = {
    id?: string
    text: string
    completed?: boolean
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type TaskUpdateWithoutParentTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    area?: AreaUpdateOneWithoutTasksNestedInput
    section?: SectionUpdateOneWithoutTasksNestedInput
    subtasks?: TaskUpdateManyWithoutParentTaskNestedInput
    calendar?: CalendarUpdateOneWithoutTasksNestedInput
    recurrence?: RecurrenceUpdateOneWithoutTasksNestedInput
    checklistItems?: ChecklistItemUpdateManyWithoutTaskNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutParentTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    subtasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput
    checklistItems?: ChecklistItemUncheckedUpdateManyWithoutTaskNestedInput
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutParentTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type ChecklistItemUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type ChecklistItemUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type ChecklistItemUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TagUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TagUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TagUncheckedUpdateManyWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateManyProjectInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    areaId?: string | null
    sectionId?: string | null
    parentTaskId?: string | null
    calendarId?: string | null
    recurrenceId?: string | null
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type SectionCreateManyProjectInput = {
    id?: string
    name: string
    position?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type TaskUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    area?: AreaUpdateOneWithoutTasksNestedInput
    section?: SectionUpdateOneWithoutTasksNestedInput
    parentTask?: TaskUpdateOneWithoutSubtasksNestedInput
    subtasks?: TaskUpdateManyWithoutParentTaskNestedInput
    calendar?: CalendarUpdateOneWithoutTasksNestedInput
    recurrence?: RecurrenceUpdateOneWithoutTasksNestedInput
    checklistItems?: ChecklistItemUpdateManyWithoutTaskNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    subtasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput
    checklistItems?: ChecklistItemUncheckedUpdateManyWithoutTaskNestedInput
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type SectionUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateManyAreaInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    projectId?: string | null
    sectionId?: string | null
    parentTaskId?: string | null
    calendarId?: string | null
    recurrenceId?: string | null
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type TaskUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    section?: SectionUpdateOneWithoutTasksNestedInput
    parentTask?: TaskUpdateOneWithoutSubtasksNestedInput
    subtasks?: TaskUpdateManyWithoutParentTaskNestedInput
    calendar?: CalendarUpdateOneWithoutTasksNestedInput
    recurrence?: RecurrenceUpdateOneWithoutTasksNestedInput
    checklistItems?: ChecklistItemUpdateManyWithoutTaskNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    subtasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput
    checklistItems?: ChecklistItemUncheckedUpdateManyWithoutTaskNestedInput
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateManySectionInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    projectId?: string | null
    areaId?: string | null
    parentTaskId?: string | null
    calendarId?: string | null
    recurrenceId?: string | null
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type TaskUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    area?: AreaUpdateOneWithoutTasksNestedInput
    parentTask?: TaskUpdateOneWithoutSubtasksNestedInput
    subtasks?: TaskUpdateManyWithoutParentTaskNestedInput
    calendar?: CalendarUpdateOneWithoutTasksNestedInput
    recurrence?: RecurrenceUpdateOneWithoutTasksNestedInput
    checklistItems?: ChecklistItemUpdateManyWithoutTaskNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    subtasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput
    checklistItems?: ChecklistItemUncheckedUpdateManyWithoutTaskNestedInput
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateManyCalendarInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    projectId?: string | null
    areaId?: string | null
    sectionId?: string | null
    parentTaskId?: string | null
    recurrenceId?: string | null
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type TaskUpdateWithoutCalendarInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    area?: AreaUpdateOneWithoutTasksNestedInput
    section?: SectionUpdateOneWithoutTasksNestedInput
    parentTask?: TaskUpdateOneWithoutSubtasksNestedInput
    subtasks?: TaskUpdateManyWithoutParentTaskNestedInput
    recurrence?: RecurrenceUpdateOneWithoutTasksNestedInput
    checklistItems?: ChecklistItemUpdateManyWithoutTaskNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutCalendarInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    subtasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput
    checklistItems?: ChecklistItemUncheckedUpdateManyWithoutTaskNestedInput
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutCalendarInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TaskUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    area?: AreaUpdateOneWithoutTasksNestedInput
    section?: SectionUpdateOneWithoutTasksNestedInput
    parentTask?: TaskUpdateOneWithoutSubtasksNestedInput
    subtasks?: TaskUpdateManyWithoutParentTaskNestedInput
    calendar?: CalendarUpdateOneWithoutTasksNestedInput
    recurrence?: RecurrenceUpdateOneWithoutTasksNestedInput
    checklistItems?: ChecklistItemUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    subtasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput
    checklistItems?: ChecklistItemUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    recurrenceId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateManyRecurrenceInput = {
    id?: string
    name: string
    description?: string | null
    type?: string | null
    status?: string
    priority?: string
    startDate?: Date | string | null
    endDate?: Date | string | null
    allDay?: boolean
    position?: number | null
    sort?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    projectId?: string | null
    areaId?: string | null
    sectionId?: string | null
    parentTaskId?: string | null
    calendarId?: string | null
    syncId?: string | null
    lastSync?: Date | string | null
    isDeleted?: boolean
    version?: number
  }

  export type TaskUpdateWithoutRecurrenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    project?: ProjectUpdateOneWithoutTasksNestedInput
    area?: AreaUpdateOneWithoutTasksNestedInput
    section?: SectionUpdateOneWithoutTasksNestedInput
    parentTask?: TaskUpdateOneWithoutSubtasksNestedInput
    subtasks?: TaskUpdateManyWithoutParentTaskNestedInput
    calendar?: CalendarUpdateOneWithoutTasksNestedInput
    checklistItems?: ChecklistItemUpdateManyWithoutTaskNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutRecurrenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
    subtasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput
    checklistItems?: ChecklistItemUncheckedUpdateManyWithoutTaskNestedInput
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutRecurrenceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allDay?: BoolFieldUpdateOperationsInput | boolean
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sort?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: NullableStringFieldUpdateOperationsInput | string | null
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null
    calendarId?: NullableStringFieldUpdateOperationsInput | string | null
    syncId?: NullableStringFieldUpdateOperationsInput | string | null
    lastSync?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    version?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskCountOutputTypeDefaultArgs instead
     */
    export type TaskCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AreaCountOutputTypeDefaultArgs instead
     */
    export type AreaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AreaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SectionCountOutputTypeDefaultArgs instead
     */
    export type SectionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SectionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CalendarCountOutputTypeDefaultArgs instead
     */
    export type CalendarCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CalendarCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagCountOutputTypeDefaultArgs instead
     */
    export type TagCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecurrenceCountOutputTypeDefaultArgs instead
     */
    export type RecurrenceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecurrenceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AreaDefaultArgs instead
     */
    export type AreaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AreaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SectionDefaultArgs instead
     */
    export type SectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SectionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CalendarDefaultArgs instead
     */
    export type CalendarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CalendarDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChecklistItemDefaultArgs instead
     */
    export type ChecklistItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChecklistItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TagDefaultArgs instead
     */
    export type TagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TagDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecurrenceDefaultArgs instead
     */
    export type RecurrenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecurrenceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SyncLogDefaultArgs instead
     */
    export type SyncLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SyncLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuthSessionDefaultArgs instead
     */
    export type AuthSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OAuthProviderDefaultArgs instead
     */
    export type OAuthProviderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OAuthProviderDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}