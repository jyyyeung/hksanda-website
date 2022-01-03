import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "http://localhost:8000/graphql",
});

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
