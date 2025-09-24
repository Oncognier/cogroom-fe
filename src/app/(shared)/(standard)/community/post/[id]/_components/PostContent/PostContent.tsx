/* eslint-disable @typescript-eslint/no-explicit-any */
import dompurify from 'dompurify';
import parse, { DOMNode, domToReact, Element } from 'html-react-parser';

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

      <S.PostContentViewBox>
        {parse(content, {
          replace: (domNode) => {
            const element = domNode as Element;
            if (element.type === 'tag' && element.name === 'a') {
              const { class: className, target, ...rest } = element.attribs;

              return (
                <a
                  {...rest}
                  className={className}
                  target={target}
                >
                  {domToReact(element.children as any)}
                </a>
              );
            }
          },
        })}
      </S.PostContentViewBox>
    </S.PostContentContainer>
  );
}
