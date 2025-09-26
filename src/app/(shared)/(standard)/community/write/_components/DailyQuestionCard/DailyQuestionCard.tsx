import styled from '@emotion/styled';

import Question from '@/app/(shared)/(standard)/daily/_components/Question/Question';
import { DEFAULT_DAILY_QUESTION } from '@/constants/common';
import { mqMax } from '@/styles/foundation';
import { DailyQuestionCardProps } from '@/types/communityWrite';

import DailyQuestionCardMobile from './DailyQuestionCardMobile';

const DesktopVersion = styled.div`
  display: block;

  ${mqMax.tablet} {
    display: none;
  }
`;

const MobileVersion = styled.div`
  display: none;

  ${mqMax.tablet} {
    display: block;
  }
`;

export default function DailyQuestionCard({ question, answer, assignedQuestionId = 0 }: DailyQuestionCardProps) {
  if (!question || !answer) {
    return null;
  }

  return (
    <>
      <DesktopVersion>
        <Question
          assignedQuestionId={assignedQuestionId}
          question={question || DEFAULT_DAILY_QUESTION}
          answer={answer}
          hasAnswered={true}
          hideSubmitButton={true}
          readOnlyMode={true}
        />
      </DesktopVersion>
      
      <MobileVersion>
        <DailyQuestionCardMobile
          question={question}
          answer={answer}
          assignedQuestionId={assignedQuestionId}
        />
      </MobileVersion>
    </>
  );
}
