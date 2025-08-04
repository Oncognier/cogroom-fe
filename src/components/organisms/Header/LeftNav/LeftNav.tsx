'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { DEFAULT_LOGO_HORIZONTAL_NORMAL, DEFAULT_LOGO_STAGING, DEFAULT_LOGO_DEV } from '@/constants/image';

import * as S from './LeftNav.styled';
import NavList from '../NavList/NavList';

export default function LeftNav() {
  const pathname = usePathname();

  const env = process.env.NEXT_PUBLIC_DEPLOY_ENV;
  let logoSrc = DEFAULT_LOGO_HORIZONTAL_NORMAL;

  if (env === 'staging') {
    logoSrc = DEFAULT_LOGO_STAGING;
  } else if (env === 'development') {
    logoSrc = DEFAULT_LOGO_DEV;
  }

  return (
    <S.LeftNav>
      <Link href='/'>
        <Image
          src={logoSrc}
          alt='Logo'
          width={120}
          height={23}
          priority
        />
      </Link>
      <NavList pathname={pathname || '/'} />
    </S.LeftNav>
  );
}
