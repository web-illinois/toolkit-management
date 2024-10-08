import { defineConfig } from 'vite'
import nodeResolve from '@rollup/plugin-node-resolve';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  resolve: {
    dedupe: ['lit', '@illinois-toolkit/ilw-card', '@illinois-toolkit/ilw-icon']
  },
  build: {
    outDir: '../dist-toolkit',
    lib: {
      name: 'toolkit',
      entry: 'index.js',
      fileName: 'toolkit',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name === 'style.css') return 'toolkit.css';
        }
      },
      plugins: [
        nodeResolve()
      ]
    },
  },
  server: {
    hmr: false
  }
})
