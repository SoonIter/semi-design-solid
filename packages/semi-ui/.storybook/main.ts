// .storybook/main.ts
import { mergeConfig } from 'vite';
import defaultConfig from '../vite.config';
import type { StorybookViteConfig } from '@storybook/builder-vite';

const config: StorybookViteConfig = {
  stories: ['../**/_story/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/html',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    return mergeConfig(defaultConfig, config);
  },
};
export default config;
