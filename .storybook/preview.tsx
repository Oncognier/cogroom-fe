import { Global, ThemeProvider } from '@emotion/react';
import type { Preview, Decorator } from '@storybook/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from '../src/styles/theme';
import globalStylesStorybook from './globalStylesStorybook';

const withProviders: Decorator = (Story) => {
  const [client] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: { retry: false, refetchOnWindowFocus: false },
          mutations: { retry: false },
        },
      }),
  );

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStylesStorybook()} />
        <Story />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withProviders],
};

export default preview;
