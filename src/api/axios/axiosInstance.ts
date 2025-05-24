import axios from 'axios';

import { requestErrorHandler, requestHandler, responseErrorHandler, responseHandler } from '@/api/axios/interceptors';

const axiosInstance = axios.create({
  // 기본 URL 설정
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',

  // 요청 제한 시간: 10초
  timeout: 10000,

  // 쿠키 설정
  withCredentials: true,

  // 로그인 여부
  useAuth: true,
});

// 요청 시 interceptor
axiosInstance.interceptors.request.use(requestHandler, requestErrorHandler);

// 응답 시 interceptor
axiosInstance.interceptors.response.use(responseHandler, responseErrorHandler);

export default axiosInstance;
