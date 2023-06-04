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
  modules: [
    'nuxt-graphql-server',
    '@nuxtjs/apollo',
    "@pinia/nuxt",
    // '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',

    // 'nuxt-purgecss',
    // 'nuxt-delay-hydration',
    '@nuxt/image-edge',
    '@vite-pwa/nuxt',

    // '@unlighthouse/nuxt',
  ],
  // build: {
  //   transpile: [
  //     // "graphql",
  //     // "primevue",
  //   ],
  // },
  // sourcemap: {
  //   "server": true,
  //   "client": false
  // },
  generate: {
    routes: [
      // '/course/content/:id',
      // '/assessments/hk-badge/:id',
      // '/assessments/syllabus/:id',
    ]
  },
  nitro: {
    compressPublicAssets: {
      brotli: true
    },
    prerender: {
      crawlLinks: true
    },
    // preset: 'netlify-builder',
    // storage: {
    //   mongodb: {
    //     driver: 'mongodb',
    //     connectionString: "mongodb+srv://admin:c2pthQMtDkADQVi@cluster0.olxpa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    //     databaseName: "myFirstDatabase",
    //     // collectionName: "test",
    //   }
    // }
  },
  experimental: {
    payloadExtraction: true
  },
  // purgecss: {
  // enabled: true, // Always enable purgecss
  // },
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
      // GQL_HOST: 'http://localhost:3000/api/graphql', // overwritten by 
      index: true
    }
  },
  routeRules: {
    // Don't add any /secret/** URLs to the sitemap.xml  
    // '/**': { index: true },
    // '/admin': { index: false },
    // modify the sitemap.xml entry for specific URLs
    // '/about': { sitemap: { changefreq: 'daily', priority: 0.3 } }
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
        httpLinkOptions: {
          fetchOptions: {
            mode: 'cors',
          },
        },
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
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate', 'storeToRefs'],
  },
  imports: {
    dirs: ['store']
  },
  // devtools: {
  //   enabled: true
  // },
  vite: {
    logLevel: "silent",
  },
})
