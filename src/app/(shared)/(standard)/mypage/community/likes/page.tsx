'use client';

import { useRouter } from 'next/navigation';

import ArrowRight from '@/assets/icons/arrowright.svg';
import MessageCircleX from '@/assets/icons/message-circle-x.svg';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';

import * as S from './page.styled';

export default function Likes() {
  const router = useRouter();

  const handleGoToCommunity = () => {
    router.push('/community');
  };

  return (
    <EmptyState icon={<MessageCircleX />}>
      <S.Wrapper>
        <S.Title>꼭 마음에 담아두고 싶던 글이 있나요?</S.Title>
        <SolidButton
          size='sm'
          color='primary'
          label='글 보러가기'
          interactionVariant='normal'
          onClick={handleGoToCommunity}
          iconRight={<ArrowRight />}
          type='button'
        />
      </S.Wrapper>
    </EmptyState>
  );
}
