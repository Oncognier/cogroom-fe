'use client';

import styled from '@emotion/styled';

export const EmailForm = styled.div`
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing[16]};

  width: 100%;
`;

export const ButtonWrapper = styled.div<{ isError?: boolean }>`
  ${({ isError }) => isError && 'margin-bottom: 25px;'}
`;
