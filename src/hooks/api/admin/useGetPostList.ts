import { useQuery } from '@tanstack/react-query';

import { adminApi } from '@/api/adminApi';
import { ADMIN_QUERY_KEYS } from '@/constants/queryKeys';
import { PostListRequest } from '@/types/admin';

export default function useGetPostList(params: PostListRequest) {
  return useQuery({
    queryKey: [...ADMIN_QUERY_KEYS.POST_LIST, params],
    queryFn: () => adminApi.getPostList(params),
  });
}
