/*
 * @Author: YYYeung
 * @Github: https://github.com/sheepyy039
 * @Date: 2022-01-13 14:31:29
 * @LastEditors: YYYeung
 * @LastEditTime: 2022-01-17 11:24:35
 * @FilePath: /hksanda-website/vite.config.js
 * @Description:
 */
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import { VitePluginNode } from "vite-plugin-node";
import { VitePWA } from "vite-plugin-pwa";

const defaultConfig = {
  plugins: [
    vue(),
    reactRefresh(),
    VitePWA({
      workbox: {
        sourcemap: true,
      },
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
        /* other options */
      },
    }),

    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    // ...VitePluginNode({
    //   // Nodejs native Request adapter
    //   // currently this plugin support 'express', 'nest', 'koa' and 'fastify' out of box,
    //   // you can also pass a function if you are using other frameworks, see Custom Adapter section
    //   adapter: "express",

    //   // tell the plugin where is your project entry
    //   appPath: "./api/server.js",

    //   // Optional, default: 'viteNodeApp'
    //   // the name of named export of you app from the appPath file
    //   exportName: "viteNodeApp",
    // }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    cors: false,
    // port: 3000,
  },
  build: {
    sourcemap: true,
    manifest: true,
    rollupOptions: {
      // https://rollupjs.org/guide/en/#big-list-of-options
    },
  },
};

export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      ...defaultConfig,
    };
  } else {
    // command === 'build'
    return {
      ...defaultConfig,
    };
  }
});
