import Question from '@/app/(shared)/(standard)/daily/_components/Question/Question';
import { DEFAULT_DAILY_QUESTION } from '@/constants/common';
import { DailyQuestionCardProps } from '@/types/communityWrite';

export default function DailyQuestionCard({ question, answer, assignedQuestionId = 0 }: DailyQuestionCardProps) {
  if (!question || !answer) {
    return null;
  }

  return (
    <Question
      assignedQuestionId={assignedQuestionId}
      question={question || DEFAULT_DAILY_QUESTION}
      answer={answer}
      hasAnswered={true}
      hideSubmitButton={true}
      readOnlyMode={true}
    />
  );
}
