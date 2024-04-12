import react from '@vitejs/plugin-react';
import path from "path";
import { defineConfig } from 'vite';
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss()],
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 10240,
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "src", "components"),
      "@/containers": path.resolve(__dirname, "src", "containers"),
      "@/assets": path.resolve(__dirname, "src", "assets"),
      "@/hooks": path.resolve(__dirname, "src", "hooks"),
      "@/appRoute": path.resolve(__dirname, "src", "appRoute"),
      "@/utils": path.resolve(__dirname, "src", "utils"),
      "@/context": path.resolve(__dirname, "src", "context"),
    }
  }
})
