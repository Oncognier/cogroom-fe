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
`;
