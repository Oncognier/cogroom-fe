import { useQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS } from '@/constants/queryKeys';
import { useAuthStore } from '@/stores/useAuthStore';

export default function useGetUserDailyQuery() {
  const status = useAuthStore((s) => s.status);

  return useQuery({
    queryKey: [...MEMBER_QUERY_KEYS.MEMBER_DAILY],
    queryFn: memberApi.getUserDaily,
    enabled: status === 'authenticated',
  });
}
