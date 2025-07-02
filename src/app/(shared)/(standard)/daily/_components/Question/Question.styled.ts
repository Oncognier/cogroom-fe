'use client';

import styled from '@emotion/styled';

import { getInteraction } from '@/styles/interaction';

export const QuestionCard = styled.div`
  position: relative;
  aspect-ratio: 1060 / 522;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[16]};

  padding: ${({ theme }) => theme.spacing[16]};

  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius[16]};

  background-color: ${({ theme }) => theme.semantic.fill.dimmer};
  backdrop-filter: blur(6px);

  img {
    object-fit: contain;
    z-index: -1;
  }
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[12]};

  max-width: 52rem;
  width: 100%;
  height: 19.7rem;
  padding: ${({ theme }) => theme.spacing[16]};
  border-radius: ${({ theme }) => theme.radius[16]};

  ${({ theme }) => theme.typography.body1.semibold}
  color: ${({ theme }) => theme.semantic.static.white};
  background-color: ${({ theme }) => theme.semantic.primary.heavy};
`;

export const Badge = styled.div`
  display: inline-block;

  padding: ${({ theme }) => theme.spacing[4]} ${({ theme }) => theme.spacing[12]};
  border-radius: ${({ theme }) => theme.radius[12]};

  ${({ theme }) => theme.typography.label1.semibold}
  color: ${({ theme }) => theme.semantic.static.white};
  background-color: ${({ theme }) => theme.semantic.primary.normal};
`;

export const QuestionText = styled.p`
  word-break: break-word;

  text-align: center;
  ${({ theme }) => theme.typography.body1.medium}
  color: ${({ theme }) => theme.semantic.static.white};
`;

export const Form = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

  max-width: 52rem;
  width: 100%;
  padding: 0.6rem 0.8rem 0.6rem 3.2rem;

  ${({ theme }) => theme.typography.body1.regular}
  border-radius: ${({ theme }) => theme.radius[40]};

  background-color: ${({ theme }) => theme.semantic.static.white};
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;

  width: 83%;

  gap: ${({ theme }) => theme.spacing[8]};
`;

export const Input = styled.textarea`
  width: 100%;
  overflow-y: auto;
  height: 2rem;
  max-height: 4rem;

  resize: none;
  border: none;
  outline: none;

  ${({ theme }) => theme.typography.label1.regular}
  color: ${({ theme }) => theme.semantic.label.normal};

  ::placeholder {
    color: ${({ theme }) => theme.semantic.label.alternative};
  }
`;

export const AnswerStamp = styled.div`
  width: 2rem;
  height: 2rem;

  color: ${({ theme }) => theme.semantic.primary.normal};
`;

export const SubmitGroup = styled.div`
  display: flex;
  align-items: center;

  gap: ${({ theme }) => theme.spacing[8]};
`;

export const CountValue = styled.div<{ isHundredOver?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: 0.4rem 1.2rem;

  ${({ theme }) => theme.typography.label2.regular}
  color: ${({ theme, isHundredOver }) =>
    isHundredOver ? theme.semantic.status.destructive : theme.semantic.primary.normal};
`;

export const Button = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  width: 9.4rem;
  height: 4.2rem;
  border-radius: 999px;

  background-color: ${({ theme }) => theme.semantic.primary.normal};
  color: ${({ theme }) => theme.semantic.static.white};
  ${({ theme }) => getInteraction('normal', theme.semantic.label.normal, false)(theme)};
  ${({ theme }) => theme.typography.label2.semibold}

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.semantic.interaction.disable};
    color: ${({ theme }) => theme.semantic.label.assistive};
    cursor: default;
    pointer-events: none;
  }
`;
