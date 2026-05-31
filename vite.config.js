import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: '/' — correct for custom domains (e.g. karthikjl.dpdns.org)
// GitHub Pages serves custom-domain sites from the root, not a subpath.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
