'use client';

import Link from 'next/link';

import S, { SidebarNavItemStyleProps } from './SidebarNavItem.styled';

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
