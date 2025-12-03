import { defineConfig } from 'vitest/config'; 
import react from '@vitejs/plugin-react';
import path from 'path'; /

export default defineConfig({
  plugins: [react()],
  
  // ======================================
  // 💡 CONFIGURACIÓN DE VITEST
  // ======================================
  test: {
    environment: 'jsdom',
    globals: true, 
    setupFiles: './src/test/setup.ts', 
  },
});

