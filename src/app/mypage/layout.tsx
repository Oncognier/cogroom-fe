'use client';

import MyPageBreadcrumb from './_components/MyPageBreadcrumb/MyPageBreadcrumb';
import Sidebar from './_components/Sidebar/Sidebar';
import S from './layout.styled';

const MypageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.MainLayout>
      <MyPageBreadcrumb />
      <S.Layout>
        <Sidebar />
        <S.Content>{children}</S.Content>
      </S.Layout>
    </S.MainLayout>
  );
};

export default MypageLayout;
