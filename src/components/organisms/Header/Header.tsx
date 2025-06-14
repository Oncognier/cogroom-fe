import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { prefetchAuthAndUser } from '@/utils/api/prefetchAuthAndUser';

import * as S from './Header.styled';
import LeftNav from './LeftNav/LeftNav';
import RightNav from './RightNav/RightNav';

export default async function Header() {
  const queryClient = new QueryClient();

  let accessToken: string | undefined;
  let userSummary = undefined;

  try {
    const result = await prefetchAuthAndUser(queryClient);
    accessToken = result.accessToken;
    userSummary = result.userSummary;
  } catch (err) {
    alert(`Auth prefetch failed: ${err}`);
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <S.Header>
        <S.Wrapper>
          <LeftNav />
          <RightNav
            accessToken={accessToken}
            userSummary={userSummary}
          />
        </S.Wrapper>
      </S.Header>
    </HydrationBoundary>
  );
}
