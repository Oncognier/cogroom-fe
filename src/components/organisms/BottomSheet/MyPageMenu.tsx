'use client';

import { useRouter } from 'next/navigation';

import * as S from './BottomSheet.styled';

interface MyPageMenuProps {
  onClose: () => void;
}

export default function MyPageMenu({ onClose }: MyPageMenuProps) {
  const router = useRouter();

  const handleMenuClick = (path: string) => {
    onClose();
    router.push(path);
  };

  const menuItems = [
    { label: '마이 대시보드', path: '/mypage' },
    { label: '개인정보 설정', path: '/mypage/setting' },
    { label: '학습 및 활동기록', path: '/mypage/activity' },
    { label: '구매 기록', path: '/mypage/purchase' },
    { label: '커뮤니티 활동', path: '/mypage/community' },
    { label: '푸시 및 카톡 알림', path: '/mypage/notification' },
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
            <S.MenuItem
              key={item.path}
              onClick={() => handleMenuClick(item.path)}
            >
              {item.label}
            </S.MenuItem>
          ))}
        </S.MenuList>
      </S.MenuSection>
    </>
  );
}
