import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// GitHub Pages hosts the site at https://ingestdata.github.io/oss/, so the
// base path must match the repository name. It can be overridden (e.g. for a
// custom domain) via the VITE_BASE environment variable.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/oss/',
  plugins: [vue()],
})
