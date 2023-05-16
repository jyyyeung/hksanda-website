// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  modules: [
    '@nuxtjs/apollo',
    'nuxt-graphql-server',
  ],
  build: {
    transpile: [
      "graphql"
    ]
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.URL ? `${process.env.URL}/api/graphql` : 'http://localhost:3000/api/graphql',
      }
    }
  },
  graphqlServer: {
    url: '/api/graphql',
  }
}) 
