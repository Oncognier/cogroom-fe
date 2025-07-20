'use client';

import styled from '@emotion/styled';

export const Terms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.title2.bold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Subtitle = styled.div`
  display: flex;

  ${({ theme }) => theme.typography.headline1.semibold};
  color: ${({ theme }) => theme.semantic.label.neutral};
`;

export const SubContent = styled.div`
  ${({ theme }) => theme.typography.headline1.regular};
  color: ${({ theme }) => theme.semantic.label.neutral};
`;

export const SubtitleNumber = styled.p`
  width: 6.2rem;
  color: ${({ theme }) => theme.semantic.label.neutral};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Content = styled.div`
  display: flex;

  gap: 0.4rem;

  ${({ theme }) => theme.typography.body1.regular};
  color: ${({ theme }) => theme.semantic.label.neutral};
`;

export const ContentNumber = styled.p`
  width: 1.6rem;
  ${({ theme }) => theme.typography.body1.regular};
  color: ${({ theme }) => theme.semantic.label.neutral};
`;

export const ContentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const ContentListItem = styled.li`
  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;
