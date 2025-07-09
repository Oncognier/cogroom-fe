import { QueryClient } from '@tanstack/react-query';

import { streakApi } from '@/api/streakApis';
import { STREAK_QUERY_KEYS } from '@/constants/queryKeys';

export const prefetchStreakCalendar = (queryClient: QueryClient) =>
  queryClient.prefetchQuery({
    queryKey: [...STREAK_QUERY_KEYS.STREAK_CALENDAR],
    queryFn: () => streakApi.getStreakCalendar({ prefetch: true }),
  });
