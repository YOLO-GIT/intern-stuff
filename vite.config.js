import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/intern-stuff/",
  plugins: [react()],
  assetsInclude: ["**/*.pptx"],
  build: { chunkSizeWarningLimit: 1600 },
});
