'use client';

import { isServer, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { globalErrorHandler } from '@/utils/api/globalErrorHandler';

function makeQueryClient() {
  return new QueryClient({
    queryCache: new QueryCache({
      onError: globalErrorHandler,
    }),
    defaultOptions: {
      queries: {
        retry: 2,
        throwOnError: false,
      },
      mutations: {
        onError: globalErrorHandler,
        retry: false,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) return makeQueryClient();
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
}

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
}
