import { useQuery } from '@tanstack/react-query';

import { adminApi } from '@/api/adminApi';
import { ADMIN_QUERY_KEYS } from '@/constants/queryKeys';
import { DailyQuestionsRequest } from '@/types/admin';

export default function useGetDailyQuestions(params: DailyQuestionsRequest) {
  return useQuery({
    queryKey: [...ADMIN_QUERY_KEYS.ADMIN_DAILY_LIST, params],
    queryFn: () => adminApi.getDailyQuestions(params),
  });
}
