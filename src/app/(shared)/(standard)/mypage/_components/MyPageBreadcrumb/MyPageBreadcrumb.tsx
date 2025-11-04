'use client';

import { usePathname } from 'next/navigation';

import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import { SIDEBAR_NAV_ITEMS } from '@/constants/common';

export default function MyPageBreadcrumb() {
  const pathname = usePathname();

  const getBreadcrumbItems = (pathname: string) => {
    const items = [
      { name: '홈', href: '/' },
      { name: '마이페이지', href: '/mypage' },
    ];

    const sidebarPathMap = Object.fromEntries(SIDEBAR_NAV_ITEMS.map((item) => [item.href, item.label]));

    const pathMap: Record<string, string> = {
      ...sidebarPathMap,
    };

    if (pathname.startsWith('/mypage/activity')) {
      items.push({ name: '학습 및 활동 기록', href: pathname });
    } else if (pathMap[pathname]) {
      items.push({ name: pathMap[pathname], href: pathname });
    }

    return items;
  };

  return <Breadcrumb items={getBreadcrumbItems(pathname)} />;
}
