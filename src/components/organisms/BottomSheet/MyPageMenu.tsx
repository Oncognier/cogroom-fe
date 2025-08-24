'use client';

import { useRouter } from 'next/navigation';

import TextButton from '@/components/atoms/TextButton/TextButton';
import { SIDEBAR_NAV_ITEMS } from '@/constants/common';
import useGetUserSummary from '@/hooks/api/member/useGetUserSummary';
import { useAppModalStore } from '@/stores/useModalStore';

import * as S from './BottomSheet.styled';

interface MyPageMenuProps {
  onClose: () => void;
}

export default function MyPageMenu({ onClose }: MyPageMenuProps) {
  const router = useRouter();
  const { open } = useAppModalStore();
  const { data } = useGetUserSummary();

  const handleMenuClick = (path: string) => {
    onClose();
    if (path === '#logout') {
      open('logout');
    } else {
      router.push(path);
    }
  };

  const menuItems = [
    { label: '마이 대시보드', path: '/mypage' },
    ...SIDEBAR_NAV_ITEMS.map((item) => ({ label: item.label, path: item.href })),
    ...(data?.memberRole === 'ADMIN' || data?.memberRole === 'CONTENT_PROVIDER'
      ? [{ label: '관리자모드', path: '/admin' }]
      : []),
    { label: '로그아웃', path: '#logout' },
  ];

  return (
    <>
      <S.TitleSection>
        <S.HandleBar />
        <S.Title>마이페이지</S.Title>
      </S.TitleSection>
      <S.MenuSection>
        <S.MenuList>
          {menuItems.map((item) => (
            <TextButton
              key={item.path}
              label={item.label}
              color='assistive'
              size='md'
              interactionVariant='normal'
              isDisabled={false}
              onClick={() => handleMenuClick(item.path)}
            />
          ))}
        </S.MenuList>
      </S.MenuSection>
    </>
  );
}
