import type { AxiosError, AxiosRequestConfig } from 'axios';

import { authApi } from '@/api/authApis';
import { ERROR_CODE, HTTP_STATUS_CODE } from '@/constants/api';
import { useAuthStore } from '@/stores/useAuthStore';

import { axiosInstance } from './axiosInstance';
import { HTTPError } from './errors/HTTPError';
import { ErrorResponseData } from './types';

export const isServer = typeof window === 'undefined';
const isPrefetch = (config?: AxiosRequestConfig) => isServer && !!config?.meta?.prefetch;

let isRefreshing = false;
let refreshPromise: Promise<void> | null = null;

export const handleTokenError = async (error: AxiosError<ErrorResponseData>) => {
  const originalRequest = error.config;
  if (!error.response || !originalRequest) throw error;

  const { data, status } = error.response;
  const { setUnauthenticated } = useAuthStore.getState();

  if (isPrefetch(originalRequest)) {
    return;
  }

  if (status === HTTP_STATUS_CODE.UNAUTHORIZED && data.code === ERROR_CODE.ACCESS_TOKEN_EMPTY_ERROR) {
    if (isRefreshing && refreshPromise) {
      return refreshPromise.then(() => axiosInstance(originalRequest));
    }

    isRefreshing = true;
    refreshPromise = authApi
      .reissueToken()
      .then(() => {})
      .finally(() => {
        isRefreshing = false;
        refreshPromise = null;
      });

    return refreshPromise.then(() => axiosInstance(originalRequest));
  }

  if (
    status === HTTP_STATUS_CODE.UNAUTHORIZED &&
    (data.code === ERROR_CODE.REFRESH_TOKEN_EMPTY_ERROR ||
      data.code === ERROR_CODE.TOKEN_INVALID_ERROR ||
      data.code === ERROR_CODE.TOKEN_BLACK_LIST_ERROR)
  ) {
    setUnauthenticated();
    throw new HTTPError(status, data.message, data.code);
  }

  throw error;
};

export const handleAPIError = (error: AxiosError<ErrorResponseData>) => {
  if (!error.response) {
    if (isPrefetch(error.config)) return;
    throw error;
  }

  const { data, status } = error.response;

  if (isPrefetch(error.config)) {
    return;
  }

  if (status >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    throw new HTTPError(status, data.message);
  }

  throw new HTTPError(status, data.message, data.code);
};
