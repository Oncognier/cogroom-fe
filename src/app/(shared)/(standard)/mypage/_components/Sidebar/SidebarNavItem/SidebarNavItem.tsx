'use client';

import Link from 'next/link';

import * as S from './SidebarNavItem.styled';
import type { SidebarNavItemStyleProps } from './SidebarNavItem.styled';

interface SidebarNavItemProps extends SidebarNavItemStyleProps {
  label: string;
  href: string;
}

export default function SidebarNavItem({ label, href, isActive }: SidebarNavItemProps) {
  return (
    <S.SidebarNavItem
      isActive={isActive}
      interactionVariant='normal'
    >
      <Link href={href}>{label}</Link>
    </S.SidebarNavItem>
  );
}
