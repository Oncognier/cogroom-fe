import axios from 'axios';

const axiosInstance = axios.create({
  // 기본 URL 설정
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',

  // 요청 제한 시간: 10초
  timeout: 10000,

  // 기본 헤더 설정
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    // TODO: 헤더 authorization 설정 accessToken
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터 (필요 시 사용)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // TODO: accessToken 만료 시 리프레시 토큰 요청
    return Promise.reject(error);
  },
);

export default axiosInstance;
