'use client';

import AuthGuard from '@/components/organisms/AuthGuard/AuthGuard';
import { useAuthStore } from '@/stores/useAuthStore';

import MyPageBreadcrumb from './_components/MyPageBreadcrumb/MyPageBreadcrumb';
import Sidebar from './_components/Sidebar/Sidebar';
import * as S from './layout.styled';

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  if (!isLoggedIn) return <AuthGuard />;

  return (
    <S.MainLayout>
      <MyPageBreadcrumb />
      <S.Layout>
        <Sidebar />
        <S.Content>{children}</S.Content>
      </S.Layout>
    </S.MainLayout>
  );
}
