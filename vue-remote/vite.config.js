import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Card": "./src/components/Card.vue",
        "./Button": "./src/components/Button.vue",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
