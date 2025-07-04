'use client';

import { usePathname } from 'next/navigation';

import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import TabBarList from '@/components/molecules/TabBarList/TabBarList';
import AdminGuard from '@/components/organisms/Guard/AdminGuard/AdminGuard';
import Loading from '@/components/organisms/Loading/Loading';
import useGetUserSummary from '@/hooks/api/member/useGetUserSummary';

import { getAdminTabState } from './_utils/getAdminTabState';
import * as S from './layout.styled';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useGetUserSummary();
  const pathname = usePathname();

  const role = data?.memberRole;

  if (isLoading) return <Loading />;

  if (role === 'USER' || role === undefined) return <AdminGuard />;

  if (role === 'CONTENT_PROVIDER' && pathname !== '/admin' && !pathname.includes('/admin/contents')) {
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
          items={[
            {
              label: '공지사항',
              href: '/admin/notices',
              state: getAdminTabState(pathname, '/admin/notices', role),
            },
            {
              label: '회원관리',
              href: '/admin/users',
              state: getAdminTabState(pathname, '/admin/users', role),
            },
            {
              label: '결제관리',
              href: '/admin/payments',
              state: getAdminTabState(pathname, '/admin/payments', role),
            },
            {
              label: '콘텐츠 관리',
              href: '/admin/contents',
              state: getAdminTabState(pathname, '/admin/contents', role),
            },
          ]}
          size='md'
          interactionVariant='normal'
          fillContainer
        />
      </S.AdminHeader>

      {children}
    </S.AdminLayout>
  );
}
