
/**
 * Client
**/

import * as runtime from './runtime/library';
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
 * Model Target
 * 
 */
export type Target = $Result.DefaultSelection<Prisma.$TargetPayload>
/**
 * Model AccessLog
 * 
 */
export type AccessLog = $Result.DefaultSelection<Prisma.$AccessLogPayload>
/**
 * Model ExpectedTarget
 * 
 */
export type ExpectedTarget = $Result.DefaultSelection<Prisma.$ExpectedTargetPayload>

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

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
   * `prisma.target`: Exposes CRUD operations for the **Target** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Targets
    * const targets = await prisma.target.findMany()
    * ```
    */
  get target(): Prisma.TargetDelegate<ExtArgs>;

  /**
   * `prisma.accessLog`: Exposes CRUD operations for the **AccessLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessLogs
    * const accessLogs = await prisma.accessLog.findMany()
    * ```
    */
  get accessLog(): Prisma.AccessLogDelegate<ExtArgs>;

  /**
   * `prisma.expectedTarget`: Exposes CRUD operations for the **ExpectedTarget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpectedTargets
    * const expectedTargets = await prisma.expectedTarget.findMany()
    * ```
    */
  get expectedTarget(): Prisma.ExpectedTargetDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    Target: 'Target',
    AccessLog: 'AccessLog',
    ExpectedTarget: 'ExpectedTarget'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'target' | 'accessLog' | 'expectedTarget'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Target: {
        payload: Prisma.$TargetPayload<ExtArgs>
        fields: Prisma.TargetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TargetFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TargetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TargetFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TargetPayload>
          }
          findFirst: {
            args: Prisma.TargetFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TargetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TargetFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TargetPayload>
          }
          findMany: {
            args: Prisma.TargetFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TargetPayload>[]
          }
          create: {
            args: Prisma.TargetCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TargetPayload>
          }
          createMany: {
            args: Prisma.TargetCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TargetDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TargetPayload>
          }
          update: {
            args: Prisma.TargetUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TargetPayload>
          }
          deleteMany: {
            args: Prisma.TargetDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TargetUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TargetUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TargetPayload>
          }
          aggregate: {
            args: Prisma.TargetAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTarget>
          }
          groupBy: {
            args: Prisma.TargetGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TargetGroupByOutputType>[]
          }
          count: {
            args: Prisma.TargetCountArgs<ExtArgs>,
            result: $Utils.Optional<TargetCountAggregateOutputType> | number
          }
        }
      }
      AccessLog: {
        payload: Prisma.$AccessLogPayload<ExtArgs>
        fields: Prisma.AccessLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessLogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessLogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload>
          }
          findFirst: {
            args: Prisma.AccessLogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessLogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload>
          }
          findMany: {
            args: Prisma.AccessLogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload>[]
          }
          create: {
            args: Prisma.AccessLogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload>
          }
          createMany: {
            args: Prisma.AccessLogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccessLogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload>
          }
          update: {
            args: Prisma.AccessLogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload>
          }
          deleteMany: {
            args: Prisma.AccessLogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccessLogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccessLogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccessLogPayload>
          }
          aggregate: {
            args: Prisma.AccessLogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccessLog>
          }
          groupBy: {
            args: Prisma.AccessLogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccessLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccessLogCountArgs<ExtArgs>,
            result: $Utils.Optional<AccessLogCountAggregateOutputType> | number
          }
        }
      }
      ExpectedTarget: {
        payload: Prisma.$ExpectedTargetPayload<ExtArgs>
        fields: Prisma.ExpectedTargetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpectedTargetFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpectedTargetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpectedTargetFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpectedTargetPayload>
          }
          findFirst: {
            args: Prisma.ExpectedTargetFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpectedTargetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpectedTargetFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpectedTargetPayload>
          }
          findMany: {
            args: Prisma.ExpectedTargetFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpectedTargetPayload>[]
          }
          create: {
            args: Prisma.ExpectedTargetCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpectedTargetPayload>
          }
          createMany: {
            args: Prisma.ExpectedTargetCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExpectedTargetDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpectedTargetPayload>
          }
          update: {
            args: Prisma.ExpectedTargetUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpectedTargetPayload>
          }
          deleteMany: {
            args: Prisma.ExpectedTargetDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExpectedTargetUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExpectedTargetUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExpectedTargetPayload>
          }
          aggregate: {
            args: Prisma.ExpectedTargetAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExpectedTarget>
          }
          groupBy: {
            args: Prisma.ExpectedTargetGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExpectedTargetGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpectedTargetCountArgs<ExtArgs>,
            result: $Utils.Optional<ExpectedTargetCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.DriverAdapter | null
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
   * Count Type TargetCountOutputType
   */

  export type TargetCountOutputType = {
    accessLog: number
  }

  export type TargetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessLog?: boolean | TargetCountOutputTypeCountAccessLogArgs
  }

  // Custom InputTypes

  /**
   * TargetCountOutputType without action
   */
  export type TargetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetCountOutputType
     */
    select?: TargetCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TargetCountOutputType without action
   */
  export type TargetCountOutputTypeCountAccessLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessLogWhereInput
  }



  /**
   * Count Type ExpectedTargetCountOutputType
   */

  export type ExpectedTargetCountOutputType = {
    accessLog: number
  }

  export type ExpectedTargetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessLog?: boolean | ExpectedTargetCountOutputTypeCountAccessLogArgs
  }

  // Custom InputTypes

  /**
   * ExpectedTargetCountOutputType without action
   */
  export type ExpectedTargetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpectedTargetCountOutputType
     */
    select?: ExpectedTargetCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ExpectedTargetCountOutputType without action
   */
  export type ExpectedTargetCountOutputTypeCountAccessLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessLogWhereInput
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
    userId: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    username: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    username?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    username?: true
    password?: true
    createdAt?: true
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
    userId: string
    username: string
    password: string
    createdAt: Date
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
    userId?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      username: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Model Target
   */

  export type AggregateTarget = {
    _count: TargetCountAggregateOutputType | null
    _min: TargetMinAggregateOutputType | null
    _max: TargetMaxAggregateOutputType | null
  }

  export type TargetMinAggregateOutputType = {
    targetId: string | null
    username: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TargetMaxAggregateOutputType = {
    targetId: string | null
    username: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TargetCountAggregateOutputType = {
    targetId: number
    username: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TargetMinAggregateInputType = {
    targetId?: true
    username?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TargetMaxAggregateInputType = {
    targetId?: true
    username?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TargetCountAggregateInputType = {
    targetId?: true
    username?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TargetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Target to aggregate.
     */
    where?: TargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Targets to fetch.
     */
    orderBy?: TargetOrderByWithRelationInput | TargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Targets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Targets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Targets
    **/
    _count?: true | TargetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TargetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TargetMaxAggregateInputType
  }

  export type GetTargetAggregateType<T extends TargetAggregateArgs> = {
        [P in keyof T & keyof AggregateTarget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTarget[P]>
      : GetScalarType<T[P], AggregateTarget[P]>
  }




  export type TargetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TargetWhereInput
    orderBy?: TargetOrderByWithAggregationInput | TargetOrderByWithAggregationInput[]
    by: TargetScalarFieldEnum[] | TargetScalarFieldEnum
    having?: TargetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TargetCountAggregateInputType | true
    _min?: TargetMinAggregateInputType
    _max?: TargetMaxAggregateInputType
  }

  export type TargetGroupByOutputType = {
    targetId: string
    username: string
    email: string
    createdAt: Date
    updatedAt: Date
    _count: TargetCountAggregateOutputType | null
    _min: TargetMinAggregateOutputType | null
    _max: TargetMaxAggregateOutputType | null
  }

  type GetTargetGroupByPayload<T extends TargetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TargetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TargetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TargetGroupByOutputType[P]>
            : GetScalarType<T[P], TargetGroupByOutputType[P]>
        }
      >
    >


  export type TargetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    targetId?: boolean
    username?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accessLog?: boolean | Target$accessLogArgs<ExtArgs>
    _count?: boolean | TargetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["target"]>

  export type TargetSelectScalar = {
    targetId?: boolean
    username?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TargetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessLog?: boolean | Target$accessLogArgs<ExtArgs>
    _count?: boolean | TargetCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TargetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Target"
    objects: {
      accessLog: Prisma.$AccessLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      targetId: string
      username: string
      email: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["target"]>
    composites: {}
  }


  type TargetGetPayload<S extends boolean | null | undefined | TargetDefaultArgs> = $Result.GetResult<Prisma.$TargetPayload, S>

  type TargetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TargetFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TargetCountAggregateInputType | true
    }

  export interface TargetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Target'], meta: { name: 'Target' } }
    /**
     * Find zero or one Target that matches the filter.
     * @param {TargetFindUniqueArgs} args - Arguments to find a Target
     * @example
     * // Get one Target
     * const target = await prisma.target.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TargetFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TargetFindUniqueArgs<ExtArgs>>
    ): Prisma__TargetClient<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Target that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TargetFindUniqueOrThrowArgs} args - Arguments to find a Target
     * @example
     * // Get one Target
     * const target = await prisma.target.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TargetFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TargetFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TargetClient<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Target that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetFindFirstArgs} args - Arguments to find a Target
     * @example
     * // Get one Target
     * const target = await prisma.target.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TargetFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TargetFindFirstArgs<ExtArgs>>
    ): Prisma__TargetClient<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Target that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetFindFirstOrThrowArgs} args - Arguments to find a Target
     * @example
     * // Get one Target
     * const target = await prisma.target.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TargetFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TargetFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TargetClient<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Targets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Targets
     * const targets = await prisma.target.findMany()
     * 
     * // Get first 10 Targets
     * const targets = await prisma.target.findMany({ take: 10 })
     * 
     * // Only select the `targetId`
     * const targetWithTargetIdOnly = await prisma.target.findMany({ select: { targetId: true } })
     * 
    **/
    findMany<T extends TargetFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TargetFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Target.
     * @param {TargetCreateArgs} args - Arguments to create a Target.
     * @example
     * // Create one Target
     * const Target = await prisma.target.create({
     *   data: {
     *     // ... data to create a Target
     *   }
     * })
     * 
    **/
    create<T extends TargetCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TargetCreateArgs<ExtArgs>>
    ): Prisma__TargetClient<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Targets.
     *     @param {TargetCreateManyArgs} args - Arguments to create many Targets.
     *     @example
     *     // Create many Targets
     *     const target = await prisma.target.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TargetCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TargetCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Target.
     * @param {TargetDeleteArgs} args - Arguments to delete one Target.
     * @example
     * // Delete one Target
     * const Target = await prisma.target.delete({
     *   where: {
     *     // ... filter to delete one Target
     *   }
     * })
     * 
    **/
    delete<T extends TargetDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TargetDeleteArgs<ExtArgs>>
    ): Prisma__TargetClient<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Target.
     * @param {TargetUpdateArgs} args - Arguments to update one Target.
     * @example
     * // Update one Target
     * const target = await prisma.target.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TargetUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TargetUpdateArgs<ExtArgs>>
    ): Prisma__TargetClient<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Targets.
     * @param {TargetDeleteManyArgs} args - Arguments to filter Targets to delete.
     * @example
     * // Delete a few Targets
     * const { count } = await prisma.target.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TargetDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TargetDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Targets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Targets
     * const target = await prisma.target.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TargetUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TargetUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Target.
     * @param {TargetUpsertArgs} args - Arguments to update or create a Target.
     * @example
     * // Update or create a Target
     * const target = await prisma.target.upsert({
     *   create: {
     *     // ... data to create a Target
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Target we want to update
     *   }
     * })
    **/
    upsert<T extends TargetUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TargetUpsertArgs<ExtArgs>>
    ): Prisma__TargetClient<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Targets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetCountArgs} args - Arguments to filter Targets to count.
     * @example
     * // Count the number of Targets
     * const count = await prisma.target.count({
     *   where: {
     *     // ... the filter for the Targets we want to count
     *   }
     * })
    **/
    count<T extends TargetCountArgs>(
      args?: Subset<T, TargetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TargetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Target.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TargetAggregateArgs>(args: Subset<T, TargetAggregateArgs>): Prisma.PrismaPromise<GetTargetAggregateType<T>>

    /**
     * Group by Target.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetGroupByArgs} args - Group by arguments.
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
      T extends TargetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TargetGroupByArgs['orderBy'] }
        : { orderBy?: TargetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TargetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTargetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Target model
   */
  readonly fields: TargetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Target.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TargetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    accessLog<T extends Target$accessLogArgs<ExtArgs> = {}>(args?: Subset<T, Target$accessLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Target model
   */ 
  interface TargetFieldRefs {
    readonly targetId: FieldRef<"Target", 'String'>
    readonly username: FieldRef<"Target", 'String'>
    readonly email: FieldRef<"Target", 'String'>
    readonly createdAt: FieldRef<"Target", 'DateTime'>
    readonly updatedAt: FieldRef<"Target", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Target findUnique
   */
  export type TargetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TargetInclude<ExtArgs> | null
    /**
     * Filter, which Target to fetch.
     */
    where: TargetWhereUniqueInput
  }


  /**
   * Target findUniqueOrThrow
   */
  export type TargetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TargetInclude<ExtArgs> | null
    /**
     * Filter, which Target to fetch.
     */
    where: TargetWhereUniqueInput
  }


  /**
   * Target findFirst
   */
  export type TargetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TargetInclude<ExtArgs> | null
    /**
     * Filter, which Target to fetch.
     */
    where?: TargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Targets to fetch.
     */
    orderBy?: TargetOrderByWithRelationInput | TargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Targets.
     */
    cursor?: TargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Targets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Targets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Targets.
     */
    distinct?: TargetScalarFieldEnum | TargetScalarFieldEnum[]
  }


  /**
   * Target findFirstOrThrow
   */
  export type TargetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TargetInclude<ExtArgs> | null
    /**
     * Filter, which Target to fetch.
     */
    where?: TargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Targets to fetch.
     */
    orderBy?: TargetOrderByWithRelationInput | TargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Targets.
     */
    cursor?: TargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Targets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Targets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Targets.
     */
    distinct?: TargetScalarFieldEnum | TargetScalarFieldEnum[]
  }


  /**
   * Target findMany
   */
  export type TargetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TargetInclude<ExtArgs> | null
    /**
     * Filter, which Targets to fetch.
     */
    where?: TargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Targets to fetch.
     */
    orderBy?: TargetOrderByWithRelationInput | TargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Targets.
     */
    cursor?: TargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Targets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Targets.
     */
    skip?: number
    distinct?: TargetScalarFieldEnum | TargetScalarFieldEnum[]
  }


  /**
   * Target create
   */
  export type TargetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TargetInclude<ExtArgs> | null
    /**
     * The data needed to create a Target.
     */
    data: XOR<TargetCreateInput, TargetUncheckedCreateInput>
  }


  /**
   * Target createMany
   */
  export type TargetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Targets.
     */
    data: TargetCreateManyInput | TargetCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Target update
   */
  export type TargetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TargetInclude<ExtArgs> | null
    /**
     * The data needed to update a Target.
     */
    data: XOR<TargetUpdateInput, TargetUncheckedUpdateInput>
    /**
     * Choose, which Target to update.
     */
    where: TargetWhereUniqueInput
  }


  /**
   * Target updateMany
   */
  export type TargetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Targets.
     */
    data: XOR<TargetUpdateManyMutationInput, TargetUncheckedUpdateManyInput>
    /**
     * Filter which Targets to update
     */
    where?: TargetWhereInput
  }


  /**
   * Target upsert
   */
  export type TargetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TargetInclude<ExtArgs> | null
    /**
     * The filter to search for the Target to update in case it exists.
     */
    where: TargetWhereUniqueInput
    /**
     * In case the Target found by the `where` argument doesn't exist, create a new Target with this data.
     */
    create: XOR<TargetCreateInput, TargetUncheckedCreateInput>
    /**
     * In case the Target was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TargetUpdateInput, TargetUncheckedUpdateInput>
  }


  /**
   * Target delete
   */
  export type TargetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TargetInclude<ExtArgs> | null
    /**
     * Filter which Target to delete.
     */
    where: TargetWhereUniqueInput
  }


  /**
   * Target deleteMany
   */
  export type TargetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Targets to delete
     */
    where?: TargetWhereInput
  }


  /**
   * Target.accessLog
   */
  export type Target$accessLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessLogInclude<ExtArgs> | null
    where?: AccessLogWhereInput
    orderBy?: AccessLogOrderByWithRelationInput | AccessLogOrderByWithRelationInput[]
    cursor?: AccessLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessLogScalarFieldEnum | AccessLogScalarFieldEnum[]
  }


  /**
   * Target without action
   */
  export type TargetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TargetInclude<ExtArgs> | null
  }



  /**
   * Model AccessLog
   */

  export type AggregateAccessLog = {
    _count: AccessLogCountAggregateOutputType | null
    _min: AccessLogMinAggregateOutputType | null
    _max: AccessLogMaxAggregateOutputType | null
  }

  export type AccessLogMinAggregateOutputType = {
    logId: string | null
    ip: string | null
    device: string | null
    createdAt: Date | null
    updatedAt: Date | null
    targetId: string | null
    hash: string | null
  }

  export type AccessLogMaxAggregateOutputType = {
    logId: string | null
    ip: string | null
    device: string | null
    createdAt: Date | null
    updatedAt: Date | null
    targetId: string | null
    hash: string | null
  }

  export type AccessLogCountAggregateOutputType = {
    logId: number
    ip: number
    device: number
    createdAt: number
    updatedAt: number
    targetId: number
    hash: number
    _all: number
  }


  export type AccessLogMinAggregateInputType = {
    logId?: true
    ip?: true
    device?: true
    createdAt?: true
    updatedAt?: true
    targetId?: true
    hash?: true
  }

  export type AccessLogMaxAggregateInputType = {
    logId?: true
    ip?: true
    device?: true
    createdAt?: true
    updatedAt?: true
    targetId?: true
    hash?: true
  }

  export type AccessLogCountAggregateInputType = {
    logId?: true
    ip?: true
    device?: true
    createdAt?: true
    updatedAt?: true
    targetId?: true
    hash?: true
    _all?: true
  }

  export type AccessLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessLog to aggregate.
     */
    where?: AccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLogs to fetch.
     */
    orderBy?: AccessLogOrderByWithRelationInput | AccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccessLogs
    **/
    _count?: true | AccessLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessLogMaxAggregateInputType
  }

  export type GetAccessLogAggregateType<T extends AccessLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessLog[P]>
      : GetScalarType<T[P], AggregateAccessLog[P]>
  }




  export type AccessLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessLogWhereInput
    orderBy?: AccessLogOrderByWithAggregationInput | AccessLogOrderByWithAggregationInput[]
    by: AccessLogScalarFieldEnum[] | AccessLogScalarFieldEnum
    having?: AccessLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessLogCountAggregateInputType | true
    _min?: AccessLogMinAggregateInputType
    _max?: AccessLogMaxAggregateInputType
  }

  export type AccessLogGroupByOutputType = {
    logId: string
    ip: string
    device: string
    createdAt: Date
    updatedAt: Date
    targetId: string | null
    hash: string | null
    _count: AccessLogCountAggregateOutputType | null
    _min: AccessLogMinAggregateOutputType | null
    _max: AccessLogMaxAggregateOutputType | null
  }

  type GetAccessLogGroupByPayload<T extends AccessLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessLogGroupByOutputType[P]>
            : GetScalarType<T[P], AccessLogGroupByOutputType[P]>
        }
      >
    >


  export type AccessLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logId?: boolean
    ip?: boolean
    device?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    targetId?: boolean
    hash?: boolean
    target?: boolean | AccessLog$targetArgs<ExtArgs>
    expectedTarget?: boolean | AccessLog$expectedTargetArgs<ExtArgs>
  }, ExtArgs["result"]["accessLog"]>

  export type AccessLogSelectScalar = {
    logId?: boolean
    ip?: boolean
    device?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    targetId?: boolean
    hash?: boolean
  }

  export type AccessLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    target?: boolean | AccessLog$targetArgs<ExtArgs>
    expectedTarget?: boolean | AccessLog$expectedTargetArgs<ExtArgs>
  }


  export type $AccessLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccessLog"
    objects: {
      target: Prisma.$TargetPayload<ExtArgs> | null
      expectedTarget: Prisma.$ExpectedTargetPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      logId: string
      ip: string
      device: string
      createdAt: Date
      updatedAt: Date
      targetId: string | null
      hash: string | null
    }, ExtArgs["result"]["accessLog"]>
    composites: {}
  }


  type AccessLogGetPayload<S extends boolean | null | undefined | AccessLogDefaultArgs> = $Result.GetResult<Prisma.$AccessLogPayload, S>

  type AccessLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccessLogFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AccessLogCountAggregateInputType | true
    }

  export interface AccessLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccessLog'], meta: { name: 'AccessLog' } }
    /**
     * Find zero or one AccessLog that matches the filter.
     * @param {AccessLogFindUniqueArgs} args - Arguments to find a AccessLog
     * @example
     * // Get one AccessLog
     * const accessLog = await prisma.accessLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccessLogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccessLogFindUniqueArgs<ExtArgs>>
    ): Prisma__AccessLogClient<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AccessLog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccessLogFindUniqueOrThrowArgs} args - Arguments to find a AccessLog
     * @example
     * // Get one AccessLog
     * const accessLog = await prisma.accessLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccessLogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessLogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccessLogClient<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AccessLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogFindFirstArgs} args - Arguments to find a AccessLog
     * @example
     * // Get one AccessLog
     * const accessLog = await prisma.accessLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccessLogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessLogFindFirstArgs<ExtArgs>>
    ): Prisma__AccessLogClient<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AccessLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogFindFirstOrThrowArgs} args - Arguments to find a AccessLog
     * @example
     * // Get one AccessLog
     * const accessLog = await prisma.accessLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccessLogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessLogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccessLogClient<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AccessLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessLogs
     * const accessLogs = await prisma.accessLog.findMany()
     * 
     * // Get first 10 AccessLogs
     * const accessLogs = await prisma.accessLog.findMany({ take: 10 })
     * 
     * // Only select the `logId`
     * const accessLogWithLogIdOnly = await prisma.accessLog.findMany({ select: { logId: true } })
     * 
    **/
    findMany<T extends AccessLogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessLogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AccessLog.
     * @param {AccessLogCreateArgs} args - Arguments to create a AccessLog.
     * @example
     * // Create one AccessLog
     * const AccessLog = await prisma.accessLog.create({
     *   data: {
     *     // ... data to create a AccessLog
     *   }
     * })
     * 
    **/
    create<T extends AccessLogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccessLogCreateArgs<ExtArgs>>
    ): Prisma__AccessLogClient<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AccessLogs.
     *     @param {AccessLogCreateManyArgs} args - Arguments to create many AccessLogs.
     *     @example
     *     // Create many AccessLogs
     *     const accessLog = await prisma.accessLog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccessLogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessLogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AccessLog.
     * @param {AccessLogDeleteArgs} args - Arguments to delete one AccessLog.
     * @example
     * // Delete one AccessLog
     * const AccessLog = await prisma.accessLog.delete({
     *   where: {
     *     // ... filter to delete one AccessLog
     *   }
     * })
     * 
    **/
    delete<T extends AccessLogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccessLogDeleteArgs<ExtArgs>>
    ): Prisma__AccessLogClient<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AccessLog.
     * @param {AccessLogUpdateArgs} args - Arguments to update one AccessLog.
     * @example
     * // Update one AccessLog
     * const accessLog = await prisma.accessLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccessLogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccessLogUpdateArgs<ExtArgs>>
    ): Prisma__AccessLogClient<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AccessLogs.
     * @param {AccessLogDeleteManyArgs} args - Arguments to filter AccessLogs to delete.
     * @example
     * // Delete a few AccessLogs
     * const { count } = await prisma.accessLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccessLogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccessLogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessLogs
     * const accessLog = await prisma.accessLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccessLogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccessLogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccessLog.
     * @param {AccessLogUpsertArgs} args - Arguments to update or create a AccessLog.
     * @example
     * // Update or create a AccessLog
     * const accessLog = await prisma.accessLog.upsert({
     *   create: {
     *     // ... data to create a AccessLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessLog we want to update
     *   }
     * })
    **/
    upsert<T extends AccessLogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccessLogUpsertArgs<ExtArgs>>
    ): Prisma__AccessLogClient<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AccessLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogCountArgs} args - Arguments to filter AccessLogs to count.
     * @example
     * // Count the number of AccessLogs
     * const count = await prisma.accessLog.count({
     *   where: {
     *     // ... the filter for the AccessLogs we want to count
     *   }
     * })
    **/
    count<T extends AccessLogCountArgs>(
      args?: Subset<T, AccessLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccessLogAggregateArgs>(args: Subset<T, AccessLogAggregateArgs>): Prisma.PrismaPromise<GetAccessLogAggregateType<T>>

    /**
     * Group by AccessLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessLogGroupByArgs} args - Group by arguments.
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
      T extends AccessLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessLogGroupByArgs['orderBy'] }
        : { orderBy?: AccessLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccessLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccessLog model
   */
  readonly fields: AccessLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccessLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    target<T extends AccessLog$targetArgs<ExtArgs> = {}>(args?: Subset<T, AccessLog$targetArgs<ExtArgs>>): Prisma__TargetClient<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    expectedTarget<T extends AccessLog$expectedTargetArgs<ExtArgs> = {}>(args?: Subset<T, AccessLog$expectedTargetArgs<ExtArgs>>): Prisma__ExpectedTargetClient<$Result.GetResult<Prisma.$ExpectedTargetPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AccessLog model
   */ 
  interface AccessLogFieldRefs {
    readonly logId: FieldRef<"AccessLog", 'String'>
    readonly ip: FieldRef<"AccessLog", 'String'>
    readonly device: FieldRef<"AccessLog", 'String'>
    readonly createdAt: FieldRef<"AccessLog", 'DateTime'>
    readonly updatedAt: FieldRef<"AccessLog", 'DateTime'>
    readonly targetId: FieldRef<"AccessLog", 'String'>
    readonly hash: FieldRef<"AccessLog", 'String'>
  }
    

  // Custom InputTypes

  /**
   * AccessLog findUnique
   */
  export type AccessLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessLogInclude<ExtArgs> | null
    /**
     * Filter, which AccessLog to fetch.
     */
    where: AccessLogWhereUniqueInput
  }


  /**
   * AccessLog findUniqueOrThrow
   */
  export type AccessLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessLogInclude<ExtArgs> | null
    /**
     * Filter, which AccessLog to fetch.
     */
    where: AccessLogWhereUniqueInput
  }


  /**
   * AccessLog findFirst
   */
  export type AccessLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessLogInclude<ExtArgs> | null
    /**
     * Filter, which AccessLog to fetch.
     */
    where?: AccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLogs to fetch.
     */
    orderBy?: AccessLogOrderByWithRelationInput | AccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessLogs.
     */
    cursor?: AccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessLogs.
     */
    distinct?: AccessLogScalarFieldEnum | AccessLogScalarFieldEnum[]
  }


  /**
   * AccessLog findFirstOrThrow
   */
  export type AccessLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessLogInclude<ExtArgs> | null
    /**
     * Filter, which AccessLog to fetch.
     */
    where?: AccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLogs to fetch.
     */
    orderBy?: AccessLogOrderByWithRelationInput | AccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessLogs.
     */
    cursor?: AccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessLogs.
     */
    distinct?: AccessLogScalarFieldEnum | AccessLogScalarFieldEnum[]
  }


  /**
   * AccessLog findMany
   */
  export type AccessLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessLogInclude<ExtArgs> | null
    /**
     * Filter, which AccessLogs to fetch.
     */
    where?: AccessLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessLogs to fetch.
     */
    orderBy?: AccessLogOrderByWithRelationInput | AccessLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccessLogs.
     */
    cursor?: AccessLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessLogs.
     */
    skip?: number
    distinct?: AccessLogScalarFieldEnum | AccessLogScalarFieldEnum[]
  }


  /**
   * AccessLog create
   */
  export type AccessLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AccessLog.
     */
    data: XOR<AccessLogCreateInput, AccessLogUncheckedCreateInput>
  }


  /**
   * AccessLog createMany
   */
  export type AccessLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessLogs.
     */
    data: AccessLogCreateManyInput | AccessLogCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AccessLog update
   */
  export type AccessLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AccessLog.
     */
    data: XOR<AccessLogUpdateInput, AccessLogUncheckedUpdateInput>
    /**
     * Choose, which AccessLog to update.
     */
    where: AccessLogWhereUniqueInput
  }


  /**
   * AccessLog updateMany
   */
  export type AccessLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessLogs.
     */
    data: XOR<AccessLogUpdateManyMutationInput, AccessLogUncheckedUpdateManyInput>
    /**
     * Filter which AccessLogs to update
     */
    where?: AccessLogWhereInput
  }


  /**
   * AccessLog upsert
   */
  export type AccessLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AccessLog to update in case it exists.
     */
    where: AccessLogWhereUniqueInput
    /**
     * In case the AccessLog found by the `where` argument doesn't exist, create a new AccessLog with this data.
     */
    create: XOR<AccessLogCreateInput, AccessLogUncheckedCreateInput>
    /**
     * In case the AccessLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessLogUpdateInput, AccessLogUncheckedUpdateInput>
  }


  /**
   * AccessLog delete
   */
  export type AccessLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessLogInclude<ExtArgs> | null
    /**
     * Filter which AccessLog to delete.
     */
    where: AccessLogWhereUniqueInput
  }


  /**
   * AccessLog deleteMany
   */
  export type AccessLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessLogs to delete
     */
    where?: AccessLogWhereInput
  }


  /**
   * AccessLog.target
   */
  export type AccessLog$targetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TargetInclude<ExtArgs> | null
    where?: TargetWhereInput
  }


  /**
   * AccessLog.expectedTarget
   */
  export type AccessLog$expectedTargetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpectedTarget
     */
    select?: ExpectedTargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpectedTargetInclude<ExtArgs> | null
    where?: ExpectedTargetWhereInput
  }


  /**
   * AccessLog without action
   */
  export type AccessLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessLogInclude<ExtArgs> | null
  }



  /**
   * Model ExpectedTarget
   */

  export type AggregateExpectedTarget = {
    _count: ExpectedTargetCountAggregateOutputType | null
    _min: ExpectedTargetMinAggregateOutputType | null
    _max: ExpectedTargetMaxAggregateOutputType | null
  }

  export type ExpectedTargetMinAggregateOutputType = {
    hash: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
  }

  export type ExpectedTargetMaxAggregateOutputType = {
    hash: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
  }

  export type ExpectedTargetCountAggregateOutputType = {
    hash: number
    email: number
    name: number
    createdAt: number
    _all: number
  }


  export type ExpectedTargetMinAggregateInputType = {
    hash?: true
    email?: true
    name?: true
    createdAt?: true
  }

  export type ExpectedTargetMaxAggregateInputType = {
    hash?: true
    email?: true
    name?: true
    createdAt?: true
  }

  export type ExpectedTargetCountAggregateInputType = {
    hash?: true
    email?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type ExpectedTargetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpectedTarget to aggregate.
     */
    where?: ExpectedTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpectedTargets to fetch.
     */
    orderBy?: ExpectedTargetOrderByWithRelationInput | ExpectedTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpectedTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpectedTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpectedTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpectedTargets
    **/
    _count?: true | ExpectedTargetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpectedTargetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpectedTargetMaxAggregateInputType
  }

  export type GetExpectedTargetAggregateType<T extends ExpectedTargetAggregateArgs> = {
        [P in keyof T & keyof AggregateExpectedTarget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpectedTarget[P]>
      : GetScalarType<T[P], AggregateExpectedTarget[P]>
  }




  export type ExpectedTargetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpectedTargetWhereInput
    orderBy?: ExpectedTargetOrderByWithAggregationInput | ExpectedTargetOrderByWithAggregationInput[]
    by: ExpectedTargetScalarFieldEnum[] | ExpectedTargetScalarFieldEnum
    having?: ExpectedTargetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpectedTargetCountAggregateInputType | true
    _min?: ExpectedTargetMinAggregateInputType
    _max?: ExpectedTargetMaxAggregateInputType
  }

  export type ExpectedTargetGroupByOutputType = {
    hash: string
    email: string
    name: string
    createdAt: Date
    _count: ExpectedTargetCountAggregateOutputType | null
    _min: ExpectedTargetMinAggregateOutputType | null
    _max: ExpectedTargetMaxAggregateOutputType | null
  }

  type GetExpectedTargetGroupByPayload<T extends ExpectedTargetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpectedTargetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpectedTargetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpectedTargetGroupByOutputType[P]>
            : GetScalarType<T[P], ExpectedTargetGroupByOutputType[P]>
        }
      >
    >


  export type ExpectedTargetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hash?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    accessLog?: boolean | ExpectedTarget$accessLogArgs<ExtArgs>
    _count?: boolean | ExpectedTargetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expectedTarget"]>

  export type ExpectedTargetSelectScalar = {
    hash?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type ExpectedTargetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accessLog?: boolean | ExpectedTarget$accessLogArgs<ExtArgs>
    _count?: boolean | ExpectedTargetCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ExpectedTargetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpectedTarget"
    objects: {
      accessLog: Prisma.$AccessLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      hash: string
      email: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["expectedTarget"]>
    composites: {}
  }


  type ExpectedTargetGetPayload<S extends boolean | null | undefined | ExpectedTargetDefaultArgs> = $Result.GetResult<Prisma.$ExpectedTargetPayload, S>

  type ExpectedTargetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExpectedTargetFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ExpectedTargetCountAggregateInputType | true
    }

  export interface ExpectedTargetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpectedTarget'], meta: { name: 'ExpectedTarget' } }
    /**
     * Find zero or one ExpectedTarget that matches the filter.
     * @param {ExpectedTargetFindUniqueArgs} args - Arguments to find a ExpectedTarget
     * @example
     * // Get one ExpectedTarget
     * const expectedTarget = await prisma.expectedTarget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExpectedTargetFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExpectedTargetFindUniqueArgs<ExtArgs>>
    ): Prisma__ExpectedTargetClient<$Result.GetResult<Prisma.$ExpectedTargetPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ExpectedTarget that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExpectedTargetFindUniqueOrThrowArgs} args - Arguments to find a ExpectedTarget
     * @example
     * // Get one ExpectedTarget
     * const expectedTarget = await prisma.expectedTarget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExpectedTargetFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpectedTargetFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExpectedTargetClient<$Result.GetResult<Prisma.$ExpectedTargetPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ExpectedTarget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpectedTargetFindFirstArgs} args - Arguments to find a ExpectedTarget
     * @example
     * // Get one ExpectedTarget
     * const expectedTarget = await prisma.expectedTarget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExpectedTargetFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpectedTargetFindFirstArgs<ExtArgs>>
    ): Prisma__ExpectedTargetClient<$Result.GetResult<Prisma.$ExpectedTargetPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ExpectedTarget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpectedTargetFindFirstOrThrowArgs} args - Arguments to find a ExpectedTarget
     * @example
     * // Get one ExpectedTarget
     * const expectedTarget = await prisma.expectedTarget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExpectedTargetFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpectedTargetFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExpectedTargetClient<$Result.GetResult<Prisma.$ExpectedTargetPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ExpectedTargets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpectedTargetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpectedTargets
     * const expectedTargets = await prisma.expectedTarget.findMany()
     * 
     * // Get first 10 ExpectedTargets
     * const expectedTargets = await prisma.expectedTarget.findMany({ take: 10 })
     * 
     * // Only select the `hash`
     * const expectedTargetWithHashOnly = await prisma.expectedTarget.findMany({ select: { hash: true } })
     * 
    **/
    findMany<T extends ExpectedTargetFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpectedTargetFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpectedTargetPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ExpectedTarget.
     * @param {ExpectedTargetCreateArgs} args - Arguments to create a ExpectedTarget.
     * @example
     * // Create one ExpectedTarget
     * const ExpectedTarget = await prisma.expectedTarget.create({
     *   data: {
     *     // ... data to create a ExpectedTarget
     *   }
     * })
     * 
    **/
    create<T extends ExpectedTargetCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExpectedTargetCreateArgs<ExtArgs>>
    ): Prisma__ExpectedTargetClient<$Result.GetResult<Prisma.$ExpectedTargetPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ExpectedTargets.
     *     @param {ExpectedTargetCreateManyArgs} args - Arguments to create many ExpectedTargets.
     *     @example
     *     // Create many ExpectedTargets
     *     const expectedTarget = await prisma.expectedTarget.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExpectedTargetCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpectedTargetCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExpectedTarget.
     * @param {ExpectedTargetDeleteArgs} args - Arguments to delete one ExpectedTarget.
     * @example
     * // Delete one ExpectedTarget
     * const ExpectedTarget = await prisma.expectedTarget.delete({
     *   where: {
     *     // ... filter to delete one ExpectedTarget
     *   }
     * })
     * 
    **/
    delete<T extends ExpectedTargetDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExpectedTargetDeleteArgs<ExtArgs>>
    ): Prisma__ExpectedTargetClient<$Result.GetResult<Prisma.$ExpectedTargetPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ExpectedTarget.
     * @param {ExpectedTargetUpdateArgs} args - Arguments to update one ExpectedTarget.
     * @example
     * // Update one ExpectedTarget
     * const expectedTarget = await prisma.expectedTarget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExpectedTargetUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExpectedTargetUpdateArgs<ExtArgs>>
    ): Prisma__ExpectedTargetClient<$Result.GetResult<Prisma.$ExpectedTargetPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ExpectedTargets.
     * @param {ExpectedTargetDeleteManyArgs} args - Arguments to filter ExpectedTargets to delete.
     * @example
     * // Delete a few ExpectedTargets
     * const { count } = await prisma.expectedTarget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExpectedTargetDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExpectedTargetDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpectedTargets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpectedTargetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpectedTargets
     * const expectedTarget = await prisma.expectedTarget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExpectedTargetUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExpectedTargetUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExpectedTarget.
     * @param {ExpectedTargetUpsertArgs} args - Arguments to update or create a ExpectedTarget.
     * @example
     * // Update or create a ExpectedTarget
     * const expectedTarget = await prisma.expectedTarget.upsert({
     *   create: {
     *     // ... data to create a ExpectedTarget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpectedTarget we want to update
     *   }
     * })
    **/
    upsert<T extends ExpectedTargetUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExpectedTargetUpsertArgs<ExtArgs>>
    ): Prisma__ExpectedTargetClient<$Result.GetResult<Prisma.$ExpectedTargetPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ExpectedTargets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpectedTargetCountArgs} args - Arguments to filter ExpectedTargets to count.
     * @example
     * // Count the number of ExpectedTargets
     * const count = await prisma.expectedTarget.count({
     *   where: {
     *     // ... the filter for the ExpectedTargets we want to count
     *   }
     * })
    **/
    count<T extends ExpectedTargetCountArgs>(
      args?: Subset<T, ExpectedTargetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpectedTargetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpectedTarget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpectedTargetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpectedTargetAggregateArgs>(args: Subset<T, ExpectedTargetAggregateArgs>): Prisma.PrismaPromise<GetExpectedTargetAggregateType<T>>

    /**
     * Group by ExpectedTarget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpectedTargetGroupByArgs} args - Group by arguments.
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
      T extends ExpectedTargetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpectedTargetGroupByArgs['orderBy'] }
        : { orderBy?: ExpectedTargetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExpectedTargetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpectedTargetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpectedTarget model
   */
  readonly fields: ExpectedTargetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpectedTarget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpectedTargetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    accessLog<T extends ExpectedTarget$accessLogArgs<ExtArgs> = {}>(args?: Subset<T, ExpectedTarget$accessLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessLogPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ExpectedTarget model
   */ 
  interface ExpectedTargetFieldRefs {
    readonly hash: FieldRef<"ExpectedTarget", 'String'>
    readonly email: FieldRef<"ExpectedTarget", 'String'>
    readonly name: FieldRef<"ExpectedTarget", 'String'>
    readonly createdAt: FieldRef<"ExpectedTarget", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ExpectedTarget findUnique
   */
  export type ExpectedTargetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpectedTarget
     */
    select?: ExpectedTargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpectedTargetInclude<ExtArgs> | null
    /**
     * Filter, which ExpectedTarget to fetch.
     */
    where: ExpectedTargetWhereUniqueInput
  }


  /**
   * ExpectedTarget findUniqueOrThrow
   */
  export type ExpectedTargetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpectedTarget
     */
    select?: ExpectedTargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpectedTargetInclude<ExtArgs> | null
    /**
     * Filter, which ExpectedTarget to fetch.
     */
    where: ExpectedTargetWhereUniqueInput
  }


  /**
   * ExpectedTarget findFirst
   */
  export type ExpectedTargetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpectedTarget
     */
    select?: ExpectedTargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpectedTargetInclude<ExtArgs> | null
    /**
     * Filter, which ExpectedTarget to fetch.
     */
    where?: ExpectedTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpectedTargets to fetch.
     */
    orderBy?: ExpectedTargetOrderByWithRelationInput | ExpectedTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpectedTargets.
     */
    cursor?: ExpectedTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpectedTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpectedTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpectedTargets.
     */
    distinct?: ExpectedTargetScalarFieldEnum | ExpectedTargetScalarFieldEnum[]
  }


  /**
   * ExpectedTarget findFirstOrThrow
   */
  export type ExpectedTargetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpectedTarget
     */
    select?: ExpectedTargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpectedTargetInclude<ExtArgs> | null
    /**
     * Filter, which ExpectedTarget to fetch.
     */
    where?: ExpectedTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpectedTargets to fetch.
     */
    orderBy?: ExpectedTargetOrderByWithRelationInput | ExpectedTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpectedTargets.
     */
    cursor?: ExpectedTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpectedTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpectedTargets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpectedTargets.
     */
    distinct?: ExpectedTargetScalarFieldEnum | ExpectedTargetScalarFieldEnum[]
  }


  /**
   * ExpectedTarget findMany
   */
  export type ExpectedTargetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpectedTarget
     */
    select?: ExpectedTargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpectedTargetInclude<ExtArgs> | null
    /**
     * Filter, which ExpectedTargets to fetch.
     */
    where?: ExpectedTargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpectedTargets to fetch.
     */
    orderBy?: ExpectedTargetOrderByWithRelationInput | ExpectedTargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpectedTargets.
     */
    cursor?: ExpectedTargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpectedTargets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpectedTargets.
     */
    skip?: number
    distinct?: ExpectedTargetScalarFieldEnum | ExpectedTargetScalarFieldEnum[]
  }


  /**
   * ExpectedTarget create
   */
  export type ExpectedTargetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpectedTarget
     */
    select?: ExpectedTargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpectedTargetInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpectedTarget.
     */
    data: XOR<ExpectedTargetCreateInput, ExpectedTargetUncheckedCreateInput>
  }


  /**
   * ExpectedTarget createMany
   */
  export type ExpectedTargetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpectedTargets.
     */
    data: ExpectedTargetCreateManyInput | ExpectedTargetCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ExpectedTarget update
   */
  export type ExpectedTargetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpectedTarget
     */
    select?: ExpectedTargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpectedTargetInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpectedTarget.
     */
    data: XOR<ExpectedTargetUpdateInput, ExpectedTargetUncheckedUpdateInput>
    /**
     * Choose, which ExpectedTarget to update.
     */
    where: ExpectedTargetWhereUniqueInput
  }


  /**
   * ExpectedTarget updateMany
   */
  export type ExpectedTargetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpectedTargets.
     */
    data: XOR<ExpectedTargetUpdateManyMutationInput, ExpectedTargetUncheckedUpdateManyInput>
    /**
     * Filter which ExpectedTargets to update
     */
    where?: ExpectedTargetWhereInput
  }


  /**
   * ExpectedTarget upsert
   */
  export type ExpectedTargetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpectedTarget
     */
    select?: ExpectedTargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpectedTargetInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpectedTarget to update in case it exists.
     */
    where: ExpectedTargetWhereUniqueInput
    /**
     * In case the ExpectedTarget found by the `where` argument doesn't exist, create a new ExpectedTarget with this data.
     */
    create: XOR<ExpectedTargetCreateInput, ExpectedTargetUncheckedCreateInput>
    /**
     * In case the ExpectedTarget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpectedTargetUpdateInput, ExpectedTargetUncheckedUpdateInput>
  }


  /**
   * ExpectedTarget delete
   */
  export type ExpectedTargetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpectedTarget
     */
    select?: ExpectedTargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpectedTargetInclude<ExtArgs> | null
    /**
     * Filter which ExpectedTarget to delete.
     */
    where: ExpectedTargetWhereUniqueInput
  }


  /**
   * ExpectedTarget deleteMany
   */
  export type ExpectedTargetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpectedTargets to delete
     */
    where?: ExpectedTargetWhereInput
  }


  /**
   * ExpectedTarget.accessLog
   */
  export type ExpectedTarget$accessLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessLog
     */
    select?: AccessLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccessLogInclude<ExtArgs> | null
    where?: AccessLogWhereInput
    orderBy?: AccessLogOrderByWithRelationInput | AccessLogOrderByWithRelationInput[]
    cursor?: AccessLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccessLogScalarFieldEnum | AccessLogScalarFieldEnum[]
  }


  /**
   * ExpectedTarget without action
   */
  export type ExpectedTargetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpectedTarget
     */
    select?: ExpectedTargetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExpectedTargetInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    userId: 'userId',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TargetScalarFieldEnum: {
    targetId: 'targetId',
    username: 'username',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TargetScalarFieldEnum = (typeof TargetScalarFieldEnum)[keyof typeof TargetScalarFieldEnum]


  export const AccessLogScalarFieldEnum: {
    logId: 'logId',
    ip: 'ip',
    device: 'device',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    targetId: 'targetId',
    hash: 'hash'
  };

  export type AccessLogScalarFieldEnum = (typeof AccessLogScalarFieldEnum)[keyof typeof AccessLogScalarFieldEnum]


  export const ExpectedTargetScalarFieldEnum: {
    hash: 'hash',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type ExpectedTargetScalarFieldEnum = (typeof ExpectedTargetScalarFieldEnum)[keyof typeof ExpectedTargetScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "userId">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TargetWhereInput = {
    AND?: TargetWhereInput | TargetWhereInput[]
    OR?: TargetWhereInput[]
    NOT?: TargetWhereInput | TargetWhereInput[]
    targetId?: StringFilter<"Target"> | string
    username?: StringFilter<"Target"> | string
    email?: StringFilter<"Target"> | string
    createdAt?: DateTimeFilter<"Target"> | Date | string
    updatedAt?: DateTimeFilter<"Target"> | Date | string
    accessLog?: AccessLogListRelationFilter
  }

  export type TargetOrderByWithRelationInput = {
    targetId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accessLog?: AccessLogOrderByRelationAggregateInput
  }

  export type TargetWhereUniqueInput = Prisma.AtLeast<{
    targetId?: string
    AND?: TargetWhereInput | TargetWhereInput[]
    OR?: TargetWhereInput[]
    NOT?: TargetWhereInput | TargetWhereInput[]
    username?: StringFilter<"Target"> | string
    email?: StringFilter<"Target"> | string
    createdAt?: DateTimeFilter<"Target"> | Date | string
    updatedAt?: DateTimeFilter<"Target"> | Date | string
    accessLog?: AccessLogListRelationFilter
  }, "targetId">

  export type TargetOrderByWithAggregationInput = {
    targetId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TargetCountOrderByAggregateInput
    _max?: TargetMaxOrderByAggregateInput
    _min?: TargetMinOrderByAggregateInput
  }

  export type TargetScalarWhereWithAggregatesInput = {
    AND?: TargetScalarWhereWithAggregatesInput | TargetScalarWhereWithAggregatesInput[]
    OR?: TargetScalarWhereWithAggregatesInput[]
    NOT?: TargetScalarWhereWithAggregatesInput | TargetScalarWhereWithAggregatesInput[]
    targetId?: StringWithAggregatesFilter<"Target"> | string
    username?: StringWithAggregatesFilter<"Target"> | string
    email?: StringWithAggregatesFilter<"Target"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Target"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Target"> | Date | string
  }

  export type AccessLogWhereInput = {
    AND?: AccessLogWhereInput | AccessLogWhereInput[]
    OR?: AccessLogWhereInput[]
    NOT?: AccessLogWhereInput | AccessLogWhereInput[]
    logId?: StringFilter<"AccessLog"> | string
    ip?: StringFilter<"AccessLog"> | string
    device?: StringFilter<"AccessLog"> | string
    createdAt?: DateTimeFilter<"AccessLog"> | Date | string
    updatedAt?: DateTimeFilter<"AccessLog"> | Date | string
    targetId?: StringNullableFilter<"AccessLog"> | string | null
    hash?: StringNullableFilter<"AccessLog"> | string | null
    target?: XOR<TargetNullableRelationFilter, TargetWhereInput> | null
    expectedTarget?: XOR<ExpectedTargetNullableRelationFilter, ExpectedTargetWhereInput> | null
  }

  export type AccessLogOrderByWithRelationInput = {
    logId?: SortOrder
    ip?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    targetId?: SortOrderInput | SortOrder
    hash?: SortOrderInput | SortOrder
    target?: TargetOrderByWithRelationInput
    expectedTarget?: ExpectedTargetOrderByWithRelationInput
  }

  export type AccessLogWhereUniqueInput = Prisma.AtLeast<{
    logId?: string
    AND?: AccessLogWhereInput | AccessLogWhereInput[]
    OR?: AccessLogWhereInput[]
    NOT?: AccessLogWhereInput | AccessLogWhereInput[]
    ip?: StringFilter<"AccessLog"> | string
    device?: StringFilter<"AccessLog"> | string
    createdAt?: DateTimeFilter<"AccessLog"> | Date | string
    updatedAt?: DateTimeFilter<"AccessLog"> | Date | string
    targetId?: StringNullableFilter<"AccessLog"> | string | null
    hash?: StringNullableFilter<"AccessLog"> | string | null
    target?: XOR<TargetNullableRelationFilter, TargetWhereInput> | null
    expectedTarget?: XOR<ExpectedTargetNullableRelationFilter, ExpectedTargetWhereInput> | null
  }, "logId">

  export type AccessLogOrderByWithAggregationInput = {
    logId?: SortOrder
    ip?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    targetId?: SortOrderInput | SortOrder
    hash?: SortOrderInput | SortOrder
    _count?: AccessLogCountOrderByAggregateInput
    _max?: AccessLogMaxOrderByAggregateInput
    _min?: AccessLogMinOrderByAggregateInput
  }

  export type AccessLogScalarWhereWithAggregatesInput = {
    AND?: AccessLogScalarWhereWithAggregatesInput | AccessLogScalarWhereWithAggregatesInput[]
    OR?: AccessLogScalarWhereWithAggregatesInput[]
    NOT?: AccessLogScalarWhereWithAggregatesInput | AccessLogScalarWhereWithAggregatesInput[]
    logId?: StringWithAggregatesFilter<"AccessLog"> | string
    ip?: StringWithAggregatesFilter<"AccessLog"> | string
    device?: StringWithAggregatesFilter<"AccessLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AccessLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccessLog"> | Date | string
    targetId?: StringNullableWithAggregatesFilter<"AccessLog"> | string | null
    hash?: StringNullableWithAggregatesFilter<"AccessLog"> | string | null
  }

  export type ExpectedTargetWhereInput = {
    AND?: ExpectedTargetWhereInput | ExpectedTargetWhereInput[]
    OR?: ExpectedTargetWhereInput[]
    NOT?: ExpectedTargetWhereInput | ExpectedTargetWhereInput[]
    hash?: StringFilter<"ExpectedTarget"> | string
    email?: StringFilter<"ExpectedTarget"> | string
    name?: StringFilter<"ExpectedTarget"> | string
    createdAt?: DateTimeFilter<"ExpectedTarget"> | Date | string
    accessLog?: AccessLogListRelationFilter
  }

  export type ExpectedTargetOrderByWithRelationInput = {
    hash?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    accessLog?: AccessLogOrderByRelationAggregateInput
  }

  export type ExpectedTargetWhereUniqueInput = Prisma.AtLeast<{
    hash?: string
    AND?: ExpectedTargetWhereInput | ExpectedTargetWhereInput[]
    OR?: ExpectedTargetWhereInput[]
    NOT?: ExpectedTargetWhereInput | ExpectedTargetWhereInput[]
    email?: StringFilter<"ExpectedTarget"> | string
    name?: StringFilter<"ExpectedTarget"> | string
    createdAt?: DateTimeFilter<"ExpectedTarget"> | Date | string
    accessLog?: AccessLogListRelationFilter
  }, "hash">

  export type ExpectedTargetOrderByWithAggregationInput = {
    hash?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: ExpectedTargetCountOrderByAggregateInput
    _max?: ExpectedTargetMaxOrderByAggregateInput
    _min?: ExpectedTargetMinOrderByAggregateInput
  }

  export type ExpectedTargetScalarWhereWithAggregatesInput = {
    AND?: ExpectedTargetScalarWhereWithAggregatesInput | ExpectedTargetScalarWhereWithAggregatesInput[]
    OR?: ExpectedTargetScalarWhereWithAggregatesInput[]
    NOT?: ExpectedTargetScalarWhereWithAggregatesInput | ExpectedTargetScalarWhereWithAggregatesInput[]
    hash?: StringWithAggregatesFilter<"ExpectedTarget"> | string
    email?: StringWithAggregatesFilter<"ExpectedTarget"> | string
    name?: StringWithAggregatesFilter<"ExpectedTarget"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ExpectedTarget"> | Date | string
  }

  export type UserCreateInput = {
    userId?: string
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    userId?: string
    username: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TargetCreateInput = {
    targetId?: string
    username: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accessLog?: AccessLogCreateNestedManyWithoutTargetInput
  }

  export type TargetUncheckedCreateInput = {
    targetId?: string
    username: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accessLog?: AccessLogUncheckedCreateNestedManyWithoutTargetInput
  }

  export type TargetUpdateInput = {
    targetId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessLog?: AccessLogUpdateManyWithoutTargetNestedInput
  }

  export type TargetUncheckedUpdateInput = {
    targetId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessLog?: AccessLogUncheckedUpdateManyWithoutTargetNestedInput
  }

  export type TargetCreateManyInput = {
    targetId?: string
    username: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TargetUpdateManyMutationInput = {
    targetId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TargetUncheckedUpdateManyInput = {
    targetId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessLogCreateInput = {
    logId?: string
    ip: string
    device: string
    createdAt?: Date | string
    updatedAt?: Date | string
    target?: TargetCreateNestedOneWithoutAccessLogInput
    expectedTarget?: ExpectedTargetCreateNestedOneWithoutAccessLogInput
  }

  export type AccessLogUncheckedCreateInput = {
    logId?: string
    ip: string
    device: string
    createdAt?: Date | string
    updatedAt?: Date | string
    targetId?: string | null
    hash?: string | null
  }

  export type AccessLogUpdateInput = {
    logId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    target?: TargetUpdateOneWithoutAccessLogNestedInput
    expectedTarget?: ExpectedTargetUpdateOneWithoutAccessLogNestedInput
  }

  export type AccessLogUncheckedUpdateInput = {
    logId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccessLogCreateManyInput = {
    logId?: string
    ip: string
    device: string
    createdAt?: Date | string
    updatedAt?: Date | string
    targetId?: string | null
    hash?: string | null
  }

  export type AccessLogUpdateManyMutationInput = {
    logId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessLogUncheckedUpdateManyInput = {
    logId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpectedTargetCreateInput = {
    hash: string
    email: string
    name: string
    createdAt?: Date | string
    accessLog?: AccessLogCreateNestedManyWithoutExpectedTargetInput
  }

  export type ExpectedTargetUncheckedCreateInput = {
    hash: string
    email: string
    name: string
    createdAt?: Date | string
    accessLog?: AccessLogUncheckedCreateNestedManyWithoutExpectedTargetInput
  }

  export type ExpectedTargetUpdateInput = {
    hash?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessLog?: AccessLogUpdateManyWithoutExpectedTargetNestedInput
  }

  export type ExpectedTargetUncheckedUpdateInput = {
    hash?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accessLog?: AccessLogUncheckedUpdateManyWithoutExpectedTargetNestedInput
  }

  export type ExpectedTargetCreateManyInput = {
    hash: string
    email: string
    name: string
    createdAt?: Date | string
  }

  export type ExpectedTargetUpdateManyMutationInput = {
    hash?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpectedTargetUncheckedUpdateManyInput = {
    hash?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
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

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
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

  export type AccessLogListRelationFilter = {
    every?: AccessLogWhereInput
    some?: AccessLogWhereInput
    none?: AccessLogWhereInput
  }

  export type AccessLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TargetCountOrderByAggregateInput = {
    targetId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TargetMaxOrderByAggregateInput = {
    targetId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TargetMinOrderByAggregateInput = {
    targetId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type TargetNullableRelationFilter = {
    is?: TargetWhereInput | null
    isNot?: TargetWhereInput | null
  }

  export type ExpectedTargetNullableRelationFilter = {
    is?: ExpectedTargetWhereInput | null
    isNot?: ExpectedTargetWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccessLogCountOrderByAggregateInput = {
    logId?: SortOrder
    ip?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    targetId?: SortOrder
    hash?: SortOrder
  }

  export type AccessLogMaxOrderByAggregateInput = {
    logId?: SortOrder
    ip?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    targetId?: SortOrder
    hash?: SortOrder
  }

  export type AccessLogMinOrderByAggregateInput = {
    logId?: SortOrder
    ip?: SortOrder
    device?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    targetId?: SortOrder
    hash?: SortOrder
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

  export type ExpectedTargetCountOrderByAggregateInput = {
    hash?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpectedTargetMaxOrderByAggregateInput = {
    hash?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpectedTargetMinOrderByAggregateInput = {
    hash?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccessLogCreateNestedManyWithoutTargetInput = {
    create?: XOR<AccessLogCreateWithoutTargetInput, AccessLogUncheckedCreateWithoutTargetInput> | AccessLogCreateWithoutTargetInput[] | AccessLogUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: AccessLogCreateOrConnectWithoutTargetInput | AccessLogCreateOrConnectWithoutTargetInput[]
    createMany?: AccessLogCreateManyTargetInputEnvelope
    connect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
  }

  export type AccessLogUncheckedCreateNestedManyWithoutTargetInput = {
    create?: XOR<AccessLogCreateWithoutTargetInput, AccessLogUncheckedCreateWithoutTargetInput> | AccessLogCreateWithoutTargetInput[] | AccessLogUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: AccessLogCreateOrConnectWithoutTargetInput | AccessLogCreateOrConnectWithoutTargetInput[]
    createMany?: AccessLogCreateManyTargetInputEnvelope
    connect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
  }

  export type AccessLogUpdateManyWithoutTargetNestedInput = {
    create?: XOR<AccessLogCreateWithoutTargetInput, AccessLogUncheckedCreateWithoutTargetInput> | AccessLogCreateWithoutTargetInput[] | AccessLogUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: AccessLogCreateOrConnectWithoutTargetInput | AccessLogCreateOrConnectWithoutTargetInput[]
    upsert?: AccessLogUpsertWithWhereUniqueWithoutTargetInput | AccessLogUpsertWithWhereUniqueWithoutTargetInput[]
    createMany?: AccessLogCreateManyTargetInputEnvelope
    set?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    disconnect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    delete?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    connect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    update?: AccessLogUpdateWithWhereUniqueWithoutTargetInput | AccessLogUpdateWithWhereUniqueWithoutTargetInput[]
    updateMany?: AccessLogUpdateManyWithWhereWithoutTargetInput | AccessLogUpdateManyWithWhereWithoutTargetInput[]
    deleteMany?: AccessLogScalarWhereInput | AccessLogScalarWhereInput[]
  }

  export type AccessLogUncheckedUpdateManyWithoutTargetNestedInput = {
    create?: XOR<AccessLogCreateWithoutTargetInput, AccessLogUncheckedCreateWithoutTargetInput> | AccessLogCreateWithoutTargetInput[] | AccessLogUncheckedCreateWithoutTargetInput[]
    connectOrCreate?: AccessLogCreateOrConnectWithoutTargetInput | AccessLogCreateOrConnectWithoutTargetInput[]
    upsert?: AccessLogUpsertWithWhereUniqueWithoutTargetInput | AccessLogUpsertWithWhereUniqueWithoutTargetInput[]
    createMany?: AccessLogCreateManyTargetInputEnvelope
    set?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    disconnect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    delete?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    connect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    update?: AccessLogUpdateWithWhereUniqueWithoutTargetInput | AccessLogUpdateWithWhereUniqueWithoutTargetInput[]
    updateMany?: AccessLogUpdateManyWithWhereWithoutTargetInput | AccessLogUpdateManyWithWhereWithoutTargetInput[]
    deleteMany?: AccessLogScalarWhereInput | AccessLogScalarWhereInput[]
  }

  export type TargetCreateNestedOneWithoutAccessLogInput = {
    create?: XOR<TargetCreateWithoutAccessLogInput, TargetUncheckedCreateWithoutAccessLogInput>
    connectOrCreate?: TargetCreateOrConnectWithoutAccessLogInput
    connect?: TargetWhereUniqueInput
  }

  export type ExpectedTargetCreateNestedOneWithoutAccessLogInput = {
    create?: XOR<ExpectedTargetCreateWithoutAccessLogInput, ExpectedTargetUncheckedCreateWithoutAccessLogInput>
    connectOrCreate?: ExpectedTargetCreateOrConnectWithoutAccessLogInput
    connect?: ExpectedTargetWhereUniqueInput
  }

  export type TargetUpdateOneWithoutAccessLogNestedInput = {
    create?: XOR<TargetCreateWithoutAccessLogInput, TargetUncheckedCreateWithoutAccessLogInput>
    connectOrCreate?: TargetCreateOrConnectWithoutAccessLogInput
    upsert?: TargetUpsertWithoutAccessLogInput
    disconnect?: TargetWhereInput | boolean
    delete?: TargetWhereInput | boolean
    connect?: TargetWhereUniqueInput
    update?: XOR<XOR<TargetUpdateToOneWithWhereWithoutAccessLogInput, TargetUpdateWithoutAccessLogInput>, TargetUncheckedUpdateWithoutAccessLogInput>
  }

  export type ExpectedTargetUpdateOneWithoutAccessLogNestedInput = {
    create?: XOR<ExpectedTargetCreateWithoutAccessLogInput, ExpectedTargetUncheckedCreateWithoutAccessLogInput>
    connectOrCreate?: ExpectedTargetCreateOrConnectWithoutAccessLogInput
    upsert?: ExpectedTargetUpsertWithoutAccessLogInput
    disconnect?: ExpectedTargetWhereInput | boolean
    delete?: ExpectedTargetWhereInput | boolean
    connect?: ExpectedTargetWhereUniqueInput
    update?: XOR<XOR<ExpectedTargetUpdateToOneWithWhereWithoutAccessLogInput, ExpectedTargetUpdateWithoutAccessLogInput>, ExpectedTargetUncheckedUpdateWithoutAccessLogInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AccessLogCreateNestedManyWithoutExpectedTargetInput = {
    create?: XOR<AccessLogCreateWithoutExpectedTargetInput, AccessLogUncheckedCreateWithoutExpectedTargetInput> | AccessLogCreateWithoutExpectedTargetInput[] | AccessLogUncheckedCreateWithoutExpectedTargetInput[]
    connectOrCreate?: AccessLogCreateOrConnectWithoutExpectedTargetInput | AccessLogCreateOrConnectWithoutExpectedTargetInput[]
    createMany?: AccessLogCreateManyExpectedTargetInputEnvelope
    connect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
  }

  export type AccessLogUncheckedCreateNestedManyWithoutExpectedTargetInput = {
    create?: XOR<AccessLogCreateWithoutExpectedTargetInput, AccessLogUncheckedCreateWithoutExpectedTargetInput> | AccessLogCreateWithoutExpectedTargetInput[] | AccessLogUncheckedCreateWithoutExpectedTargetInput[]
    connectOrCreate?: AccessLogCreateOrConnectWithoutExpectedTargetInput | AccessLogCreateOrConnectWithoutExpectedTargetInput[]
    createMany?: AccessLogCreateManyExpectedTargetInputEnvelope
    connect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
  }

  export type AccessLogUpdateManyWithoutExpectedTargetNestedInput = {
    create?: XOR<AccessLogCreateWithoutExpectedTargetInput, AccessLogUncheckedCreateWithoutExpectedTargetInput> | AccessLogCreateWithoutExpectedTargetInput[] | AccessLogUncheckedCreateWithoutExpectedTargetInput[]
    connectOrCreate?: AccessLogCreateOrConnectWithoutExpectedTargetInput | AccessLogCreateOrConnectWithoutExpectedTargetInput[]
    upsert?: AccessLogUpsertWithWhereUniqueWithoutExpectedTargetInput | AccessLogUpsertWithWhereUniqueWithoutExpectedTargetInput[]
    createMany?: AccessLogCreateManyExpectedTargetInputEnvelope
    set?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    disconnect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    delete?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    connect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    update?: AccessLogUpdateWithWhereUniqueWithoutExpectedTargetInput | AccessLogUpdateWithWhereUniqueWithoutExpectedTargetInput[]
    updateMany?: AccessLogUpdateManyWithWhereWithoutExpectedTargetInput | AccessLogUpdateManyWithWhereWithoutExpectedTargetInput[]
    deleteMany?: AccessLogScalarWhereInput | AccessLogScalarWhereInput[]
  }

  export type AccessLogUncheckedUpdateManyWithoutExpectedTargetNestedInput = {
    create?: XOR<AccessLogCreateWithoutExpectedTargetInput, AccessLogUncheckedCreateWithoutExpectedTargetInput> | AccessLogCreateWithoutExpectedTargetInput[] | AccessLogUncheckedCreateWithoutExpectedTargetInput[]
    connectOrCreate?: AccessLogCreateOrConnectWithoutExpectedTargetInput | AccessLogCreateOrConnectWithoutExpectedTargetInput[]
    upsert?: AccessLogUpsertWithWhereUniqueWithoutExpectedTargetInput | AccessLogUpsertWithWhereUniqueWithoutExpectedTargetInput[]
    createMany?: AccessLogCreateManyExpectedTargetInputEnvelope
    set?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    disconnect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    delete?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    connect?: AccessLogWhereUniqueInput | AccessLogWhereUniqueInput[]
    update?: AccessLogUpdateWithWhereUniqueWithoutExpectedTargetInput | AccessLogUpdateWithWhereUniqueWithoutExpectedTargetInput[]
    updateMany?: AccessLogUpdateManyWithWhereWithoutExpectedTargetInput | AccessLogUpdateManyWithWhereWithoutExpectedTargetInput[]
    deleteMany?: AccessLogScalarWhereInput | AccessLogScalarWhereInput[]
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

  export type AccessLogCreateWithoutTargetInput = {
    logId?: string
    ip: string
    device: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedTarget?: ExpectedTargetCreateNestedOneWithoutAccessLogInput
  }

  export type AccessLogUncheckedCreateWithoutTargetInput = {
    logId?: string
    ip: string
    device: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hash?: string | null
  }

  export type AccessLogCreateOrConnectWithoutTargetInput = {
    where: AccessLogWhereUniqueInput
    create: XOR<AccessLogCreateWithoutTargetInput, AccessLogUncheckedCreateWithoutTargetInput>
  }

  export type AccessLogCreateManyTargetInputEnvelope = {
    data: AccessLogCreateManyTargetInput | AccessLogCreateManyTargetInput[]
    skipDuplicates?: boolean
  }

  export type AccessLogUpsertWithWhereUniqueWithoutTargetInput = {
    where: AccessLogWhereUniqueInput
    update: XOR<AccessLogUpdateWithoutTargetInput, AccessLogUncheckedUpdateWithoutTargetInput>
    create: XOR<AccessLogCreateWithoutTargetInput, AccessLogUncheckedCreateWithoutTargetInput>
  }

  export type AccessLogUpdateWithWhereUniqueWithoutTargetInput = {
    where: AccessLogWhereUniqueInput
    data: XOR<AccessLogUpdateWithoutTargetInput, AccessLogUncheckedUpdateWithoutTargetInput>
  }

  export type AccessLogUpdateManyWithWhereWithoutTargetInput = {
    where: AccessLogScalarWhereInput
    data: XOR<AccessLogUpdateManyMutationInput, AccessLogUncheckedUpdateManyWithoutTargetInput>
  }

  export type AccessLogScalarWhereInput = {
    AND?: AccessLogScalarWhereInput | AccessLogScalarWhereInput[]
    OR?: AccessLogScalarWhereInput[]
    NOT?: AccessLogScalarWhereInput | AccessLogScalarWhereInput[]
    logId?: StringFilter<"AccessLog"> | string
    ip?: StringFilter<"AccessLog"> | string
    device?: StringFilter<"AccessLog"> | string
    createdAt?: DateTimeFilter<"AccessLog"> | Date | string
    updatedAt?: DateTimeFilter<"AccessLog"> | Date | string
    targetId?: StringNullableFilter<"AccessLog"> | string | null
    hash?: StringNullableFilter<"AccessLog"> | string | null
  }

  export type TargetCreateWithoutAccessLogInput = {
    targetId?: string
    username: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TargetUncheckedCreateWithoutAccessLogInput = {
    targetId?: string
    username: string
    email: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TargetCreateOrConnectWithoutAccessLogInput = {
    where: TargetWhereUniqueInput
    create: XOR<TargetCreateWithoutAccessLogInput, TargetUncheckedCreateWithoutAccessLogInput>
  }

  export type ExpectedTargetCreateWithoutAccessLogInput = {
    hash: string
    email: string
    name: string
    createdAt?: Date | string
  }

  export type ExpectedTargetUncheckedCreateWithoutAccessLogInput = {
    hash: string
    email: string
    name: string
    createdAt?: Date | string
  }

  export type ExpectedTargetCreateOrConnectWithoutAccessLogInput = {
    where: ExpectedTargetWhereUniqueInput
    create: XOR<ExpectedTargetCreateWithoutAccessLogInput, ExpectedTargetUncheckedCreateWithoutAccessLogInput>
  }

  export type TargetUpsertWithoutAccessLogInput = {
    update: XOR<TargetUpdateWithoutAccessLogInput, TargetUncheckedUpdateWithoutAccessLogInput>
    create: XOR<TargetCreateWithoutAccessLogInput, TargetUncheckedCreateWithoutAccessLogInput>
    where?: TargetWhereInput
  }

  export type TargetUpdateToOneWithWhereWithoutAccessLogInput = {
    where?: TargetWhereInput
    data: XOR<TargetUpdateWithoutAccessLogInput, TargetUncheckedUpdateWithoutAccessLogInput>
  }

  export type TargetUpdateWithoutAccessLogInput = {
    targetId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TargetUncheckedUpdateWithoutAccessLogInput = {
    targetId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpectedTargetUpsertWithoutAccessLogInput = {
    update: XOR<ExpectedTargetUpdateWithoutAccessLogInput, ExpectedTargetUncheckedUpdateWithoutAccessLogInput>
    create: XOR<ExpectedTargetCreateWithoutAccessLogInput, ExpectedTargetUncheckedCreateWithoutAccessLogInput>
    where?: ExpectedTargetWhereInput
  }

  export type ExpectedTargetUpdateToOneWithWhereWithoutAccessLogInput = {
    where?: ExpectedTargetWhereInput
    data: XOR<ExpectedTargetUpdateWithoutAccessLogInput, ExpectedTargetUncheckedUpdateWithoutAccessLogInput>
  }

  export type ExpectedTargetUpdateWithoutAccessLogInput = {
    hash?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpectedTargetUncheckedUpdateWithoutAccessLogInput = {
    hash?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessLogCreateWithoutExpectedTargetInput = {
    logId?: string
    ip: string
    device: string
    createdAt?: Date | string
    updatedAt?: Date | string
    target?: TargetCreateNestedOneWithoutAccessLogInput
  }

  export type AccessLogUncheckedCreateWithoutExpectedTargetInput = {
    logId?: string
    ip: string
    device: string
    createdAt?: Date | string
    updatedAt?: Date | string
    targetId?: string | null
  }

  export type AccessLogCreateOrConnectWithoutExpectedTargetInput = {
    where: AccessLogWhereUniqueInput
    create: XOR<AccessLogCreateWithoutExpectedTargetInput, AccessLogUncheckedCreateWithoutExpectedTargetInput>
  }

  export type AccessLogCreateManyExpectedTargetInputEnvelope = {
    data: AccessLogCreateManyExpectedTargetInput | AccessLogCreateManyExpectedTargetInput[]
    skipDuplicates?: boolean
  }

  export type AccessLogUpsertWithWhereUniqueWithoutExpectedTargetInput = {
    where: AccessLogWhereUniqueInput
    update: XOR<AccessLogUpdateWithoutExpectedTargetInput, AccessLogUncheckedUpdateWithoutExpectedTargetInput>
    create: XOR<AccessLogCreateWithoutExpectedTargetInput, AccessLogUncheckedCreateWithoutExpectedTargetInput>
  }

  export type AccessLogUpdateWithWhereUniqueWithoutExpectedTargetInput = {
    where: AccessLogWhereUniqueInput
    data: XOR<AccessLogUpdateWithoutExpectedTargetInput, AccessLogUncheckedUpdateWithoutExpectedTargetInput>
  }

  export type AccessLogUpdateManyWithWhereWithoutExpectedTargetInput = {
    where: AccessLogScalarWhereInput
    data: XOR<AccessLogUpdateManyMutationInput, AccessLogUncheckedUpdateManyWithoutExpectedTargetInput>
  }

  export type AccessLogCreateManyTargetInput = {
    logId?: string
    ip: string
    device: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hash?: string | null
  }

  export type AccessLogUpdateWithoutTargetInput = {
    logId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedTarget?: ExpectedTargetUpdateOneWithoutAccessLogNestedInput
  }

  export type AccessLogUncheckedUpdateWithoutTargetInput = {
    logId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccessLogUncheckedUpdateManyWithoutTargetInput = {
    logId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccessLogCreateManyExpectedTargetInput = {
    logId?: string
    ip: string
    device: string
    createdAt?: Date | string
    updatedAt?: Date | string
    targetId?: string | null
  }

  export type AccessLogUpdateWithoutExpectedTargetInput = {
    logId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    target?: TargetUpdateOneWithoutAccessLogNestedInput
  }

  export type AccessLogUncheckedUpdateWithoutExpectedTargetInput = {
    logId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccessLogUncheckedUpdateManyWithoutExpectedTargetInput = {
    logId?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    device?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TargetCountOutputTypeDefaultArgs instead
     */
    export type TargetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TargetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExpectedTargetCountOutputTypeDefaultArgs instead
     */
    export type ExpectedTargetCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpectedTargetCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TargetDefaultArgs instead
     */
    export type TargetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TargetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccessLogDefaultArgs instead
     */
    export type AccessLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccessLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExpectedTargetDefaultArgs instead
     */
    export type ExpectedTargetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExpectedTargetDefaultArgs<ExtArgs>

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