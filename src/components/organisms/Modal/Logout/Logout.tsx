'use client';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import { useLogoutMutation } from '@/hooks/api/auth/useLogout';
import { useAppModalStore } from '@/stores/useModalStore';

import * as S from './Logout.styled';

export default function Logout() {
  const { close } = useAppModalStore();
  const { logout } = useLogoutMutation();

  const handleLogout = () => {
    logout();
    close();
  };

  return (
    <S.Logout>
      <S.Mesage>로그아웃 할까요?</S.Mesage>
      <S.ButtonWrapper>
        <OutlinedButton
          size='lg'
          color='assistive'
          label='네, 할게요'
          fillContainer
          interactionVariant='normal'
          onClick={handleLogout}
        />
        <OutlinedButton
          size='lg'
          color='primary'
          label='더 있을래요'
          fillContainer
          interactionVariant='normal'
          onClick={close}
        />
      </S.ButtonWrapper>
    </S.Logout>
  );
}
