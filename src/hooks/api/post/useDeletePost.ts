'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postApi } from '@/api/postApis';
import { ADMIN_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore } from '@/stores/useModalStore';
import { HTTPError } from '@/api/axios/errors/HTTPError';

export const useDeletePostMutation = () => {
  const queryClient = useQueryClient();
  const { open } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: postApi.deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...ADMIN_QUERY_KEYS.POST_LIST] });
      // TODO: 게시글 목록 조회도 캐시 무효화 (추후 Optimistic Update로 개선)
      open('alert', { message: '글이 삭제되었습니다.' });
    },
    onError: (error: HTTPError) => {
      switch (error.code) {
        case 'POST_FORBIDDEN_ERROR':
          open('alert', { message: '본인이 작성한 게시글만 수정/삭제가 가능합니다.' });
          break;
        case 'POST_ALREADY_DELETED_ERROR':
          open('alert', { message: '이미 삭제된 게시글입니다.' });
          break;
        case 'POST_HIDDEN_ERROR':
          open('alert', { message: '숨김 처리된 게시글입니다.' });
          break;
        default:
          open('alert', { message: '글 삭제에 실패했습니다.' });
          break;
      }
    },
  });

  return { deletePost: mutation.mutate };
};
