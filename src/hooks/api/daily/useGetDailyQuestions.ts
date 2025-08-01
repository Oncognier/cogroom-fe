import { useQuery } from '@tanstack/react-query';

import { dailyApi } from '@/api/dailyApis';
import { DAILY_QUERY_KEYS } from '@/constants/queryKeys';

export default function useGetDailyQuestionsQuery() {
  return useQuery({
    queryKey: [...DAILY_QUERY_KEYS.DAILY],
    queryFn: dailyApi.getDailyQuestions,
  });
}
