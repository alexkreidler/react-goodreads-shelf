import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import dts from "vite-plugin-dts";
import preact from "@preact/preset-vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    coverage: {
      reporter: ["lcov", "text"],
      exclude: ["vitest.setup.ts", "**/*.test.{ts,tsx}"]
    }
  },
  plugins: [preact(), dts({ entryRoot: "src", include: ["src"] }), cssInjectedByJsPlugin()],
  build: {
    outDir: "./dist",
    lib: {
      entry: "./src/index.ts",
      formats: ["cjs", "es", "umd"],
      fileName: (format) => `index.${format}.js`,
      name: "index"
    },
    minify: "esbuild",
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        },
        exports: "named"
      }
    }
  }
});
