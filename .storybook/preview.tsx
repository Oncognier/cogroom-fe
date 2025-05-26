import { Global, ThemeProvider } from '@emotion/react';
import type { Preview } from '@storybook/react';
import React from 'react';
import { theme } from '../src/styles/theme';
import globalStylesStorybook from './globalStylesStorybook';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <Global styles={globalStylesStorybook()} />
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
