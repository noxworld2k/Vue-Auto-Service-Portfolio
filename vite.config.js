import { fileURLToPath, URL } from "url";
const path = require("path");

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src"),
    },
    transpileDependencies: [
      /\bvue-awesome\b/
    ]
  },
});
