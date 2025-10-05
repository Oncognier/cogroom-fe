import { useQuery } from '@tanstack/react-query';

import { adminApi } from '@/api/adminApi';
import { ADMIN_QUERY_KEYS } from '@/constants/queryKeys';
import { AdminCommentListRequest } from '@/types/admin';

export default function useGetAdminCommentList(params: AdminCommentListRequest) {
  return useQuery({
    queryKey: [...ADMIN_QUERY_KEYS.COMMENT_LIST, params],
    queryFn: () => adminApi.getAdminCommentList(params),
  });
}
