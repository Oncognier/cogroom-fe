import axios from 'axios';

import { checkAndSetToken, handleAPIError, handleTokenError } from '@/api/axios/interceptors';

export const axiosInstance = axios.create({
  // 기본 URL 설정
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',

  // 요청 제한 시간: 10초
  timeout: 10000,

  // 쿠키 설정
  withCredentials: true,

  // 로그인 여부
  useAuth: true,
});

axiosInstance.interceptors.request.use(checkAndSetToken, handleAPIError);

axiosInstance.interceptors.response.use((response) => response, handleTokenError);

axiosInstance.interceptors.response.use((response) => response, handleAPIError);
