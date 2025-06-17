import TabBarList from '@/components/molecules/TabBarList/TabBarList';

import * as S from './layout.styled';

export default function ActivityLayout({ children }: { children: React.ReactNode }) {
  return (
    <S.ActivityLayout>
      <S.ActivityHeader>
        <S.Heading>학습 및 활동기록</S.Heading>
        <TabBarList
          items={[
            { label: '데일리', href: '/mypage/activity/daily' },
            { label: '콘텐츠', href: '/mypage/activity/contents' },
          ]}
          size='sm'
          interactionVariant='normal'
          fillContainer
        />
      </S.ActivityHeader>

      {children}
    </S.ActivityLayout>
  );
}
