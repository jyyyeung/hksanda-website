import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";
import { createUploadLink } from "apollo-upload-client";
import * as ApolloLink from "apollo-link";
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "http://localhost:8000/graphql",
  link: ApolloLink.from([
    createUploadLink({
      uri: "http://localhost:8000/graphql",
    }),
  ]),
});

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
