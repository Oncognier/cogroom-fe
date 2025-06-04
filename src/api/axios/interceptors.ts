import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { HTTP_STATUS_CODE } from '@/constants/api';

import { HTTPError } from './errors/HTTPError';
import { ErrorResponseData } from './types';

/**
 * requestHandler
 * @description Axios 요청 인터셉터
 */

// Request 성공 handler
export const requestHandler = (config: InternalAxiosRequestConfig) => {
  // FIXME: auth 관련 설정 논의 후 수정 필요
  if (config.useAuth !== false) {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization;
    }
  }
  return config;
};

// Request 에러 handler
export const requestErrorHandler = (error: AxiosError<ErrorResponseData>): never => {
  // 응답 객체가 없는 경우
  if (!error.response) {
    throw new HTTPError(0, '서버에 연결할 수 없습니다.');
  }

  const { data, status } = error.response;

  if (status >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    throw new HTTPError(
      HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
      data?.message || '서버 오류가 발생했습니다.',
      data?.code,
    );
  }

  throw new HTTPError(status, data?.message || '요청 처리 중 오류가 발생했습니다.', data?.code);
};

/**
 * responseHandler
 * @description Axios 응답 인터셉터
 */

// Response 성공 handler
export const responseHandler = (response: AxiosResponse) => {
  return response;
};

// Response 에러 handler
export const responseErrorHandler = (error: AxiosError<ErrorResponseData>): never => {
  // 요청 객체가 없는 경우
  if (!error.response) {
    throw new HTTPError(0, '서버에 연결할 수 없습니다.');
  }

  const { status, data } = error.response;

  switch (status) {
    case HTTP_STATUS_CODE.BAD_REQUEST:
      throw new HTTPError(status, '잘못된 요청입니다.', data?.code);
    case HTTP_STATUS_CODE.UNAUTHORIZED:
      throw new HTTPError(status, '로그인이 필요합니다.', data?.code);
    case HTTP_STATUS_CODE.FORBIDDEN:
      throw new HTTPError(status, '접근 권한이 없습니다.', data?.code);
    case HTTP_STATUS_CODE.NOT_FOUND:
      throw new HTTPError(status, '요청한 리소스를 찾을 수 없습니다.', data?.code);
    case HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR:
      throw new HTTPError(status, '서버 오류가 발생했습니다.', data?.code);
    default:
      throw new HTTPError(status, data?.message || '알 수 없는 오류가 발생했습니다.', data?.code);
  }
};
