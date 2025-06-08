'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { DEFAULT_LOGO_HORIZONTAL_NORMAL } from '@/constants/image';

import S from './Header.styled';
import NavList from './NavList/NavList';
import RightNav from './RightNav/RightNav';

export default function Header() {
  const pathname = usePathname() || '/';

  return (
    <S.Header>
      <S.LeftNav>
        <Link href='/'>
          <Image
            src={DEFAULT_LOGO_HORIZONTAL_NORMAL}
            alt='Logo'
            width={120}
            height={23}
          />
        </Link>
        <NavList pathname={pathname} />
      </S.LeftNav>

      <RightNav />
    </S.Header>
  );
}
