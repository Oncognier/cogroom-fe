import type { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

import { authApi } from '@/api/authApis';
import { ERROR_CODE, HTTP_STATUS_CODE } from '@/constants/api';
import { useAuthStore } from '@/stores/useAuthStore';

import { axiosInstance } from './axiosInstance';
import { HTTPError } from './errors/HTTPError';
import { isPrefetchRequest } from './requestInterceptors';
import { ErrorResponseData } from './types';

const isServer = typeof window === 'undefined';

export const handleTokenError = async (error: AxiosError<ErrorResponseData>) => {
  const originalRequest = error.config;

  if (!error.response || !originalRequest) throw error;

  const { data, status } = error.response;

  if (status === HTTP_STATUS_CODE.UNAUTHORIZED && data.code === ERROR_CODE.TOKEN_EXPIRED_ERROR) {
    try {
      const { accessToken: newAccessToken } = await authApi.reissueToken();

      if (!newAccessToken) {
        if (isPrefetchRequest(originalRequest)) return Promise.resolve();

        throw new HTTPError(
          HTTP_STATUS_CODE.UNAUTHORIZED,
          '토큰 재발급에 실패했습니다',
          ERROR_CODE.TOKEN_REISSUE_FAILED,
        );
      }

      const { setToken } = useAuthStore.getState();
      setToken(newAccessToken);

      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
      return axiosInstance(originalRequest);
    } catch (reissueError) {
      const { clearToken } = useAuthStore.getState();
      clearToken();

      if (!isServer && !isPrefetchRequest(originalRequest)) {
        window.location.href = '/';
      }

      if (!isPrefetchRequest(originalRequest)) throw reissueError;
    }
  }

  if (
    status === HTTP_STATUS_CODE.UNAUTHORIZED &&
    (data.code === ERROR_CODE.TOKEN_INVALID_ERROR || data.code === ERROR_CODE.ALREADY_BLACK_LIST)
  ) {
    const { clearToken } = useAuthStore.getState();
    clearToken();

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
