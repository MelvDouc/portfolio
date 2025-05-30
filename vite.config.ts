import { join } from "path";
import { defineConfig } from "vite";

const root = process.cwd();

export default defineConfig({
  resolve: {
    alias: {
      "@": join(root, "src")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    }
  },
  base: "/portfolio/"
});