'use client';

import { usePathname, useRouter } from 'next/navigation';

import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import TabBarList from '@/components/molecules/TabBarList/TabBarList';
import Loading from '@/components/organisms/Loading/Loading';
import useGetUserSummary from '@/hooks/api/member/useGetUserSummary';

import { getAdminTabState } from './_utils/getAdminTabState';
import * as S from './layout.styled';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useGetUserSummary();
  const pathname = usePathname();
  const router = useRouter();

  if (isLoading) return <Loading />;

  if (!data?.memberRole) {
    router.push('/authguard');
    return null;
  }

  const role = data?.memberRole;

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
              label: '커뮤니티',
              href: '/admin/community/posts',
              state: getAdminTabState(pathname, '/admin/community/posts', role),
            },
            {
              label: '콘텐츠 관리',
              href: '/admin/contents',
              state: getAdminTabState(pathname, '/admin/contents', role),
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
