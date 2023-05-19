// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  pages: true,
  modules: [
    '@nuxtjs/apollo',
    'nuxt-graphql-server',
    // "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    '@nuxt/devtools',
  ],

  css: [
    // "primeicons/primeicons.css",
    "primevue/resources/themes/lara-light-teal/theme.css",
    "primevue/resources/primevue.min.css",
    "primeflex/primeflex.css",
    "~/assets/scss/style.scss"
  ],

  build: {
    transpile: [
      "graphql",
      "primevue",
    ],
  },

  apollo: {
    clients: {
      default: {
        // httpEndpoint: process.env.API_ENDPOINT ? `${process.env.API_ENDPOINT}` : '/api/graphql',
        httpEndpoint: '/api/graphql'
      }
    }
  },

  graphqlServer: {
    url: '/api/graphql',
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs'],
  },

  imports: {
    dirs: ['store']
  },

  devtools: {
    enabled: true
  },

  vite: {
    logLevel: 'error'
  }
})
