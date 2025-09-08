import { useQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS } from '@/constants/queryKeys';
import { UserCommentListRequest } from '@/types/member';

export default function useGetCommentList(params: UserCommentListRequest) {
  return useQuery({
    queryKey: [...MEMBER_QUERY_KEYS.MEMBER_COMMENTS, params],
    queryFn: () => memberApi.getCommentList(params),
  });
}
