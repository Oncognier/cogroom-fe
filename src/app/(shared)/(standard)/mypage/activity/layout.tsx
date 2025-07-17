'use client';

import { usePathname } from 'next/navigation';

import TabBarList from '@/components/molecules/TabBarList/TabBarList';

import * as S from './layout.styled';

export default function ActivityLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <S.ActivityLayout>
      <S.ActivityHeader>
        <S.Heading>학습 및 활동기록</S.Heading>
        <TabBarList
          items={[
            {
              label: '데일리',
              href: '/mypage/activity/daily',
              state: pathname === '/mypage/activity/daily' ? 'active' : 'default',
            },
            {
              label: '콘텐츠',
              href: '/mypage/activity/contents',
              state: pathname === '/mypage/activity/contents' ? 'active' : 'default',
            },
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
