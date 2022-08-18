export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
};

export type CreateKnowledgesMutationResponse = {
  __typename?: 'CreateKnowledgesMutationResponse';
  info: CreateInfo;
  knowledges: Array<Knowledge>;
};

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  info: CreateInfo;
  users: Array<User>;
};

export type DateTimeAggregateSelectionNullable = {
  __typename?: 'DateTimeAggregateSelectionNullable';
  max?: Maybe<Scalars['DateTime']>;
  min?: Maybe<Scalars['DateTime']>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type IdAggregateSelectionNonNullable = {
  __typename?: 'IDAggregateSelectionNonNullable';
  longest: Scalars['ID'];
  shortest: Scalars['ID'];
};

export type Knowledge = {
  __typename?: 'Knowledge';
  children: Array<Knowledge>;
  childrenAggregate?: Maybe<KnowledgeKnowledgeChildrenAggregationSelection>;
  childrenConnection: KnowledgeChildrenConnection;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  parents: Array<Knowledge>;
  parentsAggregate?: Maybe<KnowledgeKnowledgeParentsAggregationSelection>;
  parentsConnection: KnowledgeParentsConnection;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type KnowledgeChildrenArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<KnowledgeOptions>;
  where?: InputMaybe<KnowledgeWhere>;
};

export type KnowledgeChildrenAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<KnowledgeWhere>;
};

export type KnowledgeChildrenConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<KnowledgeChildrenConnectionSort>>;
  where?: InputMaybe<KnowledgeChildrenConnectionWhere>;
};

export type KnowledgeParentsArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  options?: InputMaybe<KnowledgeOptions>;
  where?: InputMaybe<KnowledgeWhere>;
};

export type KnowledgeParentsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<KnowledgeWhere>;
};

export type KnowledgeParentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  directed?: InputMaybe<Scalars['Boolean']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<KnowledgeParentsConnectionSort>>;
  where?: InputMaybe<KnowledgeParentsConnectionWhere>;
};

