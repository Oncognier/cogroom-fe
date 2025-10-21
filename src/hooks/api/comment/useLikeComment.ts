'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { commentApi } from '@/api/commentApis';
import { COMMENT_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore } from '@/stores/useModalStore';
import { communityErrorHandler } from '@/utils/errors/communityErrorHandler';

export const useLikeComment = () => {
  const queryClient = useQueryClient();
  const { open: openAlert } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: ({ commentId, isLiked }: { commentId: string; isLiked: boolean }) => {
      return isLiked ? commentApi.unlikeComment(commentId) : commentApi.likeComment(commentId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...COMMENT_QUERY_KEYS.COMMENT_LIST] });
    },
    onError: (error: HTTPError) => {
      communityErrorHandler(error, openAlert, 'LIKE');
    },
  });

  return { likeComment: mutation.mutate };
};
