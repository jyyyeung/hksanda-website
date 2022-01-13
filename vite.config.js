import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vue from "@vitejs/plugin-vue";
import path from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const defaultConfig = {
  plugins: [
    vue(),
    reactRefresh(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    cors: false,
  },
};

export default defineConfig(({ command, mode }) => {
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
