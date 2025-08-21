import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import legacy from '@vitejs/plugin-legacy'
import { fileURLToPath } from 'url';
import { cwd } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, cwd(), '');

  // Create process.env object for all REACT_APP_ prefixed variables
  const processEnv = {};
  Object.keys(env).forEach((key) => {
    if (key.startsWith('REACT_APP_')) {
      processEnv[`process.env.${key}`] = JSON.stringify(env[key]);
    }
  });

  // Always include NODE_ENV
  processEnv['process.env.NODE_ENV'] = JSON.stringify(mode);

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
      ...processEnv,
      global: 'globalThis',
    },
    server: {
      port: 3000,
      open: true,
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