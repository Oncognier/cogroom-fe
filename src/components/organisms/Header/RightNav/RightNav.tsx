'use client';

import { useRouter } from 'next/navigation';

import Bell from '@/assets/icons/bell.svg';
import Search from '@/assets/icons/search.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import IconButton from '@/components/atoms/IconButton/IconButton';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import useGetUserSummary from '@/hooks/api/member/useGetUserSummary';
import { useAuthStore } from '@/stores/useAuthStore';
import { useModalStore } from '@/stores/useModalStore';

import S from './RightNav.styled';

export default function RightNav() {
  const { open } = useModalStore();
  const { data, isLoading } = useGetUserSummary();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const router = useRouter();

  return (
    <S.RightNav>
      <IconButton
        size='4rem'
        variant='normal'
        interactionVariant='normal'
      >
        <Search />
      </IconButton>

      {isLoggedIn && !isLoading ? (
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
            src={data?.imageUrl}
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
