import type { AxiosError } from 'axios';

import { authApi } from '@/api/authApis';
import { ERROR_CODE, HTTP_STATUS_CODE } from '@/constants/api';

import { axiosInstance } from './axiosInstance';
import { HTTPError } from './errors/HTTPError';
import { isPrefetchRequest } from './requestInterceptors';
import { ErrorResponseData } from './types';

const isServer = typeof window === 'undefined';

let isRefreshing = false;
let refreshPromise: Promise<void> | null = null;

export const handleTokenError = async (error: AxiosError<ErrorResponseData>) => {
  const originalRequest = error.config;
  if (!error.response || !originalRequest) throw error;

  const { data, status } = error.response;

  const isTokenExpired = status === HTTP_STATUS_CODE.UNAUTHORIZED && data.code === ERROR_CODE.TOKEN_EXPIRED_ERROR;

  if (isTokenExpired) {
    if (isRefreshing && refreshPromise) {
      return refreshPromise.then(() => axiosInstance(originalRequest));
    }

    isRefreshing = true;
    refreshPromise = reissueToken().finally(() => {
      isRefreshing = false;
      refreshPromise = null;
    });

    return refreshPromise.then(() => axiosInstance(originalRequest));
  }

  const isTokenInvalid =
    status === HTTP_STATUS_CODE.UNAUTHORIZED &&
    (data.code === ERROR_CODE.TOKEN_INVALID_ERROR || data.code === ERROR_CODE.ALREADY_BLACK_LIST);

  if (isTokenInvalid) {
    if (!isServer && !isPrefetchRequest(originalRequest)) {
      window.location.href = '/';
    }

    if (!isPrefetchRequest(originalRequest)) {
      throw new HTTPError(status, data.message, data.code);
    }

    return;
  }

  throw error;
};

export const handleAPIError = (error: AxiosError<ErrorResponseData>) => {
  if (!error.response) throw error;

  const { data, status } = error.response;
  const isPrefetch = isPrefetchRequest(error.config);

  if (status >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    if (!isPrefetch) {
      throw new HTTPError(status, data.message);
    }
    return Promise.resolve();
  }

  if (!isPrefetch) {
    throw new HTTPError(status, data.message, data.code);
  }

  throw new HTTPError(status, data.message, data.code);
};

const reissueToken = async (): Promise<void> => {
  try {
    await authApi.reissueToken();
  } catch (e) {
    if (!isServer) {
      window.location.href = '/';
    }
    throw e;
  }
};
