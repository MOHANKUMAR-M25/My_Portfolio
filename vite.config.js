import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so built asset URLs work on GitHub Pages project sites
  // (https://<user>.github.io/<repo>/) regardless of the repo name.
  base: './My_Portfolio/',
  plugins: [react(), tailwindcss()],
})
