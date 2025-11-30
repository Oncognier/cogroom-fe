'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

import { Select } from '@/components/molecules/Select/Select';
import { PAYMENT_TAB_OPTIONS, PAYMENT_TAB_ROUTES } from '@/constants/common';

import * as S from './PaymentTabSelect.styled';

export default function PaymentTabSelect() {
  const router = useRouter();
  const pathname = usePathname();

  const currentTab = pathname.includes('/coupons') ? 'coupons' : 'payments';
  const [selectedTab, setSelectedTab] = useState<Array<string | number>>([currentTab]);

  const handleTabChange = (value: Array<string | number>) => {
    setSelectedTab(value);
    const selectedValue = value[0] as keyof typeof PAYMENT_TAB_ROUTES;
    if (PAYMENT_TAB_ROUTES[selectedValue]) {
      router.push(PAYMENT_TAB_ROUTES[selectedValue]);
    }
  };

  return (
    <S.TabSelectWrapper>
      <Select
        options={PAYMENT_TAB_OPTIONS}
        value={selectedTab}
        onChange={handleTabChange}
        isMulti={false}
        placeholder='탭을 선택하세요'
      />
    </S.TabSelectWrapper>
  );
}
