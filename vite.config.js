import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  // Modifica el nombre de la carpeta del build de dist a docs
  build: {
    outDir: 'docs',
  },
  // Modificar el nombre para cada repositorio con el nombre del repositorio de GitHub al que vas hacer GitHub Pages
  base: '/modulo-3-evaluacion-final-CrisOnWeb/',
  plugins: [react()],
  server: {
    open: true,
    watch: {
      usePolling: true,
    },
  },
});
