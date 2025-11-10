import { usePathname } from 'next/navigation';

import { SIDEBAR_NAV_ITEMS } from '@/constants/common';

export function useCurrentPageName() {
  const pathname = usePathname();

  const sidebarPathMap = Object.fromEntries(SIDEBAR_NAV_ITEMS.map((item) => [item.href, item.label]));

  const pathMap: Record<string, string> = {
    '/mypage': '마이 대시보드',
    ...sidebarPathMap,
  };

  if (pathname.startsWith('/mypage/activity')) {
    return SIDEBAR_NAV_ITEMS.find((item) => item.href === '/mypage/activity/daily')?.label || '데일리 활동';
  }

  if (pathname.startsWith('/mypage/community')) {
    return SIDEBAR_NAV_ITEMS.find((item) => item.href === '/mypage/community/posts')?.label || '커뮤니티 활동';
  }

  if (pathname.startsWith('/mypage/purchase')) {
    return SIDEBAR_NAV_ITEMS.find((item) => item.href === '/mypage/purchase/subscribe')?.label || '구독 및 결제';
  }

  return pathMap[pathname] || '마이페이지';
}
