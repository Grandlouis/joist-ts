import { imp } from "ts-poet";

export const ProjectEntity = imp(`t:Entity@./entities.ts`);
export const EntityManager = imp("EntityManager@./entities.ts");

export const ConfigApi = imp("ConfigApi@joist-orm");
export const FieldStatus = imp("t:FieldStatus@joist-orm");
export const Entity = imp("t:Entity@joist-orm");
export const BaseEntity = imp("BaseEntity@joist-orm");
export const Flavor = imp("t:Flavor@joist-orm");
export const Reference = imp("t:Reference@joist-orm");
export const Collection = imp("t:Collection@joist-orm");
export const LargeCollection = imp("t:LargeCollection@joist-orm");
export const OneToManyCollection = imp("OneToManyCollection@joist-orm");
export const JoistEntityManager = imp("EntityManager@joist-orm");
export const EntityMetadata = imp("t:EntityMetadata@joist-orm");
export const EnumMetadata = imp("t:EnumMetadata@joist-orm");
export const Lens = imp("t:Lens@joist-orm");
export const KeySerde = imp("KeySerde@joist-orm");
export const ManyToOneReference = imp("t:ManyToOneReference@joist-orm");
export const PolymorphicReference = imp("t:PolymorphicReference@joist-orm");
export const OneToOneReference = imp("t:OneToOneReference@joist-orm");
export const ManyToManyCollection = imp("ManyToManyCollection@joist-orm");
export const EnumFieldSerde = imp("EnumFieldSerde@joist-orm");
export const EnumArrayFieldSerde = imp("EnumArrayFieldSerde@joist-orm");
export const PolymorphicKeySerde = imp("PolymorphicKeySerde@joist-orm");
export const PrimitiveSerde = imp("PrimitiveSerde@joist-orm");
export const BigIntSerde = imp("BigIntSerde@joist-orm");
export const DateSerde = imp("DateSerde@joist-orm");
export const PlainDateSerde = imp("PlainDateSerde@joist-orm");
export const PlainDateTimeSerde = imp("PlainDateTimeSerde@joist-orm");
export const ZonedDateTimeSerde = imp("ZonedDateTimeSerde@joist-orm");
export const JsonSerde = imp("JsonSerde@joist-orm");
export const SuperstructSerde = imp("SuperstructSerde@joist-orm");
export const TaggedId = imp("t:TaggedId@joist-orm");
export const ZodSerde = imp("ZodSerde@joist-orm");
export const CustomSerdeAdapter = imp("CustomSerdeAdapter@joist-orm");
export const DecimalToNumberSerde = imp("DecimalToNumberSerde@joist-orm");
export const fail = imp("fail@joist-orm");
export const failNoIdYet = imp("failNoIdYet@joist-orm");
export const setOpts = imp("setOpts@joist-orm");
export const getField = imp("getField@joist-orm");
export const setField = imp("setField@joist-orm");
export const OrderBy = imp("t:OrderBy@joist-orm");
export const OptsOf = imp("t:OptsOf@joist-orm");
export const FieldsOf = imp("t:FieldsOf@joist-orm");
export const RelationsOf = imp("t:RelationsOf@joist-orm");
export const IdOf = imp("t:IdOf@joist-orm");
export const PartialOrNull = imp("t:PartialOrNull@joist-orm");
export const BooleanFilter = imp("t:BooleanFilter@joist-orm");
export const ValueFilter = imp("t:ValueFilter@joist-orm");
export const EntityFilter = imp("t:EntityFilter@joist-orm");
export const BooleanGraphQLFilter = imp("t:BooleanGraphQLFilter@joist-orm");
export const EntityGraphQLFilter = imp("t:EntityGraphQLFilter@joist-orm");
export const EnumGraphQLFilter = imp("t:EnumGraphQLFilter@joist-orm");
export const ValueGraphQLFilter = imp("t:ValueGraphQLFilter@joist-orm");
export const FilterOf = imp("t:FilterOf@joist-orm");
export const GraphQLFilterOf = imp("t:GraphQLFilterOf@joist-orm");
export const JsonHint = imp("t:JsonHint@joist-orm");
export const ToJsonHint = imp("t:ToJsonHint@joist-orm");
export const JsonPayload = imp("t:JsonPayload@joist-orm");
export const configureMetadata = imp("configureMetadata@joist-orm");
export const newRequiredRule = imp("newRequiredRule@joist-orm");
export const cannotBeUpdated = imp("cannotBeUpdated@joist-orm");
export const mustBeSubType = imp("mustBeSubType@joist-orm");
export const cleanStringValue = imp("cleanStringValue@joist-orm");
export const Changes = imp("t:Changes@joist-orm");
export const newChangesProxy = imp("newChangesProxy@joist-orm");
export const LoadHint = imp("t:LoadHint@joist-orm");
export const Loaded = imp("t:Loaded@joist-orm");
export const isLoaded = imp("isLoaded@joist-orm");
export const getInstanceData = imp("getInstanceData@joist-orm");
export const isEntity = imp("isEntity@joist-orm");
export const loadLens = imp("loadLens@joist-orm");
export const hasOneThrough = imp("hasOneThrough@joist-orm");
export const hasMany = imp("hasMany@joist-orm");
export const hasLargeMany = imp("hasLargeMany@joist-orm");
export const hasOne = imp("hasOne@joist-orm");
export const hasOnePolymorphic = imp("hasOnePolymorphic@joist-orm");
export const hasOneToOne = imp("hasOneToOne@joist-orm");
export const hasManyToMany = imp("hasManyToMany@joist-orm");
export const hasLargeManyToMany = imp("hasLargeManyToMany@joist-orm");
export const newTestInstance = imp("newTestInstance@joist-orm");
export const New = imp("t:New@joist-orm");
export const DeepNew = imp("t:DeepNew@joist-orm");
export const FactoryOpts = imp("t:FactoryOpts@joist-orm");
export const SSAssert = imp("assert@superstruct");
export const Zod = imp("z@zod");
export const EntityConstructor = imp("t:EntityConstructor@joist-orm");
export const MaybeAbstractEntityConstructor = imp("t:MaybeAbstractEntityConstructor@joist-orm");
export const deTagId = imp("deTagId@joist-orm");
export const toIdOf = imp("toIdOf@joist-orm");
export const toJSON = imp("toJSON@joist-orm");
export const ReactiveField = imp("t:ReactiveField@joist-orm");
export const ReactiveReference = imp("t:ReactiveReference@joist-orm");
