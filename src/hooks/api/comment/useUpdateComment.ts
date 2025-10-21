'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { commentApi } from '@/api/commentApis';
import { useAlertModalStore } from '@/stores/useModalStore';
import { UpdateCommentRequest } from '@/types/comment';
import { communityErrorHandler } from '@/utils/errors/communityErrorHandler';

export const useUpdateComment = () => {
  const queryClient = useQueryClient();
  const { open: openAlert } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: ({ commentId, data }: { commentId: string; data: UpdateCommentRequest }) =>
      commentApi.updateComment(commentId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
    onError: (error: HTTPError) => {
      communityErrorHandler(error, openAlert, 'UPDATE');
    },
  });

  return mutation;
};
