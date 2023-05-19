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
    // "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    '@nuxt/devtools',
    // 'nuxt-simple-sitemap'
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

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://hksanda.netlify.app',
      siteName: '中國武術散打、功夫、自衛術（香港）',
      siteDescription: '「香港極拳道武術協會」是香港政府及體育協會暨奧林匹克委員會認可及資助的體育總會「香港武術聯會」及「香港泰拳理事會」認可之屬會會員。本會由一批具專業資格的武術教練於二零零五年成立，為香港政府註冊認可武術團體。以推廣中國武術散打自衛術為宗旨，不定期開辦不同年齡、水平的訓練班，為個人、會所、學校、公司或團體設計不同的課程(包括私人及小組教授)，本會教練持有國家認可之防身自衛術專業資格證書和政府認可註冊持牌武術散打教練及裁判的專業資格。我們的教練除了為學生提供專業的指導和訓練外，亦對學生貫徹實施全面性的培訓。了解不同學員要求，制定貼身有效的訓練計劃。為了提高學員在武術技能方面的認受性，本會亦推薦合資格學員考取國家認可防身自衛術段位證書，政府認可之武術散打教練及裁判專業證書課程和青少年武術散打章別計劃全港公開考核試，考取認可武術章別資格及證書。 ',
      language: 'zh-HK', // prefer more explicit language codes like `en-AU` over `en`
    }
  },
  routeRules: {
    // Don't add any /secret/** URLs to the sitemap.xml  
    '/admin/**': { index: false },
    // modify the sitemap.xml entry for specific URLs
    // '/about': { sitemap: { changefreq: 'daily', priority: 0.3 } }
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
