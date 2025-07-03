import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import { useAppModalStore } from '@/stores/useModalStore';

import * as S from './WithdrawComplete.styled';

export interface WithdrawCompleteProps {
  onConfirm: () => void;
}

export default function WithdrawComplete({ onConfirm }: WithdrawCompleteProps) {
  const { close } = useAppModalStore();

  return (
    <S.WithdrawComplete>
      <S.TextWrapper>
        <S.Title>아쉽지만, 안녕 코그니어</S.Title>
        <S.Description>
          30일 내 언제든 돌아올 수 있어요.
          <br />
          다시 로그인 하기만 하면 돼요
          <br />
          이후, 내 정보는 완전히 삭제됩니다.
        </S.Description>
      </S.TextWrapper>

      <S.ButtonWrapper>
        <OutlinedButton
          size='sm'
          color='assistive'
          label='알겠어요, 안녕!'
          fillContainer
          interactionVariant='normal'
          onClick={onConfirm}
        />
        <OutlinedButton
          size='sm'
          color='primary'
          label='탈퇴 안할래요'
          fillContainer
          interactionVariant='normal'
          onClick={close}
        />
      </S.ButtonWrapper>
    </S.WithdrawComplete>
  );
}
