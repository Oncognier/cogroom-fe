'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { memberApi } from '@/api/memberApis';
import { MEMBER_QUERY_KEYS, POST_QUERY_KEYS } from '@/constants/queryKeys';

export default function useDeleteUserPost(postList: number[]) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => memberApi.deleteUserPost(postList),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [...MEMBER_QUERY_KEYS.MEMBER_POSTS] });
      queryClient.invalidateQueries({ queryKey: [...POST_QUERY_KEYS.POST] });
    },
  });
}
