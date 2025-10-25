'use client';

import styled from '@emotion/styled';

export const AccordionContainer = styled.div`
  background-color: ${({ theme }) => theme.semantic.static.white};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const AccordionHeader = styled.button`
  height: 4.8rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
`;

export const AccordionTitle = styled.span`
  ${({ theme }) => theme.typography.headline1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
  text-align: left;
`;

export const AccordionIcon = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  color: ${({ theme }) => theme.palette.neutral[50]};
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(0deg)' : 'rotate(180deg)')};
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? 'fit-content' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

export const AccordionContentInner = styled.div`
  padding: 0.8rem;
`;
