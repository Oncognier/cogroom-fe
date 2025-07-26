import { HTTPError } from '@/api/axios/errors/HTTPError';
import { ERROR_CODE, HTTP_STATUS_CODE } from '@/constants/api';

export const globalErrorHandler = (error: unknown) => {
  if (!(error instanceof HTTPError)) return;

  const { code, statusCode } = error;

  if (!localStorage.getItem('accessToken') && code === ERROR_CODE.TOKEN_NOT_FOUND_ERROR) {
    return;
  }

  if (
    code === ERROR_CODE.TOKEN_REISSUE_FAILED ||
    code === ERROR_CODE.TOKEN_EXPIRED_ERROR ||
    code === ERROR_CODE.TOKEN_INVALID_ERROR ||
    code === ERROR_CODE.ALREADY_BLACK_LIST
  ) {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      if (currentPath !== '/authguard') {
        window.location.href = '/authguard';
      }
    }
    return;
  }

  if (code === ERROR_CODE.FORBIDDEN_ERROR) {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      if (currentPath !== '/adminguard') {
        window.location.href = '/adminguard';
      }
    }
    return;
  }

  if (statusCode >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    throw error;
  }
};
