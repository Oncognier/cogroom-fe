'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { commentApi } from '@/api/commentApis';
import { useAlertModalStore } from '@/stores/useModalStore';
import { UpdateCommentRequest } from '@/types/comment';

export const useUpdateComment = () => {
  const queryClient = useQueryClient();
  const { open: openAlert } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: ({ commentId, data }: { commentId: string; data: UpdateCommentRequest }) =>
      commentApi.updateComment(commentId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
    onError: (error: HTTPError) => {
      switch (error.code) {
        case 'FORBIDDEN_ERROR':
          openAlert('alert', { message: '사용자 권한이 없습니다.' });
          break;
        case 'COMMENT_NOT_FOUND_ERROR':
          openAlert('alert', { message: '댓글을 찾을 수 없습니다.' });
          break;
        case 'MEMBER_NOT_FOUND_ERROR':
          openAlert('alert', { message: '사용자를 찾을 수 없습니다.' });
          break;
        case 'POST_NOT_ALLOWED_ANONYMOUS_COMMENT_ERROR':
          openAlert('alert', { message: '익명 게시글에만 익명 댓글을 달 수 있습니다.' });
          break;
        case 'COMMENT_FORBIDDEN_ERROR':
          openAlert('alert', { message: '본인이 작성한 댓글만 수정/삭제가 가능합니다.' });
          break;
        case 'COMMENT_ALREADY_DELETED_ERROR':
          openAlert('alert', { message: '이미 삭제된 댓글입니다.' });
          break;
        case 'WITHDRAWN_USER_COMMENT_ERROR':
          openAlert('alert', { message: '탈퇴한 사용자의 댓글입니다.' });
          break;
        case 'COMMENT_HIDDEN_ERROR':
          openAlert('alert', { message: '숨김 처리된 댓글입니다.' });
          break;
        default:
          openAlert('error', { message: error.message || '댓글 수정에 실패했습니다.' });
          break;
      }
    },
  });

  return mutation;
};
