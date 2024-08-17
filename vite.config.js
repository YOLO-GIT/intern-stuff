import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/intern-stuff/",
  build: { chunkSizeWarningLimit: 1600 },
  plugins: [react()],
  assetsInclude: ["**/*.pptx"],
});
