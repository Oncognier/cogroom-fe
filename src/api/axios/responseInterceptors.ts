import type { AxiosError } from 'axios';

import { authApi } from '@/api/authApis';
import { ERROR_CODE, HTTP_STATUS_CODE } from '@/constants/api';

import { axiosInstance } from './axiosInstance';
import { HTTPError } from './errors/HTTPError';
import { ErrorResponseData } from './types';

let isRefreshing = false;
let refreshPromise: Promise<void> | null = null;

export const handleTokenError = async (error: AxiosError<ErrorResponseData>) => {
  const originalRequest = error.config;
  if (!error.response || !originalRequest) throw error;

  const { data, status } = error.response;

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
    (data.code === ERROR_CODE.TOKEN_INVALID_ERROR || data.code === ERROR_CODE.TOKEN_BLACK_LIST_ERROR)
  ) {
    throw new HTTPError(status, data.message, data.code);
  }

  throw error;
};

export const handleAPIError = (error: AxiosError<ErrorResponseData>) => {
  if (!error.response) throw error;

  const { data, status } = error.response;

  if (status >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    throw new HTTPError(status, data.message);
  }

  throw new HTTPError(status, data.message, data.code);
};
