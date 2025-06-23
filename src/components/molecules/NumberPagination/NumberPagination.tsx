'use client';

import ChevronLeft from '@/assets/icons/chevronleft.svg';
import ChevronLeftDouble from '@/assets/icons/chevronleftdouble.svg';
import ChevronRight from '@/assets/icons/chevronright.svg';
import ChevronRightDouble from '@/assets/icons/chevronrightdouble.svg';

import * as S from './NumberPagination.styled';
import { getPaginationRange } from '@/utils/pagination';

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
  const visibleRange = 5;

  const { currentGroup, pageNumbers, hasPrevGroup, hasNextGroup } = getPaginationRange(
    currentPage,
    totalPages,
    visibleRange,
  );

  const goToPrevGroup = () => {
    const prevStart = Math.max((currentGroup - 1) * visibleRange + 1, 1);
    onPageChange(prevStart);
  };

  const goToNextGroup = () => {
    let nextStart = (currentGroup + 1) * visibleRange + 1;

    if (nextStart > totalPages) {
      nextStart = Math.max(totalPages - visibleRange + 1, 1);
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
