'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { postApi } from '@/api/postApis';
import { POST_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore } from '@/stores/useModalStore';
import { communityErrorHandler } from '@/utils/errors/communityErrorHandler';

export const useCreatePostMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { open: openAlert } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: postApi.createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...POST_QUERY_KEYS.POST] });

      openAlert('alert', {
        message: '작성되었어요!',
        onConfirm: () => router.push(`/community`),
      });
    },
    onError: (error: HTTPError) => {
      communityErrorHandler(error, openAlert, 'CREATE');
    },
  });

  return { createPost: mutation.mutate, isLoading: mutation.isPending };
};
