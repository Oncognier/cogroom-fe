'use client';

import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const StreakCard = styled.div`
  display: flex;
  padding: 1.5rem 0;

  background-color: ${theme.semantic.background.elevated.normal};
  border-radius: ${theme.radius[12]};
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 88rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.4rem;
  height: 3.2rem;

  ${theme.typography.body1.semibold}

  background-color: ${theme.semantic.static.white};
  border-radius: ${theme.radius[40]};
  padding: ${theme.spacing[12]};
  gap: ${theme.spacing[4]};
`;

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[12]};
`;

export const MessageContinue = styled.p`
  ${theme.typography.label1.semibold}
  color: ${theme.semantic.primary.normal};
`;

export const MessageDate = styled.p`
  ${theme.typography.label1.regular}
  color: ${theme.semantic.label.normal};
`;

export const Message = styled.p`
  ${theme.typography.label1.regular}
  color: ${theme.semantic.label.normal};
`;

export const DateText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${theme.typography.label1.regular}
  color: ${theme.semantic.label.alternative};
`;
