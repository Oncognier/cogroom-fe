import Editor from '@/components/organisms/Editor/Editor';
import Question from '@/components/organisms/Question/Question';

import * as S from './PostContent.styled';

interface DailyData {
  question: string;
  answer: string;
}

interface PostContentProps {
  content?: string;
  daily?: DailyData | null;
}

export default function PostContent({ content = '', daily }: PostContentProps) {
  return (
    <S.PostContentContainer>
      {daily && (
        <S.DailyCardWrapper>
          <Question
            assignedQuestionId={0}
            question={daily.question}
            answer={daily.answer}
            hasAnswered={true}
            readOnlyMode={true}
          />
        </S.DailyCardWrapper>
      )}

      <Editor
        content={content}
        readonly
        height={400}
      />
    </S.PostContentContainer>
  );
}
