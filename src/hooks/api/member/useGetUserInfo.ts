import { useQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import QUERY_KEYS from '@/constants/queryKeys';

export default function useGetUserInfoMutation() {
  return useQuery({
    queryKey: [QUERY_KEYS.USER_INFO],
    queryFn: () => memberApi.getUserInfo(),
  });
}
