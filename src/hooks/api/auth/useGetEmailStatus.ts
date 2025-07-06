import { useQuery } from '@tanstack/react-query';

import { authApi } from '@/api/authApis';
import { AUTH_QUERY_KEYS } from '@/constants/queryKeys';

export const useGetEmailStatusQuery = (email: string, enabled: boolean) => {
  return useQuery({
    queryKey: [AUTH_QUERY_KEYS.GET_EMAIL_STATUS, email],
    queryFn: () => authApi.getEmailStatus({ email }),
    enabled,
  });
};
