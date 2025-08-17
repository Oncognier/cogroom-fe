'use client';

import { usePathname } from 'next/navigation';

import { HEADER_NAV_ITEMS } from '@/constants/common';

import * as S from './NavList.styled';
import NavItem from '../NavItem/NavItem';

export default function NavList() {
  const pathname = usePathname() || '/';

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
