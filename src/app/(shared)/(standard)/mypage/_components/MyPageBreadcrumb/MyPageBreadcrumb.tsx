'use client';

import { usePathname } from 'next/navigation';

import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import { useCurrentPageName } from '@/hooks/useCurrentPageName';

export default function MyPageBreadcrumb() {
  const pathname = usePathname();
  const pageName = useCurrentPageName();

  const getBreadcrumbItems = (pathname: string, pageName: string) => {
    const items = [
      { name: '홈', href: '/' },
      { name: '마이페이지', href: '/mypage' },
    ];

    if (pageName !== '마이페이지') {
      items.push({ name: pageName, href: pathname });
    }

    return items;
  };

  return <Breadcrumb items={getBreadcrumbItems(pathname, pageName)} />;
}
