import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import TextButton from '@/components/atoms/TextButton/TextButton';
import { useAppModalStore } from '@/stores/useModalStore';

import * as S from './SupportContact.styled';

export interface SupportContactProps {
  onStartWithdraw: () => void;
}

export default function SupportContact({ onStartWithdraw }: SupportContactProps) {
  const { close } = useAppModalStore();

  return (
    <S.SupportContact>
      <S.ContentWrapper>
        <S.Title>
          개인정보 설정에 문제가 있다면
          <br />
          아래 메일로 문의를 보내주세요
        </S.Title>
        <S.Email>oncognier@gmail.com</S.Email>
        <OutlinedButton
          label='확인'
          size='lg'
          color='primary'
          interactionVariant='normal'
          onClick={close}
          fillContainer
        />
      </S.ContentWrapper>
      <TextButton
        label='코그룸 탈퇴하기'
        size='sm'
        color='assistive'
        interactionVariant='normal'
        onClick={onStartWithdraw}
      />
    </S.SupportContact>
  );
}
