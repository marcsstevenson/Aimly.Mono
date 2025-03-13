import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import legacy from '@vitejs/plugin-legacy'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(() => {
  const env = 'development';

  return {
    build: {
      sourcemap: true,
      outDir: 'build',
      commonjsOptions: {
        transformMixedEsModules: true,
        include: [/node_modules/]
      }
    },
    plugins: [
      react({
        babel: {
          plugins: [
            ['babel-plugin-relay', { eagerEsModules: true }]
          ],
          presets: ['@babel/preset-typescript']
        }
      }),
      legacy({
        targets: ['defaults', 'not IE 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      }),
      tsconfigPaths()
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: path.resolve(__dirname, './src')
        }
      ]
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(env),
      global: 'globalThis',
    },
    optimizeDeps: {
      include: ['react-relay', 'relay-runtime'],
      esbuildOptions: {
        define: {
          global: 'globalThis'
        }
      }
    }
  };
});