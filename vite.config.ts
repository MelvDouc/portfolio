import { join } from "path";
import { defineConfig } from "vite";

const root = process.cwd();

export default defineConfig({
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: "import {h, Fragment} from 'reactfree-jsx';"
  },
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
  base: "/static-website/"
});