'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import { postApi } from '@/api/postApis';
import { POST_QUERY_KEYS } from '@/constants/queryKeys';

interface UseGetPostListProps {
  categoryId?: number;
}

export default function useGetPostList({ categoryId }: UseGetPostListProps) {
  return useInfiniteQuery({
    queryKey: [...POST_QUERY_KEYS.POST_LIST, categoryId ?? 'all'],
    queryFn: ({ pageParam = null }) =>
      postApi.getPostList({
        ...(categoryId != null ? { categoryId } : {}),
        cursor: pageParam ?? null,
      }),
    initialPageParam: null as number | null,
    getNextPageParam: (lastPage) => {
      if (!lastPage || lastPage.isLast) return null;
      return lastPage.nextCursor ?? null;
    },
  });
}
