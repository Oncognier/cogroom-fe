import { useQuery } from '@tanstack/react-query';

import { authApi } from '@/api/authApis';
import { AUTH_QUERY_KEYS } from '@/constants/queryKeys';
import { CheckEmailRequest } from '@/types/auth';

export const useCheckEmailQuery = (params: CheckEmailRequest, enabled: boolean = false) => {
  return useQuery({
    queryKey: [AUTH_QUERY_KEYS.CHECK_EMAIL, params],
    queryFn: () => authApi.checkEmail(params),
    enabled,
  });
};
