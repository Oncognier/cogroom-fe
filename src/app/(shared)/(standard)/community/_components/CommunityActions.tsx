'use client';

import { useRouter } from 'next/navigation';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';

import * as S from './CommunityActions.styled';

export default function CommunityActions() {
  const router = useRouter();

  return (
    <S.Container>
      <OutlinedButton
        label='데일리 공유'
        size='sm'
        color='primary'
        interactionVariant='normal'
        onClick={() => router.push('/community/write?type=daily')}
      />

      <OutlinedButton
        label='글쓰기'
        size='sm'
        color='primary'
        interactionVariant='normal'
        onClick={() => router.push('/community/write?type=post')}
      />
    </S.Container>
  );
}
