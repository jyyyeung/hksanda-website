import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue(), reactRefresh()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
