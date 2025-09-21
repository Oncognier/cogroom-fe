import { useQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS } from '@/constants/queryKeys';
import { UserCommunityRequest } from '@/types/member';
import { useAuthStore } from '@/stores/useAuthStore';

export default function useGetUserPost(params: UserCommunityRequest) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  return useQuery({
    queryKey: [...MEMBER_QUERY_KEYS.MEMBER_POSTS, params],
    queryFn: () => memberApi.getUserPost(params),
    enabled: isAuthenticated,
  });
}
