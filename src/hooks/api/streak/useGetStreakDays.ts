import { useQuery } from '@tanstack/react-query';

import { streakApi } from '@/api/streakApis';
import { STREAK_QUERY_KEYS } from '@/constants/queryKeys';

export default function useGetStreakDaysQuery() {
  return useQuery({
    queryKey: [...STREAK_QUERY_KEYS.STREAK_DAYS],
    queryFn: () => streakApi.getStreakDays({ prefetch: true }),
  });
}
