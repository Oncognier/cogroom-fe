'use client';

import * as S from './OutlinedTag.styled';
import type { OutlinedTagStyleProps } from './OutlinedTag.styled';

interface OutlinedTagProps extends OutlinedTagStyleProps {
  label: string;
  onClick: () => void;
  stopPropagation?: boolean;
}

export default function OutlinedTag({ label, color, onClick, stopPropagation = false }: OutlinedTagProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (stopPropagation) e.stopPropagation();
    onClick();
  };

  return (
    <S.OutlinedTag
      color={color}
      onClick={handleClick}
    >
      {label}
    </S.OutlinedTag>
  );
}
