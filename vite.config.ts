import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/eme': {
        target: 'http://3.34.136.173:1234',
        secure: false,
        ws: true
      },
      '/dif': {
        target: 'http://3.34.136.173:1234',
        secure: false,
        ws: true
      }
    }
  }
})
