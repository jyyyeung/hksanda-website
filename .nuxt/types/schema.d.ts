import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["apollo"]?: typeof import("@nuxtjs/apollo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["graphqlServer"]?: typeof import("nuxt-graphql-server").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["unlighthouse"]?: typeof import("@unlighthouse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["site"]?: typeof import("/Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/nuxt-seo-kit/modules/nuxt-seo-kit/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["schemaOrg"]?: typeof import("nuxt-schema-org").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["unhead"]?: typeof import("nuxt-unhead").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["robots"]?: typeof import("nuxt-simple-robots").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["sitemap"]?: typeof import("nuxt-simple-sitemap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["linkChecker"]?: typeof import("nuxt-link-checker").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/apollo", Exclude<NuxtConfig["apollo"], boolean>] | ["nuxt-graphql-server", Exclude<NuxtConfig["graphqlServer"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@unlighthouse/nuxt", Exclude<NuxtConfig["unlighthouse"], boolean>] | ["/Users/yyymx/Dev/Projects/Current/hksanda-website/node_modules/nuxt-seo-kit/modules/nuxt-seo-kit/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-schema-org", Exclude<NuxtConfig["schemaOrg"], boolean>] | ["nuxt-unhead", Exclude<NuxtConfig["unhead"], boolean>] | ["nuxt-simple-robots", Exclude<NuxtConfig["robots"], boolean>] | ["nuxt-simple-sitemap", Exclude<NuxtConfig["sitemap"], boolean>] | ["nuxt-link-checker", Exclude<NuxtConfig["linkChecker"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   indexable: boolean,

   "nuxt-simple-sitemap": {
      enabled: boolean,

      autoLastmod: boolean,

      siteUrl: string,

      trailingSlash: boolean,

      inferStaticPagesAsRoutes: boolean,

      discoverImages: boolean,

      dynamicUrlsApiEndpoint: string,

      include: Array<any>,

      exclude: Array<any>,

      urls: Array<{

      }>,

      sitemaps: boolean,

      xsl: string,

      defaults: any,

      hostname: string,

      isNuxtContentDocumentDriven: boolean,

      hasApiRoutesUrl: boolean,

      pagesDirs: Array<string>,

      hasPrerenderedRoutesPayload: boolean,

      extensions: Array<string>,
   },
  }
  interface PublicRuntimeConfig {
   trailingSlash: boolean,

   titleSeparator: string,

   siteName: string,

   siteUrl: string,

   siteDescription: string,

   language: string,

   "nuxt-unhead": {
      seoOptimise: boolean,

      resolveAliases: boolean,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }
declare module '@vue/runtime-dom' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }