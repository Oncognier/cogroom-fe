import Link from 'next/link';

import * as S from './NavItem.styled';
import type { NavItemStyleProps } from './NavItem.styled';

interface NavItemProps extends NavItemStyleProps {
  label: string;
  href: string;
}

export default function NavItem({ label, href, isActive }: NavItemProps) {
  return (
    <S.NavItem isActive={isActive}>
      <Link href={href}>{label}</Link>
    </S.NavItem>
  );
}
