'use client';

import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

type TextareaSize = 'sm' | 'md' | 'lg';

export interface TextareaStyleProps {
  textareaSize: TextareaSize;
  isError?: boolean;
  width?: string;
  minHeight?: string;
  autoResize?: boolean;
}

const commonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  ${theme.typography.body1.regular};
  border: 1px solid ${theme.semantic.label.assistive};
  border-radius: ${theme.radius[12]};
  background-color: ${theme.semantic.static.white};
  padding: ${theme.spacing[12]} ${theme.spacing[16]};
  color: ${theme.semantic.label.normal};

  &::placeholder {
    color: ${theme.semantic.label.assistive};
  }

  &:disabled {
    background-color: ${theme.semantic.fill.normal};
    pointer-events: none;
  }

  &:hover {
    border-color: ${theme.semantic.primary.normal};
  }

  &:focus {
    outline: none;
  }
`;

const sizeStyles: Record<TextareaSize, (theme: Theme) => SerializedStyles> = {
  sm: (theme) => css`
    ${theme.typography.label2.regular};
  `,
  md: (theme) => css`
    ${theme.typography.label1.regular};
  `,
  lg: (theme) => css`
    ${theme.typography.body1.regular};
  `,
};

const errorStyle = (theme: Theme) => css`
  border-color: ${theme.semantic.status.destructive};
  &:hover {
    border-color: ${theme.semantic.status.destructive};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const Textarea = styled.textarea<TextareaStyleProps>`
  ${({ theme }) => commonStyles(theme)};
  ${({ theme, textareaSize }) => sizeStyles[textareaSize](theme)};
  ${({ theme, isError }) => isError && errorStyle(theme)};
  width: ${({ width }) => width || '100%'};
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`}
  ${({ autoResize }) => autoResize && 'overflow-y: hidden;'}
`;

export const Error = styled.p`
  ${({ theme }) => theme.typography.label2.regular};
  color: ${({ theme }) => theme.semantic.status.destructive};
`;
