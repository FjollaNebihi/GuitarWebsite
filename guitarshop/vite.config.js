import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/graphql": {
        target: "https://graphql-api-brown.vercel.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/graphql/, "/api/graphql"),
      },
    },
  },
});
