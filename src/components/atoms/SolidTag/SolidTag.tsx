'use client';

import * as S from './SolidTag.styled';
import type { SolidTagStyleProps } from './SolidTag.styled';

interface SolidTagProps extends SolidTagStyleProps {
  label: string;
}

export default function SolidTag({ label, color }: SolidTagProps) {
  return <S.SolidTag color={color}>{label}</S.SolidTag>;
}
