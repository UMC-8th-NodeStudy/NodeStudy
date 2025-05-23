
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
 * Model FoodCategory
 * 
 */
export type FoodCategory = $Result.DefaultSelection<Prisma.$FoodCategoryPayload>
/**
 * Model UserFavorCategory
 * 
 */
export type UserFavorCategory = $Result.DefaultSelection<Prisma.$UserFavorCategoryPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model UserStoreReview
 * 
 */
export type UserStoreReview = $Result.DefaultSelection<Prisma.$UserStoreReviewPayload>

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foodCategory`: Exposes CRUD operations for the **FoodCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodCategories
    * const foodCategories = await prisma.foodCategory.findMany()
    * ```
    */
  get foodCategory(): Prisma.FoodCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFavorCategory`: Exposes CRUD operations for the **UserFavorCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFavorCategories
    * const userFavorCategories = await prisma.userFavorCategory.findMany()
    * ```
    */
  get userFavorCategory(): Prisma.UserFavorCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userStoreReview`: Exposes CRUD operations for the **UserStoreReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStoreReviews
    * const userStoreReviews = await prisma.userStoreReview.findMany()
    * ```
    */
  get userStoreReview(): Prisma.UserStoreReviewDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    FoodCategory: 'FoodCategory',
    UserFavorCategory: 'UserFavorCategory',
    Store: 'Store',
    UserStoreReview: 'UserStoreReview'
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
      modelProps: "user" | "foodCategory" | "userFavorCategory" | "store" | "userStoreReview"
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
      FoodCategory: {
        payload: Prisma.$FoodCategoryPayload<ExtArgs>
        fields: Prisma.FoodCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          findFirst: {
            args: Prisma.FoodCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          findMany: {
            args: Prisma.FoodCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>[]
          }
          create: {
            args: Prisma.FoodCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          createMany: {
            args: Prisma.FoodCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FoodCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          update: {
            args: Prisma.FoodCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          deleteMany: {
            args: Prisma.FoodCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodCategoryPayload>
          }
          aggregate: {
            args: Prisma.FoodCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodCategory>
          }
          groupBy: {
            args: Prisma.FoodCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCategoryCountAggregateOutputType> | number
          }
        }
      }
      UserFavorCategory: {
        payload: Prisma.$UserFavorCategoryPayload<ExtArgs>
        fields: Prisma.UserFavorCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFavorCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavorCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFavorCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavorCategoryPayload>
          }
          findFirst: {
            args: Prisma.UserFavorCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavorCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFavorCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavorCategoryPayload>
          }
          findMany: {
            args: Prisma.UserFavorCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavorCategoryPayload>[]
          }
          create: {
            args: Prisma.UserFavorCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavorCategoryPayload>
          }
          createMany: {
            args: Prisma.UserFavorCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserFavorCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavorCategoryPayload>
          }
          update: {
            args: Prisma.UserFavorCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavorCategoryPayload>
          }
          deleteMany: {
            args: Prisma.UserFavorCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFavorCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserFavorCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFavorCategoryPayload>
          }
          aggregate: {
            args: Prisma.UserFavorCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFavorCategory>
          }
          groupBy: {
            args: Prisma.UserFavorCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFavorCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFavorCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<UserFavorCategoryCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      UserStoreReview: {
        payload: Prisma.$UserStoreReviewPayload<ExtArgs>
        fields: Prisma.UserStoreReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStoreReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoreReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStoreReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoreReviewPayload>
          }
          findFirst: {
            args: Prisma.UserStoreReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoreReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStoreReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoreReviewPayload>
          }
          findMany: {
            args: Prisma.UserStoreReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoreReviewPayload>[]
          }
          create: {
            args: Prisma.UserStoreReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoreReviewPayload>
          }
          createMany: {
            args: Prisma.UserStoreReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserStoreReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoreReviewPayload>
          }
          update: {
            args: Prisma.UserStoreReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoreReviewPayload>
          }
          deleteMany: {
            args: Prisma.UserStoreReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserStoreReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserStoreReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStoreReviewPayload>
          }
          aggregate: {
            args: Prisma.UserStoreReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserStoreReview>
          }
          groupBy: {
            args: Prisma.UserStoreReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserStoreReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStoreReviewCountArgs<ExtArgs>
            result: $Utils.Optional<UserStoreReviewCountAggregateOutputType> | number
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
    user?: UserOmit
    foodCategory?: FoodCategoryOmit
    userFavorCategory?: UserFavorCategoryOmit
    store?: StoreOmit
    userStoreReview?: UserStoreReviewOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userFavorCategories: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFavorCategories?: boolean | UserCountOutputTypeCountUserFavorCategoriesArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
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
  export type UserCountOutputTypeCountUserFavorCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavorCategoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStoreReviewWhereInput
  }


  /**
   * Count Type FoodCategoryCountOutputType
   */

  export type FoodCategoryCountOutputType = {
    userFavorCategories: number
  }

  export type FoodCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFavorCategories?: boolean | FoodCategoryCountOutputTypeCountUserFavorCategoriesArgs
  }

  // Custom InputTypes
  /**
   * FoodCategoryCountOutputType without action
   */
  export type FoodCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategoryCountOutputType
     */
    select?: FoodCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodCategoryCountOutputType without action
   */
  export type FoodCategoryCountOutputTypeCountUserFavorCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavorCategoryWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    reviews: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | StoreCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStoreReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    gender: string | null
    birth: Date | null
    address: string | null
    detailAddress: string | null
    phoneNumber: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    gender: string | null
    birth: Date | null
    address: string | null
    detailAddress: string | null
    phoneNumber: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    gender: number
    birth: number
    address: number
    detailAddress: number
    phoneNumber: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    gender?: true
    birth?: true
    address?: true
    detailAddress?: true
    phoneNumber?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    gender?: true
    birth?: true
    address?: true
    detailAddress?: true
    phoneNumber?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    gender?: true
    birth?: true
    address?: true
    detailAddress?: true
    phoneNumber?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    gender: string
    birth: Date
    address: string
    detailAddress: string | null
    phoneNumber: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    gender?: boolean
    birth?: boolean
    address?: boolean
    detailAddress?: boolean
    phoneNumber?: boolean
    userFavorCategories?: boolean | User$userFavorCategoriesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    gender?: boolean
    birth?: boolean
    address?: boolean
    detailAddress?: boolean
    phoneNumber?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "gender" | "birth" | "address" | "detailAddress" | "phoneNumber", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFavorCategories?: boolean | User$userFavorCategoriesArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userFavorCategories: Prisma.$UserFavorCategoryPayload<ExtArgs>[]
      reviews: Prisma.$UserStoreReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      gender: string
      birth: Date
      address: string
      detailAddress: string | null
      phoneNumber: string
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
    userFavorCategories<T extends User$userFavorCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$userFavorCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStoreReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly birth: FieldRef<"User", 'DateTime'>
    readonly address: FieldRef<"User", 'String'>
    readonly detailAddress: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
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
   * User.userFavorCategories
   */
  export type User$userFavorCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    where?: UserFavorCategoryWhereInput
    orderBy?: UserFavorCategoryOrderByWithRelationInput | UserFavorCategoryOrderByWithRelationInput[]
    cursor?: UserFavorCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavorCategoryScalarFieldEnum | UserFavorCategoryScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoreReview
     */
    select?: UserStoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStoreReview
     */
    omit?: UserStoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreReviewInclude<ExtArgs> | null
    where?: UserStoreReviewWhereInput
    orderBy?: UserStoreReviewOrderByWithRelationInput | UserStoreReviewOrderByWithRelationInput[]
    cursor?: UserStoreReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStoreReviewScalarFieldEnum | UserStoreReviewScalarFieldEnum[]
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
   * Model FoodCategory
   */

  export type AggregateFoodCategory = {
    _count: FoodCategoryCountAggregateOutputType | null
    _avg: FoodCategoryAvgAggregateOutputType | null
    _sum: FoodCategorySumAggregateOutputType | null
    _min: FoodCategoryMinAggregateOutputType | null
    _max: FoodCategoryMaxAggregateOutputType | null
  }

  export type FoodCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type FoodCategorySumAggregateOutputType = {
    id: number | null
  }

  export type FoodCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type FoodCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type FoodCategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type FoodCategoryAvgAggregateInputType = {
    id?: true
  }

  export type FoodCategorySumAggregateInputType = {
    id?: true
  }

  export type FoodCategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type FoodCategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type FoodCategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type FoodCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodCategory to aggregate.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodCategories
    **/
    _count?: true | FoodCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodCategoryMaxAggregateInputType
  }

  export type GetFoodCategoryAggregateType<T extends FoodCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodCategory[P]>
      : GetScalarType<T[P], AggregateFoodCategory[P]>
  }




  export type FoodCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodCategoryWhereInput
    orderBy?: FoodCategoryOrderByWithAggregationInput | FoodCategoryOrderByWithAggregationInput[]
    by: FoodCategoryScalarFieldEnum[] | FoodCategoryScalarFieldEnum
    having?: FoodCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCategoryCountAggregateInputType | true
    _avg?: FoodCategoryAvgAggregateInputType
    _sum?: FoodCategorySumAggregateInputType
    _min?: FoodCategoryMinAggregateInputType
    _max?: FoodCategoryMaxAggregateInputType
  }

  export type FoodCategoryGroupByOutputType = {
    id: number
    name: string
    _count: FoodCategoryCountAggregateOutputType | null
    _avg: FoodCategoryAvgAggregateOutputType | null
    _sum: FoodCategorySumAggregateOutputType | null
    _min: FoodCategoryMinAggregateOutputType | null
    _max: FoodCategoryMaxAggregateOutputType | null
  }

  type GetFoodCategoryGroupByPayload<T extends FoodCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], FoodCategoryGroupByOutputType[P]>
        }
      >
    >


  export type FoodCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userFavorCategories?: boolean | FoodCategory$userFavorCategoriesArgs<ExtArgs>
    _count?: boolean | FoodCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodCategory"]>



  export type FoodCategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type FoodCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["foodCategory"]>
  export type FoodCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userFavorCategories?: boolean | FoodCategory$userFavorCategoriesArgs<ExtArgs>
    _count?: boolean | FoodCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FoodCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodCategory"
    objects: {
      userFavorCategories: Prisma.$UserFavorCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["foodCategory"]>
    composites: {}
  }

  type FoodCategoryGetPayload<S extends boolean | null | undefined | FoodCategoryDefaultArgs> = $Result.GetResult<Prisma.$FoodCategoryPayload, S>

  type FoodCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodCategoryCountAggregateInputType | true
    }

  export interface FoodCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodCategory'], meta: { name: 'FoodCategory' } }
    /**
     * Find zero or one FoodCategory that matches the filter.
     * @param {FoodCategoryFindUniqueArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodCategoryFindUniqueArgs>(args: SelectSubset<T, FoodCategoryFindUniqueArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodCategoryFindUniqueOrThrowArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryFindFirstArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodCategoryFindFirstArgs>(args?: SelectSubset<T, FoodCategoryFindFirstArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryFindFirstOrThrowArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodCategories
     * const foodCategories = await prisma.foodCategory.findMany()
     * 
     * // Get first 10 FoodCategories
     * const foodCategories = await prisma.foodCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodCategoryWithIdOnly = await prisma.foodCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodCategoryFindManyArgs>(args?: SelectSubset<T, FoodCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodCategory.
     * @param {FoodCategoryCreateArgs} args - Arguments to create a FoodCategory.
     * @example
     * // Create one FoodCategory
     * const FoodCategory = await prisma.foodCategory.create({
     *   data: {
     *     // ... data to create a FoodCategory
     *   }
     * })
     * 
     */
    create<T extends FoodCategoryCreateArgs>(args: SelectSubset<T, FoodCategoryCreateArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodCategories.
     * @param {FoodCategoryCreateManyArgs} args - Arguments to create many FoodCategories.
     * @example
     * // Create many FoodCategories
     * const foodCategory = await prisma.foodCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodCategoryCreateManyArgs>(args?: SelectSubset<T, FoodCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FoodCategory.
     * @param {FoodCategoryDeleteArgs} args - Arguments to delete one FoodCategory.
     * @example
     * // Delete one FoodCategory
     * const FoodCategory = await prisma.foodCategory.delete({
     *   where: {
     *     // ... filter to delete one FoodCategory
     *   }
     * })
     * 
     */
    delete<T extends FoodCategoryDeleteArgs>(args: SelectSubset<T, FoodCategoryDeleteArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodCategory.
     * @param {FoodCategoryUpdateArgs} args - Arguments to update one FoodCategory.
     * @example
     * // Update one FoodCategory
     * const foodCategory = await prisma.foodCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodCategoryUpdateArgs>(args: SelectSubset<T, FoodCategoryUpdateArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodCategories.
     * @param {FoodCategoryDeleteManyArgs} args - Arguments to filter FoodCategories to delete.
     * @example
     * // Delete a few FoodCategories
     * const { count } = await prisma.foodCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodCategoryDeleteManyArgs>(args?: SelectSubset<T, FoodCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodCategories
     * const foodCategory = await prisma.foodCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodCategoryUpdateManyArgs>(args: SelectSubset<T, FoodCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FoodCategory.
     * @param {FoodCategoryUpsertArgs} args - Arguments to update or create a FoodCategory.
     * @example
     * // Update or create a FoodCategory
     * const foodCategory = await prisma.foodCategory.upsert({
     *   create: {
     *     // ... data to create a FoodCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodCategory we want to update
     *   }
     * })
     */
    upsert<T extends FoodCategoryUpsertArgs>(args: SelectSubset<T, FoodCategoryUpsertArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryCountArgs} args - Arguments to filter FoodCategories to count.
     * @example
     * // Count the number of FoodCategories
     * const count = await prisma.foodCategory.count({
     *   where: {
     *     // ... the filter for the FoodCategories we want to count
     *   }
     * })
    **/
    count<T extends FoodCategoryCountArgs>(
      args?: Subset<T, FoodCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodCategoryAggregateArgs>(args: Subset<T, FoodCategoryAggregateArgs>): Prisma.PrismaPromise<GetFoodCategoryAggregateType<T>>

    /**
     * Group by FoodCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryGroupByArgs} args - Group by arguments.
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
      T extends FoodCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodCategoryGroupByArgs['orderBy'] }
        : { orderBy?: FoodCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodCategory model
   */
  readonly fields: FoodCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userFavorCategories<T extends FoodCategory$userFavorCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, FoodCategory$userFavorCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FoodCategory model
   */
  interface FoodCategoryFieldRefs {
    readonly id: FieldRef<"FoodCategory", 'Int'>
    readonly name: FieldRef<"FoodCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FoodCategory findUnique
   */
  export type FoodCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory findUniqueOrThrow
   */
  export type FoodCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory findFirst
   */
  export type FoodCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodCategories.
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodCategories.
     */
    distinct?: FoodCategoryScalarFieldEnum | FoodCategoryScalarFieldEnum[]
  }

  /**
   * FoodCategory findFirstOrThrow
   */
  export type FoodCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodCategories.
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodCategories.
     */
    distinct?: FoodCategoryScalarFieldEnum | FoodCategoryScalarFieldEnum[]
  }

  /**
   * FoodCategory findMany
   */
  export type FoodCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategories to fetch.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: FoodCategoryOrderByWithRelationInput | FoodCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodCategories.
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    distinct?: FoodCategoryScalarFieldEnum | FoodCategoryScalarFieldEnum[]
  }

  /**
   * FoodCategory create
   */
  export type FoodCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodCategory.
     */
    data: XOR<FoodCategoryCreateInput, FoodCategoryUncheckedCreateInput>
  }

  /**
   * FoodCategory createMany
   */
  export type FoodCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodCategories.
     */
    data: FoodCategoryCreateManyInput | FoodCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodCategory update
   */
  export type FoodCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodCategory.
     */
    data: XOR<FoodCategoryUpdateInput, FoodCategoryUncheckedUpdateInput>
    /**
     * Choose, which FoodCategory to update.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory updateMany
   */
  export type FoodCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodCategories.
     */
    data: XOR<FoodCategoryUpdateManyMutationInput, FoodCategoryUncheckedUpdateManyInput>
    /**
     * Filter which FoodCategories to update
     */
    where?: FoodCategoryWhereInput
    /**
     * Limit how many FoodCategories to update.
     */
    limit?: number
  }

  /**
   * FoodCategory upsert
   */
  export type FoodCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodCategory to update in case it exists.
     */
    where: FoodCategoryWhereUniqueInput
    /**
     * In case the FoodCategory found by the `where` argument doesn't exist, create a new FoodCategory with this data.
     */
    create: XOR<FoodCategoryCreateInput, FoodCategoryUncheckedCreateInput>
    /**
     * In case the FoodCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodCategoryUpdateInput, FoodCategoryUncheckedUpdateInput>
  }

  /**
   * FoodCategory delete
   */
  export type FoodCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter which FoodCategory to delete.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory deleteMany
   */
  export type FoodCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodCategories to delete
     */
    where?: FoodCategoryWhereInput
    /**
     * Limit how many FoodCategories to delete.
     */
    limit?: number
  }

  /**
   * FoodCategory.userFavorCategories
   */
  export type FoodCategory$userFavorCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    where?: UserFavorCategoryWhereInput
    orderBy?: UserFavorCategoryOrderByWithRelationInput | UserFavorCategoryOrderByWithRelationInput[]
    cursor?: UserFavorCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavorCategoryScalarFieldEnum | UserFavorCategoryScalarFieldEnum[]
  }

  /**
   * FoodCategory without action
   */
  export type FoodCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodCategory
     */
    omit?: FoodCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodCategoryInclude<ExtArgs> | null
  }


  /**
   * Model UserFavorCategory
   */

  export type AggregateUserFavorCategory = {
    _count: UserFavorCategoryCountAggregateOutputType | null
    _avg: UserFavorCategoryAvgAggregateOutputType | null
    _sum: UserFavorCategorySumAggregateOutputType | null
    _min: UserFavorCategoryMinAggregateOutputType | null
    _max: UserFavorCategoryMaxAggregateOutputType | null
  }

  export type UserFavorCategoryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    foodCategoryId: number | null
  }

  export type UserFavorCategorySumAggregateOutputType = {
    id: number | null
    userId: number | null
    foodCategoryId: number | null
  }

  export type UserFavorCategoryMinAggregateOutputType = {
    id: number | null
    userId: number | null
    foodCategoryId: number | null
  }

  export type UserFavorCategoryMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    foodCategoryId: number | null
  }

  export type UserFavorCategoryCountAggregateOutputType = {
    id: number
    userId: number
    foodCategoryId: number
    _all: number
  }


  export type UserFavorCategoryAvgAggregateInputType = {
    id?: true
    userId?: true
    foodCategoryId?: true
  }

  export type UserFavorCategorySumAggregateInputType = {
    id?: true
    userId?: true
    foodCategoryId?: true
  }

  export type UserFavorCategoryMinAggregateInputType = {
    id?: true
    userId?: true
    foodCategoryId?: true
  }

  export type UserFavorCategoryMaxAggregateInputType = {
    id?: true
    userId?: true
    foodCategoryId?: true
  }

  export type UserFavorCategoryCountAggregateInputType = {
    id?: true
    userId?: true
    foodCategoryId?: true
    _all?: true
  }

  export type UserFavorCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavorCategory to aggregate.
     */
    where?: UserFavorCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorCategories to fetch.
     */
    orderBy?: UserFavorCategoryOrderByWithRelationInput | UserFavorCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFavorCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFavorCategories
    **/
    _count?: true | UserFavorCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserFavorCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserFavorCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFavorCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFavorCategoryMaxAggregateInputType
  }

  export type GetUserFavorCategoryAggregateType<T extends UserFavorCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFavorCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFavorCategory[P]>
      : GetScalarType<T[P], AggregateUserFavorCategory[P]>
  }




  export type UserFavorCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavorCategoryWhereInput
    orderBy?: UserFavorCategoryOrderByWithAggregationInput | UserFavorCategoryOrderByWithAggregationInput[]
    by: UserFavorCategoryScalarFieldEnum[] | UserFavorCategoryScalarFieldEnum
    having?: UserFavorCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFavorCategoryCountAggregateInputType | true
    _avg?: UserFavorCategoryAvgAggregateInputType
    _sum?: UserFavorCategorySumAggregateInputType
    _min?: UserFavorCategoryMinAggregateInputType
    _max?: UserFavorCategoryMaxAggregateInputType
  }

  export type UserFavorCategoryGroupByOutputType = {
    id: number
    userId: number
    foodCategoryId: number
    _count: UserFavorCategoryCountAggregateOutputType | null
    _avg: UserFavorCategoryAvgAggregateOutputType | null
    _sum: UserFavorCategorySumAggregateOutputType | null
    _min: UserFavorCategoryMinAggregateOutputType | null
    _max: UserFavorCategoryMaxAggregateOutputType | null
  }

  type GetUserFavorCategoryGroupByPayload<T extends UserFavorCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFavorCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFavorCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFavorCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserFavorCategoryGroupByOutputType[P]>
        }
      >
    >


  export type UserFavorCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    foodCategoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    foodCategory?: boolean | FoodCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFavorCategory"]>



  export type UserFavorCategorySelectScalar = {
    id?: boolean
    userId?: boolean
    foodCategoryId?: boolean
  }

  export type UserFavorCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "foodCategoryId", ExtArgs["result"]["userFavorCategory"]>
  export type UserFavorCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    foodCategory?: boolean | FoodCategoryDefaultArgs<ExtArgs>
  }

  export type $UserFavorCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFavorCategory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      foodCategory: Prisma.$FoodCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      foodCategoryId: number
    }, ExtArgs["result"]["userFavorCategory"]>
    composites: {}
  }

  type UserFavorCategoryGetPayload<S extends boolean | null | undefined | UserFavorCategoryDefaultArgs> = $Result.GetResult<Prisma.$UserFavorCategoryPayload, S>

  type UserFavorCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFavorCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFavorCategoryCountAggregateInputType | true
    }

  export interface UserFavorCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFavorCategory'], meta: { name: 'UserFavorCategory' } }
    /**
     * Find zero or one UserFavorCategory that matches the filter.
     * @param {UserFavorCategoryFindUniqueArgs} args - Arguments to find a UserFavorCategory
     * @example
     * // Get one UserFavorCategory
     * const userFavorCategory = await prisma.userFavorCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFavorCategoryFindUniqueArgs>(args: SelectSubset<T, UserFavorCategoryFindUniqueArgs<ExtArgs>>): Prisma__UserFavorCategoryClient<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFavorCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFavorCategoryFindUniqueOrThrowArgs} args - Arguments to find a UserFavorCategory
     * @example
     * // Get one UserFavorCategory
     * const userFavorCategory = await prisma.userFavorCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFavorCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFavorCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFavorCategoryClient<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFavorCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavorCategoryFindFirstArgs} args - Arguments to find a UserFavorCategory
     * @example
     * // Get one UserFavorCategory
     * const userFavorCategory = await prisma.userFavorCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFavorCategoryFindFirstArgs>(args?: SelectSubset<T, UserFavorCategoryFindFirstArgs<ExtArgs>>): Prisma__UserFavorCategoryClient<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFavorCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavorCategoryFindFirstOrThrowArgs} args - Arguments to find a UserFavorCategory
     * @example
     * // Get one UserFavorCategory
     * const userFavorCategory = await prisma.userFavorCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFavorCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFavorCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFavorCategoryClient<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFavorCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavorCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFavorCategories
     * const userFavorCategories = await prisma.userFavorCategory.findMany()
     * 
     * // Get first 10 UserFavorCategories
     * const userFavorCategories = await prisma.userFavorCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFavorCategoryWithIdOnly = await prisma.userFavorCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFavorCategoryFindManyArgs>(args?: SelectSubset<T, UserFavorCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFavorCategory.
     * @param {UserFavorCategoryCreateArgs} args - Arguments to create a UserFavorCategory.
     * @example
     * // Create one UserFavorCategory
     * const UserFavorCategory = await prisma.userFavorCategory.create({
     *   data: {
     *     // ... data to create a UserFavorCategory
     *   }
     * })
     * 
     */
    create<T extends UserFavorCategoryCreateArgs>(args: SelectSubset<T, UserFavorCategoryCreateArgs<ExtArgs>>): Prisma__UserFavorCategoryClient<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFavorCategories.
     * @param {UserFavorCategoryCreateManyArgs} args - Arguments to create many UserFavorCategories.
     * @example
     * // Create many UserFavorCategories
     * const userFavorCategory = await prisma.userFavorCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFavorCategoryCreateManyArgs>(args?: SelectSubset<T, UserFavorCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserFavorCategory.
     * @param {UserFavorCategoryDeleteArgs} args - Arguments to delete one UserFavorCategory.
     * @example
     * // Delete one UserFavorCategory
     * const UserFavorCategory = await prisma.userFavorCategory.delete({
     *   where: {
     *     // ... filter to delete one UserFavorCategory
     *   }
     * })
     * 
     */
    delete<T extends UserFavorCategoryDeleteArgs>(args: SelectSubset<T, UserFavorCategoryDeleteArgs<ExtArgs>>): Prisma__UserFavorCategoryClient<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFavorCategory.
     * @param {UserFavorCategoryUpdateArgs} args - Arguments to update one UserFavorCategory.
     * @example
     * // Update one UserFavorCategory
     * const userFavorCategory = await prisma.userFavorCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFavorCategoryUpdateArgs>(args: SelectSubset<T, UserFavorCategoryUpdateArgs<ExtArgs>>): Prisma__UserFavorCategoryClient<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFavorCategories.
     * @param {UserFavorCategoryDeleteManyArgs} args - Arguments to filter UserFavorCategories to delete.
     * @example
     * // Delete a few UserFavorCategories
     * const { count } = await prisma.userFavorCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFavorCategoryDeleteManyArgs>(args?: SelectSubset<T, UserFavorCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFavorCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavorCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFavorCategories
     * const userFavorCategory = await prisma.userFavorCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFavorCategoryUpdateManyArgs>(args: SelectSubset<T, UserFavorCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserFavorCategory.
     * @param {UserFavorCategoryUpsertArgs} args - Arguments to update or create a UserFavorCategory.
     * @example
     * // Update or create a UserFavorCategory
     * const userFavorCategory = await prisma.userFavorCategory.upsert({
     *   create: {
     *     // ... data to create a UserFavorCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFavorCategory we want to update
     *   }
     * })
     */
    upsert<T extends UserFavorCategoryUpsertArgs>(args: SelectSubset<T, UserFavorCategoryUpsertArgs<ExtArgs>>): Prisma__UserFavorCategoryClient<$Result.GetResult<Prisma.$UserFavorCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFavorCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavorCategoryCountArgs} args - Arguments to filter UserFavorCategories to count.
     * @example
     * // Count the number of UserFavorCategories
     * const count = await prisma.userFavorCategory.count({
     *   where: {
     *     // ... the filter for the UserFavorCategories we want to count
     *   }
     * })
    **/
    count<T extends UserFavorCategoryCountArgs>(
      args?: Subset<T, UserFavorCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFavorCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFavorCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavorCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserFavorCategoryAggregateArgs>(args: Subset<T, UserFavorCategoryAggregateArgs>): Prisma.PrismaPromise<GetUserFavorCategoryAggregateType<T>>

    /**
     * Group by UserFavorCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavorCategoryGroupByArgs} args - Group by arguments.
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
      T extends UserFavorCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFavorCategoryGroupByArgs['orderBy'] }
        : { orderBy?: UserFavorCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserFavorCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFavorCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFavorCategory model
   */
  readonly fields: UserFavorCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFavorCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFavorCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    foodCategory<T extends FoodCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodCategoryDefaultArgs<ExtArgs>>): Prisma__FoodCategoryClient<$Result.GetResult<Prisma.$FoodCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserFavorCategory model
   */
  interface UserFavorCategoryFieldRefs {
    readonly id: FieldRef<"UserFavorCategory", 'Int'>
    readonly userId: FieldRef<"UserFavorCategory", 'Int'>
    readonly foodCategoryId: FieldRef<"UserFavorCategory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserFavorCategory findUnique
   */
  export type UserFavorCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorCategory to fetch.
     */
    where: UserFavorCategoryWhereUniqueInput
  }

  /**
   * UserFavorCategory findUniqueOrThrow
   */
  export type UserFavorCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorCategory to fetch.
     */
    where: UserFavorCategoryWhereUniqueInput
  }

  /**
   * UserFavorCategory findFirst
   */
  export type UserFavorCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorCategory to fetch.
     */
    where?: UserFavorCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorCategories to fetch.
     */
    orderBy?: UserFavorCategoryOrderByWithRelationInput | UserFavorCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavorCategories.
     */
    cursor?: UserFavorCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavorCategories.
     */
    distinct?: UserFavorCategoryScalarFieldEnum | UserFavorCategoryScalarFieldEnum[]
  }

  /**
   * UserFavorCategory findFirstOrThrow
   */
  export type UserFavorCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorCategory to fetch.
     */
    where?: UserFavorCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorCategories to fetch.
     */
    orderBy?: UserFavorCategoryOrderByWithRelationInput | UserFavorCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavorCategories.
     */
    cursor?: UserFavorCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavorCategories.
     */
    distinct?: UserFavorCategoryScalarFieldEnum | UserFavorCategoryScalarFieldEnum[]
  }

  /**
   * UserFavorCategory findMany
   */
  export type UserFavorCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    /**
     * Filter, which UserFavorCategories to fetch.
     */
    where?: UserFavorCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavorCategories to fetch.
     */
    orderBy?: UserFavorCategoryOrderByWithRelationInput | UserFavorCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFavorCategories.
     */
    cursor?: UserFavorCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavorCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavorCategories.
     */
    skip?: number
    distinct?: UserFavorCategoryScalarFieldEnum | UserFavorCategoryScalarFieldEnum[]
  }

  /**
   * UserFavorCategory create
   */
  export type UserFavorCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFavorCategory.
     */
    data: XOR<UserFavorCategoryCreateInput, UserFavorCategoryUncheckedCreateInput>
  }

  /**
   * UserFavorCategory createMany
   */
  export type UserFavorCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFavorCategories.
     */
    data: UserFavorCategoryCreateManyInput | UserFavorCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserFavorCategory update
   */
  export type UserFavorCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFavorCategory.
     */
    data: XOR<UserFavorCategoryUpdateInput, UserFavorCategoryUncheckedUpdateInput>
    /**
     * Choose, which UserFavorCategory to update.
     */
    where: UserFavorCategoryWhereUniqueInput
  }

  /**
   * UserFavorCategory updateMany
   */
  export type UserFavorCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFavorCategories.
     */
    data: XOR<UserFavorCategoryUpdateManyMutationInput, UserFavorCategoryUncheckedUpdateManyInput>
    /**
     * Filter which UserFavorCategories to update
     */
    where?: UserFavorCategoryWhereInput
    /**
     * Limit how many UserFavorCategories to update.
     */
    limit?: number
  }

  /**
   * UserFavorCategory upsert
   */
  export type UserFavorCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFavorCategory to update in case it exists.
     */
    where: UserFavorCategoryWhereUniqueInput
    /**
     * In case the UserFavorCategory found by the `where` argument doesn't exist, create a new UserFavorCategory with this data.
     */
    create: XOR<UserFavorCategoryCreateInput, UserFavorCategoryUncheckedCreateInput>
    /**
     * In case the UserFavorCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFavorCategoryUpdateInput, UserFavorCategoryUncheckedUpdateInput>
  }

  /**
   * UserFavorCategory delete
   */
  export type UserFavorCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
    /**
     * Filter which UserFavorCategory to delete.
     */
    where: UserFavorCategoryWhereUniqueInput
  }

  /**
   * UserFavorCategory deleteMany
   */
  export type UserFavorCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavorCategories to delete
     */
    where?: UserFavorCategoryWhereInput
    /**
     * Limit how many UserFavorCategories to delete.
     */
    limit?: number
  }

  /**
   * UserFavorCategory without action
   */
  export type UserFavorCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavorCategory
     */
    select?: UserFavorCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFavorCategory
     */
    omit?: UserFavorCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFavorCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    id: number | null
  }

  export type StoreSumAggregateOutputType = {
    id: number | null
  }

  export type StoreMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type StoreMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    id?: true
  }

  export type StoreSumAggregateInputType = {
    id?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: number
    name: string
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    reviews?: boolean | Store$reviewsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>



  export type StoreSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type StoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["store"]>
  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | Store$reviewsArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      reviews: Prisma.$UserStoreReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
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
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends Store$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Store$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStoreReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Store model
   */
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'Int'>
    readonly name: FieldRef<"Store", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to delete.
     */
    limit?: number
  }

  /**
   * Store.reviews
   */
  export type Store$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoreReview
     */
    select?: UserStoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStoreReview
     */
    omit?: UserStoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreReviewInclude<ExtArgs> | null
    where?: UserStoreReviewWhereInput
    orderBy?: UserStoreReviewOrderByWithRelationInput | UserStoreReviewOrderByWithRelationInput[]
    cursor?: UserStoreReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStoreReviewScalarFieldEnum | UserStoreReviewScalarFieldEnum[]
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model UserStoreReview
   */

  export type AggregateUserStoreReview = {
    _count: UserStoreReviewCountAggregateOutputType | null
    _avg: UserStoreReviewAvgAggregateOutputType | null
    _sum: UserStoreReviewSumAggregateOutputType | null
    _min: UserStoreReviewMinAggregateOutputType | null
    _max: UserStoreReviewMaxAggregateOutputType | null
  }

  export type UserStoreReviewAvgAggregateOutputType = {
    id: number | null
    storeId: number | null
    userId: number | null
  }

  export type UserStoreReviewSumAggregateOutputType = {
    id: number | null
    storeId: number | null
    userId: number | null
  }

  export type UserStoreReviewMinAggregateOutputType = {
    id: number | null
    content: string | null
    storeId: number | null
    userId: number | null
  }

  export type UserStoreReviewMaxAggregateOutputType = {
    id: number | null
    content: string | null
    storeId: number | null
    userId: number | null
  }

  export type UserStoreReviewCountAggregateOutputType = {
    id: number
    content: number
    storeId: number
    userId: number
    _all: number
  }


  export type UserStoreReviewAvgAggregateInputType = {
    id?: true
    storeId?: true
    userId?: true
  }

  export type UserStoreReviewSumAggregateInputType = {
    id?: true
    storeId?: true
    userId?: true
  }

  export type UserStoreReviewMinAggregateInputType = {
    id?: true
    content?: true
    storeId?: true
    userId?: true
  }

  export type UserStoreReviewMaxAggregateInputType = {
    id?: true
    content?: true
    storeId?: true
    userId?: true
  }

  export type UserStoreReviewCountAggregateInputType = {
    id?: true
    content?: true
    storeId?: true
    userId?: true
    _all?: true
  }

  export type UserStoreReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStoreReview to aggregate.
     */
    where?: UserStoreReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStoreReviews to fetch.
     */
    orderBy?: UserStoreReviewOrderByWithRelationInput | UserStoreReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStoreReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStoreReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStoreReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStoreReviews
    **/
    _count?: true | UserStoreReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserStoreReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserStoreReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStoreReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStoreReviewMaxAggregateInputType
  }

  export type GetUserStoreReviewAggregateType<T extends UserStoreReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStoreReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStoreReview[P]>
      : GetScalarType<T[P], AggregateUserStoreReview[P]>
  }




  export type UserStoreReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStoreReviewWhereInput
    orderBy?: UserStoreReviewOrderByWithAggregationInput | UserStoreReviewOrderByWithAggregationInput[]
    by: UserStoreReviewScalarFieldEnum[] | UserStoreReviewScalarFieldEnum
    having?: UserStoreReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStoreReviewCountAggregateInputType | true
    _avg?: UserStoreReviewAvgAggregateInputType
    _sum?: UserStoreReviewSumAggregateInputType
    _min?: UserStoreReviewMinAggregateInputType
    _max?: UserStoreReviewMaxAggregateInputType
  }

  export type UserStoreReviewGroupByOutputType = {
    id: number
    content: string
    storeId: number
    userId: number
    _count: UserStoreReviewCountAggregateOutputType | null
    _avg: UserStoreReviewAvgAggregateOutputType | null
    _sum: UserStoreReviewSumAggregateOutputType | null
    _min: UserStoreReviewMinAggregateOutputType | null
    _max: UserStoreReviewMaxAggregateOutputType | null
  }

  type GetUserStoreReviewGroupByPayload<T extends UserStoreReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStoreReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStoreReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStoreReviewGroupByOutputType[P]>
            : GetScalarType<T[P], UserStoreReviewGroupByOutputType[P]>
        }
      >
    >


  export type UserStoreReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    storeId?: boolean
    userId?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStoreReview"]>



  export type UserStoreReviewSelectScalar = {
    id?: boolean
    content?: boolean
    storeId?: boolean
    userId?: boolean
  }

  export type UserStoreReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "storeId" | "userId", ExtArgs["result"]["userStoreReview"]>
  export type UserStoreReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserStoreReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStoreReview"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      storeId: number
      userId: number
    }, ExtArgs["result"]["userStoreReview"]>
    composites: {}
  }

  type UserStoreReviewGetPayload<S extends boolean | null | undefined | UserStoreReviewDefaultArgs> = $Result.GetResult<Prisma.$UserStoreReviewPayload, S>

  type UserStoreReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserStoreReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserStoreReviewCountAggregateInputType | true
    }

  export interface UserStoreReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStoreReview'], meta: { name: 'UserStoreReview' } }
    /**
     * Find zero or one UserStoreReview that matches the filter.
     * @param {UserStoreReviewFindUniqueArgs} args - Arguments to find a UserStoreReview
     * @example
     * // Get one UserStoreReview
     * const userStoreReview = await prisma.userStoreReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStoreReviewFindUniqueArgs>(args: SelectSubset<T, UserStoreReviewFindUniqueArgs<ExtArgs>>): Prisma__UserStoreReviewClient<$Result.GetResult<Prisma.$UserStoreReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserStoreReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserStoreReviewFindUniqueOrThrowArgs} args - Arguments to find a UserStoreReview
     * @example
     * // Get one UserStoreReview
     * const userStoreReview = await prisma.userStoreReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStoreReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, UserStoreReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserStoreReviewClient<$Result.GetResult<Prisma.$UserStoreReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStoreReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoreReviewFindFirstArgs} args - Arguments to find a UserStoreReview
     * @example
     * // Get one UserStoreReview
     * const userStoreReview = await prisma.userStoreReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStoreReviewFindFirstArgs>(args?: SelectSubset<T, UserStoreReviewFindFirstArgs<ExtArgs>>): Prisma__UserStoreReviewClient<$Result.GetResult<Prisma.$UserStoreReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserStoreReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoreReviewFindFirstOrThrowArgs} args - Arguments to find a UserStoreReview
     * @example
     * // Get one UserStoreReview
     * const userStoreReview = await prisma.userStoreReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStoreReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, UserStoreReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserStoreReviewClient<$Result.GetResult<Prisma.$UserStoreReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserStoreReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoreReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStoreReviews
     * const userStoreReviews = await prisma.userStoreReview.findMany()
     * 
     * // Get first 10 UserStoreReviews
     * const userStoreReviews = await prisma.userStoreReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStoreReviewWithIdOnly = await prisma.userStoreReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserStoreReviewFindManyArgs>(args?: SelectSubset<T, UserStoreReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStoreReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserStoreReview.
     * @param {UserStoreReviewCreateArgs} args - Arguments to create a UserStoreReview.
     * @example
     * // Create one UserStoreReview
     * const UserStoreReview = await prisma.userStoreReview.create({
     *   data: {
     *     // ... data to create a UserStoreReview
     *   }
     * })
     * 
     */
    create<T extends UserStoreReviewCreateArgs>(args: SelectSubset<T, UserStoreReviewCreateArgs<ExtArgs>>): Prisma__UserStoreReviewClient<$Result.GetResult<Prisma.$UserStoreReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserStoreReviews.
     * @param {UserStoreReviewCreateManyArgs} args - Arguments to create many UserStoreReviews.
     * @example
     * // Create many UserStoreReviews
     * const userStoreReview = await prisma.userStoreReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserStoreReviewCreateManyArgs>(args?: SelectSubset<T, UserStoreReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserStoreReview.
     * @param {UserStoreReviewDeleteArgs} args - Arguments to delete one UserStoreReview.
     * @example
     * // Delete one UserStoreReview
     * const UserStoreReview = await prisma.userStoreReview.delete({
     *   where: {
     *     // ... filter to delete one UserStoreReview
     *   }
     * })
     * 
     */
    delete<T extends UserStoreReviewDeleteArgs>(args: SelectSubset<T, UserStoreReviewDeleteArgs<ExtArgs>>): Prisma__UserStoreReviewClient<$Result.GetResult<Prisma.$UserStoreReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserStoreReview.
     * @param {UserStoreReviewUpdateArgs} args - Arguments to update one UserStoreReview.
     * @example
     * // Update one UserStoreReview
     * const userStoreReview = await prisma.userStoreReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserStoreReviewUpdateArgs>(args: SelectSubset<T, UserStoreReviewUpdateArgs<ExtArgs>>): Prisma__UserStoreReviewClient<$Result.GetResult<Prisma.$UserStoreReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserStoreReviews.
     * @param {UserStoreReviewDeleteManyArgs} args - Arguments to filter UserStoreReviews to delete.
     * @example
     * // Delete a few UserStoreReviews
     * const { count } = await prisma.userStoreReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserStoreReviewDeleteManyArgs>(args?: SelectSubset<T, UserStoreReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStoreReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoreReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStoreReviews
     * const userStoreReview = await prisma.userStoreReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserStoreReviewUpdateManyArgs>(args: SelectSubset<T, UserStoreReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserStoreReview.
     * @param {UserStoreReviewUpsertArgs} args - Arguments to update or create a UserStoreReview.
     * @example
     * // Update or create a UserStoreReview
     * const userStoreReview = await prisma.userStoreReview.upsert({
     *   create: {
     *     // ... data to create a UserStoreReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStoreReview we want to update
     *   }
     * })
     */
    upsert<T extends UserStoreReviewUpsertArgs>(args: SelectSubset<T, UserStoreReviewUpsertArgs<ExtArgs>>): Prisma__UserStoreReviewClient<$Result.GetResult<Prisma.$UserStoreReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserStoreReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoreReviewCountArgs} args - Arguments to filter UserStoreReviews to count.
     * @example
     * // Count the number of UserStoreReviews
     * const count = await prisma.userStoreReview.count({
     *   where: {
     *     // ... the filter for the UserStoreReviews we want to count
     *   }
     * })
    **/
    count<T extends UserStoreReviewCountArgs>(
      args?: Subset<T, UserStoreReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStoreReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStoreReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoreReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserStoreReviewAggregateArgs>(args: Subset<T, UserStoreReviewAggregateArgs>): Prisma.PrismaPromise<GetUserStoreReviewAggregateType<T>>

    /**
     * Group by UserStoreReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStoreReviewGroupByArgs} args - Group by arguments.
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
      T extends UserStoreReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStoreReviewGroupByArgs['orderBy'] }
        : { orderBy?: UserStoreReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserStoreReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStoreReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStoreReview model
   */
  readonly fields: UserStoreReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStoreReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStoreReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserStoreReview model
   */
  interface UserStoreReviewFieldRefs {
    readonly id: FieldRef<"UserStoreReview", 'Int'>
    readonly content: FieldRef<"UserStoreReview", 'String'>
    readonly storeId: FieldRef<"UserStoreReview", 'Int'>
    readonly userId: FieldRef<"UserStoreReview", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserStoreReview findUnique
   */
  export type UserStoreReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoreReview
     */
    select?: UserStoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStoreReview
     */
    omit?: UserStoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserStoreReview to fetch.
     */
    where: UserStoreReviewWhereUniqueInput
  }

  /**
   * UserStoreReview findUniqueOrThrow
   */
  export type UserStoreReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoreReview
     */
    select?: UserStoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStoreReview
     */
    omit?: UserStoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserStoreReview to fetch.
     */
    where: UserStoreReviewWhereUniqueInput
  }

  /**
   * UserStoreReview findFirst
   */
  export type UserStoreReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoreReview
     */
    select?: UserStoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStoreReview
     */
    omit?: UserStoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserStoreReview to fetch.
     */
    where?: UserStoreReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStoreReviews to fetch.
     */
    orderBy?: UserStoreReviewOrderByWithRelationInput | UserStoreReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStoreReviews.
     */
    cursor?: UserStoreReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStoreReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStoreReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStoreReviews.
     */
    distinct?: UserStoreReviewScalarFieldEnum | UserStoreReviewScalarFieldEnum[]
  }

  /**
   * UserStoreReview findFirstOrThrow
   */
  export type UserStoreReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoreReview
     */
    select?: UserStoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStoreReview
     */
    omit?: UserStoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserStoreReview to fetch.
     */
    where?: UserStoreReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStoreReviews to fetch.
     */
    orderBy?: UserStoreReviewOrderByWithRelationInput | UserStoreReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStoreReviews.
     */
    cursor?: UserStoreReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStoreReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStoreReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStoreReviews.
     */
    distinct?: UserStoreReviewScalarFieldEnum | UserStoreReviewScalarFieldEnum[]
  }

  /**
   * UserStoreReview findMany
   */
  export type UserStoreReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoreReview
     */
    select?: UserStoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStoreReview
     */
    omit?: UserStoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreReviewInclude<ExtArgs> | null
    /**
     * Filter, which UserStoreReviews to fetch.
     */
    where?: UserStoreReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStoreReviews to fetch.
     */
    orderBy?: UserStoreReviewOrderByWithRelationInput | UserStoreReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStoreReviews.
     */
    cursor?: UserStoreReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStoreReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStoreReviews.
     */
    skip?: number
    distinct?: UserStoreReviewScalarFieldEnum | UserStoreReviewScalarFieldEnum[]
  }

  /**
   * UserStoreReview create
   */
  export type UserStoreReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoreReview
     */
    select?: UserStoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStoreReview
     */
    omit?: UserStoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a UserStoreReview.
     */
    data: XOR<UserStoreReviewCreateInput, UserStoreReviewUncheckedCreateInput>
  }

  /**
   * UserStoreReview createMany
   */
  export type UserStoreReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStoreReviews.
     */
    data: UserStoreReviewCreateManyInput | UserStoreReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStoreReview update
   */
  export type UserStoreReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoreReview
     */
    select?: UserStoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStoreReview
     */
    omit?: UserStoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a UserStoreReview.
     */
    data: XOR<UserStoreReviewUpdateInput, UserStoreReviewUncheckedUpdateInput>
    /**
     * Choose, which UserStoreReview to update.
     */
    where: UserStoreReviewWhereUniqueInput
  }

  /**
   * UserStoreReview updateMany
   */
  export type UserStoreReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStoreReviews.
     */
    data: XOR<UserStoreReviewUpdateManyMutationInput, UserStoreReviewUncheckedUpdateManyInput>
    /**
     * Filter which UserStoreReviews to update
     */
    where?: UserStoreReviewWhereInput
    /**
     * Limit how many UserStoreReviews to update.
     */
    limit?: number
  }

  /**
   * UserStoreReview upsert
   */
  export type UserStoreReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoreReview
     */
    select?: UserStoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStoreReview
     */
    omit?: UserStoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the UserStoreReview to update in case it exists.
     */
    where: UserStoreReviewWhereUniqueInput
    /**
     * In case the UserStoreReview found by the `where` argument doesn't exist, create a new UserStoreReview with this data.
     */
    create: XOR<UserStoreReviewCreateInput, UserStoreReviewUncheckedCreateInput>
    /**
     * In case the UserStoreReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStoreReviewUpdateInput, UserStoreReviewUncheckedUpdateInput>
  }

  /**
   * UserStoreReview delete
   */
  export type UserStoreReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoreReview
     */
    select?: UserStoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStoreReview
     */
    omit?: UserStoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreReviewInclude<ExtArgs> | null
    /**
     * Filter which UserStoreReview to delete.
     */
    where: UserStoreReviewWhereUniqueInput
  }

  /**
   * UserStoreReview deleteMany
   */
  export type UserStoreReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStoreReviews to delete
     */
    where?: UserStoreReviewWhereInput
    /**
     * Limit how many UserStoreReviews to delete.
     */
    limit?: number
  }

  /**
   * UserStoreReview without action
   */
  export type UserStoreReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStoreReview
     */
    select?: UserStoreReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserStoreReview
     */
    omit?: UserStoreReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStoreReviewInclude<ExtArgs> | null
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
    id: 'id',
    email: 'email',
    name: 'name',
    gender: 'gender',
    birth: 'birth',
    address: 'address',
    detailAddress: 'detailAddress',
    phoneNumber: 'phoneNumber'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FoodCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type FoodCategoryScalarFieldEnum = (typeof FoodCategoryScalarFieldEnum)[keyof typeof FoodCategoryScalarFieldEnum]


  export const UserFavorCategoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    foodCategoryId: 'foodCategoryId'
  };

  export type UserFavorCategoryScalarFieldEnum = (typeof UserFavorCategoryScalarFieldEnum)[keyof typeof UserFavorCategoryScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const UserStoreReviewScalarFieldEnum: {
    id: 'id',
    content: 'content',
    storeId: 'storeId',
    userId: 'userId'
  };

  export type UserStoreReviewScalarFieldEnum = (typeof UserStoreReviewScalarFieldEnum)[keyof typeof UserStoreReviewScalarFieldEnum]


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


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    name: 'name',
    gender: 'gender',
    address: 'address',
    detailAddress: 'detailAddress',
    phoneNumber: 'phoneNumber'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const FoodCategoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type FoodCategoryOrderByRelevanceFieldEnum = (typeof FoodCategoryOrderByRelevanceFieldEnum)[keyof typeof FoodCategoryOrderByRelevanceFieldEnum]


  export const StoreOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type StoreOrderByRelevanceFieldEnum = (typeof StoreOrderByRelevanceFieldEnum)[keyof typeof StoreOrderByRelevanceFieldEnum]


  export const UserStoreReviewOrderByRelevanceFieldEnum: {
    content: 'content'
  };

  export type UserStoreReviewOrderByRelevanceFieldEnum = (typeof UserStoreReviewOrderByRelevanceFieldEnum)[keyof typeof UserStoreReviewOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


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
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    birth?: DateTimeFilter<"User"> | Date | string
    address?: StringFilter<"User"> | string
    detailAddress?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringFilter<"User"> | string
    userFavorCategories?: UserFavorCategoryListRelationFilter
    reviews?: UserStoreReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    detailAddress?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    userFavorCategories?: UserFavorCategoryOrderByRelationAggregateInput
    reviews?: UserStoreReviewOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    birth?: DateTimeFilter<"User"> | Date | string
    address?: StringFilter<"User"> | string
    detailAddress?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringFilter<"User"> | string
    userFavorCategories?: UserFavorCategoryListRelationFilter
    reviews?: UserStoreReviewListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    detailAddress?: SortOrderInput | SortOrder
    phoneNumber?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    gender?: StringWithAggregatesFilter<"User"> | string
    birth?: DateTimeWithAggregatesFilter<"User"> | Date | string
    address?: StringWithAggregatesFilter<"User"> | string
    detailAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
  }

  export type FoodCategoryWhereInput = {
    AND?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    OR?: FoodCategoryWhereInput[]
    NOT?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    id?: IntFilter<"FoodCategory"> | number
    name?: StringFilter<"FoodCategory"> | string
    userFavorCategories?: UserFavorCategoryListRelationFilter
  }

  export type FoodCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userFavorCategories?: UserFavorCategoryOrderByRelationAggregateInput
    _relevance?: FoodCategoryOrderByRelevanceInput
  }

  export type FoodCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    OR?: FoodCategoryWhereInput[]
    NOT?: FoodCategoryWhereInput | FoodCategoryWhereInput[]
    name?: StringFilter<"FoodCategory"> | string
    userFavorCategories?: UserFavorCategoryListRelationFilter
  }, "id">

  export type FoodCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: FoodCategoryCountOrderByAggregateInput
    _avg?: FoodCategoryAvgOrderByAggregateInput
    _max?: FoodCategoryMaxOrderByAggregateInput
    _min?: FoodCategoryMinOrderByAggregateInput
    _sum?: FoodCategorySumOrderByAggregateInput
  }

  export type FoodCategoryScalarWhereWithAggregatesInput = {
    AND?: FoodCategoryScalarWhereWithAggregatesInput | FoodCategoryScalarWhereWithAggregatesInput[]
    OR?: FoodCategoryScalarWhereWithAggregatesInput[]
    NOT?: FoodCategoryScalarWhereWithAggregatesInput | FoodCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FoodCategory"> | number
    name?: StringWithAggregatesFilter<"FoodCategory"> | string
  }

  export type UserFavorCategoryWhereInput = {
    AND?: UserFavorCategoryWhereInput | UserFavorCategoryWhereInput[]
    OR?: UserFavorCategoryWhereInput[]
    NOT?: UserFavorCategoryWhereInput | UserFavorCategoryWhereInput[]
    id?: IntFilter<"UserFavorCategory"> | number
    userId?: IntFilter<"UserFavorCategory"> | number
    foodCategoryId?: IntFilter<"UserFavorCategory"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    foodCategory?: XOR<FoodCategoryScalarRelationFilter, FoodCategoryWhereInput>
  }

  export type UserFavorCategoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    foodCategoryId?: SortOrder
    user?: UserOrderByWithRelationInput
    foodCategory?: FoodCategoryOrderByWithRelationInput
  }

  export type UserFavorCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserFavorCategoryWhereInput | UserFavorCategoryWhereInput[]
    OR?: UserFavorCategoryWhereInput[]
    NOT?: UserFavorCategoryWhereInput | UserFavorCategoryWhereInput[]
    userId?: IntFilter<"UserFavorCategory"> | number
    foodCategoryId?: IntFilter<"UserFavorCategory"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    foodCategory?: XOR<FoodCategoryScalarRelationFilter, FoodCategoryWhereInput>
  }, "id">

  export type UserFavorCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    foodCategoryId?: SortOrder
    _count?: UserFavorCategoryCountOrderByAggregateInput
    _avg?: UserFavorCategoryAvgOrderByAggregateInput
    _max?: UserFavorCategoryMaxOrderByAggregateInput
    _min?: UserFavorCategoryMinOrderByAggregateInput
    _sum?: UserFavorCategorySumOrderByAggregateInput
  }

  export type UserFavorCategoryScalarWhereWithAggregatesInput = {
    AND?: UserFavorCategoryScalarWhereWithAggregatesInput | UserFavorCategoryScalarWhereWithAggregatesInput[]
    OR?: UserFavorCategoryScalarWhereWithAggregatesInput[]
    NOT?: UserFavorCategoryScalarWhereWithAggregatesInput | UserFavorCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserFavorCategory"> | number
    userId?: IntWithAggregatesFilter<"UserFavorCategory"> | number
    foodCategoryId?: IntWithAggregatesFilter<"UserFavorCategory"> | number
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: IntFilter<"Store"> | number
    name?: StringFilter<"Store"> | string
    reviews?: UserStoreReviewListRelationFilter
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    reviews?: UserStoreReviewOrderByRelationAggregateInput
    _relevance?: StoreOrderByRelevanceInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    name?: StringFilter<"Store"> | string
    reviews?: UserStoreReviewListRelationFilter
  }, "id">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Store"> | number
    name?: StringWithAggregatesFilter<"Store"> | string
  }

  export type UserStoreReviewWhereInput = {
    AND?: UserStoreReviewWhereInput | UserStoreReviewWhereInput[]
    OR?: UserStoreReviewWhereInput[]
    NOT?: UserStoreReviewWhereInput | UserStoreReviewWhereInput[]
    id?: IntFilter<"UserStoreReview"> | number
    content?: StringFilter<"UserStoreReview"> | string
    storeId?: IntFilter<"UserStoreReview"> | number
    userId?: IntFilter<"UserStoreReview"> | number
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserStoreReviewOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    storeId?: SortOrder
    userId?: SortOrder
    store?: StoreOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: UserStoreReviewOrderByRelevanceInput
  }

  export type UserStoreReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserStoreReviewWhereInput | UserStoreReviewWhereInput[]
    OR?: UserStoreReviewWhereInput[]
    NOT?: UserStoreReviewWhereInput | UserStoreReviewWhereInput[]
    content?: StringFilter<"UserStoreReview"> | string
    storeId?: IntFilter<"UserStoreReview"> | number
    userId?: IntFilter<"UserStoreReview"> | number
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserStoreReviewOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    storeId?: SortOrder
    userId?: SortOrder
    _count?: UserStoreReviewCountOrderByAggregateInput
    _avg?: UserStoreReviewAvgOrderByAggregateInput
    _max?: UserStoreReviewMaxOrderByAggregateInput
    _min?: UserStoreReviewMinOrderByAggregateInput
    _sum?: UserStoreReviewSumOrderByAggregateInput
  }

  export type UserStoreReviewScalarWhereWithAggregatesInput = {
    AND?: UserStoreReviewScalarWhereWithAggregatesInput | UserStoreReviewScalarWhereWithAggregatesInput[]
    OR?: UserStoreReviewScalarWhereWithAggregatesInput[]
    NOT?: UserStoreReviewScalarWhereWithAggregatesInput | UserStoreReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserStoreReview"> | number
    content?: StringWithAggregatesFilter<"UserStoreReview"> | string
    storeId?: IntWithAggregatesFilter<"UserStoreReview"> | number
    userId?: IntWithAggregatesFilter<"UserStoreReview"> | number
  }

  export type UserCreateInput = {
    email: string
    name: string
    gender: string
    birth: Date | string
    address: string
    detailAddress?: string | null
    phoneNumber: string
    userFavorCategories?: UserFavorCategoryCreateNestedManyWithoutUserInput
    reviews?: UserStoreReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    gender: string
    birth: Date | string
    address: string
    detailAddress?: string | null
    phoneNumber: string
    userFavorCategories?: UserFavorCategoryUncheckedCreateNestedManyWithoutUserInput
    reviews?: UserStoreReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userFavorCategories?: UserFavorCategoryUpdateManyWithoutUserNestedInput
    reviews?: UserStoreReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userFavorCategories?: UserFavorCategoryUncheckedUpdateManyWithoutUserNestedInput
    reviews?: UserStoreReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    gender: string
    birth: Date | string
    address: string
    detailAddress?: string | null
    phoneNumber: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type FoodCategoryCreateInput = {
    name: string
    userFavorCategories?: UserFavorCategoryCreateNestedManyWithoutFoodCategoryInput
  }

  export type FoodCategoryUncheckedCreateInput = {
    id?: number
    name: string
    userFavorCategories?: UserFavorCategoryUncheckedCreateNestedManyWithoutFoodCategoryInput
  }

  export type FoodCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    userFavorCategories?: UserFavorCategoryUpdateManyWithoutFoodCategoryNestedInput
  }

  export type FoodCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userFavorCategories?: UserFavorCategoryUncheckedUpdateManyWithoutFoodCategoryNestedInput
  }

  export type FoodCategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type FoodCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FoodCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserFavorCategoryCreateInput = {
    user: UserCreateNestedOneWithoutUserFavorCategoriesInput
    foodCategory: FoodCategoryCreateNestedOneWithoutUserFavorCategoriesInput
  }

  export type UserFavorCategoryUncheckedCreateInput = {
    id?: number
    userId: number
    foodCategoryId: number
  }

  export type UserFavorCategoryUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserFavorCategoriesNestedInput
    foodCategory?: FoodCategoryUpdateOneRequiredWithoutUserFavorCategoriesNestedInput
  }

  export type UserFavorCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    foodCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type UserFavorCategoryCreateManyInput = {
    id?: number
    userId: number
    foodCategoryId: number
  }

  export type UserFavorCategoryUpdateManyMutationInput = {

  }

  export type UserFavorCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    foodCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type StoreCreateInput = {
    name: string
    reviews?: UserStoreReviewCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateInput = {
    id?: number
    name: string
    reviews?: UserStoreReviewUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    reviews?: UserStoreReviewUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    reviews?: UserStoreReviewUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id?: number
    name: string
  }

  export type StoreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserStoreReviewCreateInput = {
    content: string
    store: StoreCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type UserStoreReviewUncheckedCreateInput = {
    id?: number
    content: string
    storeId: number
    userId: number
  }

  export type UserStoreReviewUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    store?: StoreUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type UserStoreReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserStoreReviewCreateManyInput = {
    id?: number
    content: string
    storeId: number
    userId: number
  }

  export type UserStoreReviewUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
  }

  export type UserStoreReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserFavorCategoryListRelationFilter = {
    every?: UserFavorCategoryWhereInput
    some?: UserFavorCategoryWhereInput
    none?: UserFavorCategoryWhereInput
  }

  export type UserStoreReviewListRelationFilter = {
    every?: UserStoreReviewWhereInput
    some?: UserStoreReviewWhereInput
    none?: UserStoreReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserFavorCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserStoreReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    detailAddress?: SortOrder
    phoneNumber?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    detailAddress?: SortOrder
    phoneNumber?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birth?: SortOrder
    address?: SortOrder
    detailAddress?: SortOrder
    phoneNumber?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FoodCategoryOrderByRelevanceInput = {
    fields: FoodCategoryOrderByRelevanceFieldEnum | FoodCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FoodCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FoodCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FoodCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FoodCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FoodCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FoodCategoryScalarRelationFilter = {
    is?: FoodCategoryWhereInput
    isNot?: FoodCategoryWhereInput
  }

  export type UserFavorCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodCategoryId?: SortOrder
  }

  export type UserFavorCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodCategoryId?: SortOrder
  }

  export type UserFavorCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodCategoryId?: SortOrder
  }

  export type UserFavorCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodCategoryId?: SortOrder
  }

  export type UserFavorCategorySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    foodCategoryId?: SortOrder
  }

  export type StoreOrderByRelevanceInput = {
    fields: StoreOrderByRelevanceFieldEnum | StoreOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StoreScalarRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type UserStoreReviewOrderByRelevanceInput = {
    fields: UserStoreReviewOrderByRelevanceFieldEnum | UserStoreReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserStoreReviewCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    storeId?: SortOrder
    userId?: SortOrder
  }

  export type UserStoreReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    userId?: SortOrder
  }

  export type UserStoreReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    storeId?: SortOrder
    userId?: SortOrder
  }

  export type UserStoreReviewMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    storeId?: SortOrder
    userId?: SortOrder
  }

  export type UserStoreReviewSumOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    userId?: SortOrder
  }

  export type UserFavorCategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavorCategoryCreateWithoutUserInput, UserFavorCategoryUncheckedCreateWithoutUserInput> | UserFavorCategoryCreateWithoutUserInput[] | UserFavorCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavorCategoryCreateOrConnectWithoutUserInput | UserFavorCategoryCreateOrConnectWithoutUserInput[]
    createMany?: UserFavorCategoryCreateManyUserInputEnvelope
    connect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
  }

  export type UserStoreReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStoreReviewCreateWithoutUserInput, UserStoreReviewUncheckedCreateWithoutUserInput> | UserStoreReviewCreateWithoutUserInput[] | UserStoreReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStoreReviewCreateOrConnectWithoutUserInput | UserStoreReviewCreateOrConnectWithoutUserInput[]
    createMany?: UserStoreReviewCreateManyUserInputEnvelope
    connect?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
  }

  export type UserFavorCategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavorCategoryCreateWithoutUserInput, UserFavorCategoryUncheckedCreateWithoutUserInput> | UserFavorCategoryCreateWithoutUserInput[] | UserFavorCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavorCategoryCreateOrConnectWithoutUserInput | UserFavorCategoryCreateOrConnectWithoutUserInput[]
    createMany?: UserFavorCategoryCreateManyUserInputEnvelope
    connect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
  }

  export type UserStoreReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserStoreReviewCreateWithoutUserInput, UserStoreReviewUncheckedCreateWithoutUserInput> | UserStoreReviewCreateWithoutUserInput[] | UserStoreReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStoreReviewCreateOrConnectWithoutUserInput | UserStoreReviewCreateOrConnectWithoutUserInput[]
    createMany?: UserStoreReviewCreateManyUserInputEnvelope
    connect?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserFavorCategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavorCategoryCreateWithoutUserInput, UserFavorCategoryUncheckedCreateWithoutUserInput> | UserFavorCategoryCreateWithoutUserInput[] | UserFavorCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavorCategoryCreateOrConnectWithoutUserInput | UserFavorCategoryCreateOrConnectWithoutUserInput[]
    upsert?: UserFavorCategoryUpsertWithWhereUniqueWithoutUserInput | UserFavorCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavorCategoryCreateManyUserInputEnvelope
    set?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    disconnect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    delete?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    connect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    update?: UserFavorCategoryUpdateWithWhereUniqueWithoutUserInput | UserFavorCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavorCategoryUpdateManyWithWhereWithoutUserInput | UserFavorCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavorCategoryScalarWhereInput | UserFavorCategoryScalarWhereInput[]
  }

  export type UserStoreReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStoreReviewCreateWithoutUserInput, UserStoreReviewUncheckedCreateWithoutUserInput> | UserStoreReviewCreateWithoutUserInput[] | UserStoreReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStoreReviewCreateOrConnectWithoutUserInput | UserStoreReviewCreateOrConnectWithoutUserInput[]
    upsert?: UserStoreReviewUpsertWithWhereUniqueWithoutUserInput | UserStoreReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStoreReviewCreateManyUserInputEnvelope
    set?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
    disconnect?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
    delete?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
    connect?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
    update?: UserStoreReviewUpdateWithWhereUniqueWithoutUserInput | UserStoreReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStoreReviewUpdateManyWithWhereWithoutUserInput | UserStoreReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStoreReviewScalarWhereInput | UserStoreReviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserFavorCategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavorCategoryCreateWithoutUserInput, UserFavorCategoryUncheckedCreateWithoutUserInput> | UserFavorCategoryCreateWithoutUserInput[] | UserFavorCategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavorCategoryCreateOrConnectWithoutUserInput | UserFavorCategoryCreateOrConnectWithoutUserInput[]
    upsert?: UserFavorCategoryUpsertWithWhereUniqueWithoutUserInput | UserFavorCategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavorCategoryCreateManyUserInputEnvelope
    set?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    disconnect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    delete?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    connect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    update?: UserFavorCategoryUpdateWithWhereUniqueWithoutUserInput | UserFavorCategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavorCategoryUpdateManyWithWhereWithoutUserInput | UserFavorCategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavorCategoryScalarWhereInput | UserFavorCategoryScalarWhereInput[]
  }

  export type UserStoreReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserStoreReviewCreateWithoutUserInput, UserStoreReviewUncheckedCreateWithoutUserInput> | UserStoreReviewCreateWithoutUserInput[] | UserStoreReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserStoreReviewCreateOrConnectWithoutUserInput | UserStoreReviewCreateOrConnectWithoutUserInput[]
    upsert?: UserStoreReviewUpsertWithWhereUniqueWithoutUserInput | UserStoreReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserStoreReviewCreateManyUserInputEnvelope
    set?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
    disconnect?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
    delete?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
    connect?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
    update?: UserStoreReviewUpdateWithWhereUniqueWithoutUserInput | UserStoreReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserStoreReviewUpdateManyWithWhereWithoutUserInput | UserStoreReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserStoreReviewScalarWhereInput | UserStoreReviewScalarWhereInput[]
  }

  export type UserFavorCategoryCreateNestedManyWithoutFoodCategoryInput = {
    create?: XOR<UserFavorCategoryCreateWithoutFoodCategoryInput, UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput> | UserFavorCategoryCreateWithoutFoodCategoryInput[] | UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput[]
    connectOrCreate?: UserFavorCategoryCreateOrConnectWithoutFoodCategoryInput | UserFavorCategoryCreateOrConnectWithoutFoodCategoryInput[]
    createMany?: UserFavorCategoryCreateManyFoodCategoryInputEnvelope
    connect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
  }

  export type UserFavorCategoryUncheckedCreateNestedManyWithoutFoodCategoryInput = {
    create?: XOR<UserFavorCategoryCreateWithoutFoodCategoryInput, UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput> | UserFavorCategoryCreateWithoutFoodCategoryInput[] | UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput[]
    connectOrCreate?: UserFavorCategoryCreateOrConnectWithoutFoodCategoryInput | UserFavorCategoryCreateOrConnectWithoutFoodCategoryInput[]
    createMany?: UserFavorCategoryCreateManyFoodCategoryInputEnvelope
    connect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
  }

  export type UserFavorCategoryUpdateManyWithoutFoodCategoryNestedInput = {
    create?: XOR<UserFavorCategoryCreateWithoutFoodCategoryInput, UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput> | UserFavorCategoryCreateWithoutFoodCategoryInput[] | UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput[]
    connectOrCreate?: UserFavorCategoryCreateOrConnectWithoutFoodCategoryInput | UserFavorCategoryCreateOrConnectWithoutFoodCategoryInput[]
    upsert?: UserFavorCategoryUpsertWithWhereUniqueWithoutFoodCategoryInput | UserFavorCategoryUpsertWithWhereUniqueWithoutFoodCategoryInput[]
    createMany?: UserFavorCategoryCreateManyFoodCategoryInputEnvelope
    set?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    disconnect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    delete?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    connect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    update?: UserFavorCategoryUpdateWithWhereUniqueWithoutFoodCategoryInput | UserFavorCategoryUpdateWithWhereUniqueWithoutFoodCategoryInput[]
    updateMany?: UserFavorCategoryUpdateManyWithWhereWithoutFoodCategoryInput | UserFavorCategoryUpdateManyWithWhereWithoutFoodCategoryInput[]
    deleteMany?: UserFavorCategoryScalarWhereInput | UserFavorCategoryScalarWhereInput[]
  }

  export type UserFavorCategoryUncheckedUpdateManyWithoutFoodCategoryNestedInput = {
    create?: XOR<UserFavorCategoryCreateWithoutFoodCategoryInput, UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput> | UserFavorCategoryCreateWithoutFoodCategoryInput[] | UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput[]
    connectOrCreate?: UserFavorCategoryCreateOrConnectWithoutFoodCategoryInput | UserFavorCategoryCreateOrConnectWithoutFoodCategoryInput[]
    upsert?: UserFavorCategoryUpsertWithWhereUniqueWithoutFoodCategoryInput | UserFavorCategoryUpsertWithWhereUniqueWithoutFoodCategoryInput[]
    createMany?: UserFavorCategoryCreateManyFoodCategoryInputEnvelope
    set?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    disconnect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    delete?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    connect?: UserFavorCategoryWhereUniqueInput | UserFavorCategoryWhereUniqueInput[]
    update?: UserFavorCategoryUpdateWithWhereUniqueWithoutFoodCategoryInput | UserFavorCategoryUpdateWithWhereUniqueWithoutFoodCategoryInput[]
    updateMany?: UserFavorCategoryUpdateManyWithWhereWithoutFoodCategoryInput | UserFavorCategoryUpdateManyWithWhereWithoutFoodCategoryInput[]
    deleteMany?: UserFavorCategoryScalarWhereInput | UserFavorCategoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserFavorCategoriesInput = {
    create?: XOR<UserCreateWithoutUserFavorCategoriesInput, UserUncheckedCreateWithoutUserFavorCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFavorCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type FoodCategoryCreateNestedOneWithoutUserFavorCategoriesInput = {
    create?: XOR<FoodCategoryCreateWithoutUserFavorCategoriesInput, FoodCategoryUncheckedCreateWithoutUserFavorCategoriesInput>
    connectOrCreate?: FoodCategoryCreateOrConnectWithoutUserFavorCategoriesInput
    connect?: FoodCategoryWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserFavorCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutUserFavorCategoriesInput, UserUncheckedCreateWithoutUserFavorCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFavorCategoriesInput
    upsert?: UserUpsertWithoutUserFavorCategoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserFavorCategoriesInput, UserUpdateWithoutUserFavorCategoriesInput>, UserUncheckedUpdateWithoutUserFavorCategoriesInput>
  }

  export type FoodCategoryUpdateOneRequiredWithoutUserFavorCategoriesNestedInput = {
    create?: XOR<FoodCategoryCreateWithoutUserFavorCategoriesInput, FoodCategoryUncheckedCreateWithoutUserFavorCategoriesInput>
    connectOrCreate?: FoodCategoryCreateOrConnectWithoutUserFavorCategoriesInput
    upsert?: FoodCategoryUpsertWithoutUserFavorCategoriesInput
    connect?: FoodCategoryWhereUniqueInput
    update?: XOR<XOR<FoodCategoryUpdateToOneWithWhereWithoutUserFavorCategoriesInput, FoodCategoryUpdateWithoutUserFavorCategoriesInput>, FoodCategoryUncheckedUpdateWithoutUserFavorCategoriesInput>
  }

  export type UserStoreReviewCreateNestedManyWithoutStoreInput = {
    create?: XOR<UserStoreReviewCreateWithoutStoreInput, UserStoreReviewUncheckedCreateWithoutStoreInput> | UserStoreReviewCreateWithoutStoreInput[] | UserStoreReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: UserStoreReviewCreateOrConnectWithoutStoreInput | UserStoreReviewCreateOrConnectWithoutStoreInput[]
    createMany?: UserStoreReviewCreateManyStoreInputEnvelope
    connect?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
  }

  export type UserStoreReviewUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<UserStoreReviewCreateWithoutStoreInput, UserStoreReviewUncheckedCreateWithoutStoreInput> | UserStoreReviewCreateWithoutStoreInput[] | UserStoreReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: UserStoreReviewCreateOrConnectWithoutStoreInput | UserStoreReviewCreateOrConnectWithoutStoreInput[]
    createMany?: UserStoreReviewCreateManyStoreInputEnvelope
    connect?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
  }

  export type UserStoreReviewUpdateManyWithoutStoreNestedInput = {
    create?: XOR<UserStoreReviewCreateWithoutStoreInput, UserStoreReviewUncheckedCreateWithoutStoreInput> | UserStoreReviewCreateWithoutStoreInput[] | UserStoreReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: UserStoreReviewCreateOrConnectWithoutStoreInput | UserStoreReviewCreateOrConnectWithoutStoreInput[]
    upsert?: UserStoreReviewUpsertWithWhereUniqueWithoutStoreInput | UserStoreReviewUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: UserStoreReviewCreateManyStoreInputEnvelope
    set?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
    disconnect?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
    delete?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
    connect?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
    update?: UserStoreReviewUpdateWithWhereUniqueWithoutStoreInput | UserStoreReviewUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: UserStoreReviewUpdateManyWithWhereWithoutStoreInput | UserStoreReviewUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: UserStoreReviewScalarWhereInput | UserStoreReviewScalarWhereInput[]
  }

  export type UserStoreReviewUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<UserStoreReviewCreateWithoutStoreInput, UserStoreReviewUncheckedCreateWithoutStoreInput> | UserStoreReviewCreateWithoutStoreInput[] | UserStoreReviewUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: UserStoreReviewCreateOrConnectWithoutStoreInput | UserStoreReviewCreateOrConnectWithoutStoreInput[]
    upsert?: UserStoreReviewUpsertWithWhereUniqueWithoutStoreInput | UserStoreReviewUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: UserStoreReviewCreateManyStoreInputEnvelope
    set?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
    disconnect?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
    delete?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
    connect?: UserStoreReviewWhereUniqueInput | UserStoreReviewWhereUniqueInput[]
    update?: UserStoreReviewUpdateWithWhereUniqueWithoutStoreInput | UserStoreReviewUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: UserStoreReviewUpdateManyWithWhereWithoutStoreInput | UserStoreReviewUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: UserStoreReviewScalarWhereInput | UserStoreReviewScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutReviewsInput = {
    create?: XOR<StoreCreateWithoutReviewsInput, StoreUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutReviewsInput
    connect?: StoreWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<StoreCreateWithoutReviewsInput, StoreUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutReviewsInput
    upsert?: StoreUpsertWithoutReviewsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutReviewsInput, StoreUpdateWithoutReviewsInput>, StoreUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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
    search?: string
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

  export type UserFavorCategoryCreateWithoutUserInput = {
    foodCategory: FoodCategoryCreateNestedOneWithoutUserFavorCategoriesInput
  }

  export type UserFavorCategoryUncheckedCreateWithoutUserInput = {
    id?: number
    foodCategoryId: number
  }

  export type UserFavorCategoryCreateOrConnectWithoutUserInput = {
    where: UserFavorCategoryWhereUniqueInput
    create: XOR<UserFavorCategoryCreateWithoutUserInput, UserFavorCategoryUncheckedCreateWithoutUserInput>
  }

  export type UserFavorCategoryCreateManyUserInputEnvelope = {
    data: UserFavorCategoryCreateManyUserInput | UserFavorCategoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserStoreReviewCreateWithoutUserInput = {
    content: string
    store: StoreCreateNestedOneWithoutReviewsInput
  }

  export type UserStoreReviewUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    storeId: number
  }

  export type UserStoreReviewCreateOrConnectWithoutUserInput = {
    where: UserStoreReviewWhereUniqueInput
    create: XOR<UserStoreReviewCreateWithoutUserInput, UserStoreReviewUncheckedCreateWithoutUserInput>
  }

  export type UserStoreReviewCreateManyUserInputEnvelope = {
    data: UserStoreReviewCreateManyUserInput | UserStoreReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserFavorCategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFavorCategoryWhereUniqueInput
    update: XOR<UserFavorCategoryUpdateWithoutUserInput, UserFavorCategoryUncheckedUpdateWithoutUserInput>
    create: XOR<UserFavorCategoryCreateWithoutUserInput, UserFavorCategoryUncheckedCreateWithoutUserInput>
  }

  export type UserFavorCategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFavorCategoryWhereUniqueInput
    data: XOR<UserFavorCategoryUpdateWithoutUserInput, UserFavorCategoryUncheckedUpdateWithoutUserInput>
  }

  export type UserFavorCategoryUpdateManyWithWhereWithoutUserInput = {
    where: UserFavorCategoryScalarWhereInput
    data: XOR<UserFavorCategoryUpdateManyMutationInput, UserFavorCategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFavorCategoryScalarWhereInput = {
    AND?: UserFavorCategoryScalarWhereInput | UserFavorCategoryScalarWhereInput[]
    OR?: UserFavorCategoryScalarWhereInput[]
    NOT?: UserFavorCategoryScalarWhereInput | UserFavorCategoryScalarWhereInput[]
    id?: IntFilter<"UserFavorCategory"> | number
    userId?: IntFilter<"UserFavorCategory"> | number
    foodCategoryId?: IntFilter<"UserFavorCategory"> | number
  }

  export type UserStoreReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: UserStoreReviewWhereUniqueInput
    update: XOR<UserStoreReviewUpdateWithoutUserInput, UserStoreReviewUncheckedUpdateWithoutUserInput>
    create: XOR<UserStoreReviewCreateWithoutUserInput, UserStoreReviewUncheckedCreateWithoutUserInput>
  }

  export type UserStoreReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: UserStoreReviewWhereUniqueInput
    data: XOR<UserStoreReviewUpdateWithoutUserInput, UserStoreReviewUncheckedUpdateWithoutUserInput>
  }

  export type UserStoreReviewUpdateManyWithWhereWithoutUserInput = {
    where: UserStoreReviewScalarWhereInput
    data: XOR<UserStoreReviewUpdateManyMutationInput, UserStoreReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type UserStoreReviewScalarWhereInput = {
    AND?: UserStoreReviewScalarWhereInput | UserStoreReviewScalarWhereInput[]
    OR?: UserStoreReviewScalarWhereInput[]
    NOT?: UserStoreReviewScalarWhereInput | UserStoreReviewScalarWhereInput[]
    id?: IntFilter<"UserStoreReview"> | number
    content?: StringFilter<"UserStoreReview"> | string
    storeId?: IntFilter<"UserStoreReview"> | number
    userId?: IntFilter<"UserStoreReview"> | number
  }

  export type UserFavorCategoryCreateWithoutFoodCategoryInput = {
    user: UserCreateNestedOneWithoutUserFavorCategoriesInput
  }

  export type UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput = {
    id?: number
    userId: number
  }

  export type UserFavorCategoryCreateOrConnectWithoutFoodCategoryInput = {
    where: UserFavorCategoryWhereUniqueInput
    create: XOR<UserFavorCategoryCreateWithoutFoodCategoryInput, UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput>
  }

  export type UserFavorCategoryCreateManyFoodCategoryInputEnvelope = {
    data: UserFavorCategoryCreateManyFoodCategoryInput | UserFavorCategoryCreateManyFoodCategoryInput[]
    skipDuplicates?: boolean
  }

  export type UserFavorCategoryUpsertWithWhereUniqueWithoutFoodCategoryInput = {
    where: UserFavorCategoryWhereUniqueInput
    update: XOR<UserFavorCategoryUpdateWithoutFoodCategoryInput, UserFavorCategoryUncheckedUpdateWithoutFoodCategoryInput>
    create: XOR<UserFavorCategoryCreateWithoutFoodCategoryInput, UserFavorCategoryUncheckedCreateWithoutFoodCategoryInput>
  }

  export type UserFavorCategoryUpdateWithWhereUniqueWithoutFoodCategoryInput = {
    where: UserFavorCategoryWhereUniqueInput
    data: XOR<UserFavorCategoryUpdateWithoutFoodCategoryInput, UserFavorCategoryUncheckedUpdateWithoutFoodCategoryInput>
  }

  export type UserFavorCategoryUpdateManyWithWhereWithoutFoodCategoryInput = {
    where: UserFavorCategoryScalarWhereInput
    data: XOR<UserFavorCategoryUpdateManyMutationInput, UserFavorCategoryUncheckedUpdateManyWithoutFoodCategoryInput>
  }

  export type UserCreateWithoutUserFavorCategoriesInput = {
    email: string
    name: string
    gender: string
    birth: Date | string
    address: string
    detailAddress?: string | null
    phoneNumber: string
    reviews?: UserStoreReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserFavorCategoriesInput = {
    id?: number
    email: string
    name: string
    gender: string
    birth: Date | string
    address: string
    detailAddress?: string | null
    phoneNumber: string
    reviews?: UserStoreReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserFavorCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserFavorCategoriesInput, UserUncheckedCreateWithoutUserFavorCategoriesInput>
  }

  export type FoodCategoryCreateWithoutUserFavorCategoriesInput = {
    name: string
  }

  export type FoodCategoryUncheckedCreateWithoutUserFavorCategoriesInput = {
    id?: number
    name: string
  }

  export type FoodCategoryCreateOrConnectWithoutUserFavorCategoriesInput = {
    where: FoodCategoryWhereUniqueInput
    create: XOR<FoodCategoryCreateWithoutUserFavorCategoriesInput, FoodCategoryUncheckedCreateWithoutUserFavorCategoriesInput>
  }

  export type UserUpsertWithoutUserFavorCategoriesInput = {
    update: XOR<UserUpdateWithoutUserFavorCategoriesInput, UserUncheckedUpdateWithoutUserFavorCategoriesInput>
    create: XOR<UserCreateWithoutUserFavorCategoriesInput, UserUncheckedCreateWithoutUserFavorCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserFavorCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserFavorCategoriesInput, UserUncheckedUpdateWithoutUserFavorCategoriesInput>
  }

  export type UserUpdateWithoutUserFavorCategoriesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    reviews?: UserStoreReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserFavorCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    reviews?: UserStoreReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FoodCategoryUpsertWithoutUserFavorCategoriesInput = {
    update: XOR<FoodCategoryUpdateWithoutUserFavorCategoriesInput, FoodCategoryUncheckedUpdateWithoutUserFavorCategoriesInput>
    create: XOR<FoodCategoryCreateWithoutUserFavorCategoriesInput, FoodCategoryUncheckedCreateWithoutUserFavorCategoriesInput>
    where?: FoodCategoryWhereInput
  }

  export type FoodCategoryUpdateToOneWithWhereWithoutUserFavorCategoriesInput = {
    where?: FoodCategoryWhereInput
    data: XOR<FoodCategoryUpdateWithoutUserFavorCategoriesInput, FoodCategoryUncheckedUpdateWithoutUserFavorCategoriesInput>
  }

  export type FoodCategoryUpdateWithoutUserFavorCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FoodCategoryUncheckedUpdateWithoutUserFavorCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserStoreReviewCreateWithoutStoreInput = {
    content: string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type UserStoreReviewUncheckedCreateWithoutStoreInput = {
    id?: number
    content: string
    userId: number
  }

  export type UserStoreReviewCreateOrConnectWithoutStoreInput = {
    where: UserStoreReviewWhereUniqueInput
    create: XOR<UserStoreReviewCreateWithoutStoreInput, UserStoreReviewUncheckedCreateWithoutStoreInput>
  }

  export type UserStoreReviewCreateManyStoreInputEnvelope = {
    data: UserStoreReviewCreateManyStoreInput | UserStoreReviewCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type UserStoreReviewUpsertWithWhereUniqueWithoutStoreInput = {
    where: UserStoreReviewWhereUniqueInput
    update: XOR<UserStoreReviewUpdateWithoutStoreInput, UserStoreReviewUncheckedUpdateWithoutStoreInput>
    create: XOR<UserStoreReviewCreateWithoutStoreInput, UserStoreReviewUncheckedCreateWithoutStoreInput>
  }

  export type UserStoreReviewUpdateWithWhereUniqueWithoutStoreInput = {
    where: UserStoreReviewWhereUniqueInput
    data: XOR<UserStoreReviewUpdateWithoutStoreInput, UserStoreReviewUncheckedUpdateWithoutStoreInput>
  }

  export type UserStoreReviewUpdateManyWithWhereWithoutStoreInput = {
    where: UserStoreReviewScalarWhereInput
    data: XOR<UserStoreReviewUpdateManyMutationInput, UserStoreReviewUncheckedUpdateManyWithoutStoreInput>
  }

  export type StoreCreateWithoutReviewsInput = {
    name: string
  }

  export type StoreUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
  }

  export type StoreCreateOrConnectWithoutReviewsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutReviewsInput, StoreUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    email: string
    name: string
    gender: string
    birth: Date | string
    address: string
    detailAddress?: string | null
    phoneNumber: string
    userFavorCategories?: UserFavorCategoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    email: string
    name: string
    gender: string
    birth: Date | string
    address: string
    detailAddress?: string | null
    phoneNumber: string
    userFavorCategories?: UserFavorCategoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type StoreUpsertWithoutReviewsInput = {
    update: XOR<StoreUpdateWithoutReviewsInput, StoreUncheckedUpdateWithoutReviewsInput>
    create: XOR<StoreCreateWithoutReviewsInput, StoreUncheckedCreateWithoutReviewsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutReviewsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutReviewsInput, StoreUncheckedUpdateWithoutReviewsInput>
  }

  export type StoreUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StoreUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userFavorCategories?: UserFavorCategoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: StringFieldUpdateOperationsInput | string
    detailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: StringFieldUpdateOperationsInput | string
    userFavorCategories?: UserFavorCategoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserFavorCategoryCreateManyUserInput = {
    id?: number
    foodCategoryId: number
  }

  export type UserStoreReviewCreateManyUserInput = {
    id?: number
    content: string
    storeId: number
  }

  export type UserFavorCategoryUpdateWithoutUserInput = {
    foodCategory?: FoodCategoryUpdateOneRequiredWithoutUserFavorCategoriesNestedInput
  }

  export type UserFavorCategoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type UserFavorCategoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodCategoryId?: IntFieldUpdateOperationsInput | number
  }

  export type UserStoreReviewUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    store?: StoreUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type UserStoreReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
  }

  export type UserStoreReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    storeId?: IntFieldUpdateOperationsInput | number
  }

  export type UserFavorCategoryCreateManyFoodCategoryInput = {
    id?: number
    userId: number
  }

  export type UserFavorCategoryUpdateWithoutFoodCategoryInput = {
    user?: UserUpdateOneRequiredWithoutUserFavorCategoriesNestedInput
  }

  export type UserFavorCategoryUncheckedUpdateWithoutFoodCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserFavorCategoryUncheckedUpdateManyWithoutFoodCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserStoreReviewCreateManyStoreInput = {
    id?: number
    content: string
    userId: number
  }

  export type UserStoreReviewUpdateWithoutStoreInput = {
    content?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type UserStoreReviewUncheckedUpdateWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserStoreReviewUncheckedUpdateManyWithoutStoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
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