'use client';

import styled from '@emotion/styled';

export const Alert = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.headline1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};

  text-align: center;
  white-space: pre-line;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
