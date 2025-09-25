'use client';

import styled from '@emotion/styled';

export const SingleDatePicker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;

export const HeadingIcon = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.semantic.label.alternative};
  width: 1.6rem;
  height: 1.6rem;
`;

export const HeadingText = styled.div`
  color: ${({ theme }) => theme.semantic.label.normal};
  ${({ theme }) => theme.typography.label1.semibold};
`;

export const WeekDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  padding: 1rem;

  ${({ theme }) => theme.typography.label2.regular}
  color: ${({ theme }) => theme.semantic.label.alternative};
`;

export const DateList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  place-items: center;
`;

export const DateItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Date = styled.div<{
  isSelected: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 3rem;
  height: 3rem;
  text-align: center;
  border-radius: 0.8rem;
  cursor: pointer;

  background-color: ${({ theme, isSelected }) => (isSelected ? theme.semantic.primary.normal : 'transparent')};
  color: ${({ theme, isSelected }) => (isSelected ? theme.semantic.static.white : theme.semantic.label.normal)};

  ${({ theme }) => theme.typography.label1.regular}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.9rem;
`;
