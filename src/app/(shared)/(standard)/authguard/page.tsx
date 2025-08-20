'use client';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { useAppModalStore } from '@/stores/useModalStore';

import * as S from './page.styled';

export default function AuthGuard() {
  const { open } = useAppModalStore();

  return (
    <S.AuthGuard>
      <S.MessageWrapper>
        <S.Description>코그룸의 더 많은 서비스를 이용하시려면</S.Description>
        <S.MainMessage>
          회원 가입 / 로그인 후<S.LineBreak /> 이용해주세요!
        </S.MainMessage>
      </S.MessageWrapper>

      <SolidButton
        size='sm'
        color='primary'
        label='회원가입 / 로그인 하기'
        interactionVariant='normal'
        onClick={() => open('login')}
      />
    </S.AuthGuard>
  );
}
