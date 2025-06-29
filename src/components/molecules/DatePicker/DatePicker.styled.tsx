'use client';

import styled from '@emotion/styled';

interface DatePickerStyleProps {
  isOpen: boolean;
  isSelected: boolean;
}

export const DatePicker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: fit-content;

  gap: 1.6rem;
  padding: 2.4rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.semantic.static.white};
  box-shadow: ${({ theme }) => theme.shadow.normal};
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
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.2rem;
`;

export const DateItem = styled.div<Pick<DatePickerStyleProps, 'isSelected'>>`
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
