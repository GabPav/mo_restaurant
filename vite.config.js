import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/mo_restaurant/',
  server: {
    proxy: {
      '/wp-json': {
        target: 'https://your-wordpress-site.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
