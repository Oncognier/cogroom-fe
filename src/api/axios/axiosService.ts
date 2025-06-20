import { AxiosError } from 'axios';

import { axiosInstance } from './axiosInstance';
import { logInterceptor, cookiesInterceptor, checkAndSetToken } from './requestInterceptors';
import { handleTokenError, handleAPIError } from './responseInterceptors';
import { ErrorResponseData } from './types';

axiosInstance.interceptors.request.use(logInterceptor);
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
