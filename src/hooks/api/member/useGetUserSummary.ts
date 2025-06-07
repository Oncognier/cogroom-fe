import { useQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import QUERY_KEYS from '@/constants/queryKeys';

export default function useGetUserSummary() {
  return useQuery({
    queryKey: [QUERY_KEYS.USER_SUMMARY],
    queryFn: () => memberApi.getUserSummary(),
  });
}
