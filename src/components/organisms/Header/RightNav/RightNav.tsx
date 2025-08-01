'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Bell from '@/assets/icons/bell.svg';
import Search from '@/assets/icons/search.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import IconButton from '@/components/atoms/IconButton/IconButton';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import { ROLE_LABELS } from '@/constants/common';
import useGetUserSummary from '@/hooks/api/member/useGetUserSummary';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAppModalStore } from '@/stores/useModalStore';

import * as S from './RightNav.styled';

export default function RightNav() {
  const router = useRouter();
  const { open } = useAppModalStore();
  const { data } = useGetUserSummary();
  const setLoggedIn = useAuthStore((state) => state.setLoggedIn);

  useEffect(() => {
    if (data) {
      setLoggedIn();
    }
  }, [data, setLoggedIn]);

  const userRole = data?.memberRole;
  const userRoleLabel = userRole && ROLE_LABELS[userRole];

  return (
    <S.RightNav>
      <IconButton
        size='4rem'
        variant='normal'
        interactionVariant='normal'
      >
        <Search />
      </IconButton>

      {data ? (
        <S.NavLogin>
          <IconButton
            size='4rem'
            variant='normal'
            interactionVariant='normal'
          >
            <Bell />
          </IconButton>

          {userRole !== 'USER' && userRoleLabel ? (
            <S.UserWrapper
              memberRole={userRole}
              onClick={() => router.push('/mypage')}
            >
              <S.UserIconWrapper>
                <AvatarPerson
                  type='icon'
                  size='fillContainer'
                  src={data.imageUrl}
                />
              </S.UserIconWrapper>
              {userRoleLabel}
            </S.UserWrapper>
          ) : (
            <AvatarPerson
              type='icon'
              size='fillContainer'
              src={data.imageUrl}
              onClick={() => router.push('/mypage')}
            />
          )}
        </S.NavLogin>
      ) : (
        <OutlinedButton
          label='코그룸 시작하기'
          size='sm'
          color='primary'
          interactionVariant='normal'
          onClick={() => open('login')}
        />
      )}
    </S.RightNav>
  );
}
