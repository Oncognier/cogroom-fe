'use client';

import styled from '@emotion/styled';

export const Subscription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FirstLayout = styled.div`
  padding: 12rem 0;
`;

export const SelectPlan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  max-width: 111.7rem;
  margin: 0 auto;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

export const Heading = styled.p`
  ${({ theme }) => theme.typography.display1.bold};
  color: ${({ theme }) => theme.semantic.label.normal};

  text-align: center;
`;

export const Subtext = styled.p`
  ${({ theme }) => theme.typography.headline1.regular};
  color: ${({ theme }) => theme.semantic.label.normal};

  text-align: center;
`;

export const SubscriptionCardWrapper = styled.div`
  display: flex;
  gap: 3.2rem;

  width: 100%;
`;
