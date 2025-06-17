'use client';

import { useState } from 'react';
import ChevronDown from '@/assets/icons/chevrondown.svg';
import ChevronUp from '@/assets/icons/chevronup.svg';

import * as S from './ContentRecordToggle.styled';

export default function ContentRecordToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.ContentRecordToggle>
      <S.ToggleWrapper isOpen={isOpen}>
        <S.MainText>내 콘텐츠 기록</S.MainText>
        <S.ChevronButton onClick={handleToggle}>{isOpen ? <ChevronUp /> : <ChevronDown />}</S.ChevronButton>
      </S.ToggleWrapper>

      {isOpen && (
        <S.DropdownWrapper>
          <S.EmptyMessage>아직 기록이 없어요.</S.EmptyMessage>
        </S.DropdownWrapper>
      )}
    </S.ContentRecordToggle>
  );
}
