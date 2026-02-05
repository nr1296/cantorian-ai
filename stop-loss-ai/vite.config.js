import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cantorian-ai/', // Use '/' for custom domain, or '/repo-name/' for github.io subdomain
})
