'use client';

import styled from '@emotion/styled';

export const PlanBannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0.8rem;
  margin-top: 2.4rem;
`;

export const PlanName = styled.span`
  ${({ theme }) => theme.typography.heading2.semibold};
  color: ${({ theme }) => theme.cogroom.black};
`;

export const CurrentPlanName = styled.span`
  ${({ theme }) => theme.typography.heading2.semibold};
  color: ${({ theme }) => theme.semantic.primary.normal};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.semantic.primary.normal};
`;
