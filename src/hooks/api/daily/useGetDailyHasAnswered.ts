import { useQuery } from '@tanstack/react-query';

import { dailyApi } from '@/api/dailyApis';
import { DAILY_QUERY_KEYS } from '@/constants/queryKeys';

export default function useGetDailyHasAnsweredQuery() {
  return useQuery({
    queryKey: [...DAILY_QUERY_KEYS.DAILY_HAS_ANSWERED],
    queryFn: () => dailyApi.getDailyHasAnswered(),
  });
}
