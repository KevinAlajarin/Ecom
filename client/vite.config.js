import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Ecom/dist/' // Cambia a /Ecom/dist/ para que los recursos se carguen desde la subcarpeta dist
})