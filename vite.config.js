import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Changing this to './' makes all your paths relative
  base: './', 
})
