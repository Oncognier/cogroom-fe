'use client';

import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';

export type FormStatusMessageStatus = 'error' | 'warning' | 'success' | 'disable';

export interface FormStatusMessageStyleProps {
  status?: FormStatusMessageStatus;
}

const statusStyles: Record<FormStatusMessageStatus, (theme: Theme) => SerializedStyles> = {
  error: (theme) => css`
    background-color: rgba(255, 99, 99, 0.1);
    color: ${theme.semantic.status.destructive};
  `,
  warning: (theme) => css`
    background-color: rgba(255, 169, 56, 0.1);
    color: ${theme.semantic.status.cautionary};
  `,
  success: (theme) => css`
    background-color: rgba(30, 212, 90, 0.1);
    color: ${theme.semantic.status.positive};
  `,
  disable: (theme) => css`
    background-color: ${theme.semantic.fill.normal};
    color: ${theme.semantic.label.neutral};
  `,
};

export const FormStatusMessage = styled.div<FormStatusMessageStyleProps>`
  ${({ theme, status = 'error' }) => statusStyles[status](theme)};
  ${({ theme }) => theme.typography.label2.regular};

  display: flex;
  align-items: center;
  gap: 4px;

  width: 100%;
  border-radius: ${({ theme }) => theme.radius[8]};
  padding: 0.6rem 1rem;

  & > svg {
    width: 1em;
    height: 1em;
  }
`;
