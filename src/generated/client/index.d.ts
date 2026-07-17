
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Invitation
 * 
 */
export type Invitation = $Result.DefaultSelection<Prisma.$InvitationPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Wedding
 * 
 */
export type Wedding = $Result.DefaultSelection<Prisma.$WeddingPayload>
/**
 * Model WeddingGuest
 * 
 */
export type WeddingGuest = $Result.DefaultSelection<Prisma.$WeddingGuestPayload>
/**
 * Model WeddingRsvp
 * 
 */
export type WeddingRsvp = $Result.DefaultSelection<Prisma.$WeddingRsvpPayload>
/**
 * Model WeddingAnalytics
 * 
 */
export type WeddingAnalytics = $Result.DefaultSelection<Prisma.$WeddingAnalyticsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AttendanceStatus: {
  HADIR: 'HADIR',
  TIDAK_HADIR: 'TIDAK_HADIR',
  BELUM_TAHU: 'BELUM_TAHU'
};

export type AttendanceStatus = (typeof AttendanceStatus)[keyof typeof AttendanceStatus]


export const WeddingAnalyticsEvent: {
  PAGE_VIEW: 'PAGE_VIEW',
  OPEN_INVITATION: 'OPEN_INVITATION',
  MAP_CLICK: 'MAP_CLICK',
  CALENDAR_CLICK: 'CALENDAR_CLICK',
  RSVP_SUBMIT: 'RSVP_SUBMIT'
};

export type WeddingAnalyticsEvent = (typeof WeddingAnalyticsEvent)[keyof typeof WeddingAnalyticsEvent]

}

export type AttendanceStatus = $Enums.AttendanceStatus

export const AttendanceStatus: typeof $Enums.AttendanceStatus

export type WeddingAnalyticsEvent = $Enums.WeddingAnalyticsEvent

