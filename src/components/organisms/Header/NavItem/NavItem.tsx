import Link from 'next/link';

import S, { NavItemStyleProps } from './NavItem.styled';

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
