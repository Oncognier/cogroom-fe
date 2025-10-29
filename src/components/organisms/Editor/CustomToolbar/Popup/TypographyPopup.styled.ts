'use client';

import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';

type TypographyItemProps = {
  isActive?: boolean;
};

type TypographyTextProps = {
  size: 'h1' | 'h2' | 'h3' | 'p';
};

export const TypographyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  ${mqMax.tablet} {
    flex-direction: row;
    gap: 1.2rem;
    overflow-x: auto;
    padding: 0.5rem 0;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const TypographyItem = styled.button<TypographyItemProps>`
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
  border: none;
  border-radius: 0.6rem;
  background: ${({ theme, isActive }) => (isActive ? theme.semantic.background.elevated.normal : 'transparent')};
  color: ${({ theme }) => theme.semantic.label.normal};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme, isActive }) => !isActive && theme.semantic.background.normal.alternative};
  }

  ${mqMax.tablet} {
    flex-shrink: 0;
    height: 4.8rem;
  }
`;

export const TypographyText = styled.span<TypographyTextProps>`
  font-size: ${({ size }) => {
    switch (size) {
      case 'h1':
        return '2.4rem';
      case 'h2':
        return '2rem';
      case 'h3':
        return '1.6rem';
      case 'p':
        return '1.4rem';
      default:
        return '1.4rem';
    }
  }};
  font-weight: ${({ size }) => (size.startsWith('h') ? 'bold' : 'normal')};
  line-height: 1.4;
`;
