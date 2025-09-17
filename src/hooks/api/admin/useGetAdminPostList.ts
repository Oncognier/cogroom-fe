import { useQuery } from '@tanstack/react-query';

import { adminApi } from '@/api/adminApi';
import { ADMIN_QUERY_KEYS } from '@/constants/queryKeys';
import { AdminPostListRequest } from '@/types/admin';

export default function useGetAdminPostList(params: AdminPostListRequest) {
  return useQuery({
    queryKey: [...ADMIN_QUERY_KEYS.POST_LIST, params],
    queryFn: () => adminApi.getAdminPostList(params),
  });
}
