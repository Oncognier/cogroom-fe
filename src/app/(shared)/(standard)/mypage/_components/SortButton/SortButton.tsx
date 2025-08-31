'use client';

import { useState } from 'react';

import ChangeIcon from '@/assets/icons/change.svg';
import { SortType } from '@/types/member';

import * as S from './SortButton.styled';

interface SortButtonProps {
  sort: SortType;
}

export default function SortButton({ sort }: SortButtonProps) {
  const [selectedSort, setSelectedSort] = useState<SortType>(sort);

  const handleSortChange = () => {
    setSelectedSort((prev) => (prev === 'latest' ? 'oldest' : 'latest'));
  };

  return (
    <S.SortButton onClick={handleSortChange}>
      {selectedSort === 'latest' ? '최신순' : '오래된순'}
      <S.Icon>
        <ChangeIcon />
      </S.Icon>
    </S.SortButton>
  );
}
