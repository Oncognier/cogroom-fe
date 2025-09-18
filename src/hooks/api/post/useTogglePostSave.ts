import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { postApi } from '@/api/postApis';
import { useAlertModalStore } from '@/stores/useModalStore';
import { POST_QUERY_KEYS } from '@/constants/queryKeys';

interface TogglePostSaveParams {
  postId: string;
  isSaved: boolean;
}

export const useTogglePostSave = () => {
  const { open: openAlert } = useAlertModalStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, isSaved }: TogglePostSaveParams) => {
      return isSaved ? postApi.unsavePost(postId) : postApi.savePost(postId);
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
        case 'ALREADY_SAVED_ERROR':
          openAlert('alert', { message: '이미 저장한 게시글입니다.' });
          break;
        case 'NOT_SAVED_ERROR':
          openAlert('alert', { message: '저장을 하지 않은 게시글입니다.' });
          break;
        default:
          openAlert('error', { message: error.message || '저장 처리에 실패했습니다.' });
          break;
      }
    },
  });
};
