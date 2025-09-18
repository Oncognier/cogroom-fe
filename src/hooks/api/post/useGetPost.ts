import { useQuery } from '@tanstack/react-query';

import { postApi } from '@/api/postApis';
import { POST_QUERY_KEYS } from '@/constants/queryKeys';

export const useGetPost = (postId: string, options?: { enabled?: boolean }) => {
  return useQuery({
    queryKey: [...POST_QUERY_KEYS.POST, postId],
    queryFn: () => postApi.getPost(postId),
    enabled: !!postId && (options?.enabled ?? true),
  });
};
