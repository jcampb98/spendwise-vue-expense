import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  "packages/*",
  "tests/*/vitest.config.{e2e,unit}.ts",
  {
    test: {
      name: "happy-dom",
      root: "./shared_tests",
      environment: "happy-dom",
      setupFiles: ["./setup.happy-dom.ts"],
    },
  },
  {
    test: {
      name: "node",
      root: "./shared_tests",
      environment: "node",
      setupFiles: ["./setup.node.ts"],
    },
  },
]);
