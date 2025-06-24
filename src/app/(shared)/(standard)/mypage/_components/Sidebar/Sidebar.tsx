'use client';

import { usePathname, useRouter } from 'next/navigation';

import Setting from '@/assets/icons/setting.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import { SIDEBAR_NAV_ITEMS } from '@/constants/common';
import useGetUserSummary from '@/hooks/api/member/useGetUserSummary';
import { useModalStore } from '@/stores/useModalStore';

import * as S from './Sidebar.styled';
import SidebarNavItem from './SidebarNavItem/SidebarNavItem';

export default function Sidebar() {
  const { data, isLoading } = useGetUserSummary();
  const { open } = useModalStore();
  const router = useRouter();
  const pathname = usePathname() || '/';

  return (
    <S.Sidebar>
      {!isLoading && (
        <>
          <S.Profile>
            <AvatarPerson
              type='icon'
              size='lg'
              src={data?.imageUrl}
            />
            <S.NameWrapper>
              <S.UserName>{data?.nickname || ''}</S.UserName>
              <S.SettingIcon onClick={() => router.push('/mypage/setting')}>
                <Setting />
              </S.SettingIcon>
            </S.NameWrapper>

            {(data?.memberRole === 'ADMIN' || data?.memberRole === 'CONTENT_PROVIDER') && (
              <OutlinedButton
                size='sm'
                label='관리자모드'
                color='assistive'
                interactionVariant='normal'
                onClick={() => router.push('/admin')}
              />
            )}
          </S.Profile>

          <S.SidebarNavList>
            {SIDEBAR_NAV_ITEMS.map(({ label, href }) => (
              <SidebarNavItem
                key={href}
                label={label}
                href={href}
                isActive={pathname.startsWith(href)}
                interactionVariant='normal'
              />
            ))}
            <S.Logout onClick={() => open('logout', undefined)}>로그아웃</S.Logout>
          </S.SidebarNavList>
        </>
      )}
    </S.Sidebar>
  );
}
