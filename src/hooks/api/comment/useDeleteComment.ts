'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { commentApi } from '@/api/commentApis';
import { ADMIN_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore } from '@/stores/useModalStore';

export const useDeleteCommentMutation = () => {
  const queryClient = useQueryClient();
  const { open } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: commentApi.deleteComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...ADMIN_QUERY_KEYS.COMMENT_LIST] });
      // TODO: 댓글 목록 조회도 캐시 무효화 (추후 Optimistic Update로 개선)
      open('alert', { message: '댓글이 삭제되었습니다.' });
    },

    onError: (error: HTTPError) => {
      switch (error.code) {
        case 'COMMENT_FORBIDDEN_ERROR':
          open('alert', { message: '본인이 작성한 댓글만 수정/삭제가 가능합니다.' });
          break;
        case 'COMMENT_ALREADY_DELETED_ERROR':
          open('alert', { message: '이미 삭제된 댓글입니다.' });
          break;
        case 'COMMENT_HIDDEN_ERROR':
          open('alert', { message: '숨김 처리된 댓글입니다.' });
          break;
        default:
          open('alert', { message: '댓글 삭제에 실패했습니다.' });
          break;
      }
    },
  });

  return { deleteComment: mutation.mutate };
};
