'use client';

import styled from '@emotion/styled';

export const Email = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

export const MainMessage = styled.p`
  ${({ theme }) => theme.typography.title2.bold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;
