import type { Metadata } from 'next';

import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import { STREAK_SHARE_IMAGE_URLS } from '@/constants/image';

import * as S from './layout.styled';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  const randomImage = STREAK_SHARE_IMAGE_URLS[Math.floor(Math.random() * STREAK_SHARE_IMAGE_URLS.length)];

  return {
    title: '1일 1사유로 매일 성장하기',
    description: '생각을 구조화하고, 자기성찰을 돕는 코그룸 cogroom 데일리 사유 루틴을 습관화하세요',
    openGraph: {
      title: '1일 1사유로 매일 성장하기',
      description: '생각을 구조화하고, 자기성찰을 돕는 코그룸 cogroom 데일리 사유 루틴을 습관화하세요',
      type: 'website',
      locale: 'ko_KR',
      url: 'https://cogroom.com/daily',
      siteName: '코그룸',
      images: [
        {
          url: randomImage,
          width: 1200,
          height: 630,
          alt: '코그룸 데일리 사유 루틴',
        },
      ],
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
      <S.MainLayout>{children}</S.MainLayout>
    </S.DailyLayout>
  );
}
