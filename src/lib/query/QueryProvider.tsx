'use client';

import { isServer, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { isAxiosError } from 'axios';

import { HTTPError } from '@/api/axios/errors/HTTPError';

function isNetworkError(err: unknown) {
  return isAxiosError(err) && !err.response;
}

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: (failureCount, error) => {
          if (error instanceof HTTPError) {
            if (error.statusCode === 401 || error.statusCode === 403) return false;
          }
          if (isNetworkError(error)) return failureCount < 1;
          return failureCount < 2;
        },

        throwOnError: (err) => {
          if (err instanceof HTTPError) {
            return err.statusCode >= 500;
          }
          if (isNetworkError(err)) {
            return true;
          }
          return false;
        },

        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },

      mutations: {
        retry: false,
        throwOnError: (err) => {
          if (err instanceof HTTPError) return err.statusCode >= 500;
          if (isNetworkError(err)) return true;
          return false;
        },
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
