import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import { getAccessToken, removeAccessToken } from 'utils';

const httpLink = new HttpLink({ uri: 'http://localhost:8000/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = getAccessToken();
  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }
  return forward(operation);
});

export const errorLink = onError(({ graphQLErrors, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach((graphQLError) => {
      if (graphQLError.message === 'Unauthorized') {
        const context = operation.getContext();
        if (context?.cache) {
          removeAccessToken();
          context.cache.reset();
        }
      }
    });
  }
});

export const client = new ApolloClient({
  link: ApolloLink.from([authMiddleware, errorLink, httpLink]),
  cache: new InMemoryCache(),
});
