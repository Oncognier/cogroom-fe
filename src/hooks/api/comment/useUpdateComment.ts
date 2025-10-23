'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { commentApi } from '@/api/commentApis';
import { COMMENT_QUERY_KEYS, POST_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore } from '@/stores/useModalStore';
import { UpdateCommentRequest } from '@/types/comment';
import { communityErrorHandler } from '@/utils/errors/communityErrorHandler';

export const useUpdateComment = (postId: string) => {
  const queryClient = useQueryClient();
  const { open: openAlert } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: ({ commentId, data }: { commentId: string; data: UpdateCommentRequest }) =>
      commentApi.updateComment(commentId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...POST_QUERY_KEYS.POST, postId] });
      queryClient.invalidateQueries({ queryKey: [...COMMENT_QUERY_KEYS.COMMENT_LIST, postId] });
    },
    onError: (error: HTTPError) => {
      communityErrorHandler(error, openAlert, 'UPDATE');
    },
  });

  return { updateComment: mutation.mutate, isLoading: mutation.isPending };
};
