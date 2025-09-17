'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { commentApi } from '@/api/commentApis';
import { ADMIN_QUERY_KEYS } from '@/constants/queryKeys';

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: commentApi.deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...ADMIN_QUERY_KEYS.COMMENT_LIST] });
      // TODO: 댓글 목록 조회도 캐시 무효화 (추후 Optimistic Update로 개선)
    },
  });

  return { deleteComment: mutation.mutate };
};
