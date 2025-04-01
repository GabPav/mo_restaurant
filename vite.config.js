import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/mo_restaurant/', 
  
  plugins: [react(), tailwindcss()],
  
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

