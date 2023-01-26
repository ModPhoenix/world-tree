export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  UUID: string;
};

export type MutationRoot = {
  __typename?: 'MutationRoot';
  createNode: Node;
  deleteNode: Scalars['Boolean'];
  signIn: Scalars['String'];
  signUp: Scalars['String'];
  updateNode: Node;
};


export type MutationRootCreateNodeArgs = {
  content: Scalars['String'];
  name: Scalars['String'];
  parentId: Scalars['UUID'];
};


export type MutationRootDeleteNodeArgs = {
  id: Scalars['UUID'];
};


export type MutationRootSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRootSignUpArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRootUpdateNodeArgs = {
  content: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
};

export type Node = {
  __typename?: 'Node';
  children: Array<Node>;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['UUID'];
  name: Scalars['String'];
  parents: Array<Node>;
  updatedAt: Scalars['DateTime'];
};

export type NodeWhere = {
  id?: InputMaybe<Scalars['UUID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type QueryRoot = {
  __typename?: 'QueryRoot';
  me: User;
  node: Node;
};


export type QueryRootNodeArgs = {
  where: NodeWhere;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['UUID'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};
