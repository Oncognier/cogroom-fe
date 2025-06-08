import { useQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import QUERY_KEYS from '@/constants/queryKeys';
import { useAuthStore } from '@/stores/useAuthStore';

export default function useGetUserSummary() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return useQuery({
    queryKey: [QUERY_KEYS.USER_SUMMARY],
    queryFn: () => memberApi.getUserSummary(),
    enabled: isLoggedIn,
  });
}
