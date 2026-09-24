import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For a GitHub repository named `portfolio`, keep this as `/portfolio/`.
// If you deploy from a repository named `<username>.github.io`, change it to `/`.
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
