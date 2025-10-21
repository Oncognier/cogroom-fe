import { useMutation, useQueryClient } from '@tanstack/react-query';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { postApi } from '@/api/postApis';
import { MEMBER_QUERY_KEYS, POST_QUERY_KEYS } from '@/constants/queryKeys';
import { useAlertModalStore } from '@/stores/useModalStore';
import { communityErrorHandler } from '@/utils/errors/communityErrorHandler';

interface SavePostParams {
  postId: string;
  isSaved: boolean;
}

export const useSavePost = () => {
  const queryClient = useQueryClient();
  const { open: openAlert } = useAlertModalStore();

  const mutation = useMutation({
    mutationFn: ({ postId, isSaved }: SavePostParams) => {
      return isSaved ? postApi.unsavePost(postId) : postApi.savePost(postId);
    },
    onSuccess: (_data, variables) => {
      const postId = variables?.postId;

      queryClient.invalidateQueries({ queryKey: [...POST_QUERY_KEYS.POST_LIST] });
      queryClient.invalidateQueries({ queryKey: [...MEMBER_QUERY_KEYS.MEMBER_POSTS] });
      queryClient.invalidateQueries({ queryKey: [...POST_QUERY_KEYS.POST, postId] });
    },
    onError: (error: HTTPError) => {
      communityErrorHandler(error, openAlert, 'SAVE');
    },
  });

  return { savePost: mutation.mutate };
};
