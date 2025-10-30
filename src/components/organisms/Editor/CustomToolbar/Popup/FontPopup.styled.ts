'use client';

import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';

type FontItemProps = {
  isActive?: boolean;
  fontFamily?: string;
};

type FontPreviewProps = {
  fontFamily: string;
};

export const FontList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;

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

export const FontItem = styled.button<FontItemProps>`
  font-family: ${({ fontFamily }) => fontFamily};
  display: flex;
  align-items: center;
  padding: 1.2rem 1.6rem;
  border: none;
  border-radius: 1.2rem;
  background: ${({ theme, isActive }) => (isActive ? theme.semantic.background.elevated.normal : 'transparent')};
  color: ${({ theme }) => theme.semantic.label.normal};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme, isActive }) => !isActive && theme.semantic.background.normal.alternative};
  }

  ${mqMax.tablet} {
    flex-shrink: 0;
  }
`;

export const FontPreview = styled.span<FontPreviewProps>`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: 1.4rem;
`;
