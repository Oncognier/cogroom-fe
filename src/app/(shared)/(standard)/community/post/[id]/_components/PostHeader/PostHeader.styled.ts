'use client';

import styled from '@emotion/styled';

export const PostTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const PostTitle = styled.span`
  ${({ theme }) => theme.typography.title2.bold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const PostSubTitleWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

export const PostSubTitle = styled.span`
  ${({ theme }) => theme.typography.caption1.regular};
  color: ${({ theme }) => theme.semantic.interaction.inactive};
`;
