import { useQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS } from '@/constants/queryKeys';
import { useAuthStore } from '@/stores/useAuthStore';

export default function useGetUserDashboardQuery() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  return useQuery({
    queryKey: [...MEMBER_QUERY_KEYS.MEMBER_DASHBOARD],
    queryFn: memberApi.getUserDashboard,
    enabled: isAuthenticated,
  });
}
