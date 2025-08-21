import { useQuery } from '@tanstack/react-query';

import { streakApi } from '@/api/streakApis';
import { STREAK_QUERY_KEYS } from '@/constants/queryKeys';

export default function useGetStreakCalendarQuery() {
  return useQuery({
    queryKey: [...STREAK_QUERY_KEYS.STREAK_CALENDAR],
    queryFn: () => streakApi.getStreakCalendar(),
  });
}
