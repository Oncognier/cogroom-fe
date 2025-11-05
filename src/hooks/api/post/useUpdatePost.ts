'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { postApi } from '@/api/postApis';
import { POST_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore } from '@/stores/useModalStore';
import { communityErrorHandler } from '@/utils/errors/communityErrorHandler';

export const useUpdatePostMutation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { open: openAlert } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: ({
      postId,
      ...updateData
    }: {
      postId: string;
      title: string;
      categoryId: number;
      content: string;
      isAnonymous: boolean;
      imageUrlList: string[];
      deleteUrlList: string[];
    }) => postApi.updatePost(postId, updateData),
    onSuccess: (_result, { postId }) => {
      queryClient.invalidateQueries({ queryKey: [...POST_QUERY_KEYS.POST] });
      queryClient.invalidateQueries({ queryKey: [...POST_QUERY_KEYS.POST, postId] });

      openAlert('alert', {
        message: '수정되었어요!',
        onConfirm: () => router.push(`/community/post/${postId}`),
      });
    },
    onError: (error: HTTPError) => {
      communityErrorHandler(error, openAlert, 'UPDATE');
    },
  });

  return { updatePost: mutation.mutate, isLoading: mutation.isPending };
};
