'use client';

import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 18rem;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.semantic.static.white};
  border: 1px solid ${({ theme }) => theme.semantic.background.elevated.alternative};
  padding: 1.2rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const TextareaContainer = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
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
  margin-top: auto;
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

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;
