'use client';

import styled from '@emotion/styled';

export const ContentRecordToggle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ToggleWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.semantic.fill.normal};

  border-top-left-radius: ${({ theme }) => theme.radius[12]};
  border-top-right-radius: ${({ theme }) => theme.radius[12]};
  border-bottom-left-radius: ${({ isOpen, theme }) => (isOpen ? '0' : theme.radius[12])};
  border-bottom-right-radius: ${({ isOpen, theme }) => (isOpen ? '0' : theme.radius[12])};
`;

export const DropdownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 3.2rem;

  border: 1px solid ${({ theme }) => theme.semantic.line.neutral};
  border-top: none;

  border-bottom-left-radius: ${({ theme }) => theme.radius[12]};
  border-bottom-right-radius: ${({ theme }) => theme.radius[12]};

  background-color: ${({ theme }) => theme.semantic.background.normal.normal};
`;

export const MainText = styled.p`
  ${({ theme }) => theme.typography.label1.semibold};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const ChevronButton = styled.div`
  color: ${({ theme }) => theme.semantic.label.alternative};

  width: 2rem;
  height: 2rem;

  cursor: pointer;
`;

export const EmptyMessage = styled.p`
  ${({ theme }) => theme.typography.headline2.regular};
  color: ${({ theme }) => theme.semantic.label.alternative};

  width: 100%;
  margin: 8rem 0;
  text-align: center;
`;
