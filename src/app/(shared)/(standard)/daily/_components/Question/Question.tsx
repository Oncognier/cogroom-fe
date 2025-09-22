'use client';

import { useEffect, useRef, useState } from 'react';

import CheckCircle from '@/assets/icons/checkcircle-fill.svg';
import { DAILY_MAX_LENGTH } from '@/constants/common';
import { DEFAULT_QUESTION_BACKGROUND } from '@/constants/image';
import { useEditDailyAnswerMutation } from '@/hooks/api/daily/useEditDailyAnswer';
import { useSubmitDailyAnswerMutation } from '@/hooks/api/daily/useSubmitDailyAnswer';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAppModalStore, useAlertModalStore } from '@/stores/useModalStore';

import InputCount from './_components/InputCount';
import * as S from './Question.styled';

interface QuestionProps {
  assignedQuestionId: number;
  question: string;
  answer?: string;
  hasAnswered: boolean;
  hideSubmitButton?: boolean;
  readOnlyMode?: boolean;
}

export default function Question({
  assignedQuestionId,
  question,
  answer,
  hasAnswered,
  hideSubmitButton = false,
  readOnlyMode = false,
}: QuestionProps) {
  const [isAnswered, setIsAnswered] = useState<boolean>(!!answer);
  const isFirstAnswer = useRef<boolean>(hasAnswered);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { isLoggedIn } = useAuthStore();
  const { submitDailyAnswer } = useSubmitDailyAnswerMutation();
  const { editDailyAnswer } = useEditDailyAnswerMutation();
  const { open } = useAppModalStore();
  const { open: openAlertModal } = useAlertModalStore();

  const [answerValue, setAnswerValue] = useState<string>(answer ?? '');

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
      openAlertModal('dailyFirstAnswer', { assignedQuestionId, answer: answerValue });
      isFirstAnswer.current = true;
      return;
    }

    submitDailyAnswer({ assignedQuestionId, answer: answerValue });
  };

  const handleEdit = () => {
    if (!isLoggedIn) {
      open('login');
      return;
    }

    editDailyAnswer({ assignedQuestionId, answer: answerValue });
  };

  useEffect(() => {
    if (answer) {
      setAnswerValue(answer);
      setIsAnswered(true);
    }
  }, [answer, setAnswerValue]);

  useEffect(() => {
    handleInput();
  }, [answerValue]);

  return (
    <S.QuestionCard>
      <S.BackgroundImage
        src={DEFAULT_QUESTION_BACKGROUND}
        alt='streakBackground'
        width={1060}
        height={522}
      />
      <S.QuestionWrapper>
        <S.Badge>오늘의 질문</S.Badge>
        <S.QuestionText>{question}</S.QuestionText>
      </S.QuestionWrapper>
      <S.Form>
        <S.InputGroup>
          {isAnswered && !readOnlyMode && (
            <S.AnswerStamp>
              <CheckCircle />
            </S.AnswerStamp>
          )}
          <S.Input
            ref={textareaRef}
            value={answerValue}
            placeholder='음... 나는'
            $readOnly={readOnlyMode}
            onChange={(e) => {
              if (!readOnlyMode) {
                setAnswerValue(e.target.value);
              }
            }}
          />
        </S.InputGroup>

        <S.SubmitGroup>
          {!readOnlyMode && (
            <InputCount
              maxLength={DAILY_MAX_LENGTH}
              value={answerValue}
              onChange={setAnswerValue}
            />
          )}
          {!hideSubmitButton && (
            <S.Button onClick={isAnswered ? handleEdit : handleSubmit}>{isAnswered ? '수정하기' : '제출하기'}</S.Button>
          )}
        </S.SubmitGroup>
      </S.Form>
    </S.QuestionCard>
  );
}
