'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { postApi } from '@/api/postApis';
import { POST_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore } from '@/stores/useModalStore';

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
      switch (error.code) {
        case 'MEMBER_NOT_FOUND_ERROR':
          openAlert('alert', { message: '사용자를 찾을 수 없습니다.' });
          break;
        case 'FORBIDDEN_ERROR':
          openAlert('alert', { message: '사용자 권한이 없습니다.' });
          break;
        case 'CATEGORY_NOT_ALLOWED_ANONYMOUS_POST_ERROR':
          openAlert('alert', { message: '익명 게시글을 등록할 수 없는 카테고리입니다.' });
          break;
        case 'POST_NOT_FOUND_ERROR':
          openAlert('alert', { message: '게시물을 찾을 수 없습니다.' });
          break;
        case 'POST_FORBIDDEN_ERROR':
          openAlert('alert', { message: '본인이 작성한 게시글만 수정/삭제가 가능합니다.' });
          break;
        case 'TITLE_NOTBLANK_ERROR':
          openAlert('alert', { message: '게시글 제목을 1자 이상 작성해주세요.' });
          break;
        case 'TITLE_SIZE_ERROR':
          openAlert('alert', { message: '게시글 제목은 30자 이하여야 합니다.' });
          break;
        case 'CATEGORY_WRITE_FORBIDDEN_ERROR':
          openAlert('alert', { message: '선택한 카테고리의 게시글을 작성할 수 있는 권한이 없습니다.' });
          break;
        case 'POST_ALREADY_DELETED_ERROR':
          openAlert('alert', { message: '이미 삭제된 게시글입니다.' });
          break;
        case 'ISANONYMOUS_NOTNULL_ERROR':
          openAlert('alert', { message: '게시글 익명 여부는 필수입니다.' });
          break;
        case 'POST_HIDDEN_ERROR':
          openAlert('alert', { message: '숨김 처리된 게시글입니다.' });
          break;
        default:
          openAlert('error', { message: error.message || '게시글 수정에 실패했습니다.' });
          break;
      }
    },
  });

  return { updatePost: mutation.mutate, isLoading: mutation.isPending };
};
