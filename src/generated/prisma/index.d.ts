
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
 * Model Owner
 * 
 */
export type Owner = $Result.DefaultSelection<Prisma.$OwnerPayload>
/**
 * Model Officer
 * 
 */
export type Officer = $Result.DefaultSelection<Prisma.$OfficerPayload>
/**
 * Model Police
 * 
 */
export type Police = $Result.DefaultSelection<Prisma.$PolicePayload>
/**
 * Model CCTV
 * 
 */
export type CCTV = $Result.DefaultSelection<Prisma.$CCTVPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model Evidence
 * 
 */
export type Evidence = $Result.DefaultSelection<Prisma.$EvidencePayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>
/**
 * Model Tracking
 * 
 */
export type Tracking = $Result.DefaultSelection<Prisma.$TrackingPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OfficerStatus: {
  available: 'available',
  busy: 'busy',
  offline: 'offline'
};

export type OfficerStatus = (typeof OfficerStatus)[keyof typeof OfficerStatus]


export const PoliceStatus: {
  available: 'available',
  busy: 'busy',
  offline: 'offline'
};

export type PoliceStatus = (typeof PoliceStatus)[keyof typeof PoliceStatus]


export const CCTVStatus: {
  online: 'online',
  offline: 'offline',
  inactive: 'inactive'
};

export type CCTVStatus = (typeof CCTVStatus)[keyof typeof CCTVStatus]


export const ReportStatus: {
  new: 'new',
  assigned: 'assigned',
  in_progress: 'in_progress',
  verified: 'verified',
  completed: 'completed',
  rejected: 'rejected'
};

export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus]


export const IncidentType: {
  knife: 'knife',
  gun: 'gun',
  other: 'other'
};

export type IncidentType = (typeof IncidentType)[keyof typeof IncidentType]