export type KnowledgeAggregateSelection = {
  __typename?: 'KnowledgeAggregateSelection';
  content: StringAggregateSelectionNonNullable;
  count: Scalars['Int'];
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type KnowledgeChildrenAggregateInput = {
  AND?: InputMaybe<Array<KnowledgeChildrenAggregateInput>>;
  OR?: InputMaybe<Array<KnowledgeChildrenAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<KnowledgeChildrenNodeAggregationWhereInput>;
};

export type KnowledgeChildrenConnectFieldInput = {
  connect?: InputMaybe<Array<KnowledgeConnectInput>>;
  where?: InputMaybe<KnowledgeConnectWhere>;
};

export type KnowledgeChildrenConnectOrCreateFieldInput = {
  onCreate: KnowledgeChildrenConnectOrCreateFieldInputOnCreate;
  where: KnowledgeConnectOrCreateWhere;
};

export type KnowledgeChildrenConnectOrCreateFieldInputOnCreate = {
  node: KnowledgeOnCreateInput;
};

export type KnowledgeChildrenConnection = {
  __typename?: 'KnowledgeChildrenConnection';
  edges: Array<KnowledgeChildrenRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type KnowledgeChildrenConnectionSort = {
  node?: InputMaybe<KnowledgeSort>;
};

export type KnowledgeChildrenConnectionWhere = {
  AND?: InputMaybe<Array<KnowledgeChildrenConnectionWhere>>;
  OR?: InputMaybe<Array<KnowledgeChildrenConnectionWhere>>;
  node?: InputMaybe<KnowledgeWhere>;
  node_NOT?: InputMaybe<KnowledgeWhere>;
};

export type KnowledgeChildrenCreateFieldInput = {
  node: KnowledgeCreateInput;
};

export type KnowledgeChildrenDeleteFieldInput = {
  delete?: InputMaybe<KnowledgeDeleteInput>;
  where?: InputMaybe<KnowledgeChildrenConnectionWhere>;
};

export type KnowledgeChildrenDisconnectFieldInput = {
  disconnect?: InputMaybe<KnowledgeDisconnectInput>;
  where?: InputMaybe<KnowledgeChildrenConnectionWhere>;
};

export type KnowledgeChildrenFieldInput = {
  connect?: InputMaybe<Array<KnowledgeChildrenConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<KnowledgeChildrenConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<KnowledgeChildrenCreateFieldInput>>;
};

export type KnowledgeChildrenNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<KnowledgeChildrenNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<KnowledgeChildrenNodeAggregationWhereInput>>;
  content_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  content_EQUAL?: InputMaybe<Scalars['String']>;
  content_GT?: InputMaybe<Scalars['Int']>;
  content_GTE?: InputMaybe<Scalars['Int']>;
  content_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  content_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  content_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  content_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  content_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  content_LT?: InputMaybe<Scalars['Int']>;
  content_LTE?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  updatedAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type KnowledgeChildrenRelationship = {
  __typename?: 'KnowledgeChildrenRelationship';
  cursor: Scalars['String'];
  node: Knowledge;
};

export type KnowledgeChildrenUpdateConnectionInput = {
  node?: InputMaybe<KnowledgeUpdateInput>;
};

export type KnowledgeChildrenUpdateFieldInput = {
  connect?: InputMaybe<Array<KnowledgeChildrenConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<KnowledgeChildrenConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<KnowledgeChildrenCreateFieldInput>>;
  delete?: InputMaybe<Array<KnowledgeChildrenDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<KnowledgeChildrenDisconnectFieldInput>>;
  update?: InputMaybe<KnowledgeChildrenUpdateConnectionInput>;
  where?: InputMaybe<KnowledgeChildrenConnectionWhere>;
};

export type KnowledgeConnectInput = {
  children?: InputMaybe<Array<KnowledgeChildrenConnectFieldInput>>;
  parents?: InputMaybe<Array<KnowledgeParentsConnectFieldInput>>;
};

export type KnowledgeConnectOrCreateInput = {
  children?: InputMaybe<Array<KnowledgeChildrenConnectOrCreateFieldInput>>;
  parents?: InputMaybe<Array<KnowledgeParentsConnectOrCreateFieldInput>>;
};

export type KnowledgeConnectOrCreateWhere = {
  node: KnowledgeUniqueWhere;
};

export type KnowledgeConnectWhere = {
  node: KnowledgeWhere;
};

export type KnowledgeCreateInput = {
  children?: InputMaybe<KnowledgeChildrenFieldInput>;
  content: Scalars['String'];
  name: Scalars['String'];
  parents?: InputMaybe<KnowledgeParentsFieldInput>;
};

export type KnowledgeDeleteInput = {
  children?: InputMaybe<Array<KnowledgeChildrenDeleteFieldInput>>;
  parents?: InputMaybe<Array<KnowledgeParentsDeleteFieldInput>>;
};

export type KnowledgeDisconnectInput = {
  children?: InputMaybe<Array<KnowledgeChildrenDisconnectFieldInput>>;
  parents?: InputMaybe<Array<KnowledgeParentsDisconnectFieldInput>>;
};

export type KnowledgeEdge = {
  __typename?: 'KnowledgeEdge';
  cursor: Scalars['String'];
  node: Knowledge;
};

export type KnowledgeKnowledgeChildrenAggregationSelection = {
  __typename?: 'KnowledgeKnowledgeChildrenAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<KnowledgeKnowledgeChildrenNodeAggregateSelection>;
};

export type KnowledgeKnowledgeChildrenNodeAggregateSelection = {
  __typename?: 'KnowledgeKnowledgeChildrenNodeAggregateSelection';
  content: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type KnowledgeKnowledgeParentsAggregationSelection = {
  __typename?: 'KnowledgeKnowledgeParentsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<KnowledgeKnowledgeParentsNodeAggregateSelection>;
};

export type KnowledgeKnowledgeParentsNodeAggregateSelection = {
  __typename?: 'KnowledgeKnowledgeParentsNodeAggregateSelection';
  content: StringAggregateSelectionNonNullable;
  createdAt: DateTimeAggregateSelectionNullable;
  id: IdAggregateSelectionNonNullable;
  name: StringAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
};

export type KnowledgeOnCreateInput = {
  content: Scalars['String'];
  name: Scalars['String'];
};

export type KnowledgeOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more KnowledgeSort objects to sort Knowledges by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<KnowledgeSort>>;
};

export type KnowledgeParentsAggregateInput = {
  AND?: InputMaybe<Array<KnowledgeParentsAggregateInput>>;
  OR?: InputMaybe<Array<KnowledgeParentsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<KnowledgeParentsNodeAggregationWhereInput>;
};

export type KnowledgeParentsConnectFieldInput = {
  connect?: InputMaybe<Array<KnowledgeConnectInput>>;
  where?: InputMaybe<KnowledgeConnectWhere>;
};

export type KnowledgeParentsConnectOrCreateFieldInput = {
  onCreate: KnowledgeParentsConnectOrCreateFieldInputOnCreate;
  where: KnowledgeConnectOrCreateWhere;
};

export type KnowledgeParentsConnectOrCreateFieldInputOnCreate = {
  node: KnowledgeOnCreateInput;
};

export type KnowledgeParentsConnection = {
  __typename?: 'KnowledgeParentsConnection';
  edges: Array<KnowledgeParentsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type KnowledgeParentsConnectionSort = {
  node?: InputMaybe<KnowledgeSort>;
};

export type KnowledgeParentsConnectionWhere = {
  AND?: InputMaybe<Array<KnowledgeParentsConnectionWhere>>;
  OR?: InputMaybe<Array<KnowledgeParentsConnectionWhere>>;
  node?: InputMaybe<KnowledgeWhere>;
  node_NOT?: InputMaybe<KnowledgeWhere>;
};

export type KnowledgeParentsCreateFieldInput = {
  node: KnowledgeCreateInput;
};

export type KnowledgeParentsDeleteFieldInput = {
  delete?: InputMaybe<KnowledgeDeleteInput>;
  where?: InputMaybe<KnowledgeParentsConnectionWhere>;
};

export type KnowledgeParentsDisconnectFieldInput = {
  disconnect?: InputMaybe<KnowledgeDisconnectInput>;
  where?: InputMaybe<KnowledgeParentsConnectionWhere>;
};

export type KnowledgeParentsFieldInput = {
  connect?: InputMaybe<Array<KnowledgeParentsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<KnowledgeParentsConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<KnowledgeParentsCreateFieldInput>>;
};

export type KnowledgeParentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<KnowledgeParentsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<KnowledgeParentsNodeAggregationWhereInput>>;
  content_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  content_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  content_EQUAL?: InputMaybe<Scalars['String']>;
  content_GT?: InputMaybe<Scalars['Int']>;
  content_GTE?: InputMaybe<Scalars['Int']>;
  content_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  content_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  content_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  content_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  content_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  content_LT?: InputMaybe<Scalars['Int']>;
  content_LTE?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  content_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  createdAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  updatedAt_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MAX_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_EQUAL?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_MIN_LTE?: InputMaybe<Scalars['DateTime']>;
};

export type KnowledgeParentsRelationship = {
  __typename?: 'KnowledgeParentsRelationship';
  cursor: Scalars['String'];
  node: Knowledge;
};

export type KnowledgeParentsUpdateConnectionInput = {
  node?: InputMaybe<KnowledgeUpdateInput>;
};

export type KnowledgeParentsUpdateFieldInput = {
  connect?: InputMaybe<Array<KnowledgeParentsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<
    Array<KnowledgeParentsConnectOrCreateFieldInput>
  >;
  create?: InputMaybe<Array<KnowledgeParentsCreateFieldInput>>;
  delete?: InputMaybe<Array<KnowledgeParentsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<KnowledgeParentsDisconnectFieldInput>>;
  update?: InputMaybe<KnowledgeParentsUpdateConnectionInput>;
  where?: InputMaybe<KnowledgeParentsConnectionWhere>;
};

export type KnowledgeRelationInput = {
  children?: InputMaybe<Array<KnowledgeChildrenCreateFieldInput>>;
  parents?: InputMaybe<Array<KnowledgeParentsCreateFieldInput>>;
};

/** Fields to sort Knowledges by. The order in which sorts are applied is not guaranteed when specifying many fields in one KnowledgeSort object. */
export type KnowledgeSort = {
  content?: InputMaybe<SortDirection>;
  createdAt?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
};

export type KnowledgeUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KnowledgeUpdateInput = {
  children?: InputMaybe<Array<KnowledgeChildrenUpdateFieldInput>>;
  content?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parents?: InputMaybe<Array<KnowledgeParentsUpdateFieldInput>>;
};

export type KnowledgeWhere = {
  AND?: InputMaybe<Array<KnowledgeWhere>>;
  OR?: InputMaybe<Array<KnowledgeWhere>>;
  childrenAggregate?: InputMaybe<KnowledgeChildrenAggregateInput>;
  childrenConnection_ALL?: InputMaybe<KnowledgeChildrenConnectionWhere>;
  childrenConnection_NONE?: InputMaybe<KnowledgeChildrenConnectionWhere>;
  childrenConnection_SINGLE?: InputMaybe<KnowledgeChildrenConnectionWhere>;
  childrenConnection_SOME?: InputMaybe<KnowledgeChildrenConnectionWhere>;
  /** Return Knowledges where all of the related Knowledges match this filter */
  children_ALL?: InputMaybe<KnowledgeWhere>;
  /** Return Knowledges where none of the related Knowledges match this filter */
  children_NONE?: InputMaybe<KnowledgeWhere>;
  /** Return Knowledges where one of the related Knowledges match this filter */
  children_SINGLE?: InputMaybe<KnowledgeWhere>;
  /** Return Knowledges where some of the related Knowledges match this filter */
  children_SOME?: InputMaybe<KnowledgeWhere>;
  content?: InputMaybe<Scalars['String']>;
  content_CONTAINS?: InputMaybe<Scalars['String']>;
  content_ENDS_WITH?: InputMaybe<Scalars['String']>;
  content_IN?: InputMaybe<Array<Scalars['String']>>;
  content_NOT?: InputMaybe<Scalars['String']>;
  content_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  content_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  content_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  content_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  content_STARTS_WITH?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT?: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  parentsAggregate?: InputMaybe<KnowledgeParentsAggregateInput>;
  parentsConnection_ALL?: InputMaybe<KnowledgeParentsConnectionWhere>;
  parentsConnection_NONE?: InputMaybe<KnowledgeParentsConnectionWhere>;
  parentsConnection_SINGLE?: InputMaybe<KnowledgeParentsConnectionWhere>;
  parentsConnection_SOME?: InputMaybe<KnowledgeParentsConnectionWhere>;
  /** Return Knowledges where all of the related Knowledges match this filter */
  parents_ALL?: InputMaybe<KnowledgeWhere>;
  /** Return Knowledges where none of the related Knowledges match this filter */
  parents_NONE?: InputMaybe<KnowledgeWhere>;
  /** Return Knowledges where one of the related Knowledges match this filter */
  parents_SINGLE?: InputMaybe<KnowledgeWhere>;
  /** Return Knowledges where some of the related Knowledges match this filter */
  parents_SOME?: InputMaybe<KnowledgeWhere>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_NOT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export type KnowledgesConnection = {
  __typename?: 'KnowledgesConnection';
  edges: Array<KnowledgeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createKnowledges: CreateKnowledgesMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteKnowledges: DeleteInfo;
  deleteUsers: DeleteInfo;
  signIn?: Maybe<Scalars['String']>;
  signUp?: Maybe<Scalars['String']>;
  updateKnowledges: UpdateKnowledgesMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};

export type MutationCreateKnowledgesArgs = {
  input: Array<KnowledgeCreateInput>;
};

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};

export type MutationDeleteKnowledgesArgs = {
  delete?: InputMaybe<KnowledgeDeleteInput>;
  where?: InputMaybe<KnowledgeWhere>;
};

export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>;
};

export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationSignUpArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type MutationUpdateKnowledgesArgs = {
  connect?: InputMaybe<KnowledgeConnectInput>;
  connectOrCreate?: InputMaybe<KnowledgeConnectOrCreateInput>;
  create?: InputMaybe<KnowledgeRelationInput>;
  delete?: InputMaybe<KnowledgeDeleteInput>;
  disconnect?: InputMaybe<KnowledgeDisconnectInput>;
  update?: InputMaybe<KnowledgeUpdateInput>;
  where?: InputMaybe<KnowledgeWhere>;
};

export type MutationUpdateUsersArgs = {
  update?: InputMaybe<UserUpdateInput>;
  where?: InputMaybe<UserWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  knowledges: Array<Knowledge>;
  knowledgesAggregate: KnowledgeAggregateSelection;
  knowledgesConnection: KnowledgesConnection;
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersConnection: UsersConnection;
};

export type QueryKnowledgesArgs = {
  options?: InputMaybe<KnowledgeOptions>;
  where?: InputMaybe<KnowledgeWhere>;
};

export type QueryKnowledgesAggregateArgs = {
  where?: InputMaybe<KnowledgeWhere>;
};

export type QueryKnowledgesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<KnowledgeSort>>>;
  where?: InputMaybe<KnowledgeWhere>;
};

