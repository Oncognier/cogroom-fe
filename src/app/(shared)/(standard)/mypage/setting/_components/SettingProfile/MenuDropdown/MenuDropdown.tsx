'use client';

import TextButton from '@/components/atoms/TextButton/TextButton';

import * as S from './MenuDropdown.styled';

interface MenuDropdownProps {
  triggerSelect: () => void;
  onResetToDefault: () => void;
  isUploading: boolean;
}

export default function MenuDropdown({ triggerSelect, onResetToDefault, isUploading }: MenuDropdownProps) {
  return (
    <S.MenuDropdown>
      <TextButton
        size='sm'
        label='이미지 추가 및 변경'
        color='assistive'
        interactionVariant='normal'
        onClick={triggerSelect}
        isDisabled={isUploading}
      />
      <S.Divider />
      <TextButton
        size='sm'
        label='기본 프로필로 변경'
        color='assistive'
        interactionVariant='normal'
        onClick={onResetToDefault}
        isDisabled={isUploading}
      />
    </S.MenuDropdown>
  );
}
