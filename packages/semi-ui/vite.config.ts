import { defineConfig } from 'vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import solidPlugin from 'vite-plugin-solid';
import Inspect from 'vite-plugin-inspect';
import solidLabels from 'babel-plugin-solid-labels';
import { undestructurePlugin } from 'babel-plugin-solid-undestructure';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  plugins: [
    ...undestructurePlugin('ts'),
    Icons({
      compiler: 'solid',
    }),
    solidPlugin({
      babel: {
        plugins: [[solidLabels, { dev: process.env.NODE_ENV !== 'production' }]],
      },
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
    Inspect(),
  ],
  build: {
    target: 'esnext',
  },
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        /*
        引入var.scss全局预定义变量，
        如果引入多个文件，
        可以使用
        '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
        这种格式
         */
        additionalData: '@import "/src/index.scss";',
      },
    },
  },
});
