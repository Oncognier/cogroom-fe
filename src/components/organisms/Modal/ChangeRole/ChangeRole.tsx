'use client';

import { useState } from 'react';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Radio from '@/components/atoms/Radio/Radio';
import { ROLE_LABELS, ROLE_OPTIONS, RoleKey } from '@/constants/common';
import { useChangeMemberRoleMutation } from '@/hooks/api/admin/useChangeMemberRole';
import { useAlertModalStore } from '@/stores/useModalStore';

import * as S from './ChangeRole.styled';

export interface ChangeRoleProps {
  memberId: number;
  nickname: string;
  currentRole: 'ADMIN' | 'USER' | 'CONTENT_PROVIDER';
}

export default function ChangeRole({ memberId, nickname, currentRole }: ChangeRoleProps) {
  const { close } = useAlertModalStore();
  const [selectedRole, setSelectedRole] = useState<RoleKey>(currentRole);

  const { changeMemberRole } = useChangeMemberRoleMutation({
    nickname,
    currentRole: ROLE_LABELS[currentRole],
    changedRole: ROLE_LABELS[selectedRole],
  });

  const handleConfirm = () => {
    changeMemberRole({ memberId: String(memberId), role: selectedRole });
    close();
  };

  return (
    <S.ChangeRole>
      <S.TextWrapper>
        <S.Title>회원 등급권한 수정</S.Title>
        <S.SubTitle>
          “{nickname}”({ROLE_LABELS[currentRole]})님의 <br />
          등급을 변경합니다.
        </S.SubTitle>
      </S.TextWrapper>

      <S.RadioWrapper>
        {ROLE_OPTIONS.map((role) => (
          <S.RadioRow key={role}>
            <Radio
              size='md'
              isChecked={selectedRole === role}
              onToggle={() => setSelectedRole(role)}
              name='member-role'
              interactionVariant='normal'
            />
            <S.RoleLabel>{ROLE_LABELS[role]}</S.RoleLabel>
          </S.RadioRow>
        ))}
      </S.RadioWrapper>

      <S.ButtonWrapper>
        <OutlinedButton
          label='취소'
          size='lg'
          color='assistive'
          interactionVariant='normal'
          onClick={close}
          fillContainer
        />
        <OutlinedButton
          label='확인'
          size='lg'
          color='primary'
          interactionVariant='normal'
          onClick={handleConfirm}
          fillContainer
        />
      </S.ButtonWrapper>
    </S.ChangeRole>
  );
}
