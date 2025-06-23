'use client';

import * as S from './OutlinedTag.styled';
import type { OutlinedTagStyleProps } from './OutlinedTag.styled';

interface OutlinedTagProps extends OutlinedTagStyleProps {
  label: string;
}

export default function OutlinedTag({ label, color }: OutlinedTagProps) {
  return <S.OutlinedTag color={color}>{label}</S.OutlinedTag>;
}
