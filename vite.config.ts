// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    hmr: true,
    host: true
  },
  clearScreen: false, // ❗️ Mantém o log de erro visível no terminal
  plugins: [
    react()
  ],
});
