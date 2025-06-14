'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Bell from '@/assets/icons/bell.svg';
import Search from '@/assets/icons/search.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import IconButton from '@/components/atoms/IconButton/IconButton';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import useGetUserSummary from '@/hooks/api/member/useGetUserSummary';
import { useAuthStore } from '@/stores/useAuthStore';
import { useModalStore } from '@/stores/useModalStore';
import { UserSummary } from '@/types/member';

import S from './RightNav.styled';

interface RightNavProps {
  accessToken?: string;
  userSummary?: UserSummary;
}

export default function RightNav({ accessToken, userSummary: serverUserSummary }: RightNavProps) {
  const { open } = useModalStore();
  const { setToken } = useAuthStore();
  const router = useRouter();

  const { data: clientUserSummary } = useGetUserSummary();

  const userSummary = serverUserSummary ?? clientUserSummary;
  const isLoggedIn = !!accessToken && !!userSummary;

  useEffect(() => {
    if (accessToken) {
      setToken(accessToken);
    }
  }, [accessToken]);

  return (
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
            src={userSummary.imageUrl}
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
