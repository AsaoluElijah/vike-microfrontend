import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";

import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vike(),
    react(),
    federation({
      name: "app",
      remotes: {
        remoteApp: "http://localhost:5001/dist/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
