'use client';

import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

import { getInteraction, InteractionVariant } from '@/styles/interaction';

export type SearchSize = 'sm' | 'nm';

export interface SearchStyleProps {
  inputSize: SearchSize;
  interactionVariant: InteractionVariant;
}

const sizeStyles: Record<SearchSize, (theme: Theme) => SerializedStyles> = {
  sm: (theme) => css`
    ${theme.typography.label2.semibold};

    &::placeholder {
      ${theme.typography.label2.semibold};
      color: ${theme.semantic.label.assistive};
    }
  `,
  nm: (theme) => css`
    ${theme.typography.label1.semibold};

    &::placeholder {
      ${theme.typography.label1.semibold};
      color: ${theme.semantic.label.assistive};
    }
  `,
};

export const SearchContainer = styled.div`
  position: relative;

  width: 100%;
`;

export const Search = styled.input<SearchStyleProps>`
  ${({ inputSize, theme }) => sizeStyles[inputSize](theme)};

  width: 100%;
  padding: 1.4rem 1.6rem 1.4rem 4.2rem;

  color: ${({ theme }) => theme.semantic.label.normal};
  background-color: ${({ theme }) => theme.semantic.static.white};
  border: 1px solid ${({ theme }) => theme.semantic.label.assistive};
  border-radius: 1.2rem;

  ${({ theme, interactionVariant }) => getInteraction(interactionVariant, theme.semantic.interaction.inactive)(theme)};

  &:focus {
    outline: none;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 1.58rem;
  transform: translateY(-50%);
  z-index: 1;

  width: 1.8rem;
  height: 1.8rem;

  color: ${({ theme }) => theme.semantic.label.assistive};
  pointer-events: none;
`;
