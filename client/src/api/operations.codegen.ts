import * as Types from '../types/types.codegen';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SignUpMutationVariables = Types.Exact<{
  input: Types.SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'MutationRoot', signUp: string };

export type SignInMutationVariables = Types.Exact<{
  input: Types.SignInInput;
}>;


export type SignInMutation = { __typename?: 'MutationRoot', signIn: string };

export type MeQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'QueryRoot', me: { __typename?: 'User', id: string, email: string, username: string, createdAt: string, updatedAt: string } };

export type NodeDataFragment = { __typename?: 'Node', id: string, name: string, content: string, createdAt: string, updatedAt: string };

export type NodeQueryVariables = Types.Exact<{
  where: Types.GetNodeInput;
  parentChildren?: Types.InputMaybe<Types.GetNodeChildrenInput>;
  children?: Types.InputMaybe<Types.GetNodeChildrenInput>;
  childrenChildren?: Types.InputMaybe<Types.GetNodeChildrenInput>;
}>;


export type NodeQuery = { __typename?: 'QueryRoot', node: { __typename?: 'Node', id: string, name: string, content: string, createdAt: string, updatedAt: string, parent?: { __typename?: 'Node', id: string, name: string, content: string, createdAt: string, updatedAt: string, children: Array<{ __typename?: 'Node', id: string, name: string, content: string, createdAt: string, updatedAt: string }> } | null, context: Array<{ __typename?: 'Node', id: string, name: string, content: string, createdAt: string, updatedAt: string }>, meanings: Array<{ __typename?: 'Node', id: string, name: string, content: string, createdAt: string, updatedAt: string, context: Array<{ __typename?: 'Node', id: string, name: string, content: string, createdAt: string, updatedAt: string }> }>, children: Array<{ __typename?: 'Node', id: string, name: string, content: string, createdAt: string, updatedAt: string, children: Array<{ __typename?: 'Node', id: string, name: string, content: string, createdAt: string, updatedAt: string }> }> } };

export type CreateNodeMutationVariables = Types.Exact<{
  input: Types.NewNodeInput;
}>;


export type CreateNodeMutation = { __typename?: 'MutationRoot', createNode: { __typename?: 'Node', id: string, name: string, content: string, createdAt: string, updatedAt: string } };

export type UpdateNodeMutationVariables = Types.Exact<{
  input: Types.UpdateNodeInput;
}>;


export type UpdateNodeMutation = { __typename?: 'MutationRoot', updateNode: { __typename?: 'Node', id: string, name: string, content: string, createdAt: string, updatedAt: string } };

export type DeleteNodeMutationVariables = Types.Exact<{
  where: Types.DeleteNodeInput;
}>;


export type DeleteNodeMutation = { __typename?: 'MutationRoot', deleteNode: boolean };

export const NodeDataFragmentDoc = gql`
    fragment NodeData on Node {
  id
  name
  content
  createdAt
  updatedAt
}
    `;
export const SignUpDocument = gql`
    mutation SignUp($input: SignUpInput!) {
  signUp(input: $input)
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
 *      input: // value for 'input'
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
    mutation SignIn($input: SignInInput!) {
  signIn(input: $input)
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
 *      input: // value for 'input'
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
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    username
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const NodeDocument = gql`
    query Node($where: GetNodeInput!, $parentChildren: GetNodeChildrenInput, $children: GetNodeChildrenInput, $childrenChildren: GetNodeChildrenInput) {
  node(where: $where) {
    ...NodeData
    parent {
      ...NodeData
      children(input: $parentChildren) {
        ...NodeData
      }
    }
    context {
      ...NodeData
    }
    meanings {
      ...NodeData
      context {
        ...NodeData
      }
    }
    children(input: $children) {
      ...NodeData
      children(input: $childrenChildren) {
        ...NodeData
      }
    }
  }
}
    ${NodeDataFragmentDoc}`;

/**
 * __useNodeQuery__
 *
 * To run a query within a React component, call `useNodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useNodeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNodeQuery({
 *   variables: {
 *      where: // value for 'where'
 *      parentChildren: // value for 'parentChildren'
 *      children: // value for 'children'
 *      childrenChildren: // value for 'childrenChildren'
 *   },
 * });
 */
