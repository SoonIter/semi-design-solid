import { render } from 'solid-js/web';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const decorators = [
  (story) => {
    const app = document.createElement('div');
    render(story, app);
    return app;
  },
];
