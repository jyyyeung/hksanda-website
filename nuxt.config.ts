// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    'nuxt-seo-kit'
  ],
  typescript: {
    shim: false,
    strict: true
  },
  pages: true,
  ssr: true,
  modules: [
    'nuxt-gtag',
    'nuxt-graphql-server',
    '@nuxtjs/apollo',
    '@nuxtjs/sanity',

    "@pinia/nuxt",
    '@nuxt/image-edge',
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',

    'nuxt-purgecss',
    // 'nuxt-delay-hydration',
    '@vite-pwa/nuxt',

    // '@unlighthouse/nuxt',
  ],
  build: {
    transpile: [
      // "graphql",
      // "primevue",
      // "@apollo/client",
      // "@apollo/client/core",
      "graphql",
      // "ts-invariant",
      'nuxt-swiper',
    ],
  },
  // sourcemap: {
  //   "server": true,
  //   "client": false
  // },
  sanity: {
    projectId: '3ttfpt22',
    apiVersion: '2021-10-18'
  },
  nitro: {
    compressPublicAssets: {
      brotli: true
    },
    prerender: {
      crawlLinks: true
    },
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://hksanda.vercel.app',
      siteName: '中國武術散打、功夫、自衛術（香港）',
      siteDescription: '「香港極拳道武術協會」是香港政府及體育協會暨奧林匹克委員會認可及資助的體育總會「香港武術聯會」及「香港泰拳理事會」認可之屬會會員。本會推廣『散打自衛術』是香港政府認可及資助的武術運動項目之一。',
      language: 'zh-HK', // prefer more explicit language codes like `en-AU` over `en`
      index: true
    }
  },
  // delayHydration: {
  //   // enables nuxt-delay-hydration in dev mode for testing  
  //   debug: process.env.NODE_ENV === 'development'
  // },
  apollo: {
    autoImports: true,
    tokenStorage: 'cookie',
    clients: {
      default: {
        httpEndpoint: '/api/graphql',
        connectToDevTools: true, // Default
        // TODO: Use apollo with state management to ensure data is ready when wanted
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  graphqlServer: {
    url: '/api/graphql',
  },
  vite: {
    logLevel: "silent",
  },
})
