
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  userId: 'userId',
  username: 'username',
  password: 'password',
  createdAt: 'createdAt'
};

exports.Prisma.TargetScalarFieldEnum = {
  targetId: 'targetId',
  username: 'username',
  email: 'email',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AccessLogScalarFieldEnum = {
  logId: 'logId',
  ip: 'ip',
  device: 'device',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  targetId: 'targetId',
  hash: 'hash'
};

exports.Prisma.ExpectedTargetScalarFieldEnum = {
  hash: 'hash',
  email: 'email',
  name: 'name',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Target: 'Target',
  AccessLog: 'AccessLog',
  ExpectedTarget: 'ExpectedTarget'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\zluiz\\Desktop\\Pessoal\\phishing-test\\unipam-phishing-api\\prisma\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyICAgICAgICA9ICJwcmlzbWEtY2xpZW50LWpzIg0KICBvdXRwdXQgICAgICAgICAgPSAiLi9nZW5lcmF0ZWQvY2xpZW50Ig0KICBwcmV2aWV3RmVhdHVyZXMgPSBbImRyaXZlckFkYXB0ZXJzIl0NCn0NCg0KZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyICA9ICJwb3N0Z3Jlc3FsIg0KICB1cmwgICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpDQogIGRpcmVjdFVybCA9IGVudigiRElSRUNUX1VSTCIpDQp9DQoNCm1vZGVsIFVzZXIgew0KICB1c2VySWQgICAgU3RyaW5nICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkNCiAgdXNlcm5hbWUgIFN0cmluZyAgIEBkYi5WYXJDaGFyKDEwMCkNCiAgcGFzc3dvcmQgIFN0cmluZyAgIEBkYi5WYXJDaGFyKDI1MCkNCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KfQ0KDQptb2RlbCBUYXJnZXQgew0KICB0YXJnZXRJZCAgU3RyaW5nICAgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkNCiAgdXNlcm5hbWUgIFN0cmluZyAgICAgIEBkYi5WYXJDaGFyKDE1MCkNCiAgZW1haWwgICAgIFN0cmluZyAgICAgIEBkYi5WYXJDaGFyKDI1NCkNCiAgY3JlYXRlZEF0IERhdGVUaW1lICAgIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkQXQgRGF0ZVRpbWUgICAgQHVwZGF0ZWRBdA0KICBhY2Nlc3NMb2cgQWNjZXNzTG9nW10NCn0NCg0KbW9kZWwgQWNjZXNzTG9nIHsNCiAgbG9nSWQgICAgICAgICAgU3RyaW5nICAgICAgICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpDQogIGlwICAgICAgICAgICAgIFN0cmluZyAgICAgICAgICBAZGIuVmFyQ2hhcigxMDApDQogIGRldmljZSAgICAgICAgIFN0cmluZyAgICAgICAgICBAZGIuVmFyQ2hhcigyMCkNCiAgY3JlYXRlZEF0ICAgICAgRGF0ZVRpbWUgICAgICAgIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkQXQgICAgICBEYXRlVGltZSAgICAgICAgQHVwZGF0ZWRBdA0KICB0YXJnZXRJZCAgICAgICBTdHJpbmc/DQogIGhhc2ggICAgICAgICAgIFN0cmluZz8NCiAgdGFyZ2V0ICAgICAgICAgVGFyZ2V0PyAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt0YXJnZXRJZF0sIHJlZmVyZW5jZXM6IFt0YXJnZXRJZF0pDQogIGV4cGVjdGVkVGFyZ2V0IEV4cGVjdGVkVGFyZ2V0PyBAcmVsYXRpb24oZmllbGRzOiBbaGFzaF0sIHJlZmVyZW5jZXM6IFtoYXNoXSkNCn0NCg0KbW9kZWwgRXhwZWN0ZWRUYXJnZXQgew0KICBoYXNoICAgICAgU3RyaW5nICAgICAgQGlkIEBkYi5WYXJDaGFyKDIwKQ0KICBlbWFpbCAgICAgU3RyaW5nICAgICAgQGRiLlZhckNoYXIoMjU0KQ0KICBuYW1lICAgICAgU3RyaW5nICAgICAgQGRiLlZhckNoYXIoMTUwKQ0KICBjcmVhdGVkQXQgRGF0ZVRpbWUgICAgQGRlZmF1bHQobm93KCkpDQogIGFjY2Vzc0xvZyBBY2Nlc3NMb2dbXQ0KfQ0K",
  "inlineSchemaHash": "7145c81aa258e11c8a76ec74ac9fcdbadf552b2c3448504e49dff41cb3bf52cc"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Target\":{\"dbName\":null,\"fields\":[{\"name\":\"targetId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"accessLog\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AccessLog\",\"relationName\":\"AccessLogToTarget\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"AccessLog\":{\"dbName\":null,\"fields\":[{\"name\":\"logId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ip\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"device\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"targetId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"target\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Target\",\"relationName\":\"AccessLogToTarget\",\"relationFromFields\":[\"targetId\"],\"relationToFields\":[\"targetId\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expectedTarget\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ExpectedTarget\",\"relationName\":\"AccessLogToExpectedTarget\",\"relationFromFields\":[\"hash\"],\"relationToFields\":[\"hash\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ExpectedTarget\":{\"dbName\":null,\"fields\":[{\"name\":\"hash\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accessLog\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AccessLog\",\"relationName\":\"AccessLogToExpectedTarget\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma")
