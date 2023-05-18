import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/home/yyymx/Dev/Projects/Current/hksanda-website/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}