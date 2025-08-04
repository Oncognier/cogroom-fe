import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query';

import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import { STREAK_SHARE_IMAGE_URLS } from '@/constants/image';

import * as S from './layout.styled';

export const dynamic = 'force-dynamic';

export async function generateMetadata() {
  const randomImage = STREAK_SHARE_IMAGE_URLS[Math.floor(Math.random() * STREAK_SHARE_IMAGE_URLS.length)];

  return {
    title: '🔥 나의 데일리 스트릭',
    description: '오늘도 코그룸과 함께 성장 중!',
    openGraph: {
      title: '🔥 나의 데일리 스트릭',
      description: '오늘도 코그룸과 함께 성장 중!',
      images: [randomImage],
      url: 'https://cogroom.com/daily',
    },
  };
}

export default async function DailyLayout({ children }: { children: React.ReactNode }) {
  return (
    <S.DailyLayout>
      <Breadcrumb
        items={[
          { name: '홈', href: '/' },
          { name: '데일리', href: '/daily' },
        ]}
      />
      {children}
    </S.DailyLayout>
  );
}
