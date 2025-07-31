import axios, { AxiosError } from 'axios';
import { stringify } from 'qs';

import { cookiesInterceptor } from './requestInterceptors';
import { handleTokenError, handleAPIError } from './responseInterceptors';
import { ErrorResponseData } from './types';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080',
  timeout: 10000,
  withCredentials: true,
  useAuth: true,
  paramsSerializer: (params) => stringify(params, { arrayFormat: 'repeat' }),
});

axiosInstance.interceptors.request.use(cookiesInterceptor);

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    try {
      return await handleTokenError(error);
    } catch (error) {
      handleAPIError(error as AxiosError<ErrorResponseData>);
      throw error;
    }
  },
);
