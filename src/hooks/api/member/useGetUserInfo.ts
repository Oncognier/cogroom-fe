import { useQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS } from '@/constants/queryKeys';
import { useAuthStore } from '@/stores/useAuthStore';

export default function useGetUserInfoMutation() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return useQuery({
    queryKey: [...MEMBER_QUERY_KEYS.MEMBER_INFO],
    queryFn: memberApi.getUserInfo,
    enabled: isLoggedIn,
  });
}
