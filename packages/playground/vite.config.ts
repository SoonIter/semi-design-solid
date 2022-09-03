import { defineConfig } from 'vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import solidPlugin from 'vite-plugin-solid';
import UnoCss from 'unocss/vite';
import presetIcons from '@unocss/preset-icons';
// @ts-ignore
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';
import Icons from 'unplugin-icons/vite';

export default defineConfig((env) => ({
  plugins: [
    solidPlugin(),
    Icons({
      compiler: 'solid',
    }),
    UnoCss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
    }),
    AutoImport({
      imports: ['solid-js'],
      dts: './src/types/auto-imports.d.ts',
      resolvers: [
        IconsResolver({
          componentPrefix: 'Icon',
        }),
      ],
    }),
  ],
  define: {
    'process.env.BABEL_TYPES_8_BREAKING': 'true',
    'process.env.NODE_DEBUG': 'false',
    ...(env.command == 'build' ? {} : { global: 'globalThis' }),
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        external: ['solid-js/web', 'solid-js'],
        manualChunks: {},
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8787',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
}));
