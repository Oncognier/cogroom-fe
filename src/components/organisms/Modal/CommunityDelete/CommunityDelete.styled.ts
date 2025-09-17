'use client';

import styled from '@emotion/styled';

export const CommunityDelete = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 100%;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.headline1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};

  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
`;
