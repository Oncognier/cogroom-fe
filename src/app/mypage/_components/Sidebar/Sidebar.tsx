import { usePathname, useRouter } from 'next/navigation';

import Setting from '@/assets/icons/setting.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import { SIDEBAR_NAV_ITEMS } from '@/constants/common';
import useGetUserSummary from '@/hooks/api/member/useGetUserSummary';

import S from './Sidebar.styled';
import SidebarNavItem from './SidebarNavItem/SidebarNavItem';

export default function Sidebar() {
  const { data, isLoading } = useGetUserSummary();
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
            <S.Logout>로그아웃</S.Logout>
          </S.SidebarNavList>
        </>
      )}
    </S.Sidebar>
  );
}
