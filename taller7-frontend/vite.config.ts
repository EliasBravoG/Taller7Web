/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    legacy()
  ],
  // 👇 INICIO DE LO QUE DEBES AGREGAR 👇
  server: {
    proxy: {
      "/servidor": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/servidor/, "")
      }
    }
  },
  // 👆 FIN DE LO QUE DEBES AGREGAR 👆
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
})

