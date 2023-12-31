import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      hooks: "/src/hooks",
      types: "/src/types",
      pages: "/src/pages",
      assets: "/src/assets",
      resources: "/src/resources",
      store: "/src/store",
      http: "/src/http",
      util: "/src/util",
    },
  },
});
