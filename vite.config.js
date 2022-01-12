import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vue from "@vitejs/plugin-vue";

import path from "path";
// import { fileURLToPath } from "url";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// const __dirname = path.resolve();
// console.log(__dirname);

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
  ],

  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "./src"),
      "@": path.resolve("./src"),
      "vue-types": "vue-types/shim", // vue-types mode production
    },
  },
  server: {
    cors: false,
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
