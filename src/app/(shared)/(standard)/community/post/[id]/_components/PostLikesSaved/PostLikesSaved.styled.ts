'use client';

import styled from '@emotion/styled';

export const PostLikeSavedWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.semantic.line.normal};
`;

export const IconMargin = styled.svg`
  margin: 0.3rem;
`;

export const BookmarkIcon = styled.svg`
  margin: 0.2rem;
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  width: 8.2rem;
`;

export const CountText = styled.span`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.interaction.inactive};
`;
