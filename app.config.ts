import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    preset: "aws-lambda-streaming",
    compatibilityDate: "2024-04-01"
  },
  vite: {
    resolve: {
      alias: {
        '@': "/src"
      }
    }
  }
});
