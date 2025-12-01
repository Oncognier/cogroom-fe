'use client';

import { usePathname } from 'next/navigation';

import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import TabBarList from '@/components/molecules/TabBarList/TabBarList';
import AdminGuard from '@/components/organisms/AdminGuard/AdminGuard';
import Loading from '@/components/organisms/Loading/Loading';
import { ADMIN_NAV_ITEMS } from '@/constants/common';
import { useAuthStore } from '@/stores/useAuthStore';

import { getAdminTabState } from './_utils/getAdminTabState';
import * as S from './layout.styled';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isUnknown = useAuthStore((s) => s.isUnknown());
  const isAdmin = useAuthStore((s) => s.isAdmin());
  const role = useAuthStore((s) => s.role);

  if (isUnknown) return <Loading />;

  if (!isAdmin || !role) {
    return <AdminGuard />;
  }

  return (
    <S.AdminLayout>
      <S.AdminHeader>
        <Breadcrumb
          items={[
            { name: '홈', href: '/' },
            { name: '관리자 모드', href: '/admin' },
          ]}
        />
        <TabBarList
          items={ADMIN_NAV_ITEMS.map((item) => ({
            label: item.label,
            href: item.href,
            state: getAdminTabState(pathname, item.href.includes('community') ? '/admin/community' : item.href, role),
          }))}
          size='md'
          interactionVariant='normal'
          fillContainer
        />
      </S.AdminHeader>

      {children}
    </S.AdminLayout>
  );
}
