import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { postApi } from '@/api/postApis';
import { MEMBER_QUERY_KEYS, POST_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore } from '@/stores/useModalStore';
import { communityErrorHandler } from '@/utils/errors/communityErrorHandler';

interface LikePostParams {
  postId: string;
  isLiked: boolean;
}

export const useLikePost = () => {
  const queryClient = useQueryClient();
  const { open: openAlert } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: ({ postId, isLiked }: LikePostParams) => {
      return isLiked ? postApi.unlikePost(postId) : postApi.likePost(postId);
    },
    onSuccess: (_data, variables) => {
      const postId = variables?.postId;

      queryClient.invalidateQueries({ queryKey: [...POST_QUERY_KEYS.POST_LIST] });
      queryClient.invalidateQueries({ queryKey: [...MEMBER_QUERY_KEYS.MEMBER_POSTS] });
      queryClient.invalidateQueries({ queryKey: [...POST_QUERY_KEYS.POST, postId] });
    },
    onError: (error: HTTPError) => {
      communityErrorHandler(error, openAlert, 'LIKE');
    },
  });

  return { likePost: mutation.mutate };
};
