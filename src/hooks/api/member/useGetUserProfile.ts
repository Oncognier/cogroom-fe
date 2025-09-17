import { useQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS } from '@/constants/queryKeys';

export default function useGetUserProfile(memberId: string) {
  return useQuery({
    queryKey: [...MEMBER_QUERY_KEYS.PROFILE, memberId],
    queryFn: () => memberApi.getUserProfile(memberId),
    enabled: !!memberId,
  });
}
