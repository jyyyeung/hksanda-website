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
    '@nuxt/content',
    "@pinia/nuxt",
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
    // '@nuxtjs/stylelint-module',

    'nuxt-delay-hydration',
    '@nuxt/image-edge',
    '@vite-pwa/nuxt',
    // '@nuxtjs/fontaine',
    // 'nuxt-precompress'
    // 'nuxt-purgecss',

    '@unlighthouse/nuxt',
  ],

  css: [
    // "primeicons/primeicons.css",
    // "primevue/resources/themes/lara-light-teal/theme.css",
    // "primevue/resources/primevue.min.css",
    // "primeflex/primeflex.min.css",
    // "~/assets/scss/global.scss",
    '@/assets/scss/global.scss',
  ],
  // stylelint: {
  // include: ['@/assets/scss/*.scss'],
  // },
  // tailwindcss: {

  // },

  build: {
    transpile: [
      "graphql",
      "primevue",
    ],

  },
  sourcemap: {
    "server": true,
    "client": true
  },

  nitro: {
    compressPublicAssets: {
      brotli: true
    },
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
    '/**': { index: true },
    '/admin': { index: false },
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
        httpEndpoint: '/api/graphql',
        // TODO: Use apollo with state management to ensure data is ready when wanted
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
    logLevel: 'error',
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '@use "@/assets/scss/_index.scss" as *;'
    //     }
    //   }
    // }
  },
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },

  // fontMetrics: {
  //   fonts: [
  //     {
  //       family: 'FZLuXun', src: '/fonts/luxun.otf'
  //     },
  //     {
  //       family: 'FZYanZhenQingKaiShu', src: '/fonts/FZYanZQKSJF.TTF'
  //     }
  //   ],
  // },


})
