'use client';

import { usePathname } from 'next/navigation';

import TabBarList from '@/components/molecules/TabBarList/TabBarList';

import * as S from './layout.styled';

export default function PurchaseLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <S.PurchaseLayout>
      <S.PurchaseHeader>
        <S.Heading>구독 및 결제</S.Heading>
        <TabBarList
          items={[
            {
              label: '구독',
              href: '/mypage/purchase/subscribe',
              state: pathname.startsWith('/mypage/purchase/subscribe') ? 'active' : 'default',
            },
            {
              label: '결제',
              href: '/mypage/purchase/payments',
              state: pathname.startsWith('/mypage/purchase/payments') ? 'active' : 'default',
            },
            {
              label: '쿠폰',
              href: '/mypage/purchase/coupons',
              state: pathname.startsWith('/mypage/purchase/coupons') ? 'active' : 'default',
            },
          ]}
          size='sm'
          interactionVariant='normal'
          fillContainer
        />
      </S.PurchaseHeader>

      {children}
    </S.PurchaseLayout>
  );
}
