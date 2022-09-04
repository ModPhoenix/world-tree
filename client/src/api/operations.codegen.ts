import * as Types from '../types/types.codegen';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SignUpMutationVariables = Types.Exact<{
  email: Types.Scalars['String'];
  username: Types.Scalars['String'];
  password: Types.Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp?: string | null };

export type SignInMutationVariables = Types.Exact<{
  email: Types.Scalars['String'];
  password: Types.Scalars['String'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: string | null };

export type UsersQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.UserWhere>;
  options?: Types.InputMaybe<Types.UserOptions>;
}>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, username: string, createdAt: string, updatedAt: string }> };

export type KnowledgeNodeFragment = { __typename?: 'Knowledge', id: string, name: string, content: string, createdAt?: string | null, updatedAt?: string | null };

export type KnowledgeCreateMutationVariables = Types.Exact<{
  input: Array<Types.KnowledgeCreateInput> | Types.KnowledgeCreateInput;
}>;


export type KnowledgeCreateMutation = { __typename?: 'Mutation', createKnowledges: { __typename?: 'CreateKnowledgesMutationResponse', info: { __typename?: 'CreateInfo', bookmark?: string | null, nodesCreated: number, relationshipsCreated: number }, knowledges: Array<{ __typename?: 'Knowledge', id: string, name: string, content: string, createdAt?: string | null, updatedAt?: string | null, parents: Array<{ __typename?: 'Knowledge', id: string, name: string, content: string, createdAt?: string | null, updatedAt?: string | null }> }> } };

export type KnowledgesQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.KnowledgeWhere>;
}>;


export type KnowledgesQuery = { __typename?: 'Query', knowledges: Array<{ __typename?: 'Knowledge', id: string, name: string, content: string, createdAt?: string | null, updatedAt?: string | null, parents: Array<{ __typename?: 'Knowledge', id: string, name: string, content: string, createdAt?: string | null, updatedAt?: string | null }>, children: Array<{ __typename?: 'Knowledge', id: string, name: string, content: string, createdAt?: string | null, updatedAt?: string | null, children: Array<{ __typename?: 'Knowledge', id: string, name: string, content: string, createdAt?: string | null, updatedAt?: string | null }> }> }> };

export const KnowledgeNodeFragmentDoc = gql`
    fragment KnowledgeNode on Knowledge {
  id
  name
  content
  createdAt
  updatedAt
}
    `;
export const SignUpDocument = gql`
    mutation SignUp($email: String!, $username: String!, $password: String!) {
  signUp(email: $email, username: $username, password: $password)
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password)
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const UsersDocument = gql`
    query Users($where: UserWhere, $options: UserOptions) {
  users(where: $where, options: $options) {
    id
    email
    username
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      where: // value for 'where'
 *      options: // value for 'options'
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const KnowledgeCreateDocument = gql`
    mutation KnowledgeCreate($input: [KnowledgeCreateInput!]!) {
  createKnowledges(input: $input) {
    info {
      bookmark
      nodesCreated
      relationshipsCreated
    }
    knowledges {
      parents {
        ...KnowledgeNode
      }
      ...KnowledgeNode
    }
  }
}
    ${KnowledgeNodeFragmentDoc}`;
export type KnowledgeCreateMutationFn = Apollo.MutationFunction<KnowledgeCreateMutation, KnowledgeCreateMutationVariables>;

/**
 * __useKnowledgeCreateMutation__
 *
 * To run a mutation, you first call `useKnowledgeCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useKnowledgeCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [knowledgeCreateMutation, { data, loading, error }] = useKnowledgeCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useKnowledgeCreateMutation(baseOptions?: Apollo.MutationHookOptions<KnowledgeCreateMutation, KnowledgeCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<KnowledgeCreateMutation, KnowledgeCreateMutationVariables>(KnowledgeCreateDocument, options);
      }
export type KnowledgeCreateMutationHookResult = ReturnType<typeof useKnowledgeCreateMutation>;
export type KnowledgeCreateMutationResult = Apollo.MutationResult<KnowledgeCreateMutation>;
export type KnowledgeCreateMutationOptions = Apollo.BaseMutationOptions<KnowledgeCreateMutation, KnowledgeCreateMutationVariables>;
export const KnowledgesDocument = gql`
    query Knowledges($where: KnowledgeWhere) {
  knowledges(where: $where) {
    ...KnowledgeNode
    parents {
      ...KnowledgeNode
    }
    children {
      ...KnowledgeNode
      children {
        ...KnowledgeNode
      }
    }
  }
}
    ${KnowledgeNodeFragmentDoc}`;

/**
 * __useKnowledgesQuery__
 *
 * To run a query within a React component, call `useKnowledgesQuery` and pass it any options that fit your needs.
 * When your component renders, `useKnowledgesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useKnowledgesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useKnowledgesQuery(baseOptions?: Apollo.QueryHookOptions<KnowledgesQuery, KnowledgesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<KnowledgesQuery, KnowledgesQueryVariables>(KnowledgesDocument, options);
      }
export function useKnowledgesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<KnowledgesQuery, KnowledgesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<KnowledgesQuery, KnowledgesQueryVariables>(KnowledgesDocument, options);
        }
export type KnowledgesQueryHookResult = ReturnType<typeof useKnowledgesQuery>;
export type KnowledgesLazyQueryHookResult = ReturnType<typeof useKnowledgesLazyQuery>;
export type KnowledgesQueryResult = Apollo.QueryResult<KnowledgesQuery, KnowledgesQueryVariables>;