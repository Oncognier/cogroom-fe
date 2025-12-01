'use client';

import styled from '@emotion/styled';

export const AdminCouponContainer = styled.div`
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

export const SearchTitle = styled.p`
  ${({ theme }) => theme.typography.title3.medium};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const SearchCheckBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CheckboxSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const CheckboxLabel = styled.p`
  ${({ theme }) => theme.typography.body1.semibold};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const SearchItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

export const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const CheckboxItemLabel = styled.span`
  ${({ theme }) => theme.typography.body1.medium};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2.4rem 0;
`;
