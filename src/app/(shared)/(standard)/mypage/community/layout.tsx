'use client';

import TabBarList from '@/components/molecules/TabBarList/TabBarList';

import * as S from './layout.styled';
import { usePathname } from 'next/navigation';

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <S.CommunityLayout>
      <S.CommunityHeader>
        <S.Heading>커뮤니티 활동</S.Heading>
        <TabBarList
          items={[
            {
              label: '작성글',
              href: '/mypage/community/posts',
              state: pathname === '/mypage/community/posts' ? 'active' : 'default',
            },
            {
              label: '댓글',
              href: '/mypage/community/comments',
              state: pathname === '/mypage/community/comments' ? 'active' : 'default',
            },
            {
              label: '좋아요',
              href: '/mypage/community/likes',
              state: pathname === '/mypage/community/likes' ? 'active' : 'default',
            },
          ]}
          size='sm'
          interactionVariant='normal'
          fillContainer
        />
      </S.CommunityHeader>

      {children}
    </S.CommunityLayout>
  );
}
