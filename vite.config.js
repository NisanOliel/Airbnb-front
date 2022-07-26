import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/Airbnb-front/",
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: "../backend/public",
    emptyOutDir: true,
    assestsDir: "./dist",
    chunkSizeWarningLimit: 1500
  },
})
