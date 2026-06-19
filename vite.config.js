import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Use the repository name as the base when deploying to GitHub Pages project sites
  // e.g. https://<user>.github.io/My_Portfolio/
  base: '/My_Portfolio/',
  plugins: [react(), tailwindcss()],
  build: {
    // Output to the `docs` folder so GitHub Pages can serve from `docs/` (or configure otherwise)
    outDir: 'docs',
    emptyOutDir: true,
  },
})
