'use client';

import { useRouter } from 'next/navigation';

import Bell from '@/assets/icons/bell.svg';
import Search from '@/assets/icons/search.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import IconButton from '@/components/atoms/IconButton/IconButton';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import { ROLE_LABELS } from '@/constants/common';
import useGetUserSummary from '@/hooks/api/member/useGetUserSummary';
import { useAppModalStore } from '@/stores/useModalStore';

import * as S from './RightNav.styled';

export default function RightNav() {
  const router = useRouter();
  const { open } = useAppModalStore();

  const { data, isLoading } = useGetUserSummary();
  const userRoleLabel = data?.memberRole && ROLE_LABELS[data.memberRole];

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

          {!isLoading && data ? (
            data.memberRole !== 'USER' && userRoleLabel ? (
              <S.UserWrapper
                memberRole={data.memberRole}
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
            )
          ) : null}
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
