import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';

import * as S from './layout.styled';

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
