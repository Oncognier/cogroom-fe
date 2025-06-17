import { useQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS } from '@/constants/queryKeys';
import { useAuthStore } from '@/stores/useAuthStore';

export default function useGetUserDashboardQuery() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return useQuery({
    queryKey: [...MEMBER_QUERY_KEYS.MEMBER_DASHBOARD],
    queryFn: memberApi.getUserDashboard,
    enabled: isLoggedIn,
  });
}
