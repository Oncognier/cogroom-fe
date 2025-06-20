import axios, { AxiosError } from 'axios';

import { cookiesInterceptor, checkAndSetToken } from './requestInterceptors';
import { handleTokenError, handleAPIError } from './responseInterceptors';
import { ErrorResponseData } from './types';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080',
  timeout: 10000,
  withCredentials: true,
  useAuth: true,
});

axiosInstance.interceptors.request.use(cookiesInterceptor);
axiosInstance.interceptors.request.use(checkAndSetToken);

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
