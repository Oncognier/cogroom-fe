import { usePathname } from 'next/navigation';

export function useCurrentPageName() {
  const pathname = usePathname();

  const pathMap: Record<string, string> = {
    '/mypage': '마이 대시보드',
    '/mypage/setting': '개인정보 설정',
    '/mypage/activity/daily': '학습 및 활동 기록',
    '/mypage/purchase': '구매 기록',
    '/mypage/community': '커뮤니티 활동',
    '/mypage/notification': '푸시 및 카톡 알림',
  };

  return pathMap[pathname] || '마이페이지';
}
