import { ERROR_CODE, HTTP_STATUS_CODE } from '@/constants/api';
import type { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { HTTPError } from './errors/HTTPError';

export interface ErrorResponseData {
  statusCode?: number;
  message?: string;
  code?: string;
}

export const checkAndSetToken = (config: InternalAxiosRequestConfig) => {
  return config;
};

export const handleTokenError = async (error: AxiosError<ErrorResponseData>) => {
  const originalRequest = error.config;

  if (!error.response || !originalRequest) throw new Error('에러가 발생했습니다.');

  const { data, status } = error.response;

  if (status === HTTP_STATUS_CODE.UNAUTHORIZED && data.code === ERROR_CODE.EXPIRED_TOKEN) {
    // await postNewToken();
  }

  if (
    status === HTTP_STATUS_CODE.UNAUTHORIZED &&
    (data.code === ERROR_CODE.INVALID_TOKEN || data.code === ERROR_CODE.ALREADY_BLACK_LIST)
  ) {
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
