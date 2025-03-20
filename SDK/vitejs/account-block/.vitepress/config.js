import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Use Canonical URL, but only the path and with no trailing /
  // End result is like: `/en/latest`
  base: process.env.READTHEDOCS_CANONICAL_URL
  ? new URL(process.env.READTHEDOCS_CANONICAL_URL).pathname.replace(/\/$/, "")
  : "",

  title: "Vite Docs",
  description: "Documentations for Vite",
})
