'use client';

import { isServer, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { ERROR_CODE } from '@/constants/api';
import { useAppModalStore } from '@/stores/useModalStore';

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        throwOnError: true,
      },
      mutations: {
        onError: (error) => {
          if (
            error instanceof HTTPError &&
            (error.code === ERROR_CODE.TOKEN_NOT_FOUND_ERROR ||
              error.code === ERROR_CODE.TOKEN_INVALID_ERROR ||
              error.code === ERROR_CODE.ALREADY_BLACK_LIST)
          ) {
            useAppModalStore.getState().open('login');
          }
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
