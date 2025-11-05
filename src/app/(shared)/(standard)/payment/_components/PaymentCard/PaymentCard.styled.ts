'use client';

import styled from '@emotion/styled';

export const PaymentCard = styled.div<{ $hasFreeBadge?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.24rem;

  width: 100%;
  padding-top: ${({ $hasFreeBadge }) => ($hasFreeBadge ? '0.9rem' : '0')};
  margin-top: ${({ $hasFreeBadge }) => ($hasFreeBadge ? '0' : '3.7rem')};
  height: fit-content;
  border-radius: ${({ $hasFreeBadge }) => ($hasFreeBadge ? '2.4rem 2.4rem 2.5rem 2.5rem' : '2.5rem')};
  background-color: ${({ theme }) => theme.cogroom.black};
`;

export const FreeBadge = styled.p`
  ${({ theme }) => theme.typography.body1Reading.medium};
  color: ${({ theme }) => theme.cogroom.white};
`;

export const CardContainer = styled.div<{ $isChecked?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4.4rem;

  width: 100%;
  padding: 2.4rem 2.4rem 3.6rem 2.4rem;
  border: ${({ $isChecked, theme }) =>
    $isChecked ? `2px solid ${theme.semantic.primary.normal}` : '1px solid rgba(117, 154, 217, 0.6)'};
  border-radius: 2.4rem;
  background-color: ${({ theme }) => theme.semantic.background.normal.normal};

  cursor: pointer;
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

  span {
    text-decoration: line-through;
  }
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

export const PlanDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const PlanDescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  padding-left: 0.9rem;
  list-style-position: inside;

  li {
    display: list-item;

    ${({ theme }) => theme.typography.body1Reading.medium};
    color: ${({ theme }) => theme.palette.neutral[30]};

    &.pending {
      color: ${({ theme }) => theme.palette.neutral[80]};
    }

    u {
      text-decoration: none;
      box-shadow: inset 0 -1px 0 ${({ theme }) => theme.palette.neutral[30]};
    }
  }

  li::marker {
    color: ${({ theme }) => theme.semantic.primary.normal};
  }
`;

export const ShowMoreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  width: fit-content;
  ${({ theme }) => theme.typography.body1Reading.semibold};
  color: ${({ theme }) => theme.cogroom.black};
`;

export const ChevronIcon = styled.div`
  width: 2.4rem;
  height: 2.4rem;

  color: ${({ theme }) => theme.cogroom.black};
`;
