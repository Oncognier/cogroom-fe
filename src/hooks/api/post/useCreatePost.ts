'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { postApi } from '@/api/postApis';
import { POST_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore } from '@/stores/useModalStore';

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
      switch (error.code) {
        case 'CATEGORY_NOT_ALLOWED_ANONYMOUS_POST_ERROR':
          openAlert('alert', { message: '익명 게시글을 등록할 수 없는 카테고리입니다.' });
          break;
        case 'CATEGORY_WRITE_FORBIDDEN_ERROR':
          openAlert('alert', { message: '선택한 카테고리의 게시글을 작성할 수 있는 권한이 없습니다.' });
          break;
        case 'MEMBER_NOT_FOUND_ERROR':
          openAlert('alert', { message: '사용자를 찾을 수 없습니다.' });
          break;
        default:
          openAlert('error', { message: error.message || '게시글 작성에 실패했습니다.' });
          break;
      }
    },
  });

  return { createPost: mutation.mutate, isLoading: mutation.isPending };
};
