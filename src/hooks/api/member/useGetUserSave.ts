'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS } from '@/constants/queryKeys';
import { useAuthStore } from '@/stores/useAuthStore';
import type { UserCommunityRequest } from '@/types/member';

export default function useGetUserSave(params: UserCommunityRequest) {
  const isAuth = useAuthStore((s) => s.isAuth());
  const { sort, categoryId, keyword, startDate, endDate } = params;

  return useInfiniteQuery({
    queryKey: [...MEMBER_QUERY_KEYS.MEMBER_SAVES, { sort, categoryId, keyword, startDate, endDate }],
    queryFn: ({ pageParam = null }) =>
      memberApi.getUserSavePost({
        sort,
        categoryId,
        keyword,
        startDate,
        endDate,
        cursor: pageParam ?? null,
      }),
    initialPageParam: null as number | null,
    getNextPageParam: (lastPage) => {
      if (!lastPage || lastPage.isLast) return null;
      return lastPage.nextCursor ?? null;
    },
    enabled: isAuth,
  });
}
