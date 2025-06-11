import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { authApi } from '@/api/authApis';
import { memberApi } from '@/api/memberApis';
import { AUTH_QUERY_KEYS, MEMBER_QUERY_KEYS } from '@/constants/queryKeys';

export default async function GlobalAuthInitializer({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  try {
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
    }
  } catch (err) {
    console.warn('Auth initialization failed, starting as guest:', err);
  }

  const dehydratedState = dehydrate(queryClient);

  return <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>;
}
