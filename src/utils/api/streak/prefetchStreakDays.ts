import { QueryClient } from '@tanstack/react-query';

import { streakApi } from '@/api/streakApis';
import { STREAK_QUERY_KEYS } from '@/constants/queryKeys';

export const prefetchStreakDays = (queryClient: QueryClient) =>
  queryClient.prefetchQuery({
    queryKey: [...STREAK_QUERY_KEYS.STREAK_DAYS],
    queryFn: () => streakApi.getStreakDays({ prefetch: true }),
  });
