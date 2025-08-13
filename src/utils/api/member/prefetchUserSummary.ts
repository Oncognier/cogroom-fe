import { QueryClient } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS } from '@/constants/queryKeys';

export const prefetchUserSummary = async (queryClient: QueryClient) => {
  await queryClient.prefetchQuery({
    queryKey: [...MEMBER_QUERY_KEYS.MEMBER_SUMMARY],
    queryFn: () => memberApi.getUserSummary({ prefetch: true }),
  });
};
