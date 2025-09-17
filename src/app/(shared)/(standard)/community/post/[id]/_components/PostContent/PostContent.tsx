import dompurify from 'dompurify';
import parse from 'html-react-parser';

import Question from '@/app/(shared)/(standard)/daily/_components/Question/Question';

import * as S from './PostContent.styled';

interface DailyData {
  question: string;
  answer: string;
}

interface PostContentProps {
  content: string;
  daily?: DailyData | null;
}

export default function PostContent({ content, daily }: PostContentProps) {
  return (
    <S.PostContentContainer>
      {daily && (
        <S.DailyCardWrapper>
          <Question
            assignedQuestionId={0}
            question={daily.question}
            answer={daily.answer}
            hasAnswered={true}
            hideSubmitButton={true}
            readOnlyMode={true}
          />
        </S.DailyCardWrapper>
      )}
      <S.PostContentViewBox>{parse(dompurify.sanitize(content, { ADD_ATTR: ['style'] }))}</S.PostContentViewBox>
    </S.PostContentContainer>
  );
}
