import { defineNuxtPlugin } from "#app"
import { ApolloClient, InMemoryCache } from "@apollo/client/core"
import { DefaultApolloClient } from "@vue/apollo-composable"

export default defineNuxtPlugin((nuxtApp) => {
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    // TODO: update to use environment variable 
    uri: "http://localhost:3000/api/graphql"
  })
  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient);
})
