'use client';

import ChangeIcon from '@/assets/icons/change.svg';
import { SortType } from '@/types/member';

import * as S from './SortButton.styled';

interface SortButtonProps {
  sort: SortType;
  onClick: () => void;
}

export default function SortButton({ sort, onClick }: SortButtonProps) {
  return (
    <S.SortButton onClick={onClick}>
      {sort === 'latest' ? '최신순' : '오래된순'}
      <S.Icon>
        <ChangeIcon />
      </S.Icon>
    </S.SortButton>
  );
}
