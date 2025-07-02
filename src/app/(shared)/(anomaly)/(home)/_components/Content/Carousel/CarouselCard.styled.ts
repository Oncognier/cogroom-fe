'use client';

import styled from '@emotion/styled';

export const CarouselCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[24]};

  width: 340px;
  cursor: pointer;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[24]};

  color: ${({ theme }) => theme.semantic.static.black};
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.headline2.semibold};
`;

export const Content = styled.p`
  ${({ theme }) => theme.typography.label1.regular};
`;
