import { QueryClient } from '@tanstack/react-query';

import { dailyApi } from '@/api/dailyApis';
import { DAILY_QUERY_KEYS } from '@/constants/queryKeys';

export const prefetchDailyHasAnswered = (queryClient: QueryClient) =>
  queryClient.prefetchQuery({
    queryKey: [...DAILY_QUERY_KEYS.DAILY_HAS_ANSWERED],
    queryFn: () => dailyApi.getDailyHasAnswered({ prefetch: true }),
  });
