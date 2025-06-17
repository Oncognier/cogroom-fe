'use client';

import X from '@/assets/icons/x.svg';
import IconButton from '@/components/atoms/IconButton/IconButton';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import { useLogoutMutation } from '@/hooks/api/auth/useLogout';
import { useModalStore } from '@/stores/useModalStore';

import * as S from './Logout.styled';

export default function Logout() {
  const { close } = useModalStore();
  const { logout } = useLogoutMutation();

  const handleLogout = () => {
    logout();
    close();
  };

  return (
    <S.Container>
      <S.Close>
        <IconButton
          size='4rem'
          variant='normal'
          interactionVariant='normal'
          onClick={close}
        >
          <X />
        </IconButton>
      </S.Close>

      <S.Logout>
        <S.Mesage>로그아웃 할까요?</S.Mesage>
        <S.ButtonWrapper>
          <OutlinedButton
            size='lg'
            color='assistive'
            label='더 있을래요'
            fillContainer
            interactionVariant='normal'
            onClick={close}
          />
          <OutlinedButton
            size='lg'
            color='primary'
            label='네, 할게요'
            fillContainer
            interactionVariant='normal'
            onClick={handleLogout}
          />
        </S.ButtonWrapper>
      </S.Logout>
    </S.Container>
  );
}
