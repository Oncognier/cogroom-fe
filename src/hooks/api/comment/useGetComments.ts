'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import { commentApi } from '@/api/commentApis';
import { COMMENT_QUERY_KEYS } from '@/constants/queryKeys';

export const useGetComments = (postId: string) => {
  return useInfiniteQuery({
    queryKey: [...COMMENT_QUERY_KEYS.COMMENT_LIST, postId],
    queryFn: ({ pageParam = undefined }) =>
      commentApi.getCommentList(postId, {
        cursor: pageParam,
      }),
    getNextPageParam: (lastPage) => (lastPage.isLast ? undefined : lastPage.nextCursor),
    initialPageParam: undefined as number | undefined,
    enabled: !!postId,
  });
};
