'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { commentApi } from '@/api/commentApis';
import { ADMIN_QUERY_KEYS, COMMENT_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore } from '@/stores/useModalStore';
import { communityErrorHandler } from '@/utils/errors/communityErrorHandler';

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient();
  const { open } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: commentApi.deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...ADMIN_QUERY_KEYS.COMMENT_LIST] });
      queryClient.invalidateQueries({ queryKey: [...COMMENT_QUERY_KEYS.COMMENT_LIST] });
      open('alert', { message: '댓글이 삭제되었습니다.' });
    },

    onError: (error: HTTPError) => {
      communityErrorHandler(error, open, 'DELETE');
    },
  });

  return { deleteComment: mutation.mutate };
};
