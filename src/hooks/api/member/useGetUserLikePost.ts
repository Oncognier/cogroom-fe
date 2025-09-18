import { useQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS } from '@/constants/queryKeys';
import { UserCommunityRequest } from '@/types/member';

export default function useGetUserLikePost(params: UserCommunityRequest) {
  return useQuery({
    queryKey: [...MEMBER_QUERY_KEYS.MEMBER_POSTS, params],
    queryFn: () => memberApi.getUserLikePost(params),
  });
}
