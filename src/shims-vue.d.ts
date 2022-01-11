/* eslint-disable */
// declare module "*.vue" {
//   import type { DefineComponent } from "vue";
//   // const component: DefineComponent<{}, {}, any>;
//   // const component: DefineComponent<typeof component>;
//   const component: ComponentPublicInstance<{ prop: string }, { value: string }>;
//   // const component: ReturnType<typeof defineComponent>;
//   export default component;
// }

declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter; // 这表示this下有这个东西
    $route: Route;
  }
}
