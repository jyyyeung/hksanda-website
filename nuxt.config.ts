// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    'nuxt-seo-kit'
  ],
  typescript: {
    shim: false
  },
  pages: true,
  modules: [
    '@nuxtjs/apollo',
    'nuxt-graphql-server',
    "@pinia/nuxt",
    '@nuxt/devtools',
    '@unlighthouse/nuxt',
    'nuxt-delay-hydration',
  ],

  css: [
    // "primeicons/primeicons.css",
    "primevue/resources/themes/lara-light-teal/theme.css",
    "primevue/resources/primevue.min.css",
    "primeflex/primeflex.min.css",
    "~/assets/scss/style.scss"
  ],

  build: {
    transpile: [
      "graphql",
      "primevue",
    ],
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://hksanda.netlify.app',
      siteName: '中國武術散打、功夫、自衛術（香港）',
      siteDescription: '「香港極拳道武術協會」是香港政府及體育協會暨奧林匹克委員會認可及資助的體育總會「香港武術聯會」及「香港泰拳理事會」認可之屬會會員。本會推廣『散打自衛術』是香港政府認可及資助的武術運動項目之一。',
      language: 'zh-HK', // prefer more explicit language codes like `en-AU` over `en`
    }
  },
  routeRules: {
    // Don't add any /secret/** URLs to the sitemap.xml  
    '/admin/**': { index: false },
    // modify the sitemap.xml entry for specific URLs
    // '/about': { sitemap: { changefreq: 'daily', priority: 0.3 } }
  },
  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing  
    debug: process.env.NODE_ENV === 'development'
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
