import { useQuery } from '@tanstack/react-query';

import { dailyApi } from '@/api/dailyApis';
import { DAILY_QUERY_KEYS } from '@/constants/queryKeys';
import { useAuthStore } from '@/stores/useAuthStore';

export default function useGetDailyQuestionsQuery() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return useQuery({
    queryKey: [...DAILY_QUERY_KEYS.DAILY],
    queryFn: () => dailyApi.getDailyQuestions({ prefetch: true }),
    enabled: isLoggedIn,
  });
}
