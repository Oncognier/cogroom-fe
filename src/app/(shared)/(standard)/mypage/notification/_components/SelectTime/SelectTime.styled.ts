'use client';

import styled from '@emotion/styled';

export const SelectAlarm = styled.div`
  position: relative;
  width: 100%;
`;

export const DropdownPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 100%;
`;

export const AlarmPopup = styled.div`
  position: absolute;
  top: calc(100% + 0.8rem);
  right: 0;
  z-index: 20;
`;

export const InputContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  border-radius: 1.2rem;
  padding: 1.2rem 2.4rem;

  ${({ theme }) => theme.typography.label1.regular};
  background-color: ${({ theme, disabled }) => (disabled ? '' : theme.semantic.background.elevated.normal)};
  color: ${({ theme, disabled }) => (disabled ? theme.semantic.label.alternative : theme.semantic.primary.normal)};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.4rem;
  height: 2.4rem;
`;
