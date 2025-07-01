'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { DEFAULT_QUESTION_BACKGROUND } from '@/constants/image';
import { useSubmitDailyAnswerMutation } from '@/hooks/api/daily/useSubmitDailyAnswer';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAppModalStore } from '@/stores/useModalStore';

import * as S from './Question.styled';

interface QuestionProps {
  assignedQuestionId: number;
  question: string;
  answer?: string;
  hasAnswered: boolean;
}

export default function Question({ assignedQuestionId, question, answer, hasAnswered }: QuestionProps) {
  const [inputValue, setInputValue] = useState(answer ?? '');
  const [isAnswered, setIsAnswered] = useState<boolean>(answer ? true : false);
  const isFirstAnswer = useRef<boolean>(hasAnswered);

  const { submitDailyAnswer } = useSubmitDailyAnswerMutation();
  const { open } = useAppModalStore();
  const { isLoggedIn } = useAuthStore();

  const handleSubmit = () => {
    if (!isLoggedIn) {
      open('login');
      return;
    }

    submitDailyAnswer({ assignedQuestionId, answer: inputValue });
  };

  const handleEdit = () => {
    open('dailyAnswerEdit', { assignedQuestionId, answer: inputValue, redirectTo: '/daily' });
  };

  const handleFocus = () => {
    if (!isFirstAnswer.current && isLoggedIn) {
      open('dailyFirstAnswer');
      isFirstAnswer.current = true;
      return;
    }
  };

  useEffect(() => {
    if (answer) {
      setInputValue(answer);
      setIsAnswered(true);
    }
  }, [answer]);

  return (
    <S.QuestionCard>
      <Image
        src={DEFAULT_QUESTION_BACKGROUND}
        alt='streakBackground'
        fill
      />
      <S.QuestionWrapper>
        <S.QuestionText>{question}</S.QuestionText>
      </S.QuestionWrapper>

      <S.Form>
        <S.Input
          value={inputValue}
          placeholder='음... 나는'
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onFocus={handleFocus}
        />
        <S.FormFooter>
          <S.CountValue isHundredOver={inputValue.length > 100}>{inputValue.length}/100</S.CountValue>
          <S.Button
            onClick={isAnswered ? handleEdit : handleSubmit}
            disabled={inputValue.length > 100}
          >
            {isAnswered ? '수정하기' : '제출하기'}
          </S.Button>
        </S.FormFooter>
      </S.Form>
    </S.QuestionCard>
  );
}
