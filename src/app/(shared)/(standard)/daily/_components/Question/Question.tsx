'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import CheckCircle from '@/assets/icons/checkcircle-fill.svg';
import { DEFAULT_QUESTION_BACKGROUND } from '@/constants/image';
import { useEditDailyAnswerMutation } from '@/hooks/api/daily/useEditDailyAnswer';
import { useSubmitDailyAnswerMutation } from '@/hooks/api/daily/useSubmitDailyAnswer';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAppModalStore, useAlertModalStore } from '@/stores/useModalStore';

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
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { submitDailyAnswer } = useSubmitDailyAnswerMutation();
  const { editDailyAnswer } = useEditDailyAnswerMutation();
  const { open } = useAppModalStore();
  const { open: openAlertModal } = useAlertModalStore();
  const { isLoggedIn } = useAuthStore();

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = '0rem';
    el.style.height = `${el.scrollHeight / 10}rem`;
  };

  const handleSubmit = () => {
    if (!isLoggedIn) {
      open('login');
      return;
    }

    if (!isFirstAnswer.current) {
      openAlertModal('dailyFirstAnswer', { assignedQuestionId, answer: inputValue });
      isFirstAnswer.current = true;
      return;
    }

    submitDailyAnswer({ assignedQuestionId, answer: inputValue });
  };

  const handleEdit = () => {
    if (!isLoggedIn) {
      open('login');
      return;
    }

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
        src={DEFAULT_QUESTION_BACKGROUND}
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
            placeholder='음... 나는'
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </S.InputGroup>

        <S.SubmitGroup>
          <S.CountValue isHundredOver={inputValue.length > 100}>{inputValue.length}/100</S.CountValue>
          <S.Button onClick={isAnswered ? handleEdit : handleSubmit}>{isAnswered ? '수정하기' : '제출하기'}</S.Button>
        </S.SubmitGroup>
      </S.Form>
    </S.QuestionCard>
  );
}
