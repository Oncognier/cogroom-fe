'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { commentApi } from '@/api/commentApis';
import { POST_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore, useAppModalStore } from '@/stores/useModalStore';
import { CreateCommentRequest } from '@/types/comment';

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
      switch (error.code) {
        case 'MEMBER_NOT_FOUND_ERROR':
          openAlert('alert', { message: '사용자를 찾을 수 없습니다.' });
          break;
        case 'FORBIDDEN_ERROR':
          openAlert('alert', { message: '사용자 권한이 없습니다.' });
          break;
        case 'TOKEN_INVALID_ERROR':
        case 'ACCESS_TOKEN_EMPTY_ERROR':
          openModal('login');
          break;
        case 'POST_NOT_FOUND_ERROR':
          openAlert('alert', { message: '게시물을 찾을 수 없습니다.' });
          break;
        case 'POST_NOT_ALLOWED_ANONYMOUS_COMMENT_ERROR':
          openAlert('alert', { message: '익명 게시글에만 익명 댓글을 달 수 있습니다.' });
          break;
        case 'PARENT_COMMENT_NOT_FOUND_ERROR':
          openAlert('alert', { message: '부모 댓글을 찾을 수 없습니다.' });
          break;
        case 'CONTENT_NOTBLANK_ERROR':
          openAlert('alert', { message: '댓글 내용을 1자 이상 작성해주세요.' });
          break;
        case 'CONTENT_SIZE_ERROR':
          openAlert('alert', { message: '댓글 내용은 1000자 이하여야 합니다.' });
          break;
        case 'MENTIONED_MEMBER_NOT_FOUND_ERROR':
          openAlert('alert', { message: '멘션된 사용자를 찾을 수 없습니다.' });
          break;
        default:
          openAlert('error', { message: error.message || '댓글 작성에 실패했습니다.' });
          break;
      }
    },
  });

  return {
    createComment: mutation.mutate,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
};
