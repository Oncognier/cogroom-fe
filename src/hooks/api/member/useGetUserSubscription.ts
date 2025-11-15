import { useQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS } from '@/constants/queryKeys';
import { useAuthStore } from '@/stores/useAuthStore';

export default function useGetUserSubscription() {
  const isAuth = useAuthStore((s) => s.isAuth());

  return useQuery({
    queryKey: [...MEMBER_QUERY_KEYS.MEMBER_SUBSCRIPTION],
    queryFn: memberApi.getUserSubscription,
    enabled: isAuth,
  });
}
