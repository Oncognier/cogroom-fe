import { QueryClient } from '@tanstack/react-query';

import { authApi } from '@/api/authApis';
import { memberApi } from '@/api/memberApis';
import { AUTH_QUERY_KEYS, MEMBER_QUERY_KEYS } from '@/constants/queryKeys';
import { UserSummary } from '@/types/member';

interface PrefetchResult {
  accessToken?: string;
  userSummary?: UserSummary;
}

export async function prefetchAuthAndUser(queryClient: QueryClient): Promise<PrefetchResult> {
  try {
    await queryClient.prefetchQuery({
      queryKey: [...AUTH_QUERY_KEYS.AUTH_REISSUE],
      queryFn: () => authApi.reissueToken({ prefetch: true }),
      meta: { prefetch: true },
    });

    const refreshResult = queryClient.getQueryData<{ accessToken: string }>(AUTH_QUERY_KEYS.AUTH_REISSUE);
    const accessToken = refreshResult?.accessToken;

    let userSummary: UserSummary | undefined;

    if (accessToken) {
      await queryClient.prefetchQuery({
        queryKey: [...MEMBER_QUERY_KEYS.MEMBER_SUMMARY],
        queryFn: () => memberApi.getUserSummary(accessToken, { prefetch: true }),
      });

      userSummary = queryClient.getQueryData<UserSummary>(MEMBER_QUERY_KEYS.MEMBER_SUMMARY);
    }

    return { accessToken, userSummary };
  } catch (err) {
    return {};
  }
}
