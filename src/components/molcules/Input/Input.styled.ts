'use client';

import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

type InputSize = 'sm' | 'md' | 'lg';

export interface InputStyleProps {
  inputSize: InputSize;
}

const commonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[12]};

  width: 100%;
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

    &::placeholder {
      color: ${theme.semantic.label.alternative};
    }
  }
`;

const sizeStyles: Record<InputSize, (theme: Theme) => SerializedStyles> = {
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
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const InputWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

const Input = styled.input<InputStyleProps & { hasValue?: boolean; isError?: boolean }>`
  ${({ theme }) => commonStyles(theme)};
  ${({ theme, inputSize }) => sizeStyles[inputSize](theme)};
  ${({ theme, isError }) => isError && errorStyle(theme)};

  ${({ hasValue }) =>
    hasValue &&
    css`
      padding-right: 4.4rem;
    `}
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 50%;
  right: 1.6rem;
  transform: translateY(-50%);

  width: 1.6rem;
  height: 1.6rem;

  color: ${({ theme }) => theme.semantic.status.destructive};
`;

const Error = styled.p`
  ${({ theme }) => theme.typography.label2.regular};
  color: ${({ theme }) => theme.semantic.status.destructive};
`;

const S = {
  Container,
  InputWrapper,
  Input,
  RemoveButton,
  Error,
};

export default S;
