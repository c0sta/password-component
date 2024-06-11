import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";
import dts from "vite-plugin-dts";
import path, { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ rollupTypes: true, tsconfigPath: "tsconfig.build.json" }),
  ],
  build: {
    lib: {
      name: "@qventus",
      entry: resolve(__dirname, "./lib/index.ts"),
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  test: {
    clearMocks: true,
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest-setup.ts",
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./lib/components"),
      "@types": path.resolve(__dirname, "./lib/types"),
      "@constants": path.resolve(__dirname, "./lib/constants"),
    },
  },
});
