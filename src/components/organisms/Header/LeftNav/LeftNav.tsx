'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { DEPLOY_ENV } from '@/constants/common';
import { ENV_LOGO_MAP } from '@/constants/image';

import * as S from './LeftNav.styled';
import NavList from '../NavList/NavList';

export default function LeftNav() {
  const pathname = usePathname();

  return (
    <S.LeftNav>
      <Link href='/'>
        <Image
          src={ENV_LOGO_MAP[DEPLOY_ENV]}
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
