import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import { useAppModalStore } from '@/stores/useModalStore';

import * as S from './ConfirmWithdraw.styled';

export interface ConfirmWithdrawProps {
  onConfirm: () => void;
}

export default function ConfirmWithdraw({ onConfirm }: ConfirmWithdrawProps) {
  const { close } = useAppModalStore();

  return (
    <S.ConfirmWithdraw>
      <S.TextWrapper>
        <S.Title>코그니어, 정말 탈퇴할건가요?</S.Title>
        <S.Description>
          문을 완전히 닫으면,
          <br />
          나중에 다시 돌아오기 힘들 수 있어요...😢
          <br />
          나를 찾는 여정을 포기하지 말아요
        </S.Description>
      </S.TextWrapper>

      <S.ButtonWrapper>
        <OutlinedButton
          size='sm'
          color='assistive'
          label='탈퇴할래요'
          fillContainer
          interactionVariant='normal'
          onClick={onConfirm}
        />
        <OutlinedButton
          size='sm'
          color='primary'
          label='더 있을래요'
          fillContainer
          interactionVariant='normal'
          onClick={close}
        />
      </S.ButtonWrapper>
    </S.ConfirmWithdraw>
  );
}
