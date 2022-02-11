import { createWebHistory, createRouter } from "vue-router";

import routes from "./routes.js";
export const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
});

//router.resolve({
  //name: "NotFound",
  //params: { pathMatch: ["not", "found"] }
//}).href;
