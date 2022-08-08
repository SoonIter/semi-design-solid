/// <reference types="vitest" />
import path from 'path'; // eslint-disable-line
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    cache: {
      dir: path.resolve(__dirname, './node_modules/.vitest'),
    },
    exclude: ['**/node_modules/**', '**/samples/**'],
  },
});
