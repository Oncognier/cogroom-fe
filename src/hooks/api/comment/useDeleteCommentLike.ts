'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { commentApi } from '@/api/commentApis';
import { useAlertModalStore } from '@/stores/useModalStore';
import { communityErrorHandler } from '@/utils/errors/communityErrorHandler';

export const useDeleteCommentLike = () => {
  const queryClient = useQueryClient();
  const { open: openAlert } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: commentApi.unlikeComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
    onError: (error: HTTPError) => {
      communityErrorHandler(error, openAlert, 'LIKE');
    },
  });

  return mutation;
};
