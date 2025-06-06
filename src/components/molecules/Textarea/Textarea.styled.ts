'use client';

import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';

const commonStyles = (theme: Theme) => css`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
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

const errorStyle = (theme: Theme) => css`
  border-color: ${theme.semantic.status.destructive};
  &:hover {
    border-color: ${theme.semantic.status.destructive};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const Textarea = styled.textarea<{ isError?: boolean }>`
  ${({ theme }) => commonStyles(theme)};
  ${({ theme, isError }) => isError && errorStyle(theme)};
`;

const Error = styled.p`
  ${({ theme }) => theme.typography.label2.regular};
  color: ${({ theme }) => theme.semantic.status.destructive};
`;

const S = {
  Container,
  Textarea,
  Error,
};

export default S;
