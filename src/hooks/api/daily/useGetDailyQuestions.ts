import { useQuery } from '@tanstack/react-query';

import { dailyApi } from '@/api/dailyApis';
import { DAILY_QUERY_KEYS } from '@/constants/queryKeys';
import { useAuthStore } from '@/stores/useAuthStore';

export default function useGetDailyQuestionsQuery() {
  const isAuth = useAuthStore((s) => s.isAuth());

  return useQuery({
    queryKey: [...DAILY_QUERY_KEYS.DAILY],
    queryFn: () => dailyApi.getDailyQuestions(),
    enabled: isAuth,
  });
}
