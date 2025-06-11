'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { DEFAULT_LOGO_HORIZONTAL_NORMAL } from '@/constants/image';

import S from './LeftNav.styled';
import NavList from '../NavList/NavList';

export default function LeftNav() {
  const pathname = usePathname();

  return (
    <S.LeftNav>
      <Link href='/'>
        <Image
          src={DEFAULT_LOGO_HORIZONTAL_NORMAL}
          alt='Logo'
          width={120}
          height={23}
        />
      </Link>
      <NavList pathname={pathname || '/'} />
    </S.LeftNav>
  );
}
