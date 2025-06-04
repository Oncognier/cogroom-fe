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
import NavList from '@/components/organism/Header/NavList/NavList';
import { DEFAULT_LOGO_HORIZONTAL_NORMAL } from '@/constants/image';
import { useModalStore } from '@/stores/useModalStore';

import S from './Header.styled';

export default function Header() {
  const { open } = useModalStore();

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
          size='4rem'
          variant='normal'
          interactionVariant='normal'
        >
          <Search />
        </IconButton>
        {isLoggedIn ? (
          <S.NavLogin>
            <IconButton
              size='4rem'
              variant='normal'
              interactionVariant='normal'
            >
              <Bell />
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
            onClick={() => open('login', undefined)}
          />
        )}
      </S.RightNav>
    </S.Header>
  );
}
