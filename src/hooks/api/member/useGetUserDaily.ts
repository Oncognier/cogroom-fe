import { useQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS } from '@/constants/queryKeys';

export default function useGetUserDailyQuery() {
  return useQuery({
    queryKey: [...MEMBER_QUERY_KEYS.MEMBER_DAILY],
    queryFn: memberApi.getUserDaily,
  });
}
