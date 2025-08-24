'use client';

import { useRouter } from 'next/navigation';

import ArrowRight from '@/assets/icons/arrowright.svg';
import MessageCircleX from '@/assets/icons/message-circle-x.svg';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';

import * as S from './page.styled';

export default function Posts() {
  const router = useRouter();

  const handleGoToCommunity = () => {
    router.push('/community');
  };

  return (
    <EmptyState icon={<MessageCircleX />}>
      <S.Wrapper>
        <S.Title>코그니어 커뮤니티에 첫 글을 써 보세요!</S.Title>
        <SolidButton
          size='sm'
          color='primary'
          label='커뮤니티 바로가기'
          interactionVariant='normal'
          onClick={handleGoToCommunity}
          iconRight={<ArrowRight />}
          type='button'
        />
      </S.Wrapper>
    </EmptyState>
  );
}
