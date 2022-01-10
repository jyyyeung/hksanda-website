import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vue from "@vitejs/plugin-vue";
import path from "path";

const defaultConfig = {
  plugins: [vue(), reactRefresh()],

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
