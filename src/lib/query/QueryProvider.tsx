'use client';

import { isServer, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { isAxiosError } from 'axios';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { HTTP_STATUS_CODE } from '@/constants/api';

function isNetworkError(err: unknown) {
  return isAxiosError(err) && !err.response;
}

function shouldRetry(failureCount: number, error: unknown) {
  if (error instanceof HTTPError) {
    const sc = error.statusCode;
    if (
      sc === HTTP_STATUS_CODE.UNAUTHORIZED ||
      sc === HTTP_STATUS_CODE.FORBIDDEN ||
      sc === HTTP_STATUS_CODE.NOT_FOUND ||
      sc === HTTP_STATUS_CODE.CONFLICT
    )
      return false;
  }

  if (isNetworkError(error)) return failureCount < 1;

  return failureCount < 2;
}

function shouldThrowError(err: unknown) {
  if (err instanceof HTTPError) {
    return err.statusCode >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR;
  }
  if (isNetworkError(err)) {
    return true;
  }
  return false;
}

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: shouldRetry,
        throwOnError: shouldThrowError,
      },
      mutations: {
        retry: false,
        throwOnError: shouldThrowError,
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
