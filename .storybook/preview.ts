import { Preview } from '@storybook/react';
import '../src/index.css';

export const parameters = { actions: { argTypesRegex: "^on[A-Z].*" } };

const preview: Preview = {
  parameters: {
    docs: {
      theme: {
        brandTitle: 'Luna Edge',
        brandUrl: 'https://www.lunaedge.com',
        brandImage: '../src/assets/logos/LunaEdgeLogo.svg',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
