'use client';

import styled from '@emotion/styled';

export const DateRangePanel = styled.div`
  position: relative;
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 18rem;

  gap: 1.6rem;

  border-radius: 1.2rem;
  padding: 1.6rem 1.2rem;

  background-color: ${({ theme }) => theme.semantic.static.white};

  ${({ theme }) => theme.shadow.normal};
`;

export const DateSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.8rem;
  width: 100%;
`;

export const Line = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.semantic.line.normal};
`;

export const QuickDateSelect = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 0.4rem;
`;

export const QuickDateSelectLabel = styled.div`
  ${({ theme }) => theme.typography.label2.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const QuickDateSelectItem = styled.button`
  display: flex;

  ${({ theme }) => theme.typography.body2.regular};
  color: ${({ theme }) => theme.semantic.label.neutral};
`;

export const PopupWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const Popup = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 16px;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  padding: 2.4rem;
  border-radius: 1.6rem;

  background-color: ${({ theme }) => theme.semantic.static.white};
  ${({ theme }) => theme.shadow.normal};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.9rem;
`;
