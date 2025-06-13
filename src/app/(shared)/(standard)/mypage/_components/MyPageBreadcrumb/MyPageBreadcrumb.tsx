'use client';

import { usePathname } from 'next/navigation';

import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';

export default function MyPageBreadcrumb() {
  const pathname = usePathname();

  const getBreadcrumbItems = (pathname: string) => {
    const items = [
      { name: '홈', href: '/' },
      { name: '마이페이지', href: '/mypage' },
    ];

    const pathMap: Record<string, string> = {
      '/mypage/setting': '개인정보 설정',
      '/mypage/history': '학습 및 활동 기록',
      '/mypage/purchase': '구매 기록',
      '/mypage/community': '커뮤니티 활동',
      '/mypage/notification': '푸시 및 카톡 알림',
    };

    if (pathMap[pathname]) {
      items.push({ name: pathMap[pathname], href: pathname });
    }

    return items;
  };

  return <Breadcrumb items={getBreadcrumbItems(pathname)} />;
}
