import { useQuery } from '@tanstack/react-query';

import { dailyApi } from '@/api/dailyApis';
import { DAILY_QUERY_KEYS } from '@/constants/queryKeys';
import { useAuthStore } from '@/stores/useAuthStore';

export default function useGetDailyQuestionsQuery() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  return useQuery({
    queryKey: [...DAILY_QUERY_KEYS.DAILY],
    queryFn: () => dailyApi.getDailyQuestions(),
    enabled: isAuthenticated,
  });
}
