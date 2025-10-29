'use client';

import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';

export const LinkForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 36.7rem;

  ${mqMax.tablet} {
    width: 28rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  span {
    ${({ theme }) => theme.typography.label2.semibold};
    color: ${({ theme }) => theme.semantic.static.black};
  }
`;

export const LinkInput = styled.input`
  padding: 1rem 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.semantic.line.normal};
  border-radius: 0.4rem;
  font-size: 1.4rem;
  background: ${({ theme }) => theme.semantic.background.normal.normal};
  color: ${({ theme }) => theme.semantic.label.normal};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.semantic.label.assistive};
  }
`;

export const LinkButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
`;

export const ApplyButton = styled.button`
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 0.4rem;
  background: ${({ theme }) => theme.semantic.primary.normal};
  color: ${({ theme }) => theme.semantic.static.white};
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.semantic.primary.strong};
  }

  &:disabled {
    background: ${({ theme }) => theme.semantic.background.elevated.alternative};
    color: ${({ theme }) => theme.semantic.label.assistive};
    cursor: not-allowed;
  }
`;

export const RemoveButton = styled.button`
  padding: 0.6rem 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.semantic.status.destructive};
  border-radius: 0.4rem;
  background: transparent;
  color: ${({ theme }) => theme.semantic.status.destructive};
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.semantic.status.destructive};
    color: ${({ theme }) => theme.semantic.static.white};
  }
`;
