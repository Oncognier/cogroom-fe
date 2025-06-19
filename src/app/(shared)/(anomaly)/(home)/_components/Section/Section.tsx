import * as React from 'react';

import * as S from './Section.styled';

interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Header>
      {children}
    </S.Container>
  );
}
