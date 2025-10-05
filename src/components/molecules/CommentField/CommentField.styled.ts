'use client';

import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';

export const Wrapper = styled.div`
  width: 100%;
  height: 18rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.semantic.static.white};
  border: 1px solid ${({ theme }) => theme.palette.blue[80]};
  padding: 1.2rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.semantic.background.elevated.alternative};
  }
`;

export const TextareaContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  resize: none;
  overflow-y: auto;
  background: transparent;
  color: ${({ theme }) => theme.semantic.label.neutral};
  ${({ theme }) => theme.typography.body1.regular};

  &::placeholder {
    color: ${({ theme }) => theme.semantic.label.assistive};
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mqMax.tablet} {
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
  }
`;

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
`;

export const CharCurrentCounter = styled.span`
  ${({ theme }) => theme.typography.label2.regular};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const CharTotalCounter = styled.span`
  ${({ theme }) => theme.typography.label2.regular};
  color: ${({ theme }) => theme.semantic.label.assistive};
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6rem;
`;

export const CheckboxLabel = styled.span`
  ${({ theme }) => theme.typography.label1.regular};
  color: ${({ theme }) => theme.semantic.label.normal};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;