export const TrackingStatus: {
  on_the_way: 'on_the_way',
  arrived: 'arrived',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type TrackingStatus = (typeof TrackingStatus)[keyof typeof TrackingStatus]


export const NotificationType: {
  report: 'report',
  cctv: 'cctv',
  assignment: 'assignment',
  tracking: 'tracking'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const NotificationStatus: {
  read: 'read',
  unread: 'unread'
};

export type NotificationStatus = (typeof NotificationStatus)[keyof typeof NotificationStatus]

}

export type OfficerStatus = $Enums.OfficerStatus

export const OfficerStatus: typeof $Enums.OfficerStatus

export type PoliceStatus = $Enums.PoliceStatus

export const PoliceStatus: typeof $Enums.PoliceStatus

export type CCTVStatus = $Enums.CCTVStatus

export const CCTVStatus: typeof $Enums.CCTVStatus

export type ReportStatus = $Enums.ReportStatus

export const ReportStatus: typeof $Enums.ReportStatus

export type IncidentType = $Enums.IncidentType

export const IncidentType: typeof $Enums.IncidentType

export type TrackingStatus = $Enums.TrackingStatus

export const TrackingStatus: typeof $Enums.TrackingStatus

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type NotificationStatus = $Enums.NotificationStatus

export const NotificationStatus: typeof $Enums.NotificationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Owners
 * const owners = await prisma.owner.findMany()
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
   * // Fetch zero or more Owners
   * const owners = await prisma.owner.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.owner`: Exposes CRUD operations for the **Owner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owner.findMany()
    * ```
    */
  get owner(): Prisma.OwnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.officer`: Exposes CRUD operations for the **Officer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Officers
    * const officers = await prisma.officer.findMany()
    * ```
    */
  get officer(): Prisma.OfficerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.police`: Exposes CRUD operations for the **Police** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Police
    * const police = await prisma.police.findMany()
    * ```
    */
  get police(): Prisma.PoliceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cCTV`: Exposes CRUD operations for the **CCTV** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CCTVS
    * const cCTVS = await prisma.cCTV.findMany()
    * ```
    */
  get cCTV(): Prisma.CCTVDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evidence`: Exposes CRUD operations for the **Evidence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evidences
    * const evidences = await prisma.evidence.findMany()
    * ```
    */
  get evidence(): Prisma.EvidenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tracking`: Exposes CRUD operations for the **Tracking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trackings
    * const trackings = await prisma.tracking.findMany()
    * ```
    */
  get tracking(): Prisma.TrackingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Owner: 'Owner',
    Officer: 'Officer',
    Police: 'Police',
    CCTV: 'CCTV',
    Report: 'Report',
    Evidence: 'Evidence',
    Assignment: 'Assignment',
    Tracking: 'Tracking',
    Notification: 'Notification',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "owner" | "officer" | "police" | "cCTV" | "report" | "evidence" | "assignment" | "tracking" | "notification" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Owner: {
        payload: Prisma.$OwnerPayload<ExtArgs>
        fields: Prisma.OwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findFirst: {
            args: Prisma.OwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          findMany: {
            args: Prisma.OwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          create: {
            args: Prisma.OwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          createMany: {
            args: Prisma.OwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OwnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          delete: {
            args: Prisma.OwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          update: {
            args: Prisma.OwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          deleteMany: {
            args: Prisma.OwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OwnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>[]
          }
          upsert: {
            args: Prisma.OwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OwnerPayload>
          }
          aggregate: {
            args: Prisma.OwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwner>
          }
          groupBy: {
            args: Prisma.OwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OwnerCountArgs<ExtArgs>
            result: $Utils.Optional<OwnerCountAggregateOutputType> | number
          }
        }
      }
      Officer: {
        payload: Prisma.$OfficerPayload<ExtArgs>
        fields: Prisma.OfficerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfficerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfficerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>
          }
          findFirst: {
            args: Prisma.OfficerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfficerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>
          }
          findMany: {
            args: Prisma.OfficerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>[]
          }
          create: {
            args: Prisma.OfficerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>
          }
          createMany: {
            args: Prisma.OfficerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfficerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>[]
          }
          delete: {
            args: Prisma.OfficerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>
          }
          update: {
            args: Prisma.OfficerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>
          }
          deleteMany: {
            args: Prisma.OfficerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfficerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfficerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>[]
          }
          upsert: {
            args: Prisma.OfficerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>
          }
          aggregate: {
            args: Prisma.OfficerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOfficer>
          }
          groupBy: {
            args: Prisma.OfficerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfficerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfficerCountArgs<ExtArgs>
            result: $Utils.Optional<OfficerCountAggregateOutputType> | number
          }
        }
      }
      Police: {
        payload: Prisma.$PolicePayload<ExtArgs>
        fields: Prisma.PoliceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PoliceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PoliceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicePayload>
          }
          findFirst: {
            args: Prisma.PoliceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PoliceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicePayload>
          }
          findMany: {
            args: Prisma.PoliceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicePayload>[]
          }
          create: {
            args: Prisma.PoliceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicePayload>
          }
          createMany: {
            args: Prisma.PoliceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PoliceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicePayload>[]
          }
          delete: {
            args: Prisma.PoliceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicePayload>
          }
          update: {
            args: Prisma.PoliceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicePayload>
          }
          deleteMany: {
            args: Prisma.PoliceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PoliceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PoliceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicePayload>[]
          }
          upsert: {
            args: Prisma.PoliceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicePayload>
          }
          aggregate: {
            args: Prisma.PoliceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolice>
          }
          groupBy: {
            args: Prisma.PoliceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PoliceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PoliceCountArgs<ExtArgs>
            result: $Utils.Optional<PoliceCountAggregateOutputType> | number
          }
        }
      }
      CCTV: {
        payload: Prisma.$CCTVPayload<ExtArgs>
        fields: Prisma.CCTVFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CCTVFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CCTVPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CCTVFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CCTVPayload>
          }
          findFirst: {
            args: Prisma.CCTVFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CCTVPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CCTVFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CCTVPayload>
          }
          findMany: {
            args: Prisma.CCTVFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CCTVPayload>[]
          }
          create: {
            args: Prisma.CCTVCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CCTVPayload>
          }
          createMany: {
            args: Prisma.CCTVCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CCTVCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CCTVPayload>[]
          }
          delete: {
            args: Prisma.CCTVDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CCTVPayload>
          }
          update: {
            args: Prisma.CCTVUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CCTVPayload>
          }
          deleteMany: {
            args: Prisma.CCTVDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CCTVUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CCTVUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CCTVPayload>[]
          }
          upsert: {
            args: Prisma.CCTVUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CCTVPayload>
          }
          aggregate: {
            args: Prisma.CCTVAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCCTV>
          }
          groupBy: {
            args: Prisma.CCTVGroupByArgs<ExtArgs>
            result: $Utils.Optional<CCTVGroupByOutputType>[]
          }
          count: {
            args: Prisma.CCTVCountArgs<ExtArgs>
            result: $Utils.Optional<CCTVCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      Evidence: {
        payload: Prisma.$EvidencePayload<ExtArgs>
        fields: Prisma.EvidenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvidenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvidenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          findFirst: {
            args: Prisma.EvidenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvidenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          findMany: {
            args: Prisma.EvidenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>[]
          }
          create: {
            args: Prisma.EvidenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          createMany: {
            args: Prisma.EvidenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvidenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>[]
          }
          delete: {
            args: Prisma.EvidenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          update: {
            args: Prisma.EvidenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          deleteMany: {
            args: Prisma.EvidenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvidenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvidenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>[]
          }
          upsert: {
            args: Prisma.EvidenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvidencePayload>
          }
          aggregate: {
            args: Prisma.EvidenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvidence>
          }
          groupBy: {
            args: Prisma.EvidenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvidenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvidenceCountArgs<ExtArgs>
            result: $Utils.Optional<EvidenceCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      Tracking: {
        payload: Prisma.$TrackingPayload<ExtArgs>
        fields: Prisma.TrackingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingPayload>
          }
          findFirst: {
            args: Prisma.TrackingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingPayload>
          }
          findMany: {
            args: Prisma.TrackingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingPayload>[]
          }
          create: {
            args: Prisma.TrackingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingPayload>
          }
          createMany: {
            args: Prisma.TrackingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingPayload>[]
          }
          delete: {
            args: Prisma.TrackingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingPayload>
          }
          update: {
            args: Prisma.TrackingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingPayload>
          }
          deleteMany: {
            args: Prisma.TrackingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingPayload>[]
          }
          upsert: {
            args: Prisma.TrackingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingPayload>
          }
          aggregate: {
            args: Prisma.TrackingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTracking>
          }
          groupBy: {
            args: Prisma.TrackingGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackingGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackingCountArgs<ExtArgs>
            result: $Utils.Optional<TrackingCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    owner?: OwnerOmit
    officer?: OfficerOmit
    police?: PoliceOmit
    cCTV?: CCTVOmit
    report?: ReportOmit
    evidence?: EvidenceOmit
    assignment?: AssignmentOmit
    tracking?: TrackingOmit
    notification?: NotificationOmit
    auditLog?: AuditLogOmit
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
    | 'updateManyAndReturn'
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
   * Count Type OwnerCountOutputType
   */

  export type OwnerCountOutputType = {
    cctvs: number
    reports: number
    notifications: number
    auditLogs: number
  }

  export type OwnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cctvs?: boolean | OwnerCountOutputTypeCountCctvsArgs
    reports?: boolean | OwnerCountOutputTypeCountReportsArgs
    notifications?: boolean | OwnerCountOutputTypeCountNotificationsArgs
    auditLogs?: boolean | OwnerCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OwnerCountOutputType
     */
    select?: OwnerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeCountCctvsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CCTVWhereInput
  }

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * OwnerCountOutputType without action
   */
  export type OwnerCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type OfficerCountOutputType
   */

  export type OfficerCountOutputType = {
    assignments: number
    notifications: number
    auditLogs: number
    trackings: number
  }

  export type OfficerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | OfficerCountOutputTypeCountAssignmentsArgs
    notifications?: boolean | OfficerCountOutputTypeCountNotificationsArgs
    auditLogs?: boolean | OfficerCountOutputTypeCountAuditLogsArgs
    trackings?: boolean | OfficerCountOutputTypeCountTrackingsArgs
  }

  // Custom InputTypes
  /**
   * OfficerCountOutputType without action
   */
  export type OfficerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerCountOutputType
     */
    select?: OfficerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OfficerCountOutputType without action
   */
  export type OfficerCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * OfficerCountOutputType without action
   */
  export type OfficerCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * OfficerCountOutputType without action
   */
  export type OfficerCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * OfficerCountOutputType without action
   */
  export type OfficerCountOutputTypeCountTrackingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackingWhereInput
  }


  /**
   * Count Type PoliceCountOutputType
   */

  export type PoliceCountOutputType = {
    assignments: number
    notifications: number
    auditLogs: number
  }

  export type PoliceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | PoliceCountOutputTypeCountAssignmentsArgs
    notifications?: boolean | PoliceCountOutputTypeCountNotificationsArgs
    auditLogs?: boolean | PoliceCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * PoliceCountOutputType without action
   */
  export type PoliceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PoliceCountOutputType
     */
    select?: PoliceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PoliceCountOutputType without action
   */
  export type PoliceCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * PoliceCountOutputType without action
   */
  export type PoliceCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * PoliceCountOutputType without action
   */
  export type PoliceCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type CCTVCountOutputType
   */

  export type CCTVCountOutputType = {
    reports: number
  }

  export type CCTVCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | CCTVCountOutputTypeCountReportsArgs
  }

  // Custom InputTypes
  /**
   * CCTVCountOutputType without action
   */
  export type CCTVCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CCTVCountOutputType
     */
    select?: CCTVCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CCTVCountOutputType without action
   */
  export type CCTVCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }


  /**
   * Count Type ReportCountOutputType
   */

  export type ReportCountOutputType = {
    evidences: number
    assignments: number
    notifications: number
  }

  export type ReportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evidences?: boolean | ReportCountOutputTypeCountEvidencesArgs
    assignments?: boolean | ReportCountOutputTypeCountAssignmentsArgs
    notifications?: boolean | ReportCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportCountOutputType
     */
    select?: ReportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeCountEvidencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvidenceWhereInput
  }

  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * ReportCountOutputType without action
   */
  export type ReportCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type AssignmentCountOutputType
   */

  export type AssignmentCountOutputType = {
    trackings: number
  }

  export type AssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trackings?: boolean | AssignmentCountOutputTypeCountTrackingsArgs
  }

  // Custom InputTypes
  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentCountOutputType
     */
    select?: AssignmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountTrackingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Owner
   */

  export type AggregateOwner = {
    _count: OwnerCountAggregateOutputType | null
    _avg: OwnerAvgAggregateOutputType | null
    _sum: OwnerSumAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  export type OwnerAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type OwnerSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type OwnerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    passwordHash: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
  }

  export type OwnerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    passwordHash: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
  }

  export type OwnerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    passwordHash: number
    latitude: number
    longitude: number
    createdAt: number
    _all: number
  }


  export type OwnerAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type OwnerSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type OwnerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    passwordHash?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type OwnerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    passwordHash?: true
    latitude?: true
    longitude?: true
    createdAt?: true
  }

  export type OwnerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    passwordHash?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    _all?: true
  }

  export type OwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owner to aggregate.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Owners
    **/
    _count?: true | OwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OwnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OwnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnerMaxAggregateInputType
  }

  export type GetOwnerAggregateType<T extends OwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwner[P]>
      : GetScalarType<T[P], AggregateOwner[P]>
  }




  export type OwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OwnerWhereInput
    orderBy?: OwnerOrderByWithAggregationInput | OwnerOrderByWithAggregationInput[]
    by: OwnerScalarFieldEnum[] | OwnerScalarFieldEnum
    having?: OwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnerCountAggregateInputType | true
    _avg?: OwnerAvgAggregateInputType
    _sum?: OwnerSumAggregateInputType
    _min?: OwnerMinAggregateInputType
    _max?: OwnerMaxAggregateInputType
  }

  export type OwnerGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    passwordHash: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    _count: OwnerCountAggregateOutputType | null
    _avg: OwnerAvgAggregateOutputType | null
    _sum: OwnerSumAggregateOutputType | null
    _min: OwnerMinAggregateOutputType | null
    _max: OwnerMaxAggregateOutputType | null
  }

  type GetOwnerGroupByPayload<T extends OwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnerGroupByOutputType[P]>
            : GetScalarType<T[P], OwnerGroupByOutputType[P]>
        }
      >
    >


  export type OwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    passwordHash?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    cctvs?: boolean | Owner$cctvsArgs<ExtArgs>
    reports?: boolean | Owner$reportsArgs<ExtArgs>
    notifications?: boolean | Owner$notificationsArgs<ExtArgs>
    auditLogs?: boolean | Owner$auditLogsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    passwordHash?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    passwordHash?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["owner"]>

  export type OwnerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    passwordHash?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
  }

  export type OwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "passwordHash" | "latitude" | "longitude" | "createdAt", ExtArgs["result"]["owner"]>
  export type OwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cctvs?: boolean | Owner$cctvsArgs<ExtArgs>
    reports?: boolean | Owner$reportsArgs<ExtArgs>
    notifications?: boolean | Owner$notificationsArgs<ExtArgs>
    auditLogs?: boolean | Owner$auditLogsArgs<ExtArgs>
    _count?: boolean | OwnerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OwnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OwnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Owner"
    objects: {
      cctvs: Prisma.$CCTVPayload<ExtArgs>[]
      reports: Prisma.$ReportPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      phone: string | null
      address: string | null
      passwordHash: string | null
      latitude: number | null
      longitude: number | null
      createdAt: Date | null
    }, ExtArgs["result"]["owner"]>
    composites: {}
  }

  type OwnerGetPayload<S extends boolean | null | undefined | OwnerDefaultArgs> = $Result.GetResult<Prisma.$OwnerPayload, S>

  type OwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnerCountAggregateInputType | true
    }

  export interface OwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Owner'], meta: { name: 'Owner' } }
    /**
     * Find zero or one Owner that matches the filter.
     * @param {OwnerFindUniqueArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OwnerFindUniqueArgs>(args: SelectSubset<T, OwnerFindUniqueArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Owner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OwnerFindUniqueOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, OwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OwnerFindFirstArgs>(args?: SelectSubset<T, OwnerFindFirstArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindFirstOrThrowArgs} args - Arguments to find a Owner
     * @example
     * // Get one Owner
     * const owner = await prisma.owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, OwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owner.findMany()
     * 
     * // Get first 10 Owners
     * const owners = await prisma.owner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownerWithIdOnly = await prisma.owner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OwnerFindManyArgs>(args?: SelectSubset<T, OwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Owner.
     * @param {OwnerCreateArgs} args - Arguments to create a Owner.
     * @example
     * // Create one Owner
     * const Owner = await prisma.owner.create({
     *   data: {
     *     // ... data to create a Owner
     *   }
     * })
     * 
     */
    create<T extends OwnerCreateArgs>(args: SelectSubset<T, OwnerCreateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Owners.
     * @param {OwnerCreateManyArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OwnerCreateManyArgs>(args?: SelectSubset<T, OwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Owners and returns the data saved in the database.
     * @param {OwnerCreateManyAndReturnArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owner = await prisma.owner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OwnerCreateManyAndReturnArgs>(args?: SelectSubset<T, OwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Owner.
     * @param {OwnerDeleteArgs} args - Arguments to delete one Owner.
     * @example
     * // Delete one Owner
     * const Owner = await prisma.owner.delete({
     *   where: {
     *     // ... filter to delete one Owner
     *   }
     * })
     * 
     */
    delete<T extends OwnerDeleteArgs>(args: SelectSubset<T, OwnerDeleteArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Owner.
     * @param {OwnerUpdateArgs} args - Arguments to update one Owner.
     * @example
     * // Update one Owner
     * const owner = await prisma.owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OwnerUpdateArgs>(args: SelectSubset<T, OwnerUpdateArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Owners.
     * @param {OwnerDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OwnerDeleteManyArgs>(args?: SelectSubset<T, OwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OwnerUpdateManyArgs>(args: SelectSubset<T, OwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners and returns the data updated in the database.
     * @param {OwnerUpdateManyAndReturnArgs} args - Arguments to update many Owners.
     * @example
     * // Update many Owners
     * const owner = await prisma.owner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Owners and only return the `id`
     * const ownerWithIdOnly = await prisma.owner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OwnerUpdateManyAndReturnArgs>(args: SelectSubset<T, OwnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Owner.
     * @param {OwnerUpsertArgs} args - Arguments to update or create a Owner.
     * @example
     * // Update or create a Owner
     * const owner = await prisma.owner.upsert({
     *   create: {
     *     // ... data to create a Owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owner we want to update
     *   }
     * })
     */
    upsert<T extends OwnerUpsertArgs>(args: SelectSubset<T, OwnerUpsertArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owner.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
    **/
    count<T extends OwnerCountArgs>(
      args?: Subset<T, OwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OwnerAggregateArgs>(args: Subset<T, OwnerAggregateArgs>): Prisma.PrismaPromise<GetOwnerAggregateType<T>>

    /**
     * Group by Owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnerGroupByArgs} args - Group by arguments.
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
      T extends OwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OwnerGroupByArgs['orderBy'] }
        : { orderBy?: OwnerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Owner model
   */
  readonly fields: OwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cctvs<T extends Owner$cctvsArgs<ExtArgs> = {}>(args?: Subset<T, Owner$cctvsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CCTVPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends Owner$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Owner$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Owner$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Owner$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends Owner$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Owner$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Owner model
   */
  interface OwnerFieldRefs {
    readonly id: FieldRef<"Owner", 'String'>
    readonly name: FieldRef<"Owner", 'String'>
    readonly email: FieldRef<"Owner", 'String'>
    readonly phone: FieldRef<"Owner", 'String'>
    readonly address: FieldRef<"Owner", 'String'>
    readonly passwordHash: FieldRef<"Owner", 'String'>
    readonly latitude: FieldRef<"Owner", 'Float'>
    readonly longitude: FieldRef<"Owner", 'Float'>
    readonly createdAt: FieldRef<"Owner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Owner findUnique
   */
  export type OwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findUniqueOrThrow
   */
  export type OwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner findFirst
   */
  export type OwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findFirstOrThrow
   */
  export type OwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owner to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Owners.
     */
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner findMany
   */
  export type OwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter, which Owners to fetch.
     */
    where?: OwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Owners to fetch.
     */
    orderBy?: OwnerOrderByWithRelationInput | OwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Owners.
     */
    cursor?: OwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Owners.
     */
    skip?: number
    distinct?: OwnerScalarFieldEnum | OwnerScalarFieldEnum[]
  }

  /**
   * Owner create
   */
  export type OwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Owner.
     */
    data?: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
  }

  /**
   * Owner createMany
   */
  export type OwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner createManyAndReturn
   */
  export type OwnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to create many Owners.
     */
    data: OwnerCreateManyInput | OwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Owner update
   */
  export type OwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Owner.
     */
    data: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
    /**
     * Choose, which Owner to update.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner updateMany
   */
  export type OwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner updateManyAndReturn
   */
  export type OwnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * The data used to update Owners.
     */
    data: XOR<OwnerUpdateManyMutationInput, OwnerUncheckedUpdateManyInput>
    /**
     * Filter which Owners to update
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to update.
     */
    limit?: number
  }

  /**
   * Owner upsert
   */
  export type OwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Owner to update in case it exists.
     */
    where: OwnerWhereUniqueInput
    /**
     * In case the Owner found by the `where` argument doesn't exist, create a new Owner with this data.
     */
    create: XOR<OwnerCreateInput, OwnerUncheckedCreateInput>
    /**
     * In case the Owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OwnerUpdateInput, OwnerUncheckedUpdateInput>
  }

  /**
   * Owner delete
   */
  export type OwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    /**
     * Filter which Owner to delete.
     */
    where: OwnerWhereUniqueInput
  }

  /**
   * Owner deleteMany
   */
  export type OwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Owners to delete
     */
    where?: OwnerWhereInput
    /**
     * Limit how many Owners to delete.
     */
    limit?: number
  }

  /**
   * Owner.cctvs
   */
  export type Owner$cctvsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CCTV
     */
    select?: CCTVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CCTV
     */
    omit?: CCTVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CCTVInclude<ExtArgs> | null
    where?: CCTVWhereInput
    orderBy?: CCTVOrderByWithRelationInput | CCTVOrderByWithRelationInput[]
    cursor?: CCTVWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CCTVScalarFieldEnum | CCTVScalarFieldEnum[]
  }

  /**
   * Owner.reports
   */
  export type Owner$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Owner.notifications
   */
  export type Owner$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Owner.auditLogs
   */
  export type Owner$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Owner without action
   */
  export type OwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
  }


  /**
   * Model Officer
   */

  export type AggregateOfficer = {
    _count: OfficerCountAggregateOutputType | null
    _avg: OfficerAvgAggregateOutputType | null
    _sum: OfficerSumAggregateOutputType | null
    _min: OfficerMinAggregateOutputType | null
    _max: OfficerMaxAggregateOutputType | null
  }

  export type OfficerAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type OfficerSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type OfficerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    passwordHash: string | null
    latitude: number | null
    longitude: number | null
    vehicleType: string | null
    licensePlate: string | null
    status: $Enums.OfficerStatus | null
    createdAt: Date | null
  }

  export type OfficerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    passwordHash: string | null
    latitude: number | null
    longitude: number | null
    vehicleType: string | null
    licensePlate: string | null
    status: $Enums.OfficerStatus | null
    createdAt: Date | null
  }

  export type OfficerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    passwordHash: number
    latitude: number
    longitude: number
    vehicleType: number
    licensePlate: number
    status: number
    createdAt: number
    _all: number
  }


  export type OfficerAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type OfficerSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type OfficerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    passwordHash?: true
    latitude?: true
    longitude?: true
    vehicleType?: true
    licensePlate?: true
    status?: true
    createdAt?: true
  }

  export type OfficerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    passwordHash?: true
    latitude?: true
    longitude?: true
    vehicleType?: true
    licensePlate?: true
    status?: true
    createdAt?: true
  }

  export type OfficerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    passwordHash?: true
    latitude?: true
    longitude?: true
    vehicleType?: true
    licensePlate?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type OfficerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Officer to aggregate.
     */
    where?: OfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Officers to fetch.
     */
    orderBy?: OfficerOrderByWithRelationInput | OfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Officers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Officers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Officers
    **/
    _count?: true | OfficerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfficerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfficerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfficerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfficerMaxAggregateInputType
  }

  export type GetOfficerAggregateType<T extends OfficerAggregateArgs> = {
        [P in keyof T & keyof AggregateOfficer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfficer[P]>
      : GetScalarType<T[P], AggregateOfficer[P]>
  }




  export type OfficerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfficerWhereInput
    orderBy?: OfficerOrderByWithAggregationInput | OfficerOrderByWithAggregationInput[]
    by: OfficerScalarFieldEnum[] | OfficerScalarFieldEnum
    having?: OfficerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfficerCountAggregateInputType | true
    _avg?: OfficerAvgAggregateInputType
    _sum?: OfficerSumAggregateInputType
    _min?: OfficerMinAggregateInputType
    _max?: OfficerMaxAggregateInputType
  }

  export type OfficerGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    passwordHash: string | null
    latitude: number | null
    longitude: number | null
    vehicleType: string | null
    licensePlate: string | null
    status: $Enums.OfficerStatus | null
    createdAt: Date | null
    _count: OfficerCountAggregateOutputType | null
    _avg: OfficerAvgAggregateOutputType | null
    _sum: OfficerSumAggregateOutputType | null
    _min: OfficerMinAggregateOutputType | null
    _max: OfficerMaxAggregateOutputType | null
  }

  type GetOfficerGroupByPayload<T extends OfficerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfficerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfficerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfficerGroupByOutputType[P]>
            : GetScalarType<T[P], OfficerGroupByOutputType[P]>
        }
      >
    >


  export type OfficerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    passwordHash?: boolean
    latitude?: boolean
    longitude?: boolean
    vehicleType?: boolean
    licensePlate?: boolean
    status?: boolean
    createdAt?: boolean
    assignments?: boolean | Officer$assignmentsArgs<ExtArgs>
    notifications?: boolean | Officer$notificationsArgs<ExtArgs>
    auditLogs?: boolean | Officer$auditLogsArgs<ExtArgs>
    trackings?: boolean | Officer$trackingsArgs<ExtArgs>
    _count?: boolean | OfficerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["officer"]>

  export type OfficerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    passwordHash?: boolean
    latitude?: boolean
    longitude?: boolean
    vehicleType?: boolean
    licensePlate?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["officer"]>

  export type OfficerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    passwordHash?: boolean
    latitude?: boolean
    longitude?: boolean
    vehicleType?: boolean
    licensePlate?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["officer"]>

  export type OfficerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    passwordHash?: boolean
    latitude?: boolean
    longitude?: boolean
    vehicleType?: boolean
    licensePlate?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type OfficerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "passwordHash" | "latitude" | "longitude" | "vehicleType" | "licensePlate" | "status" | "createdAt", ExtArgs["result"]["officer"]>
  export type OfficerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | Officer$assignmentsArgs<ExtArgs>
    notifications?: boolean | Officer$notificationsArgs<ExtArgs>
    auditLogs?: boolean | Officer$auditLogsArgs<ExtArgs>
    trackings?: boolean | Officer$trackingsArgs<ExtArgs>
    _count?: boolean | OfficerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OfficerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OfficerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OfficerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Officer"
    objects: {
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      trackings: Prisma.$TrackingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      phone: string | null
      address: string | null
      passwordHash: string | null
      latitude: number | null
      longitude: number | null
      vehicleType: string | null
      licensePlate: string | null
      status: $Enums.OfficerStatus | null
      createdAt: Date | null
    }, ExtArgs["result"]["officer"]>
    composites: {}
  }

  type OfficerGetPayload<S extends boolean | null | undefined | OfficerDefaultArgs> = $Result.GetResult<Prisma.$OfficerPayload, S>

  type OfficerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfficerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfficerCountAggregateInputType | true
    }

  export interface OfficerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Officer'], meta: { name: 'Officer' } }
    /**
     * Find zero or one Officer that matches the filter.
     * @param {OfficerFindUniqueArgs} args - Arguments to find a Officer
     * @example
     * // Get one Officer
     * const officer = await prisma.officer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfficerFindUniqueArgs>(args: SelectSubset<T, OfficerFindUniqueArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Officer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfficerFindUniqueOrThrowArgs} args - Arguments to find a Officer
     * @example
     * // Get one Officer
     * const officer = await prisma.officer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfficerFindUniqueOrThrowArgs>(args: SelectSubset<T, OfficerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Officer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerFindFirstArgs} args - Arguments to find a Officer
     * @example
     * // Get one Officer
     * const officer = await prisma.officer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfficerFindFirstArgs>(args?: SelectSubset<T, OfficerFindFirstArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Officer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerFindFirstOrThrowArgs} args - Arguments to find a Officer
     * @example
     * // Get one Officer
     * const officer = await prisma.officer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfficerFindFirstOrThrowArgs>(args?: SelectSubset<T, OfficerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Officers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Officers
     * const officers = await prisma.officer.findMany()
     * 
     * // Get first 10 Officers
     * const officers = await prisma.officer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const officerWithIdOnly = await prisma.officer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfficerFindManyArgs>(args?: SelectSubset<T, OfficerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Officer.
     * @param {OfficerCreateArgs} args - Arguments to create a Officer.
     * @example
     * // Create one Officer
     * const Officer = await prisma.officer.create({
     *   data: {
     *     // ... data to create a Officer
     *   }
     * })
     * 
     */
    create<T extends OfficerCreateArgs>(args: SelectSubset<T, OfficerCreateArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Officers.
     * @param {OfficerCreateManyArgs} args - Arguments to create many Officers.
     * @example
     * // Create many Officers
     * const officer = await prisma.officer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfficerCreateManyArgs>(args?: SelectSubset<T, OfficerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Officers and returns the data saved in the database.
     * @param {OfficerCreateManyAndReturnArgs} args - Arguments to create many Officers.
     * @example
     * // Create many Officers
     * const officer = await prisma.officer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Officers and only return the `id`
     * const officerWithIdOnly = await prisma.officer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfficerCreateManyAndReturnArgs>(args?: SelectSubset<T, OfficerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Officer.
     * @param {OfficerDeleteArgs} args - Arguments to delete one Officer.
     * @example
     * // Delete one Officer
     * const Officer = await prisma.officer.delete({
     *   where: {
     *     // ... filter to delete one Officer
     *   }
     * })
     * 
     */
    delete<T extends OfficerDeleteArgs>(args: SelectSubset<T, OfficerDeleteArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Officer.
     * @param {OfficerUpdateArgs} args - Arguments to update one Officer.
     * @example
     * // Update one Officer
     * const officer = await prisma.officer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfficerUpdateArgs>(args: SelectSubset<T, OfficerUpdateArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Officers.
     * @param {OfficerDeleteManyArgs} args - Arguments to filter Officers to delete.
     * @example
     * // Delete a few Officers
     * const { count } = await prisma.officer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfficerDeleteManyArgs>(args?: SelectSubset<T, OfficerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Officers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Officers
     * const officer = await prisma.officer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfficerUpdateManyArgs>(args: SelectSubset<T, OfficerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Officers and returns the data updated in the database.
     * @param {OfficerUpdateManyAndReturnArgs} args - Arguments to update many Officers.
     * @example
     * // Update many Officers
     * const officer = await prisma.officer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Officers and only return the `id`
     * const officerWithIdOnly = await prisma.officer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OfficerUpdateManyAndReturnArgs>(args: SelectSubset<T, OfficerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Officer.
     * @param {OfficerUpsertArgs} args - Arguments to update or create a Officer.
     * @example
     * // Update or create a Officer
     * const officer = await prisma.officer.upsert({
     *   create: {
     *     // ... data to create a Officer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Officer we want to update
     *   }
     * })
     */
    upsert<T extends OfficerUpsertArgs>(args: SelectSubset<T, OfficerUpsertArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Officers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerCountArgs} args - Arguments to filter Officers to count.
     * @example
     * // Count the number of Officers
     * const count = await prisma.officer.count({
     *   where: {
     *     // ... the filter for the Officers we want to count
     *   }
     * })
    **/
    count<T extends OfficerCountArgs>(
      args?: Subset<T, OfficerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfficerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Officer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfficerAggregateArgs>(args: Subset<T, OfficerAggregateArgs>): Prisma.PrismaPromise<GetOfficerAggregateType<T>>

    /**
     * Group by Officer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerGroupByArgs} args - Group by arguments.
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
      T extends OfficerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfficerGroupByArgs['orderBy'] }
        : { orderBy?: OfficerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OfficerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfficerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Officer model
   */
  readonly fields: OfficerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Officer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfficerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignments<T extends Officer$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Officer$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Officer$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Officer$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends Officer$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Officer$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trackings<T extends Officer$trackingsArgs<ExtArgs> = {}>(args?: Subset<T, Officer$trackingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Officer model
   */
  interface OfficerFieldRefs {
    readonly id: FieldRef<"Officer", 'String'>
    readonly name: FieldRef<"Officer", 'String'>
    readonly email: FieldRef<"Officer", 'String'>
    readonly phone: FieldRef<"Officer", 'String'>
    readonly address: FieldRef<"Officer", 'String'>
    readonly passwordHash: FieldRef<"Officer", 'String'>
    readonly latitude: FieldRef<"Officer", 'Float'>
    readonly longitude: FieldRef<"Officer", 'Float'>
    readonly vehicleType: FieldRef<"Officer", 'String'>
    readonly licensePlate: FieldRef<"Officer", 'String'>
    readonly status: FieldRef<"Officer", 'OfficerStatus'>
    readonly createdAt: FieldRef<"Officer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Officer findUnique
   */
  export type OfficerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * Filter, which Officer to fetch.
     */
    where: OfficerWhereUniqueInput
  }

  /**
   * Officer findUniqueOrThrow
   */
  export type OfficerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * Filter, which Officer to fetch.
     */
    where: OfficerWhereUniqueInput
  }

  /**
   * Officer findFirst
   */
  export type OfficerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * Filter, which Officer to fetch.
     */
    where?: OfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Officers to fetch.
     */
    orderBy?: OfficerOrderByWithRelationInput | OfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Officers.
     */
    cursor?: OfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Officers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Officers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Officers.
     */
    distinct?: OfficerScalarFieldEnum | OfficerScalarFieldEnum[]
  }

  /**
   * Officer findFirstOrThrow
   */
  export type OfficerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * Filter, which Officer to fetch.
     */
    where?: OfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Officers to fetch.
     */
    orderBy?: OfficerOrderByWithRelationInput | OfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Officers.
     */
    cursor?: OfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Officers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Officers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Officers.
     */
    distinct?: OfficerScalarFieldEnum | OfficerScalarFieldEnum[]
  }

  /**
   * Officer findMany
   */
  export type OfficerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * Filter, which Officers to fetch.
     */
    where?: OfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Officers to fetch.
     */
    orderBy?: OfficerOrderByWithRelationInput | OfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Officers.
     */
    cursor?: OfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Officers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Officers.
     */
    skip?: number
    distinct?: OfficerScalarFieldEnum | OfficerScalarFieldEnum[]
  }

  /**
   * Officer create
   */
  export type OfficerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * The data needed to create a Officer.
     */
    data?: XOR<OfficerCreateInput, OfficerUncheckedCreateInput>
  }

  /**
   * Officer createMany
   */
  export type OfficerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Officers.
     */
    data: OfficerCreateManyInput | OfficerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Officer createManyAndReturn
   */
  export type OfficerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * The data used to create many Officers.
     */
    data: OfficerCreateManyInput | OfficerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Officer update
   */
  export type OfficerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * The data needed to update a Officer.
     */
    data: XOR<OfficerUpdateInput, OfficerUncheckedUpdateInput>
    /**
     * Choose, which Officer to update.
     */
    where: OfficerWhereUniqueInput
  }

  /**
   * Officer updateMany
   */
  export type OfficerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Officers.
     */
    data: XOR<OfficerUpdateManyMutationInput, OfficerUncheckedUpdateManyInput>
    /**
     * Filter which Officers to update
     */
    where?: OfficerWhereInput
    /**
     * Limit how many Officers to update.
     */
    limit?: number
  }

  /**
   * Officer updateManyAndReturn
   */
  export type OfficerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * The data used to update Officers.
     */
    data: XOR<OfficerUpdateManyMutationInput, OfficerUncheckedUpdateManyInput>
    /**
     * Filter which Officers to update
     */
    where?: OfficerWhereInput
    /**
     * Limit how many Officers to update.
     */
    limit?: number
  }

  /**
   * Officer upsert
   */
  export type OfficerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * The filter to search for the Officer to update in case it exists.
     */
    where: OfficerWhereUniqueInput
    /**
     * In case the Officer found by the `where` argument doesn't exist, create a new Officer with this data.
     */
    create: XOR<OfficerCreateInput, OfficerUncheckedCreateInput>
    /**
     * In case the Officer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfficerUpdateInput, OfficerUncheckedUpdateInput>
  }

  /**
   * Officer delete
   */
  export type OfficerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * Filter which Officer to delete.
     */
    where: OfficerWhereUniqueInput
  }

  /**
   * Officer deleteMany
   */
  export type OfficerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Officers to delete
     */
    where?: OfficerWhereInput
    /**
     * Limit how many Officers to delete.
     */
    limit?: number
  }

  /**
   * Officer.assignments
   */
  export type Officer$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Officer.notifications
   */
  export type Officer$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Officer.auditLogs
   */
  export type Officer$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Officer.trackings
   */
  export type Officer$trackingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracking
     */
    select?: TrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracking
     */
    omit?: TrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingInclude<ExtArgs> | null
    where?: TrackingWhereInput
    orderBy?: TrackingOrderByWithRelationInput | TrackingOrderByWithRelationInput[]
    cursor?: TrackingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackingScalarFieldEnum | TrackingScalarFieldEnum[]
  }

  /**
   * Officer without action
   */
  export type OfficerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
  }


  /**
   * Model Police
   */

  export type AggregatePolice = {
    _count: PoliceCountAggregateOutputType | null
    _avg: PoliceAvgAggregateOutputType | null
    _sum: PoliceSumAggregateOutputType | null
    _min: PoliceMinAggregateOutputType | null
    _max: PoliceMaxAggregateOutputType | null
  }

  export type PoliceAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type PoliceSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type PoliceMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    passwordHash: string | null
    latitude: number | null
    longitude: number | null
    officeName: string | null
    status: $Enums.PoliceStatus | null
    createdAt: Date | null
  }

  export type PoliceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    passwordHash: string | null
    latitude: number | null
    longitude: number | null
    officeName: string | null
    status: $Enums.PoliceStatus | null
    createdAt: Date | null
  }

  export type PoliceCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    passwordHash: number
    latitude: number
    longitude: number
    officeName: number
    status: number
    createdAt: number
    _all: number
  }


  export type PoliceAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type PoliceSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type PoliceMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    passwordHash?: true
    latitude?: true
    longitude?: true
    officeName?: true
    status?: true
    createdAt?: true
  }

  export type PoliceMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    passwordHash?: true
    latitude?: true
    longitude?: true
    officeName?: true
    status?: true
    createdAt?: true
  }

  export type PoliceCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    passwordHash?: true
    latitude?: true
    longitude?: true
    officeName?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PoliceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Police to aggregate.
     */
    where?: PoliceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Police to fetch.
     */
    orderBy?: PoliceOrderByWithRelationInput | PoliceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PoliceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Police from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Police.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Police
    **/
    _count?: true | PoliceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PoliceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PoliceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PoliceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PoliceMaxAggregateInputType
  }

  export type GetPoliceAggregateType<T extends PoliceAggregateArgs> = {
        [P in keyof T & keyof AggregatePolice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolice[P]>
      : GetScalarType<T[P], AggregatePolice[P]>
  }




  export type PoliceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PoliceWhereInput
    orderBy?: PoliceOrderByWithAggregationInput | PoliceOrderByWithAggregationInput[]
    by: PoliceScalarFieldEnum[] | PoliceScalarFieldEnum
    having?: PoliceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PoliceCountAggregateInputType | true
    _avg?: PoliceAvgAggregateInputType
    _sum?: PoliceSumAggregateInputType
    _min?: PoliceMinAggregateInputType
    _max?: PoliceMaxAggregateInputType
  }

  export type PoliceGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    passwordHash: string | null
    latitude: number | null
    longitude: number | null
    officeName: string | null
    status: $Enums.PoliceStatus | null
    createdAt: Date | null
    _count: PoliceCountAggregateOutputType | null
    _avg: PoliceAvgAggregateOutputType | null
    _sum: PoliceSumAggregateOutputType | null
    _min: PoliceMinAggregateOutputType | null
    _max: PoliceMaxAggregateOutputType | null
  }

  type GetPoliceGroupByPayload<T extends PoliceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PoliceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PoliceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PoliceGroupByOutputType[P]>
            : GetScalarType<T[P], PoliceGroupByOutputType[P]>
        }
      >
    >


  export type PoliceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    passwordHash?: boolean
    latitude?: boolean
    longitude?: boolean
    officeName?: boolean
    status?: boolean
    createdAt?: boolean
    assignments?: boolean | Police$assignmentsArgs<ExtArgs>
    notifications?: boolean | Police$notificationsArgs<ExtArgs>
    auditLogs?: boolean | Police$auditLogsArgs<ExtArgs>
    _count?: boolean | PoliceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["police"]>

  export type PoliceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    passwordHash?: boolean
    latitude?: boolean
    longitude?: boolean
    officeName?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["police"]>

  export type PoliceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    passwordHash?: boolean
    latitude?: boolean
    longitude?: boolean
    officeName?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["police"]>

  export type PoliceSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    passwordHash?: boolean
    latitude?: boolean
    longitude?: boolean
    officeName?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PoliceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "passwordHash" | "latitude" | "longitude" | "officeName" | "status" | "createdAt", ExtArgs["result"]["police"]>
  export type PoliceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | Police$assignmentsArgs<ExtArgs>
    notifications?: boolean | Police$notificationsArgs<ExtArgs>
    auditLogs?: boolean | Police$auditLogsArgs<ExtArgs>
    _count?: boolean | PoliceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PoliceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PoliceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PolicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Police"
    objects: {
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      phone: string | null
      address: string | null
      passwordHash: string | null
      latitude: number | null
      longitude: number | null
      officeName: string | null
      status: $Enums.PoliceStatus | null
      createdAt: Date | null
    }, ExtArgs["result"]["police"]>
    composites: {}
  }

  type PoliceGetPayload<S extends boolean | null | undefined | PoliceDefaultArgs> = $Result.GetResult<Prisma.$PolicePayload, S>

  type PoliceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PoliceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PoliceCountAggregateInputType | true
    }

  export interface PoliceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Police'], meta: { name: 'Police' } }
    /**
     * Find zero or one Police that matches the filter.
     * @param {PoliceFindUniqueArgs} args - Arguments to find a Police
     * @example
     * // Get one Police
     * const police = await prisma.police.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PoliceFindUniqueArgs>(args: SelectSubset<T, PoliceFindUniqueArgs<ExtArgs>>): Prisma__PoliceClient<$Result.GetResult<Prisma.$PolicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Police that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PoliceFindUniqueOrThrowArgs} args - Arguments to find a Police
     * @example
     * // Get one Police
     * const police = await prisma.police.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PoliceFindUniqueOrThrowArgs>(args: SelectSubset<T, PoliceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PoliceClient<$Result.GetResult<Prisma.$PolicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Police that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliceFindFirstArgs} args - Arguments to find a Police
     * @example
     * // Get one Police
     * const police = await prisma.police.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PoliceFindFirstArgs>(args?: SelectSubset<T, PoliceFindFirstArgs<ExtArgs>>): Prisma__PoliceClient<$Result.GetResult<Prisma.$PolicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Police that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliceFindFirstOrThrowArgs} args - Arguments to find a Police
     * @example
     * // Get one Police
     * const police = await prisma.police.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PoliceFindFirstOrThrowArgs>(args?: SelectSubset<T, PoliceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PoliceClient<$Result.GetResult<Prisma.$PolicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Police that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Police
     * const police = await prisma.police.findMany()
     * 
     * // Get first 10 Police
     * const police = await prisma.police.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policeWithIdOnly = await prisma.police.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PoliceFindManyArgs>(args?: SelectSubset<T, PoliceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Police.
     * @param {PoliceCreateArgs} args - Arguments to create a Police.
     * @example
     * // Create one Police
     * const Police = await prisma.police.create({
     *   data: {
     *     // ... data to create a Police
     *   }
     * })
     * 
     */
    create<T extends PoliceCreateArgs>(args: SelectSubset<T, PoliceCreateArgs<ExtArgs>>): Prisma__PoliceClient<$Result.GetResult<Prisma.$PolicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Police.
     * @param {PoliceCreateManyArgs} args - Arguments to create many Police.
     * @example
     * // Create many Police
     * const police = await prisma.police.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PoliceCreateManyArgs>(args?: SelectSubset<T, PoliceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Police and returns the data saved in the database.
     * @param {PoliceCreateManyAndReturnArgs} args - Arguments to create many Police.
     * @example
     * // Create many Police
     * const police = await prisma.police.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Police and only return the `id`
     * const policeWithIdOnly = await prisma.police.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PoliceCreateManyAndReturnArgs>(args?: SelectSubset<T, PoliceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Police.
     * @param {PoliceDeleteArgs} args - Arguments to delete one Police.
     * @example
     * // Delete one Police
     * const Police = await prisma.police.delete({
     *   where: {
     *     // ... filter to delete one Police
     *   }
     * })
     * 
     */
    delete<T extends PoliceDeleteArgs>(args: SelectSubset<T, PoliceDeleteArgs<ExtArgs>>): Prisma__PoliceClient<$Result.GetResult<Prisma.$PolicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Police.
     * @param {PoliceUpdateArgs} args - Arguments to update one Police.
     * @example
     * // Update one Police
     * const police = await prisma.police.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PoliceUpdateArgs>(args: SelectSubset<T, PoliceUpdateArgs<ExtArgs>>): Prisma__PoliceClient<$Result.GetResult<Prisma.$PolicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Police.
     * @param {PoliceDeleteManyArgs} args - Arguments to filter Police to delete.
     * @example
     * // Delete a few Police
     * const { count } = await prisma.police.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PoliceDeleteManyArgs>(args?: SelectSubset<T, PoliceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Police.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Police
     * const police = await prisma.police.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PoliceUpdateManyArgs>(args: SelectSubset<T, PoliceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Police and returns the data updated in the database.
     * @param {PoliceUpdateManyAndReturnArgs} args - Arguments to update many Police.
     * @example
     * // Update many Police
     * const police = await prisma.police.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Police and only return the `id`
     * const policeWithIdOnly = await prisma.police.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PoliceUpdateManyAndReturnArgs>(args: SelectSubset<T, PoliceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Police.
     * @param {PoliceUpsertArgs} args - Arguments to update or create a Police.
     * @example
     * // Update or create a Police
     * const police = await prisma.police.upsert({
     *   create: {
     *     // ... data to create a Police
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Police we want to update
     *   }
     * })
     */
    upsert<T extends PoliceUpsertArgs>(args: SelectSubset<T, PoliceUpsertArgs<ExtArgs>>): Prisma__PoliceClient<$Result.GetResult<Prisma.$PolicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Police.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliceCountArgs} args - Arguments to filter Police to count.
     * @example
     * // Count the number of Police
     * const count = await prisma.police.count({
     *   where: {
     *     // ... the filter for the Police we want to count
     *   }
     * })
    **/
    count<T extends PoliceCountArgs>(
      args?: Subset<T, PoliceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PoliceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Police.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PoliceAggregateArgs>(args: Subset<T, PoliceAggregateArgs>): Prisma.PrismaPromise<GetPoliceAggregateType<T>>

    /**
     * Group by Police.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PoliceGroupByArgs} args - Group by arguments.
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
      T extends PoliceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PoliceGroupByArgs['orderBy'] }
        : { orderBy?: PoliceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PoliceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPoliceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Police model
   */
  readonly fields: PoliceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Police.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PoliceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignments<T extends Police$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Police$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Police$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Police$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends Police$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Police$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Police model
   */
  interface PoliceFieldRefs {
    readonly id: FieldRef<"Police", 'String'>
    readonly name: FieldRef<"Police", 'String'>
    readonly email: FieldRef<"Police", 'String'>
    readonly phone: FieldRef<"Police", 'String'>
    readonly address: FieldRef<"Police", 'String'>
    readonly passwordHash: FieldRef<"Police", 'String'>
    readonly latitude: FieldRef<"Police", 'Float'>
    readonly longitude: FieldRef<"Police", 'Float'>
    readonly officeName: FieldRef<"Police", 'String'>
    readonly status: FieldRef<"Police", 'PoliceStatus'>
    readonly createdAt: FieldRef<"Police", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Police findUnique
   */
  export type PoliceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Police
     */
    select?: PoliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Police
     */
    omit?: PoliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceInclude<ExtArgs> | null
    /**
     * Filter, which Police to fetch.
     */
    where: PoliceWhereUniqueInput
  }

  /**
   * Police findUniqueOrThrow
   */
  export type PoliceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Police
     */
    select?: PoliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Police
     */
    omit?: PoliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceInclude<ExtArgs> | null
    /**
     * Filter, which Police to fetch.
     */
    where: PoliceWhereUniqueInput
  }

  /**
   * Police findFirst
   */
  export type PoliceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Police
     */
    select?: PoliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Police
     */
    omit?: PoliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceInclude<ExtArgs> | null
    /**
     * Filter, which Police to fetch.
     */
    where?: PoliceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Police to fetch.
     */
    orderBy?: PoliceOrderByWithRelationInput | PoliceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Police.
     */
    cursor?: PoliceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Police from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Police.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Police.
     */
    distinct?: PoliceScalarFieldEnum | PoliceScalarFieldEnum[]
  }

  /**
   * Police findFirstOrThrow
   */
  export type PoliceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Police
     */
    select?: PoliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Police
     */
    omit?: PoliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceInclude<ExtArgs> | null
    /**
     * Filter, which Police to fetch.
     */
    where?: PoliceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Police to fetch.
     */
    orderBy?: PoliceOrderByWithRelationInput | PoliceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Police.
     */
    cursor?: PoliceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Police from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Police.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Police.
     */
    distinct?: PoliceScalarFieldEnum | PoliceScalarFieldEnum[]
  }

  /**
   * Police findMany
   */
  export type PoliceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Police
     */
    select?: PoliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Police
     */
    omit?: PoliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceInclude<ExtArgs> | null
    /**
     * Filter, which Police to fetch.
     */
    where?: PoliceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Police to fetch.
     */
    orderBy?: PoliceOrderByWithRelationInput | PoliceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Police.
     */
    cursor?: PoliceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Police from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Police.
     */
    skip?: number
    distinct?: PoliceScalarFieldEnum | PoliceScalarFieldEnum[]
  }

  /**
   * Police create
   */
  export type PoliceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Police
     */
    select?: PoliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Police
     */
    omit?: PoliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceInclude<ExtArgs> | null
    /**
     * The data needed to create a Police.
     */
    data?: XOR<PoliceCreateInput, PoliceUncheckedCreateInput>
  }

  /**
   * Police createMany
   */
  export type PoliceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Police.
     */
    data: PoliceCreateManyInput | PoliceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Police createManyAndReturn
   */
  export type PoliceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Police
     */
    select?: PoliceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Police
     */
    omit?: PoliceOmit<ExtArgs> | null
    /**
     * The data used to create many Police.
     */
    data: PoliceCreateManyInput | PoliceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Police update
   */
  export type PoliceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Police
     */
    select?: PoliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Police
     */
    omit?: PoliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceInclude<ExtArgs> | null
    /**
     * The data needed to update a Police.
     */
    data: XOR<PoliceUpdateInput, PoliceUncheckedUpdateInput>
    /**
     * Choose, which Police to update.
     */
    where: PoliceWhereUniqueInput
  }

  /**
   * Police updateMany
   */
  export type PoliceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Police.
     */
    data: XOR<PoliceUpdateManyMutationInput, PoliceUncheckedUpdateManyInput>
    /**
     * Filter which Police to update
     */
    where?: PoliceWhereInput
    /**
     * Limit how many Police to update.
     */
    limit?: number
  }

  /**
   * Police updateManyAndReturn
   */
  export type PoliceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Police
     */
    select?: PoliceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Police
     */
    omit?: PoliceOmit<ExtArgs> | null
    /**
     * The data used to update Police.
     */
    data: XOR<PoliceUpdateManyMutationInput, PoliceUncheckedUpdateManyInput>
    /**
     * Filter which Police to update
     */
    where?: PoliceWhereInput
    /**
     * Limit how many Police to update.
     */
    limit?: number
  }

  /**
   * Police upsert
   */
  export type PoliceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Police
     */
    select?: PoliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Police
     */
    omit?: PoliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceInclude<ExtArgs> | null
    /**
     * The filter to search for the Police to update in case it exists.
     */
    where: PoliceWhereUniqueInput
    /**
     * In case the Police found by the `where` argument doesn't exist, create a new Police with this data.
     */
    create: XOR<PoliceCreateInput, PoliceUncheckedCreateInput>
    /**
     * In case the Police was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PoliceUpdateInput, PoliceUncheckedUpdateInput>
  }

  /**
   * Police delete
   */
  export type PoliceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Police
     */
    select?: PoliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Police
     */
    omit?: PoliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceInclude<ExtArgs> | null
    /**
     * Filter which Police to delete.
     */
    where: PoliceWhereUniqueInput
  }

  /**
   * Police deleteMany
   */
  export type PoliceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Police to delete
     */
    where?: PoliceWhereInput
    /**
     * Limit how many Police to delete.
     */
    limit?: number
  }

  /**
   * Police.assignments
   */
  export type Police$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Police.notifications
   */
  export type Police$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Police.auditLogs
   */
  export type Police$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Police without action
   */
  export type PoliceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Police
     */
    select?: PoliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Police
     */
    omit?: PoliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceInclude<ExtArgs> | null
  }


  /**
   * Model CCTV
   */

  export type AggregateCCTV = {
    _count: CCTVCountAggregateOutputType | null
    _min: CCTVMinAggregateOutputType | null
    _max: CCTVMaxAggregateOutputType | null
  }

  export type CCTVMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    name: string | null
    location: string | null
    description: string | null
    IP: string | null
    cameraType: string | null
    streamUrl: string | null
    status: $Enums.CCTVStatus | null
    createdAt: Date | null
  }

  export type CCTVMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    name: string | null
    location: string | null
    description: string | null
    IP: string | null
    cameraType: string | null
    streamUrl: string | null
    status: $Enums.CCTVStatus | null
    createdAt: Date | null
  }

  export type CCTVCountAggregateOutputType = {
    id: number
    ownerId: number
    name: number
    location: number
    description: number
    IP: number
    cameraType: number
    streamUrl: number
    status: number
    createdAt: number
    _all: number
  }


  export type CCTVMinAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    location?: true
    description?: true
    IP?: true
    cameraType?: true
    streamUrl?: true
    status?: true
    createdAt?: true
  }

  export type CCTVMaxAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    location?: true
    description?: true
    IP?: true
    cameraType?: true
    streamUrl?: true
    status?: true
    createdAt?: true
  }

  export type CCTVCountAggregateInputType = {
    id?: true
    ownerId?: true
    name?: true
    location?: true
    description?: true
    IP?: true
    cameraType?: true
    streamUrl?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type CCTVAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CCTV to aggregate.
     */
    where?: CCTVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CCTVS to fetch.
     */
    orderBy?: CCTVOrderByWithRelationInput | CCTVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CCTVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CCTVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CCTVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CCTVS
    **/
    _count?: true | CCTVCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CCTVMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CCTVMaxAggregateInputType
  }

  export type GetCCTVAggregateType<T extends CCTVAggregateArgs> = {
        [P in keyof T & keyof AggregateCCTV]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCCTV[P]>
      : GetScalarType<T[P], AggregateCCTV[P]>
  }




  export type CCTVGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CCTVWhereInput
    orderBy?: CCTVOrderByWithAggregationInput | CCTVOrderByWithAggregationInput[]
    by: CCTVScalarFieldEnum[] | CCTVScalarFieldEnum
    having?: CCTVScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CCTVCountAggregateInputType | true
    _min?: CCTVMinAggregateInputType
    _max?: CCTVMaxAggregateInputType
  }

  export type CCTVGroupByOutputType = {
    id: string
    ownerId: string
    name: string | null
    location: string | null
    description: string | null
    IP: string | null
    cameraType: string | null
    streamUrl: string | null
    status: $Enums.CCTVStatus | null
    createdAt: Date | null
    _count: CCTVCountAggregateOutputType | null
    _min: CCTVMinAggregateOutputType | null
    _max: CCTVMaxAggregateOutputType | null
  }

  type GetCCTVGroupByPayload<T extends CCTVGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CCTVGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CCTVGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CCTVGroupByOutputType[P]>
            : GetScalarType<T[P], CCTVGroupByOutputType[P]>
        }
      >
    >


  export type CCTVSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    location?: boolean
    description?: boolean
    IP?: boolean
    cameraType?: boolean
    streamUrl?: boolean
    status?: boolean
    createdAt?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    reports?: boolean | CCTV$reportsArgs<ExtArgs>
    _count?: boolean | CCTVCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cCTV"]>

  export type CCTVSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    location?: boolean
    description?: boolean
    IP?: boolean
    cameraType?: boolean
    streamUrl?: boolean
    status?: boolean
    createdAt?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cCTV"]>

  export type CCTVSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    name?: boolean
    location?: boolean
    description?: boolean
    IP?: boolean
    cameraType?: boolean
    streamUrl?: boolean
    status?: boolean
    createdAt?: boolean
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cCTV"]>

  export type CCTVSelectScalar = {
    id?: boolean
    ownerId?: boolean
    name?: boolean
    location?: boolean
    description?: boolean
    IP?: boolean
    cameraType?: boolean
    streamUrl?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type CCTVOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "name" | "location" | "description" | "IP" | "cameraType" | "streamUrl" | "status" | "createdAt", ExtArgs["result"]["cCTV"]>
  export type CCTVInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    reports?: boolean | CCTV$reportsArgs<ExtArgs>
    _count?: boolean | CCTVCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CCTVIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }
  export type CCTVIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }

  export type $CCTVPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CCTV"
    objects: {
      owner: Prisma.$OwnerPayload<ExtArgs>
      reports: Prisma.$ReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      name: string | null
      location: string | null
      description: string | null
      IP: string | null
      cameraType: string | null
      streamUrl: string | null
      status: $Enums.CCTVStatus | null
      createdAt: Date | null
    }, ExtArgs["result"]["cCTV"]>
    composites: {}
  }

  type CCTVGetPayload<S extends boolean | null | undefined | CCTVDefaultArgs> = $Result.GetResult<Prisma.$CCTVPayload, S>

  type CCTVCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CCTVFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CCTVCountAggregateInputType | true
    }

  export interface CCTVDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CCTV'], meta: { name: 'CCTV' } }
    /**
     * Find zero or one CCTV that matches the filter.
     * @param {CCTVFindUniqueArgs} args - Arguments to find a CCTV
     * @example
     * // Get one CCTV
     * const cCTV = await prisma.cCTV.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CCTVFindUniqueArgs>(args: SelectSubset<T, CCTVFindUniqueArgs<ExtArgs>>): Prisma__CCTVClient<$Result.GetResult<Prisma.$CCTVPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CCTV that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CCTVFindUniqueOrThrowArgs} args - Arguments to find a CCTV
     * @example
     * // Get one CCTV
     * const cCTV = await prisma.cCTV.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CCTVFindUniqueOrThrowArgs>(args: SelectSubset<T, CCTVFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CCTVClient<$Result.GetResult<Prisma.$CCTVPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CCTV that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CCTVFindFirstArgs} args - Arguments to find a CCTV
     * @example
     * // Get one CCTV
     * const cCTV = await prisma.cCTV.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CCTVFindFirstArgs>(args?: SelectSubset<T, CCTVFindFirstArgs<ExtArgs>>): Prisma__CCTVClient<$Result.GetResult<Prisma.$CCTVPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CCTV that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CCTVFindFirstOrThrowArgs} args - Arguments to find a CCTV
     * @example
     * // Get one CCTV
     * const cCTV = await prisma.cCTV.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CCTVFindFirstOrThrowArgs>(args?: SelectSubset<T, CCTVFindFirstOrThrowArgs<ExtArgs>>): Prisma__CCTVClient<$Result.GetResult<Prisma.$CCTVPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CCTVS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CCTVFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CCTVS
     * const cCTVS = await prisma.cCTV.findMany()
     * 
     * // Get first 10 CCTVS
     * const cCTVS = await prisma.cCTV.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cCTVWithIdOnly = await prisma.cCTV.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CCTVFindManyArgs>(args?: SelectSubset<T, CCTVFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CCTVPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CCTV.
     * @param {CCTVCreateArgs} args - Arguments to create a CCTV.
     * @example
     * // Create one CCTV
     * const CCTV = await prisma.cCTV.create({
     *   data: {
     *     // ... data to create a CCTV
     *   }
     * })
     * 
     */
    create<T extends CCTVCreateArgs>(args: SelectSubset<T, CCTVCreateArgs<ExtArgs>>): Prisma__CCTVClient<$Result.GetResult<Prisma.$CCTVPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CCTVS.
     * @param {CCTVCreateManyArgs} args - Arguments to create many CCTVS.
     * @example
     * // Create many CCTVS
     * const cCTV = await prisma.cCTV.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CCTVCreateManyArgs>(args?: SelectSubset<T, CCTVCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CCTVS and returns the data saved in the database.
     * @param {CCTVCreateManyAndReturnArgs} args - Arguments to create many CCTVS.
     * @example
     * // Create many CCTVS
     * const cCTV = await prisma.cCTV.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CCTVS and only return the `id`
     * const cCTVWithIdOnly = await prisma.cCTV.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CCTVCreateManyAndReturnArgs>(args?: SelectSubset<T, CCTVCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CCTVPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CCTV.
     * @param {CCTVDeleteArgs} args - Arguments to delete one CCTV.
     * @example
     * // Delete one CCTV
     * const CCTV = await prisma.cCTV.delete({
     *   where: {
     *     // ... filter to delete one CCTV
     *   }
     * })
     * 
     */
    delete<T extends CCTVDeleteArgs>(args: SelectSubset<T, CCTVDeleteArgs<ExtArgs>>): Prisma__CCTVClient<$Result.GetResult<Prisma.$CCTVPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CCTV.
     * @param {CCTVUpdateArgs} args - Arguments to update one CCTV.
     * @example
     * // Update one CCTV
     * const cCTV = await prisma.cCTV.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CCTVUpdateArgs>(args: SelectSubset<T, CCTVUpdateArgs<ExtArgs>>): Prisma__CCTVClient<$Result.GetResult<Prisma.$CCTVPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CCTVS.
     * @param {CCTVDeleteManyArgs} args - Arguments to filter CCTVS to delete.
     * @example
     * // Delete a few CCTVS
     * const { count } = await prisma.cCTV.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CCTVDeleteManyArgs>(args?: SelectSubset<T, CCTVDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CCTVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CCTVUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CCTVS
     * const cCTV = await prisma.cCTV.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CCTVUpdateManyArgs>(args: SelectSubset<T, CCTVUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CCTVS and returns the data updated in the database.
     * @param {CCTVUpdateManyAndReturnArgs} args - Arguments to update many CCTVS.
     * @example
     * // Update many CCTVS
     * const cCTV = await prisma.cCTV.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CCTVS and only return the `id`
     * const cCTVWithIdOnly = await prisma.cCTV.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CCTVUpdateManyAndReturnArgs>(args: SelectSubset<T, CCTVUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CCTVPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CCTV.
     * @param {CCTVUpsertArgs} args - Arguments to update or create a CCTV.
     * @example
     * // Update or create a CCTV
     * const cCTV = await prisma.cCTV.upsert({
     *   create: {
     *     // ... data to create a CCTV
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CCTV we want to update
     *   }
     * })
     */
    upsert<T extends CCTVUpsertArgs>(args: SelectSubset<T, CCTVUpsertArgs<ExtArgs>>): Prisma__CCTVClient<$Result.GetResult<Prisma.$CCTVPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CCTVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CCTVCountArgs} args - Arguments to filter CCTVS to count.
     * @example
     * // Count the number of CCTVS
     * const count = await prisma.cCTV.count({
     *   where: {
     *     // ... the filter for the CCTVS we want to count
     *   }
     * })
    **/
    count<T extends CCTVCountArgs>(
      args?: Subset<T, CCTVCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CCTVCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CCTV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CCTVAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CCTVAggregateArgs>(args: Subset<T, CCTVAggregateArgs>): Prisma.PrismaPromise<GetCCTVAggregateType<T>>

    /**
     * Group by CCTV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CCTVGroupByArgs} args - Group by arguments.
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
      T extends CCTVGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CCTVGroupByArgs['orderBy'] }
        : { orderBy?: CCTVGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CCTVGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCCTVGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CCTV model
   */
  readonly fields: CCTVFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CCTV.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CCTVClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends OwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OwnerDefaultArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reports<T extends CCTV$reportsArgs<ExtArgs> = {}>(args?: Subset<T, CCTV$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CCTV model
   */
  interface CCTVFieldRefs {
    readonly id: FieldRef<"CCTV", 'String'>
    readonly ownerId: FieldRef<"CCTV", 'String'>
    readonly name: FieldRef<"CCTV", 'String'>
    readonly location: FieldRef<"CCTV", 'String'>
    readonly description: FieldRef<"CCTV", 'String'>
    readonly IP: FieldRef<"CCTV", 'String'>
    readonly cameraType: FieldRef<"CCTV", 'String'>
    readonly streamUrl: FieldRef<"CCTV", 'String'>
    readonly status: FieldRef<"CCTV", 'CCTVStatus'>
    readonly createdAt: FieldRef<"CCTV", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CCTV findUnique
   */
  export type CCTVFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CCTV
     */
    select?: CCTVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CCTV
     */
    omit?: CCTVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CCTVInclude<ExtArgs> | null
    /**
     * Filter, which CCTV to fetch.
     */
    where: CCTVWhereUniqueInput
  }

  /**
   * CCTV findUniqueOrThrow
   */
  export type CCTVFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CCTV
     */
    select?: CCTVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CCTV
     */
    omit?: CCTVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CCTVInclude<ExtArgs> | null
    /**
     * Filter, which CCTV to fetch.
     */
    where: CCTVWhereUniqueInput
  }

  /**
   * CCTV findFirst
   */
  export type CCTVFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CCTV
     */
    select?: CCTVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CCTV
     */
    omit?: CCTVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CCTVInclude<ExtArgs> | null
    /**
     * Filter, which CCTV to fetch.
     */
    where?: CCTVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CCTVS to fetch.
     */
    orderBy?: CCTVOrderByWithRelationInput | CCTVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CCTVS.
     */
    cursor?: CCTVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CCTVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CCTVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CCTVS.
     */
    distinct?: CCTVScalarFieldEnum | CCTVScalarFieldEnum[]
  }

  /**
   * CCTV findFirstOrThrow
   */
  export type CCTVFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CCTV
     */
    select?: CCTVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CCTV
     */
    omit?: CCTVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CCTVInclude<ExtArgs> | null
    /**
     * Filter, which CCTV to fetch.
     */
    where?: CCTVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CCTVS to fetch.
     */
    orderBy?: CCTVOrderByWithRelationInput | CCTVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CCTVS.
     */
    cursor?: CCTVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CCTVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CCTVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CCTVS.
     */
    distinct?: CCTVScalarFieldEnum | CCTVScalarFieldEnum[]
  }

  /**
   * CCTV findMany
   */
  export type CCTVFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CCTV
     */
    select?: CCTVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CCTV
     */
    omit?: CCTVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CCTVInclude<ExtArgs> | null
    /**
     * Filter, which CCTVS to fetch.
     */
    where?: CCTVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CCTVS to fetch.
     */
    orderBy?: CCTVOrderByWithRelationInput | CCTVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CCTVS.
     */
    cursor?: CCTVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CCTVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CCTVS.
     */
    skip?: number
    distinct?: CCTVScalarFieldEnum | CCTVScalarFieldEnum[]
  }

  /**
   * CCTV create
   */
  export type CCTVCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CCTV
     */
    select?: CCTVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CCTV
     */
    omit?: CCTVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CCTVInclude<ExtArgs> | null
    /**
     * The data needed to create a CCTV.
     */
    data: XOR<CCTVCreateInput, CCTVUncheckedCreateInput>
  }

  /**
   * CCTV createMany
   */
  export type CCTVCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CCTVS.
     */
    data: CCTVCreateManyInput | CCTVCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CCTV createManyAndReturn
   */
  export type CCTVCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CCTV
     */
    select?: CCTVSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CCTV
     */
    omit?: CCTVOmit<ExtArgs> | null
    /**
     * The data used to create many CCTVS.
     */
    data: CCTVCreateManyInput | CCTVCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CCTVIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CCTV update
   */
  export type CCTVUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CCTV
     */
    select?: CCTVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CCTV
     */
    omit?: CCTVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CCTVInclude<ExtArgs> | null
    /**
     * The data needed to update a CCTV.
     */
    data: XOR<CCTVUpdateInput, CCTVUncheckedUpdateInput>
    /**
     * Choose, which CCTV to update.
     */
    where: CCTVWhereUniqueInput
  }

  /**
   * CCTV updateMany
   */
  export type CCTVUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CCTVS.
     */
    data: XOR<CCTVUpdateManyMutationInput, CCTVUncheckedUpdateManyInput>
    /**
     * Filter which CCTVS to update
     */
    where?: CCTVWhereInput
    /**
     * Limit how many CCTVS to update.
     */
    limit?: number
  }

  /**
   * CCTV updateManyAndReturn
   */
  export type CCTVUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CCTV
     */
    select?: CCTVSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CCTV
     */
    omit?: CCTVOmit<ExtArgs> | null
    /**
     * The data used to update CCTVS.
     */
    data: XOR<CCTVUpdateManyMutationInput, CCTVUncheckedUpdateManyInput>
    /**
     * Filter which CCTVS to update
     */
    where?: CCTVWhereInput
    /**
     * Limit how many CCTVS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CCTVIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CCTV upsert
   */
  export type CCTVUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CCTV
     */
    select?: CCTVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CCTV
     */
    omit?: CCTVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CCTVInclude<ExtArgs> | null
    /**
     * The filter to search for the CCTV to update in case it exists.
     */
    where: CCTVWhereUniqueInput
    /**
     * In case the CCTV found by the `where` argument doesn't exist, create a new CCTV with this data.
     */
    create: XOR<CCTVCreateInput, CCTVUncheckedCreateInput>
    /**
     * In case the CCTV was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CCTVUpdateInput, CCTVUncheckedUpdateInput>
  }

  /**
   * CCTV delete
   */
  export type CCTVDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CCTV
     */
    select?: CCTVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CCTV
     */
    omit?: CCTVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CCTVInclude<ExtArgs> | null
    /**
     * Filter which CCTV to delete.
     */
    where: CCTVWhereUniqueInput
  }

  /**
   * CCTV deleteMany
   */
  export type CCTVDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CCTVS to delete
     */
    where?: CCTVWhereInput
    /**
     * Limit how many CCTVS to delete.
     */
    limit?: number
  }

  /**
   * CCTV.reports
   */
  export type CCTV$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * CCTV without action
   */
  export type CCTVDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CCTV
     */
    select?: CCTVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CCTV
     */
    omit?: CCTVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CCTVInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    cctvId: string | null
    ownerId: string | null
    title: string | null
    description: string | null
    status: $Enums.ReportStatus | null
    location: string | null
    reportImage: string | null
    incidentType: $Enums.IncidentType | null
    createdAt: Date | null
    updatedAt: Date | null
    isAssigned: boolean | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    cctvId: string | null
    ownerId: string | null
    title: string | null
    description: string | null
    status: $Enums.ReportStatus | null
    location: string | null
    reportImage: string | null
    incidentType: $Enums.IncidentType | null
    createdAt: Date | null
    updatedAt: Date | null
    isAssigned: boolean | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    cctvId: number
    ownerId: number
    title: number
    description: number
    status: number
    location: number
    reportImage: number
    incidentType: number
    createdAt: number
    updatedAt: number
    isAssigned: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    cctvId?: true
    ownerId?: true
    title?: true
    description?: true
    status?: true
    location?: true
    reportImage?: true
    incidentType?: true
    createdAt?: true
    updatedAt?: true
    isAssigned?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    cctvId?: true
    ownerId?: true
    title?: true
    description?: true
    status?: true
    location?: true
    reportImage?: true
    incidentType?: true
    createdAt?: true
    updatedAt?: true
    isAssigned?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    cctvId?: true
    ownerId?: true
    title?: true
    description?: true
    status?: true
    location?: true
    reportImage?: true
    incidentType?: true
    createdAt?: true
    updatedAt?: true
    isAssigned?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    cctvId: string | null
    ownerId: string
    title: string | null
    description: string | null
    status: $Enums.ReportStatus | null
    location: string | null
    reportImage: string | null
    incidentType: $Enums.IncidentType | null
    createdAt: Date | null
    updatedAt: Date | null
    isAssigned: boolean | null
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cctvId?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    location?: boolean
    reportImage?: boolean
    incidentType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isAssigned?: boolean
    cctv?: boolean | Report$cctvArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    evidences?: boolean | Report$evidencesArgs<ExtArgs>
    assignments?: boolean | Report$assignmentsArgs<ExtArgs>
    notifications?: boolean | Report$notificationsArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cctvId?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    location?: boolean
    reportImage?: boolean
    incidentType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isAssigned?: boolean
    cctv?: boolean | Report$cctvArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cctvId?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    location?: boolean
    reportImage?: boolean
    incidentType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isAssigned?: boolean
    cctv?: boolean | Report$cctvArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    cctvId?: boolean
    ownerId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    location?: boolean
    reportImage?: boolean
    incidentType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isAssigned?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cctvId" | "ownerId" | "title" | "description" | "status" | "location" | "reportImage" | "incidentType" | "createdAt" | "updatedAt" | "isAssigned", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cctv?: boolean | Report$cctvArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
    evidences?: boolean | Report$evidencesArgs<ExtArgs>
    assignments?: boolean | Report$assignmentsArgs<ExtArgs>
    notifications?: boolean | Report$notificationsArgs<ExtArgs>
    _count?: boolean | ReportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cctv?: boolean | Report$cctvArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cctv?: boolean | Report$cctvArgs<ExtArgs>
    owner?: boolean | OwnerDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      cctv: Prisma.$CCTVPayload<ExtArgs> | null
      owner: Prisma.$OwnerPayload<ExtArgs>
      evidences: Prisma.$EvidencePayload<ExtArgs>[]
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cctvId: string | null
      ownerId: string
      title: string | null
      description: string | null
      status: $Enums.ReportStatus | null
      location: string | null
      reportImage: string | null
      incidentType: $Enums.IncidentType | null
      createdAt: Date | null
      updatedAt: Date | null
      isAssigned: boolean | null
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cctv<T extends Report$cctvArgs<ExtArgs> = {}>(args?: Subset<T, Report$cctvArgs<ExtArgs>>): Prisma__CCTVClient<$Result.GetResult<Prisma.$CCTVPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    owner<T extends OwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OwnerDefaultArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evidences<T extends Report$evidencesArgs<ExtArgs> = {}>(args?: Subset<T, Report$evidencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends Report$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Report$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Report$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Report$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly cctvId: FieldRef<"Report", 'String'>
    readonly ownerId: FieldRef<"Report", 'String'>
    readonly title: FieldRef<"Report", 'String'>
    readonly description: FieldRef<"Report", 'String'>
    readonly status: FieldRef<"Report", 'ReportStatus'>
    readonly location: FieldRef<"Report", 'String'>
    readonly reportImage: FieldRef<"Report", 'String'>
    readonly incidentType: FieldRef<"Report", 'IncidentType'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
    readonly updatedAt: FieldRef<"Report", 'DateTime'>
    readonly isAssigned: FieldRef<"Report", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report.cctv
   */
  export type Report$cctvArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CCTV
     */
    select?: CCTVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CCTV
     */
    omit?: CCTVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CCTVInclude<ExtArgs> | null
    where?: CCTVWhereInput
  }

  /**
   * Report.evidences
   */
  export type Report$evidencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    where?: EvidenceWhereInput
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    cursor?: EvidenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }

  /**
   * Report.assignments
   */
  export type Report$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Report.notifications
   */
  export type Report$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model Evidence
   */

  export type AggregateEvidence = {
    _count: EvidenceCountAggregateOutputType | null
    _min: EvidenceMinAggregateOutputType | null
    _max: EvidenceMaxAggregateOutputType | null
  }

  export type EvidenceMinAggregateOutputType = {
    id: string | null
    reportId: string | null
    fileUrl: string | null
    type: string | null
    createdAt: Date | null
  }

  export type EvidenceMaxAggregateOutputType = {
    id: string | null
    reportId: string | null
    fileUrl: string | null
    type: string | null
    createdAt: Date | null
  }

  export type EvidenceCountAggregateOutputType = {
    id: number
    reportId: number
    fileUrl: number
    type: number
    createdAt: number
    _all: number
  }


  export type EvidenceMinAggregateInputType = {
    id?: true
    reportId?: true
    fileUrl?: true
    type?: true
    createdAt?: true
  }

  export type EvidenceMaxAggregateInputType = {
    id?: true
    reportId?: true
    fileUrl?: true
    type?: true
    createdAt?: true
  }

  export type EvidenceCountAggregateInputType = {
    id?: true
    reportId?: true
    fileUrl?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type EvidenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evidence to aggregate.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evidences
    **/
    _count?: true | EvidenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvidenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvidenceMaxAggregateInputType
  }

  export type GetEvidenceAggregateType<T extends EvidenceAggregateArgs> = {
        [P in keyof T & keyof AggregateEvidence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvidence[P]>
      : GetScalarType<T[P], AggregateEvidence[P]>
  }




  export type EvidenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvidenceWhereInput
    orderBy?: EvidenceOrderByWithAggregationInput | EvidenceOrderByWithAggregationInput[]
    by: EvidenceScalarFieldEnum[] | EvidenceScalarFieldEnum
    having?: EvidenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvidenceCountAggregateInputType | true
    _min?: EvidenceMinAggregateInputType
    _max?: EvidenceMaxAggregateInputType
  }

  export type EvidenceGroupByOutputType = {
    id: string
    reportId: string
    fileUrl: string | null
    type: string | null
    createdAt: Date | null
    _count: EvidenceCountAggregateOutputType | null
    _min: EvidenceMinAggregateOutputType | null
    _max: EvidenceMaxAggregateOutputType | null
  }

  type GetEvidenceGroupByPayload<T extends EvidenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvidenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvidenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvidenceGroupByOutputType[P]>
            : GetScalarType<T[P], EvidenceGroupByOutputType[P]>
        }
      >
    >


  export type EvidenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    fileUrl?: boolean
    type?: boolean
    createdAt?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evidence"]>

  export type EvidenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    fileUrl?: boolean
    type?: boolean
    createdAt?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evidence"]>

  export type EvidenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    fileUrl?: boolean
    type?: boolean
    createdAt?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evidence"]>

  export type EvidenceSelectScalar = {
    id?: boolean
    reportId?: boolean
    fileUrl?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type EvidenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reportId" | "fileUrl" | "type" | "createdAt", ExtArgs["result"]["evidence"]>
  export type EvidenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }
  export type EvidenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }
  export type EvidenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
  }

  export type $EvidencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evidence"
    objects: {
      report: Prisma.$ReportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reportId: string
      fileUrl: string | null
      type: string | null
      createdAt: Date | null
    }, ExtArgs["result"]["evidence"]>
    composites: {}
  }

  type EvidenceGetPayload<S extends boolean | null | undefined | EvidenceDefaultArgs> = $Result.GetResult<Prisma.$EvidencePayload, S>

  type EvidenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvidenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvidenceCountAggregateInputType | true
    }

  export interface EvidenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evidence'], meta: { name: 'Evidence' } }
    /**
     * Find zero or one Evidence that matches the filter.
     * @param {EvidenceFindUniqueArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvidenceFindUniqueArgs>(args: SelectSubset<T, EvidenceFindUniqueArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evidence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvidenceFindUniqueOrThrowArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvidenceFindUniqueOrThrowArgs>(args: SelectSubset<T, EvidenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evidence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceFindFirstArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvidenceFindFirstArgs>(args?: SelectSubset<T, EvidenceFindFirstArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evidence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceFindFirstOrThrowArgs} args - Arguments to find a Evidence
     * @example
     * // Get one Evidence
     * const evidence = await prisma.evidence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvidenceFindFirstOrThrowArgs>(args?: SelectSubset<T, EvidenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evidences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evidences
     * const evidences = await prisma.evidence.findMany()
     * 
     * // Get first 10 Evidences
     * const evidences = await prisma.evidence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evidenceWithIdOnly = await prisma.evidence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvidenceFindManyArgs>(args?: SelectSubset<T, EvidenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evidence.
     * @param {EvidenceCreateArgs} args - Arguments to create a Evidence.
     * @example
     * // Create one Evidence
     * const Evidence = await prisma.evidence.create({
     *   data: {
     *     // ... data to create a Evidence
     *   }
     * })
     * 
     */
    create<T extends EvidenceCreateArgs>(args: SelectSubset<T, EvidenceCreateArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evidences.
     * @param {EvidenceCreateManyArgs} args - Arguments to create many Evidences.
     * @example
     * // Create many Evidences
     * const evidence = await prisma.evidence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvidenceCreateManyArgs>(args?: SelectSubset<T, EvidenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Evidences and returns the data saved in the database.
     * @param {EvidenceCreateManyAndReturnArgs} args - Arguments to create many Evidences.
     * @example
     * // Create many Evidences
     * const evidence = await prisma.evidence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Evidences and only return the `id`
     * const evidenceWithIdOnly = await prisma.evidence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvidenceCreateManyAndReturnArgs>(args?: SelectSubset<T, EvidenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evidence.
     * @param {EvidenceDeleteArgs} args - Arguments to delete one Evidence.
     * @example
     * // Delete one Evidence
     * const Evidence = await prisma.evidence.delete({
     *   where: {
     *     // ... filter to delete one Evidence
     *   }
     * })
     * 
     */
    delete<T extends EvidenceDeleteArgs>(args: SelectSubset<T, EvidenceDeleteArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evidence.
     * @param {EvidenceUpdateArgs} args - Arguments to update one Evidence.
     * @example
     * // Update one Evidence
     * const evidence = await prisma.evidence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvidenceUpdateArgs>(args: SelectSubset<T, EvidenceUpdateArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evidences.
     * @param {EvidenceDeleteManyArgs} args - Arguments to filter Evidences to delete.
     * @example
     * // Delete a few Evidences
     * const { count } = await prisma.evidence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvidenceDeleteManyArgs>(args?: SelectSubset<T, EvidenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evidences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evidences
     * const evidence = await prisma.evidence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvidenceUpdateManyArgs>(args: SelectSubset<T, EvidenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evidences and returns the data updated in the database.
     * @param {EvidenceUpdateManyAndReturnArgs} args - Arguments to update many Evidences.
     * @example
     * // Update many Evidences
     * const evidence = await prisma.evidence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Evidences and only return the `id`
     * const evidenceWithIdOnly = await prisma.evidence.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EvidenceUpdateManyAndReturnArgs>(args: SelectSubset<T, EvidenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evidence.
     * @param {EvidenceUpsertArgs} args - Arguments to update or create a Evidence.
     * @example
     * // Update or create a Evidence
     * const evidence = await prisma.evidence.upsert({
     *   create: {
     *     // ... data to create a Evidence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evidence we want to update
     *   }
     * })
     */
    upsert<T extends EvidenceUpsertArgs>(args: SelectSubset<T, EvidenceUpsertArgs<ExtArgs>>): Prisma__EvidenceClient<$Result.GetResult<Prisma.$EvidencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evidences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceCountArgs} args - Arguments to filter Evidences to count.
     * @example
     * // Count the number of Evidences
     * const count = await prisma.evidence.count({
     *   where: {
     *     // ... the filter for the Evidences we want to count
     *   }
     * })
    **/
    count<T extends EvidenceCountArgs>(
      args?: Subset<T, EvidenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvidenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evidence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EvidenceAggregateArgs>(args: Subset<T, EvidenceAggregateArgs>): Prisma.PrismaPromise<GetEvidenceAggregateType<T>>

    /**
     * Group by Evidence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvidenceGroupByArgs} args - Group by arguments.
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
      T extends EvidenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvidenceGroupByArgs['orderBy'] }
        : { orderBy?: EvidenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EvidenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvidenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evidence model
   */
  readonly fields: EvidenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evidence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvidenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReportDefaultArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Evidence model
   */
  interface EvidenceFieldRefs {
    readonly id: FieldRef<"Evidence", 'String'>
    readonly reportId: FieldRef<"Evidence", 'String'>
    readonly fileUrl: FieldRef<"Evidence", 'String'>
    readonly type: FieldRef<"Evidence", 'String'>
    readonly createdAt: FieldRef<"Evidence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Evidence findUnique
   */
  export type EvidenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where: EvidenceWhereUniqueInput
  }

  /**
   * Evidence findUniqueOrThrow
   */
  export type EvidenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where: EvidenceWhereUniqueInput
  }

  /**
   * Evidence findFirst
   */
  export type EvidenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evidences.
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evidences.
     */
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }

  /**
   * Evidence findFirstOrThrow
   */
  export type EvidenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidence to fetch.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evidences.
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evidences.
     */
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }

  /**
   * Evidence findMany
   */
  export type EvidenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter, which Evidences to fetch.
     */
    where?: EvidenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evidences to fetch.
     */
    orderBy?: EvidenceOrderByWithRelationInput | EvidenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evidences.
     */
    cursor?: EvidenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evidences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evidences.
     */
    skip?: number
    distinct?: EvidenceScalarFieldEnum | EvidenceScalarFieldEnum[]
  }

  /**
   * Evidence create
   */
  export type EvidenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Evidence.
     */
    data: XOR<EvidenceCreateInput, EvidenceUncheckedCreateInput>
  }

  /**
   * Evidence createMany
   */
  export type EvidenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evidences.
     */
    data: EvidenceCreateManyInput | EvidenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evidence createManyAndReturn
   */
  export type EvidenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * The data used to create many Evidences.
     */
    data: EvidenceCreateManyInput | EvidenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evidence update
   */
  export type EvidenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Evidence.
     */
    data: XOR<EvidenceUpdateInput, EvidenceUncheckedUpdateInput>
    /**
     * Choose, which Evidence to update.
     */
    where: EvidenceWhereUniqueInput
  }

  /**
   * Evidence updateMany
   */
  export type EvidenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evidences.
     */
    data: XOR<EvidenceUpdateManyMutationInput, EvidenceUncheckedUpdateManyInput>
    /**
     * Filter which Evidences to update
     */
    where?: EvidenceWhereInput
    /**
     * Limit how many Evidences to update.
     */
    limit?: number
  }

  /**
   * Evidence updateManyAndReturn
   */
  export type EvidenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * The data used to update Evidences.
     */
    data: XOR<EvidenceUpdateManyMutationInput, EvidenceUncheckedUpdateManyInput>
    /**
     * Filter which Evidences to update
     */
    where?: EvidenceWhereInput
    /**
     * Limit how many Evidences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evidence upsert
   */
  export type EvidenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Evidence to update in case it exists.
     */
    where: EvidenceWhereUniqueInput
    /**
     * In case the Evidence found by the `where` argument doesn't exist, create a new Evidence with this data.
     */
    create: XOR<EvidenceCreateInput, EvidenceUncheckedCreateInput>
    /**
     * In case the Evidence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvidenceUpdateInput, EvidenceUncheckedUpdateInput>
  }

  /**
   * Evidence delete
   */
  export type EvidenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
    /**
     * Filter which Evidence to delete.
     */
    where: EvidenceWhereUniqueInput
  }

  /**
   * Evidence deleteMany
   */
  export type EvidenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evidences to delete
     */
    where?: EvidenceWhereInput
    /**
     * Limit how many Evidences to delete.
     */
    limit?: number
  }

  /**
   * Evidence without action
   */
  export type EvidenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evidence
     */
    select?: EvidenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evidence
     */
    omit?: EvidenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvidenceInclude<ExtArgs> | null
  }


  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: string | null
    reportId: string | null
    officerId: string | null
    assignedBy: string | null
    assignedAt: Date | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: string | null
    reportId: string | null
    officerId: string | null
    assignedBy: string | null
    assignedAt: Date | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    reportId: number
    officerId: number
    assignedBy: number
    assignedAt: number
    _all: number
  }


  export type AssignmentMinAggregateInputType = {
    id?: true
    reportId?: true
    officerId?: true
    assignedBy?: true
    assignedAt?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    reportId?: true
    officerId?: true
    assignedBy?: true
    assignedAt?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    reportId?: true
    officerId?: true
    assignedBy?: true
    assignedAt?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    id: string
    reportId: string
    officerId: string
    assignedBy: string | null
    assignedAt: Date | null
    _count: AssignmentCountAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    officerId?: boolean
    assignedBy?: boolean
    assignedAt?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
    officer?: boolean | OfficerDefaultArgs<ExtArgs>
    assignedByPolice?: boolean | Assignment$assignedByPoliceArgs<ExtArgs>
    trackings?: boolean | Assignment$trackingsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    officerId?: boolean
    assignedBy?: boolean
    assignedAt?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
    officer?: boolean | OfficerDefaultArgs<ExtArgs>
    assignedByPolice?: boolean | Assignment$assignedByPoliceArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reportId?: boolean
    officerId?: boolean
    assignedBy?: boolean
    assignedAt?: boolean
    report?: boolean | ReportDefaultArgs<ExtArgs>
    officer?: boolean | OfficerDefaultArgs<ExtArgs>
    assignedByPolice?: boolean | Assignment$assignedByPoliceArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectScalar = {
    id?: boolean
    reportId?: boolean
    officerId?: boolean
    assignedBy?: boolean
    assignedAt?: boolean
  }

  export type AssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reportId" | "officerId" | "assignedBy" | "assignedAt", ExtArgs["result"]["assignment"]>
  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
    officer?: boolean | OfficerDefaultArgs<ExtArgs>
    assignedByPolice?: boolean | Assignment$assignedByPoliceArgs<ExtArgs>
    trackings?: boolean | Assignment$trackingsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
    officer?: boolean | OfficerDefaultArgs<ExtArgs>
    assignedByPolice?: boolean | Assignment$assignedByPoliceArgs<ExtArgs>
  }
  export type AssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportDefaultArgs<ExtArgs>
    officer?: boolean | OfficerDefaultArgs<ExtArgs>
    assignedByPolice?: boolean | Assignment$assignedByPoliceArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      report: Prisma.$ReportPayload<ExtArgs>
      officer: Prisma.$OfficerPayload<ExtArgs>
      assignedByPolice: Prisma.$PolicePayload<ExtArgs> | null
      trackings: Prisma.$TrackingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reportId: string
      officerId: string
      assignedBy: string | null
      assignedAt: Date | null
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignments and returns the data saved in the database.
     * @param {AssignmentCreateManyAndReturnArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments and returns the data updated in the database.
     * @param {AssignmentUpdateManyAndReturnArgs} args - Arguments to update many Assignments.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
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
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReportDefaultArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    officer<T extends OfficerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfficerDefaultArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedByPolice<T extends Assignment$assignedByPoliceArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$assignedByPoliceArgs<ExtArgs>>): Prisma__PoliceClient<$Result.GetResult<Prisma.$PolicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    trackings<T extends Assignment$trackingsArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$trackingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Assignment model
   */
  interface AssignmentFieldRefs {
    readonly id: FieldRef<"Assignment", 'String'>
    readonly reportId: FieldRef<"Assignment", 'String'>
    readonly officerId: FieldRef<"Assignment", 'String'>
    readonly assignedBy: FieldRef<"Assignment", 'String'>
    readonly assignedAt: FieldRef<"Assignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignment createManyAndReturn
   */
  export type AssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment updateManyAndReturn
   */
  export type AssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to delete.
     */
    limit?: number
  }

  /**
   * Assignment.assignedByPolice
   */
  export type Assignment$assignedByPoliceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Police
     */
    select?: PoliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Police
     */
    omit?: PoliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceInclude<ExtArgs> | null
    where?: PoliceWhereInput
  }

  /**
   * Assignment.trackings
   */
  export type Assignment$trackingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracking
     */
    select?: TrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracking
     */
    omit?: TrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingInclude<ExtArgs> | null
    where?: TrackingWhereInput
    orderBy?: TrackingOrderByWithRelationInput | TrackingOrderByWithRelationInput[]
    cursor?: TrackingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackingScalarFieldEnum | TrackingScalarFieldEnum[]
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Tracking
   */

  export type AggregateTracking = {
    _count: TrackingCountAggregateOutputType | null
    _avg: TrackingAvgAggregateOutputType | null
    _sum: TrackingSumAggregateOutputType | null
    _min: TrackingMinAggregateOutputType | null
    _max: TrackingMaxAggregateOutputType | null
  }

  export type TrackingAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    distance: number | null
  }

  export type TrackingSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    distance: number | null
  }

  export type TrackingMinAggregateOutputType = {
    id: string | null
    assignmentId: string | null
    officerId: string | null
    latitude: number | null
    longitude: number | null
    timestamp: Date | null
    distance: number | null
    estimatedTime: string | null
    status: $Enums.TrackingStatus | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrackingMaxAggregateOutputType = {
    id: string | null
    assignmentId: string | null
    officerId: string | null
    latitude: number | null
    longitude: number | null
    timestamp: Date | null
    distance: number | null
    estimatedTime: string | null
    status: $Enums.TrackingStatus | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrackingCountAggregateOutputType = {
    id: number
    assignmentId: number
    officerId: number
    latitude: number
    longitude: number
    timestamp: number
    distance: number
    estimatedTime: number
    status: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TrackingAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    distance?: true
  }

  export type TrackingSumAggregateInputType = {
    latitude?: true
    longitude?: true
    distance?: true
  }

  export type TrackingMinAggregateInputType = {
    id?: true
    assignmentId?: true
    officerId?: true
    latitude?: true
    longitude?: true
    timestamp?: true
    distance?: true
    estimatedTime?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrackingMaxAggregateInputType = {
    id?: true
    assignmentId?: true
    officerId?: true
    latitude?: true
    longitude?: true
    timestamp?: true
    distance?: true
    estimatedTime?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrackingCountAggregateInputType = {
    id?: true
    assignmentId?: true
    officerId?: true
    latitude?: true
    longitude?: true
    timestamp?: true
    distance?: true
    estimatedTime?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrackingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tracking to aggregate.
     */
    where?: TrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trackings to fetch.
     */
    orderBy?: TrackingOrderByWithRelationInput | TrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trackings
    **/
    _count?: true | TrackingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackingMaxAggregateInputType
  }

  export type GetTrackingAggregateType<T extends TrackingAggregateArgs> = {
        [P in keyof T & keyof AggregateTracking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTracking[P]>
      : GetScalarType<T[P], AggregateTracking[P]>
  }




  export type TrackingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackingWhereInput
    orderBy?: TrackingOrderByWithAggregationInput | TrackingOrderByWithAggregationInput[]
    by: TrackingScalarFieldEnum[] | TrackingScalarFieldEnum
    having?: TrackingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackingCountAggregateInputType | true
    _avg?: TrackingAvgAggregateInputType
    _sum?: TrackingSumAggregateInputType
    _min?: TrackingMinAggregateInputType
    _max?: TrackingMaxAggregateInputType
  }

  export type TrackingGroupByOutputType = {
    id: string
    assignmentId: string
    officerId: string
    latitude: number | null
    longitude: number | null
    timestamp: Date | null
    distance: number | null
    estimatedTime: string | null
    status: $Enums.TrackingStatus | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: TrackingCountAggregateOutputType | null
    _avg: TrackingAvgAggregateOutputType | null
    _sum: TrackingSumAggregateOutputType | null
    _min: TrackingMinAggregateOutputType | null
    _max: TrackingMaxAggregateOutputType | null
  }

  type GetTrackingGroupByPayload<T extends TrackingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackingGroupByOutputType[P]>
            : GetScalarType<T[P], TrackingGroupByOutputType[P]>
        }
      >
    >


  export type TrackingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    officerId?: boolean
    latitude?: boolean
    longitude?: boolean
    timestamp?: boolean
    distance?: boolean
    estimatedTime?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    officer?: boolean | OfficerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tracking"]>

  export type TrackingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    officerId?: boolean
    latitude?: boolean
    longitude?: boolean
    timestamp?: boolean
    distance?: boolean
    estimatedTime?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    officer?: boolean | OfficerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tracking"]>

  export type TrackingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    officerId?: boolean
    latitude?: boolean
    longitude?: boolean
    timestamp?: boolean
    distance?: boolean
    estimatedTime?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    officer?: boolean | OfficerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tracking"]>

  export type TrackingSelectScalar = {
    id?: boolean
    assignmentId?: boolean
    officerId?: boolean
    latitude?: boolean
    longitude?: boolean
    timestamp?: boolean
    distance?: boolean
    estimatedTime?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TrackingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignmentId" | "officerId" | "latitude" | "longitude" | "timestamp" | "distance" | "estimatedTime" | "status" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["tracking"]>
  export type TrackingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    officer?: boolean | OfficerDefaultArgs<ExtArgs>
  }
  export type TrackingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    officer?: boolean | OfficerDefaultArgs<ExtArgs>
  }
  export type TrackingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    officer?: boolean | OfficerDefaultArgs<ExtArgs>
  }

  export type $TrackingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tracking"
    objects: {
      assignment: Prisma.$AssignmentPayload<ExtArgs>
      officer: Prisma.$OfficerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assignmentId: string
      officerId: string
      latitude: number | null
      longitude: number | null
      timestamp: Date | null
      distance: number | null
      estimatedTime: string | null
      status: $Enums.TrackingStatus | null
      description: string | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["tracking"]>
    composites: {}
  }

  type TrackingGetPayload<S extends boolean | null | undefined | TrackingDefaultArgs> = $Result.GetResult<Prisma.$TrackingPayload, S>

  type TrackingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackingCountAggregateInputType | true
    }

  export interface TrackingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tracking'], meta: { name: 'Tracking' } }
    /**
     * Find zero or one Tracking that matches the filter.
     * @param {TrackingFindUniqueArgs} args - Arguments to find a Tracking
     * @example
     * // Get one Tracking
     * const tracking = await prisma.tracking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackingFindUniqueArgs>(args: SelectSubset<T, TrackingFindUniqueArgs<ExtArgs>>): Prisma__TrackingClient<$Result.GetResult<Prisma.$TrackingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tracking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackingFindUniqueOrThrowArgs} args - Arguments to find a Tracking
     * @example
     * // Get one Tracking
     * const tracking = await prisma.tracking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackingFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackingClient<$Result.GetResult<Prisma.$TrackingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tracking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingFindFirstArgs} args - Arguments to find a Tracking
     * @example
     * // Get one Tracking
     * const tracking = await prisma.tracking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackingFindFirstArgs>(args?: SelectSubset<T, TrackingFindFirstArgs<ExtArgs>>): Prisma__TrackingClient<$Result.GetResult<Prisma.$TrackingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tracking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingFindFirstOrThrowArgs} args - Arguments to find a Tracking
     * @example
     * // Get one Tracking
     * const tracking = await prisma.tracking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackingFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackingFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackingClient<$Result.GetResult<Prisma.$TrackingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trackings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trackings
     * const trackings = await prisma.tracking.findMany()
     * 
     * // Get first 10 Trackings
     * const trackings = await prisma.tracking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackingWithIdOnly = await prisma.tracking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackingFindManyArgs>(args?: SelectSubset<T, TrackingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tracking.
     * @param {TrackingCreateArgs} args - Arguments to create a Tracking.
     * @example
     * // Create one Tracking
     * const Tracking = await prisma.tracking.create({
     *   data: {
     *     // ... data to create a Tracking
     *   }
     * })
     * 
     */
    create<T extends TrackingCreateArgs>(args: SelectSubset<T, TrackingCreateArgs<ExtArgs>>): Prisma__TrackingClient<$Result.GetResult<Prisma.$TrackingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trackings.
     * @param {TrackingCreateManyArgs} args - Arguments to create many Trackings.
     * @example
     * // Create many Trackings
     * const tracking = await prisma.tracking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackingCreateManyArgs>(args?: SelectSubset<T, TrackingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trackings and returns the data saved in the database.
     * @param {TrackingCreateManyAndReturnArgs} args - Arguments to create many Trackings.
     * @example
     * // Create many Trackings
     * const tracking = await prisma.tracking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trackings and only return the `id`
     * const trackingWithIdOnly = await prisma.tracking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackingCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tracking.
     * @param {TrackingDeleteArgs} args - Arguments to delete one Tracking.
     * @example
     * // Delete one Tracking
     * const Tracking = await prisma.tracking.delete({
     *   where: {
     *     // ... filter to delete one Tracking
     *   }
     * })
     * 
     */
    delete<T extends TrackingDeleteArgs>(args: SelectSubset<T, TrackingDeleteArgs<ExtArgs>>): Prisma__TrackingClient<$Result.GetResult<Prisma.$TrackingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tracking.
     * @param {TrackingUpdateArgs} args - Arguments to update one Tracking.
     * @example
     * // Update one Tracking
     * const tracking = await prisma.tracking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackingUpdateArgs>(args: SelectSubset<T, TrackingUpdateArgs<ExtArgs>>): Prisma__TrackingClient<$Result.GetResult<Prisma.$TrackingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trackings.
     * @param {TrackingDeleteManyArgs} args - Arguments to filter Trackings to delete.
     * @example
     * // Delete a few Trackings
     * const { count } = await prisma.tracking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackingDeleteManyArgs>(args?: SelectSubset<T, TrackingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trackings
     * const tracking = await prisma.tracking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackingUpdateManyArgs>(args: SelectSubset<T, TrackingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trackings and returns the data updated in the database.
     * @param {TrackingUpdateManyAndReturnArgs} args - Arguments to update many Trackings.
     * @example
     * // Update many Trackings
     * const tracking = await prisma.tracking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trackings and only return the `id`
     * const trackingWithIdOnly = await prisma.tracking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrackingUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tracking.
     * @param {TrackingUpsertArgs} args - Arguments to update or create a Tracking.
     * @example
     * // Update or create a Tracking
     * const tracking = await prisma.tracking.upsert({
     *   create: {
     *     // ... data to create a Tracking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tracking we want to update
     *   }
     * })
     */
    upsert<T extends TrackingUpsertArgs>(args: SelectSubset<T, TrackingUpsertArgs<ExtArgs>>): Prisma__TrackingClient<$Result.GetResult<Prisma.$TrackingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingCountArgs} args - Arguments to filter Trackings to count.
     * @example
     * // Count the number of Trackings
     * const count = await prisma.tracking.count({
     *   where: {
     *     // ... the filter for the Trackings we want to count
     *   }
     * })
    **/
    count<T extends TrackingCountArgs>(
      args?: Subset<T, TrackingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackingAggregateArgs>(args: Subset<T, TrackingAggregateArgs>): Prisma.PrismaPromise<GetTrackingAggregateType<T>>

    /**
     * Group by Tracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingGroupByArgs} args - Group by arguments.
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
      T extends TrackingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackingGroupByArgs['orderBy'] }
        : { orderBy?: TrackingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tracking model
   */
  readonly fields: TrackingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tracking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends AssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentDefaultArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    officer<T extends OfficerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OfficerDefaultArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tracking model
   */
  interface TrackingFieldRefs {
    readonly id: FieldRef<"Tracking", 'String'>
    readonly assignmentId: FieldRef<"Tracking", 'String'>
    readonly officerId: FieldRef<"Tracking", 'String'>
    readonly latitude: FieldRef<"Tracking", 'Float'>
    readonly longitude: FieldRef<"Tracking", 'Float'>
    readonly timestamp: FieldRef<"Tracking", 'DateTime'>
    readonly distance: FieldRef<"Tracking", 'Float'>
    readonly estimatedTime: FieldRef<"Tracking", 'String'>
    readonly status: FieldRef<"Tracking", 'TrackingStatus'>
    readonly description: FieldRef<"Tracking", 'String'>
    readonly createdAt: FieldRef<"Tracking", 'DateTime'>
    readonly updatedAt: FieldRef<"Tracking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tracking findUnique
   */
  export type TrackingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracking
     */
    select?: TrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracking
     */
    omit?: TrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingInclude<ExtArgs> | null
    /**
     * Filter, which Tracking to fetch.
     */
    where: TrackingWhereUniqueInput
  }

  /**
   * Tracking findUniqueOrThrow
   */
  export type TrackingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracking
     */
    select?: TrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracking
     */
    omit?: TrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingInclude<ExtArgs> | null
    /**
     * Filter, which Tracking to fetch.
     */
    where: TrackingWhereUniqueInput
  }

  /**
   * Tracking findFirst
   */
  export type TrackingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracking
     */
    select?: TrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracking
     */
    omit?: TrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingInclude<ExtArgs> | null
    /**
     * Filter, which Tracking to fetch.
     */
    where?: TrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trackings to fetch.
     */
    orderBy?: TrackingOrderByWithRelationInput | TrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trackings.
     */
    cursor?: TrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trackings.
     */
    distinct?: TrackingScalarFieldEnum | TrackingScalarFieldEnum[]
  }

  /**
   * Tracking findFirstOrThrow
   */
  export type TrackingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracking
     */
    select?: TrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracking
     */
    omit?: TrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingInclude<ExtArgs> | null
    /**
     * Filter, which Tracking to fetch.
     */
    where?: TrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trackings to fetch.
     */
    orderBy?: TrackingOrderByWithRelationInput | TrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trackings.
     */
    cursor?: TrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trackings.
     */
    distinct?: TrackingScalarFieldEnum | TrackingScalarFieldEnum[]
  }

  /**
   * Tracking findMany
   */
  export type TrackingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracking
     */
    select?: TrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracking
     */
    omit?: TrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingInclude<ExtArgs> | null
    /**
     * Filter, which Trackings to fetch.
     */
    where?: TrackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trackings to fetch.
     */
    orderBy?: TrackingOrderByWithRelationInput | TrackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trackings.
     */
    cursor?: TrackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trackings.
     */
    skip?: number
    distinct?: TrackingScalarFieldEnum | TrackingScalarFieldEnum[]
  }

  /**
   * Tracking create
   */
  export type TrackingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracking
     */
    select?: TrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracking
     */
    omit?: TrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingInclude<ExtArgs> | null
    /**
     * The data needed to create a Tracking.
     */
    data: XOR<TrackingCreateInput, TrackingUncheckedCreateInput>
  }

  /**
   * Tracking createMany
   */
  export type TrackingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trackings.
     */
    data: TrackingCreateManyInput | TrackingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tracking createManyAndReturn
   */
  export type TrackingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracking
     */
    select?: TrackingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tracking
     */
    omit?: TrackingOmit<ExtArgs> | null
    /**
     * The data used to create many Trackings.
     */
    data: TrackingCreateManyInput | TrackingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tracking update
   */
  export type TrackingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracking
     */
    select?: TrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracking
     */
    omit?: TrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingInclude<ExtArgs> | null
    /**
     * The data needed to update a Tracking.
     */
    data: XOR<TrackingUpdateInput, TrackingUncheckedUpdateInput>
    /**
     * Choose, which Tracking to update.
     */
    where: TrackingWhereUniqueInput
  }

  /**
   * Tracking updateMany
   */
  export type TrackingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trackings.
     */
    data: XOR<TrackingUpdateManyMutationInput, TrackingUncheckedUpdateManyInput>
    /**
     * Filter which Trackings to update
     */
    where?: TrackingWhereInput
    /**
     * Limit how many Trackings to update.
     */
    limit?: number
  }

  /**
   * Tracking updateManyAndReturn
   */
  export type TrackingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracking
     */
    select?: TrackingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tracking
     */
    omit?: TrackingOmit<ExtArgs> | null
    /**
     * The data used to update Trackings.
     */
    data: XOR<TrackingUpdateManyMutationInput, TrackingUncheckedUpdateManyInput>
    /**
     * Filter which Trackings to update
     */
    where?: TrackingWhereInput
    /**
     * Limit how many Trackings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tracking upsert
   */
  export type TrackingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracking
     */
    select?: TrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracking
     */
    omit?: TrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingInclude<ExtArgs> | null
    /**
     * The filter to search for the Tracking to update in case it exists.
     */
    where: TrackingWhereUniqueInput
    /**
     * In case the Tracking found by the `where` argument doesn't exist, create a new Tracking with this data.
     */
    create: XOR<TrackingCreateInput, TrackingUncheckedCreateInput>
    /**
     * In case the Tracking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackingUpdateInput, TrackingUncheckedUpdateInput>
  }

  /**
   * Tracking delete
   */
  export type TrackingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracking
     */
    select?: TrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracking
     */
    omit?: TrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingInclude<ExtArgs> | null
    /**
     * Filter which Tracking to delete.
     */
    where: TrackingWhereUniqueInput
  }

  /**
   * Tracking deleteMany
   */
  export type TrackingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trackings to delete
     */
    where?: TrackingWhereInput
    /**
     * Limit how many Trackings to delete.
     */
    limit?: number
  }

  /**
   * Tracking without action
   */
  export type TrackingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracking
     */
    select?: TrackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tracking
     */
    omit?: TrackingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    officerId: string | null
    policeId: string | null
    title: string | null
    message: string | null
    type: $Enums.NotificationType | null
    status: $Enums.NotificationStatus | null
    image: string | null
    reportId: string | null
    createdAt: Date | null
    isRead: boolean | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    officerId: string | null
    policeId: string | null
    title: string | null
    message: string | null
    type: $Enums.NotificationType | null
    status: $Enums.NotificationStatus | null
    image: string | null
    reportId: string | null
    createdAt: Date | null
    isRead: boolean | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    ownerId: number
    officerId: number
    policeId: number
    title: number
    message: number
    type: number
    status: number
    image: number
    reportId: number
    createdAt: number
    isRead: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    ownerId?: true
    officerId?: true
    policeId?: true
    title?: true
    message?: true
    type?: true
    status?: true
    image?: true
    reportId?: true
    createdAt?: true
    isRead?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    ownerId?: true
    officerId?: true
    policeId?: true
    title?: true
    message?: true
    type?: true
    status?: true
    image?: true
    reportId?: true
    createdAt?: true
    isRead?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    ownerId?: true
    officerId?: true
    policeId?: true
    title?: true
    message?: true
    type?: true
    status?: true
    image?: true
    reportId?: true
    createdAt?: true
    isRead?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    ownerId: string | null
    officerId: string | null
    policeId: string | null
    title: string | null
    message: string | null
    type: $Enums.NotificationType | null
    status: $Enums.NotificationStatus | null
    image: string | null
    reportId: string | null
    createdAt: Date | null
    isRead: boolean | null
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    officerId?: boolean
    policeId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    status?: boolean
    image?: boolean
    reportId?: boolean
    createdAt?: boolean
    isRead?: boolean
    owner?: boolean | Notification$ownerArgs<ExtArgs>
    officer?: boolean | Notification$officerArgs<ExtArgs>
    police?: boolean | Notification$policeArgs<ExtArgs>
    report?: boolean | Notification$reportArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    officerId?: boolean
    policeId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    status?: boolean
    image?: boolean
    reportId?: boolean
    createdAt?: boolean
    isRead?: boolean
    owner?: boolean | Notification$ownerArgs<ExtArgs>
    officer?: boolean | Notification$officerArgs<ExtArgs>
    police?: boolean | Notification$policeArgs<ExtArgs>
    report?: boolean | Notification$reportArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    officerId?: boolean
    policeId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    status?: boolean
    image?: boolean
    reportId?: boolean
    createdAt?: boolean
    isRead?: boolean
    owner?: boolean | Notification$ownerArgs<ExtArgs>
    officer?: boolean | Notification$officerArgs<ExtArgs>
    police?: boolean | Notification$policeArgs<ExtArgs>
    report?: boolean | Notification$reportArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    ownerId?: boolean
    officerId?: boolean
    policeId?: boolean
    title?: boolean
    message?: boolean
    type?: boolean
    status?: boolean
    image?: boolean
    reportId?: boolean
    createdAt?: boolean
    isRead?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "officerId" | "policeId" | "title" | "message" | "type" | "status" | "image" | "reportId" | "createdAt" | "isRead", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Notification$ownerArgs<ExtArgs>
    officer?: boolean | Notification$officerArgs<ExtArgs>
    police?: boolean | Notification$policeArgs<ExtArgs>
    report?: boolean | Notification$reportArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Notification$ownerArgs<ExtArgs>
    officer?: boolean | Notification$officerArgs<ExtArgs>
    police?: boolean | Notification$policeArgs<ExtArgs>
    report?: boolean | Notification$reportArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | Notification$ownerArgs<ExtArgs>
    officer?: boolean | Notification$officerArgs<ExtArgs>
    police?: boolean | Notification$policeArgs<ExtArgs>
    report?: boolean | Notification$reportArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      owner: Prisma.$OwnerPayload<ExtArgs> | null
      officer: Prisma.$OfficerPayload<ExtArgs> | null
      police: Prisma.$PolicePayload<ExtArgs> | null
      report: Prisma.$ReportPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string | null
      officerId: string | null
      policeId: string | null
      title: string | null
      message: string | null
      type: $Enums.NotificationType | null
      status: $Enums.NotificationStatus | null
      image: string | null
      reportId: string | null
      createdAt: Date | null
      isRead: boolean | null
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends Notification$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Notification$ownerArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    officer<T extends Notification$officerArgs<ExtArgs> = {}>(args?: Subset<T, Notification$officerArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    police<T extends Notification$policeArgs<ExtArgs> = {}>(args?: Subset<T, Notification$policeArgs<ExtArgs>>): Prisma__PoliceClient<$Result.GetResult<Prisma.$PolicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    report<T extends Notification$reportArgs<ExtArgs> = {}>(args?: Subset<T, Notification$reportArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly ownerId: FieldRef<"Notification", 'String'>
    readonly officerId: FieldRef<"Notification", 'String'>
    readonly policeId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly status: FieldRef<"Notification", 'NotificationStatus'>
    readonly image: FieldRef<"Notification", 'String'>
    readonly reportId: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data?: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.owner
   */
  export type Notification$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    where?: OwnerWhereInput
  }

  /**
   * Notification.officer
   */
  export type Notification$officerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    where?: OfficerWhereInput
  }

  /**
   * Notification.police
   */
  export type Notification$policeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Police
     */
    select?: PoliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Police
     */
    omit?: PoliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceInclude<ExtArgs> | null
    where?: PoliceWhereInput
  }

  /**
   * Notification.report
   */
  export type Notification$reportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    entity: string | null
    entityId: string | null
    action: string | null
    actorOwnerId: string | null
    actorOfficerId: string | null
    actorPoliceId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    entity: string | null
    entityId: string | null
    action: string | null
    actorOwnerId: string | null
    actorOfficerId: string | null
    actorPoliceId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    entity: number
    entityId: number
    action: number
    actorOwnerId: number
    actorOfficerId: number
    actorPoliceId: number
    description: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    entity?: true
    entityId?: true
    action?: true
    actorOwnerId?: true
    actorOfficerId?: true
    actorPoliceId?: true
    description?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    entity?: true
    entityId?: true
    action?: true
    actorOwnerId?: true
    actorOfficerId?: true
    actorPoliceId?: true
    description?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    entity?: true
    entityId?: true
    action?: true
    actorOwnerId?: true
    actorOfficerId?: true
    actorPoliceId?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    entity: string | null
    entityId: string | null
    action: string | null
    actorOwnerId: string | null
    actorOfficerId: string | null
    actorPoliceId: string | null
    description: string | null
    createdAt: Date | null
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entity?: boolean
    entityId?: boolean
    action?: boolean
    actorOwnerId?: boolean
    actorOfficerId?: boolean
    actorPoliceId?: boolean
    description?: boolean
    createdAt?: boolean
    actorOwner?: boolean | AuditLog$actorOwnerArgs<ExtArgs>
    actorOfficer?: boolean | AuditLog$actorOfficerArgs<ExtArgs>
    actorPolice?: boolean | AuditLog$actorPoliceArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entity?: boolean
    entityId?: boolean
    action?: boolean
    actorOwnerId?: boolean
    actorOfficerId?: boolean
    actorPoliceId?: boolean
    description?: boolean
    createdAt?: boolean
    actorOwner?: boolean | AuditLog$actorOwnerArgs<ExtArgs>
    actorOfficer?: boolean | AuditLog$actorOfficerArgs<ExtArgs>
    actorPolice?: boolean | AuditLog$actorPoliceArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entity?: boolean
    entityId?: boolean
    action?: boolean
    actorOwnerId?: boolean
    actorOfficerId?: boolean
    actorPoliceId?: boolean
    description?: boolean
    createdAt?: boolean
    actorOwner?: boolean | AuditLog$actorOwnerArgs<ExtArgs>
    actorOfficer?: boolean | AuditLog$actorOfficerArgs<ExtArgs>
    actorPolice?: boolean | AuditLog$actorPoliceArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    entity?: boolean
    entityId?: boolean
    action?: boolean
    actorOwnerId?: boolean
    actorOfficerId?: boolean
    actorPoliceId?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entity" | "entityId" | "action" | "actorOwnerId" | "actorOfficerId" | "actorPoliceId" | "description" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actorOwner?: boolean | AuditLog$actorOwnerArgs<ExtArgs>
    actorOfficer?: boolean | AuditLog$actorOfficerArgs<ExtArgs>
    actorPolice?: boolean | AuditLog$actorPoliceArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actorOwner?: boolean | AuditLog$actorOwnerArgs<ExtArgs>
    actorOfficer?: boolean | AuditLog$actorOfficerArgs<ExtArgs>
    actorPolice?: boolean | AuditLog$actorPoliceArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actorOwner?: boolean | AuditLog$actorOwnerArgs<ExtArgs>
    actorOfficer?: boolean | AuditLog$actorOfficerArgs<ExtArgs>
    actorPolice?: boolean | AuditLog$actorPoliceArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      actorOwner: Prisma.$OwnerPayload<ExtArgs> | null
      actorOfficer: Prisma.$OfficerPayload<ExtArgs> | null
      actorPolice: Prisma.$PolicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      entity: string | null
      entityId: string | null
      action: string | null
      actorOwnerId: string | null
      actorOfficerId: string | null
      actorPoliceId: string | null
      description: string | null
      createdAt: Date | null
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actorOwner<T extends AuditLog$actorOwnerArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$actorOwnerArgs<ExtArgs>>): Prisma__OwnerClient<$Result.GetResult<Prisma.$OwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    actorOfficer<T extends AuditLog$actorOfficerArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$actorOfficerArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    actorPolice<T extends AuditLog$actorPoliceArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$actorPoliceArgs<ExtArgs>>): Prisma__PoliceClient<$Result.GetResult<Prisma.$PolicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly actorOwnerId: FieldRef<"AuditLog", 'String'>
    readonly actorOfficerId: FieldRef<"AuditLog", 'String'>
    readonly actorPoliceId: FieldRef<"AuditLog", 'String'>
    readonly description: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data?: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.actorOwner
   */
  export type AuditLog$actorOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Owner
     */
    select?: OwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Owner
     */
    omit?: OwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OwnerInclude<ExtArgs> | null
    where?: OwnerWhereInput
  }

  /**
   * AuditLog.actorOfficer
   */
  export type AuditLog$actorOfficerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    where?: OfficerWhereInput
  }

  /**
   * AuditLog.actorPolice
   */
  export type AuditLog$actorPoliceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Police
     */
    select?: PoliceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Police
     */
    omit?: PoliceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PoliceInclude<ExtArgs> | null
    where?: PoliceWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OwnerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    passwordHash: 'passwordHash',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt'
  };

  export type OwnerScalarFieldEnum = (typeof OwnerScalarFieldEnum)[keyof typeof OwnerScalarFieldEnum]


  export const OfficerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    passwordHash: 'passwordHash',
    latitude: 'latitude',
    longitude: 'longitude',
    vehicleType: 'vehicleType',
    licensePlate: 'licensePlate',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type OfficerScalarFieldEnum = (typeof OfficerScalarFieldEnum)[keyof typeof OfficerScalarFieldEnum]


  export const PoliceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    passwordHash: 'passwordHash',
    latitude: 'latitude',
    longitude: 'longitude',
    officeName: 'officeName',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PoliceScalarFieldEnum = (typeof PoliceScalarFieldEnum)[keyof typeof PoliceScalarFieldEnum]


  export const CCTVScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    name: 'name',
    location: 'location',
    description: 'description',
    IP: 'IP',
    cameraType: 'cameraType',
    streamUrl: 'streamUrl',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type CCTVScalarFieldEnum = (typeof CCTVScalarFieldEnum)[keyof typeof CCTVScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    cctvId: 'cctvId',
    ownerId: 'ownerId',
    title: 'title',
    description: 'description',
    status: 'status',
    location: 'location',
    reportImage: 'reportImage',
    incidentType: 'incidentType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isAssigned: 'isAssigned'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const EvidenceScalarFieldEnum: {
    id: 'id',
    reportId: 'reportId',
    fileUrl: 'fileUrl',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type EvidenceScalarFieldEnum = (typeof EvidenceScalarFieldEnum)[keyof typeof EvidenceScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    id: 'id',
    reportId: 'reportId',
    officerId: 'officerId',
    assignedBy: 'assignedBy',
    assignedAt: 'assignedAt'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const TrackingScalarFieldEnum: {
    id: 'id',
    assignmentId: 'assignmentId',
    officerId: 'officerId',
    latitude: 'latitude',
    longitude: 'longitude',
    timestamp: 'timestamp',
    distance: 'distance',
    estimatedTime: 'estimatedTime',
    status: 'status',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TrackingScalarFieldEnum = (typeof TrackingScalarFieldEnum)[keyof typeof TrackingScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    officerId: 'officerId',
    policeId: 'policeId',
    title: 'title',
    message: 'message',
    type: 'type',
    status: 'status',
    image: 'image',
    reportId: 'reportId',
    createdAt: 'createdAt',
    isRead: 'isRead'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    entity: 'entity',
    entityId: 'entityId',
    action: 'action',
    actorOwnerId: 'actorOwnerId',
    actorOfficerId: 'actorOfficerId',
    actorPoliceId: 'actorPoliceId',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'OfficerStatus'
   */
  export type EnumOfficerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfficerStatus'>
    


  /**
   * Reference to a field of type 'OfficerStatus[]'
   */
  export type ListEnumOfficerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfficerStatus[]'>
    


  /**
   * Reference to a field of type 'PoliceStatus'
   */
  export type EnumPoliceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PoliceStatus'>
    


  /**
   * Reference to a field of type 'PoliceStatus[]'
   */
  export type ListEnumPoliceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PoliceStatus[]'>
    


  /**
   * Reference to a field of type 'CCTVStatus'
   */
  export type EnumCCTVStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CCTVStatus'>
    


  /**
   * Reference to a field of type 'CCTVStatus[]'
   */
  export type ListEnumCCTVStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CCTVStatus[]'>
    


  /**
   * Reference to a field of type 'ReportStatus'
   */
  export type EnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus'>
    


  /**
   * Reference to a field of type 'ReportStatus[]'
   */
  export type ListEnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus[]'>
    


  /**
   * Reference to a field of type 'IncidentType'
   */
  export type EnumIncidentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentType'>
    


  /**
   * Reference to a field of type 'IncidentType[]'
   */
  export type ListEnumIncidentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncidentType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TrackingStatus'
   */
  export type EnumTrackingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrackingStatus'>
    


  /**
   * Reference to a field of type 'TrackingStatus[]'
   */
  export type ListEnumTrackingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrackingStatus[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'NotificationStatus'
   */
  export type EnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus'>
    


  /**
   * Reference to a field of type 'NotificationStatus[]'
   */
  export type ListEnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type OwnerWhereInput = {
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    id?: StringFilter<"Owner"> | string
    name?: StringNullableFilter<"Owner"> | string | null
    email?: StringNullableFilter<"Owner"> | string | null
    phone?: StringNullableFilter<"Owner"> | string | null
    address?: StringNullableFilter<"Owner"> | string | null
    passwordHash?: StringNullableFilter<"Owner"> | string | null
    latitude?: FloatNullableFilter<"Owner"> | number | null
    longitude?: FloatNullableFilter<"Owner"> | number | null
    createdAt?: DateTimeNullableFilter<"Owner"> | Date | string | null
    cctvs?: CCTVListRelationFilter
    reports?: ReportListRelationFilter
    notifications?: NotificationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type OwnerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    cctvs?: CCTVOrderByRelationAggregateInput
    reports?: ReportOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type OwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: OwnerWhereInput | OwnerWhereInput[]
    OR?: OwnerWhereInput[]
    NOT?: OwnerWhereInput | OwnerWhereInput[]
    name?: StringNullableFilter<"Owner"> | string | null
    phone?: StringNullableFilter<"Owner"> | string | null
    address?: StringNullableFilter<"Owner"> | string | null
    passwordHash?: StringNullableFilter<"Owner"> | string | null
    latitude?: FloatNullableFilter<"Owner"> | number | null
    longitude?: FloatNullableFilter<"Owner"> | number | null
    createdAt?: DateTimeNullableFilter<"Owner"> | Date | string | null
    cctvs?: CCTVListRelationFilter
    reports?: ReportListRelationFilter
    notifications?: NotificationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email">

  export type OwnerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: OwnerCountOrderByAggregateInput
    _avg?: OwnerAvgOrderByAggregateInput
    _max?: OwnerMaxOrderByAggregateInput
    _min?: OwnerMinOrderByAggregateInput
    _sum?: OwnerSumOrderByAggregateInput
  }

  export type OwnerScalarWhereWithAggregatesInput = {
    AND?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    OR?: OwnerScalarWhereWithAggregatesInput[]
    NOT?: OwnerScalarWhereWithAggregatesInput | OwnerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Owner"> | string
    name?: StringNullableWithAggregatesFilter<"Owner"> | string | null
    email?: StringNullableWithAggregatesFilter<"Owner"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Owner"> | string | null
    address?: StringNullableWithAggregatesFilter<"Owner"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"Owner"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Owner"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Owner"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Owner"> | Date | string | null
  }

  export type OfficerWhereInput = {
    AND?: OfficerWhereInput | OfficerWhereInput[]
    OR?: OfficerWhereInput[]
    NOT?: OfficerWhereInput | OfficerWhereInput[]
    id?: StringFilter<"Officer"> | string
    name?: StringNullableFilter<"Officer"> | string | null
    email?: StringNullableFilter<"Officer"> | string | null
    phone?: StringNullableFilter<"Officer"> | string | null
    address?: StringNullableFilter<"Officer"> | string | null
    passwordHash?: StringNullableFilter<"Officer"> | string | null
    latitude?: FloatNullableFilter<"Officer"> | number | null
    longitude?: FloatNullableFilter<"Officer"> | number | null
    vehicleType?: StringNullableFilter<"Officer"> | string | null
    licensePlate?: StringNullableFilter<"Officer"> | string | null
    status?: EnumOfficerStatusNullableFilter<"Officer"> | $Enums.OfficerStatus | null
    createdAt?: DateTimeNullableFilter<"Officer"> | Date | string | null
    assignments?: AssignmentListRelationFilter
    notifications?: NotificationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    trackings?: TrackingListRelationFilter
  }

  export type OfficerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    vehicleType?: SortOrderInput | SortOrder
    licensePlate?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    assignments?: AssignmentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    trackings?: TrackingOrderByRelationAggregateInput
  }

  export type OfficerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: OfficerWhereInput | OfficerWhereInput[]
    OR?: OfficerWhereInput[]
    NOT?: OfficerWhereInput | OfficerWhereInput[]
    name?: StringNullableFilter<"Officer"> | string | null
    phone?: StringNullableFilter<"Officer"> | string | null
    address?: StringNullableFilter<"Officer"> | string | null
    passwordHash?: StringNullableFilter<"Officer"> | string | null
    latitude?: FloatNullableFilter<"Officer"> | number | null
    longitude?: FloatNullableFilter<"Officer"> | number | null
    vehicleType?: StringNullableFilter<"Officer"> | string | null
    licensePlate?: StringNullableFilter<"Officer"> | string | null
    status?: EnumOfficerStatusNullableFilter<"Officer"> | $Enums.OfficerStatus | null
    createdAt?: DateTimeNullableFilter<"Officer"> | Date | string | null
    assignments?: AssignmentListRelationFilter
    notifications?: NotificationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    trackings?: TrackingListRelationFilter
  }, "id" | "email">

  export type OfficerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    vehicleType?: SortOrderInput | SortOrder
    licensePlate?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: OfficerCountOrderByAggregateInput
    _avg?: OfficerAvgOrderByAggregateInput
    _max?: OfficerMaxOrderByAggregateInput
    _min?: OfficerMinOrderByAggregateInput
    _sum?: OfficerSumOrderByAggregateInput
  }

  export type OfficerScalarWhereWithAggregatesInput = {
    AND?: OfficerScalarWhereWithAggregatesInput | OfficerScalarWhereWithAggregatesInput[]
    OR?: OfficerScalarWhereWithAggregatesInput[]
    NOT?: OfficerScalarWhereWithAggregatesInput | OfficerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Officer"> | string
    name?: StringNullableWithAggregatesFilter<"Officer"> | string | null
    email?: StringNullableWithAggregatesFilter<"Officer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Officer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Officer"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"Officer"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Officer"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Officer"> | number | null
    vehicleType?: StringNullableWithAggregatesFilter<"Officer"> | string | null
    licensePlate?: StringNullableWithAggregatesFilter<"Officer"> | string | null
    status?: EnumOfficerStatusNullableWithAggregatesFilter<"Officer"> | $Enums.OfficerStatus | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Officer"> | Date | string | null
  }

  export type PoliceWhereInput = {
    AND?: PoliceWhereInput | PoliceWhereInput[]
    OR?: PoliceWhereInput[]
    NOT?: PoliceWhereInput | PoliceWhereInput[]
    id?: StringFilter<"Police"> | string
    name?: StringNullableFilter<"Police"> | string | null
    email?: StringNullableFilter<"Police"> | string | null
    phone?: StringNullableFilter<"Police"> | string | null
    address?: StringNullableFilter<"Police"> | string | null
    passwordHash?: StringNullableFilter<"Police"> | string | null
    latitude?: FloatNullableFilter<"Police"> | number | null
    longitude?: FloatNullableFilter<"Police"> | number | null
    officeName?: StringNullableFilter<"Police"> | string | null
    status?: EnumPoliceStatusNullableFilter<"Police"> | $Enums.PoliceStatus | null
    createdAt?: DateTimeNullableFilter<"Police"> | Date | string | null
    assignments?: AssignmentListRelationFilter
    notifications?: NotificationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type PoliceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    officeName?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    assignments?: AssignmentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type PoliceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: PoliceWhereInput | PoliceWhereInput[]
    OR?: PoliceWhereInput[]
    NOT?: PoliceWhereInput | PoliceWhereInput[]
    name?: StringNullableFilter<"Police"> | string | null
    phone?: StringNullableFilter<"Police"> | string | null
    address?: StringNullableFilter<"Police"> | string | null
    passwordHash?: StringNullableFilter<"Police"> | string | null
    latitude?: FloatNullableFilter<"Police"> | number | null
    longitude?: FloatNullableFilter<"Police"> | number | null
    officeName?: StringNullableFilter<"Police"> | string | null
    status?: EnumPoliceStatusNullableFilter<"Police"> | $Enums.PoliceStatus | null
    createdAt?: DateTimeNullableFilter<"Police"> | Date | string | null
    assignments?: AssignmentListRelationFilter
    notifications?: NotificationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email">

  export type PoliceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    officeName?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: PoliceCountOrderByAggregateInput
    _avg?: PoliceAvgOrderByAggregateInput
    _max?: PoliceMaxOrderByAggregateInput
    _min?: PoliceMinOrderByAggregateInput
    _sum?: PoliceSumOrderByAggregateInput
  }

  export type PoliceScalarWhereWithAggregatesInput = {
    AND?: PoliceScalarWhereWithAggregatesInput | PoliceScalarWhereWithAggregatesInput[]
    OR?: PoliceScalarWhereWithAggregatesInput[]
    NOT?: PoliceScalarWhereWithAggregatesInput | PoliceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Police"> | string
    name?: StringNullableWithAggregatesFilter<"Police"> | string | null
    email?: StringNullableWithAggregatesFilter<"Police"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Police"> | string | null
    address?: StringNullableWithAggregatesFilter<"Police"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"Police"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Police"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Police"> | number | null
    officeName?: StringNullableWithAggregatesFilter<"Police"> | string | null
    status?: EnumPoliceStatusNullableWithAggregatesFilter<"Police"> | $Enums.PoliceStatus | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Police"> | Date | string | null
  }

  export type CCTVWhereInput = {
    AND?: CCTVWhereInput | CCTVWhereInput[]
    OR?: CCTVWhereInput[]
    NOT?: CCTVWhereInput | CCTVWhereInput[]
    id?: StringFilter<"CCTV"> | string
    ownerId?: StringFilter<"CCTV"> | string
    name?: StringNullableFilter<"CCTV"> | string | null
    location?: StringNullableFilter<"CCTV"> | string | null
    description?: StringNullableFilter<"CCTV"> | string | null
    IP?: StringNullableFilter<"CCTV"> | string | null
    cameraType?: StringNullableFilter<"CCTV"> | string | null
    streamUrl?: StringNullableFilter<"CCTV"> | string | null
    status?: EnumCCTVStatusNullableFilter<"CCTV"> | $Enums.CCTVStatus | null
    createdAt?: DateTimeNullableFilter<"CCTV"> | Date | string | null
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
    reports?: ReportListRelationFilter
  }

  export type CCTVOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    IP?: SortOrderInput | SortOrder
    cameraType?: SortOrderInput | SortOrder
    streamUrl?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    owner?: OwnerOrderByWithRelationInput
    reports?: ReportOrderByRelationAggregateInput
  }

  export type CCTVWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    IP?: string
    AND?: CCTVWhereInput | CCTVWhereInput[]
    OR?: CCTVWhereInput[]
    NOT?: CCTVWhereInput | CCTVWhereInput[]
    ownerId?: StringFilter<"CCTV"> | string
    name?: StringNullableFilter<"CCTV"> | string | null
    location?: StringNullableFilter<"CCTV"> | string | null
    description?: StringNullableFilter<"CCTV"> | string | null
    cameraType?: StringNullableFilter<"CCTV"> | string | null
    streamUrl?: StringNullableFilter<"CCTV"> | string | null
    status?: EnumCCTVStatusNullableFilter<"CCTV"> | $Enums.CCTVStatus | null
    createdAt?: DateTimeNullableFilter<"CCTV"> | Date | string | null
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
    reports?: ReportListRelationFilter
  }, "id" | "IP">

  export type CCTVOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    IP?: SortOrderInput | SortOrder
    cameraType?: SortOrderInput | SortOrder
    streamUrl?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: CCTVCountOrderByAggregateInput
    _max?: CCTVMaxOrderByAggregateInput
    _min?: CCTVMinOrderByAggregateInput
  }

  export type CCTVScalarWhereWithAggregatesInput = {
    AND?: CCTVScalarWhereWithAggregatesInput | CCTVScalarWhereWithAggregatesInput[]
    OR?: CCTVScalarWhereWithAggregatesInput[]
    NOT?: CCTVScalarWhereWithAggregatesInput | CCTVScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CCTV"> | string
    ownerId?: StringWithAggregatesFilter<"CCTV"> | string
    name?: StringNullableWithAggregatesFilter<"CCTV"> | string | null
    location?: StringNullableWithAggregatesFilter<"CCTV"> | string | null
    description?: StringNullableWithAggregatesFilter<"CCTV"> | string | null
    IP?: StringNullableWithAggregatesFilter<"CCTV"> | string | null
    cameraType?: StringNullableWithAggregatesFilter<"CCTV"> | string | null
    streamUrl?: StringNullableWithAggregatesFilter<"CCTV"> | string | null
    status?: EnumCCTVStatusNullableWithAggregatesFilter<"CCTV"> | $Enums.CCTVStatus | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"CCTV"> | Date | string | null
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    cctvId?: StringNullableFilter<"Report"> | string | null
    ownerId?: StringFilter<"Report"> | string
    title?: StringNullableFilter<"Report"> | string | null
    description?: StringNullableFilter<"Report"> | string | null
    status?: EnumReportStatusNullableFilter<"Report"> | $Enums.ReportStatus | null
    location?: StringNullableFilter<"Report"> | string | null
    reportImage?: StringNullableFilter<"Report"> | string | null
    incidentType?: EnumIncidentTypeNullableFilter<"Report"> | $Enums.IncidentType | null
    createdAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    isAssigned?: BoolNullableFilter<"Report"> | boolean | null
    cctv?: XOR<CCTVNullableScalarRelationFilter, CCTVWhereInput> | null
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
    evidences?: EvidenceListRelationFilter
    assignments?: AssignmentListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    cctvId?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    reportImage?: SortOrderInput | SortOrder
    incidentType?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isAssigned?: SortOrderInput | SortOrder
    cctv?: CCTVOrderByWithRelationInput
    owner?: OwnerOrderByWithRelationInput
    evidences?: EvidenceOrderByRelationAggregateInput
    assignments?: AssignmentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    cctvId?: StringNullableFilter<"Report"> | string | null
    ownerId?: StringFilter<"Report"> | string
    title?: StringNullableFilter<"Report"> | string | null
    description?: StringNullableFilter<"Report"> | string | null
    status?: EnumReportStatusNullableFilter<"Report"> | $Enums.ReportStatus | null
    location?: StringNullableFilter<"Report"> | string | null
    reportImage?: StringNullableFilter<"Report"> | string | null
    incidentType?: EnumIncidentTypeNullableFilter<"Report"> | $Enums.IncidentType | null
    createdAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    isAssigned?: BoolNullableFilter<"Report"> | boolean | null
    cctv?: XOR<CCTVNullableScalarRelationFilter, CCTVWhereInput> | null
    owner?: XOR<OwnerScalarRelationFilter, OwnerWhereInput>
    evidences?: EvidenceListRelationFilter
    assignments?: AssignmentListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    cctvId?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    reportImage?: SortOrderInput | SortOrder
    incidentType?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    isAssigned?: SortOrderInput | SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    cctvId?: StringNullableWithAggregatesFilter<"Report"> | string | null
    ownerId?: StringWithAggregatesFilter<"Report"> | string
    title?: StringNullableWithAggregatesFilter<"Report"> | string | null
    description?: StringNullableWithAggregatesFilter<"Report"> | string | null
    status?: EnumReportStatusNullableWithAggregatesFilter<"Report"> | $Enums.ReportStatus | null
    location?: StringNullableWithAggregatesFilter<"Report"> | string | null
    reportImage?: StringNullableWithAggregatesFilter<"Report"> | string | null
    incidentType?: EnumIncidentTypeNullableWithAggregatesFilter<"Report"> | $Enums.IncidentType | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Report"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Report"> | Date | string | null
    isAssigned?: BoolNullableWithAggregatesFilter<"Report"> | boolean | null
  }

  export type EvidenceWhereInput = {
    AND?: EvidenceWhereInput | EvidenceWhereInput[]
    OR?: EvidenceWhereInput[]
    NOT?: EvidenceWhereInput | EvidenceWhereInput[]
    id?: StringFilter<"Evidence"> | string
    reportId?: StringFilter<"Evidence"> | string
    fileUrl?: StringNullableFilter<"Evidence"> | string | null
    type?: StringNullableFilter<"Evidence"> | string | null
    createdAt?: DateTimeNullableFilter<"Evidence"> | Date | string | null
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
  }

  export type EvidenceOrderByWithRelationInput = {
    id?: SortOrder
    reportId?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    report?: ReportOrderByWithRelationInput
  }

  export type EvidenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EvidenceWhereInput | EvidenceWhereInput[]
    OR?: EvidenceWhereInput[]
    NOT?: EvidenceWhereInput | EvidenceWhereInput[]
    reportId?: StringFilter<"Evidence"> | string
    fileUrl?: StringNullableFilter<"Evidence"> | string | null
    type?: StringNullableFilter<"Evidence"> | string | null
    createdAt?: DateTimeNullableFilter<"Evidence"> | Date | string | null
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
  }, "id">

  export type EvidenceOrderByWithAggregationInput = {
    id?: SortOrder
    reportId?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: EvidenceCountOrderByAggregateInput
    _max?: EvidenceMaxOrderByAggregateInput
    _min?: EvidenceMinOrderByAggregateInput
  }

  export type EvidenceScalarWhereWithAggregatesInput = {
    AND?: EvidenceScalarWhereWithAggregatesInput | EvidenceScalarWhereWithAggregatesInput[]
    OR?: EvidenceScalarWhereWithAggregatesInput[]
    NOT?: EvidenceScalarWhereWithAggregatesInput | EvidenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Evidence"> | string
    reportId?: StringWithAggregatesFilter<"Evidence"> | string
    fileUrl?: StringNullableWithAggregatesFilter<"Evidence"> | string | null
    type?: StringNullableWithAggregatesFilter<"Evidence"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Evidence"> | Date | string | null
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    id?: StringFilter<"Assignment"> | string
    reportId?: StringFilter<"Assignment"> | string
    officerId?: StringFilter<"Assignment"> | string
    assignedBy?: StringNullableFilter<"Assignment"> | string | null
    assignedAt?: DateTimeNullableFilter<"Assignment"> | Date | string | null
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
    officer?: XOR<OfficerScalarRelationFilter, OfficerWhereInput>
    assignedByPolice?: XOR<PoliceNullableScalarRelationFilter, PoliceWhereInput> | null
    trackings?: TrackingListRelationFilter
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    reportId?: SortOrder
    officerId?: SortOrder
    assignedBy?: SortOrderInput | SortOrder
    assignedAt?: SortOrderInput | SortOrder
    report?: ReportOrderByWithRelationInput
    officer?: OfficerOrderByWithRelationInput
    assignedByPolice?: PoliceOrderByWithRelationInput
    trackings?: TrackingOrderByRelationAggregateInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    reportId?: StringFilter<"Assignment"> | string
    officerId?: StringFilter<"Assignment"> | string
    assignedBy?: StringNullableFilter<"Assignment"> | string | null
    assignedAt?: DateTimeNullableFilter<"Assignment"> | Date | string | null
    report?: XOR<ReportScalarRelationFilter, ReportWhereInput>
    officer?: XOR<OfficerScalarRelationFilter, OfficerWhereInput>
    assignedByPolice?: XOR<PoliceNullableScalarRelationFilter, PoliceWhereInput> | null
    trackings?: TrackingListRelationFilter
  }, "id">

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    reportId?: SortOrder
    officerId?: SortOrder
    assignedBy?: SortOrderInput | SortOrder
    assignedAt?: SortOrderInput | SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assignment"> | string
    reportId?: StringWithAggregatesFilter<"Assignment"> | string
    officerId?: StringWithAggregatesFilter<"Assignment"> | string
    assignedBy?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    assignedAt?: DateTimeNullableWithAggregatesFilter<"Assignment"> | Date | string | null
  }

  export type TrackingWhereInput = {
    AND?: TrackingWhereInput | TrackingWhereInput[]
    OR?: TrackingWhereInput[]
    NOT?: TrackingWhereInput | TrackingWhereInput[]
    id?: StringFilter<"Tracking"> | string
    assignmentId?: StringFilter<"Tracking"> | string
    officerId?: StringFilter<"Tracking"> | string
    latitude?: FloatNullableFilter<"Tracking"> | number | null
    longitude?: FloatNullableFilter<"Tracking"> | number | null
    timestamp?: DateTimeNullableFilter<"Tracking"> | Date | string | null
    distance?: FloatNullableFilter<"Tracking"> | number | null
    estimatedTime?: StringNullableFilter<"Tracking"> | string | null
    status?: EnumTrackingStatusNullableFilter<"Tracking"> | $Enums.TrackingStatus | null
    description?: StringNullableFilter<"Tracking"> | string | null
    createdAt?: DateTimeNullableFilter<"Tracking"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Tracking"> | Date | string | null
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    officer?: XOR<OfficerScalarRelationFilter, OfficerWhereInput>
  }

  export type TrackingOrderByWithRelationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    officerId?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    distance?: SortOrderInput | SortOrder
    estimatedTime?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    assignment?: AssignmentOrderByWithRelationInput
    officer?: OfficerOrderByWithRelationInput
  }

  export type TrackingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrackingWhereInput | TrackingWhereInput[]
    OR?: TrackingWhereInput[]
    NOT?: TrackingWhereInput | TrackingWhereInput[]
    assignmentId?: StringFilter<"Tracking"> | string
    officerId?: StringFilter<"Tracking"> | string
    latitude?: FloatNullableFilter<"Tracking"> | number | null
    longitude?: FloatNullableFilter<"Tracking"> | number | null
    timestamp?: DateTimeNullableFilter<"Tracking"> | Date | string | null
    distance?: FloatNullableFilter<"Tracking"> | number | null
    estimatedTime?: StringNullableFilter<"Tracking"> | string | null
    status?: EnumTrackingStatusNullableFilter<"Tracking"> | $Enums.TrackingStatus | null
    description?: StringNullableFilter<"Tracking"> | string | null
    createdAt?: DateTimeNullableFilter<"Tracking"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Tracking"> | Date | string | null
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    officer?: XOR<OfficerScalarRelationFilter, OfficerWhereInput>
  }, "id">

  export type TrackingOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    officerId?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    timestamp?: SortOrderInput | SortOrder
    distance?: SortOrderInput | SortOrder
    estimatedTime?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: TrackingCountOrderByAggregateInput
    _avg?: TrackingAvgOrderByAggregateInput
    _max?: TrackingMaxOrderByAggregateInput
    _min?: TrackingMinOrderByAggregateInput
    _sum?: TrackingSumOrderByAggregateInput
  }

  export type TrackingScalarWhereWithAggregatesInput = {
    AND?: TrackingScalarWhereWithAggregatesInput | TrackingScalarWhereWithAggregatesInput[]
    OR?: TrackingScalarWhereWithAggregatesInput[]
    NOT?: TrackingScalarWhereWithAggregatesInput | TrackingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tracking"> | string
    assignmentId?: StringWithAggregatesFilter<"Tracking"> | string
    officerId?: StringWithAggregatesFilter<"Tracking"> | string
    latitude?: FloatNullableWithAggregatesFilter<"Tracking"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Tracking"> | number | null
    timestamp?: DateTimeNullableWithAggregatesFilter<"Tracking"> | Date | string | null
    distance?: FloatNullableWithAggregatesFilter<"Tracking"> | number | null
    estimatedTime?: StringNullableWithAggregatesFilter<"Tracking"> | string | null
    status?: EnumTrackingStatusNullableWithAggregatesFilter<"Tracking"> | $Enums.TrackingStatus | null
    description?: StringNullableWithAggregatesFilter<"Tracking"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Tracking"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Tracking"> | Date | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    ownerId?: StringNullableFilter<"Notification"> | string | null
    officerId?: StringNullableFilter<"Notification"> | string | null
    policeId?: StringNullableFilter<"Notification"> | string | null
    title?: StringNullableFilter<"Notification"> | string | null
    message?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotificationTypeNullableFilter<"Notification"> | $Enums.NotificationType | null
    status?: EnumNotificationStatusNullableFilter<"Notification"> | $Enums.NotificationStatus | null
    image?: StringNullableFilter<"Notification"> | string | null
    reportId?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    isRead?: BoolNullableFilter<"Notification"> | boolean | null
    owner?: XOR<OwnerNullableScalarRelationFilter, OwnerWhereInput> | null
    officer?: XOR<OfficerNullableScalarRelationFilter, OfficerWhereInput> | null
    police?: XOR<PoliceNullableScalarRelationFilter, PoliceWhereInput> | null
    report?: XOR<ReportNullableScalarRelationFilter, ReportWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    officerId?: SortOrderInput | SortOrder
    policeId?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    reportId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    isRead?: SortOrderInput | SortOrder
    owner?: OwnerOrderByWithRelationInput
    officer?: OfficerOrderByWithRelationInput
    police?: PoliceOrderByWithRelationInput
    report?: ReportOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    ownerId?: StringNullableFilter<"Notification"> | string | null
    officerId?: StringNullableFilter<"Notification"> | string | null
    policeId?: StringNullableFilter<"Notification"> | string | null
    title?: StringNullableFilter<"Notification"> | string | null
    message?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotificationTypeNullableFilter<"Notification"> | $Enums.NotificationType | null
    status?: EnumNotificationStatusNullableFilter<"Notification"> | $Enums.NotificationStatus | null
    image?: StringNullableFilter<"Notification"> | string | null
    reportId?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    isRead?: BoolNullableFilter<"Notification"> | boolean | null
    owner?: XOR<OwnerNullableScalarRelationFilter, OwnerWhereInput> | null
    officer?: XOR<OfficerNullableScalarRelationFilter, OfficerWhereInput> | null
    police?: XOR<PoliceNullableScalarRelationFilter, PoliceWhereInput> | null
    report?: XOR<ReportNullableScalarRelationFilter, ReportWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    officerId?: SortOrderInput | SortOrder
    policeId?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    reportId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    isRead?: SortOrderInput | SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    ownerId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    officerId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    policeId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    title?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    message?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    type?: EnumNotificationTypeNullableWithAggregatesFilter<"Notification"> | $Enums.NotificationType | null
    status?: EnumNotificationStatusNullableWithAggregatesFilter<"Notification"> | $Enums.NotificationStatus | null
    image?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    reportId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    isRead?: BoolNullableWithAggregatesFilter<"Notification"> | boolean | null
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    entity?: StringNullableFilter<"AuditLog"> | string | null
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringNullableFilter<"AuditLog"> | string | null
    actorOwnerId?: StringNullableFilter<"AuditLog"> | string | null
    actorOfficerId?: StringNullableFilter<"AuditLog"> | string | null
    actorPoliceId?: StringNullableFilter<"AuditLog"> | string | null
    description?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeNullableFilter<"AuditLog"> | Date | string | null
    actorOwner?: XOR<OwnerNullableScalarRelationFilter, OwnerWhereInput> | null
    actorOfficer?: XOR<OfficerNullableScalarRelationFilter, OfficerWhereInput> | null
    actorPolice?: XOR<PoliceNullableScalarRelationFilter, PoliceWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    entity?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    actorOwnerId?: SortOrderInput | SortOrder
    actorOfficerId?: SortOrderInput | SortOrder
    actorPoliceId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    actorOwner?: OwnerOrderByWithRelationInput
    actorOfficer?: OfficerOrderByWithRelationInput
    actorPolice?: PoliceOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    entity?: StringNullableFilter<"AuditLog"> | string | null
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringNullableFilter<"AuditLog"> | string | null
    actorOwnerId?: StringNullableFilter<"AuditLog"> | string | null
    actorOfficerId?: StringNullableFilter<"AuditLog"> | string | null
    actorPoliceId?: StringNullableFilter<"AuditLog"> | string | null
    description?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeNullableFilter<"AuditLog"> | Date | string | null
    actorOwner?: XOR<OwnerNullableScalarRelationFilter, OwnerWhereInput> | null
    actorOfficer?: XOR<OfficerNullableScalarRelationFilter, OfficerWhereInput> | null
    actorPolice?: XOR<PoliceNullableScalarRelationFilter, PoliceWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    entity?: SortOrderInput | SortOrder
    entityId?: SortOrderInput | SortOrder
    action?: SortOrderInput | SortOrder
    actorOwnerId?: SortOrderInput | SortOrder
    actorOfficerId?: SortOrderInput | SortOrder
    actorPoliceId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    entityId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    actorOwnerId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    actorOfficerId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    actorPoliceId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    description?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"AuditLog"> | Date | string | null
  }

  export type OwnerCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string | null
    cctvs?: CCTVCreateNestedManyWithoutOwnerInput
    reports?: ReportCreateNestedManyWithoutOwnerInput
    notifications?: NotificationCreateNestedManyWithoutOwnerInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorOwnerInput
  }

  export type OwnerUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string | null
    cctvs?: CCTVUncheckedCreateNestedManyWithoutOwnerInput
    reports?: ReportUncheckedCreateNestedManyWithoutOwnerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutOwnerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorOwnerInput
  }

  export type OwnerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cctvs?: CCTVUpdateManyWithoutOwnerNestedInput
    reports?: ReportUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUpdateManyWithoutOwnerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorOwnerNestedInput
  }

  export type OwnerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cctvs?: CCTVUncheckedUpdateManyWithoutOwnerNestedInput
    reports?: ReportUncheckedUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutOwnerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorOwnerNestedInput
  }

  export type OwnerCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string | null
  }

  export type OwnerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OfficerCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    vehicleType?: string | null
    licensePlate?: string | null
    status?: $Enums.OfficerStatus | null
    createdAt?: Date | string | null
    assignments?: AssignmentCreateNestedManyWithoutOfficerInput
    notifications?: NotificationCreateNestedManyWithoutOfficerInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorOfficerInput
    trackings?: TrackingCreateNestedManyWithoutOfficerInput
  }

  export type OfficerUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    vehicleType?: string | null
    licensePlate?: string | null
    status?: $Enums.OfficerStatus | null
    createdAt?: Date | string | null
    assignments?: AssignmentUncheckedCreateNestedManyWithoutOfficerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutOfficerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorOfficerInput
    trackings?: TrackingUncheckedCreateNestedManyWithoutOfficerInput
  }

  export type OfficerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    licensePlate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignments?: AssignmentUpdateManyWithoutOfficerNestedInput
    notifications?: NotificationUpdateManyWithoutOfficerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorOfficerNestedInput
    trackings?: TrackingUpdateManyWithoutOfficerNestedInput
  }

  export type OfficerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    licensePlate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignments?: AssignmentUncheckedUpdateManyWithoutOfficerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutOfficerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorOfficerNestedInput
    trackings?: TrackingUncheckedUpdateManyWithoutOfficerNestedInput
  }

  export type OfficerCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    vehicleType?: string | null
    licensePlate?: string | null
    status?: $Enums.OfficerStatus | null
    createdAt?: Date | string | null
  }

  export type OfficerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    licensePlate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OfficerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    licensePlate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PoliceCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    officeName?: string | null
    status?: $Enums.PoliceStatus | null
    createdAt?: Date | string | null
    assignments?: AssignmentCreateNestedManyWithoutAssignedByPoliceInput
    notifications?: NotificationCreateNestedManyWithoutPoliceInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorPoliceInput
  }

  export type PoliceUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    officeName?: string | null
    status?: $Enums.PoliceStatus | null
    createdAt?: Date | string | null
    assignments?: AssignmentUncheckedCreateNestedManyWithoutAssignedByPoliceInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutPoliceInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorPoliceInput
  }

  export type PoliceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    officeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumPoliceStatusFieldUpdateOperationsInput | $Enums.PoliceStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignments?: AssignmentUpdateManyWithoutAssignedByPoliceNestedInput
    notifications?: NotificationUpdateManyWithoutPoliceNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorPoliceNestedInput
  }

  export type PoliceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    officeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumPoliceStatusFieldUpdateOperationsInput | $Enums.PoliceStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignments?: AssignmentUncheckedUpdateManyWithoutAssignedByPoliceNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutPoliceNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorPoliceNestedInput
  }

  export type PoliceCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    officeName?: string | null
    status?: $Enums.PoliceStatus | null
    createdAt?: Date | string | null
  }

  export type PoliceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    officeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumPoliceStatusFieldUpdateOperationsInput | $Enums.PoliceStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PoliceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    officeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumPoliceStatusFieldUpdateOperationsInput | $Enums.PoliceStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CCTVCreateInput = {
    id?: string
    name?: string | null
    location?: string | null
    description?: string | null
    IP?: string | null
    cameraType?: string | null
    streamUrl?: string | null
    status?: $Enums.CCTVStatus | null
    createdAt?: Date | string | null
    owner: OwnerCreateNestedOneWithoutCctvsInput
    reports?: ReportCreateNestedManyWithoutCctvInput
  }

  export type CCTVUncheckedCreateInput = {
    id?: string
    ownerId: string
    name?: string | null
    location?: string | null
    description?: string | null
    IP?: string | null
    cameraType?: string | null
    streamUrl?: string | null
    status?: $Enums.CCTVStatus | null
    createdAt?: Date | string | null
    reports?: ReportUncheckedCreateNestedManyWithoutCctvInput
  }

  export type CCTVUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    IP?: NullableStringFieldUpdateOperationsInput | string | null
    cameraType?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCCTVStatusFieldUpdateOperationsInput | $Enums.CCTVStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: OwnerUpdateOneRequiredWithoutCctvsNestedInput
    reports?: ReportUpdateManyWithoutCctvNestedInput
  }

  export type CCTVUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    IP?: NullableStringFieldUpdateOperationsInput | string | null
    cameraType?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCCTVStatusFieldUpdateOperationsInput | $Enums.CCTVStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUncheckedUpdateManyWithoutCctvNestedInput
  }

  export type CCTVCreateManyInput = {
    id?: string
    ownerId: string
    name?: string | null
    location?: string | null
    description?: string | null
    IP?: string | null
    cameraType?: string | null
    streamUrl?: string | null
    status?: $Enums.CCTVStatus | null
    createdAt?: Date | string | null
  }

  export type CCTVUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    IP?: NullableStringFieldUpdateOperationsInput | string | null
    cameraType?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCCTVStatusFieldUpdateOperationsInput | $Enums.CCTVStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CCTVUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    IP?: NullableStringFieldUpdateOperationsInput | string | null
    cameraType?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCCTVStatusFieldUpdateOperationsInput | $Enums.CCTVStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportCreateInput = {
    id?: string
    title?: string | null
    description?: string | null
    status?: $Enums.ReportStatus | null
    location?: string | null
    reportImage?: string | null
    incidentType?: $Enums.IncidentType | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isAssigned?: boolean | null
    cctv?: CCTVCreateNestedOneWithoutReportsInput
    owner: OwnerCreateNestedOneWithoutReportsInput
    evidences?: EvidenceCreateNestedManyWithoutReportInput
    assignments?: AssignmentCreateNestedManyWithoutReportInput
    notifications?: NotificationCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    cctvId?: string | null
    ownerId: string
    title?: string | null
    description?: string | null
    status?: $Enums.ReportStatus | null
    location?: string | null
    reportImage?: string | null
    incidentType?: $Enums.IncidentType | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isAssigned?: boolean | null
    evidences?: EvidenceUncheckedCreateNestedManyWithoutReportInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutReportInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reportImage?: NullableStringFieldUpdateOperationsInput | string | null
    incidentType?: NullableEnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAssigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cctv?: CCTVUpdateOneWithoutReportsNestedInput
    owner?: OwnerUpdateOneRequiredWithoutReportsNestedInput
    evidences?: EvidenceUpdateManyWithoutReportNestedInput
    assignments?: AssignmentUpdateManyWithoutReportNestedInput
    notifications?: NotificationUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cctvId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reportImage?: NullableStringFieldUpdateOperationsInput | string | null
    incidentType?: NullableEnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAssigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    evidences?: EvidenceUncheckedUpdateManyWithoutReportNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutReportNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportCreateManyInput = {
    id?: string
    cctvId?: string | null
    ownerId: string
    title?: string | null
    description?: string | null
    status?: $Enums.ReportStatus | null
    location?: string | null
    reportImage?: string | null
    incidentType?: $Enums.IncidentType | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isAssigned?: boolean | null
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reportImage?: NullableStringFieldUpdateOperationsInput | string | null
    incidentType?: NullableEnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAssigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cctvId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reportImage?: NullableStringFieldUpdateOperationsInput | string | null
    incidentType?: NullableEnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAssigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type EvidenceCreateInput = {
    id?: string
    fileUrl?: string | null
    type?: string | null
    createdAt?: Date | string | null
    report: ReportCreateNestedOneWithoutEvidencesInput
  }

  export type EvidenceUncheckedCreateInput = {
    id?: string
    reportId: string
    fileUrl?: string | null
    type?: string | null
    createdAt?: Date | string | null
  }

  export type EvidenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report?: ReportUpdateOneRequiredWithoutEvidencesNestedInput
  }

  export type EvidenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EvidenceCreateManyInput = {
    id?: string
    reportId: string
    fileUrl?: string | null
    type?: string | null
    createdAt?: Date | string | null
  }

  export type EvidenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EvidenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssignmentCreateInput = {
    id?: string
    assignedAt?: Date | string | null
    report: ReportCreateNestedOneWithoutAssignmentsInput
    officer: OfficerCreateNestedOneWithoutAssignmentsInput
    assignedByPolice?: PoliceCreateNestedOneWithoutAssignmentsInput
    trackings?: TrackingCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateInput = {
    id?: string
    reportId: string
    officerId: string
    assignedBy?: string | null
    assignedAt?: Date | string | null
    trackings?: TrackingUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report?: ReportUpdateOneRequiredWithoutAssignmentsNestedInput
    officer?: OfficerUpdateOneRequiredWithoutAssignmentsNestedInput
    assignedByPolice?: PoliceUpdateOneWithoutAssignmentsNestedInput
    trackings?: TrackingUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    officerId?: StringFieldUpdateOperationsInput | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackings?: TrackingUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentCreateManyInput = {
    id?: string
    reportId: string
    officerId: string
    assignedBy?: string | null
    assignedAt?: Date | string | null
  }

  export type AssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    officerId?: StringFieldUpdateOperationsInput | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrackingCreateInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
    timestamp?: Date | string | null
    distance?: number | null
    estimatedTime?: string | null
    status?: $Enums.TrackingStatus | null
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    assignment: AssignmentCreateNestedOneWithoutTrackingsInput
    officer: OfficerCreateNestedOneWithoutTrackingsInput
  }

  export type TrackingUncheckedCreateInput = {
    id?: string
    assignmentId: string
    officerId: string
    latitude?: number | null
    longitude?: number | null
    timestamp?: Date | string | null
    distance?: number | null
    estimatedTime?: string | null
    status?: $Enums.TrackingStatus | null
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type TrackingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumTrackingStatusFieldUpdateOperationsInput | $Enums.TrackingStatus | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignment?: AssignmentUpdateOneRequiredWithoutTrackingsNestedInput
    officer?: OfficerUpdateOneRequiredWithoutTrackingsNestedInput
  }

  export type TrackingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    officerId?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumTrackingStatusFieldUpdateOperationsInput | $Enums.TrackingStatus | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrackingCreateManyInput = {
    id?: string
    assignmentId: string
    officerId: string
    latitude?: number | null
    longitude?: number | null
    timestamp?: Date | string | null
    distance?: number | null
    estimatedTime?: string | null
    status?: $Enums.TrackingStatus | null
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type TrackingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumTrackingStatusFieldUpdateOperationsInput | $Enums.TrackingStatus | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrackingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    officerId?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumTrackingStatusFieldUpdateOperationsInput | $Enums.TrackingStatus | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationCreateInput = {
    id?: string
    title?: string | null
    message?: string | null
    type?: $Enums.NotificationType | null
    status?: $Enums.NotificationStatus | null
    image?: string | null
    createdAt?: Date | string | null
    isRead?: boolean | null
    owner?: OwnerCreateNestedOneWithoutNotificationsInput
    officer?: OfficerCreateNestedOneWithoutNotificationsInput
    police?: PoliceCreateNestedOneWithoutNotificationsInput
    report?: ReportCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    ownerId?: string | null
    officerId?: string | null
    policeId?: string | null
    title?: string | null
    message?: string | null
    type?: $Enums.NotificationType | null
    status?: $Enums.NotificationStatus | null
    image?: string | null
    reportId?: string | null
    createdAt?: Date | string | null
    isRead?: boolean | null
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    status?: NullableEnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    owner?: OwnerUpdateOneWithoutNotificationsNestedInput
    officer?: OfficerUpdateOneWithoutNotificationsNestedInput
    police?: PoliceUpdateOneWithoutNotificationsNestedInput
    report?: ReportUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    policeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    status?: NullableEnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    reportId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NotificationCreateManyInput = {
    id?: string
    ownerId?: string | null
    officerId?: string | null
    policeId?: string | null
    title?: string | null
    message?: string | null
    type?: $Enums.NotificationType | null
    status?: $Enums.NotificationStatus | null
    image?: string | null
    reportId?: string | null
    createdAt?: Date | string | null
    isRead?: boolean | null
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    status?: NullableEnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    policeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    status?: NullableEnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    reportId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AuditLogCreateInput = {
    id?: string
    entity?: string | null
    entityId?: string | null
    action?: string | null
    description?: string | null
    createdAt?: Date | string | null
    actorOwner?: OwnerCreateNestedOneWithoutAuditLogsInput
    actorOfficer?: OfficerCreateNestedOneWithoutAuditLogsInput
    actorPolice?: PoliceCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    entity?: string | null
    entityId?: string | null
    action?: string | null
    actorOwnerId?: string | null
    actorOfficerId?: string | null
    actorPoliceId?: string | null
    description?: string | null
    createdAt?: Date | string | null
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actorOwner?: OwnerUpdateOneWithoutAuditLogsNestedInput
    actorOfficer?: OfficerUpdateOneWithoutAuditLogsNestedInput
    actorPolice?: PoliceUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    actorOwnerId?: NullableStringFieldUpdateOperationsInput | string | null
    actorOfficerId?: NullableStringFieldUpdateOperationsInput | string | null
    actorPoliceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuditLogCreateManyInput = {
    id?: string
    entity?: string | null
    entityId?: string | null
    action?: string | null
    actorOwnerId?: string | null
    actorOfficerId?: string | null
    actorPoliceId?: string | null
    description?: string | null
    createdAt?: Date | string | null
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    actorOwnerId?: NullableStringFieldUpdateOperationsInput | string | null
    actorOfficerId?: NullableStringFieldUpdateOperationsInput | string | null
    actorPoliceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CCTVListRelationFilter = {
    every?: CCTVWhereInput
    some?: CCTVWhereInput
    none?: CCTVWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CCTVOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OwnerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    passwordHash?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type OwnerAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type OwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    passwordHash?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type OwnerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    passwordHash?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
  }

  export type OwnerSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumOfficerStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OfficerStatus | EnumOfficerStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.OfficerStatus[] | ListEnumOfficerStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OfficerStatus[] | ListEnumOfficerStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOfficerStatusNullableFilter<$PrismaModel> | $Enums.OfficerStatus | null
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type TrackingListRelationFilter = {
    every?: TrackingWhereInput
    some?: TrackingWhereInput
    none?: TrackingWhereInput
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfficerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    passwordHash?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    vehicleType?: SortOrder
    licensePlate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OfficerAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type OfficerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    passwordHash?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    vehicleType?: SortOrder
    licensePlate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OfficerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    passwordHash?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    vehicleType?: SortOrder
    licensePlate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type OfficerSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumOfficerStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfficerStatus | EnumOfficerStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.OfficerStatus[] | ListEnumOfficerStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OfficerStatus[] | ListEnumOfficerStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOfficerStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.OfficerStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOfficerStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumOfficerStatusNullableFilter<$PrismaModel>
  }

  export type EnumPoliceStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PoliceStatus | EnumPoliceStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PoliceStatus[] | ListEnumPoliceStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PoliceStatus[] | ListEnumPoliceStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPoliceStatusNullableFilter<$PrismaModel> | $Enums.PoliceStatus | null
  }

  export type PoliceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    passwordHash?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    officeName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PoliceAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type PoliceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    passwordHash?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    officeName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PoliceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    passwordHash?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    officeName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PoliceSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EnumPoliceStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PoliceStatus | EnumPoliceStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PoliceStatus[] | ListEnumPoliceStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PoliceStatus[] | ListEnumPoliceStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPoliceStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PoliceStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPoliceStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumPoliceStatusNullableFilter<$PrismaModel>
  }

  export type EnumCCTVStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CCTVStatus | EnumCCTVStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CCTVStatus[] | ListEnumCCTVStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CCTVStatus[] | ListEnumCCTVStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCCTVStatusNullableFilter<$PrismaModel> | $Enums.CCTVStatus | null
  }

  export type OwnerScalarRelationFilter = {
    is?: OwnerWhereInput
    isNot?: OwnerWhereInput
  }

  export type CCTVCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    description?: SortOrder
    IP?: SortOrder
    cameraType?: SortOrder
    streamUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CCTVMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    description?: SortOrder
    IP?: SortOrder
    cameraType?: SortOrder
    streamUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CCTVMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    description?: SortOrder
    IP?: SortOrder
    cameraType?: SortOrder
    streamUrl?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumCCTVStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CCTVStatus | EnumCCTVStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CCTVStatus[] | ListEnumCCTVStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CCTVStatus[] | ListEnumCCTVStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCCTVStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.CCTVStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCCTVStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumCCTVStatusNullableFilter<$PrismaModel>
  }

  export type EnumReportStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumReportStatusNullableFilter<$PrismaModel> | $Enums.ReportStatus | null
  }

  export type EnumIncidentTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentType | EnumIncidentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIncidentTypeNullableFilter<$PrismaModel> | $Enums.IncidentType | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type CCTVNullableScalarRelationFilter = {
    is?: CCTVWhereInput | null
    isNot?: CCTVWhereInput | null
  }

  export type EvidenceListRelationFilter = {
    every?: EvidenceWhereInput
    some?: EvidenceWhereInput
    none?: EvidenceWhereInput
  }

  export type EvidenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    cctvId?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    location?: SortOrder
    reportImage?: SortOrder
    incidentType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAssigned?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    cctvId?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    location?: SortOrder
    reportImage?: SortOrder
    incidentType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAssigned?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    cctvId?: SortOrder
    ownerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    location?: SortOrder
    reportImage?: SortOrder
    incidentType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isAssigned?: SortOrder
  }

  export type EnumReportStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumReportStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumReportStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumReportStatusNullableFilter<$PrismaModel>
  }

  export type EnumIncidentTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentType | EnumIncidentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIncidentTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.IncidentType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIncidentTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumIncidentTypeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ReportScalarRelationFilter = {
    is?: ReportWhereInput
    isNot?: ReportWhereInput
  }

  export type EvidenceCountOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    fileUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type EvidenceMaxOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    fileUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type EvidenceMinOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    fileUrl?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type OfficerScalarRelationFilter = {
    is?: OfficerWhereInput
    isNot?: OfficerWhereInput
  }

  export type PoliceNullableScalarRelationFilter = {
    is?: PoliceWhereInput | null
    isNot?: PoliceWhereInput | null
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    officerId?: SortOrder
    assignedBy?: SortOrder
    assignedAt?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    officerId?: SortOrder
    assignedBy?: SortOrder
    assignedAt?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    reportId?: SortOrder
    officerId?: SortOrder
    assignedBy?: SortOrder
    assignedAt?: SortOrder
  }

  export type EnumTrackingStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TrackingStatus | EnumTrackingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TrackingStatus[] | ListEnumTrackingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TrackingStatus[] | ListEnumTrackingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTrackingStatusNullableFilter<$PrismaModel> | $Enums.TrackingStatus | null
  }

  export type AssignmentScalarRelationFilter = {
    is?: AssignmentWhereInput
    isNot?: AssignmentWhereInput
  }

  export type TrackingCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    officerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timestamp?: SortOrder
    distance?: SortOrder
    estimatedTime?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrackingAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    distance?: SortOrder
  }

  export type TrackingMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    officerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timestamp?: SortOrder
    distance?: SortOrder
    estimatedTime?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrackingMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    officerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    timestamp?: SortOrder
    distance?: SortOrder
    estimatedTime?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrackingSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    distance?: SortOrder
  }

  export type EnumTrackingStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrackingStatus | EnumTrackingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TrackingStatus[] | ListEnumTrackingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TrackingStatus[] | ListEnumTrackingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTrackingStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.TrackingStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTrackingStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumTrackingStatusNullableFilter<$PrismaModel>
  }

  export type EnumNotificationTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotificationTypeNullableFilter<$PrismaModel> | $Enums.NotificationType | null
  }

  export type EnumNotificationStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotificationStatusNullableFilter<$PrismaModel> | $Enums.NotificationStatus | null
  }

  export type OwnerNullableScalarRelationFilter = {
    is?: OwnerWhereInput | null
    isNot?: OwnerWhereInput | null
  }

  export type OfficerNullableScalarRelationFilter = {
    is?: OfficerWhereInput | null
    isNot?: OfficerWhereInput | null
  }

  export type ReportNullableScalarRelationFilter = {
    is?: ReportWhereInput | null
    isNot?: ReportWhereInput | null
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    officerId?: SortOrder
    policeId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    status?: SortOrder
    image?: SortOrder
    reportId?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    officerId?: SortOrder
    policeId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    status?: SortOrder
    image?: SortOrder
    reportId?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    officerId?: SortOrder
    policeId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    type?: SortOrder
    status?: SortOrder
    image?: SortOrder
    reportId?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
  }

  export type EnumNotificationTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotificationTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeNullableFilter<$PrismaModel>
  }

  export type EnumNotificationStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotificationStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusNullableFilter<$PrismaModel>
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    actorOwnerId?: SortOrder
    actorOfficerId?: SortOrder
    actorPoliceId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    actorOwnerId?: SortOrder
    actorOfficerId?: SortOrder
    actorPoliceId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    actorOwnerId?: SortOrder
    actorOfficerId?: SortOrder
    actorPoliceId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CCTVCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CCTVCreateWithoutOwnerInput, CCTVUncheckedCreateWithoutOwnerInput> | CCTVCreateWithoutOwnerInput[] | CCTVUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CCTVCreateOrConnectWithoutOwnerInput | CCTVCreateOrConnectWithoutOwnerInput[]
    createMany?: CCTVCreateManyOwnerInputEnvelope
    connect?: CCTVWhereUniqueInput | CCTVWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ReportCreateWithoutOwnerInput, ReportUncheckedCreateWithoutOwnerInput> | ReportCreateWithoutOwnerInput[] | ReportUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutOwnerInput | ReportCreateOrConnectWithoutOwnerInput[]
    createMany?: ReportCreateManyOwnerInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutOwnerInput = {
    create?: XOR<NotificationCreateWithoutOwnerInput, NotificationUncheckedCreateWithoutOwnerInput> | NotificationCreateWithoutOwnerInput[] | NotificationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutOwnerInput | NotificationCreateOrConnectWithoutOwnerInput[]
    createMany?: NotificationCreateManyOwnerInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutActorOwnerInput = {
    create?: XOR<AuditLogCreateWithoutActorOwnerInput, AuditLogUncheckedCreateWithoutActorOwnerInput> | AuditLogCreateWithoutActorOwnerInput[] | AuditLogUncheckedCreateWithoutActorOwnerInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorOwnerInput | AuditLogCreateOrConnectWithoutActorOwnerInput[]
    createMany?: AuditLogCreateManyActorOwnerInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type CCTVUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<CCTVCreateWithoutOwnerInput, CCTVUncheckedCreateWithoutOwnerInput> | CCTVCreateWithoutOwnerInput[] | CCTVUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CCTVCreateOrConnectWithoutOwnerInput | CCTVCreateOrConnectWithoutOwnerInput[]
    createMany?: CCTVCreateManyOwnerInputEnvelope
    connect?: CCTVWhereUniqueInput | CCTVWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ReportCreateWithoutOwnerInput, ReportUncheckedCreateWithoutOwnerInput> | ReportCreateWithoutOwnerInput[] | ReportUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutOwnerInput | ReportCreateOrConnectWithoutOwnerInput[]
    createMany?: ReportCreateManyOwnerInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<NotificationCreateWithoutOwnerInput, NotificationUncheckedCreateWithoutOwnerInput> | NotificationCreateWithoutOwnerInput[] | NotificationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutOwnerInput | NotificationCreateOrConnectWithoutOwnerInput[]
    createMany?: NotificationCreateManyOwnerInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutActorOwnerInput = {
    create?: XOR<AuditLogCreateWithoutActorOwnerInput, AuditLogUncheckedCreateWithoutActorOwnerInput> | AuditLogCreateWithoutActorOwnerInput[] | AuditLogUncheckedCreateWithoutActorOwnerInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorOwnerInput | AuditLogCreateOrConnectWithoutActorOwnerInput[]
    createMany?: AuditLogCreateManyActorOwnerInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CCTVUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CCTVCreateWithoutOwnerInput, CCTVUncheckedCreateWithoutOwnerInput> | CCTVCreateWithoutOwnerInput[] | CCTVUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CCTVCreateOrConnectWithoutOwnerInput | CCTVCreateOrConnectWithoutOwnerInput[]
    upsert?: CCTVUpsertWithWhereUniqueWithoutOwnerInput | CCTVUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CCTVCreateManyOwnerInputEnvelope
    set?: CCTVWhereUniqueInput | CCTVWhereUniqueInput[]
    disconnect?: CCTVWhereUniqueInput | CCTVWhereUniqueInput[]
    delete?: CCTVWhereUniqueInput | CCTVWhereUniqueInput[]
    connect?: CCTVWhereUniqueInput | CCTVWhereUniqueInput[]
    update?: CCTVUpdateWithWhereUniqueWithoutOwnerInput | CCTVUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CCTVUpdateManyWithWhereWithoutOwnerInput | CCTVUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CCTVScalarWhereInput | CCTVScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ReportCreateWithoutOwnerInput, ReportUncheckedCreateWithoutOwnerInput> | ReportCreateWithoutOwnerInput[] | ReportUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutOwnerInput | ReportCreateOrConnectWithoutOwnerInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutOwnerInput | ReportUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ReportCreateManyOwnerInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutOwnerInput | ReportUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutOwnerInput | ReportUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<NotificationCreateWithoutOwnerInput, NotificationUncheckedCreateWithoutOwnerInput> | NotificationCreateWithoutOwnerInput[] | NotificationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutOwnerInput | NotificationCreateOrConnectWithoutOwnerInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutOwnerInput | NotificationUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: NotificationCreateManyOwnerInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutOwnerInput | NotificationUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutOwnerInput | NotificationUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutActorOwnerNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorOwnerInput, AuditLogUncheckedCreateWithoutActorOwnerInput> | AuditLogCreateWithoutActorOwnerInput[] | AuditLogUncheckedCreateWithoutActorOwnerInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorOwnerInput | AuditLogCreateOrConnectWithoutActorOwnerInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorOwnerInput | AuditLogUpsertWithWhereUniqueWithoutActorOwnerInput[]
    createMany?: AuditLogCreateManyActorOwnerInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorOwnerInput | AuditLogUpdateWithWhereUniqueWithoutActorOwnerInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorOwnerInput | AuditLogUpdateManyWithWhereWithoutActorOwnerInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type CCTVUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<CCTVCreateWithoutOwnerInput, CCTVUncheckedCreateWithoutOwnerInput> | CCTVCreateWithoutOwnerInput[] | CCTVUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: CCTVCreateOrConnectWithoutOwnerInput | CCTVCreateOrConnectWithoutOwnerInput[]
    upsert?: CCTVUpsertWithWhereUniqueWithoutOwnerInput | CCTVUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: CCTVCreateManyOwnerInputEnvelope
    set?: CCTVWhereUniqueInput | CCTVWhereUniqueInput[]
    disconnect?: CCTVWhereUniqueInput | CCTVWhereUniqueInput[]
    delete?: CCTVWhereUniqueInput | CCTVWhereUniqueInput[]
    connect?: CCTVWhereUniqueInput | CCTVWhereUniqueInput[]
    update?: CCTVUpdateWithWhereUniqueWithoutOwnerInput | CCTVUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: CCTVUpdateManyWithWhereWithoutOwnerInput | CCTVUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: CCTVScalarWhereInput | CCTVScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ReportCreateWithoutOwnerInput, ReportUncheckedCreateWithoutOwnerInput> | ReportCreateWithoutOwnerInput[] | ReportUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutOwnerInput | ReportCreateOrConnectWithoutOwnerInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutOwnerInput | ReportUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ReportCreateManyOwnerInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutOwnerInput | ReportUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutOwnerInput | ReportUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<NotificationCreateWithoutOwnerInput, NotificationUncheckedCreateWithoutOwnerInput> | NotificationCreateWithoutOwnerInput[] | NotificationUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutOwnerInput | NotificationCreateOrConnectWithoutOwnerInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutOwnerInput | NotificationUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: NotificationCreateManyOwnerInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutOwnerInput | NotificationUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutOwnerInput | NotificationUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutActorOwnerNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorOwnerInput, AuditLogUncheckedCreateWithoutActorOwnerInput> | AuditLogCreateWithoutActorOwnerInput[] | AuditLogUncheckedCreateWithoutActorOwnerInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorOwnerInput | AuditLogCreateOrConnectWithoutActorOwnerInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorOwnerInput | AuditLogUpsertWithWhereUniqueWithoutActorOwnerInput[]
    createMany?: AuditLogCreateManyActorOwnerInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorOwnerInput | AuditLogUpdateWithWhereUniqueWithoutActorOwnerInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorOwnerInput | AuditLogUpdateManyWithWhereWithoutActorOwnerInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type AssignmentCreateNestedManyWithoutOfficerInput = {
    create?: XOR<AssignmentCreateWithoutOfficerInput, AssignmentUncheckedCreateWithoutOfficerInput> | AssignmentCreateWithoutOfficerInput[] | AssignmentUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutOfficerInput | AssignmentCreateOrConnectWithoutOfficerInput[]
    createMany?: AssignmentCreateManyOfficerInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutOfficerInput = {
    create?: XOR<NotificationCreateWithoutOfficerInput, NotificationUncheckedCreateWithoutOfficerInput> | NotificationCreateWithoutOfficerInput[] | NotificationUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutOfficerInput | NotificationCreateOrConnectWithoutOfficerInput[]
    createMany?: NotificationCreateManyOfficerInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutActorOfficerInput = {
    create?: XOR<AuditLogCreateWithoutActorOfficerInput, AuditLogUncheckedCreateWithoutActorOfficerInput> | AuditLogCreateWithoutActorOfficerInput[] | AuditLogUncheckedCreateWithoutActorOfficerInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorOfficerInput | AuditLogCreateOrConnectWithoutActorOfficerInput[]
    createMany?: AuditLogCreateManyActorOfficerInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type TrackingCreateNestedManyWithoutOfficerInput = {
    create?: XOR<TrackingCreateWithoutOfficerInput, TrackingUncheckedCreateWithoutOfficerInput> | TrackingCreateWithoutOfficerInput[] | TrackingUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: TrackingCreateOrConnectWithoutOfficerInput | TrackingCreateOrConnectWithoutOfficerInput[]
    createMany?: TrackingCreateManyOfficerInputEnvelope
    connect?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutOfficerInput = {
    create?: XOR<AssignmentCreateWithoutOfficerInput, AssignmentUncheckedCreateWithoutOfficerInput> | AssignmentCreateWithoutOfficerInput[] | AssignmentUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutOfficerInput | AssignmentCreateOrConnectWithoutOfficerInput[]
    createMany?: AssignmentCreateManyOfficerInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutOfficerInput = {
    create?: XOR<NotificationCreateWithoutOfficerInput, NotificationUncheckedCreateWithoutOfficerInput> | NotificationCreateWithoutOfficerInput[] | NotificationUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutOfficerInput | NotificationCreateOrConnectWithoutOfficerInput[]
    createMany?: NotificationCreateManyOfficerInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutActorOfficerInput = {
    create?: XOR<AuditLogCreateWithoutActorOfficerInput, AuditLogUncheckedCreateWithoutActorOfficerInput> | AuditLogCreateWithoutActorOfficerInput[] | AuditLogUncheckedCreateWithoutActorOfficerInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorOfficerInput | AuditLogCreateOrConnectWithoutActorOfficerInput[]
    createMany?: AuditLogCreateManyActorOfficerInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type TrackingUncheckedCreateNestedManyWithoutOfficerInput = {
    create?: XOR<TrackingCreateWithoutOfficerInput, TrackingUncheckedCreateWithoutOfficerInput> | TrackingCreateWithoutOfficerInput[] | TrackingUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: TrackingCreateOrConnectWithoutOfficerInput | TrackingCreateOrConnectWithoutOfficerInput[]
    createMany?: TrackingCreateManyOfficerInputEnvelope
    connect?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
  }

  export type NullableEnumOfficerStatusFieldUpdateOperationsInput = {
    set?: $Enums.OfficerStatus | null
  }

  export type AssignmentUpdateManyWithoutOfficerNestedInput = {
    create?: XOR<AssignmentCreateWithoutOfficerInput, AssignmentUncheckedCreateWithoutOfficerInput> | AssignmentCreateWithoutOfficerInput[] | AssignmentUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutOfficerInput | AssignmentCreateOrConnectWithoutOfficerInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutOfficerInput | AssignmentUpsertWithWhereUniqueWithoutOfficerInput[]
    createMany?: AssignmentCreateManyOfficerInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutOfficerInput | AssignmentUpdateWithWhereUniqueWithoutOfficerInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutOfficerInput | AssignmentUpdateManyWithWhereWithoutOfficerInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutOfficerNestedInput = {
    create?: XOR<NotificationCreateWithoutOfficerInput, NotificationUncheckedCreateWithoutOfficerInput> | NotificationCreateWithoutOfficerInput[] | NotificationUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutOfficerInput | NotificationCreateOrConnectWithoutOfficerInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutOfficerInput | NotificationUpsertWithWhereUniqueWithoutOfficerInput[]
    createMany?: NotificationCreateManyOfficerInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutOfficerInput | NotificationUpdateWithWhereUniqueWithoutOfficerInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutOfficerInput | NotificationUpdateManyWithWhereWithoutOfficerInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutActorOfficerNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorOfficerInput, AuditLogUncheckedCreateWithoutActorOfficerInput> | AuditLogCreateWithoutActorOfficerInput[] | AuditLogUncheckedCreateWithoutActorOfficerInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorOfficerInput | AuditLogCreateOrConnectWithoutActorOfficerInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorOfficerInput | AuditLogUpsertWithWhereUniqueWithoutActorOfficerInput[]
    createMany?: AuditLogCreateManyActorOfficerInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorOfficerInput | AuditLogUpdateWithWhereUniqueWithoutActorOfficerInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorOfficerInput | AuditLogUpdateManyWithWhereWithoutActorOfficerInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type TrackingUpdateManyWithoutOfficerNestedInput = {
    create?: XOR<TrackingCreateWithoutOfficerInput, TrackingUncheckedCreateWithoutOfficerInput> | TrackingCreateWithoutOfficerInput[] | TrackingUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: TrackingCreateOrConnectWithoutOfficerInput | TrackingCreateOrConnectWithoutOfficerInput[]
    upsert?: TrackingUpsertWithWhereUniqueWithoutOfficerInput | TrackingUpsertWithWhereUniqueWithoutOfficerInput[]
    createMany?: TrackingCreateManyOfficerInputEnvelope
    set?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
    disconnect?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
    delete?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
    connect?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
    update?: TrackingUpdateWithWhereUniqueWithoutOfficerInput | TrackingUpdateWithWhereUniqueWithoutOfficerInput[]
    updateMany?: TrackingUpdateManyWithWhereWithoutOfficerInput | TrackingUpdateManyWithWhereWithoutOfficerInput[]
    deleteMany?: TrackingScalarWhereInput | TrackingScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutOfficerNestedInput = {
    create?: XOR<AssignmentCreateWithoutOfficerInput, AssignmentUncheckedCreateWithoutOfficerInput> | AssignmentCreateWithoutOfficerInput[] | AssignmentUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutOfficerInput | AssignmentCreateOrConnectWithoutOfficerInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutOfficerInput | AssignmentUpsertWithWhereUniqueWithoutOfficerInput[]
    createMany?: AssignmentCreateManyOfficerInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutOfficerInput | AssignmentUpdateWithWhereUniqueWithoutOfficerInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutOfficerInput | AssignmentUpdateManyWithWhereWithoutOfficerInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutOfficerNestedInput = {
    create?: XOR<NotificationCreateWithoutOfficerInput, NotificationUncheckedCreateWithoutOfficerInput> | NotificationCreateWithoutOfficerInput[] | NotificationUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutOfficerInput | NotificationCreateOrConnectWithoutOfficerInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutOfficerInput | NotificationUpsertWithWhereUniqueWithoutOfficerInput[]
    createMany?: NotificationCreateManyOfficerInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutOfficerInput | NotificationUpdateWithWhereUniqueWithoutOfficerInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutOfficerInput | NotificationUpdateManyWithWhereWithoutOfficerInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutActorOfficerNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorOfficerInput, AuditLogUncheckedCreateWithoutActorOfficerInput> | AuditLogCreateWithoutActorOfficerInput[] | AuditLogUncheckedCreateWithoutActorOfficerInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorOfficerInput | AuditLogCreateOrConnectWithoutActorOfficerInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorOfficerInput | AuditLogUpsertWithWhereUniqueWithoutActorOfficerInput[]
    createMany?: AuditLogCreateManyActorOfficerInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorOfficerInput | AuditLogUpdateWithWhereUniqueWithoutActorOfficerInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorOfficerInput | AuditLogUpdateManyWithWhereWithoutActorOfficerInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type TrackingUncheckedUpdateManyWithoutOfficerNestedInput = {
    create?: XOR<TrackingCreateWithoutOfficerInput, TrackingUncheckedCreateWithoutOfficerInput> | TrackingCreateWithoutOfficerInput[] | TrackingUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: TrackingCreateOrConnectWithoutOfficerInput | TrackingCreateOrConnectWithoutOfficerInput[]
    upsert?: TrackingUpsertWithWhereUniqueWithoutOfficerInput | TrackingUpsertWithWhereUniqueWithoutOfficerInput[]
    createMany?: TrackingCreateManyOfficerInputEnvelope
    set?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
    disconnect?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
    delete?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
    connect?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
    update?: TrackingUpdateWithWhereUniqueWithoutOfficerInput | TrackingUpdateWithWhereUniqueWithoutOfficerInput[]
    updateMany?: TrackingUpdateManyWithWhereWithoutOfficerInput | TrackingUpdateManyWithWhereWithoutOfficerInput[]
    deleteMany?: TrackingScalarWhereInput | TrackingScalarWhereInput[]
  }

  export type AssignmentCreateNestedManyWithoutAssignedByPoliceInput = {
    create?: XOR<AssignmentCreateWithoutAssignedByPoliceInput, AssignmentUncheckedCreateWithoutAssignedByPoliceInput> | AssignmentCreateWithoutAssignedByPoliceInput[] | AssignmentUncheckedCreateWithoutAssignedByPoliceInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutAssignedByPoliceInput | AssignmentCreateOrConnectWithoutAssignedByPoliceInput[]
    createMany?: AssignmentCreateManyAssignedByPoliceInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutPoliceInput = {
    create?: XOR<NotificationCreateWithoutPoliceInput, NotificationUncheckedCreateWithoutPoliceInput> | NotificationCreateWithoutPoliceInput[] | NotificationUncheckedCreateWithoutPoliceInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPoliceInput | NotificationCreateOrConnectWithoutPoliceInput[]
    createMany?: NotificationCreateManyPoliceInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutActorPoliceInput = {
    create?: XOR<AuditLogCreateWithoutActorPoliceInput, AuditLogUncheckedCreateWithoutActorPoliceInput> | AuditLogCreateWithoutActorPoliceInput[] | AuditLogUncheckedCreateWithoutActorPoliceInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorPoliceInput | AuditLogCreateOrConnectWithoutActorPoliceInput[]
    createMany?: AuditLogCreateManyActorPoliceInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutAssignedByPoliceInput = {
    create?: XOR<AssignmentCreateWithoutAssignedByPoliceInput, AssignmentUncheckedCreateWithoutAssignedByPoliceInput> | AssignmentCreateWithoutAssignedByPoliceInput[] | AssignmentUncheckedCreateWithoutAssignedByPoliceInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutAssignedByPoliceInput | AssignmentCreateOrConnectWithoutAssignedByPoliceInput[]
    createMany?: AssignmentCreateManyAssignedByPoliceInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutPoliceInput = {
    create?: XOR<NotificationCreateWithoutPoliceInput, NotificationUncheckedCreateWithoutPoliceInput> | NotificationCreateWithoutPoliceInput[] | NotificationUncheckedCreateWithoutPoliceInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPoliceInput | NotificationCreateOrConnectWithoutPoliceInput[]
    createMany?: NotificationCreateManyPoliceInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutActorPoliceInput = {
    create?: XOR<AuditLogCreateWithoutActorPoliceInput, AuditLogUncheckedCreateWithoutActorPoliceInput> | AuditLogCreateWithoutActorPoliceInput[] | AuditLogUncheckedCreateWithoutActorPoliceInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorPoliceInput | AuditLogCreateOrConnectWithoutActorPoliceInput[]
    createMany?: AuditLogCreateManyActorPoliceInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type NullableEnumPoliceStatusFieldUpdateOperationsInput = {
    set?: $Enums.PoliceStatus | null
  }

  export type AssignmentUpdateManyWithoutAssignedByPoliceNestedInput = {
    create?: XOR<AssignmentCreateWithoutAssignedByPoliceInput, AssignmentUncheckedCreateWithoutAssignedByPoliceInput> | AssignmentCreateWithoutAssignedByPoliceInput[] | AssignmentUncheckedCreateWithoutAssignedByPoliceInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutAssignedByPoliceInput | AssignmentCreateOrConnectWithoutAssignedByPoliceInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutAssignedByPoliceInput | AssignmentUpsertWithWhereUniqueWithoutAssignedByPoliceInput[]
    createMany?: AssignmentCreateManyAssignedByPoliceInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutAssignedByPoliceInput | AssignmentUpdateWithWhereUniqueWithoutAssignedByPoliceInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutAssignedByPoliceInput | AssignmentUpdateManyWithWhereWithoutAssignedByPoliceInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutPoliceNestedInput = {
    create?: XOR<NotificationCreateWithoutPoliceInput, NotificationUncheckedCreateWithoutPoliceInput> | NotificationCreateWithoutPoliceInput[] | NotificationUncheckedCreateWithoutPoliceInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPoliceInput | NotificationCreateOrConnectWithoutPoliceInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutPoliceInput | NotificationUpsertWithWhereUniqueWithoutPoliceInput[]
    createMany?: NotificationCreateManyPoliceInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutPoliceInput | NotificationUpdateWithWhereUniqueWithoutPoliceInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutPoliceInput | NotificationUpdateManyWithWhereWithoutPoliceInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutActorPoliceNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorPoliceInput, AuditLogUncheckedCreateWithoutActorPoliceInput> | AuditLogCreateWithoutActorPoliceInput[] | AuditLogUncheckedCreateWithoutActorPoliceInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorPoliceInput | AuditLogCreateOrConnectWithoutActorPoliceInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorPoliceInput | AuditLogUpsertWithWhereUniqueWithoutActorPoliceInput[]
    createMany?: AuditLogCreateManyActorPoliceInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorPoliceInput | AuditLogUpdateWithWhereUniqueWithoutActorPoliceInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorPoliceInput | AuditLogUpdateManyWithWhereWithoutActorPoliceInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutAssignedByPoliceNestedInput = {
    create?: XOR<AssignmentCreateWithoutAssignedByPoliceInput, AssignmentUncheckedCreateWithoutAssignedByPoliceInput> | AssignmentCreateWithoutAssignedByPoliceInput[] | AssignmentUncheckedCreateWithoutAssignedByPoliceInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutAssignedByPoliceInput | AssignmentCreateOrConnectWithoutAssignedByPoliceInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutAssignedByPoliceInput | AssignmentUpsertWithWhereUniqueWithoutAssignedByPoliceInput[]
    createMany?: AssignmentCreateManyAssignedByPoliceInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutAssignedByPoliceInput | AssignmentUpdateWithWhereUniqueWithoutAssignedByPoliceInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutAssignedByPoliceInput | AssignmentUpdateManyWithWhereWithoutAssignedByPoliceInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutPoliceNestedInput = {
    create?: XOR<NotificationCreateWithoutPoliceInput, NotificationUncheckedCreateWithoutPoliceInput> | NotificationCreateWithoutPoliceInput[] | NotificationUncheckedCreateWithoutPoliceInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutPoliceInput | NotificationCreateOrConnectWithoutPoliceInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutPoliceInput | NotificationUpsertWithWhereUniqueWithoutPoliceInput[]
    createMany?: NotificationCreateManyPoliceInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutPoliceInput | NotificationUpdateWithWhereUniqueWithoutPoliceInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutPoliceInput | NotificationUpdateManyWithWhereWithoutPoliceInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutActorPoliceNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorPoliceInput, AuditLogUncheckedCreateWithoutActorPoliceInput> | AuditLogCreateWithoutActorPoliceInput[] | AuditLogUncheckedCreateWithoutActorPoliceInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorPoliceInput | AuditLogCreateOrConnectWithoutActorPoliceInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorPoliceInput | AuditLogUpsertWithWhereUniqueWithoutActorPoliceInput[]
    createMany?: AuditLogCreateManyActorPoliceInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorPoliceInput | AuditLogUpdateWithWhereUniqueWithoutActorPoliceInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorPoliceInput | AuditLogUpdateManyWithWhereWithoutActorPoliceInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type OwnerCreateNestedOneWithoutCctvsInput = {
    create?: XOR<OwnerCreateWithoutCctvsInput, OwnerUncheckedCreateWithoutCctvsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutCctvsInput
    connect?: OwnerWhereUniqueInput
  }

  export type ReportCreateNestedManyWithoutCctvInput = {
    create?: XOR<ReportCreateWithoutCctvInput, ReportUncheckedCreateWithoutCctvInput> | ReportCreateWithoutCctvInput[] | ReportUncheckedCreateWithoutCctvInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutCctvInput | ReportCreateOrConnectWithoutCctvInput[]
    createMany?: ReportCreateManyCctvInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutCctvInput = {
    create?: XOR<ReportCreateWithoutCctvInput, ReportUncheckedCreateWithoutCctvInput> | ReportCreateWithoutCctvInput[] | ReportUncheckedCreateWithoutCctvInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutCctvInput | ReportCreateOrConnectWithoutCctvInput[]
    createMany?: ReportCreateManyCctvInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type NullableEnumCCTVStatusFieldUpdateOperationsInput = {
    set?: $Enums.CCTVStatus | null
  }

  export type OwnerUpdateOneRequiredWithoutCctvsNestedInput = {
    create?: XOR<OwnerCreateWithoutCctvsInput, OwnerUncheckedCreateWithoutCctvsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutCctvsInput
    upsert?: OwnerUpsertWithoutCctvsInput
    connect?: OwnerWhereUniqueInput
    update?: XOR<XOR<OwnerUpdateToOneWithWhereWithoutCctvsInput, OwnerUpdateWithoutCctvsInput>, OwnerUncheckedUpdateWithoutCctvsInput>
  }

  export type ReportUpdateManyWithoutCctvNestedInput = {
    create?: XOR<ReportCreateWithoutCctvInput, ReportUncheckedCreateWithoutCctvInput> | ReportCreateWithoutCctvInput[] | ReportUncheckedCreateWithoutCctvInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutCctvInput | ReportCreateOrConnectWithoutCctvInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutCctvInput | ReportUpsertWithWhereUniqueWithoutCctvInput[]
    createMany?: ReportCreateManyCctvInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutCctvInput | ReportUpdateWithWhereUniqueWithoutCctvInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutCctvInput | ReportUpdateManyWithWhereWithoutCctvInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutCctvNestedInput = {
    create?: XOR<ReportCreateWithoutCctvInput, ReportUncheckedCreateWithoutCctvInput> | ReportCreateWithoutCctvInput[] | ReportUncheckedCreateWithoutCctvInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutCctvInput | ReportCreateOrConnectWithoutCctvInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutCctvInput | ReportUpsertWithWhereUniqueWithoutCctvInput[]
    createMany?: ReportCreateManyCctvInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutCctvInput | ReportUpdateWithWhereUniqueWithoutCctvInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutCctvInput | ReportUpdateManyWithWhereWithoutCctvInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type CCTVCreateNestedOneWithoutReportsInput = {
    create?: XOR<CCTVCreateWithoutReportsInput, CCTVUncheckedCreateWithoutReportsInput>
    connectOrCreate?: CCTVCreateOrConnectWithoutReportsInput
    connect?: CCTVWhereUniqueInput
  }

  export type OwnerCreateNestedOneWithoutReportsInput = {
    create?: XOR<OwnerCreateWithoutReportsInput, OwnerUncheckedCreateWithoutReportsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutReportsInput
    connect?: OwnerWhereUniqueInput
  }

  export type EvidenceCreateNestedManyWithoutReportInput = {
    create?: XOR<EvidenceCreateWithoutReportInput, EvidenceUncheckedCreateWithoutReportInput> | EvidenceCreateWithoutReportInput[] | EvidenceUncheckedCreateWithoutReportInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutReportInput | EvidenceCreateOrConnectWithoutReportInput[]
    createMany?: EvidenceCreateManyReportInputEnvelope
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutReportInput = {
    create?: XOR<AssignmentCreateWithoutReportInput, AssignmentUncheckedCreateWithoutReportInput> | AssignmentCreateWithoutReportInput[] | AssignmentUncheckedCreateWithoutReportInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutReportInput | AssignmentCreateOrConnectWithoutReportInput[]
    createMany?: AssignmentCreateManyReportInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutReportInput = {
    create?: XOR<NotificationCreateWithoutReportInput, NotificationUncheckedCreateWithoutReportInput> | NotificationCreateWithoutReportInput[] | NotificationUncheckedCreateWithoutReportInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReportInput | NotificationCreateOrConnectWithoutReportInput[]
    createMany?: NotificationCreateManyReportInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EvidenceUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<EvidenceCreateWithoutReportInput, EvidenceUncheckedCreateWithoutReportInput> | EvidenceCreateWithoutReportInput[] | EvidenceUncheckedCreateWithoutReportInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutReportInput | EvidenceCreateOrConnectWithoutReportInput[]
    createMany?: EvidenceCreateManyReportInputEnvelope
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<AssignmentCreateWithoutReportInput, AssignmentUncheckedCreateWithoutReportInput> | AssignmentCreateWithoutReportInput[] | AssignmentUncheckedCreateWithoutReportInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutReportInput | AssignmentCreateOrConnectWithoutReportInput[]
    createMany?: AssignmentCreateManyReportInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<NotificationCreateWithoutReportInput, NotificationUncheckedCreateWithoutReportInput> | NotificationCreateWithoutReportInput[] | NotificationUncheckedCreateWithoutReportInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReportInput | NotificationCreateOrConnectWithoutReportInput[]
    createMany?: NotificationCreateManyReportInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NullableEnumReportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReportStatus | null
  }

  export type NullableEnumIncidentTypeFieldUpdateOperationsInput = {
    set?: $Enums.IncidentType | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type CCTVUpdateOneWithoutReportsNestedInput = {
    create?: XOR<CCTVCreateWithoutReportsInput, CCTVUncheckedCreateWithoutReportsInput>
    connectOrCreate?: CCTVCreateOrConnectWithoutReportsInput
    upsert?: CCTVUpsertWithoutReportsInput
    disconnect?: CCTVWhereInput | boolean
    delete?: CCTVWhereInput | boolean
    connect?: CCTVWhereUniqueInput
    update?: XOR<XOR<CCTVUpdateToOneWithWhereWithoutReportsInput, CCTVUpdateWithoutReportsInput>, CCTVUncheckedUpdateWithoutReportsInput>
  }

  export type OwnerUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<OwnerCreateWithoutReportsInput, OwnerUncheckedCreateWithoutReportsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutReportsInput
    upsert?: OwnerUpsertWithoutReportsInput
    connect?: OwnerWhereUniqueInput
    update?: XOR<XOR<OwnerUpdateToOneWithWhereWithoutReportsInput, OwnerUpdateWithoutReportsInput>, OwnerUncheckedUpdateWithoutReportsInput>
  }

  export type EvidenceUpdateManyWithoutReportNestedInput = {
    create?: XOR<EvidenceCreateWithoutReportInput, EvidenceUncheckedCreateWithoutReportInput> | EvidenceCreateWithoutReportInput[] | EvidenceUncheckedCreateWithoutReportInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutReportInput | EvidenceCreateOrConnectWithoutReportInput[]
    upsert?: EvidenceUpsertWithWhereUniqueWithoutReportInput | EvidenceUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: EvidenceCreateManyReportInputEnvelope
    set?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    disconnect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    delete?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    update?: EvidenceUpdateWithWhereUniqueWithoutReportInput | EvidenceUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: EvidenceUpdateManyWithWhereWithoutReportInput | EvidenceUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutReportNestedInput = {
    create?: XOR<AssignmentCreateWithoutReportInput, AssignmentUncheckedCreateWithoutReportInput> | AssignmentCreateWithoutReportInput[] | AssignmentUncheckedCreateWithoutReportInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutReportInput | AssignmentCreateOrConnectWithoutReportInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutReportInput | AssignmentUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: AssignmentCreateManyReportInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutReportInput | AssignmentUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutReportInput | AssignmentUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutReportNestedInput = {
    create?: XOR<NotificationCreateWithoutReportInput, NotificationUncheckedCreateWithoutReportInput> | NotificationCreateWithoutReportInput[] | NotificationUncheckedCreateWithoutReportInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReportInput | NotificationCreateOrConnectWithoutReportInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutReportInput | NotificationUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: NotificationCreateManyReportInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutReportInput | NotificationUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutReportInput | NotificationUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type EvidenceUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<EvidenceCreateWithoutReportInput, EvidenceUncheckedCreateWithoutReportInput> | EvidenceCreateWithoutReportInput[] | EvidenceUncheckedCreateWithoutReportInput[]
    connectOrCreate?: EvidenceCreateOrConnectWithoutReportInput | EvidenceCreateOrConnectWithoutReportInput[]
    upsert?: EvidenceUpsertWithWhereUniqueWithoutReportInput | EvidenceUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: EvidenceCreateManyReportInputEnvelope
    set?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    disconnect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    delete?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    connect?: EvidenceWhereUniqueInput | EvidenceWhereUniqueInput[]
    update?: EvidenceUpdateWithWhereUniqueWithoutReportInput | EvidenceUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: EvidenceUpdateManyWithWhereWithoutReportInput | EvidenceUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<AssignmentCreateWithoutReportInput, AssignmentUncheckedCreateWithoutReportInput> | AssignmentCreateWithoutReportInput[] | AssignmentUncheckedCreateWithoutReportInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutReportInput | AssignmentCreateOrConnectWithoutReportInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutReportInput | AssignmentUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: AssignmentCreateManyReportInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutReportInput | AssignmentUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutReportInput | AssignmentUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<NotificationCreateWithoutReportInput, NotificationUncheckedCreateWithoutReportInput> | NotificationCreateWithoutReportInput[] | NotificationUncheckedCreateWithoutReportInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutReportInput | NotificationCreateOrConnectWithoutReportInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutReportInput | NotificationUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: NotificationCreateManyReportInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutReportInput | NotificationUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutReportInput | NotificationUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type ReportCreateNestedOneWithoutEvidencesInput = {
    create?: XOR<ReportCreateWithoutEvidencesInput, ReportUncheckedCreateWithoutEvidencesInput>
    connectOrCreate?: ReportCreateOrConnectWithoutEvidencesInput
    connect?: ReportWhereUniqueInput
  }

  export type ReportUpdateOneRequiredWithoutEvidencesNestedInput = {
    create?: XOR<ReportCreateWithoutEvidencesInput, ReportUncheckedCreateWithoutEvidencesInput>
    connectOrCreate?: ReportCreateOrConnectWithoutEvidencesInput
    upsert?: ReportUpsertWithoutEvidencesInput
    connect?: ReportWhereUniqueInput
    update?: XOR<XOR<ReportUpdateToOneWithWhereWithoutEvidencesInput, ReportUpdateWithoutEvidencesInput>, ReportUncheckedUpdateWithoutEvidencesInput>
  }

  export type ReportCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<ReportCreateWithoutAssignmentsInput, ReportUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ReportCreateOrConnectWithoutAssignmentsInput
    connect?: ReportWhereUniqueInput
  }

  export type OfficerCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<OfficerCreateWithoutAssignmentsInput, OfficerUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: OfficerCreateOrConnectWithoutAssignmentsInput
    connect?: OfficerWhereUniqueInput
  }

  export type PoliceCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<PoliceCreateWithoutAssignmentsInput, PoliceUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: PoliceCreateOrConnectWithoutAssignmentsInput
    connect?: PoliceWhereUniqueInput
  }

  export type TrackingCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<TrackingCreateWithoutAssignmentInput, TrackingUncheckedCreateWithoutAssignmentInput> | TrackingCreateWithoutAssignmentInput[] | TrackingUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: TrackingCreateOrConnectWithoutAssignmentInput | TrackingCreateOrConnectWithoutAssignmentInput[]
    createMany?: TrackingCreateManyAssignmentInputEnvelope
    connect?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
  }

  export type TrackingUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<TrackingCreateWithoutAssignmentInput, TrackingUncheckedCreateWithoutAssignmentInput> | TrackingCreateWithoutAssignmentInput[] | TrackingUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: TrackingCreateOrConnectWithoutAssignmentInput | TrackingCreateOrConnectWithoutAssignmentInput[]
    createMany?: TrackingCreateManyAssignmentInputEnvelope
    connect?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
  }

  export type ReportUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<ReportCreateWithoutAssignmentsInput, ReportUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ReportCreateOrConnectWithoutAssignmentsInput
    upsert?: ReportUpsertWithoutAssignmentsInput
    connect?: ReportWhereUniqueInput
    update?: XOR<XOR<ReportUpdateToOneWithWhereWithoutAssignmentsInput, ReportUpdateWithoutAssignmentsInput>, ReportUncheckedUpdateWithoutAssignmentsInput>
  }

  export type OfficerUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<OfficerCreateWithoutAssignmentsInput, OfficerUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: OfficerCreateOrConnectWithoutAssignmentsInput
    upsert?: OfficerUpsertWithoutAssignmentsInput
    connect?: OfficerWhereUniqueInput
    update?: XOR<XOR<OfficerUpdateToOneWithWhereWithoutAssignmentsInput, OfficerUpdateWithoutAssignmentsInput>, OfficerUncheckedUpdateWithoutAssignmentsInput>
  }

  export type PoliceUpdateOneWithoutAssignmentsNestedInput = {
    create?: XOR<PoliceCreateWithoutAssignmentsInput, PoliceUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: PoliceCreateOrConnectWithoutAssignmentsInput
    upsert?: PoliceUpsertWithoutAssignmentsInput
    disconnect?: PoliceWhereInput | boolean
    delete?: PoliceWhereInput | boolean
    connect?: PoliceWhereUniqueInput
    update?: XOR<XOR<PoliceUpdateToOneWithWhereWithoutAssignmentsInput, PoliceUpdateWithoutAssignmentsInput>, PoliceUncheckedUpdateWithoutAssignmentsInput>
  }

  export type TrackingUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<TrackingCreateWithoutAssignmentInput, TrackingUncheckedCreateWithoutAssignmentInput> | TrackingCreateWithoutAssignmentInput[] | TrackingUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: TrackingCreateOrConnectWithoutAssignmentInput | TrackingCreateOrConnectWithoutAssignmentInput[]
    upsert?: TrackingUpsertWithWhereUniqueWithoutAssignmentInput | TrackingUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: TrackingCreateManyAssignmentInputEnvelope
    set?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
    disconnect?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
    delete?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
    connect?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
    update?: TrackingUpdateWithWhereUniqueWithoutAssignmentInput | TrackingUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: TrackingUpdateManyWithWhereWithoutAssignmentInput | TrackingUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: TrackingScalarWhereInput | TrackingScalarWhereInput[]
  }

  export type TrackingUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<TrackingCreateWithoutAssignmentInput, TrackingUncheckedCreateWithoutAssignmentInput> | TrackingCreateWithoutAssignmentInput[] | TrackingUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: TrackingCreateOrConnectWithoutAssignmentInput | TrackingCreateOrConnectWithoutAssignmentInput[]
    upsert?: TrackingUpsertWithWhereUniqueWithoutAssignmentInput | TrackingUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: TrackingCreateManyAssignmentInputEnvelope
    set?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
    disconnect?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
    delete?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
    connect?: TrackingWhereUniqueInput | TrackingWhereUniqueInput[]
    update?: TrackingUpdateWithWhereUniqueWithoutAssignmentInput | TrackingUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: TrackingUpdateManyWithWhereWithoutAssignmentInput | TrackingUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: TrackingScalarWhereInput | TrackingScalarWhereInput[]
  }

  export type AssignmentCreateNestedOneWithoutTrackingsInput = {
    create?: XOR<AssignmentCreateWithoutTrackingsInput, AssignmentUncheckedCreateWithoutTrackingsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutTrackingsInput
    connect?: AssignmentWhereUniqueInput
  }

  export type OfficerCreateNestedOneWithoutTrackingsInput = {
    create?: XOR<OfficerCreateWithoutTrackingsInput, OfficerUncheckedCreateWithoutTrackingsInput>
    connectOrCreate?: OfficerCreateOrConnectWithoutTrackingsInput
    connect?: OfficerWhereUniqueInput
  }

  export type NullableEnumTrackingStatusFieldUpdateOperationsInput = {
    set?: $Enums.TrackingStatus | null
  }

  export type AssignmentUpdateOneRequiredWithoutTrackingsNestedInput = {
    create?: XOR<AssignmentCreateWithoutTrackingsInput, AssignmentUncheckedCreateWithoutTrackingsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutTrackingsInput
    upsert?: AssignmentUpsertWithoutTrackingsInput
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutTrackingsInput, AssignmentUpdateWithoutTrackingsInput>, AssignmentUncheckedUpdateWithoutTrackingsInput>
  }

  export type OfficerUpdateOneRequiredWithoutTrackingsNestedInput = {
    create?: XOR<OfficerCreateWithoutTrackingsInput, OfficerUncheckedCreateWithoutTrackingsInput>
    connectOrCreate?: OfficerCreateOrConnectWithoutTrackingsInput
    upsert?: OfficerUpsertWithoutTrackingsInput
    connect?: OfficerWhereUniqueInput
    update?: XOR<XOR<OfficerUpdateToOneWithWhereWithoutTrackingsInput, OfficerUpdateWithoutTrackingsInput>, OfficerUncheckedUpdateWithoutTrackingsInput>
  }

  export type OwnerCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<OwnerCreateWithoutNotificationsInput, OwnerUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutNotificationsInput
    connect?: OwnerWhereUniqueInput
  }

  export type OfficerCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<OfficerCreateWithoutNotificationsInput, OfficerUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: OfficerCreateOrConnectWithoutNotificationsInput
    connect?: OfficerWhereUniqueInput
  }

  export type PoliceCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<PoliceCreateWithoutNotificationsInput, PoliceUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: PoliceCreateOrConnectWithoutNotificationsInput
    connect?: PoliceWhereUniqueInput
  }

  export type ReportCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<ReportCreateWithoutNotificationsInput, ReportUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ReportCreateOrConnectWithoutNotificationsInput
    connect?: ReportWhereUniqueInput
  }

  export type NullableEnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType | null
  }

  export type NullableEnumNotificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.NotificationStatus | null
  }

  export type OwnerUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<OwnerCreateWithoutNotificationsInput, OwnerUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutNotificationsInput
    upsert?: OwnerUpsertWithoutNotificationsInput
    disconnect?: OwnerWhereInput | boolean
    delete?: OwnerWhereInput | boolean
    connect?: OwnerWhereUniqueInput
    update?: XOR<XOR<OwnerUpdateToOneWithWhereWithoutNotificationsInput, OwnerUpdateWithoutNotificationsInput>, OwnerUncheckedUpdateWithoutNotificationsInput>
  }

  export type OfficerUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<OfficerCreateWithoutNotificationsInput, OfficerUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: OfficerCreateOrConnectWithoutNotificationsInput
    upsert?: OfficerUpsertWithoutNotificationsInput
    disconnect?: OfficerWhereInput | boolean
    delete?: OfficerWhereInput | boolean
    connect?: OfficerWhereUniqueInput
    update?: XOR<XOR<OfficerUpdateToOneWithWhereWithoutNotificationsInput, OfficerUpdateWithoutNotificationsInput>, OfficerUncheckedUpdateWithoutNotificationsInput>
  }

  export type PoliceUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<PoliceCreateWithoutNotificationsInput, PoliceUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: PoliceCreateOrConnectWithoutNotificationsInput
    upsert?: PoliceUpsertWithoutNotificationsInput
    disconnect?: PoliceWhereInput | boolean
    delete?: PoliceWhereInput | boolean
    connect?: PoliceWhereUniqueInput
    update?: XOR<XOR<PoliceUpdateToOneWithWhereWithoutNotificationsInput, PoliceUpdateWithoutNotificationsInput>, PoliceUncheckedUpdateWithoutNotificationsInput>
  }

  export type ReportUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<ReportCreateWithoutNotificationsInput, ReportUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: ReportCreateOrConnectWithoutNotificationsInput
    upsert?: ReportUpsertWithoutNotificationsInput
    disconnect?: ReportWhereInput | boolean
    delete?: ReportWhereInput | boolean
    connect?: ReportWhereUniqueInput
    update?: XOR<XOR<ReportUpdateToOneWithWhereWithoutNotificationsInput, ReportUpdateWithoutNotificationsInput>, ReportUncheckedUpdateWithoutNotificationsInput>
  }

  export type OwnerCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<OwnerCreateWithoutAuditLogsInput, OwnerUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutAuditLogsInput
    connect?: OwnerWhereUniqueInput
  }

  export type OfficerCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<OfficerCreateWithoutAuditLogsInput, OfficerUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: OfficerCreateOrConnectWithoutAuditLogsInput
    connect?: OfficerWhereUniqueInput
  }

  export type PoliceCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<PoliceCreateWithoutAuditLogsInput, PoliceUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: PoliceCreateOrConnectWithoutAuditLogsInput
    connect?: PoliceWhereUniqueInput
  }

  export type OwnerUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<OwnerCreateWithoutAuditLogsInput, OwnerUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: OwnerCreateOrConnectWithoutAuditLogsInput
    upsert?: OwnerUpsertWithoutAuditLogsInput
    disconnect?: OwnerWhereInput | boolean
    delete?: OwnerWhereInput | boolean
    connect?: OwnerWhereUniqueInput
    update?: XOR<XOR<OwnerUpdateToOneWithWhereWithoutAuditLogsInput, OwnerUpdateWithoutAuditLogsInput>, OwnerUncheckedUpdateWithoutAuditLogsInput>
  }

  export type OfficerUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<OfficerCreateWithoutAuditLogsInput, OfficerUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: OfficerCreateOrConnectWithoutAuditLogsInput
    upsert?: OfficerUpsertWithoutAuditLogsInput
    disconnect?: OfficerWhereInput | boolean
    delete?: OfficerWhereInput | boolean
    connect?: OfficerWhereUniqueInput
    update?: XOR<XOR<OfficerUpdateToOneWithWhereWithoutAuditLogsInput, OfficerUpdateWithoutAuditLogsInput>, OfficerUncheckedUpdateWithoutAuditLogsInput>
  }

  export type PoliceUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<PoliceCreateWithoutAuditLogsInput, PoliceUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: PoliceCreateOrConnectWithoutAuditLogsInput
    upsert?: PoliceUpsertWithoutAuditLogsInput
    disconnect?: PoliceWhereInput | boolean
    delete?: PoliceWhereInput | boolean
    connect?: PoliceWhereUniqueInput
    update?: XOR<XOR<PoliceUpdateToOneWithWhereWithoutAuditLogsInput, PoliceUpdateWithoutAuditLogsInput>, PoliceUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumOfficerStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.OfficerStatus | EnumOfficerStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.OfficerStatus[] | ListEnumOfficerStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OfficerStatus[] | ListEnumOfficerStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOfficerStatusNullableFilter<$PrismaModel> | $Enums.OfficerStatus | null
  }

  export type NestedEnumOfficerStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfficerStatus | EnumOfficerStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.OfficerStatus[] | ListEnumOfficerStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.OfficerStatus[] | ListEnumOfficerStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumOfficerStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.OfficerStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumOfficerStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumOfficerStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumPoliceStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PoliceStatus | EnumPoliceStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PoliceStatus[] | ListEnumPoliceStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PoliceStatus[] | ListEnumPoliceStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPoliceStatusNullableFilter<$PrismaModel> | $Enums.PoliceStatus | null
  }

  export type NestedEnumPoliceStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PoliceStatus | EnumPoliceStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PoliceStatus[] | ListEnumPoliceStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PoliceStatus[] | ListEnumPoliceStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPoliceStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PoliceStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPoliceStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumPoliceStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumCCTVStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CCTVStatus | EnumCCTVStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CCTVStatus[] | ListEnumCCTVStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CCTVStatus[] | ListEnumCCTVStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCCTVStatusNullableFilter<$PrismaModel> | $Enums.CCTVStatus | null
  }

  export type NestedEnumCCTVStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CCTVStatus | EnumCCTVStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.CCTVStatus[] | ListEnumCCTVStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CCTVStatus[] | ListEnumCCTVStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCCTVStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.CCTVStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCCTVStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumCCTVStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumReportStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumReportStatusNullableFilter<$PrismaModel> | $Enums.ReportStatus | null
  }

  export type NestedEnumIncidentTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentType | EnumIncidentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIncidentTypeNullableFilter<$PrismaModel> | $Enums.IncidentType | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumReportStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumReportStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumReportStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumReportStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumIncidentTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncidentType | EnumIncidentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.IncidentType[] | ListEnumIncidentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumIncidentTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.IncidentType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumIncidentTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumIncidentTypeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumTrackingStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TrackingStatus | EnumTrackingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TrackingStatus[] | ListEnumTrackingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TrackingStatus[] | ListEnumTrackingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTrackingStatusNullableFilter<$PrismaModel> | $Enums.TrackingStatus | null
  }

  export type NestedEnumTrackingStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrackingStatus | EnumTrackingStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.TrackingStatus[] | ListEnumTrackingStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TrackingStatus[] | ListEnumTrackingStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTrackingStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.TrackingStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTrackingStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumTrackingStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotificationTypeNullableFilter<$PrismaModel> | $Enums.NotificationType | null
  }

  export type NestedEnumNotificationStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotificationStatusNullableFilter<$PrismaModel> | $Enums.NotificationStatus | null
  }

  export type NestedEnumNotificationTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotificationTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumNotificationStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.NotificationStatus[] | ListEnumNotificationStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumNotificationStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusNullableFilter<$PrismaModel>
  }

  export type CCTVCreateWithoutOwnerInput = {
    id?: string
    name?: string | null
    location?: string | null
    description?: string | null
    IP?: string | null
    cameraType?: string | null
    streamUrl?: string | null
    status?: $Enums.CCTVStatus | null
    createdAt?: Date | string | null
    reports?: ReportCreateNestedManyWithoutCctvInput
  }

  export type CCTVUncheckedCreateWithoutOwnerInput = {
    id?: string
    name?: string | null
    location?: string | null
    description?: string | null
    IP?: string | null
    cameraType?: string | null
    streamUrl?: string | null
    status?: $Enums.CCTVStatus | null
    createdAt?: Date | string | null
    reports?: ReportUncheckedCreateNestedManyWithoutCctvInput
  }

  export type CCTVCreateOrConnectWithoutOwnerInput = {
    where: CCTVWhereUniqueInput
    create: XOR<CCTVCreateWithoutOwnerInput, CCTVUncheckedCreateWithoutOwnerInput>
  }

  export type CCTVCreateManyOwnerInputEnvelope = {
    data: CCTVCreateManyOwnerInput | CCTVCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutOwnerInput = {
    id?: string
    title?: string | null
    description?: string | null
    status?: $Enums.ReportStatus | null
    location?: string | null
    reportImage?: string | null
    incidentType?: $Enums.IncidentType | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isAssigned?: boolean | null
    cctv?: CCTVCreateNestedOneWithoutReportsInput
    evidences?: EvidenceCreateNestedManyWithoutReportInput
    assignments?: AssignmentCreateNestedManyWithoutReportInput
    notifications?: NotificationCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutOwnerInput = {
    id?: string
    cctvId?: string | null
    title?: string | null
    description?: string | null
    status?: $Enums.ReportStatus | null
    location?: string | null
    reportImage?: string | null
    incidentType?: $Enums.IncidentType | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isAssigned?: boolean | null
    evidences?: EvidenceUncheckedCreateNestedManyWithoutReportInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutReportInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutOwnerInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutOwnerInput, ReportUncheckedCreateWithoutOwnerInput>
  }

  export type ReportCreateManyOwnerInputEnvelope = {
    data: ReportCreateManyOwnerInput | ReportCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutOwnerInput = {
    id?: string
    title?: string | null
    message?: string | null
    type?: $Enums.NotificationType | null
    status?: $Enums.NotificationStatus | null
    image?: string | null
    createdAt?: Date | string | null
    isRead?: boolean | null
    officer?: OfficerCreateNestedOneWithoutNotificationsInput
    police?: PoliceCreateNestedOneWithoutNotificationsInput
    report?: ReportCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutOwnerInput = {
    id?: string
    officerId?: string | null
    policeId?: string | null
    title?: string | null
    message?: string | null
    type?: $Enums.NotificationType | null
    status?: $Enums.NotificationStatus | null
    image?: string | null
    reportId?: string | null
    createdAt?: Date | string | null
    isRead?: boolean | null
  }

  export type NotificationCreateOrConnectWithoutOwnerInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutOwnerInput, NotificationUncheckedCreateWithoutOwnerInput>
  }

  export type NotificationCreateManyOwnerInputEnvelope = {
    data: NotificationCreateManyOwnerInput | NotificationCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutActorOwnerInput = {
    id?: string
    entity?: string | null
    entityId?: string | null
    action?: string | null
    description?: string | null
    createdAt?: Date | string | null
    actorOfficer?: OfficerCreateNestedOneWithoutAuditLogsInput
    actorPolice?: PoliceCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutActorOwnerInput = {
    id?: string
    entity?: string | null
    entityId?: string | null
    action?: string | null
    actorOfficerId?: string | null
    actorPoliceId?: string | null
    description?: string | null
    createdAt?: Date | string | null
  }

  export type AuditLogCreateOrConnectWithoutActorOwnerInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutActorOwnerInput, AuditLogUncheckedCreateWithoutActorOwnerInput>
  }

  export type AuditLogCreateManyActorOwnerInputEnvelope = {
    data: AuditLogCreateManyActorOwnerInput | AuditLogCreateManyActorOwnerInput[]
    skipDuplicates?: boolean
  }

  export type CCTVUpsertWithWhereUniqueWithoutOwnerInput = {
    where: CCTVWhereUniqueInput
    update: XOR<CCTVUpdateWithoutOwnerInput, CCTVUncheckedUpdateWithoutOwnerInput>
    create: XOR<CCTVCreateWithoutOwnerInput, CCTVUncheckedCreateWithoutOwnerInput>
  }

  export type CCTVUpdateWithWhereUniqueWithoutOwnerInput = {
    where: CCTVWhereUniqueInput
    data: XOR<CCTVUpdateWithoutOwnerInput, CCTVUncheckedUpdateWithoutOwnerInput>
  }

  export type CCTVUpdateManyWithWhereWithoutOwnerInput = {
    where: CCTVScalarWhereInput
    data: XOR<CCTVUpdateManyMutationInput, CCTVUncheckedUpdateManyWithoutOwnerInput>
  }

  export type CCTVScalarWhereInput = {
    AND?: CCTVScalarWhereInput | CCTVScalarWhereInput[]
    OR?: CCTVScalarWhereInput[]
    NOT?: CCTVScalarWhereInput | CCTVScalarWhereInput[]
    id?: StringFilter<"CCTV"> | string
    ownerId?: StringFilter<"CCTV"> | string
    name?: StringNullableFilter<"CCTV"> | string | null
    location?: StringNullableFilter<"CCTV"> | string | null
    description?: StringNullableFilter<"CCTV"> | string | null
    IP?: StringNullableFilter<"CCTV"> | string | null
    cameraType?: StringNullableFilter<"CCTV"> | string | null
    streamUrl?: StringNullableFilter<"CCTV"> | string | null
    status?: EnumCCTVStatusNullableFilter<"CCTV"> | $Enums.CCTVStatus | null
    createdAt?: DateTimeNullableFilter<"CCTV"> | Date | string | null
  }

  export type ReportUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutOwnerInput, ReportUncheckedUpdateWithoutOwnerInput>
    create: XOR<ReportCreateWithoutOwnerInput, ReportUncheckedCreateWithoutOwnerInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutOwnerInput, ReportUncheckedUpdateWithoutOwnerInput>
  }

  export type ReportUpdateManyWithWhereWithoutOwnerInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    cctvId?: StringNullableFilter<"Report"> | string | null
    ownerId?: StringFilter<"Report"> | string
    title?: StringNullableFilter<"Report"> | string | null
    description?: StringNullableFilter<"Report"> | string | null
    status?: EnumReportStatusNullableFilter<"Report"> | $Enums.ReportStatus | null
    location?: StringNullableFilter<"Report"> | string | null
    reportImage?: StringNullableFilter<"Report"> | string | null
    incidentType?: EnumIncidentTypeNullableFilter<"Report"> | $Enums.IncidentType | null
    createdAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    isAssigned?: BoolNullableFilter<"Report"> | boolean | null
  }

  export type NotificationUpsertWithWhereUniqueWithoutOwnerInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutOwnerInput, NotificationUncheckedUpdateWithoutOwnerInput>
    create: XOR<NotificationCreateWithoutOwnerInput, NotificationUncheckedCreateWithoutOwnerInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutOwnerInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutOwnerInput, NotificationUncheckedUpdateWithoutOwnerInput>
  }

  export type NotificationUpdateManyWithWhereWithoutOwnerInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutOwnerInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    ownerId?: StringNullableFilter<"Notification"> | string | null
    officerId?: StringNullableFilter<"Notification"> | string | null
    policeId?: StringNullableFilter<"Notification"> | string | null
    title?: StringNullableFilter<"Notification"> | string | null
    message?: StringNullableFilter<"Notification"> | string | null
    type?: EnumNotificationTypeNullableFilter<"Notification"> | $Enums.NotificationType | null
    status?: EnumNotificationStatusNullableFilter<"Notification"> | $Enums.NotificationStatus | null
    image?: StringNullableFilter<"Notification"> | string | null
    reportId?: StringNullableFilter<"Notification"> | string | null
    createdAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    isRead?: BoolNullableFilter<"Notification"> | boolean | null
  }

  export type AuditLogUpsertWithWhereUniqueWithoutActorOwnerInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutActorOwnerInput, AuditLogUncheckedUpdateWithoutActorOwnerInput>
    create: XOR<AuditLogCreateWithoutActorOwnerInput, AuditLogUncheckedCreateWithoutActorOwnerInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutActorOwnerInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutActorOwnerInput, AuditLogUncheckedUpdateWithoutActorOwnerInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutActorOwnerInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutActorOwnerInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    entity?: StringNullableFilter<"AuditLog"> | string | null
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringNullableFilter<"AuditLog"> | string | null
    actorOwnerId?: StringNullableFilter<"AuditLog"> | string | null
    actorOfficerId?: StringNullableFilter<"AuditLog"> | string | null
    actorPoliceId?: StringNullableFilter<"AuditLog"> | string | null
    description?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeNullableFilter<"AuditLog"> | Date | string | null
  }

  export type AssignmentCreateWithoutOfficerInput = {
    id?: string
    assignedAt?: Date | string | null
    report: ReportCreateNestedOneWithoutAssignmentsInput
    assignedByPolice?: PoliceCreateNestedOneWithoutAssignmentsInput
    trackings?: TrackingCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutOfficerInput = {
    id?: string
    reportId: string
    assignedBy?: string | null
    assignedAt?: Date | string | null
    trackings?: TrackingUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutOfficerInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutOfficerInput, AssignmentUncheckedCreateWithoutOfficerInput>
  }

  export type AssignmentCreateManyOfficerInputEnvelope = {
    data: AssignmentCreateManyOfficerInput | AssignmentCreateManyOfficerInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutOfficerInput = {
    id?: string
    title?: string | null
    message?: string | null
    type?: $Enums.NotificationType | null
    status?: $Enums.NotificationStatus | null
    image?: string | null
    createdAt?: Date | string | null
    isRead?: boolean | null
    owner?: OwnerCreateNestedOneWithoutNotificationsInput
    police?: PoliceCreateNestedOneWithoutNotificationsInput
    report?: ReportCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutOfficerInput = {
    id?: string
    ownerId?: string | null
    policeId?: string | null
    title?: string | null
    message?: string | null
    type?: $Enums.NotificationType | null
    status?: $Enums.NotificationStatus | null
    image?: string | null
    reportId?: string | null
    createdAt?: Date | string | null
    isRead?: boolean | null
  }

  export type NotificationCreateOrConnectWithoutOfficerInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutOfficerInput, NotificationUncheckedCreateWithoutOfficerInput>
  }

  export type NotificationCreateManyOfficerInputEnvelope = {
    data: NotificationCreateManyOfficerInput | NotificationCreateManyOfficerInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutActorOfficerInput = {
    id?: string
    entity?: string | null
    entityId?: string | null
    action?: string | null
    description?: string | null
    createdAt?: Date | string | null
    actorOwner?: OwnerCreateNestedOneWithoutAuditLogsInput
    actorPolice?: PoliceCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutActorOfficerInput = {
    id?: string
    entity?: string | null
    entityId?: string | null
    action?: string | null
    actorOwnerId?: string | null
    actorPoliceId?: string | null
    description?: string | null
    createdAt?: Date | string | null
  }

  export type AuditLogCreateOrConnectWithoutActorOfficerInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutActorOfficerInput, AuditLogUncheckedCreateWithoutActorOfficerInput>
  }

  export type AuditLogCreateManyActorOfficerInputEnvelope = {
    data: AuditLogCreateManyActorOfficerInput | AuditLogCreateManyActorOfficerInput[]
    skipDuplicates?: boolean
  }

  export type TrackingCreateWithoutOfficerInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
    timestamp?: Date | string | null
    distance?: number | null
    estimatedTime?: string | null
    status?: $Enums.TrackingStatus | null
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    assignment: AssignmentCreateNestedOneWithoutTrackingsInput
  }

  export type TrackingUncheckedCreateWithoutOfficerInput = {
    id?: string
    assignmentId: string
    latitude?: number | null
    longitude?: number | null
    timestamp?: Date | string | null
    distance?: number | null
    estimatedTime?: string | null
    status?: $Enums.TrackingStatus | null
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type TrackingCreateOrConnectWithoutOfficerInput = {
    where: TrackingWhereUniqueInput
    create: XOR<TrackingCreateWithoutOfficerInput, TrackingUncheckedCreateWithoutOfficerInput>
  }

  export type TrackingCreateManyOfficerInputEnvelope = {
    data: TrackingCreateManyOfficerInput | TrackingCreateManyOfficerInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentUpsertWithWhereUniqueWithoutOfficerInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutOfficerInput, AssignmentUncheckedUpdateWithoutOfficerInput>
    create: XOR<AssignmentCreateWithoutOfficerInput, AssignmentUncheckedCreateWithoutOfficerInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutOfficerInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutOfficerInput, AssignmentUncheckedUpdateWithoutOfficerInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutOfficerInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutOfficerInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    id?: StringFilter<"Assignment"> | string
    reportId?: StringFilter<"Assignment"> | string
    officerId?: StringFilter<"Assignment"> | string
    assignedBy?: StringNullableFilter<"Assignment"> | string | null
    assignedAt?: DateTimeNullableFilter<"Assignment"> | Date | string | null
  }

  export type NotificationUpsertWithWhereUniqueWithoutOfficerInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutOfficerInput, NotificationUncheckedUpdateWithoutOfficerInput>
    create: XOR<NotificationCreateWithoutOfficerInput, NotificationUncheckedCreateWithoutOfficerInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutOfficerInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutOfficerInput, NotificationUncheckedUpdateWithoutOfficerInput>
  }

  export type NotificationUpdateManyWithWhereWithoutOfficerInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutOfficerInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutActorOfficerInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutActorOfficerInput, AuditLogUncheckedUpdateWithoutActorOfficerInput>
    create: XOR<AuditLogCreateWithoutActorOfficerInput, AuditLogUncheckedCreateWithoutActorOfficerInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutActorOfficerInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutActorOfficerInput, AuditLogUncheckedUpdateWithoutActorOfficerInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutActorOfficerInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutActorOfficerInput>
  }

  export type TrackingUpsertWithWhereUniqueWithoutOfficerInput = {
    where: TrackingWhereUniqueInput
    update: XOR<TrackingUpdateWithoutOfficerInput, TrackingUncheckedUpdateWithoutOfficerInput>
    create: XOR<TrackingCreateWithoutOfficerInput, TrackingUncheckedCreateWithoutOfficerInput>
  }

  export type TrackingUpdateWithWhereUniqueWithoutOfficerInput = {
    where: TrackingWhereUniqueInput
    data: XOR<TrackingUpdateWithoutOfficerInput, TrackingUncheckedUpdateWithoutOfficerInput>
  }

  export type TrackingUpdateManyWithWhereWithoutOfficerInput = {
    where: TrackingScalarWhereInput
    data: XOR<TrackingUpdateManyMutationInput, TrackingUncheckedUpdateManyWithoutOfficerInput>
  }

  export type TrackingScalarWhereInput = {
    AND?: TrackingScalarWhereInput | TrackingScalarWhereInput[]
    OR?: TrackingScalarWhereInput[]
    NOT?: TrackingScalarWhereInput | TrackingScalarWhereInput[]
    id?: StringFilter<"Tracking"> | string
    assignmentId?: StringFilter<"Tracking"> | string
    officerId?: StringFilter<"Tracking"> | string
    latitude?: FloatNullableFilter<"Tracking"> | number | null
    longitude?: FloatNullableFilter<"Tracking"> | number | null
    timestamp?: DateTimeNullableFilter<"Tracking"> | Date | string | null
    distance?: FloatNullableFilter<"Tracking"> | number | null
    estimatedTime?: StringNullableFilter<"Tracking"> | string | null
    status?: EnumTrackingStatusNullableFilter<"Tracking"> | $Enums.TrackingStatus | null
    description?: StringNullableFilter<"Tracking"> | string | null
    createdAt?: DateTimeNullableFilter<"Tracking"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Tracking"> | Date | string | null
  }

  export type AssignmentCreateWithoutAssignedByPoliceInput = {
    id?: string
    assignedAt?: Date | string | null
    report: ReportCreateNestedOneWithoutAssignmentsInput
    officer: OfficerCreateNestedOneWithoutAssignmentsInput
    trackings?: TrackingCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutAssignedByPoliceInput = {
    id?: string
    reportId: string
    officerId: string
    assignedAt?: Date | string | null
    trackings?: TrackingUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutAssignedByPoliceInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutAssignedByPoliceInput, AssignmentUncheckedCreateWithoutAssignedByPoliceInput>
  }

  export type AssignmentCreateManyAssignedByPoliceInputEnvelope = {
    data: AssignmentCreateManyAssignedByPoliceInput | AssignmentCreateManyAssignedByPoliceInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutPoliceInput = {
    id?: string
    title?: string | null
    message?: string | null
    type?: $Enums.NotificationType | null
    status?: $Enums.NotificationStatus | null
    image?: string | null
    createdAt?: Date | string | null
    isRead?: boolean | null
    owner?: OwnerCreateNestedOneWithoutNotificationsInput
    officer?: OfficerCreateNestedOneWithoutNotificationsInput
    report?: ReportCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutPoliceInput = {
    id?: string
    ownerId?: string | null
    officerId?: string | null
    title?: string | null
    message?: string | null
    type?: $Enums.NotificationType | null
    status?: $Enums.NotificationStatus | null
    image?: string | null
    reportId?: string | null
    createdAt?: Date | string | null
    isRead?: boolean | null
  }

  export type NotificationCreateOrConnectWithoutPoliceInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutPoliceInput, NotificationUncheckedCreateWithoutPoliceInput>
  }

  export type NotificationCreateManyPoliceInputEnvelope = {
    data: NotificationCreateManyPoliceInput | NotificationCreateManyPoliceInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutActorPoliceInput = {
    id?: string
    entity?: string | null
    entityId?: string | null
    action?: string | null
    description?: string | null
    createdAt?: Date | string | null
    actorOwner?: OwnerCreateNestedOneWithoutAuditLogsInput
    actorOfficer?: OfficerCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutActorPoliceInput = {
    id?: string
    entity?: string | null
    entityId?: string | null
    action?: string | null
    actorOwnerId?: string | null
    actorOfficerId?: string | null
    description?: string | null
    createdAt?: Date | string | null
  }

  export type AuditLogCreateOrConnectWithoutActorPoliceInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutActorPoliceInput, AuditLogUncheckedCreateWithoutActorPoliceInput>
  }

  export type AuditLogCreateManyActorPoliceInputEnvelope = {
    data: AuditLogCreateManyActorPoliceInput | AuditLogCreateManyActorPoliceInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentUpsertWithWhereUniqueWithoutAssignedByPoliceInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutAssignedByPoliceInput, AssignmentUncheckedUpdateWithoutAssignedByPoliceInput>
    create: XOR<AssignmentCreateWithoutAssignedByPoliceInput, AssignmentUncheckedCreateWithoutAssignedByPoliceInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutAssignedByPoliceInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutAssignedByPoliceInput, AssignmentUncheckedUpdateWithoutAssignedByPoliceInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutAssignedByPoliceInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutAssignedByPoliceInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutPoliceInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutPoliceInput, NotificationUncheckedUpdateWithoutPoliceInput>
    create: XOR<NotificationCreateWithoutPoliceInput, NotificationUncheckedCreateWithoutPoliceInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutPoliceInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutPoliceInput, NotificationUncheckedUpdateWithoutPoliceInput>
  }

  export type NotificationUpdateManyWithWhereWithoutPoliceInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutPoliceInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutActorPoliceInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutActorPoliceInput, AuditLogUncheckedUpdateWithoutActorPoliceInput>
    create: XOR<AuditLogCreateWithoutActorPoliceInput, AuditLogUncheckedCreateWithoutActorPoliceInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutActorPoliceInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutActorPoliceInput, AuditLogUncheckedUpdateWithoutActorPoliceInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutActorPoliceInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutActorPoliceInput>
  }

  export type OwnerCreateWithoutCctvsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string | null
    reports?: ReportCreateNestedManyWithoutOwnerInput
    notifications?: NotificationCreateNestedManyWithoutOwnerInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorOwnerInput
  }

  export type OwnerUncheckedCreateWithoutCctvsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string | null
    reports?: ReportUncheckedCreateNestedManyWithoutOwnerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutOwnerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorOwnerInput
  }

  export type OwnerCreateOrConnectWithoutCctvsInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutCctvsInput, OwnerUncheckedCreateWithoutCctvsInput>
  }

  export type ReportCreateWithoutCctvInput = {
    id?: string
    title?: string | null
    description?: string | null
    status?: $Enums.ReportStatus | null
    location?: string | null
    reportImage?: string | null
    incidentType?: $Enums.IncidentType | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isAssigned?: boolean | null
    owner: OwnerCreateNestedOneWithoutReportsInput
    evidences?: EvidenceCreateNestedManyWithoutReportInput
    assignments?: AssignmentCreateNestedManyWithoutReportInput
    notifications?: NotificationCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutCctvInput = {
    id?: string
    ownerId: string
    title?: string | null
    description?: string | null
    status?: $Enums.ReportStatus | null
    location?: string | null
    reportImage?: string | null
    incidentType?: $Enums.IncidentType | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isAssigned?: boolean | null
    evidences?: EvidenceUncheckedCreateNestedManyWithoutReportInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutReportInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutCctvInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutCctvInput, ReportUncheckedCreateWithoutCctvInput>
  }

  export type ReportCreateManyCctvInputEnvelope = {
    data: ReportCreateManyCctvInput | ReportCreateManyCctvInput[]
    skipDuplicates?: boolean
  }

  export type OwnerUpsertWithoutCctvsInput = {
    update: XOR<OwnerUpdateWithoutCctvsInput, OwnerUncheckedUpdateWithoutCctvsInput>
    create: XOR<OwnerCreateWithoutCctvsInput, OwnerUncheckedCreateWithoutCctvsInput>
    where?: OwnerWhereInput
  }

  export type OwnerUpdateToOneWithWhereWithoutCctvsInput = {
    where?: OwnerWhereInput
    data: XOR<OwnerUpdateWithoutCctvsInput, OwnerUncheckedUpdateWithoutCctvsInput>
  }

  export type OwnerUpdateWithoutCctvsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUpdateManyWithoutOwnerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorOwnerNestedInput
  }

  export type OwnerUncheckedUpdateWithoutCctvsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUncheckedUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutOwnerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorOwnerNestedInput
  }

  export type ReportUpsertWithWhereUniqueWithoutCctvInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutCctvInput, ReportUncheckedUpdateWithoutCctvInput>
    create: XOR<ReportCreateWithoutCctvInput, ReportUncheckedCreateWithoutCctvInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutCctvInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutCctvInput, ReportUncheckedUpdateWithoutCctvInput>
  }

  export type ReportUpdateManyWithWhereWithoutCctvInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutCctvInput>
  }

  export type CCTVCreateWithoutReportsInput = {
    id?: string
    name?: string | null
    location?: string | null
    description?: string | null
    IP?: string | null
    cameraType?: string | null
    streamUrl?: string | null
    status?: $Enums.CCTVStatus | null
    createdAt?: Date | string | null
    owner: OwnerCreateNestedOneWithoutCctvsInput
  }

  export type CCTVUncheckedCreateWithoutReportsInput = {
    id?: string
    ownerId: string
    name?: string | null
    location?: string | null
    description?: string | null
    IP?: string | null
    cameraType?: string | null
    streamUrl?: string | null
    status?: $Enums.CCTVStatus | null
    createdAt?: Date | string | null
  }

  export type CCTVCreateOrConnectWithoutReportsInput = {
    where: CCTVWhereUniqueInput
    create: XOR<CCTVCreateWithoutReportsInput, CCTVUncheckedCreateWithoutReportsInput>
  }

  export type OwnerCreateWithoutReportsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string | null
    cctvs?: CCTVCreateNestedManyWithoutOwnerInput
    notifications?: NotificationCreateNestedManyWithoutOwnerInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorOwnerInput
  }

  export type OwnerUncheckedCreateWithoutReportsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string | null
    cctvs?: CCTVUncheckedCreateNestedManyWithoutOwnerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutOwnerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorOwnerInput
  }

  export type OwnerCreateOrConnectWithoutReportsInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutReportsInput, OwnerUncheckedCreateWithoutReportsInput>
  }

  export type EvidenceCreateWithoutReportInput = {
    id?: string
    fileUrl?: string | null
    type?: string | null
    createdAt?: Date | string | null
  }

  export type EvidenceUncheckedCreateWithoutReportInput = {
    id?: string
    fileUrl?: string | null
    type?: string | null
    createdAt?: Date | string | null
  }

  export type EvidenceCreateOrConnectWithoutReportInput = {
    where: EvidenceWhereUniqueInput
    create: XOR<EvidenceCreateWithoutReportInput, EvidenceUncheckedCreateWithoutReportInput>
  }

  export type EvidenceCreateManyReportInputEnvelope = {
    data: EvidenceCreateManyReportInput | EvidenceCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutReportInput = {
    id?: string
    assignedAt?: Date | string | null
    officer: OfficerCreateNestedOneWithoutAssignmentsInput
    assignedByPolice?: PoliceCreateNestedOneWithoutAssignmentsInput
    trackings?: TrackingCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutReportInput = {
    id?: string
    officerId: string
    assignedBy?: string | null
    assignedAt?: Date | string | null
    trackings?: TrackingUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutReportInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutReportInput, AssignmentUncheckedCreateWithoutReportInput>
  }

  export type AssignmentCreateManyReportInputEnvelope = {
    data: AssignmentCreateManyReportInput | AssignmentCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutReportInput = {
    id?: string
    title?: string | null
    message?: string | null
    type?: $Enums.NotificationType | null
    status?: $Enums.NotificationStatus | null
    image?: string | null
    createdAt?: Date | string | null
    isRead?: boolean | null
    owner?: OwnerCreateNestedOneWithoutNotificationsInput
    officer?: OfficerCreateNestedOneWithoutNotificationsInput
    police?: PoliceCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutReportInput = {
    id?: string
    ownerId?: string | null
    officerId?: string | null
    policeId?: string | null
    title?: string | null
    message?: string | null
    type?: $Enums.NotificationType | null
    status?: $Enums.NotificationStatus | null
    image?: string | null
    createdAt?: Date | string | null
    isRead?: boolean | null
  }

  export type NotificationCreateOrConnectWithoutReportInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutReportInput, NotificationUncheckedCreateWithoutReportInput>
  }

  export type NotificationCreateManyReportInputEnvelope = {
    data: NotificationCreateManyReportInput | NotificationCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type CCTVUpsertWithoutReportsInput = {
    update: XOR<CCTVUpdateWithoutReportsInput, CCTVUncheckedUpdateWithoutReportsInput>
    create: XOR<CCTVCreateWithoutReportsInput, CCTVUncheckedCreateWithoutReportsInput>
    where?: CCTVWhereInput
  }

  export type CCTVUpdateToOneWithWhereWithoutReportsInput = {
    where?: CCTVWhereInput
    data: XOR<CCTVUpdateWithoutReportsInput, CCTVUncheckedUpdateWithoutReportsInput>
  }

  export type CCTVUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    IP?: NullableStringFieldUpdateOperationsInput | string | null
    cameraType?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCCTVStatusFieldUpdateOperationsInput | $Enums.CCTVStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: OwnerUpdateOneRequiredWithoutCctvsNestedInput
  }

  export type CCTVUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    IP?: NullableStringFieldUpdateOperationsInput | string | null
    cameraType?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCCTVStatusFieldUpdateOperationsInput | $Enums.CCTVStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OwnerUpsertWithoutReportsInput = {
    update: XOR<OwnerUpdateWithoutReportsInput, OwnerUncheckedUpdateWithoutReportsInput>
    create: XOR<OwnerCreateWithoutReportsInput, OwnerUncheckedCreateWithoutReportsInput>
    where?: OwnerWhereInput
  }

  export type OwnerUpdateToOneWithWhereWithoutReportsInput = {
    where?: OwnerWhereInput
    data: XOR<OwnerUpdateWithoutReportsInput, OwnerUncheckedUpdateWithoutReportsInput>
  }

  export type OwnerUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cctvs?: CCTVUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUpdateManyWithoutOwnerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorOwnerNestedInput
  }

  export type OwnerUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cctvs?: CCTVUncheckedUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutOwnerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorOwnerNestedInput
  }

  export type EvidenceUpsertWithWhereUniqueWithoutReportInput = {
    where: EvidenceWhereUniqueInput
    update: XOR<EvidenceUpdateWithoutReportInput, EvidenceUncheckedUpdateWithoutReportInput>
    create: XOR<EvidenceCreateWithoutReportInput, EvidenceUncheckedCreateWithoutReportInput>
  }

  export type EvidenceUpdateWithWhereUniqueWithoutReportInput = {
    where: EvidenceWhereUniqueInput
    data: XOR<EvidenceUpdateWithoutReportInput, EvidenceUncheckedUpdateWithoutReportInput>
  }

  export type EvidenceUpdateManyWithWhereWithoutReportInput = {
    where: EvidenceScalarWhereInput
    data: XOR<EvidenceUpdateManyMutationInput, EvidenceUncheckedUpdateManyWithoutReportInput>
  }

  export type EvidenceScalarWhereInput = {
    AND?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
    OR?: EvidenceScalarWhereInput[]
    NOT?: EvidenceScalarWhereInput | EvidenceScalarWhereInput[]
    id?: StringFilter<"Evidence"> | string
    reportId?: StringFilter<"Evidence"> | string
    fileUrl?: StringNullableFilter<"Evidence"> | string | null
    type?: StringNullableFilter<"Evidence"> | string | null
    createdAt?: DateTimeNullableFilter<"Evidence"> | Date | string | null
  }

  export type AssignmentUpsertWithWhereUniqueWithoutReportInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutReportInput, AssignmentUncheckedUpdateWithoutReportInput>
    create: XOR<AssignmentCreateWithoutReportInput, AssignmentUncheckedCreateWithoutReportInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutReportInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutReportInput, AssignmentUncheckedUpdateWithoutReportInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutReportInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutReportInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutReportInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutReportInput, NotificationUncheckedUpdateWithoutReportInput>
    create: XOR<NotificationCreateWithoutReportInput, NotificationUncheckedCreateWithoutReportInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutReportInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutReportInput, NotificationUncheckedUpdateWithoutReportInput>
  }

  export type NotificationUpdateManyWithWhereWithoutReportInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutReportInput>
  }

  export type ReportCreateWithoutEvidencesInput = {
    id?: string
    title?: string | null
    description?: string | null
    status?: $Enums.ReportStatus | null
    location?: string | null
    reportImage?: string | null
    incidentType?: $Enums.IncidentType | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isAssigned?: boolean | null
    cctv?: CCTVCreateNestedOneWithoutReportsInput
    owner: OwnerCreateNestedOneWithoutReportsInput
    assignments?: AssignmentCreateNestedManyWithoutReportInput
    notifications?: NotificationCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutEvidencesInput = {
    id?: string
    cctvId?: string | null
    ownerId: string
    title?: string | null
    description?: string | null
    status?: $Enums.ReportStatus | null
    location?: string | null
    reportImage?: string | null
    incidentType?: $Enums.IncidentType | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isAssigned?: boolean | null
    assignments?: AssignmentUncheckedCreateNestedManyWithoutReportInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutEvidencesInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutEvidencesInput, ReportUncheckedCreateWithoutEvidencesInput>
  }

  export type ReportUpsertWithoutEvidencesInput = {
    update: XOR<ReportUpdateWithoutEvidencesInput, ReportUncheckedUpdateWithoutEvidencesInput>
    create: XOR<ReportCreateWithoutEvidencesInput, ReportUncheckedCreateWithoutEvidencesInput>
    where?: ReportWhereInput
  }

  export type ReportUpdateToOneWithWhereWithoutEvidencesInput = {
    where?: ReportWhereInput
    data: XOR<ReportUpdateWithoutEvidencesInput, ReportUncheckedUpdateWithoutEvidencesInput>
  }

  export type ReportUpdateWithoutEvidencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reportImage?: NullableStringFieldUpdateOperationsInput | string | null
    incidentType?: NullableEnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAssigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cctv?: CCTVUpdateOneWithoutReportsNestedInput
    owner?: OwnerUpdateOneRequiredWithoutReportsNestedInput
    assignments?: AssignmentUpdateManyWithoutReportNestedInput
    notifications?: NotificationUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutEvidencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    cctvId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reportImage?: NullableStringFieldUpdateOperationsInput | string | null
    incidentType?: NullableEnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAssigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    assignments?: AssignmentUncheckedUpdateManyWithoutReportNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportCreateWithoutAssignmentsInput = {
    id?: string
    title?: string | null
    description?: string | null
    status?: $Enums.ReportStatus | null
    location?: string | null
    reportImage?: string | null
    incidentType?: $Enums.IncidentType | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isAssigned?: boolean | null
    cctv?: CCTVCreateNestedOneWithoutReportsInput
    owner: OwnerCreateNestedOneWithoutReportsInput
    evidences?: EvidenceCreateNestedManyWithoutReportInput
    notifications?: NotificationCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    cctvId?: string | null
    ownerId: string
    title?: string | null
    description?: string | null
    status?: $Enums.ReportStatus | null
    location?: string | null
    reportImage?: string | null
    incidentType?: $Enums.IncidentType | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isAssigned?: boolean | null
    evidences?: EvidenceUncheckedCreateNestedManyWithoutReportInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutAssignmentsInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutAssignmentsInput, ReportUncheckedCreateWithoutAssignmentsInput>
  }

  export type OfficerCreateWithoutAssignmentsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    vehicleType?: string | null
    licensePlate?: string | null
    status?: $Enums.OfficerStatus | null
    createdAt?: Date | string | null
    notifications?: NotificationCreateNestedManyWithoutOfficerInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorOfficerInput
    trackings?: TrackingCreateNestedManyWithoutOfficerInput
  }

  export type OfficerUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    vehicleType?: string | null
    licensePlate?: string | null
    status?: $Enums.OfficerStatus | null
    createdAt?: Date | string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutOfficerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorOfficerInput
    trackings?: TrackingUncheckedCreateNestedManyWithoutOfficerInput
  }

  export type OfficerCreateOrConnectWithoutAssignmentsInput = {
    where: OfficerWhereUniqueInput
    create: XOR<OfficerCreateWithoutAssignmentsInput, OfficerUncheckedCreateWithoutAssignmentsInput>
  }

  export type PoliceCreateWithoutAssignmentsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    officeName?: string | null
    status?: $Enums.PoliceStatus | null
    createdAt?: Date | string | null
    notifications?: NotificationCreateNestedManyWithoutPoliceInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorPoliceInput
  }

  export type PoliceUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    officeName?: string | null
    status?: $Enums.PoliceStatus | null
    createdAt?: Date | string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutPoliceInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorPoliceInput
  }

  export type PoliceCreateOrConnectWithoutAssignmentsInput = {
    where: PoliceWhereUniqueInput
    create: XOR<PoliceCreateWithoutAssignmentsInput, PoliceUncheckedCreateWithoutAssignmentsInput>
  }

  export type TrackingCreateWithoutAssignmentInput = {
    id?: string
    latitude?: number | null
    longitude?: number | null
    timestamp?: Date | string | null
    distance?: number | null
    estimatedTime?: string | null
    status?: $Enums.TrackingStatus | null
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    officer: OfficerCreateNestedOneWithoutTrackingsInput
  }

  export type TrackingUncheckedCreateWithoutAssignmentInput = {
    id?: string
    officerId: string
    latitude?: number | null
    longitude?: number | null
    timestamp?: Date | string | null
    distance?: number | null
    estimatedTime?: string | null
    status?: $Enums.TrackingStatus | null
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type TrackingCreateOrConnectWithoutAssignmentInput = {
    where: TrackingWhereUniqueInput
    create: XOR<TrackingCreateWithoutAssignmentInput, TrackingUncheckedCreateWithoutAssignmentInput>
  }

  export type TrackingCreateManyAssignmentInputEnvelope = {
    data: TrackingCreateManyAssignmentInput | TrackingCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type ReportUpsertWithoutAssignmentsInput = {
    update: XOR<ReportUpdateWithoutAssignmentsInput, ReportUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<ReportCreateWithoutAssignmentsInput, ReportUncheckedCreateWithoutAssignmentsInput>
    where?: ReportWhereInput
  }

  export type ReportUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: ReportWhereInput
    data: XOR<ReportUpdateWithoutAssignmentsInput, ReportUncheckedUpdateWithoutAssignmentsInput>
  }

  export type ReportUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reportImage?: NullableStringFieldUpdateOperationsInput | string | null
    incidentType?: NullableEnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAssigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cctv?: CCTVUpdateOneWithoutReportsNestedInput
    owner?: OwnerUpdateOneRequiredWithoutReportsNestedInput
    evidences?: EvidenceUpdateManyWithoutReportNestedInput
    notifications?: NotificationUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cctvId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reportImage?: NullableStringFieldUpdateOperationsInput | string | null
    incidentType?: NullableEnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAssigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    evidences?: EvidenceUncheckedUpdateManyWithoutReportNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutReportNestedInput
  }

  export type OfficerUpsertWithoutAssignmentsInput = {
    update: XOR<OfficerUpdateWithoutAssignmentsInput, OfficerUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<OfficerCreateWithoutAssignmentsInput, OfficerUncheckedCreateWithoutAssignmentsInput>
    where?: OfficerWhereInput
  }

  export type OfficerUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: OfficerWhereInput
    data: XOR<OfficerUpdateWithoutAssignmentsInput, OfficerUncheckedUpdateWithoutAssignmentsInput>
  }

  export type OfficerUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    licensePlate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifications?: NotificationUpdateManyWithoutOfficerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorOfficerNestedInput
    trackings?: TrackingUpdateManyWithoutOfficerNestedInput
  }

  export type OfficerUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    licensePlate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutOfficerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorOfficerNestedInput
    trackings?: TrackingUncheckedUpdateManyWithoutOfficerNestedInput
  }

  export type PoliceUpsertWithoutAssignmentsInput = {
    update: XOR<PoliceUpdateWithoutAssignmentsInput, PoliceUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<PoliceCreateWithoutAssignmentsInput, PoliceUncheckedCreateWithoutAssignmentsInput>
    where?: PoliceWhereInput
  }

  export type PoliceUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: PoliceWhereInput
    data: XOR<PoliceUpdateWithoutAssignmentsInput, PoliceUncheckedUpdateWithoutAssignmentsInput>
  }

  export type PoliceUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    officeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumPoliceStatusFieldUpdateOperationsInput | $Enums.PoliceStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifications?: NotificationUpdateManyWithoutPoliceNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorPoliceNestedInput
  }

  export type PoliceUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    officeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumPoliceStatusFieldUpdateOperationsInput | $Enums.PoliceStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutPoliceNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorPoliceNestedInput
  }

  export type TrackingUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: TrackingWhereUniqueInput
    update: XOR<TrackingUpdateWithoutAssignmentInput, TrackingUncheckedUpdateWithoutAssignmentInput>
    create: XOR<TrackingCreateWithoutAssignmentInput, TrackingUncheckedCreateWithoutAssignmentInput>
  }

  export type TrackingUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: TrackingWhereUniqueInput
    data: XOR<TrackingUpdateWithoutAssignmentInput, TrackingUncheckedUpdateWithoutAssignmentInput>
  }

  export type TrackingUpdateManyWithWhereWithoutAssignmentInput = {
    where: TrackingScalarWhereInput
    data: XOR<TrackingUpdateManyMutationInput, TrackingUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type AssignmentCreateWithoutTrackingsInput = {
    id?: string
    assignedAt?: Date | string | null
    report: ReportCreateNestedOneWithoutAssignmentsInput
    officer: OfficerCreateNestedOneWithoutAssignmentsInput
    assignedByPolice?: PoliceCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutTrackingsInput = {
    id?: string
    reportId: string
    officerId: string
    assignedBy?: string | null
    assignedAt?: Date | string | null
  }

  export type AssignmentCreateOrConnectWithoutTrackingsInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutTrackingsInput, AssignmentUncheckedCreateWithoutTrackingsInput>
  }

  export type OfficerCreateWithoutTrackingsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    vehicleType?: string | null
    licensePlate?: string | null
    status?: $Enums.OfficerStatus | null
    createdAt?: Date | string | null
    assignments?: AssignmentCreateNestedManyWithoutOfficerInput
    notifications?: NotificationCreateNestedManyWithoutOfficerInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorOfficerInput
  }

  export type OfficerUncheckedCreateWithoutTrackingsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    vehicleType?: string | null
    licensePlate?: string | null
    status?: $Enums.OfficerStatus | null
    createdAt?: Date | string | null
    assignments?: AssignmentUncheckedCreateNestedManyWithoutOfficerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutOfficerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorOfficerInput
  }

  export type OfficerCreateOrConnectWithoutTrackingsInput = {
    where: OfficerWhereUniqueInput
    create: XOR<OfficerCreateWithoutTrackingsInput, OfficerUncheckedCreateWithoutTrackingsInput>
  }

  export type AssignmentUpsertWithoutTrackingsInput = {
    update: XOR<AssignmentUpdateWithoutTrackingsInput, AssignmentUncheckedUpdateWithoutTrackingsInput>
    create: XOR<AssignmentCreateWithoutTrackingsInput, AssignmentUncheckedCreateWithoutTrackingsInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutTrackingsInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutTrackingsInput, AssignmentUncheckedUpdateWithoutTrackingsInput>
  }

  export type AssignmentUpdateWithoutTrackingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report?: ReportUpdateOneRequiredWithoutAssignmentsNestedInput
    officer?: OfficerUpdateOneRequiredWithoutAssignmentsNestedInput
    assignedByPolice?: PoliceUpdateOneWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutTrackingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    officerId?: StringFieldUpdateOperationsInput | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OfficerUpsertWithoutTrackingsInput = {
    update: XOR<OfficerUpdateWithoutTrackingsInput, OfficerUncheckedUpdateWithoutTrackingsInput>
    create: XOR<OfficerCreateWithoutTrackingsInput, OfficerUncheckedCreateWithoutTrackingsInput>
    where?: OfficerWhereInput
  }

  export type OfficerUpdateToOneWithWhereWithoutTrackingsInput = {
    where?: OfficerWhereInput
    data: XOR<OfficerUpdateWithoutTrackingsInput, OfficerUncheckedUpdateWithoutTrackingsInput>
  }

  export type OfficerUpdateWithoutTrackingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    licensePlate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignments?: AssignmentUpdateManyWithoutOfficerNestedInput
    notifications?: NotificationUpdateManyWithoutOfficerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorOfficerNestedInput
  }

  export type OfficerUncheckedUpdateWithoutTrackingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    licensePlate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignments?: AssignmentUncheckedUpdateManyWithoutOfficerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutOfficerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorOfficerNestedInput
  }

  export type OwnerCreateWithoutNotificationsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string | null
    cctvs?: CCTVCreateNestedManyWithoutOwnerInput
    reports?: ReportCreateNestedManyWithoutOwnerInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorOwnerInput
  }

  export type OwnerUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string | null
    cctvs?: CCTVUncheckedCreateNestedManyWithoutOwnerInput
    reports?: ReportUncheckedCreateNestedManyWithoutOwnerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorOwnerInput
  }

  export type OwnerCreateOrConnectWithoutNotificationsInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutNotificationsInput, OwnerUncheckedCreateWithoutNotificationsInput>
  }

  export type OfficerCreateWithoutNotificationsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    vehicleType?: string | null
    licensePlate?: string | null
    status?: $Enums.OfficerStatus | null
    createdAt?: Date | string | null
    assignments?: AssignmentCreateNestedManyWithoutOfficerInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorOfficerInput
    trackings?: TrackingCreateNestedManyWithoutOfficerInput
  }

  export type OfficerUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    vehicleType?: string | null
    licensePlate?: string | null
    status?: $Enums.OfficerStatus | null
    createdAt?: Date | string | null
    assignments?: AssignmentUncheckedCreateNestedManyWithoutOfficerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorOfficerInput
    trackings?: TrackingUncheckedCreateNestedManyWithoutOfficerInput
  }

  export type OfficerCreateOrConnectWithoutNotificationsInput = {
    where: OfficerWhereUniqueInput
    create: XOR<OfficerCreateWithoutNotificationsInput, OfficerUncheckedCreateWithoutNotificationsInput>
  }

  export type PoliceCreateWithoutNotificationsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    officeName?: string | null
    status?: $Enums.PoliceStatus | null
    createdAt?: Date | string | null
    assignments?: AssignmentCreateNestedManyWithoutAssignedByPoliceInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorPoliceInput
  }

  export type PoliceUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    officeName?: string | null
    status?: $Enums.PoliceStatus | null
    createdAt?: Date | string | null
    assignments?: AssignmentUncheckedCreateNestedManyWithoutAssignedByPoliceInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorPoliceInput
  }

  export type PoliceCreateOrConnectWithoutNotificationsInput = {
    where: PoliceWhereUniqueInput
    create: XOR<PoliceCreateWithoutNotificationsInput, PoliceUncheckedCreateWithoutNotificationsInput>
  }

  export type ReportCreateWithoutNotificationsInput = {
    id?: string
    title?: string | null
    description?: string | null
    status?: $Enums.ReportStatus | null
    location?: string | null
    reportImage?: string | null
    incidentType?: $Enums.IncidentType | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isAssigned?: boolean | null
    cctv?: CCTVCreateNestedOneWithoutReportsInput
    owner: OwnerCreateNestedOneWithoutReportsInput
    evidences?: EvidenceCreateNestedManyWithoutReportInput
    assignments?: AssignmentCreateNestedManyWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutNotificationsInput = {
    id?: string
    cctvId?: string | null
    ownerId: string
    title?: string | null
    description?: string | null
    status?: $Enums.ReportStatus | null
    location?: string | null
    reportImage?: string | null
    incidentType?: $Enums.IncidentType | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isAssigned?: boolean | null
    evidences?: EvidenceUncheckedCreateNestedManyWithoutReportInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportCreateOrConnectWithoutNotificationsInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutNotificationsInput, ReportUncheckedCreateWithoutNotificationsInput>
  }

  export type OwnerUpsertWithoutNotificationsInput = {
    update: XOR<OwnerUpdateWithoutNotificationsInput, OwnerUncheckedUpdateWithoutNotificationsInput>
    create: XOR<OwnerCreateWithoutNotificationsInput, OwnerUncheckedCreateWithoutNotificationsInput>
    where?: OwnerWhereInput
  }

  export type OwnerUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: OwnerWhereInput
    data: XOR<OwnerUpdateWithoutNotificationsInput, OwnerUncheckedUpdateWithoutNotificationsInput>
  }

  export type OwnerUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cctvs?: CCTVUpdateManyWithoutOwnerNestedInput
    reports?: ReportUpdateManyWithoutOwnerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorOwnerNestedInput
  }

  export type OwnerUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cctvs?: CCTVUncheckedUpdateManyWithoutOwnerNestedInput
    reports?: ReportUncheckedUpdateManyWithoutOwnerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorOwnerNestedInput
  }

  export type OfficerUpsertWithoutNotificationsInput = {
    update: XOR<OfficerUpdateWithoutNotificationsInput, OfficerUncheckedUpdateWithoutNotificationsInput>
    create: XOR<OfficerCreateWithoutNotificationsInput, OfficerUncheckedCreateWithoutNotificationsInput>
    where?: OfficerWhereInput
  }

  export type OfficerUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: OfficerWhereInput
    data: XOR<OfficerUpdateWithoutNotificationsInput, OfficerUncheckedUpdateWithoutNotificationsInput>
  }

  export type OfficerUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    licensePlate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignments?: AssignmentUpdateManyWithoutOfficerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorOfficerNestedInput
    trackings?: TrackingUpdateManyWithoutOfficerNestedInput
  }

  export type OfficerUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    licensePlate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignments?: AssignmentUncheckedUpdateManyWithoutOfficerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorOfficerNestedInput
    trackings?: TrackingUncheckedUpdateManyWithoutOfficerNestedInput
  }

  export type PoliceUpsertWithoutNotificationsInput = {
    update: XOR<PoliceUpdateWithoutNotificationsInput, PoliceUncheckedUpdateWithoutNotificationsInput>
    create: XOR<PoliceCreateWithoutNotificationsInput, PoliceUncheckedCreateWithoutNotificationsInput>
    where?: PoliceWhereInput
  }

  export type PoliceUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: PoliceWhereInput
    data: XOR<PoliceUpdateWithoutNotificationsInput, PoliceUncheckedUpdateWithoutNotificationsInput>
  }

  export type PoliceUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    officeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumPoliceStatusFieldUpdateOperationsInput | $Enums.PoliceStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignments?: AssignmentUpdateManyWithoutAssignedByPoliceNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorPoliceNestedInput
  }

  export type PoliceUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    officeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumPoliceStatusFieldUpdateOperationsInput | $Enums.PoliceStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignments?: AssignmentUncheckedUpdateManyWithoutAssignedByPoliceNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorPoliceNestedInput
  }

  export type ReportUpsertWithoutNotificationsInput = {
    update: XOR<ReportUpdateWithoutNotificationsInput, ReportUncheckedUpdateWithoutNotificationsInput>
    create: XOR<ReportCreateWithoutNotificationsInput, ReportUncheckedCreateWithoutNotificationsInput>
    where?: ReportWhereInput
  }

  export type ReportUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: ReportWhereInput
    data: XOR<ReportUpdateWithoutNotificationsInput, ReportUncheckedUpdateWithoutNotificationsInput>
  }

  export type ReportUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reportImage?: NullableStringFieldUpdateOperationsInput | string | null
    incidentType?: NullableEnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAssigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cctv?: CCTVUpdateOneWithoutReportsNestedInput
    owner?: OwnerUpdateOneRequiredWithoutReportsNestedInput
    evidences?: EvidenceUpdateManyWithoutReportNestedInput
    assignments?: AssignmentUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cctvId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reportImage?: NullableStringFieldUpdateOperationsInput | string | null
    incidentType?: NullableEnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAssigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    evidences?: EvidenceUncheckedUpdateManyWithoutReportNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutReportNestedInput
  }

  export type OwnerCreateWithoutAuditLogsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string | null
    cctvs?: CCTVCreateNestedManyWithoutOwnerInput
    reports?: ReportCreateNestedManyWithoutOwnerInput
    notifications?: NotificationCreateNestedManyWithoutOwnerInput
  }

  export type OwnerUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    createdAt?: Date | string | null
    cctvs?: CCTVUncheckedCreateNestedManyWithoutOwnerInput
    reports?: ReportUncheckedCreateNestedManyWithoutOwnerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type OwnerCreateOrConnectWithoutAuditLogsInput = {
    where: OwnerWhereUniqueInput
    create: XOR<OwnerCreateWithoutAuditLogsInput, OwnerUncheckedCreateWithoutAuditLogsInput>
  }

  export type OfficerCreateWithoutAuditLogsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    vehicleType?: string | null
    licensePlate?: string | null
    status?: $Enums.OfficerStatus | null
    createdAt?: Date | string | null
    assignments?: AssignmentCreateNestedManyWithoutOfficerInput
    notifications?: NotificationCreateNestedManyWithoutOfficerInput
    trackings?: TrackingCreateNestedManyWithoutOfficerInput
  }

  export type OfficerUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    vehicleType?: string | null
    licensePlate?: string | null
    status?: $Enums.OfficerStatus | null
    createdAt?: Date | string | null
    assignments?: AssignmentUncheckedCreateNestedManyWithoutOfficerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutOfficerInput
    trackings?: TrackingUncheckedCreateNestedManyWithoutOfficerInput
  }

  export type OfficerCreateOrConnectWithoutAuditLogsInput = {
    where: OfficerWhereUniqueInput
    create: XOR<OfficerCreateWithoutAuditLogsInput, OfficerUncheckedCreateWithoutAuditLogsInput>
  }

  export type PoliceCreateWithoutAuditLogsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    officeName?: string | null
    status?: $Enums.PoliceStatus | null
    createdAt?: Date | string | null
    assignments?: AssignmentCreateNestedManyWithoutAssignedByPoliceInput
    notifications?: NotificationCreateNestedManyWithoutPoliceInput
  }

  export type PoliceUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    passwordHash?: string | null
    latitude?: number | null
    longitude?: number | null
    officeName?: string | null
    status?: $Enums.PoliceStatus | null
    createdAt?: Date | string | null
    assignments?: AssignmentUncheckedCreateNestedManyWithoutAssignedByPoliceInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutPoliceInput
  }

  export type PoliceCreateOrConnectWithoutAuditLogsInput = {
    where: PoliceWhereUniqueInput
    create: XOR<PoliceCreateWithoutAuditLogsInput, PoliceUncheckedCreateWithoutAuditLogsInput>
  }

  export type OwnerUpsertWithoutAuditLogsInput = {
    update: XOR<OwnerUpdateWithoutAuditLogsInput, OwnerUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<OwnerCreateWithoutAuditLogsInput, OwnerUncheckedCreateWithoutAuditLogsInput>
    where?: OwnerWhereInput
  }

  export type OwnerUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: OwnerWhereInput
    data: XOR<OwnerUpdateWithoutAuditLogsInput, OwnerUncheckedUpdateWithoutAuditLogsInput>
  }

  export type OwnerUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cctvs?: CCTVUpdateManyWithoutOwnerNestedInput
    reports?: ReportUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUpdateManyWithoutOwnerNestedInput
  }

  export type OwnerUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cctvs?: CCTVUncheckedUpdateManyWithoutOwnerNestedInput
    reports?: ReportUncheckedUpdateManyWithoutOwnerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type OfficerUpsertWithoutAuditLogsInput = {
    update: XOR<OfficerUpdateWithoutAuditLogsInput, OfficerUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<OfficerCreateWithoutAuditLogsInput, OfficerUncheckedCreateWithoutAuditLogsInput>
    where?: OfficerWhereInput
  }

  export type OfficerUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: OfficerWhereInput
    data: XOR<OfficerUpdateWithoutAuditLogsInput, OfficerUncheckedUpdateWithoutAuditLogsInput>
  }

  export type OfficerUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    licensePlate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignments?: AssignmentUpdateManyWithoutOfficerNestedInput
    notifications?: NotificationUpdateManyWithoutOfficerNestedInput
    trackings?: TrackingUpdateManyWithoutOfficerNestedInput
  }

  export type OfficerUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleType?: NullableStringFieldUpdateOperationsInput | string | null
    licensePlate?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumOfficerStatusFieldUpdateOperationsInput | $Enums.OfficerStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignments?: AssignmentUncheckedUpdateManyWithoutOfficerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutOfficerNestedInput
    trackings?: TrackingUncheckedUpdateManyWithoutOfficerNestedInput
  }

  export type PoliceUpsertWithoutAuditLogsInput = {
    update: XOR<PoliceUpdateWithoutAuditLogsInput, PoliceUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<PoliceCreateWithoutAuditLogsInput, PoliceUncheckedCreateWithoutAuditLogsInput>
    where?: PoliceWhereInput
  }

  export type PoliceUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: PoliceWhereInput
    data: XOR<PoliceUpdateWithoutAuditLogsInput, PoliceUncheckedUpdateWithoutAuditLogsInput>
  }

  export type PoliceUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    officeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumPoliceStatusFieldUpdateOperationsInput | $Enums.PoliceStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignments?: AssignmentUpdateManyWithoutAssignedByPoliceNestedInput
    notifications?: NotificationUpdateManyWithoutPoliceNestedInput
  }

  export type PoliceUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    officeName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumPoliceStatusFieldUpdateOperationsInput | $Enums.PoliceStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignments?: AssignmentUncheckedUpdateManyWithoutAssignedByPoliceNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutPoliceNestedInput
  }

  export type CCTVCreateManyOwnerInput = {
    id?: string
    name?: string | null
    location?: string | null
    description?: string | null
    IP?: string | null
    cameraType?: string | null
    streamUrl?: string | null
    status?: $Enums.CCTVStatus | null
    createdAt?: Date | string | null
  }

  export type ReportCreateManyOwnerInput = {
    id?: string
    cctvId?: string | null
    title?: string | null
    description?: string | null
    status?: $Enums.ReportStatus | null
    location?: string | null
    reportImage?: string | null
    incidentType?: $Enums.IncidentType | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isAssigned?: boolean | null
  }

  export type NotificationCreateManyOwnerInput = {
    id?: string
    officerId?: string | null
    policeId?: string | null
    title?: string | null
    message?: string | null
    type?: $Enums.NotificationType | null
    status?: $Enums.NotificationStatus | null
    image?: string | null
    reportId?: string | null
    createdAt?: Date | string | null
    isRead?: boolean | null
  }

  export type AuditLogCreateManyActorOwnerInput = {
    id?: string
    entity?: string | null
    entityId?: string | null
    action?: string | null
    actorOfficerId?: string | null
    actorPoliceId?: string | null
    description?: string | null
    createdAt?: Date | string | null
  }

  export type CCTVUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    IP?: NullableStringFieldUpdateOperationsInput | string | null
    cameraType?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCCTVStatusFieldUpdateOperationsInput | $Enums.CCTVStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUpdateManyWithoutCctvNestedInput
  }

  export type CCTVUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    IP?: NullableStringFieldUpdateOperationsInput | string | null
    cameraType?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCCTVStatusFieldUpdateOperationsInput | $Enums.CCTVStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reports?: ReportUncheckedUpdateManyWithoutCctvNestedInput
  }

  export type CCTVUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    IP?: NullableStringFieldUpdateOperationsInput | string | null
    cameraType?: NullableStringFieldUpdateOperationsInput | string | null
    streamUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumCCTVStatusFieldUpdateOperationsInput | $Enums.CCTVStatus | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reportImage?: NullableStringFieldUpdateOperationsInput | string | null
    incidentType?: NullableEnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAssigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    cctv?: CCTVUpdateOneWithoutReportsNestedInput
    evidences?: EvidenceUpdateManyWithoutReportNestedInput
    assignments?: AssignmentUpdateManyWithoutReportNestedInput
    notifications?: NotificationUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    cctvId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reportImage?: NullableStringFieldUpdateOperationsInput | string | null
    incidentType?: NullableEnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAssigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    evidences?: EvidenceUncheckedUpdateManyWithoutReportNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutReportNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    cctvId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reportImage?: NullableStringFieldUpdateOperationsInput | string | null
    incidentType?: NullableEnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAssigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NotificationUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    status?: NullableEnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    officer?: OfficerUpdateOneWithoutNotificationsNestedInput
    police?: PoliceUpdateOneWithoutNotificationsNestedInput
    report?: ReportUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    policeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    status?: NullableEnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    reportId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NotificationUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    policeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    status?: NullableEnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    reportId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AuditLogUpdateWithoutActorOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actorOfficer?: OfficerUpdateOneWithoutAuditLogsNestedInput
    actorPolice?: PoliceUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutActorOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    actorOfficerId?: NullableStringFieldUpdateOperationsInput | string | null
    actorPoliceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuditLogUncheckedUpdateManyWithoutActorOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    actorOfficerId?: NullableStringFieldUpdateOperationsInput | string | null
    actorPoliceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssignmentCreateManyOfficerInput = {
    id?: string
    reportId: string
    assignedBy?: string | null
    assignedAt?: Date | string | null
  }

  export type NotificationCreateManyOfficerInput = {
    id?: string
    ownerId?: string | null
    policeId?: string | null
    title?: string | null
    message?: string | null
    type?: $Enums.NotificationType | null
    status?: $Enums.NotificationStatus | null
    image?: string | null
    reportId?: string | null
    createdAt?: Date | string | null
    isRead?: boolean | null
  }

  export type AuditLogCreateManyActorOfficerInput = {
    id?: string
    entity?: string | null
    entityId?: string | null
    action?: string | null
    actorOwnerId?: string | null
    actorPoliceId?: string | null
    description?: string | null
    createdAt?: Date | string | null
  }

  export type TrackingCreateManyOfficerInput = {
    id?: string
    assignmentId: string
    latitude?: number | null
    longitude?: number | null
    timestamp?: Date | string | null
    distance?: number | null
    estimatedTime?: string | null
    status?: $Enums.TrackingStatus | null
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AssignmentUpdateWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report?: ReportUpdateOneRequiredWithoutAssignmentsNestedInput
    assignedByPolice?: PoliceUpdateOneWithoutAssignmentsNestedInput
    trackings?: TrackingUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackings?: TrackingUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUpdateWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    status?: NullableEnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    owner?: OwnerUpdateOneWithoutNotificationsNestedInput
    police?: PoliceUpdateOneWithoutNotificationsNestedInput
    report?: ReportUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    policeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    status?: NullableEnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    reportId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NotificationUncheckedUpdateManyWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    policeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    status?: NullableEnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    reportId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AuditLogUpdateWithoutActorOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actorOwner?: OwnerUpdateOneWithoutAuditLogsNestedInput
    actorPolice?: PoliceUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutActorOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    actorOwnerId?: NullableStringFieldUpdateOperationsInput | string | null
    actorPoliceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuditLogUncheckedUpdateManyWithoutActorOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    actorOwnerId?: NullableStringFieldUpdateOperationsInput | string | null
    actorPoliceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrackingUpdateWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumTrackingStatusFieldUpdateOperationsInput | $Enums.TrackingStatus | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignment?: AssignmentUpdateOneRequiredWithoutTrackingsNestedInput
  }

  export type TrackingUncheckedUpdateWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumTrackingStatusFieldUpdateOperationsInput | $Enums.TrackingStatus | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrackingUncheckedUpdateManyWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumTrackingStatusFieldUpdateOperationsInput | $Enums.TrackingStatus | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssignmentCreateManyAssignedByPoliceInput = {
    id?: string
    reportId: string
    officerId: string
    assignedAt?: Date | string | null
  }

  export type NotificationCreateManyPoliceInput = {
    id?: string
    ownerId?: string | null
    officerId?: string | null
    title?: string | null
    message?: string | null
    type?: $Enums.NotificationType | null
    status?: $Enums.NotificationStatus | null
    image?: string | null
    reportId?: string | null
    createdAt?: Date | string | null
    isRead?: boolean | null
  }

  export type AuditLogCreateManyActorPoliceInput = {
    id?: string
    entity?: string | null
    entityId?: string | null
    action?: string | null
    actorOwnerId?: string | null
    actorOfficerId?: string | null
    description?: string | null
    createdAt?: Date | string | null
  }

  export type AssignmentUpdateWithoutAssignedByPoliceInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    report?: ReportUpdateOneRequiredWithoutAssignmentsNestedInput
    officer?: OfficerUpdateOneRequiredWithoutAssignmentsNestedInput
    trackings?: TrackingUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutAssignedByPoliceInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    officerId?: StringFieldUpdateOperationsInput | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackings?: TrackingUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutAssignedByPoliceInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportId?: StringFieldUpdateOperationsInput | string
    officerId?: StringFieldUpdateOperationsInput | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUpdateWithoutPoliceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    status?: NullableEnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    owner?: OwnerUpdateOneWithoutNotificationsNestedInput
    officer?: OfficerUpdateOneWithoutNotificationsNestedInput
    report?: ReportUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutPoliceInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    status?: NullableEnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    reportId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NotificationUncheckedUpdateManyWithoutPoliceInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    status?: NullableEnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    reportId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type AuditLogUpdateWithoutActorPoliceInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actorOwner?: OwnerUpdateOneWithoutAuditLogsNestedInput
    actorOfficer?: OfficerUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutActorPoliceInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    actorOwnerId?: NullableStringFieldUpdateOperationsInput | string | null
    actorOfficerId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuditLogUncheckedUpdateManyWithoutActorPoliceInput = {
    id?: StringFieldUpdateOperationsInput | string
    entity?: NullableStringFieldUpdateOperationsInput | string | null
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: NullableStringFieldUpdateOperationsInput | string | null
    actorOwnerId?: NullableStringFieldUpdateOperationsInput | string | null
    actorOfficerId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportCreateManyCctvInput = {
    id?: string
    ownerId: string
    title?: string | null
    description?: string | null
    status?: $Enums.ReportStatus | null
    location?: string | null
    reportImage?: string | null
    incidentType?: $Enums.IncidentType | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    isAssigned?: boolean | null
  }

  export type ReportUpdateWithoutCctvInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reportImage?: NullableStringFieldUpdateOperationsInput | string | null
    incidentType?: NullableEnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAssigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    owner?: OwnerUpdateOneRequiredWithoutReportsNestedInput
    evidences?: EvidenceUpdateManyWithoutReportNestedInput
    assignments?: AssignmentUpdateManyWithoutReportNestedInput
    notifications?: NotificationUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutCctvInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reportImage?: NullableStringFieldUpdateOperationsInput | string | null
    incidentType?: NullableEnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAssigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    evidences?: EvidenceUncheckedUpdateManyWithoutReportNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutReportNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateManyWithoutCctvInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    reportImage?: NullableStringFieldUpdateOperationsInput | string | null
    incidentType?: NullableEnumIncidentTypeFieldUpdateOperationsInput | $Enums.IncidentType | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAssigned?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type EvidenceCreateManyReportInput = {
    id?: string
    fileUrl?: string | null
    type?: string | null
    createdAt?: Date | string | null
  }

  export type AssignmentCreateManyReportInput = {
    id?: string
    officerId: string
    assignedBy?: string | null
    assignedAt?: Date | string | null
  }

  export type NotificationCreateManyReportInput = {
    id?: string
    ownerId?: string | null
    officerId?: string | null
    policeId?: string | null
    title?: string | null
    message?: string | null
    type?: $Enums.NotificationType | null
    status?: $Enums.NotificationStatus | null
    image?: string | null
    createdAt?: Date | string | null
    isRead?: boolean | null
  }

  export type EvidenceUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EvidenceUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EvidenceUncheckedUpdateManyWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssignmentUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    officer?: OfficerUpdateOneRequiredWithoutAssignmentsNestedInput
    assignedByPolice?: PoliceUpdateOneWithoutAssignmentsNestedInput
    trackings?: TrackingUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerId?: StringFieldUpdateOperationsInput | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trackings?: TrackingUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerId?: StringFieldUpdateOperationsInput | string
    assignedBy?: NullableStringFieldUpdateOperationsInput | string | null
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    status?: NullableEnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
    owner?: OwnerUpdateOneWithoutNotificationsNestedInput
    officer?: OfficerUpdateOneWithoutNotificationsNestedInput
    police?: PoliceUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    policeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    status?: NullableEnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NotificationUncheckedUpdateManyWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    policeId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableEnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType | null
    status?: NullableEnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isRead?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TrackingCreateManyAssignmentInput = {
    id?: string
    officerId: string
    latitude?: number | null
    longitude?: number | null
    timestamp?: Date | string | null
    distance?: number | null
    estimatedTime?: string | null
    status?: $Enums.TrackingStatus | null
    description?: string | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type TrackingUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumTrackingStatusFieldUpdateOperationsInput | $Enums.TrackingStatus | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    officer?: OfficerUpdateOneRequiredWithoutTrackingsNestedInput
  }

  export type TrackingUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerId?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumTrackingStatusFieldUpdateOperationsInput | $Enums.TrackingStatus | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TrackingUncheckedUpdateManyWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    officerId?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distance?: NullableFloatFieldUpdateOperationsInput | number | null
    estimatedTime?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumTrackingStatusFieldUpdateOperationsInput | $Enums.TrackingStatus | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



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