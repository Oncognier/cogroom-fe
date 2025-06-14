import TabBarList from '@/components/molecules/TabBarList/TabBarList';

import * as S from './layout.styled';

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return (
    <S.CommunityLayout>
      <S.CommunityHeader>
        <S.Heading>커뮤니티 활동</S.Heading>
        <TabBarList
          items={[
            { label: '작성글', href: '/mypage/community/posts' },
            { label: '댓글', href: '/mypage/community/comments' },
            { label: '좋아요', href: '/mypage/community/likes' },
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
