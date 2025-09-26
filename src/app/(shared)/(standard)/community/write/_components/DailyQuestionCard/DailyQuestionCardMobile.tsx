import styled from '@emotion/styled';

import { DEFAULT_DAILY_QUESTION } from '@/constants/common';
import { DailyQuestionCardProps } from '@/types/communityWrite';

const Container = styled.div`
  width: 100%;
`;

const QuestionBox = styled.div`
  background-color: ${({ theme }) => theme.semantic.primary.heavy};
  border-radius: 2rem;
  padding: 2rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const QuestionText = styled.p`
  ${({ theme }) => theme.typography.body2.medium};
  color: ${({ theme }) => theme.semantic.static.white};
`;

const AnswerBox = styled.div`
  background-color: ${({ theme }) => theme.semantic.static.white};
  ${({ theme }) => theme.typography.label1.regular};
  border-radius: 1rem;
  padding: 0.7rem;
  height: 100%;
`;

const AnswerText = styled.p`
  ${({ theme }) => theme.typography.body2.medium};
  color: ${({ theme }) => theme.semantic.label.normal};
  margin: 0;

  white-space: pre-wrap;
`;

export default function DailyQuestionCardMobile({ question, answer, assignedQuestionId = 0 }: DailyQuestionCardProps) {
  if (!question || !answer) {
    return null;
  }

  return (
    <Container>
      <QuestionBox>
        <QuestionText>{question || DEFAULT_DAILY_QUESTION}</QuestionText>
        <AnswerBox>
          <AnswerText>{answer}</AnswerText>
        </AnswerBox>
      </QuestionBox>
    </Container>
  );
}
