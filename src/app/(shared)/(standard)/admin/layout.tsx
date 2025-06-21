import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import TabBarList from '@/components/molecules/TabBarList/TabBarList';

import * as S from './layout.styled';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
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
            { label: '공지사항', href: '/admin/notices' },
            { label: '회원관리', href: '/admin/users' },
            { label: '결제관리', href: '/admin/payments' },
            { label: '콘텐츠 관리', href: '/admin/contents' },
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
