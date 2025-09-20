import Link from 'next/link';

import * as S from './NavItem.styled';
import type { NavItemStyleProps } from './NavItem.styled';
import { useAuthStore } from '@/stores/useAuthStore';
import Skeleton from '@/components/skeleton/Skeleton/Skeleton';

interface NavItemProps extends NavItemStyleProps {
  label: string;
  href: string;
}

export default function NavItem({ label, href, isActive }: NavItemProps) {
  const status = useAuthStore((s) => s.status);

  if (status === 'unknown') {
    return (
      <Skeleton
        width='4rem'
        height='2.3rem'
        borderRadius='0.6rem'
      />
    );
  }

  return (
    <S.NavItem isActive={isActive}>
      <Link href={href}>{label}</Link>
    </S.NavItem>
  );
}
