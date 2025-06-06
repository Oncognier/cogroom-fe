import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import SidebarNavItem from './SidebarNavItem/SidebarNavItem';
import S from './Sidebar.styled';
import { SIDEBAR_NAV_ITEMS } from '@/constants/common';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname() || '/';

  return (
    <S.Sidebar>
      <S.Profile>
        <AvatarPerson
          type='icon'
          size='lg'
        />
        <S.UserName>홍길동 님</S.UserName>
      </S.Profile>
      <S.SidebarNavList>
        {SIDEBAR_NAV_ITEMS.map(({ label, href }) => (
          <SidebarNavItem
            key={href}
            label={label}
            href={href}
            isActive={pathname.startsWith(href)}
          />
        ))}
        <S.Logout>로그아웃</S.Logout>
      </S.SidebarNavList>
    </S.Sidebar>
  );
}
