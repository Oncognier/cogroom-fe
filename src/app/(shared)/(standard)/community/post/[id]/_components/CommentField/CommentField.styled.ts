'use client';

import styled from '@emotion/styled';

import { mqMax } from '@/styles/foundation';

export const CommentField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 100%;

  padding: 1.2rem 1.6rem;
  border-radius: 1.2rem;
  border: 1px solid ${({ theme }) => theme.palette.blue[80]};
  background-color: ${({ theme }) => theme.semantic.static.white};

  &:focus-within {
    border-color: ${({ theme }) => theme.semantic.background.elevated.alternative};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 2.4rem;
  max-height: none;
  border: none;
  outline: none;
  resize: none;
  overflow-y: hidden;
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
