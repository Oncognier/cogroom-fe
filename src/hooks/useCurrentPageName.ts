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
    return '학습 및 활동 기록';
  }

  return pathMap[pathname] || '마이페이지';
}
