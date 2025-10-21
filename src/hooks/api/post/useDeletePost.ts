'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { postApi } from '@/api/postApis';
import { ADMIN_QUERY_KEYS, POST_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore } from '@/stores/useModalStore';
import { communityErrorHandler } from '@/utils/errors/communityErrorHandler';

export const useDeletePostMutation = (onSuccessCallback?: () => void) => {
  const queryClient = useQueryClient();
  const { open } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: postApi.deletePost,
    onSuccess: (_data, variables) => {
      const postId = variables?.postId;

      queryClient.invalidateQueries({ queryKey: [...ADMIN_QUERY_KEYS.POST_LIST] });
      queryClient.invalidateQueries({ queryKey: [...POST_QUERY_KEYS.POST_LIST] });
      queryClient.invalidateQueries({ queryKey: [...POST_QUERY_KEYS.POST, postId] });

      open('alert', {
        message: '글이 삭제되었습니다.',
        onConfirm: onSuccessCallback,
      });
    },
    onError: (error: HTTPError) => {
      communityErrorHandler(error, open, 'DELETE');
    },
  });

  return { deletePost: mutation.mutate };
};