export function useNodeQuery(baseOptions: Apollo.QueryHookOptions<NodeQuery, NodeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NodeQuery, NodeQueryVariables>(NodeDocument, options);
      }
export function useNodeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NodeQuery, NodeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NodeQuery, NodeQueryVariables>(NodeDocument, options);
        }
export type NodeQueryHookResult = ReturnType<typeof useNodeQuery>;
export type NodeLazyQueryHookResult = ReturnType<typeof useNodeLazyQuery>;
export type NodeQueryResult = Apollo.QueryResult<NodeQuery, NodeQueryVariables>;
export const CreateNodeDocument = gql`
    mutation CreateNode($input: NewNodeInput!) {
  createNode(input: $input) {
    ...NodeData
  }
}
    ${NodeDataFragmentDoc}`;
export type CreateNodeMutationFn = Apollo.MutationFunction<CreateNodeMutation, CreateNodeMutationVariables>;

/**
 * __useCreateNodeMutation__
 *
 * To run a mutation, you first call `useCreateNodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNodeMutation, { data, loading, error }] = useCreateNodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateNodeMutation(baseOptions?: Apollo.MutationHookOptions<CreateNodeMutation, CreateNodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNodeMutation, CreateNodeMutationVariables>(CreateNodeDocument, options);
      }
export type CreateNodeMutationHookResult = ReturnType<typeof useCreateNodeMutation>;
export type CreateNodeMutationResult = Apollo.MutationResult<CreateNodeMutation>;
export type CreateNodeMutationOptions = Apollo.BaseMutationOptions<CreateNodeMutation, CreateNodeMutationVariables>;
export const UpdateNodeDocument = gql`
    mutation UpdateNode($input: UpdateNodeInput!) {
  updateNode(input: $input) {
    ...NodeData
  }
}
    ${NodeDataFragmentDoc}`;
export type UpdateNodeMutationFn = Apollo.MutationFunction<UpdateNodeMutation, UpdateNodeMutationVariables>;

/**
 * __useUpdateNodeMutation__
 *
 * To run a mutation, you first call `useUpdateNodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateNodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateNodeMutation, { data, loading, error }] = useUpdateNodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateNodeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateNodeMutation, UpdateNodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateNodeMutation, UpdateNodeMutationVariables>(UpdateNodeDocument, options);
      }
export type UpdateNodeMutationHookResult = ReturnType<typeof useUpdateNodeMutation>;
export type UpdateNodeMutationResult = Apollo.MutationResult<UpdateNodeMutation>;
export type UpdateNodeMutationOptions = Apollo.BaseMutationOptions<UpdateNodeMutation, UpdateNodeMutationVariables>;
export const DeleteNodeDocument = gql`
    mutation DeleteNode($where: DeleteNodeInput!) {
  deleteNode(where: $where)
}
    `;
export type DeleteNodeMutationFn = Apollo.MutationFunction<DeleteNodeMutation, DeleteNodeMutationVariables>;

/**
 * __useDeleteNodeMutation__
 *
 * To run a mutation, you first call `useDeleteNodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteNodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteNodeMutation, { data, loading, error }] = useDeleteNodeMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteNodeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteNodeMutation, DeleteNodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteNodeMutation, DeleteNodeMutationVariables>(DeleteNodeDocument, options);
      }
export type DeleteNodeMutationHookResult = ReturnType<typeof useDeleteNodeMutation>;
export type DeleteNodeMutationResult = Apollo.MutationResult<DeleteNodeMutation>;
export type DeleteNodeMutationOptions = Apollo.BaseMutationOptions<DeleteNodeMutation, DeleteNodeMutationVariables>;