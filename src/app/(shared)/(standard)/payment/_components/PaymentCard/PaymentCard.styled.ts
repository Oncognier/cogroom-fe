'use client';

import styled from '@emotion/styled';

export const PaymentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.4rem;

  padding: 2.4rem 2.4rem 3.6rem 2.4rem;
  border: 1px solid rgba(117, 154, 217, 0.6);
  border-radius: 2.4rem;
`;

export const PlanCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const PlanName = styled.p`
  ${({ theme }) => theme.typography.title2.medium};
  color: ${({ theme }) => theme.semantic.primary.strong};
`;

export const PlanCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 100%;
`;

export const PriceInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DiscountInfo = styled.p`
  ${({ theme }) => theme.typography.body1Reading.regular};
  color: ${({ theme }) => theme.palette.neutral[50]};
`;

export const FinalPrice = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.2rem;
`;

export const Price = styled.p`
  ${({ theme }) => theme.typography.display1.medium};
  color: ${({ theme }) => theme.cogroom.black};
`;

export const Currency = styled.p`
  ${({ theme }) => theme.typography.headline1.regular};
  color: ${({ theme }) => theme.palette.neutral[50]};

  margin-bottom: 0.6rem;
`;
