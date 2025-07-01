'use client';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { useAppModalStore } from '@/stores/useModalStore';

import * as S from './Complete.styled';

export default function Complete() {
  const { close } = useAppModalStore();

  return (
    <>
      <S.TextWrapper>
        <S.TitleWrapper>
          <S.SubTitle>가입이 완료되었어요</S.SubTitle>
          <S.Title>코그룸에 오신 걸 환영해요</S.Title>
        </S.TitleWrapper>
        <S.Description>
          코그룸은 단순한 학습이 아닌
          <br />
          나를 알아가고 이해하는 여정을 제공합니다
        </S.Description>
      </S.TextWrapper>

      <SolidButton
        label='코그룸 살펴보기'
        size='md'
        color='primary'
        interactionVariant='normal'
        onClick={close}
        fillContainer
      />
    </>
  );
}
