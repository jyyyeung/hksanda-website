import { createWebHistory, createRouter } from "vue-router";

import * as routes from "./routes.cjs";
export const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
});

router.resolve({
  name: "NotFound",
  params: { pathMatch: ["not", "found"] }
}).href;
