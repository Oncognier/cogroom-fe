import type { AxiosError } from 'axios';

import { authApi } from '@/api/authApis';
import { ERROR_CODE, HTTP_STATUS_CODE } from '@/constants/api';
import { useAuthStore } from '@/stores/useAuthStore';

import { axiosInstance } from './axiosInstance';
import { HTTPError } from './errors/HTTPError';
import { isPrefetchRequest } from './requestInterceptors';
import { ErrorResponseData } from './types';

const isServer = typeof window === 'undefined';

let isRefreshing = false;
let refreshPromise: Promise<string> | null = null;

export const handleTokenError = async (error: AxiosError<ErrorResponseData>) => {
  const originalRequest = error.config;
  if (!error.response || !originalRequest) throw error;

  const { data, status } = error.response;
  const { setToken, clearToken } = useAuthStore.getState();

  const isTokenExpired = status === HTTP_STATUS_CODE.UNAUTHORIZED && data.code === ERROR_CODE.TOKEN_EXPIRED_ERROR;

  if (isTokenExpired) {
    if (isRefreshing && refreshPromise) {
      return refreshPromise.then((newToken) => {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      });
    }

    isRefreshing = true;
    refreshPromise = reissueToken()
      .then((newToken) => {
        setToken(newToken);
        return newToken;
      })
      .finally(() => {
        isRefreshing = false;
        refreshPromise = null;
      });

    return refreshPromise.then((newToken) => {
      originalRequest.headers.Authorization = `Bearer ${newToken}`;
      return axiosInstance(originalRequest);
    });
  }

  if (
    status === HTTP_STATUS_CODE.UNAUTHORIZED &&
    (data.code === ERROR_CODE.TOKEN_INVALID_ERROR || data.code === ERROR_CODE.ALREADY_BLACK_LIST)
  ) {
    if (!isServer) {
      clearToken();
    }

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

const reissueToken = async (): Promise<string> => {
  try {
    const { accessToken } = await authApi.reissueToken();
    if (!accessToken) {
      throw new HTTPError(401, '토큰 재발급 실패', ERROR_CODE.TOKEN_REISSUE_FAILED);
    }
    return accessToken;
  } catch (e) {
    useAuthStore.getState().clearToken();
    if (!isServer) {
      window.location.href = '/';
    }
    throw e;
  }
};
