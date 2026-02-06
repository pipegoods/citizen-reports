import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

type ViteUserConfig = import("vite").UserConfig;
type VitestTestConfig = import("vitest/config").UserWorkspaceConfig["test"];

// https://vite.dev/config/
const config: ViteUserConfig & { test?: VitestTestConfig } = {
  plugins: [react()],
  resolve: {
    alias: {
      "@citizen-reports/shared": path.resolve(
        __dirname,
        "../../packages/shared/src",
      ),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
};

export default defineConfig(config);
