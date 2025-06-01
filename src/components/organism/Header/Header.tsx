'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import Bell from '@/assets/icons/bell.svg';
import Search from '@/assets/icons/search.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import IconButton from '@/components/atoms/IconButton/IconButton';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import NavList from '@/components/molecules/NavList/NavList';
import { DEFAULT_LOGO_HORIZONTAL_NORMAL } from '@/constants/image';

import S from './Header.styled';

export default function Header() {
  // TODO: 로그인 상태 관리 추가
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

      <S.RightNav>
        <IconButton
          size='40px'
          variant='normal'
          interactionVariant='normal'
        >
          <Search
            width={24}
            height={24}
          />
        </IconButton>
        {isLoggedIn ? (
          <S.NavLogin>
            <IconButton
              size='40px'
              variant='normal'
              interactionVariant='normal'
            >
              <Bell
                width={24}
                height={24}
              />
            </IconButton>
            <AvatarPerson
              type='icon'
              size='fillContainer'
            />
          </S.NavLogin>
        ) : (
          <OutlinedButton
            label='코그룸 시작하기'
            size='sm'
            color='primary'
            interactionVariant='normal'
            onClick={() => setIsLoggedIn(true)}
          />
        )}
      </S.RightNav>
    </S.Header>
  );
}
