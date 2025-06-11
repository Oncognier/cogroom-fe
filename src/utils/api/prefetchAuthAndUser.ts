import { QueryClient } from '@tanstack/react-query';

import { authApi } from '@/api/authApis';
import { memberApi } from '@/api/memberApis';
import { AUTH_QUERY_KEYS, MEMBER_QUERY_KEYS } from '@/constants/queryKeys';
import { UserSummary } from '@/types/member';

export async function prefetchAuthAndUser(queryClient: QueryClient): Promise<UserSummary | undefined> {
  await queryClient.prefetchQuery({
    queryKey: AUTH_QUERY_KEYS.AUTH_REISSUE,
    queryFn: authApi.reissueToken,
  });

  const refreshResult = queryClient.getQueryData<{ accessToken: string }>(AUTH_QUERY_KEYS.AUTH_REISSUE);
  const accessToken = refreshResult?.accessToken;

  if (accessToken) {
    await queryClient.prefetchQuery({
      queryKey: MEMBER_QUERY_KEYS.MEMBER_SUMMARY,
      queryFn: () => memberApi.getUserSummary(accessToken),
    });

    const userSummary = queryClient.getQueryData<UserSummary>(MEMBER_QUERY_KEYS.MEMBER_SUMMARY);
    return userSummary;
  }

  return undefined;
}
