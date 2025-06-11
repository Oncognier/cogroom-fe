import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { UserSummary } from '@/types/member';
import { prefetchAuthAndUser } from '@/utils/api/prefetchAuthAndUser';

import * as S from './Header.styled';
import LeftNav from './LeftNav/LeftNav';
import RightNav from './RightNav/RightNav';

export default async function Header() {
  const queryClient = new QueryClient();

  let userSummary: UserSummary | undefined;

  try {
    userSummary = await prefetchAuthAndUser(queryClient);
  } catch (err) {
    alert(`Auth prefetch failed: ${err}`);
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <S.Header>
        <LeftNav />
        <RightNav userSummary={userSummary} />
      </S.Header>
    </HydrationBoundary>
  );
}
