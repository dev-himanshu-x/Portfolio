import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (id.includes('react-dom') || id.includes('/react/')) {
            return 'react';
          }
          if (id.includes('framer-motion')) return 'motion';
          if (id.includes('lucide-react') || id.includes('react-icons')) {
            return 'icons';
          }
          if (id.includes('@fortawesome')) return 'fontawesome';
          return undefined;
        },
      },
    },
  },
});
