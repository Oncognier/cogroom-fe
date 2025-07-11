'use client';

import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;

  background-color: ${({ theme }) => theme.semantic.background.normal.normal};
  border-radius: ${({ theme }) => theme.radius[8]};
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.headline1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};

  text-align: center;
`;
