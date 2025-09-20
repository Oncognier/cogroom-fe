import { HTTPError } from '@/api/axios/errors/HTTPError';
import { ERROR_CODE, HTTP_STATUS_CODE } from '@/constants/api';
import { useAuthStore } from '@/stores/useAuthStore';

import { isAuthRequiredPath } from '../authRoute';

export const globalErrorHandler = (error: unknown) => {
  if (!(error instanceof HTTPError)) return;

  const { code, statusCode } = error;

  const { setUnauthenticated } = useAuthStore.getState();

  if (
    code === ERROR_CODE.REFRESH_TOKEN_EMPTY_ERROR ||
    code === ERROR_CODE.TOKEN_INVALID_ERROR ||
    code === ERROR_CODE.TOKEN_BLACK_LIST_ERROR
  ) {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;

      if (isAuthRequiredPath(currentPath) && currentPath !== '/authguard') {
        window.location.href = '/authguard';
      }
    }

    setUnauthenticated();
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