export const WeddingAnalyticsEvent: typeof $Enums.WeddingAnalyticsEvent

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitation`: Exposes CRUD operations for the **Invitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitation.findMany()
    * ```
    */
  get invitation(): Prisma.InvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wedding`: Exposes CRUD operations for the **Wedding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weddings
    * const weddings = await prisma.wedding.findMany()
    * ```
    */
  get wedding(): Prisma.WeddingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weddingGuest`: Exposes CRUD operations for the **WeddingGuest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeddingGuests
    * const weddingGuests = await prisma.weddingGuest.findMany()
    * ```
    */
  get weddingGuest(): Prisma.WeddingGuestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weddingRsvp`: Exposes CRUD operations for the **WeddingRsvp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeddingRsvps
    * const weddingRsvps = await prisma.weddingRsvp.findMany()
    * ```
    */
  get weddingRsvp(): Prisma.WeddingRsvpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.weddingAnalytics`: Exposes CRUD operations for the **WeddingAnalytics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeddingAnalytics
    * const weddingAnalytics = await prisma.weddingAnalytics.findMany()
    * ```
    */
  get weddingAnalytics(): Prisma.WeddingAnalyticsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Invitation: 'Invitation',
    Attendance: 'Attendance',
    Wedding: 'Wedding',
    WeddingGuest: 'WeddingGuest',
    WeddingRsvp: 'WeddingRsvp',
    WeddingAnalytics: 'WeddingAnalytics'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "session" | "user" | "verificationToken" | "invitation" | "attendance" | "wedding" | "weddingGuest" | "weddingRsvp" | "weddingAnalytics"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Invitation: {
        payload: Prisma.$InvitationPayload<ExtArgs>
        fields: Prisma.InvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findFirst: {
            args: Prisma.InvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findMany: {
            args: Prisma.InvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          create: {
            args: Prisma.InvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          createMany: {
            args: Prisma.InvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          delete: {
            args: Prisma.InvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          update: {
            args: Prisma.InvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          deleteMany: {
            args: Prisma.InvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          upsert: {
            args: Prisma.InvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          aggregate: {
            args: Prisma.InvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitation>
          }
          groupBy: {
            args: Prisma.InvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitationCountArgs<ExtArgs>
            result: $Utils.Optional<InvitationCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      Wedding: {
        payload: Prisma.$WeddingPayload<ExtArgs>
        fields: Prisma.WeddingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeddingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeddingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload>
          }
          findFirst: {
            args: Prisma.WeddingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeddingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload>
          }
          findMany: {
            args: Prisma.WeddingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload>[]
          }
          create: {
            args: Prisma.WeddingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload>
          }
          createMany: {
            args: Prisma.WeddingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeddingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload>[]
          }
          delete: {
            args: Prisma.WeddingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload>
          }
          update: {
            args: Prisma.WeddingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload>
          }
          deleteMany: {
            args: Prisma.WeddingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeddingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeddingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload>[]
          }
          upsert: {
            args: Prisma.WeddingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingPayload>
          }
          aggregate: {
            args: Prisma.WeddingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWedding>
          }
          groupBy: {
            args: Prisma.WeddingGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeddingGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeddingCountArgs<ExtArgs>
            result: $Utils.Optional<WeddingCountAggregateOutputType> | number
          }
        }
      }
      WeddingGuest: {
        payload: Prisma.$WeddingGuestPayload<ExtArgs>
        fields: Prisma.WeddingGuestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeddingGuestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingGuestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeddingGuestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingGuestPayload>
          }
          findFirst: {
            args: Prisma.WeddingGuestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingGuestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeddingGuestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingGuestPayload>
          }
          findMany: {
            args: Prisma.WeddingGuestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingGuestPayload>[]
          }
          create: {
            args: Prisma.WeddingGuestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingGuestPayload>
          }
          createMany: {
            args: Prisma.WeddingGuestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeddingGuestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingGuestPayload>[]
          }
          delete: {
            args: Prisma.WeddingGuestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingGuestPayload>
          }
          update: {
            args: Prisma.WeddingGuestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingGuestPayload>
          }
          deleteMany: {
            args: Prisma.WeddingGuestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeddingGuestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeddingGuestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingGuestPayload>[]
          }
          upsert: {
            args: Prisma.WeddingGuestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingGuestPayload>
          }
          aggregate: {
            args: Prisma.WeddingGuestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeddingGuest>
          }
          groupBy: {
            args: Prisma.WeddingGuestGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeddingGuestGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeddingGuestCountArgs<ExtArgs>
            result: $Utils.Optional<WeddingGuestCountAggregateOutputType> | number
          }
        }
      }
      WeddingRsvp: {
        payload: Prisma.$WeddingRsvpPayload<ExtArgs>
        fields: Prisma.WeddingRsvpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeddingRsvpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingRsvpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeddingRsvpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingRsvpPayload>
          }
          findFirst: {
            args: Prisma.WeddingRsvpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingRsvpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeddingRsvpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingRsvpPayload>
          }
          findMany: {
            args: Prisma.WeddingRsvpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingRsvpPayload>[]
          }
          create: {
            args: Prisma.WeddingRsvpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingRsvpPayload>
          }
          createMany: {
            args: Prisma.WeddingRsvpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeddingRsvpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingRsvpPayload>[]
          }
          delete: {
            args: Prisma.WeddingRsvpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingRsvpPayload>
          }
          update: {
            args: Prisma.WeddingRsvpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingRsvpPayload>
          }
          deleteMany: {
            args: Prisma.WeddingRsvpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeddingRsvpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeddingRsvpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingRsvpPayload>[]
          }
          upsert: {
            args: Prisma.WeddingRsvpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingRsvpPayload>
          }
          aggregate: {
            args: Prisma.WeddingRsvpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeddingRsvp>
          }
          groupBy: {
            args: Prisma.WeddingRsvpGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeddingRsvpGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeddingRsvpCountArgs<ExtArgs>
            result: $Utils.Optional<WeddingRsvpCountAggregateOutputType> | number
          }
        }
      }
      WeddingAnalytics: {
        payload: Prisma.$WeddingAnalyticsPayload<ExtArgs>
        fields: Prisma.WeddingAnalyticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeddingAnalyticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingAnalyticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeddingAnalyticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingAnalyticsPayload>
          }
          findFirst: {
            args: Prisma.WeddingAnalyticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingAnalyticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeddingAnalyticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingAnalyticsPayload>
          }
          findMany: {
            args: Prisma.WeddingAnalyticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingAnalyticsPayload>[]
          }
          create: {
            args: Prisma.WeddingAnalyticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingAnalyticsPayload>
          }
          createMany: {
            args: Prisma.WeddingAnalyticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeddingAnalyticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingAnalyticsPayload>[]
          }
          delete: {
            args: Prisma.WeddingAnalyticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingAnalyticsPayload>
          }
          update: {
            args: Prisma.WeddingAnalyticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingAnalyticsPayload>
          }
          deleteMany: {
            args: Prisma.WeddingAnalyticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeddingAnalyticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeddingAnalyticsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingAnalyticsPayload>[]
          }
          upsert: {
            args: Prisma.WeddingAnalyticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeddingAnalyticsPayload>
          }
          aggregate: {
            args: Prisma.WeddingAnalyticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeddingAnalytics>
          }
          groupBy: {
            args: Prisma.WeddingAnalyticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeddingAnalyticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeddingAnalyticsCountArgs<ExtArgs>
            result: $Utils.Optional<WeddingAnalyticsCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    verificationToken?: VerificationTokenOmit
    invitation?: InvitationOmit
    attendance?: AttendanceOmit
    wedding?: WeddingOmit
    weddingGuest?: WeddingGuestOmit
    weddingRsvp?: WeddingRsvpOmit
    weddingAnalytics?: WeddingAnalyticsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
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
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type WeddingCountOutputType
   */

  export type WeddingCountOutputType = {
    guests: number
    rsvps: number
    analytics: number
  }

  export type WeddingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guests?: boolean | WeddingCountOutputTypeCountGuestsArgs
    rsvps?: boolean | WeddingCountOutputTypeCountRsvpsArgs
    analytics?: boolean | WeddingCountOutputTypeCountAnalyticsArgs
  }

  // Custom InputTypes
  /**
   * WeddingCountOutputType without action
   */
  export type WeddingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingCountOutputType
     */
    select?: WeddingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeddingCountOutputType without action
   */
  export type WeddingCountOutputTypeCountGuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeddingGuestWhereInput
  }

  /**
   * WeddingCountOutputType without action
   */
  export type WeddingCountOutputTypeCountRsvpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeddingRsvpWhereInput
  }

  /**
   * WeddingCountOutputType without action
   */
  export type WeddingCountOutputTypeCountAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeddingAnalyticsWhereInput
  }


  /**
   * Count Type WeddingGuestCountOutputType
   */

  export type WeddingGuestCountOutputType = {
    analytics: number
  }

  export type WeddingGuestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analytics?: boolean | WeddingGuestCountOutputTypeCountAnalyticsArgs
  }

  // Custom InputTypes
  /**
   * WeddingGuestCountOutputType without action
   */
  export type WeddingGuestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingGuestCountOutputType
     */
    select?: WeddingGuestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeddingGuestCountOutputType without action
   */
  export type WeddingGuestCountOutputTypeCountAnalyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeddingAnalyticsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


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
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    passwordHash: string | null
    isAdmin: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    passwordHash: string | null
    isAdmin: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    passwordHash: number
    isAdmin: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    passwordHash?: true
    isAdmin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    passwordHash?: true
    isAdmin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    passwordHash?: true
    isAdmin?: true
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
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    passwordHash: string | null
    isAdmin: boolean
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
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    isAdmin?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    isAdmin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    isAdmin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    isAdmin?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "passwordHash" | "isAdmin", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      passwordHash: string | null
      isAdmin: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
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
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Invitation
   */

  export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  export type InvitationMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitationCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvitationMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitationMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitationCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitation to aggregate.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invitations
    **/
    _count?: true | InvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationMaxAggregateInputType
  }

  export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation[P]>
      : GetScalarType<T[P], AggregateInvitation[P]>
  }




  export type InvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithAggregationInput | InvitationOrderByWithAggregationInput[]
    by: InvitationScalarFieldEnum[] | InvitationScalarFieldEnum
    having?: InvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationCountAggregateInputType | true
    _min?: InvitationMinAggregateInputType
    _max?: InvitationMaxAggregateInputType
  }

  export type InvitationGroupByOutputType = {
    id: string
    name: string
    phone: string | null
    createdAt: Date
    updatedAt: Date
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  type GetInvitationGroupByPayload<T extends InvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationGroupByOutputType[P]>
        }
      >
    >


  export type InvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["invitation"]>

  export type $InvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invitation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invitation"]>
    composites: {}
  }

  type InvitationGetPayload<S extends boolean | null | undefined | InvitationDefaultArgs> = $Result.GetResult<Prisma.$InvitationPayload, S>

  type InvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitationCountAggregateInputType | true
    }

  export interface InvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invitation'], meta: { name: 'Invitation' } }
    /**
     * Find zero or one Invitation that matches the filter.
     * @param {InvitationFindUniqueArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitationFindUniqueArgs>(args: SelectSubset<T, InvitationFindUniqueArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitationFindUniqueOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, InvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitationFindFirstArgs>(args?: SelectSubset<T, InvitationFindFirstArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, InvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitation.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationWithIdOnly = await prisma.invitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvitationFindManyArgs>(args?: SelectSubset<T, InvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invitation.
     * @param {InvitationCreateArgs} args - Arguments to create a Invitation.
     * @example
     * // Create one Invitation
     * const Invitation = await prisma.invitation.create({
     *   data: {
     *     // ... data to create a Invitation
     *   }
     * })
     * 
     */
    create<T extends InvitationCreateArgs>(args: SelectSubset<T, InvitationCreateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invitations.
     * @param {InvitationCreateManyArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvitationCreateManyArgs>(args?: SelectSubset<T, InvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invitations and returns the data saved in the database.
     * @param {InvitationCreateManyAndReturnArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, InvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invitation.
     * @param {InvitationDeleteArgs} args - Arguments to delete one Invitation.
     * @example
     * // Delete one Invitation
     * const Invitation = await prisma.invitation.delete({
     *   where: {
     *     // ... filter to delete one Invitation
     *   }
     * })
     * 
     */
    delete<T extends InvitationDeleteArgs>(args: SelectSubset<T, InvitationDeleteArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invitation.
     * @param {InvitationUpdateArgs} args - Arguments to update one Invitation.
     * @example
     * // Update one Invitation
     * const invitation = await prisma.invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvitationUpdateArgs>(args: SelectSubset<T, InvitationUpdateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invitations.
     * @param {InvitationDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvitationDeleteManyArgs>(args?: SelectSubset<T, InvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvitationUpdateManyArgs>(args: SelectSubset<T, InvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations and returns the data updated in the database.
     * @param {InvitationUpdateManyAndReturnArgs} args - Arguments to update many Invitations.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, InvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invitation.
     * @param {InvitationUpsertArgs} args - Arguments to update or create a Invitation.
     * @example
     * // Update or create a Invitation
     * const invitation = await prisma.invitation.upsert({
     *   create: {
     *     // ... data to create a Invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation we want to update
     *   }
     * })
     */
    upsert<T extends InvitationUpsertArgs>(args: SelectSubset<T, InvitationUpsertArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitation.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends InvitationCountArgs>(
      args?: Subset<T, InvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvitationAggregateArgs>(args: Subset<T, InvitationAggregateArgs>): Prisma.PrismaPromise<GetInvitationAggregateType<T>>

    /**
     * Group by Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationGroupByArgs} args - Group by arguments.
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
      T extends InvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationGroupByArgs['orderBy'] }
        : { orderBy?: InvitationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invitation model
   */
  readonly fields: InvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Invitation model
   */
  interface InvitationFieldRefs {
    readonly id: FieldRef<"Invitation", 'String'>
    readonly name: FieldRef<"Invitation", 'String'>
    readonly phone: FieldRef<"Invitation", 'String'>
    readonly createdAt: FieldRef<"Invitation", 'DateTime'>
    readonly updatedAt: FieldRef<"Invitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invitation findUnique
   */
  export type InvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findUniqueOrThrow
   */
  export type InvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findFirst
   */
  export type InvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findFirstOrThrow
   */
  export type InvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findMany
   */
  export type InvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation create
   */
  export type InvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data needed to create a Invitation.
     */
    data: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
  }

  /**
   * Invitation createMany
   */
  export type InvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invitation createManyAndReturn
   */
  export type InvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invitation update
   */
  export type InvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data needed to update a Invitation.
     */
    data: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
    /**
     * Choose, which Invitation to update.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation updateMany
   */
  export type InvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
  }

  /**
   * Invitation updateManyAndReturn
   */
  export type InvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
  }

  /**
   * Invitation upsert
   */
  export type InvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The filter to search for the Invitation to update in case it exists.
     */
    where: InvitationWhereUniqueInput
    /**
     * In case the Invitation found by the `where` argument doesn't exist, create a new Invitation with this data.
     */
    create: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
    /**
     * In case the Invitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
  }

  /**
   * Invitation delete
   */
  export type InvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Filter which Invitation to delete.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation deleteMany
   */
  export type InvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitations to delete
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to delete.
     */
    limit?: number
  }

  /**
   * Invitation without action
   */
  export type InvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    status: $Enums.AttendanceStatus | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    status: $Enums.AttendanceStatus | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    status: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    status?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    status?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    status?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    name: string
    phone: string | null
    status: $Enums.AttendanceStatus
    message: string | null
    createdAt: Date
    updatedAt: Date
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "status" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["attendance"]>

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string | null
      status: $Enums.AttendanceStatus
      message: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly name: FieldRef<"Attendance", 'String'>
    readonly phone: FieldRef<"Attendance", 'String'>
    readonly status: FieldRef<"Attendance", 'AttendanceStatus'>
    readonly message: FieldRef<"Attendance", 'String'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
    readonly updatedAt: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
  }


  /**
   * Model Wedding
   */

  export type AggregateWedding = {
    _count: WeddingCountAggregateOutputType | null
    _min: WeddingMinAggregateOutputType | null
    _max: WeddingMaxAggregateOutputType | null
  }

  export type WeddingMinAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    groomShortName: string | null
    brideShortName: string | null
    groomFullName: string | null
    brideFullName: string | null
    groomParents: string | null
    brideParents: string | null
    groomChildOrder: string | null
    brideChildOrder: string | null
    eventDate: Date | null
    dateLabel: string | null
    timeLabel: string | null
    venueName: string | null
    venueAddress: string | null
    mapUrl: string | null
    template: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeddingMaxAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    groomShortName: string | null
    brideShortName: string | null
    groomFullName: string | null
    brideFullName: string | null
    groomParents: string | null
    brideParents: string | null
    groomChildOrder: string | null
    brideChildOrder: string | null
    eventDate: Date | null
    dateLabel: string | null
    timeLabel: string | null
    venueName: string | null
    venueAddress: string | null
    mapUrl: string | null
    template: string | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeddingCountAggregateOutputType = {
    id: number
    key: number
    name: number
    groomShortName: number
    brideShortName: number
    groomFullName: number
    brideFullName: number
    groomParents: number
    brideParents: number
    groomChildOrder: number
    brideChildOrder: number
    eventDate: number
    dateLabel: number
    timeLabel: number
    venueName: number
    venueAddress: number
    mapUrl: number
    template: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WeddingMinAggregateInputType = {
    id?: true
    key?: true
    name?: true
    groomShortName?: true
    brideShortName?: true
    groomFullName?: true
    brideFullName?: true
    groomParents?: true
    brideParents?: true
    groomChildOrder?: true
    brideChildOrder?: true
    eventDate?: true
    dateLabel?: true
    timeLabel?: true
    venueName?: true
    venueAddress?: true
    mapUrl?: true
    template?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeddingMaxAggregateInputType = {
    id?: true
    key?: true
    name?: true
    groomShortName?: true
    brideShortName?: true
    groomFullName?: true
    brideFullName?: true
    groomParents?: true
    brideParents?: true
    groomChildOrder?: true
    brideChildOrder?: true
    eventDate?: true
    dateLabel?: true
    timeLabel?: true
    venueName?: true
    venueAddress?: true
    mapUrl?: true
    template?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeddingCountAggregateInputType = {
    id?: true
    key?: true
    name?: true
    groomShortName?: true
    brideShortName?: true
    groomFullName?: true
    brideFullName?: true
    groomParents?: true
    brideParents?: true
    groomChildOrder?: true
    brideChildOrder?: true
    eventDate?: true
    dateLabel?: true
    timeLabel?: true
    venueName?: true
    venueAddress?: true
    mapUrl?: true
    template?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WeddingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wedding to aggregate.
     */
    where?: WeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weddings to fetch.
     */
    orderBy?: WeddingOrderByWithRelationInput | WeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Weddings
    **/
    _count?: true | WeddingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeddingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeddingMaxAggregateInputType
  }

  export type GetWeddingAggregateType<T extends WeddingAggregateArgs> = {
        [P in keyof T & keyof AggregateWedding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWedding[P]>
      : GetScalarType<T[P], AggregateWedding[P]>
  }




  export type WeddingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeddingWhereInput
    orderBy?: WeddingOrderByWithAggregationInput | WeddingOrderByWithAggregationInput[]
    by: WeddingScalarFieldEnum[] | WeddingScalarFieldEnum
    having?: WeddingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeddingCountAggregateInputType | true
    _min?: WeddingMinAggregateInputType
    _max?: WeddingMaxAggregateInputType
  }

  export type WeddingGroupByOutputType = {
    id: string
    key: string
    name: string
    groomShortName: string
    brideShortName: string
    groomFullName: string
    brideFullName: string
    groomParents: string | null
    brideParents: string | null
    groomChildOrder: string | null
    brideChildOrder: string | null
    eventDate: Date | null
    dateLabel: string | null
    timeLabel: string | null
    venueName: string | null
    venueAddress: string | null
    mapUrl: string | null
    template: string
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: WeddingCountAggregateOutputType | null
    _min: WeddingMinAggregateOutputType | null
    _max: WeddingMaxAggregateOutputType | null
  }

  type GetWeddingGroupByPayload<T extends WeddingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeddingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeddingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeddingGroupByOutputType[P]>
            : GetScalarType<T[P], WeddingGroupByOutputType[P]>
        }
      >
    >


  export type WeddingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    groomShortName?: boolean
    brideShortName?: boolean
    groomFullName?: boolean
    brideFullName?: boolean
    groomParents?: boolean
    brideParents?: boolean
    groomChildOrder?: boolean
    brideChildOrder?: boolean
    eventDate?: boolean
    dateLabel?: boolean
    timeLabel?: boolean
    venueName?: boolean
    venueAddress?: boolean
    mapUrl?: boolean
    template?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    guests?: boolean | Wedding$guestsArgs<ExtArgs>
    rsvps?: boolean | Wedding$rsvpsArgs<ExtArgs>
    analytics?: boolean | Wedding$analyticsArgs<ExtArgs>
    _count?: boolean | WeddingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wedding"]>

  export type WeddingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    groomShortName?: boolean
    brideShortName?: boolean
    groomFullName?: boolean
    brideFullName?: boolean
    groomParents?: boolean
    brideParents?: boolean
    groomChildOrder?: boolean
    brideChildOrder?: boolean
    eventDate?: boolean
    dateLabel?: boolean
    timeLabel?: boolean
    venueName?: boolean
    venueAddress?: boolean
    mapUrl?: boolean
    template?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["wedding"]>

  export type WeddingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    groomShortName?: boolean
    brideShortName?: boolean
    groomFullName?: boolean
    brideFullName?: boolean
    groomParents?: boolean
    brideParents?: boolean
    groomChildOrder?: boolean
    brideChildOrder?: boolean
    eventDate?: boolean
    dateLabel?: boolean
    timeLabel?: boolean
    venueName?: boolean
    venueAddress?: boolean
    mapUrl?: boolean
    template?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["wedding"]>

  export type WeddingSelectScalar = {
    id?: boolean
    key?: boolean
    name?: boolean
    groomShortName?: boolean
    brideShortName?: boolean
    groomFullName?: boolean
    brideFullName?: boolean
    groomParents?: boolean
    brideParents?: boolean
    groomChildOrder?: boolean
    brideChildOrder?: boolean
    eventDate?: boolean
    dateLabel?: boolean
    timeLabel?: boolean
    venueName?: boolean
    venueAddress?: boolean
    mapUrl?: boolean
    template?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WeddingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "name" | "groomShortName" | "brideShortName" | "groomFullName" | "brideFullName" | "groomParents" | "brideParents" | "groomChildOrder" | "brideChildOrder" | "eventDate" | "dateLabel" | "timeLabel" | "venueName" | "venueAddress" | "mapUrl" | "template" | "isPublished" | "createdAt" | "updatedAt", ExtArgs["result"]["wedding"]>
  export type WeddingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guests?: boolean | Wedding$guestsArgs<ExtArgs>
    rsvps?: boolean | Wedding$rsvpsArgs<ExtArgs>
    analytics?: boolean | Wedding$analyticsArgs<ExtArgs>
    _count?: boolean | WeddingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WeddingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WeddingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WeddingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wedding"
    objects: {
      guests: Prisma.$WeddingGuestPayload<ExtArgs>[]
      rsvps: Prisma.$WeddingRsvpPayload<ExtArgs>[]
      analytics: Prisma.$WeddingAnalyticsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      name: string
      groomShortName: string
      brideShortName: string
      groomFullName: string
      brideFullName: string
      groomParents: string | null
      brideParents: string | null
      groomChildOrder: string | null
      brideChildOrder: string | null
      eventDate: Date | null
      dateLabel: string | null
      timeLabel: string | null
      venueName: string | null
      venueAddress: string | null
      mapUrl: string | null
      template: string
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["wedding"]>
    composites: {}
  }

  type WeddingGetPayload<S extends boolean | null | undefined | WeddingDefaultArgs> = $Result.GetResult<Prisma.$WeddingPayload, S>

  type WeddingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeddingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeddingCountAggregateInputType | true
    }

  export interface WeddingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wedding'], meta: { name: 'Wedding' } }
    /**
     * Find zero or one Wedding that matches the filter.
     * @param {WeddingFindUniqueArgs} args - Arguments to find a Wedding
     * @example
     * // Get one Wedding
     * const wedding = await prisma.wedding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeddingFindUniqueArgs>(args: SelectSubset<T, WeddingFindUniqueArgs<ExtArgs>>): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wedding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeddingFindUniqueOrThrowArgs} args - Arguments to find a Wedding
     * @example
     * // Get one Wedding
     * const wedding = await prisma.wedding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeddingFindUniqueOrThrowArgs>(args: SelectSubset<T, WeddingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wedding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingFindFirstArgs} args - Arguments to find a Wedding
     * @example
     * // Get one Wedding
     * const wedding = await prisma.wedding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeddingFindFirstArgs>(args?: SelectSubset<T, WeddingFindFirstArgs<ExtArgs>>): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wedding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingFindFirstOrThrowArgs} args - Arguments to find a Wedding
     * @example
     * // Get one Wedding
     * const wedding = await prisma.wedding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeddingFindFirstOrThrowArgs>(args?: SelectSubset<T, WeddingFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Weddings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weddings
     * const weddings = await prisma.wedding.findMany()
     * 
     * // Get first 10 Weddings
     * const weddings = await prisma.wedding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weddingWithIdOnly = await prisma.wedding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeddingFindManyArgs>(args?: SelectSubset<T, WeddingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wedding.
     * @param {WeddingCreateArgs} args - Arguments to create a Wedding.
     * @example
     * // Create one Wedding
     * const Wedding = await prisma.wedding.create({
     *   data: {
     *     // ... data to create a Wedding
     *   }
     * })
     * 
     */
    create<T extends WeddingCreateArgs>(args: SelectSubset<T, WeddingCreateArgs<ExtArgs>>): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Weddings.
     * @param {WeddingCreateManyArgs} args - Arguments to create many Weddings.
     * @example
     * // Create many Weddings
     * const wedding = await prisma.wedding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeddingCreateManyArgs>(args?: SelectSubset<T, WeddingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Weddings and returns the data saved in the database.
     * @param {WeddingCreateManyAndReturnArgs} args - Arguments to create many Weddings.
     * @example
     * // Create many Weddings
     * const wedding = await prisma.wedding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Weddings and only return the `id`
     * const weddingWithIdOnly = await prisma.wedding.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeddingCreateManyAndReturnArgs>(args?: SelectSubset<T, WeddingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wedding.
     * @param {WeddingDeleteArgs} args - Arguments to delete one Wedding.
     * @example
     * // Delete one Wedding
     * const Wedding = await prisma.wedding.delete({
     *   where: {
     *     // ... filter to delete one Wedding
     *   }
     * })
     * 
     */
    delete<T extends WeddingDeleteArgs>(args: SelectSubset<T, WeddingDeleteArgs<ExtArgs>>): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wedding.
     * @param {WeddingUpdateArgs} args - Arguments to update one Wedding.
     * @example
     * // Update one Wedding
     * const wedding = await prisma.wedding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeddingUpdateArgs>(args: SelectSubset<T, WeddingUpdateArgs<ExtArgs>>): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Weddings.
     * @param {WeddingDeleteManyArgs} args - Arguments to filter Weddings to delete.
     * @example
     * // Delete a few Weddings
     * const { count } = await prisma.wedding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeddingDeleteManyArgs>(args?: SelectSubset<T, WeddingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weddings
     * const wedding = await prisma.wedding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeddingUpdateManyArgs>(args: SelectSubset<T, WeddingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weddings and returns the data updated in the database.
     * @param {WeddingUpdateManyAndReturnArgs} args - Arguments to update many Weddings.
     * @example
     * // Update many Weddings
     * const wedding = await prisma.wedding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Weddings and only return the `id`
     * const weddingWithIdOnly = await prisma.wedding.updateManyAndReturn({
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
    updateManyAndReturn<T extends WeddingUpdateManyAndReturnArgs>(args: SelectSubset<T, WeddingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wedding.
     * @param {WeddingUpsertArgs} args - Arguments to update or create a Wedding.
     * @example
     * // Update or create a Wedding
     * const wedding = await prisma.wedding.upsert({
     *   create: {
     *     // ... data to create a Wedding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wedding we want to update
     *   }
     * })
     */
    upsert<T extends WeddingUpsertArgs>(args: SelectSubset<T, WeddingUpsertArgs<ExtArgs>>): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Weddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingCountArgs} args - Arguments to filter Weddings to count.
     * @example
     * // Count the number of Weddings
     * const count = await prisma.wedding.count({
     *   where: {
     *     // ... the filter for the Weddings we want to count
     *   }
     * })
    **/
    count<T extends WeddingCountArgs>(
      args?: Subset<T, WeddingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeddingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeddingAggregateArgs>(args: Subset<T, WeddingAggregateArgs>): Prisma.PrismaPromise<GetWeddingAggregateType<T>>

    /**
     * Group by Wedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingGroupByArgs} args - Group by arguments.
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
      T extends WeddingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeddingGroupByArgs['orderBy'] }
        : { orderBy?: WeddingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeddingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeddingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wedding model
   */
  readonly fields: WeddingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wedding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeddingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guests<T extends Wedding$guestsArgs<ExtArgs> = {}>(args?: Subset<T, Wedding$guestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeddingGuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rsvps<T extends Wedding$rsvpsArgs<ExtArgs> = {}>(args?: Subset<T, Wedding$rsvpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeddingRsvpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analytics<T extends Wedding$analyticsArgs<ExtArgs> = {}>(args?: Subset<T, Wedding$analyticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeddingAnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Wedding model
   */
  interface WeddingFieldRefs {
    readonly id: FieldRef<"Wedding", 'String'>
    readonly key: FieldRef<"Wedding", 'String'>
    readonly name: FieldRef<"Wedding", 'String'>
    readonly groomShortName: FieldRef<"Wedding", 'String'>
    readonly brideShortName: FieldRef<"Wedding", 'String'>
    readonly groomFullName: FieldRef<"Wedding", 'String'>
    readonly brideFullName: FieldRef<"Wedding", 'String'>
    readonly groomParents: FieldRef<"Wedding", 'String'>
    readonly brideParents: FieldRef<"Wedding", 'String'>
    readonly groomChildOrder: FieldRef<"Wedding", 'String'>
    readonly brideChildOrder: FieldRef<"Wedding", 'String'>
    readonly eventDate: FieldRef<"Wedding", 'DateTime'>
    readonly dateLabel: FieldRef<"Wedding", 'String'>
    readonly timeLabel: FieldRef<"Wedding", 'String'>
    readonly venueName: FieldRef<"Wedding", 'String'>
    readonly venueAddress: FieldRef<"Wedding", 'String'>
    readonly mapUrl: FieldRef<"Wedding", 'String'>
    readonly template: FieldRef<"Wedding", 'String'>
    readonly isPublished: FieldRef<"Wedding", 'Boolean'>
    readonly createdAt: FieldRef<"Wedding", 'DateTime'>
    readonly updatedAt: FieldRef<"Wedding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wedding findUnique
   */
  export type WeddingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wedding
     */
    omit?: WeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingInclude<ExtArgs> | null
    /**
     * Filter, which Wedding to fetch.
     */
    where: WeddingWhereUniqueInput
  }

  /**
   * Wedding findUniqueOrThrow
   */
  export type WeddingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wedding
     */
    omit?: WeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingInclude<ExtArgs> | null
    /**
     * Filter, which Wedding to fetch.
     */
    where: WeddingWhereUniqueInput
  }

  /**
   * Wedding findFirst
   */
  export type WeddingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wedding
     */
    omit?: WeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingInclude<ExtArgs> | null
    /**
     * Filter, which Wedding to fetch.
     */
    where?: WeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weddings to fetch.
     */
    orderBy?: WeddingOrderByWithRelationInput | WeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weddings.
     */
    cursor?: WeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weddings.
     */
    distinct?: WeddingScalarFieldEnum | WeddingScalarFieldEnum[]
  }

  /**
   * Wedding findFirstOrThrow
   */
  export type WeddingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wedding
     */
    omit?: WeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingInclude<ExtArgs> | null
    /**
     * Filter, which Wedding to fetch.
     */
    where?: WeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weddings to fetch.
     */
    orderBy?: WeddingOrderByWithRelationInput | WeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weddings.
     */
    cursor?: WeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weddings.
     */
    distinct?: WeddingScalarFieldEnum | WeddingScalarFieldEnum[]
  }

  /**
   * Wedding findMany
   */
  export type WeddingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wedding
     */
    omit?: WeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingInclude<ExtArgs> | null
    /**
     * Filter, which Weddings to fetch.
     */
    where?: WeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weddings to fetch.
     */
    orderBy?: WeddingOrderByWithRelationInput | WeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Weddings.
     */
    cursor?: WeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weddings.
     */
    skip?: number
    distinct?: WeddingScalarFieldEnum | WeddingScalarFieldEnum[]
  }

  /**
   * Wedding create
   */
  export type WeddingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wedding
     */
    omit?: WeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingInclude<ExtArgs> | null
    /**
     * The data needed to create a Wedding.
     */
    data: XOR<WeddingCreateInput, WeddingUncheckedCreateInput>
  }

  /**
   * Wedding createMany
   */
  export type WeddingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Weddings.
     */
    data: WeddingCreateManyInput | WeddingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wedding createManyAndReturn
   */
  export type WeddingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wedding
     */
    omit?: WeddingOmit<ExtArgs> | null
    /**
     * The data used to create many Weddings.
     */
    data: WeddingCreateManyInput | WeddingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wedding update
   */
  export type WeddingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wedding
     */
    omit?: WeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingInclude<ExtArgs> | null
    /**
     * The data needed to update a Wedding.
     */
    data: XOR<WeddingUpdateInput, WeddingUncheckedUpdateInput>
    /**
     * Choose, which Wedding to update.
     */
    where: WeddingWhereUniqueInput
  }

  /**
   * Wedding updateMany
   */
  export type WeddingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Weddings.
     */
    data: XOR<WeddingUpdateManyMutationInput, WeddingUncheckedUpdateManyInput>
    /**
     * Filter which Weddings to update
     */
    where?: WeddingWhereInput
    /**
     * Limit how many Weddings to update.
     */
    limit?: number
  }

  /**
   * Wedding updateManyAndReturn
   */
  export type WeddingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wedding
     */
    omit?: WeddingOmit<ExtArgs> | null
    /**
     * The data used to update Weddings.
     */
    data: XOR<WeddingUpdateManyMutationInput, WeddingUncheckedUpdateManyInput>
    /**
     * Filter which Weddings to update
     */
    where?: WeddingWhereInput
    /**
     * Limit how many Weddings to update.
     */
    limit?: number
  }

  /**
   * Wedding upsert
   */
  export type WeddingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wedding
     */
    omit?: WeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingInclude<ExtArgs> | null
    /**
     * The filter to search for the Wedding to update in case it exists.
     */
    where: WeddingWhereUniqueInput
    /**
     * In case the Wedding found by the `where` argument doesn't exist, create a new Wedding with this data.
     */
    create: XOR<WeddingCreateInput, WeddingUncheckedCreateInput>
    /**
     * In case the Wedding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeddingUpdateInput, WeddingUncheckedUpdateInput>
  }

  /**
   * Wedding delete
   */
  export type WeddingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wedding
     */
    omit?: WeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingInclude<ExtArgs> | null
    /**
     * Filter which Wedding to delete.
     */
    where: WeddingWhereUniqueInput
  }

  /**
   * Wedding deleteMany
   */
  export type WeddingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weddings to delete
     */
    where?: WeddingWhereInput
    /**
     * Limit how many Weddings to delete.
     */
    limit?: number
  }

  /**
   * Wedding.guests
   */
  export type Wedding$guestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingGuest
     */
    select?: WeddingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingGuest
     */
    omit?: WeddingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingGuestInclude<ExtArgs> | null
    where?: WeddingGuestWhereInput
    orderBy?: WeddingGuestOrderByWithRelationInput | WeddingGuestOrderByWithRelationInput[]
    cursor?: WeddingGuestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeddingGuestScalarFieldEnum | WeddingGuestScalarFieldEnum[]
  }

  /**
   * Wedding.rsvps
   */
  export type Wedding$rsvpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingRsvp
     */
    select?: WeddingRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingRsvp
     */
    omit?: WeddingRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingRsvpInclude<ExtArgs> | null
    where?: WeddingRsvpWhereInput
    orderBy?: WeddingRsvpOrderByWithRelationInput | WeddingRsvpOrderByWithRelationInput[]
    cursor?: WeddingRsvpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeddingRsvpScalarFieldEnum | WeddingRsvpScalarFieldEnum[]
  }

  /**
   * Wedding.analytics
   */
  export type Wedding$analyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingAnalytics
     */
    select?: WeddingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingAnalytics
     */
    omit?: WeddingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingAnalyticsInclude<ExtArgs> | null
    where?: WeddingAnalyticsWhereInput
    orderBy?: WeddingAnalyticsOrderByWithRelationInput | WeddingAnalyticsOrderByWithRelationInput[]
    cursor?: WeddingAnalyticsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeddingAnalyticsScalarFieldEnum | WeddingAnalyticsScalarFieldEnum[]
  }

  /**
   * Wedding without action
   */
  export type WeddingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wedding
     */
    select?: WeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wedding
     */
    omit?: WeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingInclude<ExtArgs> | null
  }


  /**
   * Model WeddingGuest
   */

  export type AggregateWeddingGuest = {
    _count: WeddingGuestCountAggregateOutputType | null
    _avg: WeddingGuestAvgAggregateOutputType | null
    _sum: WeddingGuestSumAggregateOutputType | null
    _min: WeddingGuestMinAggregateOutputType | null
    _max: WeddingGuestMaxAggregateOutputType | null
  }

  export type WeddingGuestAvgAggregateOutputType = {
    maxGuests: number | null
  }

  export type WeddingGuestSumAggregateOutputType = {
    maxGuests: number | null
  }

  export type WeddingGuestMinAggregateOutputType = {
    id: string | null
    weddingId: string | null
    name: string | null
    phone: string | null
    groupName: string | null
    maxGuests: number | null
    slug: string | null
    isActive: boolean | null
    isSent: boolean | null
    sentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeddingGuestMaxAggregateOutputType = {
    id: string | null
    weddingId: string | null
    name: string | null
    phone: string | null
    groupName: string | null
    maxGuests: number | null
    slug: string | null
    isActive: boolean | null
    isSent: boolean | null
    sentAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeddingGuestCountAggregateOutputType = {
    id: number
    weddingId: number
    name: number
    phone: number
    groupName: number
    maxGuests: number
    slug: number
    isActive: number
    isSent: number
    sentAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WeddingGuestAvgAggregateInputType = {
    maxGuests?: true
  }

  export type WeddingGuestSumAggregateInputType = {
    maxGuests?: true
  }

  export type WeddingGuestMinAggregateInputType = {
    id?: true
    weddingId?: true
    name?: true
    phone?: true
    groupName?: true
    maxGuests?: true
    slug?: true
    isActive?: true
    isSent?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeddingGuestMaxAggregateInputType = {
    id?: true
    weddingId?: true
    name?: true
    phone?: true
    groupName?: true
    maxGuests?: true
    slug?: true
    isActive?: true
    isSent?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeddingGuestCountAggregateInputType = {
    id?: true
    weddingId?: true
    name?: true
    phone?: true
    groupName?: true
    maxGuests?: true
    slug?: true
    isActive?: true
    isSent?: true
    sentAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WeddingGuestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeddingGuest to aggregate.
     */
    where?: WeddingGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeddingGuests to fetch.
     */
    orderBy?: WeddingGuestOrderByWithRelationInput | WeddingGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeddingGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeddingGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeddingGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeddingGuests
    **/
    _count?: true | WeddingGuestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeddingGuestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeddingGuestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeddingGuestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeddingGuestMaxAggregateInputType
  }

  export type GetWeddingGuestAggregateType<T extends WeddingGuestAggregateArgs> = {
        [P in keyof T & keyof AggregateWeddingGuest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeddingGuest[P]>
      : GetScalarType<T[P], AggregateWeddingGuest[P]>
  }




  export type WeddingGuestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeddingGuestWhereInput
    orderBy?: WeddingGuestOrderByWithAggregationInput | WeddingGuestOrderByWithAggregationInput[]
    by: WeddingGuestScalarFieldEnum[] | WeddingGuestScalarFieldEnum
    having?: WeddingGuestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeddingGuestCountAggregateInputType | true
    _avg?: WeddingGuestAvgAggregateInputType
    _sum?: WeddingGuestSumAggregateInputType
    _min?: WeddingGuestMinAggregateInputType
    _max?: WeddingGuestMaxAggregateInputType
  }

  export type WeddingGuestGroupByOutputType = {
    id: string
    weddingId: string
    name: string
    phone: string | null
    groupName: string | null
    maxGuests: number
    slug: string
    isActive: boolean
    isSent: boolean
    sentAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: WeddingGuestCountAggregateOutputType | null
    _avg: WeddingGuestAvgAggregateOutputType | null
    _sum: WeddingGuestSumAggregateOutputType | null
    _min: WeddingGuestMinAggregateOutputType | null
    _max: WeddingGuestMaxAggregateOutputType | null
  }

  type GetWeddingGuestGroupByPayload<T extends WeddingGuestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeddingGuestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeddingGuestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeddingGuestGroupByOutputType[P]>
            : GetScalarType<T[P], WeddingGuestGroupByOutputType[P]>
        }
      >
    >


  export type WeddingGuestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weddingId?: boolean
    name?: boolean
    phone?: boolean
    groupName?: boolean
    maxGuests?: boolean
    slug?: boolean
    isActive?: boolean
    isSent?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
    rsvp?: boolean | WeddingGuest$rsvpArgs<ExtArgs>
    analytics?: boolean | WeddingGuest$analyticsArgs<ExtArgs>
    _count?: boolean | WeddingGuestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weddingGuest"]>

  export type WeddingGuestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weddingId?: boolean
    name?: boolean
    phone?: boolean
    groupName?: boolean
    maxGuests?: boolean
    slug?: boolean
    isActive?: boolean
    isSent?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weddingGuest"]>

  export type WeddingGuestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weddingId?: boolean
    name?: boolean
    phone?: boolean
    groupName?: boolean
    maxGuests?: boolean
    slug?: boolean
    isActive?: boolean
    isSent?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weddingGuest"]>

  export type WeddingGuestSelectScalar = {
    id?: boolean
    weddingId?: boolean
    name?: boolean
    phone?: boolean
    groupName?: boolean
    maxGuests?: boolean
    slug?: boolean
    isActive?: boolean
    isSent?: boolean
    sentAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WeddingGuestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weddingId" | "name" | "phone" | "groupName" | "maxGuests" | "slug" | "isActive" | "isSent" | "sentAt" | "createdAt" | "updatedAt", ExtArgs["result"]["weddingGuest"]>
  export type WeddingGuestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
    rsvp?: boolean | WeddingGuest$rsvpArgs<ExtArgs>
    analytics?: boolean | WeddingGuest$analyticsArgs<ExtArgs>
    _count?: boolean | WeddingGuestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WeddingGuestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
  }
  export type WeddingGuestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
  }

  export type $WeddingGuestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeddingGuest"
    objects: {
      wedding: Prisma.$WeddingPayload<ExtArgs>
      rsvp: Prisma.$WeddingRsvpPayload<ExtArgs> | null
      analytics: Prisma.$WeddingAnalyticsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      weddingId: string
      name: string
      phone: string | null
      groupName: string | null
      maxGuests: number
      slug: string
      isActive: boolean
      isSent: boolean
      sentAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["weddingGuest"]>
    composites: {}
  }

  type WeddingGuestGetPayload<S extends boolean | null | undefined | WeddingGuestDefaultArgs> = $Result.GetResult<Prisma.$WeddingGuestPayload, S>

  type WeddingGuestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeddingGuestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeddingGuestCountAggregateInputType | true
    }

  export interface WeddingGuestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeddingGuest'], meta: { name: 'WeddingGuest' } }
    /**
     * Find zero or one WeddingGuest that matches the filter.
     * @param {WeddingGuestFindUniqueArgs} args - Arguments to find a WeddingGuest
     * @example
     * // Get one WeddingGuest
     * const weddingGuest = await prisma.weddingGuest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeddingGuestFindUniqueArgs>(args: SelectSubset<T, WeddingGuestFindUniqueArgs<ExtArgs>>): Prisma__WeddingGuestClient<$Result.GetResult<Prisma.$WeddingGuestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeddingGuest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeddingGuestFindUniqueOrThrowArgs} args - Arguments to find a WeddingGuest
     * @example
     * // Get one WeddingGuest
     * const weddingGuest = await prisma.weddingGuest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeddingGuestFindUniqueOrThrowArgs>(args: SelectSubset<T, WeddingGuestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeddingGuestClient<$Result.GetResult<Prisma.$WeddingGuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeddingGuest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingGuestFindFirstArgs} args - Arguments to find a WeddingGuest
     * @example
     * // Get one WeddingGuest
     * const weddingGuest = await prisma.weddingGuest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeddingGuestFindFirstArgs>(args?: SelectSubset<T, WeddingGuestFindFirstArgs<ExtArgs>>): Prisma__WeddingGuestClient<$Result.GetResult<Prisma.$WeddingGuestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeddingGuest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingGuestFindFirstOrThrowArgs} args - Arguments to find a WeddingGuest
     * @example
     * // Get one WeddingGuest
     * const weddingGuest = await prisma.weddingGuest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeddingGuestFindFirstOrThrowArgs>(args?: SelectSubset<T, WeddingGuestFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeddingGuestClient<$Result.GetResult<Prisma.$WeddingGuestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeddingGuests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingGuestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeddingGuests
     * const weddingGuests = await prisma.weddingGuest.findMany()
     * 
     * // Get first 10 WeddingGuests
     * const weddingGuests = await prisma.weddingGuest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weddingGuestWithIdOnly = await prisma.weddingGuest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeddingGuestFindManyArgs>(args?: SelectSubset<T, WeddingGuestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeddingGuestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeddingGuest.
     * @param {WeddingGuestCreateArgs} args - Arguments to create a WeddingGuest.
     * @example
     * // Create one WeddingGuest
     * const WeddingGuest = await prisma.weddingGuest.create({
     *   data: {
     *     // ... data to create a WeddingGuest
     *   }
     * })
     * 
     */
    create<T extends WeddingGuestCreateArgs>(args: SelectSubset<T, WeddingGuestCreateArgs<ExtArgs>>): Prisma__WeddingGuestClient<$Result.GetResult<Prisma.$WeddingGuestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeddingGuests.
     * @param {WeddingGuestCreateManyArgs} args - Arguments to create many WeddingGuests.
     * @example
     * // Create many WeddingGuests
     * const weddingGuest = await prisma.weddingGuest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeddingGuestCreateManyArgs>(args?: SelectSubset<T, WeddingGuestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeddingGuests and returns the data saved in the database.
     * @param {WeddingGuestCreateManyAndReturnArgs} args - Arguments to create many WeddingGuests.
     * @example
     * // Create many WeddingGuests
     * const weddingGuest = await prisma.weddingGuest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeddingGuests and only return the `id`
     * const weddingGuestWithIdOnly = await prisma.weddingGuest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeddingGuestCreateManyAndReturnArgs>(args?: SelectSubset<T, WeddingGuestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeddingGuestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeddingGuest.
     * @param {WeddingGuestDeleteArgs} args - Arguments to delete one WeddingGuest.
     * @example
     * // Delete one WeddingGuest
     * const WeddingGuest = await prisma.weddingGuest.delete({
     *   where: {
     *     // ... filter to delete one WeddingGuest
     *   }
     * })
     * 
     */
    delete<T extends WeddingGuestDeleteArgs>(args: SelectSubset<T, WeddingGuestDeleteArgs<ExtArgs>>): Prisma__WeddingGuestClient<$Result.GetResult<Prisma.$WeddingGuestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeddingGuest.
     * @param {WeddingGuestUpdateArgs} args - Arguments to update one WeddingGuest.
     * @example
     * // Update one WeddingGuest
     * const weddingGuest = await prisma.weddingGuest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeddingGuestUpdateArgs>(args: SelectSubset<T, WeddingGuestUpdateArgs<ExtArgs>>): Prisma__WeddingGuestClient<$Result.GetResult<Prisma.$WeddingGuestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeddingGuests.
     * @param {WeddingGuestDeleteManyArgs} args - Arguments to filter WeddingGuests to delete.
     * @example
     * // Delete a few WeddingGuests
     * const { count } = await prisma.weddingGuest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeddingGuestDeleteManyArgs>(args?: SelectSubset<T, WeddingGuestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeddingGuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingGuestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeddingGuests
     * const weddingGuest = await prisma.weddingGuest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeddingGuestUpdateManyArgs>(args: SelectSubset<T, WeddingGuestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeddingGuests and returns the data updated in the database.
     * @param {WeddingGuestUpdateManyAndReturnArgs} args - Arguments to update many WeddingGuests.
     * @example
     * // Update many WeddingGuests
     * const weddingGuest = await prisma.weddingGuest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeddingGuests and only return the `id`
     * const weddingGuestWithIdOnly = await prisma.weddingGuest.updateManyAndReturn({
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
    updateManyAndReturn<T extends WeddingGuestUpdateManyAndReturnArgs>(args: SelectSubset<T, WeddingGuestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeddingGuestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeddingGuest.
     * @param {WeddingGuestUpsertArgs} args - Arguments to update or create a WeddingGuest.
     * @example
     * // Update or create a WeddingGuest
     * const weddingGuest = await prisma.weddingGuest.upsert({
     *   create: {
     *     // ... data to create a WeddingGuest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeddingGuest we want to update
     *   }
     * })
     */
    upsert<T extends WeddingGuestUpsertArgs>(args: SelectSubset<T, WeddingGuestUpsertArgs<ExtArgs>>): Prisma__WeddingGuestClient<$Result.GetResult<Prisma.$WeddingGuestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeddingGuests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingGuestCountArgs} args - Arguments to filter WeddingGuests to count.
     * @example
     * // Count the number of WeddingGuests
     * const count = await prisma.weddingGuest.count({
     *   where: {
     *     // ... the filter for the WeddingGuests we want to count
     *   }
     * })
    **/
    count<T extends WeddingGuestCountArgs>(
      args?: Subset<T, WeddingGuestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeddingGuestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeddingGuest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingGuestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeddingGuestAggregateArgs>(args: Subset<T, WeddingGuestAggregateArgs>): Prisma.PrismaPromise<GetWeddingGuestAggregateType<T>>

    /**
     * Group by WeddingGuest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingGuestGroupByArgs} args - Group by arguments.
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
      T extends WeddingGuestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeddingGuestGroupByArgs['orderBy'] }
        : { orderBy?: WeddingGuestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeddingGuestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeddingGuestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeddingGuest model
   */
  readonly fields: WeddingGuestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeddingGuest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeddingGuestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wedding<T extends WeddingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeddingDefaultArgs<ExtArgs>>): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rsvp<T extends WeddingGuest$rsvpArgs<ExtArgs> = {}>(args?: Subset<T, WeddingGuest$rsvpArgs<ExtArgs>>): Prisma__WeddingRsvpClient<$Result.GetResult<Prisma.$WeddingRsvpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    analytics<T extends WeddingGuest$analyticsArgs<ExtArgs> = {}>(args?: Subset<T, WeddingGuest$analyticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeddingAnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WeddingGuest model
   */
  interface WeddingGuestFieldRefs {
    readonly id: FieldRef<"WeddingGuest", 'String'>
    readonly weddingId: FieldRef<"WeddingGuest", 'String'>
    readonly name: FieldRef<"WeddingGuest", 'String'>
    readonly phone: FieldRef<"WeddingGuest", 'String'>
    readonly groupName: FieldRef<"WeddingGuest", 'String'>
    readonly maxGuests: FieldRef<"WeddingGuest", 'Int'>
    readonly slug: FieldRef<"WeddingGuest", 'String'>
    readonly isActive: FieldRef<"WeddingGuest", 'Boolean'>
    readonly isSent: FieldRef<"WeddingGuest", 'Boolean'>
    readonly sentAt: FieldRef<"WeddingGuest", 'DateTime'>
    readonly createdAt: FieldRef<"WeddingGuest", 'DateTime'>
    readonly updatedAt: FieldRef<"WeddingGuest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeddingGuest findUnique
   */
  export type WeddingGuestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingGuest
     */
    select?: WeddingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingGuest
     */
    omit?: WeddingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingGuestInclude<ExtArgs> | null
    /**
     * Filter, which WeddingGuest to fetch.
     */
    where: WeddingGuestWhereUniqueInput
  }

  /**
   * WeddingGuest findUniqueOrThrow
   */
  export type WeddingGuestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingGuest
     */
    select?: WeddingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingGuest
     */
    omit?: WeddingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingGuestInclude<ExtArgs> | null
    /**
     * Filter, which WeddingGuest to fetch.
     */
    where: WeddingGuestWhereUniqueInput
  }

  /**
   * WeddingGuest findFirst
   */
  export type WeddingGuestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingGuest
     */
    select?: WeddingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingGuest
     */
    omit?: WeddingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingGuestInclude<ExtArgs> | null
    /**
     * Filter, which WeddingGuest to fetch.
     */
    where?: WeddingGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeddingGuests to fetch.
     */
    orderBy?: WeddingGuestOrderByWithRelationInput | WeddingGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeddingGuests.
     */
    cursor?: WeddingGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeddingGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeddingGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeddingGuests.
     */
    distinct?: WeddingGuestScalarFieldEnum | WeddingGuestScalarFieldEnum[]
  }

  /**
   * WeddingGuest findFirstOrThrow
   */
  export type WeddingGuestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingGuest
     */
    select?: WeddingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingGuest
     */
    omit?: WeddingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingGuestInclude<ExtArgs> | null
    /**
     * Filter, which WeddingGuest to fetch.
     */
    where?: WeddingGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeddingGuests to fetch.
     */
    orderBy?: WeddingGuestOrderByWithRelationInput | WeddingGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeddingGuests.
     */
    cursor?: WeddingGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeddingGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeddingGuests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeddingGuests.
     */
    distinct?: WeddingGuestScalarFieldEnum | WeddingGuestScalarFieldEnum[]
  }

  /**
   * WeddingGuest findMany
   */
  export type WeddingGuestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingGuest
     */
    select?: WeddingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingGuest
     */
    omit?: WeddingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingGuestInclude<ExtArgs> | null
    /**
     * Filter, which WeddingGuests to fetch.
     */
    where?: WeddingGuestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeddingGuests to fetch.
     */
    orderBy?: WeddingGuestOrderByWithRelationInput | WeddingGuestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeddingGuests.
     */
    cursor?: WeddingGuestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeddingGuests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeddingGuests.
     */
    skip?: number
    distinct?: WeddingGuestScalarFieldEnum | WeddingGuestScalarFieldEnum[]
  }

  /**
   * WeddingGuest create
   */
  export type WeddingGuestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingGuest
     */
    select?: WeddingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingGuest
     */
    omit?: WeddingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingGuestInclude<ExtArgs> | null
    /**
     * The data needed to create a WeddingGuest.
     */
    data: XOR<WeddingGuestCreateInput, WeddingGuestUncheckedCreateInput>
  }

  /**
   * WeddingGuest createMany
   */
  export type WeddingGuestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeddingGuests.
     */
    data: WeddingGuestCreateManyInput | WeddingGuestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeddingGuest createManyAndReturn
   */
  export type WeddingGuestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingGuest
     */
    select?: WeddingGuestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingGuest
     */
    omit?: WeddingGuestOmit<ExtArgs> | null
    /**
     * The data used to create many WeddingGuests.
     */
    data: WeddingGuestCreateManyInput | WeddingGuestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingGuestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeddingGuest update
   */
  export type WeddingGuestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingGuest
     */
    select?: WeddingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingGuest
     */
    omit?: WeddingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingGuestInclude<ExtArgs> | null
    /**
     * The data needed to update a WeddingGuest.
     */
    data: XOR<WeddingGuestUpdateInput, WeddingGuestUncheckedUpdateInput>
    /**
     * Choose, which WeddingGuest to update.
     */
    where: WeddingGuestWhereUniqueInput
  }

  /**
   * WeddingGuest updateMany
   */
  export type WeddingGuestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeddingGuests.
     */
    data: XOR<WeddingGuestUpdateManyMutationInput, WeddingGuestUncheckedUpdateManyInput>
    /**
     * Filter which WeddingGuests to update
     */
    where?: WeddingGuestWhereInput
    /**
     * Limit how many WeddingGuests to update.
     */
    limit?: number
  }

  /**
   * WeddingGuest updateManyAndReturn
   */
  export type WeddingGuestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingGuest
     */
    select?: WeddingGuestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingGuest
     */
    omit?: WeddingGuestOmit<ExtArgs> | null
    /**
     * The data used to update WeddingGuests.
     */
    data: XOR<WeddingGuestUpdateManyMutationInput, WeddingGuestUncheckedUpdateManyInput>
    /**
     * Filter which WeddingGuests to update
     */
    where?: WeddingGuestWhereInput
    /**
     * Limit how many WeddingGuests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingGuestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeddingGuest upsert
   */
  export type WeddingGuestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingGuest
     */
    select?: WeddingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingGuest
     */
    omit?: WeddingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingGuestInclude<ExtArgs> | null
    /**
     * The filter to search for the WeddingGuest to update in case it exists.
     */
    where: WeddingGuestWhereUniqueInput
    /**
     * In case the WeddingGuest found by the `where` argument doesn't exist, create a new WeddingGuest with this data.
     */
    create: XOR<WeddingGuestCreateInput, WeddingGuestUncheckedCreateInput>
    /**
     * In case the WeddingGuest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeddingGuestUpdateInput, WeddingGuestUncheckedUpdateInput>
  }

  /**
   * WeddingGuest delete
   */
  export type WeddingGuestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingGuest
     */
    select?: WeddingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingGuest
     */
    omit?: WeddingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingGuestInclude<ExtArgs> | null
    /**
     * Filter which WeddingGuest to delete.
     */
    where: WeddingGuestWhereUniqueInput
  }

  /**
   * WeddingGuest deleteMany
   */
  export type WeddingGuestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeddingGuests to delete
     */
    where?: WeddingGuestWhereInput
    /**
     * Limit how many WeddingGuests to delete.
     */
    limit?: number
  }

  /**
   * WeddingGuest.rsvp
   */
  export type WeddingGuest$rsvpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingRsvp
     */
    select?: WeddingRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingRsvp
     */
    omit?: WeddingRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingRsvpInclude<ExtArgs> | null
    where?: WeddingRsvpWhereInput
  }

  /**
   * WeddingGuest.analytics
   */
  export type WeddingGuest$analyticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingAnalytics
     */
    select?: WeddingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingAnalytics
     */
    omit?: WeddingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingAnalyticsInclude<ExtArgs> | null
    where?: WeddingAnalyticsWhereInput
    orderBy?: WeddingAnalyticsOrderByWithRelationInput | WeddingAnalyticsOrderByWithRelationInput[]
    cursor?: WeddingAnalyticsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeddingAnalyticsScalarFieldEnum | WeddingAnalyticsScalarFieldEnum[]
  }

  /**
   * WeddingGuest without action
   */
  export type WeddingGuestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingGuest
     */
    select?: WeddingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingGuest
     */
    omit?: WeddingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingGuestInclude<ExtArgs> | null
  }


  /**
   * Model WeddingRsvp
   */

  export type AggregateWeddingRsvp = {
    _count: WeddingRsvpCountAggregateOutputType | null
    _avg: WeddingRsvpAvgAggregateOutputType | null
    _sum: WeddingRsvpSumAggregateOutputType | null
    _min: WeddingRsvpMinAggregateOutputType | null
    _max: WeddingRsvpMaxAggregateOutputType | null
  }

  export type WeddingRsvpAvgAggregateOutputType = {
    guestCount: number | null
  }

  export type WeddingRsvpSumAggregateOutputType = {
    guestCount: number | null
  }

  export type WeddingRsvpMinAggregateOutputType = {
    id: string | null
    weddingId: string | null
    guestId: string | null
    name: string | null
    phone: string | null
    status: $Enums.AttendanceStatus | null
    guestCount: number | null
    message: string | null
    isHidden: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeddingRsvpMaxAggregateOutputType = {
    id: string | null
    weddingId: string | null
    guestId: string | null
    name: string | null
    phone: string | null
    status: $Enums.AttendanceStatus | null
    guestCount: number | null
    message: string | null
    isHidden: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeddingRsvpCountAggregateOutputType = {
    id: number
    weddingId: number
    guestId: number
    name: number
    phone: number
    status: number
    guestCount: number
    message: number
    isHidden: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WeddingRsvpAvgAggregateInputType = {
    guestCount?: true
  }

  export type WeddingRsvpSumAggregateInputType = {
    guestCount?: true
  }

  export type WeddingRsvpMinAggregateInputType = {
    id?: true
    weddingId?: true
    guestId?: true
    name?: true
    phone?: true
    status?: true
    guestCount?: true
    message?: true
    isHidden?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeddingRsvpMaxAggregateInputType = {
    id?: true
    weddingId?: true
    guestId?: true
    name?: true
    phone?: true
    status?: true
    guestCount?: true
    message?: true
    isHidden?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeddingRsvpCountAggregateInputType = {
    id?: true
    weddingId?: true
    guestId?: true
    name?: true
    phone?: true
    status?: true
    guestCount?: true
    message?: true
    isHidden?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WeddingRsvpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeddingRsvp to aggregate.
     */
    where?: WeddingRsvpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeddingRsvps to fetch.
     */
    orderBy?: WeddingRsvpOrderByWithRelationInput | WeddingRsvpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeddingRsvpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeddingRsvps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeddingRsvps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeddingRsvps
    **/
    _count?: true | WeddingRsvpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeddingRsvpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeddingRsvpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeddingRsvpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeddingRsvpMaxAggregateInputType
  }

  export type GetWeddingRsvpAggregateType<T extends WeddingRsvpAggregateArgs> = {
        [P in keyof T & keyof AggregateWeddingRsvp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeddingRsvp[P]>
      : GetScalarType<T[P], AggregateWeddingRsvp[P]>
  }




  export type WeddingRsvpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeddingRsvpWhereInput
    orderBy?: WeddingRsvpOrderByWithAggregationInput | WeddingRsvpOrderByWithAggregationInput[]
    by: WeddingRsvpScalarFieldEnum[] | WeddingRsvpScalarFieldEnum
    having?: WeddingRsvpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeddingRsvpCountAggregateInputType | true
    _avg?: WeddingRsvpAvgAggregateInputType
    _sum?: WeddingRsvpSumAggregateInputType
    _min?: WeddingRsvpMinAggregateInputType
    _max?: WeddingRsvpMaxAggregateInputType
  }

  export type WeddingRsvpGroupByOutputType = {
    id: string
    weddingId: string
    guestId: string | null
    name: string
    phone: string | null
    status: $Enums.AttendanceStatus
    guestCount: number
    message: string | null
    isHidden: boolean
    createdAt: Date
    updatedAt: Date
    _count: WeddingRsvpCountAggregateOutputType | null
    _avg: WeddingRsvpAvgAggregateOutputType | null
    _sum: WeddingRsvpSumAggregateOutputType | null
    _min: WeddingRsvpMinAggregateOutputType | null
    _max: WeddingRsvpMaxAggregateOutputType | null
  }

  type GetWeddingRsvpGroupByPayload<T extends WeddingRsvpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeddingRsvpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeddingRsvpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeddingRsvpGroupByOutputType[P]>
            : GetScalarType<T[P], WeddingRsvpGroupByOutputType[P]>
        }
      >
    >


  export type WeddingRsvpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weddingId?: boolean
    guestId?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    guestCount?: boolean
    message?: boolean
    isHidden?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
    guest?: boolean | WeddingRsvp$guestArgs<ExtArgs>
  }, ExtArgs["result"]["weddingRsvp"]>

  export type WeddingRsvpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weddingId?: boolean
    guestId?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    guestCount?: boolean
    message?: boolean
    isHidden?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
    guest?: boolean | WeddingRsvp$guestArgs<ExtArgs>
  }, ExtArgs["result"]["weddingRsvp"]>

  export type WeddingRsvpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weddingId?: boolean
    guestId?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    guestCount?: boolean
    message?: boolean
    isHidden?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
    guest?: boolean | WeddingRsvp$guestArgs<ExtArgs>
  }, ExtArgs["result"]["weddingRsvp"]>

  export type WeddingRsvpSelectScalar = {
    id?: boolean
    weddingId?: boolean
    guestId?: boolean
    name?: boolean
    phone?: boolean
    status?: boolean
    guestCount?: boolean
    message?: boolean
    isHidden?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WeddingRsvpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weddingId" | "guestId" | "name" | "phone" | "status" | "guestCount" | "message" | "isHidden" | "createdAt" | "updatedAt", ExtArgs["result"]["weddingRsvp"]>
  export type WeddingRsvpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
    guest?: boolean | WeddingRsvp$guestArgs<ExtArgs>
  }
  export type WeddingRsvpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
    guest?: boolean | WeddingRsvp$guestArgs<ExtArgs>
  }
  export type WeddingRsvpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
    guest?: boolean | WeddingRsvp$guestArgs<ExtArgs>
  }

  export type $WeddingRsvpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeddingRsvp"
    objects: {
      wedding: Prisma.$WeddingPayload<ExtArgs>
      guest: Prisma.$WeddingGuestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      weddingId: string
      guestId: string | null
      name: string
      phone: string | null
      status: $Enums.AttendanceStatus
      guestCount: number
      message: string | null
      isHidden: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["weddingRsvp"]>
    composites: {}
  }

  type WeddingRsvpGetPayload<S extends boolean | null | undefined | WeddingRsvpDefaultArgs> = $Result.GetResult<Prisma.$WeddingRsvpPayload, S>

  type WeddingRsvpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeddingRsvpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeddingRsvpCountAggregateInputType | true
    }

  export interface WeddingRsvpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeddingRsvp'], meta: { name: 'WeddingRsvp' } }
    /**
     * Find zero or one WeddingRsvp that matches the filter.
     * @param {WeddingRsvpFindUniqueArgs} args - Arguments to find a WeddingRsvp
     * @example
     * // Get one WeddingRsvp
     * const weddingRsvp = await prisma.weddingRsvp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeddingRsvpFindUniqueArgs>(args: SelectSubset<T, WeddingRsvpFindUniqueArgs<ExtArgs>>): Prisma__WeddingRsvpClient<$Result.GetResult<Prisma.$WeddingRsvpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeddingRsvp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeddingRsvpFindUniqueOrThrowArgs} args - Arguments to find a WeddingRsvp
     * @example
     * // Get one WeddingRsvp
     * const weddingRsvp = await prisma.weddingRsvp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeddingRsvpFindUniqueOrThrowArgs>(args: SelectSubset<T, WeddingRsvpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeddingRsvpClient<$Result.GetResult<Prisma.$WeddingRsvpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeddingRsvp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingRsvpFindFirstArgs} args - Arguments to find a WeddingRsvp
     * @example
     * // Get one WeddingRsvp
     * const weddingRsvp = await prisma.weddingRsvp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeddingRsvpFindFirstArgs>(args?: SelectSubset<T, WeddingRsvpFindFirstArgs<ExtArgs>>): Prisma__WeddingRsvpClient<$Result.GetResult<Prisma.$WeddingRsvpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeddingRsvp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingRsvpFindFirstOrThrowArgs} args - Arguments to find a WeddingRsvp
     * @example
     * // Get one WeddingRsvp
     * const weddingRsvp = await prisma.weddingRsvp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeddingRsvpFindFirstOrThrowArgs>(args?: SelectSubset<T, WeddingRsvpFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeddingRsvpClient<$Result.GetResult<Prisma.$WeddingRsvpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeddingRsvps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingRsvpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeddingRsvps
     * const weddingRsvps = await prisma.weddingRsvp.findMany()
     * 
     * // Get first 10 WeddingRsvps
     * const weddingRsvps = await prisma.weddingRsvp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weddingRsvpWithIdOnly = await prisma.weddingRsvp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeddingRsvpFindManyArgs>(args?: SelectSubset<T, WeddingRsvpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeddingRsvpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeddingRsvp.
     * @param {WeddingRsvpCreateArgs} args - Arguments to create a WeddingRsvp.
     * @example
     * // Create one WeddingRsvp
     * const WeddingRsvp = await prisma.weddingRsvp.create({
     *   data: {
     *     // ... data to create a WeddingRsvp
     *   }
     * })
     * 
     */
    create<T extends WeddingRsvpCreateArgs>(args: SelectSubset<T, WeddingRsvpCreateArgs<ExtArgs>>): Prisma__WeddingRsvpClient<$Result.GetResult<Prisma.$WeddingRsvpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeddingRsvps.
     * @param {WeddingRsvpCreateManyArgs} args - Arguments to create many WeddingRsvps.
     * @example
     * // Create many WeddingRsvps
     * const weddingRsvp = await prisma.weddingRsvp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeddingRsvpCreateManyArgs>(args?: SelectSubset<T, WeddingRsvpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeddingRsvps and returns the data saved in the database.
     * @param {WeddingRsvpCreateManyAndReturnArgs} args - Arguments to create many WeddingRsvps.
     * @example
     * // Create many WeddingRsvps
     * const weddingRsvp = await prisma.weddingRsvp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeddingRsvps and only return the `id`
     * const weddingRsvpWithIdOnly = await prisma.weddingRsvp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeddingRsvpCreateManyAndReturnArgs>(args?: SelectSubset<T, WeddingRsvpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeddingRsvpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeddingRsvp.
     * @param {WeddingRsvpDeleteArgs} args - Arguments to delete one WeddingRsvp.
     * @example
     * // Delete one WeddingRsvp
     * const WeddingRsvp = await prisma.weddingRsvp.delete({
     *   where: {
     *     // ... filter to delete one WeddingRsvp
     *   }
     * })
     * 
     */
    delete<T extends WeddingRsvpDeleteArgs>(args: SelectSubset<T, WeddingRsvpDeleteArgs<ExtArgs>>): Prisma__WeddingRsvpClient<$Result.GetResult<Prisma.$WeddingRsvpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeddingRsvp.
     * @param {WeddingRsvpUpdateArgs} args - Arguments to update one WeddingRsvp.
     * @example
     * // Update one WeddingRsvp
     * const weddingRsvp = await prisma.weddingRsvp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeddingRsvpUpdateArgs>(args: SelectSubset<T, WeddingRsvpUpdateArgs<ExtArgs>>): Prisma__WeddingRsvpClient<$Result.GetResult<Prisma.$WeddingRsvpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeddingRsvps.
     * @param {WeddingRsvpDeleteManyArgs} args - Arguments to filter WeddingRsvps to delete.
     * @example
     * // Delete a few WeddingRsvps
     * const { count } = await prisma.weddingRsvp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeddingRsvpDeleteManyArgs>(args?: SelectSubset<T, WeddingRsvpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeddingRsvps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingRsvpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeddingRsvps
     * const weddingRsvp = await prisma.weddingRsvp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeddingRsvpUpdateManyArgs>(args: SelectSubset<T, WeddingRsvpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeddingRsvps and returns the data updated in the database.
     * @param {WeddingRsvpUpdateManyAndReturnArgs} args - Arguments to update many WeddingRsvps.
     * @example
     * // Update many WeddingRsvps
     * const weddingRsvp = await prisma.weddingRsvp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeddingRsvps and only return the `id`
     * const weddingRsvpWithIdOnly = await prisma.weddingRsvp.updateManyAndReturn({
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
    updateManyAndReturn<T extends WeddingRsvpUpdateManyAndReturnArgs>(args: SelectSubset<T, WeddingRsvpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeddingRsvpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeddingRsvp.
     * @param {WeddingRsvpUpsertArgs} args - Arguments to update or create a WeddingRsvp.
     * @example
     * // Update or create a WeddingRsvp
     * const weddingRsvp = await prisma.weddingRsvp.upsert({
     *   create: {
     *     // ... data to create a WeddingRsvp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeddingRsvp we want to update
     *   }
     * })
     */
    upsert<T extends WeddingRsvpUpsertArgs>(args: SelectSubset<T, WeddingRsvpUpsertArgs<ExtArgs>>): Prisma__WeddingRsvpClient<$Result.GetResult<Prisma.$WeddingRsvpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeddingRsvps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingRsvpCountArgs} args - Arguments to filter WeddingRsvps to count.
     * @example
     * // Count the number of WeddingRsvps
     * const count = await prisma.weddingRsvp.count({
     *   where: {
     *     // ... the filter for the WeddingRsvps we want to count
     *   }
     * })
    **/
    count<T extends WeddingRsvpCountArgs>(
      args?: Subset<T, WeddingRsvpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeddingRsvpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeddingRsvp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingRsvpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeddingRsvpAggregateArgs>(args: Subset<T, WeddingRsvpAggregateArgs>): Prisma.PrismaPromise<GetWeddingRsvpAggregateType<T>>

    /**
     * Group by WeddingRsvp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingRsvpGroupByArgs} args - Group by arguments.
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
      T extends WeddingRsvpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeddingRsvpGroupByArgs['orderBy'] }
        : { orderBy?: WeddingRsvpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeddingRsvpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeddingRsvpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeddingRsvp model
   */
  readonly fields: WeddingRsvpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeddingRsvp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeddingRsvpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wedding<T extends WeddingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeddingDefaultArgs<ExtArgs>>): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guest<T extends WeddingRsvp$guestArgs<ExtArgs> = {}>(args?: Subset<T, WeddingRsvp$guestArgs<ExtArgs>>): Prisma__WeddingGuestClient<$Result.GetResult<Prisma.$WeddingGuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WeddingRsvp model
   */
  interface WeddingRsvpFieldRefs {
    readonly id: FieldRef<"WeddingRsvp", 'String'>
    readonly weddingId: FieldRef<"WeddingRsvp", 'String'>
    readonly guestId: FieldRef<"WeddingRsvp", 'String'>
    readonly name: FieldRef<"WeddingRsvp", 'String'>
    readonly phone: FieldRef<"WeddingRsvp", 'String'>
    readonly status: FieldRef<"WeddingRsvp", 'AttendanceStatus'>
    readonly guestCount: FieldRef<"WeddingRsvp", 'Int'>
    readonly message: FieldRef<"WeddingRsvp", 'String'>
    readonly isHidden: FieldRef<"WeddingRsvp", 'Boolean'>
    readonly createdAt: FieldRef<"WeddingRsvp", 'DateTime'>
    readonly updatedAt: FieldRef<"WeddingRsvp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeddingRsvp findUnique
   */
  export type WeddingRsvpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingRsvp
     */
    select?: WeddingRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingRsvp
     */
    omit?: WeddingRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingRsvpInclude<ExtArgs> | null
    /**
     * Filter, which WeddingRsvp to fetch.
     */
    where: WeddingRsvpWhereUniqueInput
  }

  /**
   * WeddingRsvp findUniqueOrThrow
   */
  export type WeddingRsvpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingRsvp
     */
    select?: WeddingRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingRsvp
     */
    omit?: WeddingRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingRsvpInclude<ExtArgs> | null
    /**
     * Filter, which WeddingRsvp to fetch.
     */
    where: WeddingRsvpWhereUniqueInput
  }

  /**
   * WeddingRsvp findFirst
   */
  export type WeddingRsvpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingRsvp
     */
    select?: WeddingRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingRsvp
     */
    omit?: WeddingRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingRsvpInclude<ExtArgs> | null
    /**
     * Filter, which WeddingRsvp to fetch.
     */
    where?: WeddingRsvpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeddingRsvps to fetch.
     */
    orderBy?: WeddingRsvpOrderByWithRelationInput | WeddingRsvpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeddingRsvps.
     */
    cursor?: WeddingRsvpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeddingRsvps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeddingRsvps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeddingRsvps.
     */
    distinct?: WeddingRsvpScalarFieldEnum | WeddingRsvpScalarFieldEnum[]
  }

  /**
   * WeddingRsvp findFirstOrThrow
   */
  export type WeddingRsvpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingRsvp
     */
    select?: WeddingRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingRsvp
     */
    omit?: WeddingRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingRsvpInclude<ExtArgs> | null
    /**
     * Filter, which WeddingRsvp to fetch.
     */
    where?: WeddingRsvpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeddingRsvps to fetch.
     */
    orderBy?: WeddingRsvpOrderByWithRelationInput | WeddingRsvpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeddingRsvps.
     */
    cursor?: WeddingRsvpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeddingRsvps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeddingRsvps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeddingRsvps.
     */
    distinct?: WeddingRsvpScalarFieldEnum | WeddingRsvpScalarFieldEnum[]
  }

  /**
   * WeddingRsvp findMany
   */
  export type WeddingRsvpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingRsvp
     */
    select?: WeddingRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingRsvp
     */
    omit?: WeddingRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingRsvpInclude<ExtArgs> | null
    /**
     * Filter, which WeddingRsvps to fetch.
     */
    where?: WeddingRsvpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeddingRsvps to fetch.
     */
    orderBy?: WeddingRsvpOrderByWithRelationInput | WeddingRsvpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeddingRsvps.
     */
    cursor?: WeddingRsvpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeddingRsvps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeddingRsvps.
     */
    skip?: number
    distinct?: WeddingRsvpScalarFieldEnum | WeddingRsvpScalarFieldEnum[]
  }

  /**
   * WeddingRsvp create
   */
  export type WeddingRsvpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingRsvp
     */
    select?: WeddingRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingRsvp
     */
    omit?: WeddingRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingRsvpInclude<ExtArgs> | null
    /**
     * The data needed to create a WeddingRsvp.
     */
    data: XOR<WeddingRsvpCreateInput, WeddingRsvpUncheckedCreateInput>
  }

  /**
   * WeddingRsvp createMany
   */
  export type WeddingRsvpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeddingRsvps.
     */
    data: WeddingRsvpCreateManyInput | WeddingRsvpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeddingRsvp createManyAndReturn
   */
  export type WeddingRsvpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingRsvp
     */
    select?: WeddingRsvpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingRsvp
     */
    omit?: WeddingRsvpOmit<ExtArgs> | null
    /**
     * The data used to create many WeddingRsvps.
     */
    data: WeddingRsvpCreateManyInput | WeddingRsvpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingRsvpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeddingRsvp update
   */
  export type WeddingRsvpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingRsvp
     */
    select?: WeddingRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingRsvp
     */
    omit?: WeddingRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingRsvpInclude<ExtArgs> | null
    /**
     * The data needed to update a WeddingRsvp.
     */
    data: XOR<WeddingRsvpUpdateInput, WeddingRsvpUncheckedUpdateInput>
    /**
     * Choose, which WeddingRsvp to update.
     */
    where: WeddingRsvpWhereUniqueInput
  }

  /**
   * WeddingRsvp updateMany
   */
  export type WeddingRsvpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeddingRsvps.
     */
    data: XOR<WeddingRsvpUpdateManyMutationInput, WeddingRsvpUncheckedUpdateManyInput>
    /**
     * Filter which WeddingRsvps to update
     */
    where?: WeddingRsvpWhereInput
    /**
     * Limit how many WeddingRsvps to update.
     */
    limit?: number
  }

  /**
   * WeddingRsvp updateManyAndReturn
   */
  export type WeddingRsvpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingRsvp
     */
    select?: WeddingRsvpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingRsvp
     */
    omit?: WeddingRsvpOmit<ExtArgs> | null
    /**
     * The data used to update WeddingRsvps.
     */
    data: XOR<WeddingRsvpUpdateManyMutationInput, WeddingRsvpUncheckedUpdateManyInput>
    /**
     * Filter which WeddingRsvps to update
     */
    where?: WeddingRsvpWhereInput
    /**
     * Limit how many WeddingRsvps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingRsvpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeddingRsvp upsert
   */
  export type WeddingRsvpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingRsvp
     */
    select?: WeddingRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingRsvp
     */
    omit?: WeddingRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingRsvpInclude<ExtArgs> | null
    /**
     * The filter to search for the WeddingRsvp to update in case it exists.
     */
    where: WeddingRsvpWhereUniqueInput
    /**
     * In case the WeddingRsvp found by the `where` argument doesn't exist, create a new WeddingRsvp with this data.
     */
    create: XOR<WeddingRsvpCreateInput, WeddingRsvpUncheckedCreateInput>
    /**
     * In case the WeddingRsvp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeddingRsvpUpdateInput, WeddingRsvpUncheckedUpdateInput>
  }

  /**
   * WeddingRsvp delete
   */
  export type WeddingRsvpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingRsvp
     */
    select?: WeddingRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingRsvp
     */
    omit?: WeddingRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingRsvpInclude<ExtArgs> | null
    /**
     * Filter which WeddingRsvp to delete.
     */
    where: WeddingRsvpWhereUniqueInput
  }

  /**
   * WeddingRsvp deleteMany
   */
  export type WeddingRsvpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeddingRsvps to delete
     */
    where?: WeddingRsvpWhereInput
    /**
     * Limit how many WeddingRsvps to delete.
     */
    limit?: number
  }

  /**
   * WeddingRsvp.guest
   */
  export type WeddingRsvp$guestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingGuest
     */
    select?: WeddingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingGuest
     */
    omit?: WeddingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingGuestInclude<ExtArgs> | null
    where?: WeddingGuestWhereInput
  }

  /**
   * WeddingRsvp without action
   */
  export type WeddingRsvpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingRsvp
     */
    select?: WeddingRsvpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingRsvp
     */
    omit?: WeddingRsvpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingRsvpInclude<ExtArgs> | null
  }


  /**
   * Model WeddingAnalytics
   */

  export type AggregateWeddingAnalytics = {
    _count: WeddingAnalyticsCountAggregateOutputType | null
    _min: WeddingAnalyticsMinAggregateOutputType | null
    _max: WeddingAnalyticsMaxAggregateOutputType | null
  }

  export type WeddingAnalyticsMinAggregateOutputType = {
    id: string | null
    weddingId: string | null
    guestId: string | null
    event: $Enums.WeddingAnalyticsEvent | null
    sessionKey: string | null
    createdAt: Date | null
  }

  export type WeddingAnalyticsMaxAggregateOutputType = {
    id: string | null
    weddingId: string | null
    guestId: string | null
    event: $Enums.WeddingAnalyticsEvent | null
    sessionKey: string | null
    createdAt: Date | null
  }

  export type WeddingAnalyticsCountAggregateOutputType = {
    id: number
    weddingId: number
    guestId: number
    event: number
    sessionKey: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type WeddingAnalyticsMinAggregateInputType = {
    id?: true
    weddingId?: true
    guestId?: true
    event?: true
    sessionKey?: true
    createdAt?: true
  }

  export type WeddingAnalyticsMaxAggregateInputType = {
    id?: true
    weddingId?: true
    guestId?: true
    event?: true
    sessionKey?: true
    createdAt?: true
  }

  export type WeddingAnalyticsCountAggregateInputType = {
    id?: true
    weddingId?: true
    guestId?: true
    event?: true
    sessionKey?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type WeddingAnalyticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeddingAnalytics to aggregate.
     */
    where?: WeddingAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeddingAnalytics to fetch.
     */
    orderBy?: WeddingAnalyticsOrderByWithRelationInput | WeddingAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeddingAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeddingAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeddingAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeddingAnalytics
    **/
    _count?: true | WeddingAnalyticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeddingAnalyticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeddingAnalyticsMaxAggregateInputType
  }

  export type GetWeddingAnalyticsAggregateType<T extends WeddingAnalyticsAggregateArgs> = {
        [P in keyof T & keyof AggregateWeddingAnalytics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeddingAnalytics[P]>
      : GetScalarType<T[P], AggregateWeddingAnalytics[P]>
  }




  export type WeddingAnalyticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeddingAnalyticsWhereInput
    orderBy?: WeddingAnalyticsOrderByWithAggregationInput | WeddingAnalyticsOrderByWithAggregationInput[]
    by: WeddingAnalyticsScalarFieldEnum[] | WeddingAnalyticsScalarFieldEnum
    having?: WeddingAnalyticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeddingAnalyticsCountAggregateInputType | true
    _min?: WeddingAnalyticsMinAggregateInputType
    _max?: WeddingAnalyticsMaxAggregateInputType
  }

  export type WeddingAnalyticsGroupByOutputType = {
    id: string
    weddingId: string
    guestId: string | null
    event: $Enums.WeddingAnalyticsEvent
    sessionKey: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: WeddingAnalyticsCountAggregateOutputType | null
    _min: WeddingAnalyticsMinAggregateOutputType | null
    _max: WeddingAnalyticsMaxAggregateOutputType | null
  }

  type GetWeddingAnalyticsGroupByPayload<T extends WeddingAnalyticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeddingAnalyticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeddingAnalyticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeddingAnalyticsGroupByOutputType[P]>
            : GetScalarType<T[P], WeddingAnalyticsGroupByOutputType[P]>
        }
      >
    >


  export type WeddingAnalyticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weddingId?: boolean
    guestId?: boolean
    event?: boolean
    sessionKey?: boolean
    metadata?: boolean
    createdAt?: boolean
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
    guest?: boolean | WeddingAnalytics$guestArgs<ExtArgs>
  }, ExtArgs["result"]["weddingAnalytics"]>

  export type WeddingAnalyticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weddingId?: boolean
    guestId?: boolean
    event?: boolean
    sessionKey?: boolean
    metadata?: boolean
    createdAt?: boolean
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
    guest?: boolean | WeddingAnalytics$guestArgs<ExtArgs>
  }, ExtArgs["result"]["weddingAnalytics"]>

  export type WeddingAnalyticsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weddingId?: boolean
    guestId?: boolean
    event?: boolean
    sessionKey?: boolean
    metadata?: boolean
    createdAt?: boolean
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
    guest?: boolean | WeddingAnalytics$guestArgs<ExtArgs>
  }, ExtArgs["result"]["weddingAnalytics"]>

  export type WeddingAnalyticsSelectScalar = {
    id?: boolean
    weddingId?: boolean
    guestId?: boolean
    event?: boolean
    sessionKey?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type WeddingAnalyticsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weddingId" | "guestId" | "event" | "sessionKey" | "metadata" | "createdAt", ExtArgs["result"]["weddingAnalytics"]>
  export type WeddingAnalyticsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
    guest?: boolean | WeddingAnalytics$guestArgs<ExtArgs>
  }
  export type WeddingAnalyticsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
    guest?: boolean | WeddingAnalytics$guestArgs<ExtArgs>
  }
  export type WeddingAnalyticsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wedding?: boolean | WeddingDefaultArgs<ExtArgs>
    guest?: boolean | WeddingAnalytics$guestArgs<ExtArgs>
  }

  export type $WeddingAnalyticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeddingAnalytics"
    objects: {
      wedding: Prisma.$WeddingPayload<ExtArgs>
      guest: Prisma.$WeddingGuestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      weddingId: string
      guestId: string | null
      event: $Enums.WeddingAnalyticsEvent
      sessionKey: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["weddingAnalytics"]>
    composites: {}
  }

  type WeddingAnalyticsGetPayload<S extends boolean | null | undefined | WeddingAnalyticsDefaultArgs> = $Result.GetResult<Prisma.$WeddingAnalyticsPayload, S>

  type WeddingAnalyticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeddingAnalyticsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeddingAnalyticsCountAggregateInputType | true
    }

  export interface WeddingAnalyticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeddingAnalytics'], meta: { name: 'WeddingAnalytics' } }
    /**
     * Find zero or one WeddingAnalytics that matches the filter.
     * @param {WeddingAnalyticsFindUniqueArgs} args - Arguments to find a WeddingAnalytics
     * @example
     * // Get one WeddingAnalytics
     * const weddingAnalytics = await prisma.weddingAnalytics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeddingAnalyticsFindUniqueArgs>(args: SelectSubset<T, WeddingAnalyticsFindUniqueArgs<ExtArgs>>): Prisma__WeddingAnalyticsClient<$Result.GetResult<Prisma.$WeddingAnalyticsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WeddingAnalytics that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeddingAnalyticsFindUniqueOrThrowArgs} args - Arguments to find a WeddingAnalytics
     * @example
     * // Get one WeddingAnalytics
     * const weddingAnalytics = await prisma.weddingAnalytics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeddingAnalyticsFindUniqueOrThrowArgs>(args: SelectSubset<T, WeddingAnalyticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeddingAnalyticsClient<$Result.GetResult<Prisma.$WeddingAnalyticsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeddingAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingAnalyticsFindFirstArgs} args - Arguments to find a WeddingAnalytics
     * @example
     * // Get one WeddingAnalytics
     * const weddingAnalytics = await prisma.weddingAnalytics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeddingAnalyticsFindFirstArgs>(args?: SelectSubset<T, WeddingAnalyticsFindFirstArgs<ExtArgs>>): Prisma__WeddingAnalyticsClient<$Result.GetResult<Prisma.$WeddingAnalyticsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WeddingAnalytics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingAnalyticsFindFirstOrThrowArgs} args - Arguments to find a WeddingAnalytics
     * @example
     * // Get one WeddingAnalytics
     * const weddingAnalytics = await prisma.weddingAnalytics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeddingAnalyticsFindFirstOrThrowArgs>(args?: SelectSubset<T, WeddingAnalyticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeddingAnalyticsClient<$Result.GetResult<Prisma.$WeddingAnalyticsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WeddingAnalytics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingAnalyticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeddingAnalytics
     * const weddingAnalytics = await prisma.weddingAnalytics.findMany()
     * 
     * // Get first 10 WeddingAnalytics
     * const weddingAnalytics = await prisma.weddingAnalytics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weddingAnalyticsWithIdOnly = await prisma.weddingAnalytics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeddingAnalyticsFindManyArgs>(args?: SelectSubset<T, WeddingAnalyticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeddingAnalyticsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WeddingAnalytics.
     * @param {WeddingAnalyticsCreateArgs} args - Arguments to create a WeddingAnalytics.
     * @example
     * // Create one WeddingAnalytics
     * const WeddingAnalytics = await prisma.weddingAnalytics.create({
     *   data: {
     *     // ... data to create a WeddingAnalytics
     *   }
     * })
     * 
     */
    create<T extends WeddingAnalyticsCreateArgs>(args: SelectSubset<T, WeddingAnalyticsCreateArgs<ExtArgs>>): Prisma__WeddingAnalyticsClient<$Result.GetResult<Prisma.$WeddingAnalyticsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WeddingAnalytics.
     * @param {WeddingAnalyticsCreateManyArgs} args - Arguments to create many WeddingAnalytics.
     * @example
     * // Create many WeddingAnalytics
     * const weddingAnalytics = await prisma.weddingAnalytics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeddingAnalyticsCreateManyArgs>(args?: SelectSubset<T, WeddingAnalyticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeddingAnalytics and returns the data saved in the database.
     * @param {WeddingAnalyticsCreateManyAndReturnArgs} args - Arguments to create many WeddingAnalytics.
     * @example
     * // Create many WeddingAnalytics
     * const weddingAnalytics = await prisma.weddingAnalytics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeddingAnalytics and only return the `id`
     * const weddingAnalyticsWithIdOnly = await prisma.weddingAnalytics.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeddingAnalyticsCreateManyAndReturnArgs>(args?: SelectSubset<T, WeddingAnalyticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeddingAnalyticsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WeddingAnalytics.
     * @param {WeddingAnalyticsDeleteArgs} args - Arguments to delete one WeddingAnalytics.
     * @example
     * // Delete one WeddingAnalytics
     * const WeddingAnalytics = await prisma.weddingAnalytics.delete({
     *   where: {
     *     // ... filter to delete one WeddingAnalytics
     *   }
     * })
     * 
     */
    delete<T extends WeddingAnalyticsDeleteArgs>(args: SelectSubset<T, WeddingAnalyticsDeleteArgs<ExtArgs>>): Prisma__WeddingAnalyticsClient<$Result.GetResult<Prisma.$WeddingAnalyticsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WeddingAnalytics.
     * @param {WeddingAnalyticsUpdateArgs} args - Arguments to update one WeddingAnalytics.
     * @example
     * // Update one WeddingAnalytics
     * const weddingAnalytics = await prisma.weddingAnalytics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeddingAnalyticsUpdateArgs>(args: SelectSubset<T, WeddingAnalyticsUpdateArgs<ExtArgs>>): Prisma__WeddingAnalyticsClient<$Result.GetResult<Prisma.$WeddingAnalyticsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WeddingAnalytics.
     * @param {WeddingAnalyticsDeleteManyArgs} args - Arguments to filter WeddingAnalytics to delete.
     * @example
     * // Delete a few WeddingAnalytics
     * const { count } = await prisma.weddingAnalytics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeddingAnalyticsDeleteManyArgs>(args?: SelectSubset<T, WeddingAnalyticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeddingAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingAnalyticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeddingAnalytics
     * const weddingAnalytics = await prisma.weddingAnalytics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeddingAnalyticsUpdateManyArgs>(args: SelectSubset<T, WeddingAnalyticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeddingAnalytics and returns the data updated in the database.
     * @param {WeddingAnalyticsUpdateManyAndReturnArgs} args - Arguments to update many WeddingAnalytics.
     * @example
     * // Update many WeddingAnalytics
     * const weddingAnalytics = await prisma.weddingAnalytics.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WeddingAnalytics and only return the `id`
     * const weddingAnalyticsWithIdOnly = await prisma.weddingAnalytics.updateManyAndReturn({
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
    updateManyAndReturn<T extends WeddingAnalyticsUpdateManyAndReturnArgs>(args: SelectSubset<T, WeddingAnalyticsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeddingAnalyticsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WeddingAnalytics.
     * @param {WeddingAnalyticsUpsertArgs} args - Arguments to update or create a WeddingAnalytics.
     * @example
     * // Update or create a WeddingAnalytics
     * const weddingAnalytics = await prisma.weddingAnalytics.upsert({
     *   create: {
     *     // ... data to create a WeddingAnalytics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeddingAnalytics we want to update
     *   }
     * })
     */
    upsert<T extends WeddingAnalyticsUpsertArgs>(args: SelectSubset<T, WeddingAnalyticsUpsertArgs<ExtArgs>>): Prisma__WeddingAnalyticsClient<$Result.GetResult<Prisma.$WeddingAnalyticsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WeddingAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingAnalyticsCountArgs} args - Arguments to filter WeddingAnalytics to count.
     * @example
     * // Count the number of WeddingAnalytics
     * const count = await prisma.weddingAnalytics.count({
     *   where: {
     *     // ... the filter for the WeddingAnalytics we want to count
     *   }
     * })
    **/
    count<T extends WeddingAnalyticsCountArgs>(
      args?: Subset<T, WeddingAnalyticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeddingAnalyticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeddingAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingAnalyticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeddingAnalyticsAggregateArgs>(args: Subset<T, WeddingAnalyticsAggregateArgs>): Prisma.PrismaPromise<GetWeddingAnalyticsAggregateType<T>>

    /**
     * Group by WeddingAnalytics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeddingAnalyticsGroupByArgs} args - Group by arguments.
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
      T extends WeddingAnalyticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeddingAnalyticsGroupByArgs['orderBy'] }
        : { orderBy?: WeddingAnalyticsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WeddingAnalyticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeddingAnalyticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeddingAnalytics model
   */
  readonly fields: WeddingAnalyticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeddingAnalytics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeddingAnalyticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wedding<T extends WeddingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeddingDefaultArgs<ExtArgs>>): Prisma__WeddingClient<$Result.GetResult<Prisma.$WeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guest<T extends WeddingAnalytics$guestArgs<ExtArgs> = {}>(args?: Subset<T, WeddingAnalytics$guestArgs<ExtArgs>>): Prisma__WeddingGuestClient<$Result.GetResult<Prisma.$WeddingGuestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WeddingAnalytics model
   */
  interface WeddingAnalyticsFieldRefs {
    readonly id: FieldRef<"WeddingAnalytics", 'String'>
    readonly weddingId: FieldRef<"WeddingAnalytics", 'String'>
    readonly guestId: FieldRef<"WeddingAnalytics", 'String'>
    readonly event: FieldRef<"WeddingAnalytics", 'WeddingAnalyticsEvent'>
    readonly sessionKey: FieldRef<"WeddingAnalytics", 'String'>
    readonly metadata: FieldRef<"WeddingAnalytics", 'Json'>
    readonly createdAt: FieldRef<"WeddingAnalytics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeddingAnalytics findUnique
   */
  export type WeddingAnalyticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingAnalytics
     */
    select?: WeddingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingAnalytics
     */
    omit?: WeddingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which WeddingAnalytics to fetch.
     */
    where: WeddingAnalyticsWhereUniqueInput
  }

  /**
   * WeddingAnalytics findUniqueOrThrow
   */
  export type WeddingAnalyticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingAnalytics
     */
    select?: WeddingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingAnalytics
     */
    omit?: WeddingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which WeddingAnalytics to fetch.
     */
    where: WeddingAnalyticsWhereUniqueInput
  }

  /**
   * WeddingAnalytics findFirst
   */
  export type WeddingAnalyticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingAnalytics
     */
    select?: WeddingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingAnalytics
     */
    omit?: WeddingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which WeddingAnalytics to fetch.
     */
    where?: WeddingAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeddingAnalytics to fetch.
     */
    orderBy?: WeddingAnalyticsOrderByWithRelationInput | WeddingAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeddingAnalytics.
     */
    cursor?: WeddingAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeddingAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeddingAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeddingAnalytics.
     */
    distinct?: WeddingAnalyticsScalarFieldEnum | WeddingAnalyticsScalarFieldEnum[]
  }

  /**
   * WeddingAnalytics findFirstOrThrow
   */
  export type WeddingAnalyticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingAnalytics
     */
    select?: WeddingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingAnalytics
     */
    omit?: WeddingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which WeddingAnalytics to fetch.
     */
    where?: WeddingAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeddingAnalytics to fetch.
     */
    orderBy?: WeddingAnalyticsOrderByWithRelationInput | WeddingAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeddingAnalytics.
     */
    cursor?: WeddingAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeddingAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeddingAnalytics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeddingAnalytics.
     */
    distinct?: WeddingAnalyticsScalarFieldEnum | WeddingAnalyticsScalarFieldEnum[]
  }

  /**
   * WeddingAnalytics findMany
   */
  export type WeddingAnalyticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingAnalytics
     */
    select?: WeddingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingAnalytics
     */
    omit?: WeddingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingAnalyticsInclude<ExtArgs> | null
    /**
     * Filter, which WeddingAnalytics to fetch.
     */
    where?: WeddingAnalyticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeddingAnalytics to fetch.
     */
    orderBy?: WeddingAnalyticsOrderByWithRelationInput | WeddingAnalyticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeddingAnalytics.
     */
    cursor?: WeddingAnalyticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeddingAnalytics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeddingAnalytics.
     */
    skip?: number
    distinct?: WeddingAnalyticsScalarFieldEnum | WeddingAnalyticsScalarFieldEnum[]
  }

  /**
   * WeddingAnalytics create
   */
  export type WeddingAnalyticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingAnalytics
     */
    select?: WeddingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingAnalytics
     */
    omit?: WeddingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingAnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to create a WeddingAnalytics.
     */
    data: XOR<WeddingAnalyticsCreateInput, WeddingAnalyticsUncheckedCreateInput>
  }

  /**
   * WeddingAnalytics createMany
   */
  export type WeddingAnalyticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeddingAnalytics.
     */
    data: WeddingAnalyticsCreateManyInput | WeddingAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeddingAnalytics createManyAndReturn
   */
  export type WeddingAnalyticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingAnalytics
     */
    select?: WeddingAnalyticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingAnalytics
     */
    omit?: WeddingAnalyticsOmit<ExtArgs> | null
    /**
     * The data used to create many WeddingAnalytics.
     */
    data: WeddingAnalyticsCreateManyInput | WeddingAnalyticsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingAnalyticsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeddingAnalytics update
   */
  export type WeddingAnalyticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingAnalytics
     */
    select?: WeddingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingAnalytics
     */
    omit?: WeddingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingAnalyticsInclude<ExtArgs> | null
    /**
     * The data needed to update a WeddingAnalytics.
     */
    data: XOR<WeddingAnalyticsUpdateInput, WeddingAnalyticsUncheckedUpdateInput>
    /**
     * Choose, which WeddingAnalytics to update.
     */
    where: WeddingAnalyticsWhereUniqueInput
  }

  /**
   * WeddingAnalytics updateMany
   */
  export type WeddingAnalyticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeddingAnalytics.
     */
    data: XOR<WeddingAnalyticsUpdateManyMutationInput, WeddingAnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which WeddingAnalytics to update
     */
    where?: WeddingAnalyticsWhereInput
    /**
     * Limit how many WeddingAnalytics to update.
     */
    limit?: number
  }

  /**
   * WeddingAnalytics updateManyAndReturn
   */
  export type WeddingAnalyticsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingAnalytics
     */
    select?: WeddingAnalyticsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingAnalytics
     */
    omit?: WeddingAnalyticsOmit<ExtArgs> | null
    /**
     * The data used to update WeddingAnalytics.
     */
    data: XOR<WeddingAnalyticsUpdateManyMutationInput, WeddingAnalyticsUncheckedUpdateManyInput>
    /**
     * Filter which WeddingAnalytics to update
     */
    where?: WeddingAnalyticsWhereInput
    /**
     * Limit how many WeddingAnalytics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingAnalyticsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeddingAnalytics upsert
   */
  export type WeddingAnalyticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingAnalytics
     */
    select?: WeddingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingAnalytics
     */
    omit?: WeddingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingAnalyticsInclude<ExtArgs> | null
    /**
     * The filter to search for the WeddingAnalytics to update in case it exists.
     */
    where: WeddingAnalyticsWhereUniqueInput
    /**
     * In case the WeddingAnalytics found by the `where` argument doesn't exist, create a new WeddingAnalytics with this data.
     */
    create: XOR<WeddingAnalyticsCreateInput, WeddingAnalyticsUncheckedCreateInput>
    /**
     * In case the WeddingAnalytics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeddingAnalyticsUpdateInput, WeddingAnalyticsUncheckedUpdateInput>
  }

  /**
   * WeddingAnalytics delete
   */
  export type WeddingAnalyticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingAnalytics
     */
    select?: WeddingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingAnalytics
     */
    omit?: WeddingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingAnalyticsInclude<ExtArgs> | null
    /**
     * Filter which WeddingAnalytics to delete.
     */
    where: WeddingAnalyticsWhereUniqueInput
  }

  /**
   * WeddingAnalytics deleteMany
   */
  export type WeddingAnalyticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeddingAnalytics to delete
     */
    where?: WeddingAnalyticsWhereInput
    /**
     * Limit how many WeddingAnalytics to delete.
     */
    limit?: number
  }

  /**
   * WeddingAnalytics.guest
   */
  export type WeddingAnalytics$guestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingGuest
     */
    select?: WeddingGuestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingGuest
     */
    omit?: WeddingGuestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingGuestInclude<ExtArgs> | null
    where?: WeddingGuestWhereInput
  }

  /**
   * WeddingAnalytics without action
   */
  export type WeddingAnalyticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeddingAnalytics
     */
    select?: WeddingAnalyticsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WeddingAnalytics
     */
    omit?: WeddingAnalyticsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeddingAnalyticsInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    passwordHash: 'passwordHash',
    isAdmin: 'isAdmin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const InvitationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    status: 'status',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const WeddingScalarFieldEnum: {
    id: 'id',
    key: 'key',
    name: 'name',
    groomShortName: 'groomShortName',
    brideShortName: 'brideShortName',
    groomFullName: 'groomFullName',
    brideFullName: 'brideFullName',
    groomParents: 'groomParents',
    brideParents: 'brideParents',
    groomChildOrder: 'groomChildOrder',
    brideChildOrder: 'brideChildOrder',
    eventDate: 'eventDate',
    dateLabel: 'dateLabel',
    timeLabel: 'timeLabel',
    venueName: 'venueName',
    venueAddress: 'venueAddress',
    mapUrl: 'mapUrl',
    template: 'template',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WeddingScalarFieldEnum = (typeof WeddingScalarFieldEnum)[keyof typeof WeddingScalarFieldEnum]


  export const WeddingGuestScalarFieldEnum: {
    id: 'id',
    weddingId: 'weddingId',
    name: 'name',
    phone: 'phone',
    groupName: 'groupName',
    maxGuests: 'maxGuests',
    slug: 'slug',
    isActive: 'isActive',
    isSent: 'isSent',
    sentAt: 'sentAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WeddingGuestScalarFieldEnum = (typeof WeddingGuestScalarFieldEnum)[keyof typeof WeddingGuestScalarFieldEnum]


  export const WeddingRsvpScalarFieldEnum: {
    id: 'id',
    weddingId: 'weddingId',
    guestId: 'guestId',
    name: 'name',
    phone: 'phone',
    status: 'status',
    guestCount: 'guestCount',
    message: 'message',
    isHidden: 'isHidden',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WeddingRsvpScalarFieldEnum = (typeof WeddingRsvpScalarFieldEnum)[keyof typeof WeddingRsvpScalarFieldEnum]


  export const WeddingAnalyticsScalarFieldEnum: {
    id: 'id',
    weddingId: 'weddingId',
    guestId: 'guestId',
    event: 'event',
    sessionKey: 'sessionKey',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type WeddingAnalyticsScalarFieldEnum = (typeof WeddingAnalyticsScalarFieldEnum)[keyof typeof WeddingAnalyticsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AttendanceStatus'
   */
  export type EnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus'>
    


  /**
   * Reference to a field of type 'AttendanceStatus[]'
   */
  export type ListEnumAttendanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceStatus[]'>
    


  /**
   * Reference to a field of type 'WeddingAnalyticsEvent'
   */
  export type EnumWeddingAnalyticsEventFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeddingAnalyticsEvent'>
    


  /**
   * Reference to a field of type 'WeddingAnalyticsEvent[]'
   */
  export type ListEnumWeddingAnalyticsEventFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WeddingAnalyticsEvent[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type InvitationWhereInput = {
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    id?: StringFilter<"Invitation"> | string
    name?: StringFilter<"Invitation"> | string
    phone?: StringNullableFilter<"Invitation"> | string | null
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
  }

  export type InvitationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    name?: StringFilter<"Invitation"> | string
    phone?: StringNullableFilter<"Invitation"> | string | null
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
  }, "id">

  export type InvitationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvitationCountOrderByAggregateInput
    _max?: InvitationMaxOrderByAggregateInput
    _min?: InvitationMinOrderByAggregateInput
  }

  export type InvitationScalarWhereWithAggregatesInput = {
    AND?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    OR?: InvitationScalarWhereWithAggregatesInput[]
    NOT?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invitation"> | string
    name?: StringWithAggregatesFilter<"Invitation"> | string
    phone?: StringNullableWithAggregatesFilter<"Invitation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    name?: StringFilter<"Attendance"> | string
    phone?: StringNullableFilter<"Attendance"> | string | null
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    message?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    name?: StringFilter<"Attendance"> | string
    phone?: StringNullableFilter<"Attendance"> | string | null
    status?: EnumAttendanceStatusFilter<"Attendance"> | $Enums.AttendanceStatus
    message?: StringNullableFilter<"Attendance"> | string | null
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeFilter<"Attendance"> | Date | string
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    name?: StringWithAggregatesFilter<"Attendance"> | string
    phone?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    status?: EnumAttendanceStatusWithAggregatesFilter<"Attendance"> | $Enums.AttendanceStatus
    message?: StringNullableWithAggregatesFilter<"Attendance"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type WeddingWhereInput = {
    AND?: WeddingWhereInput | WeddingWhereInput[]
    OR?: WeddingWhereInput[]
    NOT?: WeddingWhereInput | WeddingWhereInput[]
    id?: StringFilter<"Wedding"> | string
    key?: StringFilter<"Wedding"> | string
    name?: StringFilter<"Wedding"> | string
    groomShortName?: StringFilter<"Wedding"> | string
    brideShortName?: StringFilter<"Wedding"> | string
    groomFullName?: StringFilter<"Wedding"> | string
    brideFullName?: StringFilter<"Wedding"> | string
    groomParents?: StringNullableFilter<"Wedding"> | string | null
    brideParents?: StringNullableFilter<"Wedding"> | string | null
    groomChildOrder?: StringNullableFilter<"Wedding"> | string | null
    brideChildOrder?: StringNullableFilter<"Wedding"> | string | null
    eventDate?: DateTimeNullableFilter<"Wedding"> | Date | string | null
    dateLabel?: StringNullableFilter<"Wedding"> | string | null
    timeLabel?: StringNullableFilter<"Wedding"> | string | null
    venueName?: StringNullableFilter<"Wedding"> | string | null
    venueAddress?: StringNullableFilter<"Wedding"> | string | null
    mapUrl?: StringNullableFilter<"Wedding"> | string | null
    template?: StringFilter<"Wedding"> | string
    isPublished?: BoolFilter<"Wedding"> | boolean
    createdAt?: DateTimeFilter<"Wedding"> | Date | string
    updatedAt?: DateTimeFilter<"Wedding"> | Date | string
    guests?: WeddingGuestListRelationFilter
    rsvps?: WeddingRsvpListRelationFilter
    analytics?: WeddingAnalyticsListRelationFilter
  }

  export type WeddingOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    groomShortName?: SortOrder
    brideShortName?: SortOrder
    groomFullName?: SortOrder
    brideFullName?: SortOrder
    groomParents?: SortOrderInput | SortOrder
    brideParents?: SortOrderInput | SortOrder
    groomChildOrder?: SortOrderInput | SortOrder
    brideChildOrder?: SortOrderInput | SortOrder
    eventDate?: SortOrderInput | SortOrder
    dateLabel?: SortOrderInput | SortOrder
    timeLabel?: SortOrderInput | SortOrder
    venueName?: SortOrderInput | SortOrder
    venueAddress?: SortOrderInput | SortOrder
    mapUrl?: SortOrderInput | SortOrder
    template?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    guests?: WeddingGuestOrderByRelationAggregateInput
    rsvps?: WeddingRsvpOrderByRelationAggregateInput
    analytics?: WeddingAnalyticsOrderByRelationAggregateInput
  }

  export type WeddingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: WeddingWhereInput | WeddingWhereInput[]
    OR?: WeddingWhereInput[]
    NOT?: WeddingWhereInput | WeddingWhereInput[]
    name?: StringFilter<"Wedding"> | string
    groomShortName?: StringFilter<"Wedding"> | string
    brideShortName?: StringFilter<"Wedding"> | string
    groomFullName?: StringFilter<"Wedding"> | string
    brideFullName?: StringFilter<"Wedding"> | string
    groomParents?: StringNullableFilter<"Wedding"> | string | null
    brideParents?: StringNullableFilter<"Wedding"> | string | null
    groomChildOrder?: StringNullableFilter<"Wedding"> | string | null
    brideChildOrder?: StringNullableFilter<"Wedding"> | string | null
    eventDate?: DateTimeNullableFilter<"Wedding"> | Date | string | null
    dateLabel?: StringNullableFilter<"Wedding"> | string | null
    timeLabel?: StringNullableFilter<"Wedding"> | string | null
    venueName?: StringNullableFilter<"Wedding"> | string | null
    venueAddress?: StringNullableFilter<"Wedding"> | string | null
    mapUrl?: StringNullableFilter<"Wedding"> | string | null
    template?: StringFilter<"Wedding"> | string
    isPublished?: BoolFilter<"Wedding"> | boolean
    createdAt?: DateTimeFilter<"Wedding"> | Date | string
    updatedAt?: DateTimeFilter<"Wedding"> | Date | string
    guests?: WeddingGuestListRelationFilter
    rsvps?: WeddingRsvpListRelationFilter
    analytics?: WeddingAnalyticsListRelationFilter
  }, "id" | "key">

  export type WeddingOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    groomShortName?: SortOrder
    brideShortName?: SortOrder
    groomFullName?: SortOrder
    brideFullName?: SortOrder
    groomParents?: SortOrderInput | SortOrder
    brideParents?: SortOrderInput | SortOrder
    groomChildOrder?: SortOrderInput | SortOrder
    brideChildOrder?: SortOrderInput | SortOrder
    eventDate?: SortOrderInput | SortOrder
    dateLabel?: SortOrderInput | SortOrder
    timeLabel?: SortOrderInput | SortOrder
    venueName?: SortOrderInput | SortOrder
    venueAddress?: SortOrderInput | SortOrder
    mapUrl?: SortOrderInput | SortOrder
    template?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WeddingCountOrderByAggregateInput
    _max?: WeddingMaxOrderByAggregateInput
    _min?: WeddingMinOrderByAggregateInput
  }

  export type WeddingScalarWhereWithAggregatesInput = {
    AND?: WeddingScalarWhereWithAggregatesInput | WeddingScalarWhereWithAggregatesInput[]
    OR?: WeddingScalarWhereWithAggregatesInput[]
    NOT?: WeddingScalarWhereWithAggregatesInput | WeddingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wedding"> | string
    key?: StringWithAggregatesFilter<"Wedding"> | string
    name?: StringWithAggregatesFilter<"Wedding"> | string
    groomShortName?: StringWithAggregatesFilter<"Wedding"> | string
    brideShortName?: StringWithAggregatesFilter<"Wedding"> | string
    groomFullName?: StringWithAggregatesFilter<"Wedding"> | string
    brideFullName?: StringWithAggregatesFilter<"Wedding"> | string
    groomParents?: StringNullableWithAggregatesFilter<"Wedding"> | string | null
    brideParents?: StringNullableWithAggregatesFilter<"Wedding"> | string | null
    groomChildOrder?: StringNullableWithAggregatesFilter<"Wedding"> | string | null
    brideChildOrder?: StringNullableWithAggregatesFilter<"Wedding"> | string | null
    eventDate?: DateTimeNullableWithAggregatesFilter<"Wedding"> | Date | string | null
    dateLabel?: StringNullableWithAggregatesFilter<"Wedding"> | string | null
    timeLabel?: StringNullableWithAggregatesFilter<"Wedding"> | string | null
    venueName?: StringNullableWithAggregatesFilter<"Wedding"> | string | null
    venueAddress?: StringNullableWithAggregatesFilter<"Wedding"> | string | null
    mapUrl?: StringNullableWithAggregatesFilter<"Wedding"> | string | null
    template?: StringWithAggregatesFilter<"Wedding"> | string
    isPublished?: BoolWithAggregatesFilter<"Wedding"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Wedding"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Wedding"> | Date | string
  }

  export type WeddingGuestWhereInput = {
    AND?: WeddingGuestWhereInput | WeddingGuestWhereInput[]
    OR?: WeddingGuestWhereInput[]
    NOT?: WeddingGuestWhereInput | WeddingGuestWhereInput[]
    id?: StringFilter<"WeddingGuest"> | string
    weddingId?: StringFilter<"WeddingGuest"> | string
    name?: StringFilter<"WeddingGuest"> | string
    phone?: StringNullableFilter<"WeddingGuest"> | string | null
    groupName?: StringNullableFilter<"WeddingGuest"> | string | null
    maxGuests?: IntFilter<"WeddingGuest"> | number
    slug?: StringFilter<"WeddingGuest"> | string
    isActive?: BoolFilter<"WeddingGuest"> | boolean
    isSent?: BoolFilter<"WeddingGuest"> | boolean
    sentAt?: DateTimeNullableFilter<"WeddingGuest"> | Date | string | null
    createdAt?: DateTimeFilter<"WeddingGuest"> | Date | string
    updatedAt?: DateTimeFilter<"WeddingGuest"> | Date | string
    wedding?: XOR<WeddingScalarRelationFilter, WeddingWhereInput>
    rsvp?: XOR<WeddingRsvpNullableScalarRelationFilter, WeddingRsvpWhereInput> | null
    analytics?: WeddingAnalyticsListRelationFilter
  }

  export type WeddingGuestOrderByWithRelationInput = {
    id?: SortOrder
    weddingId?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    groupName?: SortOrderInput | SortOrder
    maxGuests?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    isSent?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wedding?: WeddingOrderByWithRelationInput
    rsvp?: WeddingRsvpOrderByWithRelationInput
    analytics?: WeddingAnalyticsOrderByRelationAggregateInput
  }

  export type WeddingGuestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: WeddingGuestWhereInput | WeddingGuestWhereInput[]
    OR?: WeddingGuestWhereInput[]
    NOT?: WeddingGuestWhereInput | WeddingGuestWhereInput[]
    weddingId?: StringFilter<"WeddingGuest"> | string
    name?: StringFilter<"WeddingGuest"> | string
    phone?: StringNullableFilter<"WeddingGuest"> | string | null
    groupName?: StringNullableFilter<"WeddingGuest"> | string | null
    maxGuests?: IntFilter<"WeddingGuest"> | number
    isActive?: BoolFilter<"WeddingGuest"> | boolean
    isSent?: BoolFilter<"WeddingGuest"> | boolean
    sentAt?: DateTimeNullableFilter<"WeddingGuest"> | Date | string | null
    createdAt?: DateTimeFilter<"WeddingGuest"> | Date | string
    updatedAt?: DateTimeFilter<"WeddingGuest"> | Date | string
    wedding?: XOR<WeddingScalarRelationFilter, WeddingWhereInput>
    rsvp?: XOR<WeddingRsvpNullableScalarRelationFilter, WeddingRsvpWhereInput> | null
    analytics?: WeddingAnalyticsListRelationFilter
  }, "id" | "slug">

  export type WeddingGuestOrderByWithAggregationInput = {
    id?: SortOrder
    weddingId?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    groupName?: SortOrderInput | SortOrder
    maxGuests?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    isSent?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WeddingGuestCountOrderByAggregateInput
    _avg?: WeddingGuestAvgOrderByAggregateInput
    _max?: WeddingGuestMaxOrderByAggregateInput
    _min?: WeddingGuestMinOrderByAggregateInput
    _sum?: WeddingGuestSumOrderByAggregateInput
  }

  export type WeddingGuestScalarWhereWithAggregatesInput = {
    AND?: WeddingGuestScalarWhereWithAggregatesInput | WeddingGuestScalarWhereWithAggregatesInput[]
    OR?: WeddingGuestScalarWhereWithAggregatesInput[]
    NOT?: WeddingGuestScalarWhereWithAggregatesInput | WeddingGuestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeddingGuest"> | string
    weddingId?: StringWithAggregatesFilter<"WeddingGuest"> | string
    name?: StringWithAggregatesFilter<"WeddingGuest"> | string
    phone?: StringNullableWithAggregatesFilter<"WeddingGuest"> | string | null
    groupName?: StringNullableWithAggregatesFilter<"WeddingGuest"> | string | null
    maxGuests?: IntWithAggregatesFilter<"WeddingGuest"> | number
    slug?: StringWithAggregatesFilter<"WeddingGuest"> | string
    isActive?: BoolWithAggregatesFilter<"WeddingGuest"> | boolean
    isSent?: BoolWithAggregatesFilter<"WeddingGuest"> | boolean
    sentAt?: DateTimeNullableWithAggregatesFilter<"WeddingGuest"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WeddingGuest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WeddingGuest"> | Date | string
  }

  export type WeddingRsvpWhereInput = {
    AND?: WeddingRsvpWhereInput | WeddingRsvpWhereInput[]
    OR?: WeddingRsvpWhereInput[]
    NOT?: WeddingRsvpWhereInput | WeddingRsvpWhereInput[]
    id?: StringFilter<"WeddingRsvp"> | string
    weddingId?: StringFilter<"WeddingRsvp"> | string
    guestId?: StringNullableFilter<"WeddingRsvp"> | string | null
    name?: StringFilter<"WeddingRsvp"> | string
    phone?: StringNullableFilter<"WeddingRsvp"> | string | null
    status?: EnumAttendanceStatusFilter<"WeddingRsvp"> | $Enums.AttendanceStatus
    guestCount?: IntFilter<"WeddingRsvp"> | number
    message?: StringNullableFilter<"WeddingRsvp"> | string | null
    isHidden?: BoolFilter<"WeddingRsvp"> | boolean
    createdAt?: DateTimeFilter<"WeddingRsvp"> | Date | string
    updatedAt?: DateTimeFilter<"WeddingRsvp"> | Date | string
    wedding?: XOR<WeddingScalarRelationFilter, WeddingWhereInput>
    guest?: XOR<WeddingGuestNullableScalarRelationFilter, WeddingGuestWhereInput> | null
  }

  export type WeddingRsvpOrderByWithRelationInput = {
    id?: SortOrder
    weddingId?: SortOrder
    guestId?: SortOrderInput | SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    guestCount?: SortOrder
    message?: SortOrderInput | SortOrder
    isHidden?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wedding?: WeddingOrderByWithRelationInput
    guest?: WeddingGuestOrderByWithRelationInput
  }

  export type WeddingRsvpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    guestId?: string
    AND?: WeddingRsvpWhereInput | WeddingRsvpWhereInput[]
    OR?: WeddingRsvpWhereInput[]
    NOT?: WeddingRsvpWhereInput | WeddingRsvpWhereInput[]
    weddingId?: StringFilter<"WeddingRsvp"> | string
    name?: StringFilter<"WeddingRsvp"> | string
    phone?: StringNullableFilter<"WeddingRsvp"> | string | null
    status?: EnumAttendanceStatusFilter<"WeddingRsvp"> | $Enums.AttendanceStatus
    guestCount?: IntFilter<"WeddingRsvp"> | number
    message?: StringNullableFilter<"WeddingRsvp"> | string | null
    isHidden?: BoolFilter<"WeddingRsvp"> | boolean
    createdAt?: DateTimeFilter<"WeddingRsvp"> | Date | string
    updatedAt?: DateTimeFilter<"WeddingRsvp"> | Date | string
    wedding?: XOR<WeddingScalarRelationFilter, WeddingWhereInput>
    guest?: XOR<WeddingGuestNullableScalarRelationFilter, WeddingGuestWhereInput> | null
  }, "id" | "guestId">

  export type WeddingRsvpOrderByWithAggregationInput = {
    id?: SortOrder
    weddingId?: SortOrder
    guestId?: SortOrderInput | SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    status?: SortOrder
    guestCount?: SortOrder
    message?: SortOrderInput | SortOrder
    isHidden?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WeddingRsvpCountOrderByAggregateInput
    _avg?: WeddingRsvpAvgOrderByAggregateInput
    _max?: WeddingRsvpMaxOrderByAggregateInput
    _min?: WeddingRsvpMinOrderByAggregateInput
    _sum?: WeddingRsvpSumOrderByAggregateInput
  }

  export type WeddingRsvpScalarWhereWithAggregatesInput = {
    AND?: WeddingRsvpScalarWhereWithAggregatesInput | WeddingRsvpScalarWhereWithAggregatesInput[]
    OR?: WeddingRsvpScalarWhereWithAggregatesInput[]
    NOT?: WeddingRsvpScalarWhereWithAggregatesInput | WeddingRsvpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeddingRsvp"> | string
    weddingId?: StringWithAggregatesFilter<"WeddingRsvp"> | string
    guestId?: StringNullableWithAggregatesFilter<"WeddingRsvp"> | string | null
    name?: StringWithAggregatesFilter<"WeddingRsvp"> | string
    phone?: StringNullableWithAggregatesFilter<"WeddingRsvp"> | string | null
    status?: EnumAttendanceStatusWithAggregatesFilter<"WeddingRsvp"> | $Enums.AttendanceStatus
    guestCount?: IntWithAggregatesFilter<"WeddingRsvp"> | number
    message?: StringNullableWithAggregatesFilter<"WeddingRsvp"> | string | null
    isHidden?: BoolWithAggregatesFilter<"WeddingRsvp"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WeddingRsvp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WeddingRsvp"> | Date | string
  }

  export type WeddingAnalyticsWhereInput = {
    AND?: WeddingAnalyticsWhereInput | WeddingAnalyticsWhereInput[]
    OR?: WeddingAnalyticsWhereInput[]
    NOT?: WeddingAnalyticsWhereInput | WeddingAnalyticsWhereInput[]
    id?: StringFilter<"WeddingAnalytics"> | string
    weddingId?: StringFilter<"WeddingAnalytics"> | string
    guestId?: StringNullableFilter<"WeddingAnalytics"> | string | null
    event?: EnumWeddingAnalyticsEventFilter<"WeddingAnalytics"> | $Enums.WeddingAnalyticsEvent
    sessionKey?: StringNullableFilter<"WeddingAnalytics"> | string | null
    metadata?: JsonNullableFilter<"WeddingAnalytics">
    createdAt?: DateTimeFilter<"WeddingAnalytics"> | Date | string
    wedding?: XOR<WeddingScalarRelationFilter, WeddingWhereInput>
    guest?: XOR<WeddingGuestNullableScalarRelationFilter, WeddingGuestWhereInput> | null
  }

  export type WeddingAnalyticsOrderByWithRelationInput = {
    id?: SortOrder
    weddingId?: SortOrder
    guestId?: SortOrderInput | SortOrder
    event?: SortOrder
    sessionKey?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    wedding?: WeddingOrderByWithRelationInput
    guest?: WeddingGuestOrderByWithRelationInput
  }

  export type WeddingAnalyticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WeddingAnalyticsWhereInput | WeddingAnalyticsWhereInput[]
    OR?: WeddingAnalyticsWhereInput[]
    NOT?: WeddingAnalyticsWhereInput | WeddingAnalyticsWhereInput[]
    weddingId?: StringFilter<"WeddingAnalytics"> | string
    guestId?: StringNullableFilter<"WeddingAnalytics"> | string | null
    event?: EnumWeddingAnalyticsEventFilter<"WeddingAnalytics"> | $Enums.WeddingAnalyticsEvent
    sessionKey?: StringNullableFilter<"WeddingAnalytics"> | string | null
    metadata?: JsonNullableFilter<"WeddingAnalytics">
    createdAt?: DateTimeFilter<"WeddingAnalytics"> | Date | string
    wedding?: XOR<WeddingScalarRelationFilter, WeddingWhereInput>
    guest?: XOR<WeddingGuestNullableScalarRelationFilter, WeddingGuestWhereInput> | null
  }, "id">

  export type WeddingAnalyticsOrderByWithAggregationInput = {
    id?: SortOrder
    weddingId?: SortOrder
    guestId?: SortOrderInput | SortOrder
    event?: SortOrder
    sessionKey?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WeddingAnalyticsCountOrderByAggregateInput
    _max?: WeddingAnalyticsMaxOrderByAggregateInput
    _min?: WeddingAnalyticsMinOrderByAggregateInput
  }

  export type WeddingAnalyticsScalarWhereWithAggregatesInput = {
    AND?: WeddingAnalyticsScalarWhereWithAggregatesInput | WeddingAnalyticsScalarWhereWithAggregatesInput[]
    OR?: WeddingAnalyticsScalarWhereWithAggregatesInput[]
    NOT?: WeddingAnalyticsScalarWhereWithAggregatesInput | WeddingAnalyticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WeddingAnalytics"> | string
    weddingId?: StringWithAggregatesFilter<"WeddingAnalytics"> | string
    guestId?: StringNullableWithAggregatesFilter<"WeddingAnalytics"> | string | null
    event?: EnumWeddingAnalyticsEventWithAggregatesFilter<"WeddingAnalytics"> | $Enums.WeddingAnalyticsEvent
    sessionKey?: StringNullableWithAggregatesFilter<"WeddingAnalytics"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"WeddingAnalytics">
    createdAt?: DateTimeWithAggregatesFilter<"WeddingAnalytics"> | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    isAdmin?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    isAdmin?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    isAdmin?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateInput = {
    id?: string
    name: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationUncheckedCreateInput = {
    id?: string
    name: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateManyInput = {
    id?: string
    name: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateInput = {
    id?: string
    name: string
    phone?: string | null
    status: $Enums.AttendanceStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    name: string
    phone?: string | null
    status: $Enums.AttendanceStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    id?: string
    name: string
    phone?: string | null
    status: $Enums.AttendanceStatus
    message?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeddingCreateInput = {
    id?: string
    key: string
    name: string
    groomShortName: string
    brideShortName: string
    groomFullName: string
    brideFullName: string
    groomParents?: string | null
    brideParents?: string | null
    groomChildOrder?: string | null
    brideChildOrder?: string | null
    eventDate?: Date | string | null
    dateLabel?: string | null
    timeLabel?: string | null
    venueName?: string | null
    venueAddress?: string | null
    mapUrl?: string | null
    template?: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: WeddingGuestCreateNestedManyWithoutWeddingInput
    rsvps?: WeddingRsvpCreateNestedManyWithoutWeddingInput
    analytics?: WeddingAnalyticsCreateNestedManyWithoutWeddingInput
  }

  export type WeddingUncheckedCreateInput = {
    id?: string
    key: string
    name: string
    groomShortName: string
    brideShortName: string
    groomFullName: string
    brideFullName: string
    groomParents?: string | null
    brideParents?: string | null
    groomChildOrder?: string | null
    brideChildOrder?: string | null
    eventDate?: Date | string | null
    dateLabel?: string | null
    timeLabel?: string | null
    venueName?: string | null
    venueAddress?: string | null
    mapUrl?: string | null
    template?: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: WeddingGuestUncheckedCreateNestedManyWithoutWeddingInput
    rsvps?: WeddingRsvpUncheckedCreateNestedManyWithoutWeddingInput
    analytics?: WeddingAnalyticsUncheckedCreateNestedManyWithoutWeddingInput
  }

  export type WeddingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groomShortName?: StringFieldUpdateOperationsInput | string
    brideShortName?: StringFieldUpdateOperationsInput | string
    groomFullName?: StringFieldUpdateOperationsInput | string
    brideFullName?: StringFieldUpdateOperationsInput | string
    groomParents?: NullableStringFieldUpdateOperationsInput | string | null
    brideParents?: NullableStringFieldUpdateOperationsInput | string | null
    groomChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    brideChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateLabel?: NullableStringFieldUpdateOperationsInput | string | null
    timeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    template?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: WeddingGuestUpdateManyWithoutWeddingNestedInput
    rsvps?: WeddingRsvpUpdateManyWithoutWeddingNestedInput
    analytics?: WeddingAnalyticsUpdateManyWithoutWeddingNestedInput
  }

  export type WeddingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groomShortName?: StringFieldUpdateOperationsInput | string
    brideShortName?: StringFieldUpdateOperationsInput | string
    groomFullName?: StringFieldUpdateOperationsInput | string
    brideFullName?: StringFieldUpdateOperationsInput | string
    groomParents?: NullableStringFieldUpdateOperationsInput | string | null
    brideParents?: NullableStringFieldUpdateOperationsInput | string | null
    groomChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    brideChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateLabel?: NullableStringFieldUpdateOperationsInput | string | null
    timeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    template?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: WeddingGuestUncheckedUpdateManyWithoutWeddingNestedInput
    rsvps?: WeddingRsvpUncheckedUpdateManyWithoutWeddingNestedInput
    analytics?: WeddingAnalyticsUncheckedUpdateManyWithoutWeddingNestedInput
  }

  export type WeddingCreateManyInput = {
    id?: string
    key: string
    name: string
    groomShortName: string
    brideShortName: string
    groomFullName: string
    brideFullName: string
    groomParents?: string | null
    brideParents?: string | null
    groomChildOrder?: string | null
    brideChildOrder?: string | null
    eventDate?: Date | string | null
    dateLabel?: string | null
    timeLabel?: string | null
    venueName?: string | null
    venueAddress?: string | null
    mapUrl?: string | null
    template?: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeddingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groomShortName?: StringFieldUpdateOperationsInput | string
    brideShortName?: StringFieldUpdateOperationsInput | string
    groomFullName?: StringFieldUpdateOperationsInput | string
    brideFullName?: StringFieldUpdateOperationsInput | string
    groomParents?: NullableStringFieldUpdateOperationsInput | string | null
    brideParents?: NullableStringFieldUpdateOperationsInput | string | null
    groomChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    brideChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateLabel?: NullableStringFieldUpdateOperationsInput | string | null
    timeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    template?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeddingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groomShortName?: StringFieldUpdateOperationsInput | string
    brideShortName?: StringFieldUpdateOperationsInput | string
    groomFullName?: StringFieldUpdateOperationsInput | string
    brideFullName?: StringFieldUpdateOperationsInput | string
    groomParents?: NullableStringFieldUpdateOperationsInput | string | null
    brideParents?: NullableStringFieldUpdateOperationsInput | string | null
    groomChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    brideChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateLabel?: NullableStringFieldUpdateOperationsInput | string | null
    timeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    template?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeddingGuestCreateInput = {
    id?: string
    name: string
    phone?: string | null
    groupName?: string | null
    maxGuests?: number
    slug: string
    isActive?: boolean
    isSent?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wedding: WeddingCreateNestedOneWithoutGuestsInput
    rsvp?: WeddingRsvpCreateNestedOneWithoutGuestInput
    analytics?: WeddingAnalyticsCreateNestedManyWithoutGuestInput
  }

  export type WeddingGuestUncheckedCreateInput = {
    id?: string
    weddingId: string
    name: string
    phone?: string | null
    groupName?: string | null
    maxGuests?: number
    slug: string
    isActive?: boolean
    isSent?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rsvp?: WeddingRsvpUncheckedCreateNestedOneWithoutGuestInput
    analytics?: WeddingAnalyticsUncheckedCreateNestedManyWithoutGuestInput
  }

  export type WeddingGuestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSent?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wedding?: WeddingUpdateOneRequiredWithoutGuestsNestedInput
    rsvp?: WeddingRsvpUpdateOneWithoutGuestNestedInput
    analytics?: WeddingAnalyticsUpdateManyWithoutGuestNestedInput
  }

  export type WeddingGuestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weddingId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSent?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rsvp?: WeddingRsvpUncheckedUpdateOneWithoutGuestNestedInput
    analytics?: WeddingAnalyticsUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type WeddingGuestCreateManyInput = {
    id?: string
    weddingId: string
    name: string
    phone?: string | null
    groupName?: string | null
    maxGuests?: number
    slug: string
    isActive?: boolean
    isSent?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeddingGuestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSent?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeddingGuestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    weddingId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSent?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeddingRsvpCreateInput = {
    id?: string
    name: string
    phone?: string | null
    status: $Enums.AttendanceStatus
    guestCount?: number
    message?: string | null
    isHidden?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    wedding: WeddingCreateNestedOneWithoutRsvpsInput
    guest?: WeddingGuestCreateNestedOneWithoutRsvpInput
  }

  export type WeddingRsvpUncheckedCreateInput = {
    id?: string
    weddingId: string
    guestId?: string | null
    name: string
    phone?: string | null
    status: $Enums.AttendanceStatus
    guestCount?: number
    message?: string | null
    isHidden?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeddingRsvpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    guestCount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wedding?: WeddingUpdateOneRequiredWithoutRsvpsNestedInput
    guest?: WeddingGuestUpdateOneWithoutRsvpNestedInput
  }

  export type WeddingRsvpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weddingId?: StringFieldUpdateOperationsInput | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    guestCount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeddingRsvpCreateManyInput = {
    id?: string
    weddingId: string
    guestId?: string | null
    name: string
    phone?: string | null
    status: $Enums.AttendanceStatus
    guestCount?: number
    message?: string | null
    isHidden?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeddingRsvpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    guestCount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeddingRsvpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    weddingId?: StringFieldUpdateOperationsInput | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    guestCount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeddingAnalyticsCreateInput = {
    id?: string
    event: $Enums.WeddingAnalyticsEvent
    sessionKey?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    wedding: WeddingCreateNestedOneWithoutAnalyticsInput
    guest?: WeddingGuestCreateNestedOneWithoutAnalyticsInput
  }

  export type WeddingAnalyticsUncheckedCreateInput = {
    id?: string
    weddingId: string
    guestId?: string | null
    event: $Enums.WeddingAnalyticsEvent
    sessionKey?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WeddingAnalyticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: EnumWeddingAnalyticsEventFieldUpdateOperationsInput | $Enums.WeddingAnalyticsEvent
    sessionKey?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wedding?: WeddingUpdateOneRequiredWithoutAnalyticsNestedInput
    guest?: WeddingGuestUpdateOneWithoutAnalyticsNestedInput
  }

  export type WeddingAnalyticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    weddingId?: StringFieldUpdateOperationsInput | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    event?: EnumWeddingAnalyticsEventFieldUpdateOperationsInput | $Enums.WeddingAnalyticsEvent
    sessionKey?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeddingAnalyticsCreateManyInput = {
    id?: string
    weddingId: string
    guestId?: string | null
    event: $Enums.WeddingAnalyticsEvent
    sessionKey?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WeddingAnalyticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: EnumWeddingAnalyticsEventFieldUpdateOperationsInput | $Enums.WeddingAnalyticsEvent
    sessionKey?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeddingAnalyticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    weddingId?: StringFieldUpdateOperationsInput | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    event?: EnumWeddingAnalyticsEventFieldUpdateOperationsInput | $Enums.WeddingAnalyticsEvent
    sessionKey?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    passwordHash?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    passwordHash?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    passwordHash?: SortOrder
    isAdmin?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type InvitationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type WeddingGuestListRelationFilter = {
    every?: WeddingGuestWhereInput
    some?: WeddingGuestWhereInput
    none?: WeddingGuestWhereInput
  }

  export type WeddingRsvpListRelationFilter = {
    every?: WeddingRsvpWhereInput
    some?: WeddingRsvpWhereInput
    none?: WeddingRsvpWhereInput
  }

  export type WeddingAnalyticsListRelationFilter = {
    every?: WeddingAnalyticsWhereInput
    some?: WeddingAnalyticsWhereInput
    none?: WeddingAnalyticsWhereInput
  }

  export type WeddingGuestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeddingRsvpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeddingAnalyticsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeddingCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    groomShortName?: SortOrder
    brideShortName?: SortOrder
    groomFullName?: SortOrder
    brideFullName?: SortOrder
    groomParents?: SortOrder
    brideParents?: SortOrder
    groomChildOrder?: SortOrder
    brideChildOrder?: SortOrder
    eventDate?: SortOrder
    dateLabel?: SortOrder
    timeLabel?: SortOrder
    venueName?: SortOrder
    venueAddress?: SortOrder
    mapUrl?: SortOrder
    template?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeddingMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    groomShortName?: SortOrder
    brideShortName?: SortOrder
    groomFullName?: SortOrder
    brideFullName?: SortOrder
    groomParents?: SortOrder
    brideParents?: SortOrder
    groomChildOrder?: SortOrder
    brideChildOrder?: SortOrder
    eventDate?: SortOrder
    dateLabel?: SortOrder
    timeLabel?: SortOrder
    venueName?: SortOrder
    venueAddress?: SortOrder
    mapUrl?: SortOrder
    template?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeddingMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    groomShortName?: SortOrder
    brideShortName?: SortOrder
    groomFullName?: SortOrder
    brideFullName?: SortOrder
    groomParents?: SortOrder
    brideParents?: SortOrder
    groomChildOrder?: SortOrder
    brideChildOrder?: SortOrder
    eventDate?: SortOrder
    dateLabel?: SortOrder
    timeLabel?: SortOrder
    venueName?: SortOrder
    venueAddress?: SortOrder
    mapUrl?: SortOrder
    template?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type WeddingScalarRelationFilter = {
    is?: WeddingWhereInput
    isNot?: WeddingWhereInput
  }

  export type WeddingRsvpNullableScalarRelationFilter = {
    is?: WeddingRsvpWhereInput | null
    isNot?: WeddingRsvpWhereInput | null
  }

  export type WeddingGuestCountOrderByAggregateInput = {
    id?: SortOrder
    weddingId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    groupName?: SortOrder
    maxGuests?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    isSent?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeddingGuestAvgOrderByAggregateInput = {
    maxGuests?: SortOrder
  }

  export type WeddingGuestMaxOrderByAggregateInput = {
    id?: SortOrder
    weddingId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    groupName?: SortOrder
    maxGuests?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    isSent?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeddingGuestMinOrderByAggregateInput = {
    id?: SortOrder
    weddingId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    groupName?: SortOrder
    maxGuests?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    isSent?: SortOrder
    sentAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeddingGuestSumOrderByAggregateInput = {
    maxGuests?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type WeddingGuestNullableScalarRelationFilter = {
    is?: WeddingGuestWhereInput | null
    isNot?: WeddingGuestWhereInput | null
  }

  export type WeddingRsvpCountOrderByAggregateInput = {
    id?: SortOrder
    weddingId?: SortOrder
    guestId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    guestCount?: SortOrder
    message?: SortOrder
    isHidden?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeddingRsvpAvgOrderByAggregateInput = {
    guestCount?: SortOrder
  }

  export type WeddingRsvpMaxOrderByAggregateInput = {
    id?: SortOrder
    weddingId?: SortOrder
    guestId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    guestCount?: SortOrder
    message?: SortOrder
    isHidden?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeddingRsvpMinOrderByAggregateInput = {
    id?: SortOrder
    weddingId?: SortOrder
    guestId?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    guestCount?: SortOrder
    message?: SortOrder
    isHidden?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeddingRsvpSumOrderByAggregateInput = {
    guestCount?: SortOrder
  }

  export type EnumWeddingAnalyticsEventFilter<$PrismaModel = never> = {
    equals?: $Enums.WeddingAnalyticsEvent | EnumWeddingAnalyticsEventFieldRefInput<$PrismaModel>
    in?: $Enums.WeddingAnalyticsEvent[] | ListEnumWeddingAnalyticsEventFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeddingAnalyticsEvent[] | ListEnumWeddingAnalyticsEventFieldRefInput<$PrismaModel>
    not?: NestedEnumWeddingAnalyticsEventFilter<$PrismaModel> | $Enums.WeddingAnalyticsEvent
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WeddingAnalyticsCountOrderByAggregateInput = {
    id?: SortOrder
    weddingId?: SortOrder
    guestId?: SortOrder
    event?: SortOrder
    sessionKey?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type WeddingAnalyticsMaxOrderByAggregateInput = {
    id?: SortOrder
    weddingId?: SortOrder
    guestId?: SortOrder
    event?: SortOrder
    sessionKey?: SortOrder
    createdAt?: SortOrder
  }

  export type WeddingAnalyticsMinOrderByAggregateInput = {
    id?: SortOrder
    weddingId?: SortOrder
    guestId?: SortOrder
    event?: SortOrder
    sessionKey?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumWeddingAnalyticsEventWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeddingAnalyticsEvent | EnumWeddingAnalyticsEventFieldRefInput<$PrismaModel>
    in?: $Enums.WeddingAnalyticsEvent[] | ListEnumWeddingAnalyticsEventFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeddingAnalyticsEvent[] | ListEnumWeddingAnalyticsEventFieldRefInput<$PrismaModel>
    not?: NestedEnumWeddingAnalyticsEventWithAggregatesFilter<$PrismaModel> | $Enums.WeddingAnalyticsEvent
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeddingAnalyticsEventFilter<$PrismaModel>
    _max?: NestedEnumWeddingAnalyticsEventFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type EnumAttendanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceStatus
  }

  export type WeddingGuestCreateNestedManyWithoutWeddingInput = {
    create?: XOR<WeddingGuestCreateWithoutWeddingInput, WeddingGuestUncheckedCreateWithoutWeddingInput> | WeddingGuestCreateWithoutWeddingInput[] | WeddingGuestUncheckedCreateWithoutWeddingInput[]
    connectOrCreate?: WeddingGuestCreateOrConnectWithoutWeddingInput | WeddingGuestCreateOrConnectWithoutWeddingInput[]
    createMany?: WeddingGuestCreateManyWeddingInputEnvelope
    connect?: WeddingGuestWhereUniqueInput | WeddingGuestWhereUniqueInput[]
  }

  export type WeddingRsvpCreateNestedManyWithoutWeddingInput = {
    create?: XOR<WeddingRsvpCreateWithoutWeddingInput, WeddingRsvpUncheckedCreateWithoutWeddingInput> | WeddingRsvpCreateWithoutWeddingInput[] | WeddingRsvpUncheckedCreateWithoutWeddingInput[]
    connectOrCreate?: WeddingRsvpCreateOrConnectWithoutWeddingInput | WeddingRsvpCreateOrConnectWithoutWeddingInput[]
    createMany?: WeddingRsvpCreateManyWeddingInputEnvelope
    connect?: WeddingRsvpWhereUniqueInput | WeddingRsvpWhereUniqueInput[]
  }

  export type WeddingAnalyticsCreateNestedManyWithoutWeddingInput = {
    create?: XOR<WeddingAnalyticsCreateWithoutWeddingInput, WeddingAnalyticsUncheckedCreateWithoutWeddingInput> | WeddingAnalyticsCreateWithoutWeddingInput[] | WeddingAnalyticsUncheckedCreateWithoutWeddingInput[]
    connectOrCreate?: WeddingAnalyticsCreateOrConnectWithoutWeddingInput | WeddingAnalyticsCreateOrConnectWithoutWeddingInput[]
    createMany?: WeddingAnalyticsCreateManyWeddingInputEnvelope
    connect?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
  }

  export type WeddingGuestUncheckedCreateNestedManyWithoutWeddingInput = {
    create?: XOR<WeddingGuestCreateWithoutWeddingInput, WeddingGuestUncheckedCreateWithoutWeddingInput> | WeddingGuestCreateWithoutWeddingInput[] | WeddingGuestUncheckedCreateWithoutWeddingInput[]
    connectOrCreate?: WeddingGuestCreateOrConnectWithoutWeddingInput | WeddingGuestCreateOrConnectWithoutWeddingInput[]
    createMany?: WeddingGuestCreateManyWeddingInputEnvelope
    connect?: WeddingGuestWhereUniqueInput | WeddingGuestWhereUniqueInput[]
  }

  export type WeddingRsvpUncheckedCreateNestedManyWithoutWeddingInput = {
    create?: XOR<WeddingRsvpCreateWithoutWeddingInput, WeddingRsvpUncheckedCreateWithoutWeddingInput> | WeddingRsvpCreateWithoutWeddingInput[] | WeddingRsvpUncheckedCreateWithoutWeddingInput[]
    connectOrCreate?: WeddingRsvpCreateOrConnectWithoutWeddingInput | WeddingRsvpCreateOrConnectWithoutWeddingInput[]
    createMany?: WeddingRsvpCreateManyWeddingInputEnvelope
    connect?: WeddingRsvpWhereUniqueInput | WeddingRsvpWhereUniqueInput[]
  }

  export type WeddingAnalyticsUncheckedCreateNestedManyWithoutWeddingInput = {
    create?: XOR<WeddingAnalyticsCreateWithoutWeddingInput, WeddingAnalyticsUncheckedCreateWithoutWeddingInput> | WeddingAnalyticsCreateWithoutWeddingInput[] | WeddingAnalyticsUncheckedCreateWithoutWeddingInput[]
    connectOrCreate?: WeddingAnalyticsCreateOrConnectWithoutWeddingInput | WeddingAnalyticsCreateOrConnectWithoutWeddingInput[]
    createMany?: WeddingAnalyticsCreateManyWeddingInputEnvelope
    connect?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
  }

  export type WeddingGuestUpdateManyWithoutWeddingNestedInput = {
    create?: XOR<WeddingGuestCreateWithoutWeddingInput, WeddingGuestUncheckedCreateWithoutWeddingInput> | WeddingGuestCreateWithoutWeddingInput[] | WeddingGuestUncheckedCreateWithoutWeddingInput[]
    connectOrCreate?: WeddingGuestCreateOrConnectWithoutWeddingInput | WeddingGuestCreateOrConnectWithoutWeddingInput[]
    upsert?: WeddingGuestUpsertWithWhereUniqueWithoutWeddingInput | WeddingGuestUpsertWithWhereUniqueWithoutWeddingInput[]
    createMany?: WeddingGuestCreateManyWeddingInputEnvelope
    set?: WeddingGuestWhereUniqueInput | WeddingGuestWhereUniqueInput[]
    disconnect?: WeddingGuestWhereUniqueInput | WeddingGuestWhereUniqueInput[]
    delete?: WeddingGuestWhereUniqueInput | WeddingGuestWhereUniqueInput[]
    connect?: WeddingGuestWhereUniqueInput | WeddingGuestWhereUniqueInput[]
    update?: WeddingGuestUpdateWithWhereUniqueWithoutWeddingInput | WeddingGuestUpdateWithWhereUniqueWithoutWeddingInput[]
    updateMany?: WeddingGuestUpdateManyWithWhereWithoutWeddingInput | WeddingGuestUpdateManyWithWhereWithoutWeddingInput[]
    deleteMany?: WeddingGuestScalarWhereInput | WeddingGuestScalarWhereInput[]
  }

  export type WeddingRsvpUpdateManyWithoutWeddingNestedInput = {
    create?: XOR<WeddingRsvpCreateWithoutWeddingInput, WeddingRsvpUncheckedCreateWithoutWeddingInput> | WeddingRsvpCreateWithoutWeddingInput[] | WeddingRsvpUncheckedCreateWithoutWeddingInput[]
    connectOrCreate?: WeddingRsvpCreateOrConnectWithoutWeddingInput | WeddingRsvpCreateOrConnectWithoutWeddingInput[]
    upsert?: WeddingRsvpUpsertWithWhereUniqueWithoutWeddingInput | WeddingRsvpUpsertWithWhereUniqueWithoutWeddingInput[]
    createMany?: WeddingRsvpCreateManyWeddingInputEnvelope
    set?: WeddingRsvpWhereUniqueInput | WeddingRsvpWhereUniqueInput[]
    disconnect?: WeddingRsvpWhereUniqueInput | WeddingRsvpWhereUniqueInput[]
    delete?: WeddingRsvpWhereUniqueInput | WeddingRsvpWhereUniqueInput[]
    connect?: WeddingRsvpWhereUniqueInput | WeddingRsvpWhereUniqueInput[]
    update?: WeddingRsvpUpdateWithWhereUniqueWithoutWeddingInput | WeddingRsvpUpdateWithWhereUniqueWithoutWeddingInput[]
    updateMany?: WeddingRsvpUpdateManyWithWhereWithoutWeddingInput | WeddingRsvpUpdateManyWithWhereWithoutWeddingInput[]
    deleteMany?: WeddingRsvpScalarWhereInput | WeddingRsvpScalarWhereInput[]
  }

  export type WeddingAnalyticsUpdateManyWithoutWeddingNestedInput = {
    create?: XOR<WeddingAnalyticsCreateWithoutWeddingInput, WeddingAnalyticsUncheckedCreateWithoutWeddingInput> | WeddingAnalyticsCreateWithoutWeddingInput[] | WeddingAnalyticsUncheckedCreateWithoutWeddingInput[]
    connectOrCreate?: WeddingAnalyticsCreateOrConnectWithoutWeddingInput | WeddingAnalyticsCreateOrConnectWithoutWeddingInput[]
    upsert?: WeddingAnalyticsUpsertWithWhereUniqueWithoutWeddingInput | WeddingAnalyticsUpsertWithWhereUniqueWithoutWeddingInput[]
    createMany?: WeddingAnalyticsCreateManyWeddingInputEnvelope
    set?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
    disconnect?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
    delete?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
    connect?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
    update?: WeddingAnalyticsUpdateWithWhereUniqueWithoutWeddingInput | WeddingAnalyticsUpdateWithWhereUniqueWithoutWeddingInput[]
    updateMany?: WeddingAnalyticsUpdateManyWithWhereWithoutWeddingInput | WeddingAnalyticsUpdateManyWithWhereWithoutWeddingInput[]
    deleteMany?: WeddingAnalyticsScalarWhereInput | WeddingAnalyticsScalarWhereInput[]
  }

  export type WeddingGuestUncheckedUpdateManyWithoutWeddingNestedInput = {
    create?: XOR<WeddingGuestCreateWithoutWeddingInput, WeddingGuestUncheckedCreateWithoutWeddingInput> | WeddingGuestCreateWithoutWeddingInput[] | WeddingGuestUncheckedCreateWithoutWeddingInput[]
    connectOrCreate?: WeddingGuestCreateOrConnectWithoutWeddingInput | WeddingGuestCreateOrConnectWithoutWeddingInput[]
    upsert?: WeddingGuestUpsertWithWhereUniqueWithoutWeddingInput | WeddingGuestUpsertWithWhereUniqueWithoutWeddingInput[]
    createMany?: WeddingGuestCreateManyWeddingInputEnvelope
    set?: WeddingGuestWhereUniqueInput | WeddingGuestWhereUniqueInput[]
    disconnect?: WeddingGuestWhereUniqueInput | WeddingGuestWhereUniqueInput[]
    delete?: WeddingGuestWhereUniqueInput | WeddingGuestWhereUniqueInput[]
    connect?: WeddingGuestWhereUniqueInput | WeddingGuestWhereUniqueInput[]
    update?: WeddingGuestUpdateWithWhereUniqueWithoutWeddingInput | WeddingGuestUpdateWithWhereUniqueWithoutWeddingInput[]
    updateMany?: WeddingGuestUpdateManyWithWhereWithoutWeddingInput | WeddingGuestUpdateManyWithWhereWithoutWeddingInput[]
    deleteMany?: WeddingGuestScalarWhereInput | WeddingGuestScalarWhereInput[]
  }

  export type WeddingRsvpUncheckedUpdateManyWithoutWeddingNestedInput = {
    create?: XOR<WeddingRsvpCreateWithoutWeddingInput, WeddingRsvpUncheckedCreateWithoutWeddingInput> | WeddingRsvpCreateWithoutWeddingInput[] | WeddingRsvpUncheckedCreateWithoutWeddingInput[]
    connectOrCreate?: WeddingRsvpCreateOrConnectWithoutWeddingInput | WeddingRsvpCreateOrConnectWithoutWeddingInput[]
    upsert?: WeddingRsvpUpsertWithWhereUniqueWithoutWeddingInput | WeddingRsvpUpsertWithWhereUniqueWithoutWeddingInput[]
    createMany?: WeddingRsvpCreateManyWeddingInputEnvelope
    set?: WeddingRsvpWhereUniqueInput | WeddingRsvpWhereUniqueInput[]
    disconnect?: WeddingRsvpWhereUniqueInput | WeddingRsvpWhereUniqueInput[]
    delete?: WeddingRsvpWhereUniqueInput | WeddingRsvpWhereUniqueInput[]
    connect?: WeddingRsvpWhereUniqueInput | WeddingRsvpWhereUniqueInput[]
    update?: WeddingRsvpUpdateWithWhereUniqueWithoutWeddingInput | WeddingRsvpUpdateWithWhereUniqueWithoutWeddingInput[]
    updateMany?: WeddingRsvpUpdateManyWithWhereWithoutWeddingInput | WeddingRsvpUpdateManyWithWhereWithoutWeddingInput[]
    deleteMany?: WeddingRsvpScalarWhereInput | WeddingRsvpScalarWhereInput[]
  }

  export type WeddingAnalyticsUncheckedUpdateManyWithoutWeddingNestedInput = {
    create?: XOR<WeddingAnalyticsCreateWithoutWeddingInput, WeddingAnalyticsUncheckedCreateWithoutWeddingInput> | WeddingAnalyticsCreateWithoutWeddingInput[] | WeddingAnalyticsUncheckedCreateWithoutWeddingInput[]
    connectOrCreate?: WeddingAnalyticsCreateOrConnectWithoutWeddingInput | WeddingAnalyticsCreateOrConnectWithoutWeddingInput[]
    upsert?: WeddingAnalyticsUpsertWithWhereUniqueWithoutWeddingInput | WeddingAnalyticsUpsertWithWhereUniqueWithoutWeddingInput[]
    createMany?: WeddingAnalyticsCreateManyWeddingInputEnvelope
    set?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
    disconnect?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
    delete?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
    connect?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
    update?: WeddingAnalyticsUpdateWithWhereUniqueWithoutWeddingInput | WeddingAnalyticsUpdateWithWhereUniqueWithoutWeddingInput[]
    updateMany?: WeddingAnalyticsUpdateManyWithWhereWithoutWeddingInput | WeddingAnalyticsUpdateManyWithWhereWithoutWeddingInput[]
    deleteMany?: WeddingAnalyticsScalarWhereInput | WeddingAnalyticsScalarWhereInput[]
  }

  export type WeddingCreateNestedOneWithoutGuestsInput = {
    create?: XOR<WeddingCreateWithoutGuestsInput, WeddingUncheckedCreateWithoutGuestsInput>
    connectOrCreate?: WeddingCreateOrConnectWithoutGuestsInput
    connect?: WeddingWhereUniqueInput
  }

  export type WeddingRsvpCreateNestedOneWithoutGuestInput = {
    create?: XOR<WeddingRsvpCreateWithoutGuestInput, WeddingRsvpUncheckedCreateWithoutGuestInput>
    connectOrCreate?: WeddingRsvpCreateOrConnectWithoutGuestInput
    connect?: WeddingRsvpWhereUniqueInput
  }

  export type WeddingAnalyticsCreateNestedManyWithoutGuestInput = {
    create?: XOR<WeddingAnalyticsCreateWithoutGuestInput, WeddingAnalyticsUncheckedCreateWithoutGuestInput> | WeddingAnalyticsCreateWithoutGuestInput[] | WeddingAnalyticsUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: WeddingAnalyticsCreateOrConnectWithoutGuestInput | WeddingAnalyticsCreateOrConnectWithoutGuestInput[]
    createMany?: WeddingAnalyticsCreateManyGuestInputEnvelope
    connect?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
  }

  export type WeddingRsvpUncheckedCreateNestedOneWithoutGuestInput = {
    create?: XOR<WeddingRsvpCreateWithoutGuestInput, WeddingRsvpUncheckedCreateWithoutGuestInput>
    connectOrCreate?: WeddingRsvpCreateOrConnectWithoutGuestInput
    connect?: WeddingRsvpWhereUniqueInput
  }

  export type WeddingAnalyticsUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<WeddingAnalyticsCreateWithoutGuestInput, WeddingAnalyticsUncheckedCreateWithoutGuestInput> | WeddingAnalyticsCreateWithoutGuestInput[] | WeddingAnalyticsUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: WeddingAnalyticsCreateOrConnectWithoutGuestInput | WeddingAnalyticsCreateOrConnectWithoutGuestInput[]
    createMany?: WeddingAnalyticsCreateManyGuestInputEnvelope
    connect?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WeddingUpdateOneRequiredWithoutGuestsNestedInput = {
    create?: XOR<WeddingCreateWithoutGuestsInput, WeddingUncheckedCreateWithoutGuestsInput>
    connectOrCreate?: WeddingCreateOrConnectWithoutGuestsInput
    upsert?: WeddingUpsertWithoutGuestsInput
    connect?: WeddingWhereUniqueInput
    update?: XOR<XOR<WeddingUpdateToOneWithWhereWithoutGuestsInput, WeddingUpdateWithoutGuestsInput>, WeddingUncheckedUpdateWithoutGuestsInput>
  }

  export type WeddingRsvpUpdateOneWithoutGuestNestedInput = {
    create?: XOR<WeddingRsvpCreateWithoutGuestInput, WeddingRsvpUncheckedCreateWithoutGuestInput>
    connectOrCreate?: WeddingRsvpCreateOrConnectWithoutGuestInput
    upsert?: WeddingRsvpUpsertWithoutGuestInput
    disconnect?: WeddingRsvpWhereInput | boolean
    delete?: WeddingRsvpWhereInput | boolean
    connect?: WeddingRsvpWhereUniqueInput
    update?: XOR<XOR<WeddingRsvpUpdateToOneWithWhereWithoutGuestInput, WeddingRsvpUpdateWithoutGuestInput>, WeddingRsvpUncheckedUpdateWithoutGuestInput>
  }

  export type WeddingAnalyticsUpdateManyWithoutGuestNestedInput = {
    create?: XOR<WeddingAnalyticsCreateWithoutGuestInput, WeddingAnalyticsUncheckedCreateWithoutGuestInput> | WeddingAnalyticsCreateWithoutGuestInput[] | WeddingAnalyticsUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: WeddingAnalyticsCreateOrConnectWithoutGuestInput | WeddingAnalyticsCreateOrConnectWithoutGuestInput[]
    upsert?: WeddingAnalyticsUpsertWithWhereUniqueWithoutGuestInput | WeddingAnalyticsUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: WeddingAnalyticsCreateManyGuestInputEnvelope
    set?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
    disconnect?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
    delete?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
    connect?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
    update?: WeddingAnalyticsUpdateWithWhereUniqueWithoutGuestInput | WeddingAnalyticsUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: WeddingAnalyticsUpdateManyWithWhereWithoutGuestInput | WeddingAnalyticsUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: WeddingAnalyticsScalarWhereInput | WeddingAnalyticsScalarWhereInput[]
  }

  export type WeddingRsvpUncheckedUpdateOneWithoutGuestNestedInput = {
    create?: XOR<WeddingRsvpCreateWithoutGuestInput, WeddingRsvpUncheckedCreateWithoutGuestInput>
    connectOrCreate?: WeddingRsvpCreateOrConnectWithoutGuestInput
    upsert?: WeddingRsvpUpsertWithoutGuestInput
    disconnect?: WeddingRsvpWhereInput | boolean
    delete?: WeddingRsvpWhereInput | boolean
    connect?: WeddingRsvpWhereUniqueInput
    update?: XOR<XOR<WeddingRsvpUpdateToOneWithWhereWithoutGuestInput, WeddingRsvpUpdateWithoutGuestInput>, WeddingRsvpUncheckedUpdateWithoutGuestInput>
  }

  export type WeddingAnalyticsUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<WeddingAnalyticsCreateWithoutGuestInput, WeddingAnalyticsUncheckedCreateWithoutGuestInput> | WeddingAnalyticsCreateWithoutGuestInput[] | WeddingAnalyticsUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: WeddingAnalyticsCreateOrConnectWithoutGuestInput | WeddingAnalyticsCreateOrConnectWithoutGuestInput[]
    upsert?: WeddingAnalyticsUpsertWithWhereUniqueWithoutGuestInput | WeddingAnalyticsUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: WeddingAnalyticsCreateManyGuestInputEnvelope
    set?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
    disconnect?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
    delete?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
    connect?: WeddingAnalyticsWhereUniqueInput | WeddingAnalyticsWhereUniqueInput[]
    update?: WeddingAnalyticsUpdateWithWhereUniqueWithoutGuestInput | WeddingAnalyticsUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: WeddingAnalyticsUpdateManyWithWhereWithoutGuestInput | WeddingAnalyticsUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: WeddingAnalyticsScalarWhereInput | WeddingAnalyticsScalarWhereInput[]
  }

  export type WeddingCreateNestedOneWithoutRsvpsInput = {
    create?: XOR<WeddingCreateWithoutRsvpsInput, WeddingUncheckedCreateWithoutRsvpsInput>
    connectOrCreate?: WeddingCreateOrConnectWithoutRsvpsInput
    connect?: WeddingWhereUniqueInput
  }

  export type WeddingGuestCreateNestedOneWithoutRsvpInput = {
    create?: XOR<WeddingGuestCreateWithoutRsvpInput, WeddingGuestUncheckedCreateWithoutRsvpInput>
    connectOrCreate?: WeddingGuestCreateOrConnectWithoutRsvpInput
    connect?: WeddingGuestWhereUniqueInput
  }

  export type WeddingUpdateOneRequiredWithoutRsvpsNestedInput = {
    create?: XOR<WeddingCreateWithoutRsvpsInput, WeddingUncheckedCreateWithoutRsvpsInput>
    connectOrCreate?: WeddingCreateOrConnectWithoutRsvpsInput
    upsert?: WeddingUpsertWithoutRsvpsInput
    connect?: WeddingWhereUniqueInput
    update?: XOR<XOR<WeddingUpdateToOneWithWhereWithoutRsvpsInput, WeddingUpdateWithoutRsvpsInput>, WeddingUncheckedUpdateWithoutRsvpsInput>
  }

  export type WeddingGuestUpdateOneWithoutRsvpNestedInput = {
    create?: XOR<WeddingGuestCreateWithoutRsvpInput, WeddingGuestUncheckedCreateWithoutRsvpInput>
    connectOrCreate?: WeddingGuestCreateOrConnectWithoutRsvpInput
    upsert?: WeddingGuestUpsertWithoutRsvpInput
    disconnect?: WeddingGuestWhereInput | boolean
    delete?: WeddingGuestWhereInput | boolean
    connect?: WeddingGuestWhereUniqueInput
    update?: XOR<XOR<WeddingGuestUpdateToOneWithWhereWithoutRsvpInput, WeddingGuestUpdateWithoutRsvpInput>, WeddingGuestUncheckedUpdateWithoutRsvpInput>
  }

  export type WeddingCreateNestedOneWithoutAnalyticsInput = {
    create?: XOR<WeddingCreateWithoutAnalyticsInput, WeddingUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: WeddingCreateOrConnectWithoutAnalyticsInput
    connect?: WeddingWhereUniqueInput
  }

  export type WeddingGuestCreateNestedOneWithoutAnalyticsInput = {
    create?: XOR<WeddingGuestCreateWithoutAnalyticsInput, WeddingGuestUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: WeddingGuestCreateOrConnectWithoutAnalyticsInput
    connect?: WeddingGuestWhereUniqueInput
  }

  export type EnumWeddingAnalyticsEventFieldUpdateOperationsInput = {
    set?: $Enums.WeddingAnalyticsEvent
  }

  export type WeddingUpdateOneRequiredWithoutAnalyticsNestedInput = {
    create?: XOR<WeddingCreateWithoutAnalyticsInput, WeddingUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: WeddingCreateOrConnectWithoutAnalyticsInput
    upsert?: WeddingUpsertWithoutAnalyticsInput
    connect?: WeddingWhereUniqueInput
    update?: XOR<XOR<WeddingUpdateToOneWithWhereWithoutAnalyticsInput, WeddingUpdateWithoutAnalyticsInput>, WeddingUncheckedUpdateWithoutAnalyticsInput>
  }

  export type WeddingGuestUpdateOneWithoutAnalyticsNestedInput = {
    create?: XOR<WeddingGuestCreateWithoutAnalyticsInput, WeddingGuestUncheckedCreateWithoutAnalyticsInput>
    connectOrCreate?: WeddingGuestCreateOrConnectWithoutAnalyticsInput
    upsert?: WeddingGuestUpsertWithoutAnalyticsInput
    disconnect?: WeddingGuestWhereInput | boolean
    delete?: WeddingGuestWhereInput | boolean
    connect?: WeddingGuestWhereUniqueInput
    update?: XOR<XOR<WeddingGuestUpdateToOneWithWhereWithoutAnalyticsInput, WeddingGuestUpdateWithoutAnalyticsInput>, WeddingGuestUncheckedUpdateWithoutAnalyticsInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusFilter<$PrismaModel> | $Enums.AttendanceStatus
  }

  export type NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceStatus | EnumAttendanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceStatus[] | ListEnumAttendanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceStatusFilter<$PrismaModel>
    _max?: NestedEnumAttendanceStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumWeddingAnalyticsEventFilter<$PrismaModel = never> = {
    equals?: $Enums.WeddingAnalyticsEvent | EnumWeddingAnalyticsEventFieldRefInput<$PrismaModel>
    in?: $Enums.WeddingAnalyticsEvent[] | ListEnumWeddingAnalyticsEventFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeddingAnalyticsEvent[] | ListEnumWeddingAnalyticsEventFieldRefInput<$PrismaModel>
    not?: NestedEnumWeddingAnalyticsEventFilter<$PrismaModel> | $Enums.WeddingAnalyticsEvent
  }

  export type NestedEnumWeddingAnalyticsEventWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WeddingAnalyticsEvent | EnumWeddingAnalyticsEventFieldRefInput<$PrismaModel>
    in?: $Enums.WeddingAnalyticsEvent[] | ListEnumWeddingAnalyticsEventFieldRefInput<$PrismaModel>
    notIn?: $Enums.WeddingAnalyticsEvent[] | ListEnumWeddingAnalyticsEventFieldRefInput<$PrismaModel>
    not?: NestedEnumWeddingAnalyticsEventWithAggregatesFilter<$PrismaModel> | $Enums.WeddingAnalyticsEvent
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWeddingAnalyticsEventFilter<$PrismaModel>
    _max?: NestedEnumWeddingAnalyticsEventFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    isAdmin?: boolean
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    isAdmin?: boolean
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    isAdmin?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    isAdmin?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type WeddingGuestCreateWithoutWeddingInput = {
    id?: string
    name: string
    phone?: string | null
    groupName?: string | null
    maxGuests?: number
    slug: string
    isActive?: boolean
    isSent?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rsvp?: WeddingRsvpCreateNestedOneWithoutGuestInput
    analytics?: WeddingAnalyticsCreateNestedManyWithoutGuestInput
  }

  export type WeddingGuestUncheckedCreateWithoutWeddingInput = {
    id?: string
    name: string
    phone?: string | null
    groupName?: string | null
    maxGuests?: number
    slug: string
    isActive?: boolean
    isSent?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rsvp?: WeddingRsvpUncheckedCreateNestedOneWithoutGuestInput
    analytics?: WeddingAnalyticsUncheckedCreateNestedManyWithoutGuestInput
  }

  export type WeddingGuestCreateOrConnectWithoutWeddingInput = {
    where: WeddingGuestWhereUniqueInput
    create: XOR<WeddingGuestCreateWithoutWeddingInput, WeddingGuestUncheckedCreateWithoutWeddingInput>
  }

  export type WeddingGuestCreateManyWeddingInputEnvelope = {
    data: WeddingGuestCreateManyWeddingInput | WeddingGuestCreateManyWeddingInput[]
    skipDuplicates?: boolean
  }

  export type WeddingRsvpCreateWithoutWeddingInput = {
    id?: string
    name: string
    phone?: string | null
    status: $Enums.AttendanceStatus
    guestCount?: number
    message?: string | null
    isHidden?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    guest?: WeddingGuestCreateNestedOneWithoutRsvpInput
  }

  export type WeddingRsvpUncheckedCreateWithoutWeddingInput = {
    id?: string
    guestId?: string | null
    name: string
    phone?: string | null
    status: $Enums.AttendanceStatus
    guestCount?: number
    message?: string | null
    isHidden?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeddingRsvpCreateOrConnectWithoutWeddingInput = {
    where: WeddingRsvpWhereUniqueInput
    create: XOR<WeddingRsvpCreateWithoutWeddingInput, WeddingRsvpUncheckedCreateWithoutWeddingInput>
  }

  export type WeddingRsvpCreateManyWeddingInputEnvelope = {
    data: WeddingRsvpCreateManyWeddingInput | WeddingRsvpCreateManyWeddingInput[]
    skipDuplicates?: boolean
  }

  export type WeddingAnalyticsCreateWithoutWeddingInput = {
    id?: string
    event: $Enums.WeddingAnalyticsEvent
    sessionKey?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    guest?: WeddingGuestCreateNestedOneWithoutAnalyticsInput
  }

  export type WeddingAnalyticsUncheckedCreateWithoutWeddingInput = {
    id?: string
    guestId?: string | null
    event: $Enums.WeddingAnalyticsEvent
    sessionKey?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WeddingAnalyticsCreateOrConnectWithoutWeddingInput = {
    where: WeddingAnalyticsWhereUniqueInput
    create: XOR<WeddingAnalyticsCreateWithoutWeddingInput, WeddingAnalyticsUncheckedCreateWithoutWeddingInput>
  }

  export type WeddingAnalyticsCreateManyWeddingInputEnvelope = {
    data: WeddingAnalyticsCreateManyWeddingInput | WeddingAnalyticsCreateManyWeddingInput[]
    skipDuplicates?: boolean
  }

  export type WeddingGuestUpsertWithWhereUniqueWithoutWeddingInput = {
    where: WeddingGuestWhereUniqueInput
    update: XOR<WeddingGuestUpdateWithoutWeddingInput, WeddingGuestUncheckedUpdateWithoutWeddingInput>
    create: XOR<WeddingGuestCreateWithoutWeddingInput, WeddingGuestUncheckedCreateWithoutWeddingInput>
  }

  export type WeddingGuestUpdateWithWhereUniqueWithoutWeddingInput = {
    where: WeddingGuestWhereUniqueInput
    data: XOR<WeddingGuestUpdateWithoutWeddingInput, WeddingGuestUncheckedUpdateWithoutWeddingInput>
  }

  export type WeddingGuestUpdateManyWithWhereWithoutWeddingInput = {
    where: WeddingGuestScalarWhereInput
    data: XOR<WeddingGuestUpdateManyMutationInput, WeddingGuestUncheckedUpdateManyWithoutWeddingInput>
  }

  export type WeddingGuestScalarWhereInput = {
    AND?: WeddingGuestScalarWhereInput | WeddingGuestScalarWhereInput[]
    OR?: WeddingGuestScalarWhereInput[]
    NOT?: WeddingGuestScalarWhereInput | WeddingGuestScalarWhereInput[]
    id?: StringFilter<"WeddingGuest"> | string
    weddingId?: StringFilter<"WeddingGuest"> | string
    name?: StringFilter<"WeddingGuest"> | string
    phone?: StringNullableFilter<"WeddingGuest"> | string | null
    groupName?: StringNullableFilter<"WeddingGuest"> | string | null
    maxGuests?: IntFilter<"WeddingGuest"> | number
    slug?: StringFilter<"WeddingGuest"> | string
    isActive?: BoolFilter<"WeddingGuest"> | boolean
    isSent?: BoolFilter<"WeddingGuest"> | boolean
    sentAt?: DateTimeNullableFilter<"WeddingGuest"> | Date | string | null
    createdAt?: DateTimeFilter<"WeddingGuest"> | Date | string
    updatedAt?: DateTimeFilter<"WeddingGuest"> | Date | string
  }

  export type WeddingRsvpUpsertWithWhereUniqueWithoutWeddingInput = {
    where: WeddingRsvpWhereUniqueInput
    update: XOR<WeddingRsvpUpdateWithoutWeddingInput, WeddingRsvpUncheckedUpdateWithoutWeddingInput>
    create: XOR<WeddingRsvpCreateWithoutWeddingInput, WeddingRsvpUncheckedCreateWithoutWeddingInput>
  }

  export type WeddingRsvpUpdateWithWhereUniqueWithoutWeddingInput = {
    where: WeddingRsvpWhereUniqueInput
    data: XOR<WeddingRsvpUpdateWithoutWeddingInput, WeddingRsvpUncheckedUpdateWithoutWeddingInput>
  }

  export type WeddingRsvpUpdateManyWithWhereWithoutWeddingInput = {
    where: WeddingRsvpScalarWhereInput
    data: XOR<WeddingRsvpUpdateManyMutationInput, WeddingRsvpUncheckedUpdateManyWithoutWeddingInput>
  }

  export type WeddingRsvpScalarWhereInput = {
    AND?: WeddingRsvpScalarWhereInput | WeddingRsvpScalarWhereInput[]
    OR?: WeddingRsvpScalarWhereInput[]
    NOT?: WeddingRsvpScalarWhereInput | WeddingRsvpScalarWhereInput[]
    id?: StringFilter<"WeddingRsvp"> | string
    weddingId?: StringFilter<"WeddingRsvp"> | string
    guestId?: StringNullableFilter<"WeddingRsvp"> | string | null
    name?: StringFilter<"WeddingRsvp"> | string
    phone?: StringNullableFilter<"WeddingRsvp"> | string | null
    status?: EnumAttendanceStatusFilter<"WeddingRsvp"> | $Enums.AttendanceStatus
    guestCount?: IntFilter<"WeddingRsvp"> | number
    message?: StringNullableFilter<"WeddingRsvp"> | string | null
    isHidden?: BoolFilter<"WeddingRsvp"> | boolean
    createdAt?: DateTimeFilter<"WeddingRsvp"> | Date | string
    updatedAt?: DateTimeFilter<"WeddingRsvp"> | Date | string
  }

  export type WeddingAnalyticsUpsertWithWhereUniqueWithoutWeddingInput = {
    where: WeddingAnalyticsWhereUniqueInput
    update: XOR<WeddingAnalyticsUpdateWithoutWeddingInput, WeddingAnalyticsUncheckedUpdateWithoutWeddingInput>
    create: XOR<WeddingAnalyticsCreateWithoutWeddingInput, WeddingAnalyticsUncheckedCreateWithoutWeddingInput>
  }

  export type WeddingAnalyticsUpdateWithWhereUniqueWithoutWeddingInput = {
    where: WeddingAnalyticsWhereUniqueInput
    data: XOR<WeddingAnalyticsUpdateWithoutWeddingInput, WeddingAnalyticsUncheckedUpdateWithoutWeddingInput>
  }

  export type WeddingAnalyticsUpdateManyWithWhereWithoutWeddingInput = {
    where: WeddingAnalyticsScalarWhereInput
    data: XOR<WeddingAnalyticsUpdateManyMutationInput, WeddingAnalyticsUncheckedUpdateManyWithoutWeddingInput>
  }

  export type WeddingAnalyticsScalarWhereInput = {
    AND?: WeddingAnalyticsScalarWhereInput | WeddingAnalyticsScalarWhereInput[]
    OR?: WeddingAnalyticsScalarWhereInput[]
    NOT?: WeddingAnalyticsScalarWhereInput | WeddingAnalyticsScalarWhereInput[]
    id?: StringFilter<"WeddingAnalytics"> | string
    weddingId?: StringFilter<"WeddingAnalytics"> | string
    guestId?: StringNullableFilter<"WeddingAnalytics"> | string | null
    event?: EnumWeddingAnalyticsEventFilter<"WeddingAnalytics"> | $Enums.WeddingAnalyticsEvent
    sessionKey?: StringNullableFilter<"WeddingAnalytics"> | string | null
    metadata?: JsonNullableFilter<"WeddingAnalytics">
    createdAt?: DateTimeFilter<"WeddingAnalytics"> | Date | string
  }

  export type WeddingCreateWithoutGuestsInput = {
    id?: string
    key: string
    name: string
    groomShortName: string
    brideShortName: string
    groomFullName: string
    brideFullName: string
    groomParents?: string | null
    brideParents?: string | null
    groomChildOrder?: string | null
    brideChildOrder?: string | null
    eventDate?: Date | string | null
    dateLabel?: string | null
    timeLabel?: string | null
    venueName?: string | null
    venueAddress?: string | null
    mapUrl?: string | null
    template?: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rsvps?: WeddingRsvpCreateNestedManyWithoutWeddingInput
    analytics?: WeddingAnalyticsCreateNestedManyWithoutWeddingInput
  }

  export type WeddingUncheckedCreateWithoutGuestsInput = {
    id?: string
    key: string
    name: string
    groomShortName: string
    brideShortName: string
    groomFullName: string
    brideFullName: string
    groomParents?: string | null
    brideParents?: string | null
    groomChildOrder?: string | null
    brideChildOrder?: string | null
    eventDate?: Date | string | null
    dateLabel?: string | null
    timeLabel?: string | null
    venueName?: string | null
    venueAddress?: string | null
    mapUrl?: string | null
    template?: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rsvps?: WeddingRsvpUncheckedCreateNestedManyWithoutWeddingInput
    analytics?: WeddingAnalyticsUncheckedCreateNestedManyWithoutWeddingInput
  }

  export type WeddingCreateOrConnectWithoutGuestsInput = {
    where: WeddingWhereUniqueInput
    create: XOR<WeddingCreateWithoutGuestsInput, WeddingUncheckedCreateWithoutGuestsInput>
  }

  export type WeddingRsvpCreateWithoutGuestInput = {
    id?: string
    name: string
    phone?: string | null
    status: $Enums.AttendanceStatus
    guestCount?: number
    message?: string | null
    isHidden?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    wedding: WeddingCreateNestedOneWithoutRsvpsInput
  }

  export type WeddingRsvpUncheckedCreateWithoutGuestInput = {
    id?: string
    weddingId: string
    name: string
    phone?: string | null
    status: $Enums.AttendanceStatus
    guestCount?: number
    message?: string | null
    isHidden?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeddingRsvpCreateOrConnectWithoutGuestInput = {
    where: WeddingRsvpWhereUniqueInput
    create: XOR<WeddingRsvpCreateWithoutGuestInput, WeddingRsvpUncheckedCreateWithoutGuestInput>
  }

  export type WeddingAnalyticsCreateWithoutGuestInput = {
    id?: string
    event: $Enums.WeddingAnalyticsEvent
    sessionKey?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    wedding: WeddingCreateNestedOneWithoutAnalyticsInput
  }

  export type WeddingAnalyticsUncheckedCreateWithoutGuestInput = {
    id?: string
    weddingId: string
    event: $Enums.WeddingAnalyticsEvent
    sessionKey?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WeddingAnalyticsCreateOrConnectWithoutGuestInput = {
    where: WeddingAnalyticsWhereUniqueInput
    create: XOR<WeddingAnalyticsCreateWithoutGuestInput, WeddingAnalyticsUncheckedCreateWithoutGuestInput>
  }

  export type WeddingAnalyticsCreateManyGuestInputEnvelope = {
    data: WeddingAnalyticsCreateManyGuestInput | WeddingAnalyticsCreateManyGuestInput[]
    skipDuplicates?: boolean
  }

  export type WeddingUpsertWithoutGuestsInput = {
    update: XOR<WeddingUpdateWithoutGuestsInput, WeddingUncheckedUpdateWithoutGuestsInput>
    create: XOR<WeddingCreateWithoutGuestsInput, WeddingUncheckedCreateWithoutGuestsInput>
    where?: WeddingWhereInput
  }

  export type WeddingUpdateToOneWithWhereWithoutGuestsInput = {
    where?: WeddingWhereInput
    data: XOR<WeddingUpdateWithoutGuestsInput, WeddingUncheckedUpdateWithoutGuestsInput>
  }

  export type WeddingUpdateWithoutGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groomShortName?: StringFieldUpdateOperationsInput | string
    brideShortName?: StringFieldUpdateOperationsInput | string
    groomFullName?: StringFieldUpdateOperationsInput | string
    brideFullName?: StringFieldUpdateOperationsInput | string
    groomParents?: NullableStringFieldUpdateOperationsInput | string | null
    brideParents?: NullableStringFieldUpdateOperationsInput | string | null
    groomChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    brideChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateLabel?: NullableStringFieldUpdateOperationsInput | string | null
    timeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    template?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rsvps?: WeddingRsvpUpdateManyWithoutWeddingNestedInput
    analytics?: WeddingAnalyticsUpdateManyWithoutWeddingNestedInput
  }

  export type WeddingUncheckedUpdateWithoutGuestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groomShortName?: StringFieldUpdateOperationsInput | string
    brideShortName?: StringFieldUpdateOperationsInput | string
    groomFullName?: StringFieldUpdateOperationsInput | string
    brideFullName?: StringFieldUpdateOperationsInput | string
    groomParents?: NullableStringFieldUpdateOperationsInput | string | null
    brideParents?: NullableStringFieldUpdateOperationsInput | string | null
    groomChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    brideChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateLabel?: NullableStringFieldUpdateOperationsInput | string | null
    timeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    template?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rsvps?: WeddingRsvpUncheckedUpdateManyWithoutWeddingNestedInput
    analytics?: WeddingAnalyticsUncheckedUpdateManyWithoutWeddingNestedInput
  }

  export type WeddingRsvpUpsertWithoutGuestInput = {
    update: XOR<WeddingRsvpUpdateWithoutGuestInput, WeddingRsvpUncheckedUpdateWithoutGuestInput>
    create: XOR<WeddingRsvpCreateWithoutGuestInput, WeddingRsvpUncheckedCreateWithoutGuestInput>
    where?: WeddingRsvpWhereInput
  }

  export type WeddingRsvpUpdateToOneWithWhereWithoutGuestInput = {
    where?: WeddingRsvpWhereInput
    data: XOR<WeddingRsvpUpdateWithoutGuestInput, WeddingRsvpUncheckedUpdateWithoutGuestInput>
  }

  export type WeddingRsvpUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    guestCount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wedding?: WeddingUpdateOneRequiredWithoutRsvpsNestedInput
  }

  export type WeddingRsvpUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    weddingId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    guestCount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeddingAnalyticsUpsertWithWhereUniqueWithoutGuestInput = {
    where: WeddingAnalyticsWhereUniqueInput
    update: XOR<WeddingAnalyticsUpdateWithoutGuestInput, WeddingAnalyticsUncheckedUpdateWithoutGuestInput>
    create: XOR<WeddingAnalyticsCreateWithoutGuestInput, WeddingAnalyticsUncheckedCreateWithoutGuestInput>
  }

  export type WeddingAnalyticsUpdateWithWhereUniqueWithoutGuestInput = {
    where: WeddingAnalyticsWhereUniqueInput
    data: XOR<WeddingAnalyticsUpdateWithoutGuestInput, WeddingAnalyticsUncheckedUpdateWithoutGuestInput>
  }

  export type WeddingAnalyticsUpdateManyWithWhereWithoutGuestInput = {
    where: WeddingAnalyticsScalarWhereInput
    data: XOR<WeddingAnalyticsUpdateManyMutationInput, WeddingAnalyticsUncheckedUpdateManyWithoutGuestInput>
  }

  export type WeddingCreateWithoutRsvpsInput = {
    id?: string
    key: string
    name: string
    groomShortName: string
    brideShortName: string
    groomFullName: string
    brideFullName: string
    groomParents?: string | null
    brideParents?: string | null
    groomChildOrder?: string | null
    brideChildOrder?: string | null
    eventDate?: Date | string | null
    dateLabel?: string | null
    timeLabel?: string | null
    venueName?: string | null
    venueAddress?: string | null
    mapUrl?: string | null
    template?: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: WeddingGuestCreateNestedManyWithoutWeddingInput
    analytics?: WeddingAnalyticsCreateNestedManyWithoutWeddingInput
  }

  export type WeddingUncheckedCreateWithoutRsvpsInput = {
    id?: string
    key: string
    name: string
    groomShortName: string
    brideShortName: string
    groomFullName: string
    brideFullName: string
    groomParents?: string | null
    brideParents?: string | null
    groomChildOrder?: string | null
    brideChildOrder?: string | null
    eventDate?: Date | string | null
    dateLabel?: string | null
    timeLabel?: string | null
    venueName?: string | null
    venueAddress?: string | null
    mapUrl?: string | null
    template?: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: WeddingGuestUncheckedCreateNestedManyWithoutWeddingInput
    analytics?: WeddingAnalyticsUncheckedCreateNestedManyWithoutWeddingInput
  }

  export type WeddingCreateOrConnectWithoutRsvpsInput = {
    where: WeddingWhereUniqueInput
    create: XOR<WeddingCreateWithoutRsvpsInput, WeddingUncheckedCreateWithoutRsvpsInput>
  }

  export type WeddingGuestCreateWithoutRsvpInput = {
    id?: string
    name: string
    phone?: string | null
    groupName?: string | null
    maxGuests?: number
    slug: string
    isActive?: boolean
    isSent?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wedding: WeddingCreateNestedOneWithoutGuestsInput
    analytics?: WeddingAnalyticsCreateNestedManyWithoutGuestInput
  }

  export type WeddingGuestUncheckedCreateWithoutRsvpInput = {
    id?: string
    weddingId: string
    name: string
    phone?: string | null
    groupName?: string | null
    maxGuests?: number
    slug: string
    isActive?: boolean
    isSent?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analytics?: WeddingAnalyticsUncheckedCreateNestedManyWithoutGuestInput
  }

  export type WeddingGuestCreateOrConnectWithoutRsvpInput = {
    where: WeddingGuestWhereUniqueInput
    create: XOR<WeddingGuestCreateWithoutRsvpInput, WeddingGuestUncheckedCreateWithoutRsvpInput>
  }

  export type WeddingUpsertWithoutRsvpsInput = {
    update: XOR<WeddingUpdateWithoutRsvpsInput, WeddingUncheckedUpdateWithoutRsvpsInput>
    create: XOR<WeddingCreateWithoutRsvpsInput, WeddingUncheckedCreateWithoutRsvpsInput>
    where?: WeddingWhereInput
  }

  export type WeddingUpdateToOneWithWhereWithoutRsvpsInput = {
    where?: WeddingWhereInput
    data: XOR<WeddingUpdateWithoutRsvpsInput, WeddingUncheckedUpdateWithoutRsvpsInput>
  }

  export type WeddingUpdateWithoutRsvpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groomShortName?: StringFieldUpdateOperationsInput | string
    brideShortName?: StringFieldUpdateOperationsInput | string
    groomFullName?: StringFieldUpdateOperationsInput | string
    brideFullName?: StringFieldUpdateOperationsInput | string
    groomParents?: NullableStringFieldUpdateOperationsInput | string | null
    brideParents?: NullableStringFieldUpdateOperationsInput | string | null
    groomChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    brideChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateLabel?: NullableStringFieldUpdateOperationsInput | string | null
    timeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    template?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: WeddingGuestUpdateManyWithoutWeddingNestedInput
    analytics?: WeddingAnalyticsUpdateManyWithoutWeddingNestedInput
  }

  export type WeddingUncheckedUpdateWithoutRsvpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groomShortName?: StringFieldUpdateOperationsInput | string
    brideShortName?: StringFieldUpdateOperationsInput | string
    groomFullName?: StringFieldUpdateOperationsInput | string
    brideFullName?: StringFieldUpdateOperationsInput | string
    groomParents?: NullableStringFieldUpdateOperationsInput | string | null
    brideParents?: NullableStringFieldUpdateOperationsInput | string | null
    groomChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    brideChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateLabel?: NullableStringFieldUpdateOperationsInput | string | null
    timeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    template?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: WeddingGuestUncheckedUpdateManyWithoutWeddingNestedInput
    analytics?: WeddingAnalyticsUncheckedUpdateManyWithoutWeddingNestedInput
  }

  export type WeddingGuestUpsertWithoutRsvpInput = {
    update: XOR<WeddingGuestUpdateWithoutRsvpInput, WeddingGuestUncheckedUpdateWithoutRsvpInput>
    create: XOR<WeddingGuestCreateWithoutRsvpInput, WeddingGuestUncheckedCreateWithoutRsvpInput>
    where?: WeddingGuestWhereInput
  }

  export type WeddingGuestUpdateToOneWithWhereWithoutRsvpInput = {
    where?: WeddingGuestWhereInput
    data: XOR<WeddingGuestUpdateWithoutRsvpInput, WeddingGuestUncheckedUpdateWithoutRsvpInput>
  }

  export type WeddingGuestUpdateWithoutRsvpInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSent?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wedding?: WeddingUpdateOneRequiredWithoutGuestsNestedInput
    analytics?: WeddingAnalyticsUpdateManyWithoutGuestNestedInput
  }

  export type WeddingGuestUncheckedUpdateWithoutRsvpInput = {
    id?: StringFieldUpdateOperationsInput | string
    weddingId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSent?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analytics?: WeddingAnalyticsUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type WeddingCreateWithoutAnalyticsInput = {
    id?: string
    key: string
    name: string
    groomShortName: string
    brideShortName: string
    groomFullName: string
    brideFullName: string
    groomParents?: string | null
    brideParents?: string | null
    groomChildOrder?: string | null
    brideChildOrder?: string | null
    eventDate?: Date | string | null
    dateLabel?: string | null
    timeLabel?: string | null
    venueName?: string | null
    venueAddress?: string | null
    mapUrl?: string | null
    template?: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: WeddingGuestCreateNestedManyWithoutWeddingInput
    rsvps?: WeddingRsvpCreateNestedManyWithoutWeddingInput
  }

  export type WeddingUncheckedCreateWithoutAnalyticsInput = {
    id?: string
    key: string
    name: string
    groomShortName: string
    brideShortName: string
    groomFullName: string
    brideFullName: string
    groomParents?: string | null
    brideParents?: string | null
    groomChildOrder?: string | null
    brideChildOrder?: string | null
    eventDate?: Date | string | null
    dateLabel?: string | null
    timeLabel?: string | null
    venueName?: string | null
    venueAddress?: string | null
    mapUrl?: string | null
    template?: string
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    guests?: WeddingGuestUncheckedCreateNestedManyWithoutWeddingInput
    rsvps?: WeddingRsvpUncheckedCreateNestedManyWithoutWeddingInput
  }

  export type WeddingCreateOrConnectWithoutAnalyticsInput = {
    where: WeddingWhereUniqueInput
    create: XOR<WeddingCreateWithoutAnalyticsInput, WeddingUncheckedCreateWithoutAnalyticsInput>
  }

  export type WeddingGuestCreateWithoutAnalyticsInput = {
    id?: string
    name: string
    phone?: string | null
    groupName?: string | null
    maxGuests?: number
    slug: string
    isActive?: boolean
    isSent?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wedding: WeddingCreateNestedOneWithoutGuestsInput
    rsvp?: WeddingRsvpCreateNestedOneWithoutGuestInput
  }

  export type WeddingGuestUncheckedCreateWithoutAnalyticsInput = {
    id?: string
    weddingId: string
    name: string
    phone?: string | null
    groupName?: string | null
    maxGuests?: number
    slug: string
    isActive?: boolean
    isSent?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rsvp?: WeddingRsvpUncheckedCreateNestedOneWithoutGuestInput
  }

  export type WeddingGuestCreateOrConnectWithoutAnalyticsInput = {
    where: WeddingGuestWhereUniqueInput
    create: XOR<WeddingGuestCreateWithoutAnalyticsInput, WeddingGuestUncheckedCreateWithoutAnalyticsInput>
  }

  export type WeddingUpsertWithoutAnalyticsInput = {
    update: XOR<WeddingUpdateWithoutAnalyticsInput, WeddingUncheckedUpdateWithoutAnalyticsInput>
    create: XOR<WeddingCreateWithoutAnalyticsInput, WeddingUncheckedCreateWithoutAnalyticsInput>
    where?: WeddingWhereInput
  }

  export type WeddingUpdateToOneWithWhereWithoutAnalyticsInput = {
    where?: WeddingWhereInput
    data: XOR<WeddingUpdateWithoutAnalyticsInput, WeddingUncheckedUpdateWithoutAnalyticsInput>
  }

  export type WeddingUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groomShortName?: StringFieldUpdateOperationsInput | string
    brideShortName?: StringFieldUpdateOperationsInput | string
    groomFullName?: StringFieldUpdateOperationsInput | string
    brideFullName?: StringFieldUpdateOperationsInput | string
    groomParents?: NullableStringFieldUpdateOperationsInput | string | null
    brideParents?: NullableStringFieldUpdateOperationsInput | string | null
    groomChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    brideChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateLabel?: NullableStringFieldUpdateOperationsInput | string | null
    timeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    template?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: WeddingGuestUpdateManyWithoutWeddingNestedInput
    rsvps?: WeddingRsvpUpdateManyWithoutWeddingNestedInput
  }

  export type WeddingUncheckedUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    groomShortName?: StringFieldUpdateOperationsInput | string
    brideShortName?: StringFieldUpdateOperationsInput | string
    groomFullName?: StringFieldUpdateOperationsInput | string
    brideFullName?: StringFieldUpdateOperationsInput | string
    groomParents?: NullableStringFieldUpdateOperationsInput | string | null
    brideParents?: NullableStringFieldUpdateOperationsInput | string | null
    groomChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    brideChildOrder?: NullableStringFieldUpdateOperationsInput | string | null
    eventDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dateLabel?: NullableStringFieldUpdateOperationsInput | string | null
    timeLabel?: NullableStringFieldUpdateOperationsInput | string | null
    venueName?: NullableStringFieldUpdateOperationsInput | string | null
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    mapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    template?: StringFieldUpdateOperationsInput | string
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: WeddingGuestUncheckedUpdateManyWithoutWeddingNestedInput
    rsvps?: WeddingRsvpUncheckedUpdateManyWithoutWeddingNestedInput
  }

  export type WeddingGuestUpsertWithoutAnalyticsInput = {
    update: XOR<WeddingGuestUpdateWithoutAnalyticsInput, WeddingGuestUncheckedUpdateWithoutAnalyticsInput>
    create: XOR<WeddingGuestCreateWithoutAnalyticsInput, WeddingGuestUncheckedCreateWithoutAnalyticsInput>
    where?: WeddingGuestWhereInput
  }

  export type WeddingGuestUpdateToOneWithWhereWithoutAnalyticsInput = {
    where?: WeddingGuestWhereInput
    data: XOR<WeddingGuestUpdateWithoutAnalyticsInput, WeddingGuestUncheckedUpdateWithoutAnalyticsInput>
  }

  export type WeddingGuestUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSent?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wedding?: WeddingUpdateOneRequiredWithoutGuestsNestedInput
    rsvp?: WeddingRsvpUpdateOneWithoutGuestNestedInput
  }

  export type WeddingGuestUncheckedUpdateWithoutAnalyticsInput = {
    id?: StringFieldUpdateOperationsInput | string
    weddingId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSent?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rsvp?: WeddingRsvpUncheckedUpdateOneWithoutGuestNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeddingGuestCreateManyWeddingInput = {
    id?: string
    name: string
    phone?: string | null
    groupName?: string | null
    maxGuests?: number
    slug: string
    isActive?: boolean
    isSent?: boolean
    sentAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeddingRsvpCreateManyWeddingInput = {
    id?: string
    guestId?: string | null
    name: string
    phone?: string | null
    status: $Enums.AttendanceStatus
    guestCount?: number
    message?: string | null
    isHidden?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeddingAnalyticsCreateManyWeddingInput = {
    id?: string
    guestId?: string | null
    event: $Enums.WeddingAnalyticsEvent
    sessionKey?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WeddingGuestUpdateWithoutWeddingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSent?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rsvp?: WeddingRsvpUpdateOneWithoutGuestNestedInput
    analytics?: WeddingAnalyticsUpdateManyWithoutGuestNestedInput
  }

  export type WeddingGuestUncheckedUpdateWithoutWeddingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSent?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rsvp?: WeddingRsvpUncheckedUpdateOneWithoutGuestNestedInput
    analytics?: WeddingAnalyticsUncheckedUpdateManyWithoutGuestNestedInput
  }

  export type WeddingGuestUncheckedUpdateManyWithoutWeddingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    groupName?: NullableStringFieldUpdateOperationsInput | string | null
    maxGuests?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSent?: BoolFieldUpdateOperationsInput | boolean
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeddingRsvpUpdateWithoutWeddingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    guestCount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guest?: WeddingGuestUpdateOneWithoutRsvpNestedInput
  }

  export type WeddingRsvpUncheckedUpdateWithoutWeddingInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    guestCount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeddingRsvpUncheckedUpdateManyWithoutWeddingInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAttendanceStatusFieldUpdateOperationsInput | $Enums.AttendanceStatus
    guestCount?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isHidden?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeddingAnalyticsUpdateWithoutWeddingInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: EnumWeddingAnalyticsEventFieldUpdateOperationsInput | $Enums.WeddingAnalyticsEvent
    sessionKey?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guest?: WeddingGuestUpdateOneWithoutAnalyticsNestedInput
  }

  export type WeddingAnalyticsUncheckedUpdateWithoutWeddingInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    event?: EnumWeddingAnalyticsEventFieldUpdateOperationsInput | $Enums.WeddingAnalyticsEvent
    sessionKey?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeddingAnalyticsUncheckedUpdateManyWithoutWeddingInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: NullableStringFieldUpdateOperationsInput | string | null
    event?: EnumWeddingAnalyticsEventFieldUpdateOperationsInput | $Enums.WeddingAnalyticsEvent
    sessionKey?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeddingAnalyticsCreateManyGuestInput = {
    id?: string
    weddingId: string
    event: $Enums.WeddingAnalyticsEvent
    sessionKey?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WeddingAnalyticsUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: EnumWeddingAnalyticsEventFieldUpdateOperationsInput | $Enums.WeddingAnalyticsEvent
    sessionKey?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wedding?: WeddingUpdateOneRequiredWithoutAnalyticsNestedInput
  }

  export type WeddingAnalyticsUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    weddingId?: StringFieldUpdateOperationsInput | string
    event?: EnumWeddingAnalyticsEventFieldUpdateOperationsInput | $Enums.WeddingAnalyticsEvent
    sessionKey?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeddingAnalyticsUncheckedUpdateManyWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    weddingId?: StringFieldUpdateOperationsInput | string
    event?: EnumWeddingAnalyticsEventFieldUpdateOperationsInput | $Enums.WeddingAnalyticsEvent
    sessionKey?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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