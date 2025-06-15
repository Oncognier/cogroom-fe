import { HEADER_NAV_ITEMS } from '@/constants/common';

import * as S from './NavList.styled';
import NavItem from '../NavItem/NavItem';

interface NavListProps {
  pathname: string;
}

export default function NavList({ pathname }: NavListProps) {
  return (
    <S.NavList>
      {HEADER_NAV_ITEMS.map(({ label, href }) => (
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
