'use client';

import styled from '@emotion/styled';

export const Logout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const Mesage = styled.p`
  ${({ theme }) => theme.typography.title3.bold};
  color: ${({ theme }) => theme.semantic.label.normal};

  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
`;
