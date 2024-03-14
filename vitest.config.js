import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  vitest: {
    globals: true,
    environment: "jsdom",
    root: "./tests/vitest",
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      exclude: ["node_modules/", "/tests/playwright"],
    },
    compilerOptions: {
      types: ["node", "jsdom", "@types/testing-library__jest-dom"],
    },
  },
});
