'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import { commentApi } from '@/api/commentApis';
import { CommentListRequest } from '@/types/comment';

export const useGetComments = (postId: string, params: CommentListRequest = {}) => {
  return useInfiniteQuery({
    queryKey: ['comments', postId, params],
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
