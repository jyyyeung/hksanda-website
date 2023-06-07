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
    '@nuxtjs/sanity',
    'nuxt-swiper',

    "@pinia/nuxt",
    '@nuxt/image-edge',
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',

    // 'nuxt-purgecss',
    // 'nuxt-delay-hydration',
    '@vite-pwa/nuxt',
    '@nuxtjs/robots',

    // '@unlighthouse/nuxt',
  ],
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
    preset: 'vercel'
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
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    logLevel: "silent",
  },
})
