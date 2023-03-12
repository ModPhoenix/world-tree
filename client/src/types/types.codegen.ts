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

export type DeleteNodeInput = {
  id: Scalars['String'];
};

export type GetNodeChildrenInput = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
};

export type GetNodeInput = {
  id: Scalars['String'];
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
  input: NewNodeInput;
};


export type MutationRootDeleteNodeArgs = {
  where: DeleteNodeInput;
};


export type MutationRootSignInArgs = {
  input: SignInInput;
};


export type MutationRootSignUpArgs = {
  input: SignUpInput;
};


export type MutationRootUpdateNodeArgs = {
  input: UpdateNodeInput;
};

export type NewNodeInput = {
  content: Scalars['String'];
  name: Scalars['String'];
  parentId?: InputMaybe<Scalars['String']>;
};

export type Node = {
  __typename?: 'Node';
  children: Array<Node>;
  content: Scalars['String'];
  context: Array<Node>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  meanings: Array<Node>;
  name: Scalars['String'];
  parent?: Maybe<Node>;
  updatedAt: Scalars['DateTime'];
};


export type NodeChildrenArgs = {
  input?: InputMaybe<GetNodeChildrenInput>;
};

export type QueryRoot = {
  __typename?: 'QueryRoot';
  me: User;
  node: Node;
};


export type QueryRootNodeArgs = {
  where: GetNodeInput;
};

export type SignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignUpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UpdateNodeInput = {
  content?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['UUID'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};
