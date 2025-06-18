import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import { REPORT_IMAGE } from '@/constants/image';

import * as S from './layout.styled';

export async function generateMetadata() {
  return {
    title: '🔥 나의 데일리 스트릭',
    description: '오늘도 코그룸과 함께 성장 중!',
    openGraph: {
      title: '🔥 나의 데일리 스트릭',
      description: '오늘도 코그룸과 함께 성장 중!',
      images: [REPORT_IMAGE],
      url: 'https://cogroom.com/daily',
    },
  };
}

export default function DailyLayout({ children }: { children: React.ReactNode }) {
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
