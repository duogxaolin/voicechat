import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['uuid'] 
  },
  server: {
    port: 80, // Đổi cổng thành 8000
    // ...
  },
})
