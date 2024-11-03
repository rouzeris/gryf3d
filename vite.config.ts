import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    hmr: { clientPort: process.env.CODESPACES ? 443 : undefined }
  }
})