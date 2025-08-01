import { QueryClient } from '@tanstack/react-query';

import { dailyApi } from '@/api/dailyApis';
import { DAILY_QUERY_KEYS } from '@/constants/queryKeys';

export const prefetchDailyQuestions = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: [...DAILY_QUERY_KEYS.DAILY],
    queryFn: () => dailyApi.getDailyQuestions({ prefetch: true }),
  });
};
