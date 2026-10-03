import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { metaImagesPlugin } from "./vite-plugin-meta-images";
import fs from "fs";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    metaImagesPlugin(),
    // Plugin to copy web.config to dist folder
    {
      name: "copy-web-config",
      closeBundle() {
        const webConfigSource = path.resolve(import.meta.dirname, "web.config");
        const webConfigDest = path.resolve(import.meta.dirname, "dist", "web.config");
        if (fs.existsSync(webConfigSource)) {
          fs.copyFileSync(webConfigSource, webConfigDest);
          console.log("✓ web.config copied to dist folder");
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
});
