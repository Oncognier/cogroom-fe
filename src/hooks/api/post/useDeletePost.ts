'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { postApi } from '@/api/postApis';
import { ADMIN_QUERY_KEYS } from '@/constants/queryKeys';

export const useDeletePostMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postApi.deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...ADMIN_QUERY_KEYS.POST_LIST] });
      // TODO: 게시글 목록 조회도 캐시 무효화 (추후 Optimistic Update로 개선)
    },
  });

  return { deletePost: mutation.mutate };
};
