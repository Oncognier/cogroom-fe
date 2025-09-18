import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { postApi } from '@/api/postApis';
import { POST_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore } from '@/stores/useModalStore';

interface TogglePostLikeParams {
  postId: string;
  isLiked: boolean;
}

export const useTogglePostLike = () => {
  const { open: openAlert } = useAlertModalStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, isLiked }: TogglePostLikeParams) => {
      return isLiked ? postApi.unlikePost(postId) : postApi.togglePostLike(postId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...POST_QUERY_KEYS.POST_LIST] });
    },
    onError: (error: HTTPError) => {
      switch (error.code) {
        case 'MEMBER_NOT_FOUND_ERROR':
          openAlert('alert', { message: '사용자를 찾을 수 없습니다.' });
          break;
        case 'FORBIDDEN_ERROR':
          openAlert('alert', { message: '사용자 권한이 없습니다.' });
          break;
        case 'POST_NOT_FOUND_ERROR':
          openAlert('alert', { message: '게시글을 찾을 수 없습니다.' });
          break;
        case 'ALREADY_LIKED_ERROR':
          openAlert('alert', { message: '이미 좋아요한 게시글입니다.' });
          break;
        case 'NOT_LIKED_ERROR':
          openAlert('alert', { message: '좋아요를 하지 않은 게시글입니다.' });
          break;
        default:
          openAlert('error', { message: error.message || '좋아요 처리에 실패했습니다.' });
          break;
      }
    },
  });
};
