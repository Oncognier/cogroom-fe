import Image from 'next/image';
import Link from 'next/link';

import { DEPLOY_ENV } from '@/constants/common';
import { ENV_LOGO_MAP } from '@/constants/image';

import * as S from './LeftNav.styled';
import NavList from '../NavList/NavList';

export default function LeftNav() {
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
      <S.MobileContainer>
        <NavList />
      </S.MobileContainer>
    </S.LeftNav>
  );
}
