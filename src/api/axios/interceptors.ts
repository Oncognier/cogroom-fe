import type { AxiosError, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

import { ERROR_CODE, HTTP_STATUS_CODE } from '@/constants/api';
import { useAuthStore } from '@/stores/useAuthStore';

import { HTTPError } from './errors/HTTPError';

export interface ErrorResponseData {
  statusCode?: number;
  message?: string;
  code?: string;
}

export const checkAndSetToken = (config: InternalAxiosRequestConfig) => {
  if (!config.useAuth || !config.headers || config.headers.Authorization) return config;

  const { accessToken, clearToken } = useAuthStore.getState();

  if (!accessToken) {
    clearToken();
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
    return config;
  }

  config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};

export const handleTokenError = async (error: AxiosError<ErrorResponseData>) => {
  const originalRequest = error.config;

  if (!error.response || !originalRequest) throw new Error('에러가 발생했습니다.');

  const { data, status } = error.response;

  if (status === HTTP_STATUS_CODE.UNAUTHORIZED && data.code === ERROR_CODE.EXPIRED_TOKEN) {
    // TODO: refresh token 로직을 여기에 구현
    // 예: await postNewToken();
  }

  if (
    status === HTTP_STATUS_CODE.UNAUTHORIZED &&
    (data.code === ERROR_CODE.INVALID_TOKEN || data.code === ERROR_CODE.ALREADY_BLACK_LIST)
  ) {
    delete axios.defaults.headers.common.Authorization;

    const { clearToken } = useAuthStore.getState();
    clearToken();

    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }

    throw new HTTPError(status, data.message, data.code);
  }

  throw error;
};

export const handleAPIError = (error: AxiosError<ErrorResponseData>) => {
  if (!error.response) throw error;

  const { data, status } = error.response;

  if (status >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    throw new HTTPError(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, data.message);
  }

  throw new HTTPError(status, data.message, data.code);
};
