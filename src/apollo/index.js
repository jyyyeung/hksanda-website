import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { createApolloProvider } from "@vue/apollo-option";
import { createUploadLink } from "apollo-upload-client";
import * as ApolloLink from "apollo-link";
const cache = new InMemoryCache();
// import { HttpLink } from "apollo-link-http";

// const httpLink = new HttpLink({
//   uri: process.env.VUE_APP_GRAPHQL_ENDPOINT,
// });
console.log("httplink", process.env.VUE_APP_GRAPHQL_ENDPOINT);

let baseURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  baseURL = "http://192.168.3.203:8000";
} else {
  // baseURL = "";
}

const apolloClient = new ApolloClient({
  cache,
  // uri: httpLink,
  uri: baseURL + "/graphql",
  link: ApolloLink.from([
    createUploadLink({
      uri: baseURL + "/graphql",
      // uri: httpLink,
    }),
  ]),
});

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
