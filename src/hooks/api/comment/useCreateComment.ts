'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { commentApi } from '@/api/commentApis';
import { POST_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore, useAppModalStore } from '@/stores/useModalStore';
import { CreateCommentRequest } from '@/types/comment';
import { communityErrorHandler } from '@/utils/errors/communityErrorHandler';

export const useCreateComment = (postId: string) => {
  const queryClient = useQueryClient();
  const { open: openAlert } = useAlertModalStore();
  const { open: openModal } = useAppModalStore();

  const mutation = useMutation({
    mutationFn: (request: CreateCommentRequest) => commentApi.createComment(postId, request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...POST_QUERY_KEYS.POST, postId] });
      queryClient.invalidateQueries({ queryKey: ['comments', postId] });
    },
    onError: (error: HTTPError) => {
      // 특별한 경우 처리
      if (error.code === 'TOKEN_INVALID_ERROR' || error.code === 'ACCESS_TOKEN_EMPTY_ERROR') {
        openModal('login');
        return;
      }

      communityErrorHandler(error, openAlert, 'COMMENT');
    },
  });

  return {
    createComment: mutation.mutate,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
};
