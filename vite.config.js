import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    // Split vendor chunks so browsers can cache React separately from app code
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-gsap':  ['gsap'],
          'vendor-icons': ['lucide-react'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
        }
      }
    },
    // Raise chunk size warning limit slightly (Three.js and Draco are large)
    chunkSizeWarningLimit: 1000,
    // Minify with esbuild (default, very fast)
    minify: 'esbuild',
    // Enable CSS code splitting — only load CSS needed per route
    cssCodeSplit: true,
    // Target modern browsers — smaller output, no IE polyfills
    target: 'es2020',
  }
});
