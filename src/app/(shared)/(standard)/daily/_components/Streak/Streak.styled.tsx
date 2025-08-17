'use client';

import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';
import { theme } from '@/styles/theme';

export const StreakCard = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 1.5rem 0;
  background-color: ${theme.semantic.background.elevated.normal};
  border-radius: 1.2rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 88rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;

  ${mqMax.tablet} {
    display: none;
  }
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.4rem;
  height: 3.2rem;

  ${theme.typography.body1.semibold}

  background-color: ${theme.semantic.static.white};
  border-radius: 4rem;
  padding: 1.2rem;
  gap: 0.4rem;
`;

export const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const StreakWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const StreakInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const MessageContinue = styled.p`
  ${theme.typography.label1.semibold}
  color: ${theme.semantic.primary.normal};
`;

export const MessageDate = styled.p`
  ${theme.typography.label1.semibold}
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

export const MobileWrapper = styled.div`
  display: none;

  ${mqMax.tablet} {
    display: flex;
  }

  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.2rem;
`;
