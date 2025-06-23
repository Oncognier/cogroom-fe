'use client';

import * as S from './SolidTag.styled';
import type { SolidTagStyleProps } from './SolidTag.styled';

interface SolidTagProps extends SolidTagStyleProps {
  label: string;
}

export default function SolidTag({ label, color }: SolidTagProps) {
  return <S.Container color={color}>{label}</S.Container>;
}
