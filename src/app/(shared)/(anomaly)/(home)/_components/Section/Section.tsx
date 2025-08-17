import * as React from 'react';

import * as S from './Section.styled';

interface SectionProps {
  title: string;
  subtitle: React.ReactNode;
  children: React.ReactNode;
}

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Header>
      {children}
    </>
  );
}
