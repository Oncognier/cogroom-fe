'use client';

import styled from '@emotion/styled';

export const PaymentDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
`;

export const PlanTtileWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const PlanTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const PlanTitleValue = styled.div`
  width: 20.4rem;
  height: 3.5rem;
  border: 1px solid ${({ theme }) => theme.semantic.label.assistive};
  background-color: ${({ theme }) => theme.semantic.static.white};
  border-radius: 1.2rem;
  padding: 1.3rem 1.6rem;

  ${({ theme }) => theme.typography.label1.regular}
  color: ${({ theme }) => theme.semantic.label.normal};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaymentStateBox = styled(PlanTitleValue)`
  width: fit-content;
`;

export const PlanTitleLabel = styled.span`
  ${({ theme }) => theme.typography.label1.semibold}
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const PaymentStateName = styled(PlanTitleValue)<{ $isPaid?: boolean }>`
  ${({ theme }) => theme.typography.body2.semibold}
  color: ${({ theme, $isPaid }) => ($isPaid ? theme.palette.blue[60] : theme.palette.red[60])};
  width: fit-content;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.semantic.line.normal};
  margin: 0.8rem 0;
`;

export const PaymentInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PartTitle = styled.p`
  ${({ theme }) => theme.typography.heading1.semibold}
  color: ${({ theme }) => theme.semantic.label.normal};
  padding-bottom: 0.9rem;
`;

export const PartLabel = styled.span`
  ${({ theme }) => theme.typography.label1.semibold}
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const PartSubLabel = styled.span`
  ${({ theme }) => theme.typography.caption1.semibold};
  color: ${({ theme }) => theme.semantic.label.neutral};
  border-left: 2px solid ${({ theme }) => theme.semantic.label.alternative};
  padding-left: 0.5rem;
`;

export const MethodBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
`;

export const MethodBoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const MethodBoxRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const NextPaymentDayLabel = styled.span`
  ${({ theme }) => theme.typography.body2.semibold};
  color: ${({ theme }) => theme.palette.blue[60]};
  padding-top: 0.2rem;
`;

export const PriceBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BaseDiscountAmount = styled(PartLabel)`
  color: ${({ theme }) => theme.palette.red[60]};
`;

export const TotalPrice = styled(PartTitle)`
  color: ${({ theme }) => theme.palette.blue[60]};
`;

export const TotalPriceKrw = styled(PartLabel)`
  ${({ theme }) => theme.typography.body1.medium};
  color: ${({ theme }) => theme.palette.neutral[50]};
`;

export const TotalPriceBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;

  align-items: center;
`;

export const NotificationBox = styled.div`
  padding-top: 1rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const Notification = styled.span`
  ${({ theme }) => theme.typography.caption1.medium};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const Dividerr = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.semantic.line.neutral};
`;
