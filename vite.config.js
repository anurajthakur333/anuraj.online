import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://anuraj.online/',  // Keep the base path for the project
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['mixed-decls'],  // Silence deprecation warnings
      },
    },
  },
  server: {
    host: '0.0.0.0',  // Allow connections from any device in the local network
    port: 5173,  // Default port Vite runs on
  },
})
