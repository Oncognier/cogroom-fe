'use client';

import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { getInteraction } from '@/styles/interaction';
import { theme } from '@/styles/theme';
import styled from '@emotion/styled';

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
  height: 9.6rem;
  padding: ${({ theme }) => theme.spacing[16]};
  border-radius: ${({ theme }) => theme.radius[16]};

  ${({ theme }) => theme.typography.body1.semibold}
  color: ${({ theme }) => theme.semantic.static.white};
  background-color: ${({ theme }) => theme.semantic.primary.heavy};
`;

export const QuestionText = styled.p`
  word-break: break-word;

  text-align: center;
  ${({ theme }) => theme.typography.body1.medium}
  color: ${({ theme }) => theme.semantic.static.white};
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  max-width: 52rem;
  width: 100%;
  height: 17.1rem;
  padding: ${({ theme }) => theme.spacing[16]} ${({ theme }) => theme.spacing[32]};

  ${({ theme }) => theme.typography.body1.regular}
  border-radius: 2rem;

  background-color: rgba(255, 255, 255, 0.76);
`;
export const Input = styled.textarea`
  width: 100%;
  overflow-y: auto;
  height: 100%;

  resize: none;
  border: none;
  outline: none;

  ${({ theme }) => theme.typography.label1.regular}
  color: ${({ theme }) => theme.semantic.label.normal};
  background-color: transparent;

  ::placeholder {
    color: ${({ theme }) => theme.semantic.label.alternative};
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  gap: 0.4rem;
`;

export const CountValue = styled.div<{ isHundredOver?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
  padding: 0.4rem 1.2rem;

  ${({ theme }) => theme.typography.label2.regular}
  color: ${({ theme }) => theme.semantic.primary.normal};

  ${({ isHundredOver }) => isHundredOver && `color: ${theme.semantic.status.destructive}`};
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
  ${({ theme }) => theme.typography.body2.semibold};

  ${getInteraction('normal', theme.semantic.label.alternative, false)(theme)};


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