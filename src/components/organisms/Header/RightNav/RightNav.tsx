'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import Bell from '@/assets/icons/bell.svg';
import Search from '@/assets/icons/search.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import IconButton from '@/components/atoms/IconButton/IconButton';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import useGetUserSummary from '@/hooks/api/member/useGetUserSummary';
import { useAuthStore } from '@/stores/useAuthStore';
import { useModalStore } from '@/stores/useModalStore';
import { UserSummary } from '@/types/member';

import * as S from './RightNav.styled';

interface RightNavProps {
  accessToken?: string;
  userSummary?: UserSummary;
}

export default function RightNav({ accessToken, userSummary: serverUserSummary }: RightNavProps) {
  const { open } = useModalStore();
  const { setToken, isLoggedIn } = useAuthStore();
  const router = useRouter();

  const { data: clientUserSummary } = useGetUserSummary();

  const userSummary = clientUserSummary ?? serverUserSummary;

  const [isAuthenticated, setIsAuthenticated] = useState(!!userSummary);

  useEffect(() => {
    if (accessToken) {
      setToken(accessToken);
    }
  }, [accessToken]);

  useEffect(() => {
    setIsAuthenticated(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <S.RightNav>
      <IconButton
        size='4rem'
        variant='normal'
        interactionVariant='normal'
      >
        <Search />
      </IconButton>

      {isAuthenticated ? (
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
            src={userSummary?.imageUrl}
            onClick={() => router.push('/mypage')}
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
  );
}
