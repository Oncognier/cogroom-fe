import { useQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS } from '@/constants/queryKeys';
import { UserCommunityRequest } from '@/types/member';
import { useAuthStore } from '@/stores/useAuthStore';

export default function useGetUserSave(params: UserCommunityRequest) {
  const status = useAuthStore((s) => s.status);

  return useQuery({
    queryKey: [...MEMBER_QUERY_KEYS.MEMBER_SAVES, params],
    queryFn: () => memberApi.getUserSavePost(params),
    enabled: status === 'authenticated',
  });
}
