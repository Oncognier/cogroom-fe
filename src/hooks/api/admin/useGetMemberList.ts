import { useQuery } from '@tanstack/react-query';

import { adminApi } from '@/api/adminApi';
import { ADMIN_QUERY_KEYS } from '@/constants/queryKeys';
import { MemberListRequest } from '@/types/admin';

export default function useGetMemberList(params: MemberListRequest) {
  return useQuery({
    queryKey: [...ADMIN_QUERY_KEYS.ADMIN_MEMBER_LIST, params],
    queryFn: () => adminApi.getMemberList(params),
  });
}
