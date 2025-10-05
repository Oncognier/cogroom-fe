'use client';

import { useRouter } from 'next/navigation';

import ChevronDown from '@/assets/icons/chevrondown.svg';
import Setting from '@/assets/icons/setting.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import AuthGuard from '@/components/organisms/AuthGuard/AuthGuard';
import BottomSheet, { MyPageMenu } from '@/components/organisms/BottomSheet';
import Loading from '@/components/organisms/Loading/Loading';
import useGetUserSummary from '@/hooks/api/member/useGetUserSummary';
import { useBottomSheet } from '@/hooks/useBottomSheet';
import { useCurrentPageName } from '@/hooks/useCurrentPageName';
import { useAuthStore } from '@/stores/useAuthStore';

import MyPageBreadcrumb from './_components/MyPageBreadcrumb/MyPageBreadcrumb';
import Sidebar from './_components/Sidebar/Sidebar';
import * as S from './layout.styled';

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
  const { data: userSummary } = useGetUserSummary();
  const bottomSheet = useBottomSheet();
  const currentPageName = useCurrentPageName();
  const router = useRouter();
  const isUnauth = useAuthStore((s) => s.isUnauth());
  const isUnknown = useAuthStore((s) => s.isUnknown());

  if (isUnauth) {
    return <AuthGuard />;
  }

  if (isUnknown) {
    return <Loading />;
    //TODO: 스켈레톤 적용 시 여기는 없애고 컴포넌트 안에서 처리하기
  }

  return (
    <S.MyPageLayout>
      <MyPageBreadcrumb />

      <S.MobileContainer>
        <S.MobileProfileSection>
          <AvatarPerson
            type='icon'
            size='lg'
            src={userSummary?.imageUrl}
            onClick={() => router.push('/mypage/setting')}
          />

          <S.MobileUserWrapper>
            <S.MobileUserName>{userSummary?.nickname || ''}</S.MobileUserName>
            <S.MobileSettingIcon onClick={() => router.push('/mypage/setting')}>
              <Setting />
            </S.MobileSettingIcon>
          </S.MobileUserWrapper>
        </S.MobileProfileSection>

        <S.MobileMenuButton onClick={bottomSheet.open}>
          <S.MobileMenuButtonText>{currentPageName}</S.MobileMenuButtonText>
          <S.MobileMenuButtonIcon>
            <ChevronDown />
          </S.MobileMenuButtonIcon>
        </S.MobileMenuButton>
      </S.MobileContainer>

      <S.ContentLayout>
        <Sidebar />
        <S.Content>{children}</S.Content>
      </S.ContentLayout>

      <BottomSheet
        isOpen={bottomSheet.isOpen}
        onClose={bottomSheet.close}
      >
        <MyPageMenu onClose={bottomSheet.close} />
      </BottomSheet>
    </S.MyPageLayout>
  );
}
