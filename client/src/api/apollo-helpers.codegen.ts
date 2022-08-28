import {
  FieldPolicy,
  FieldReadFunction,
  TypePolicies,
  TypePolicy,
} from '@apollo/client/cache';
export type CreateInfoKeySpecifier = (
  | 'bookmark'
  | 'nodesCreated'
  | 'relationshipsCreated'
  | CreateInfoKeySpecifier
)[];
export type CreateInfoFieldPolicy = {
  bookmark?: FieldPolicy<any> | FieldReadFunction<any>;
  nodesCreated?: FieldPolicy<any> | FieldReadFunction<any>;
  relationshipsCreated?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateKnowledgesMutationResponseKeySpecifier = (
  | 'info'
  | 'knowledges'
  | CreateKnowledgesMutationResponseKeySpecifier
)[];
export type CreateKnowledgesMutationResponseFieldPolicy = {
  info?: FieldPolicy<any> | FieldReadFunction<any>;
  knowledges?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type CreateUsersMutationResponseKeySpecifier = (
  | 'info'
  | 'users'
  | CreateUsersMutationResponseKeySpecifier
)[];
export type CreateUsersMutationResponseFieldPolicy = {
  info?: FieldPolicy<any> | FieldReadFunction<any>;
  users?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DateTimeAggregateSelectionNonNullableKeySpecifier = (
  | 'max'
  | 'min'
  | DateTimeAggregateSelectionNonNullableKeySpecifier
)[];
export type DateTimeAggregateSelectionNonNullableFieldPolicy = {
  max?: FieldPolicy<any> | FieldReadFunction<any>;
  min?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DateTimeAggregateSelectionNullableKeySpecifier = (
  | 'max'
  | 'min'
  | DateTimeAggregateSelectionNullableKeySpecifier
)[];
export type DateTimeAggregateSelectionNullableFieldPolicy = {
  max?: FieldPolicy<any> | FieldReadFunction<any>;
  min?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type DeleteInfoKeySpecifier = (
  | 'bookmark'
  | 'nodesDeleted'
  | 'relationshipsDeleted'
  | DeleteInfoKeySpecifier
)[];
export type DeleteInfoFieldPolicy = {
  bookmark?: FieldPolicy<any> | FieldReadFunction<any>;
  nodesDeleted?: FieldPolicy<any> | FieldReadFunction<any>;
  relationshipsDeleted?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type IDAggregateSelectionNonNullableKeySpecifier = (
  | 'longest'
  | 'shortest'
  | IDAggregateSelectionNonNullableKeySpecifier
)[];
export type IDAggregateSelectionNonNullableFieldPolicy = {
  longest?: FieldPolicy<any> | FieldReadFunction<any>;
  shortest?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KnowledgeKeySpecifier = (
  | 'children'
  | 'childrenAggregate'
  | 'childrenConnection'
  | 'content'
  | 'createdAt'
  | 'id'
  | 'name'
  | 'parents'
  | 'parentsAggregate'
  | 'parentsConnection'
  | 'updatedAt'
  | KnowledgeKeySpecifier
)[];
export type KnowledgeFieldPolicy = {
  children?: FieldPolicy<any> | FieldReadFunction<any>;
  childrenAggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  childrenConnection?: FieldPolicy<any> | FieldReadFunction<any>;
  content?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  parents?: FieldPolicy<any> | FieldReadFunction<any>;
  parentsAggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  parentsConnection?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KnowledgeAggregateSelectionKeySpecifier = (
  | 'content'
  | 'count'
  | 'createdAt'
  | 'id'
  | 'name'
  | 'updatedAt'
  | KnowledgeAggregateSelectionKeySpecifier
)[];
export type KnowledgeAggregateSelectionFieldPolicy = {
  content?: FieldPolicy<any> | FieldReadFunction<any>;
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KnowledgeChildrenConnectionKeySpecifier = (
  | 'edges'
  | 'pageInfo'
  | 'totalCount'
  | KnowledgeChildrenConnectionKeySpecifier
)[];
export type KnowledgeChildrenConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KnowledgeChildrenRelationshipKeySpecifier = (
  | 'cursor'
  | 'node'
  | KnowledgeChildrenRelationshipKeySpecifier
)[];
export type KnowledgeChildrenRelationshipFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KnowledgeEdgeKeySpecifier = (
  | 'cursor'
  | 'node'
  | KnowledgeEdgeKeySpecifier
)[];
export type KnowledgeEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KnowledgeKnowledgeChildrenAggregationSelectionKeySpecifier = (
  | 'count'
  | 'node'
  | KnowledgeKnowledgeChildrenAggregationSelectionKeySpecifier
)[];
export type KnowledgeKnowledgeChildrenAggregationSelectionFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KnowledgeKnowledgeChildrenNodeAggregateSelectionKeySpecifier = (
  | 'content'
  | 'createdAt'
  | 'id'
  | 'name'
  | 'updatedAt'
  | KnowledgeKnowledgeChildrenNodeAggregateSelectionKeySpecifier
)[];
export type KnowledgeKnowledgeChildrenNodeAggregateSelectionFieldPolicy = {
  content?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KnowledgeKnowledgeParentsAggregationSelectionKeySpecifier = (
  | 'count'
  | 'node'
  | KnowledgeKnowledgeParentsAggregationSelectionKeySpecifier
)[];
export type KnowledgeKnowledgeParentsAggregationSelectionFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KnowledgeKnowledgeParentsNodeAggregateSelectionKeySpecifier = (
  | 'content'
  | 'createdAt'
  | 'id'
  | 'name'
  | 'updatedAt'
  | KnowledgeKnowledgeParentsNodeAggregateSelectionKeySpecifier
)[];
export type KnowledgeKnowledgeParentsNodeAggregateSelectionFieldPolicy = {
  content?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  name?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KnowledgeParentsConnectionKeySpecifier = (
  | 'edges'
  | 'pageInfo'
  | 'totalCount'
  | KnowledgeParentsConnectionKeySpecifier
)[];
export type KnowledgeParentsConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KnowledgeParentsRelationshipKeySpecifier = (
  | 'cursor'
  | 'node'
  | KnowledgeParentsRelationshipKeySpecifier
)[];
export type KnowledgeParentsRelationshipFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type KnowledgesConnectionKeySpecifier = (
  | 'edges'
  | 'pageInfo'
  | 'totalCount'
  | KnowledgesConnectionKeySpecifier
)[];
export type KnowledgesConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type MutationKeySpecifier = (
  | 'createKnowledges'
  | 'createUsers'
  | 'deleteKnowledges'
  | 'deleteUsers'
  | 'signIn'
  | 'signUp'
  | 'updateKnowledges'
  | 'updateUsers'
  | MutationKeySpecifier
)[];
export type MutationFieldPolicy = {
  createKnowledges?: FieldPolicy<any> | FieldReadFunction<any>;
  createUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteKnowledges?: FieldPolicy<any> | FieldReadFunction<any>;
  deleteUsers?: FieldPolicy<any> | FieldReadFunction<any>;
  signIn?: FieldPolicy<any> | FieldReadFunction<any>;
  signUp?: FieldPolicy<any> | FieldReadFunction<any>;
  updateKnowledges?: FieldPolicy<any> | FieldReadFunction<any>;
  updateUsers?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type PageInfoKeySpecifier = (
  | 'endCursor'
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'startCursor'
  | PageInfoKeySpecifier
)[];
export type PageInfoFieldPolicy = {
  endCursor?: FieldPolicy<any> | FieldReadFunction<any>;
  hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>;
  hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>;
  startCursor?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type QueryKeySpecifier = (
  | 'knowledges'
  | 'knowledgesAggregate'
  | 'knowledgesConnection'
  | 'users'
  | 'usersAggregate'
  | 'usersConnection'
  | QueryKeySpecifier
)[];
export type QueryFieldPolicy = {
  knowledges?: FieldPolicy<any> | FieldReadFunction<any>;
  knowledgesAggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  knowledgesConnection?: FieldPolicy<any> | FieldReadFunction<any>;
  users?: FieldPolicy<any> | FieldReadFunction<any>;
  usersAggregate?: FieldPolicy<any> | FieldReadFunction<any>;
  usersConnection?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StringAggregateSelectionNonNullableKeySpecifier = (
  | 'longest'
  | 'shortest'
  | StringAggregateSelectionNonNullableKeySpecifier
)[];
export type StringAggregateSelectionNonNullableFieldPolicy = {
  longest?: FieldPolicy<any> | FieldReadFunction<any>;
  shortest?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateInfoKeySpecifier = (
  | 'bookmark'
  | 'nodesCreated'
  | 'nodesDeleted'
  | 'relationshipsCreated'
  | 'relationshipsDeleted'
  | UpdateInfoKeySpecifier
)[];
export type UpdateInfoFieldPolicy = {
  bookmark?: FieldPolicy<any> | FieldReadFunction<any>;
  nodesCreated?: FieldPolicy<any> | FieldReadFunction<any>;
  nodesDeleted?: FieldPolicy<any> | FieldReadFunction<any>;
  relationshipsCreated?: FieldPolicy<any> | FieldReadFunction<any>;
  relationshipsDeleted?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateKnowledgesMutationResponseKeySpecifier = (
  | 'info'
  | 'knowledges'
  | UpdateKnowledgesMutationResponseKeySpecifier
)[];
export type UpdateKnowledgesMutationResponseFieldPolicy = {
  info?: FieldPolicy<any> | FieldReadFunction<any>;
  knowledges?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UpdateUsersMutationResponseKeySpecifier = (
  | 'info'
  | 'users'
  | UpdateUsersMutationResponseKeySpecifier
)[];
export type UpdateUsersMutationResponseFieldPolicy = {
  info?: FieldPolicy<any> | FieldReadFunction<any>;
  users?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserKeySpecifier = (
  | 'createdAt'
  | 'email'
  | 'id'
  | 'updatedAt'
  | 'username'
  | UserKeySpecifier
)[];
export type UserFieldPolicy = {
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  username?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserAggregateSelectionKeySpecifier = (
  | 'count'
  | 'createdAt'
  | 'email'
  | 'id'
  | 'updatedAt'
  | 'username'
  | UserAggregateSelectionKeySpecifier
)[];
export type UserAggregateSelectionFieldPolicy = {
  count?: FieldPolicy<any> | FieldReadFunction<any>;
  createdAt?: FieldPolicy<any> | FieldReadFunction<any>;
  email?: FieldPolicy<any> | FieldReadFunction<any>;
  id?: FieldPolicy<any> | FieldReadFunction<any>;
  updatedAt?: FieldPolicy<any> | FieldReadFunction<any>;
  username?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UserEdgeKeySpecifier = ('cursor' | 'node' | UserEdgeKeySpecifier)[];
export type UserEdgeFieldPolicy = {
  cursor?: FieldPolicy<any> | FieldReadFunction<any>;
  node?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type UsersConnectionKeySpecifier = (
  | 'edges'
  | 'pageInfo'
  | 'totalCount'
  | UsersConnectionKeySpecifier
)[];
export type UsersConnectionFieldPolicy = {
  edges?: FieldPolicy<any> | FieldReadFunction<any>;
  pageInfo?: FieldPolicy<any> | FieldReadFunction<any>;
  totalCount?: FieldPolicy<any> | FieldReadFunction<any>;
};
export type StrictTypedTypePolicies = {
  CreateInfo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CreateInfoKeySpecifier
      | (() => undefined | CreateInfoKeySpecifier);
    fields?: CreateInfoFieldPolicy;
  };
  CreateKnowledgesMutationResponse?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | CreateKnowledgesMutationResponseKeySpecifier
      | (() => undefined | CreateKnowledgesMutationResponseKeySpecifier);
    fields?: CreateKnowledgesMutationResponseFieldPolicy;
  };
  CreateUsersMutationResponse?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | CreateUsersMutationResponseKeySpecifier
      | (() => undefined | CreateUsersMutationResponseKeySpecifier);
    fields?: CreateUsersMutationResponseFieldPolicy;
  };
  DateTimeAggregateSelectionNonNullable?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | DateTimeAggregateSelectionNonNullableKeySpecifier
      | (() => undefined | DateTimeAggregateSelectionNonNullableKeySpecifier);
    fields?: DateTimeAggregateSelectionNonNullableFieldPolicy;
  };
  DateTimeAggregateSelectionNullable?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | DateTimeAggregateSelectionNullableKeySpecifier
      | (() => undefined | DateTimeAggregateSelectionNullableKeySpecifier);
    fields?: DateTimeAggregateSelectionNullableFieldPolicy;
  };
  DeleteInfo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | DeleteInfoKeySpecifier
      | (() => undefined | DeleteInfoKeySpecifier);
    fields?: DeleteInfoFieldPolicy;
  };
  IDAggregateSelectionNonNullable?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | IDAggregateSelectionNonNullableKeySpecifier
      | (() => undefined | IDAggregateSelectionNonNullableKeySpecifier);
    fields?: IDAggregateSelectionNonNullableFieldPolicy;
  };
  Knowledge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | KnowledgeKeySpecifier
      | (() => undefined | KnowledgeKeySpecifier);
    fields?: KnowledgeFieldPolicy;
  };
  KnowledgeAggregateSelection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | KnowledgeAggregateSelectionKeySpecifier
      | (() => undefined | KnowledgeAggregateSelectionKeySpecifier);
    fields?: KnowledgeAggregateSelectionFieldPolicy;
  };
  KnowledgeChildrenConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | KnowledgeChildrenConnectionKeySpecifier
      | (() => undefined | KnowledgeChildrenConnectionKeySpecifier);
    fields?: KnowledgeChildrenConnectionFieldPolicy;
  };
  KnowledgeChildrenRelationship?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | KnowledgeChildrenRelationshipKeySpecifier
      | (() => undefined | KnowledgeChildrenRelationshipKeySpecifier);
    fields?: KnowledgeChildrenRelationshipFieldPolicy;
  };
  KnowledgeEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | KnowledgeEdgeKeySpecifier
      | (() => undefined | KnowledgeEdgeKeySpecifier);
    fields?: KnowledgeEdgeFieldPolicy;
  };
  KnowledgeKnowledgeChildrenAggregationSelection?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | KnowledgeKnowledgeChildrenAggregationSelectionKeySpecifier
      | (() =>
          | undefined
          | KnowledgeKnowledgeChildrenAggregationSelectionKeySpecifier);
    fields?: KnowledgeKnowledgeChildrenAggregationSelectionFieldPolicy;
  };
  KnowledgeKnowledgeChildrenNodeAggregateSelection?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | KnowledgeKnowledgeChildrenNodeAggregateSelectionKeySpecifier
      | (() =>
          | undefined
          | KnowledgeKnowledgeChildrenNodeAggregateSelectionKeySpecifier);
    fields?: KnowledgeKnowledgeChildrenNodeAggregateSelectionFieldPolicy;
  };
  KnowledgeKnowledgeParentsAggregationSelection?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | KnowledgeKnowledgeParentsAggregationSelectionKeySpecifier
      | (() =>
          | undefined
          | KnowledgeKnowledgeParentsAggregationSelectionKeySpecifier);
    fields?: KnowledgeKnowledgeParentsAggregationSelectionFieldPolicy;
  };
  KnowledgeKnowledgeParentsNodeAggregateSelection?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | KnowledgeKnowledgeParentsNodeAggregateSelectionKeySpecifier
      | (() =>
          | undefined
          | KnowledgeKnowledgeParentsNodeAggregateSelectionKeySpecifier);
    fields?: KnowledgeKnowledgeParentsNodeAggregateSelectionFieldPolicy;
  };
  KnowledgeParentsConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | KnowledgeParentsConnectionKeySpecifier
      | (() => undefined | KnowledgeParentsConnectionKeySpecifier);
    fields?: KnowledgeParentsConnectionFieldPolicy;
  };
  KnowledgeParentsRelationship?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | KnowledgeParentsRelationshipKeySpecifier
      | (() => undefined | KnowledgeParentsRelationshipKeySpecifier);
    fields?: KnowledgeParentsRelationshipFieldPolicy;
  };
  KnowledgesConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | KnowledgesConnectionKeySpecifier
      | (() => undefined | KnowledgesConnectionKeySpecifier);
    fields?: KnowledgesConnectionFieldPolicy;
  };
  Mutation?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | MutationKeySpecifier
      | (() => undefined | MutationKeySpecifier);
    fields?: MutationFieldPolicy;
  };
  PageInfo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | PageInfoKeySpecifier
      | (() => undefined | PageInfoKeySpecifier);
    fields?: PageInfoFieldPolicy;
  };
  Query?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | QueryKeySpecifier
      | (() => undefined | QueryKeySpecifier);
    fields?: QueryFieldPolicy;
  };
  StringAggregateSelectionNonNullable?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | StringAggregateSelectionNonNullableKeySpecifier
      | (() => undefined | StringAggregateSelectionNonNullableKeySpecifier);
    fields?: StringAggregateSelectionNonNullableFieldPolicy;
  };
  UpdateInfo?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UpdateInfoKeySpecifier
      | (() => undefined | UpdateInfoKeySpecifier);
    fields?: UpdateInfoFieldPolicy;
  };
  UpdateKnowledgesMutationResponse?: Omit<
    TypePolicy,
    'fields' | 'keyFields'
  > & {
    keyFields?:
      | false
      | UpdateKnowledgesMutationResponseKeySpecifier
      | (() => undefined | UpdateKnowledgesMutationResponseKeySpecifier);
    fields?: UpdateKnowledgesMutationResponseFieldPolicy;
  };
  UpdateUsersMutationResponse?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UpdateUsersMutationResponseKeySpecifier
      | (() => undefined | UpdateUsersMutationResponseKeySpecifier);
    fields?: UpdateUsersMutationResponseFieldPolicy;
  };
  User?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier);
    fields?: UserFieldPolicy;
  };
  UserAggregateSelection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UserAggregateSelectionKeySpecifier
      | (() => undefined | UserAggregateSelectionKeySpecifier);
    fields?: UserAggregateSelectionFieldPolicy;
  };
  UserEdge?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UserEdgeKeySpecifier
      | (() => undefined | UserEdgeKeySpecifier);
    fields?: UserEdgeFieldPolicy;
  };
  UsersConnection?: Omit<TypePolicy, 'fields' | 'keyFields'> & {
    keyFields?:
      | false
      | UsersConnectionKeySpecifier
      | (() => undefined | UsersConnectionKeySpecifier);
    fields?: UsersConnectionFieldPolicy;
  };
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;
