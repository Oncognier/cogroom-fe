'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { usePatchDailyAnswerMutation, usePostDailyAnswerMutation } from '@/app/daily/_hooks/getDaily';
import CheckCircle from '@/assets/icons/checkcircle-fill.svg';
import TextButton from '@/components/atoms/TextButton/TextButton';
import { DEFAULT_STREAK_BACKGROUND } from '@/constants/image';

import * as S from './Question.styled';

interface QuestionProps {
  question: string;
  answer?: string;
}

export default function Question({ question, answer }: QuestionProps) {
  const [inputValue, setInputValue] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);

  const postMutation = usePostDailyAnswerMutation();
  const patchMutation = usePatchDailyAnswerMutation();

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = '2rem';
      const newHeight = Math.min(el.scrollHeight, 40);
      el.style.height = `${newHeight / 10}rem`;
    }
  };

  const handleSubmit = () => {
    postMutation.mutate(
      { answer: inputValue },
      {
        onSuccess: () => {
          setIsAnswered(true);
        },
      },
    );
  };

  const handleEdit = () => {
    patchMutation.mutate({ answer: inputValue });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      isAnswered ? handleEdit() : handleSubmit();
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
            onChange={(e) => setInputValue(e.target.value)}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
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
