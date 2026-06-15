import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('/src/i18n/originCopy')) return 'i18n-origin';
          if (id.includes('/src/i18n/siteCopy')) return 'i18n-site';
          if (id.includes('/src/i18n/presentationCopy')) return 'i18n-presentation';
          if (id.includes('/src/i18n/purposeCopy')) return 'i18n-purpose';
          if (id.includes('/src/i18n/experienceCopy') || id.includes('/src/i18n/marketingCopy')) {
            return 'i18n-marketing';
          }
          if (id.includes('/src/i18n/legalCopy')) return 'i18n-legal';
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
  },
});
