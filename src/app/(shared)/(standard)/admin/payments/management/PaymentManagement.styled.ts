'use client';

import styled from '@emotion/styled';

export const PaymentManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  padding: 0.8rem 0;
`;

export const SearchFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const SearchTitle = styled.p`
  ${({ theme }) => theme.typography.body1.medium};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const PaymentTotalValueWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 4rem 8rem;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.semantic.background.elevated.normal};
`;

export const StatCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.4rem;
`;

export const StatIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;

  padding: 1rem;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.semantic.static.white};
`;

export const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StatLabel = styled.span`
  ${({ theme }) => theme.typography.label1.medium};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const StatValue = styled.span`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  ${({ theme }) => theme.typography.heading1.regular};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const StatUnit = styled.span`
  ${({ theme }) => theme.typography.heading2.regular};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const PaginationWrapper = styled.div`
  padding: 2.4rem;
  margin: 0 auto;
`;
