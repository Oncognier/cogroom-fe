'use client';

import { useRouter } from 'next/navigation';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import { useAppModalStore } from '@/stores/useModalStore';

import * as S from './DailyAnswerPost.styled';

export interface DailyAnswerPostProps {
  redirectTo?: string;
}

export default function DailyAnswerPost({ redirectTo }: DailyAnswerPostProps) {
  const { close } = useAppModalStore();
  const router = useRouter();

  const handleClick = () => {
    close();
    if (redirectTo) {
      router.push(redirectTo);
    }
  };

  return (
    <>
      <S.TextWrapper>
        <S.TitleWrapper>
          <S.SubTitle>오늘의 데일리 완료</S.SubTitle>
          <S.Title>
            오늘도 하나의 <br />
            물방울을 모았어요!
          </S.Title>
        </S.TitleWrapper>
        <S.Description>매일 꾸준히 데일리를 완료해 보세요.</S.Description>
      </S.TextWrapper>

      <OutlinedButton
        label='물방울 확인하기'
        size='sm'
        color='secondary'
        interactionVariant='normal'
        onClick={handleClick}
        type='submit'
      />
    </>
  );
}
