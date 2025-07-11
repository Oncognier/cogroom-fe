import type { InternalAxiosRequestConfig } from 'axios';

import { ERROR_CODE, HTTP_STATUS_CODE } from '@/constants/api';
import { useAuthStore } from '@/stores/useAuthStore';

import { HTTPError } from './errors/HTTPError';

const isServer = typeof window === 'undefined';

export const isPrefetchRequest = (config?: InternalAxiosRequestConfig): boolean => {
  return Boolean(config?.meta?.prefetch);
};

export const cookiesInterceptor = async (req: InternalAxiosRequestConfig) => {
  if (isServer) {
    const { cookies } = await import('next/headers');
    const cookieHeader = await cookies();

    req.headers.cookie = cookieHeader
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join('; ');
  }
  return req;
};

export const checkAndSetToken = (config: InternalAxiosRequestConfig) => {
  if (!config.useAuth || !config.headers || config.headers.Authorization) return config;

  const { accessToken } = useAuthStore.getState();

  if (!accessToken && !isPrefetchRequest(config)) {
    throw new HTTPError(HTTP_STATUS_CODE.UNAUTHORIZED, '로그인이 필요합니다', ERROR_CODE.TOKEN_NOT_FOUND_ERROR);
  }

  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};
