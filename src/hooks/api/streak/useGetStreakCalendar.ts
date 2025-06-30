import { useQuery } from '@tanstack/react-query';

import { streakApi } from '@/api/streakApis';
import { STREAK_QUERY_KEYS } from '@/constants/queryKeys';
import { useAuthStore } from '@/stores/useAuthStore';

export default function useGetStreakCalendarQuery() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return useQuery({
    queryKey: [...STREAK_QUERY_KEYS.STREAK_CALENDAR],
    queryFn: streakApi.getStreakCalendar,
    enabled: isLoggedIn,
  });
}
