'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import { commentApi } from '@/api/commentApis';
import { COMMENT_QUERY_KEYS } from '@/constants/queryKeys';
import { CommentListRequest } from '@/types/comment';

export const useGetComments = (postId: string, params: CommentListRequest = {}) => {
  return useInfiniteQuery({
    queryKey: [...COMMENT_QUERY_KEYS.COMMENT_LIST, postId, params],
    queryFn: ({ pageParam = undefined }) =>
      commentApi.getCommentList(postId, {
        ...params,
        cursor: pageParam,
        pageSize: 5,
      }),
    getNextPageParam: (lastPage) => (lastPage.isLast ? undefined : lastPage.nextCursor),
    initialPageParam: undefined as number | undefined,
    enabled: !!postId,
  });
};
