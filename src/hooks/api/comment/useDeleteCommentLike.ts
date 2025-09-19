'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { commentApi } from '@/api/commentApis';
import { useAlertModalStore } from '@/stores/useModalStore';

export const useDeleteCommentLike = () => {
  const queryClient = useQueryClient();
  const { open: openAlert } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: commentApi.deleteCommentLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
    onError: (error: HTTPError) => {
      switch (error.code) {
        case 'MEMBER_NOT_FOUND_ERROR':
          openAlert('alert', { message: '사용자를 찾을 수 없습니다.' });
          break;
        case 'FORBIDDEN_ERROR':
          openAlert('alert', { message: '사용자 권한이 없습니다.' });
          break;
        case 'COMMENT_NOT_FOUND_ERROR':
          openAlert('alert', { message: '댓글을 찾을 수 없습니다.' });
          break;
        case 'NOT_LIKED_ERROR':
          openAlert('alert', { message: '좋아요를 하지 않은 댓글입니다.' });
          break;
        default:
          openAlert('error', { message: error.message || '댓글 좋아요 취소에 실패했습니다.' });
          break;
      }
    },
  });

  return mutation;
};
