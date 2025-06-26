'use client';

import styled from '@emotion/styled';

interface SelectDateStyleProps {
  isOpen?: boolean;
}

export const SelectDateWrapper = styled.div`
  position: relative;
  width: 18rem;
`;

export const DatePopup = styled.div`
  position: absolute;
  top: calc(100% + 0.8rem);
  z-index: 20;
`;

export const InputContainer = styled.div<SelectDateStyleProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  width: 100%;
  padding: 1.1rem 1.5rem;
  border-radius: 1.2rem;

  border: 1px solid ${({ theme, isOpen }) => (isOpen ? theme.semantic.primary.normal : theme.semantic.label.assistive)};

  cursor: pointer;
`;

export const TriggerInput = styled.input`
  flex: 1;

  border: none;
  background: transparent;

  ${({ theme }) => theme.typography.label2.regular};
  color: ${({ theme }) => theme.semantic.label.normal};

  cursor: pointer;

  &::placeholder {
    ${({ theme }) => theme.typography.label2.regular};
    color: ${({ theme }) => theme.semantic.label.assistive};
  }

  &:focus {
    outline: none;
  }
`;

export const IconWrapper = styled.div<SelectDateStyleProps>`
  width: 1.6rem;
  height: 1.6rem;

  position: absolute;
  top: 50%;
  right: 1.58rem;
  transform: translateY(-50%);
  z-index: 1;

  color: ${({ theme, isOpen }) => (isOpen ? theme.semantic.primary.normal : theme.semantic.label.alternative)};
`;

export const DropdownPanel = styled.div`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 0;
  right: 0;

  margin-top: 0.7rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.semantic.static.white};

  ${({ theme }) => theme.shadow.normal};
`;
