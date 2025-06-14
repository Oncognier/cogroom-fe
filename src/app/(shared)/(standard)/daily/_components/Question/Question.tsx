'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import CheckCircle from '@/assets/icons/checkcircle-fill.svg';
import TextButton from '@/components/atoms/TextButton/TextButton';
import { DEFAULT_STREAK_BACKGROUND } from '@/constants/image';
import { useEditDailyAnswerMutation } from '@/hooks/api/daily/useEditDailyAnswer';
import { useSubmitDailyAnswerMutation } from '@/hooks/api/daily/useSubmitDailyAnswer';

import * as S from './Question.styled';

interface QuestionProps {
  assignedQuestionId: number;
  question: string;
  answer?: string;
}

export default function Question({ assignedQuestionId, question, answer }: QuestionProps) {
  const [inputValue, setInputValue] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { submitDailyAnswer } = useSubmitDailyAnswerMutation();
  const { editDailyAnswer } = useEditDailyAnswerMutation();

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = '0rem';
    el.style.height = `${el.scrollHeight / 10}rem`;
  };

  const handleSubmit = () => {
    submitDailyAnswer({ assignedQuestionId, answer: inputValue });
  };

  const handleEdit = () => {
    editDailyAnswer({ assignedQuestionId, answer: inputValue });
  };

  useEffect(() => {
    if (answer) {
      setInputValue(answer);
      setIsAnswered(true);
    }
  }, [answer]);

  useEffect(() => {
    handleInput();
  }, [inputValue]);

  return (
    <S.QuestionCard>
      <Image
        src={DEFAULT_STREAK_BACKGROUND}
        alt='streakBackground'
        fill
      />
      <S.QuestionWrapper>
        <S.Badge>오늘의 질문</S.Badge>
        <S.QuestionText>{question}</S.QuestionText>
      </S.QuestionWrapper>

      <S.Form>
        <S.InputGroup>
          {isAnswered && (
            <S.AnswerStamp>
              <CheckCircle />
            </S.AnswerStamp>
          )}
          <S.Input
            ref={textareaRef}
            value={inputValue}
            placeholder='지금 느끼는 감정을 솔직하게 적어보세요!'
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </S.InputGroup>
        <TextButton
          label={isAnswered ? '수정하기' : '제출하기'}
          color='assistive'
          size='sm'
          interactionVariant='normal'
          onClick={isAnswered ? handleEdit : handleSubmit}
        />
      </S.Form>
    </S.QuestionCard>
  );
}
