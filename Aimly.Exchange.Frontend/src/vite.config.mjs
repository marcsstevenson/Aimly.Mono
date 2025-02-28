import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => {
  return {
    build: {
      sourcemap: true,
      outDir: 'build',
    },
    plugins: [react(), tsconfigPaths()],
    resolve: {
      // alias: {
      //   // This makes all imports from 'src' directory work
      //   'components': path.resolve(__dirname, './src/components'),
      //   // This makes the src directory the base for absolute imports
      //   '@': path.resolve(__dirname, './src'),
      // }
    }
  };
});