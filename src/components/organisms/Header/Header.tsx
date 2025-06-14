import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { prefetchAuthAndUser } from '@/utils/api/prefetchAuthAndUser';

import * as S from './Header.styled';
import LeftNav from './LeftNav/LeftNav';
import RightNav from './RightNav/RightNav';

export default async function Header() {
  const queryClient = new QueryClient();

  const { accessToken, userSummary } = await prefetchAuthAndUser(queryClient);
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
