import { useQuery } from '@tanstack/react-query';

import { authApi } from '@/api/authApis';

export const useGetEmailStatusQuery = (email: string, enabled: boolean) => {
  return useQuery({
    queryKey: ['emailStatus', email],
    queryFn: () => authApi.getEmailStatus({ email }),
    enabled,
  });
};