export type QueryUsersArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
  where?: InputMaybe<UserWhere>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC',
}

export type StringAggregateSelectionNonNullable = {
  __typename?: 'StringAggregateSelectionNonNullable';
  longest: Scalars['String'];
  shortest: Scalars['String'];
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  nodesDeleted: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type UpdateKnowledgesMutationResponse = {
  __typename?: 'UpdateKnowledgesMutationResponse';
  info: UpdateInfo;
  knowledges: Array<Knowledge>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  count: Scalars['Int'];
  createdAt: DateTimeAggregateSelectionNullable;
  email: StringAggregateSelectionNonNullable;
  id: IdAggregateSelectionNonNullable;
  updatedAt: DateTimeAggregateSelectionNullable;
  username: StringAggregateSelectionNonNullable;
};

export type UserCreateInput = {
  email: Scalars['String'];
  username: Scalars['String'];
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  createdAt?: InputMaybe<SortDirection>;
  email?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  updatedAt?: InputMaybe<SortDirection>;
  username?: InputMaybe<SortDirection>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>;
  OR?: InputMaybe<Array<UserWhere>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  createdAt_GT?: InputMaybe<Scalars['DateTime']>;
  createdAt_GTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdAt_LT?: InputMaybe<Scalars['DateTime']>;
  createdAt_LTE?: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT?: InputMaybe<Scalars['DateTime']>;
  createdAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  email?: InputMaybe<Scalars['String']>;
  email_CONTAINS?: InputMaybe<Scalars['String']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']>;
  email_IN?: InputMaybe<Array<Scalars['String']>>;
  email_NOT?: InputMaybe<Scalars['String']>;
  email_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  email_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  email_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  email_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<Scalars['ID']>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_GTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt_LT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_LTE?: InputMaybe<Scalars['DateTime']>;
  updatedAt_NOT?: InputMaybe<Scalars['DateTime']>;
  updatedAt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  username?: InputMaybe<Scalars['String']>;
  username_CONTAINS?: InputMaybe<Scalars['String']>;
  username_ENDS_WITH?: InputMaybe<Scalars['String']>;
  username_IN?: InputMaybe<Array<Scalars['String']>>;
  username_NOT?: InputMaybe<Scalars['String']>;
  username_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  username_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  username_NOT_IN?: InputMaybe<Array<Scalars['String']>>;
  username_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  username_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};
