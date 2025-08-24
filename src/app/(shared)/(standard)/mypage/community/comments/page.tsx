'use client';

import { useRouter } from 'next/navigation';

import ArrowRight from '@/assets/icons/arrowright.svg';
import MessageCircleX from '@/assets/icons/message-circle-x.svg';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';

import * as S from './page.styled';

export default function Comments() {
  const router = useRouter();

  const handleGoToCommunity = () => {
    router.push('/community');
  };

  return (
    <EmptyState icon={<MessageCircleX />}>
      <S.Wrapper>
        <S.Title>다른 코그니어 글에 댓글을 달아봐요</S.Title>
        <SolidButton
          size='sm'
          color='primary'
          label='댓글 달러가기'
          interactionVariant='normal'
          onClick={handleGoToCommunity}
          iconRight={<ArrowRight />}
          type='button'
        />
      </S.Wrapper>
    </EmptyState>
  );
}
