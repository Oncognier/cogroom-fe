import { NAV_ITEMS } from '@/constants/navItems';

import S from './NavList.styled';
import NavItem from '../NavItem/NavItem';

interface NavListProps {
  pathname: string;
}

export default function NavList({ pathname }: NavListProps) {
  return (
    <S.NavList>
      {NAV_ITEMS.map(({ label, href }) => (
        <NavItem
          key={href}
          label={label}
          href={href}
          isActive={pathname.startsWith(href)}
        />
      ))}
    </S.NavList>
  );
}
