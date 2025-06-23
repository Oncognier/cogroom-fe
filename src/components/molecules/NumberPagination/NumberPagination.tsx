'use client';

import ChevronLeft from '@/assets/icons/chevronleft.svg';
import ChevronLeftDouble from '@/assets/icons/chevronleftdouble.svg';
import ChevronRight from '@/assets/icons/chevronright.svg';
import ChevronRightDouble from '@/assets/icons/chevronrightdouble.svg';
import { PAGINATION_VISIBLE_RANGE } from '@/constants/common';
import { getPaginationRange } from '@/utils/pagination';

import * as S from './NumberPagination.styled';

export interface NumberPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  size?: 'sm' | 'md';
}

export default function NumberPagination({
  currentPage,
  totalPages,
  onPageChange,
  size = 'md',
}: NumberPaginationProps) {
  const { currentGroup, pageNumbers, hasPrevGroup, hasNextGroup } = getPaginationRange(
    currentPage,
    totalPages,
    PAGINATION_VISIBLE_RANGE,
  );

  const goToPrevGroup = () => {
    const prevStart = Math.max((currentGroup - 1) * PAGINATION_VISIBLE_RANGE + 1, 1);
    onPageChange(prevStart);
  };

  const goToNextGroup = () => {
    let nextStart = (currentGroup + 1) * PAGINATION_VISIBLE_RANGE + 1;

    if (nextStart > totalPages) {
      nextStart = Math.max(totalPages - PAGINATION_VISIBLE_RANGE + 1, 1);
    }

    onPageChange(nextStart);
  };

  return (
    <S.Container>
      <S.IconButton
        size={size}
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        <ChevronLeftDouble />
      </S.IconButton>

      <S.IconButton
        size={size}
        onClick={goToPrevGroup}
        disabled={!hasPrevGroup}
      >
        <ChevronLeft />
      </S.IconButton>

      {pageNumbers.map((page) => (
        <S.PageButton
          key={page}
          size={size}
          onClick={() => onPageChange(page)}
          isActive={page === currentPage}
        >
          {page}
        </S.PageButton>
      ))}

      <S.IconButton
        size={size}
        onClick={goToNextGroup}
        disabled={!hasNextGroup}
      >
        <ChevronRight />
      </S.IconButton>

      <S.IconButton
        size={size}
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        <ChevronRightDouble />
      </S.IconButton>
    </S.Container>
  );
}
