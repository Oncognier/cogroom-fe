import { useQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS } from '@/constants/queryKeys';

export default function useGetUserSummary() {
  return useQuery({
    queryKey: [...MEMBER_QUERY_KEYS.MEMBER_SUMMARY],
    queryFn: () => memberApi.getUserSummary(),
  });
}
