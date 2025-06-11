import { useQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS } from '@/constants/queryKeys';
import { useAuthStore } from '@/stores/useAuthStore';

export default function useGetUserSummary() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return useQuery({
    queryKey: [...MEMBER_QUERY_KEYS.MEMBER_SUMMARY],
    queryFn: () => memberApi.getUserSummary(),
    enabled: isLoggedIn,
  });
}
