import { useQuery } from '@tanstack/react-query';

import { dailyApi } from '@/api/dailyApis';
import { DAILY_QUERY_KEYS } from '@/constants/queryKeys';
import { useAuthStore } from '@/stores/useAuthStore';

export default function useGetDailyHasAnsweredQuery() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return useQuery({
    queryKey: [...DAILY_QUERY_KEYS.DAILY_HAS_ANSWERED],
    queryFn: () => dailyApi.getDailyHasAnswered({ prefetch: true }),
    enabled: isLoggedIn,
  });
}
