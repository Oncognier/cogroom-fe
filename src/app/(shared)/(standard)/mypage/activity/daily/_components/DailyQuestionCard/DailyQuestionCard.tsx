'use client';

import { useState } from 'react';

import ChevronDown from '@/assets/icons/chevrondown.svg';
import ChevronUp from '@/assets/icons/chevronup.svg';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Textarea from '@/components/molecules/Textarea/Textarea';
import { formatDayAsSlashMMDD, formatWeekday } from '@/utils/date/formatDay';

import * as S from './DailyQuestionCard.styled';

interface DailyQuestionCardProps {
  question: string;
  answer: string;
  assignedDate: string;
  initialOpen?: boolean;
}

export default function DailyQuestionCard({
  question,
  answer,
  assignedDate,
  initialOpen = false,
}: DailyQuestionCardProps) {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const formattedDate = formatDayAsSlashMMDD(assignedDate);
  const weekday = formatWeekday(assignedDate);

  return (
    <S.DailyQuestionCard>
      <S.DateWrapper>
        <S.DateText>{formattedDate}</S.DateText>
        <S.WeekdayText>{weekday}</S.WeekdayText>
      </S.DateWrapper>

      <S.QuestionAnswerGroup>
        <S.StyledOutlinedButton $isOpen={isOpen}>
          <OutlinedButton
            size='md'
            color='assistive'
            label={question}
            iconRight={isOpen ? <ChevronUp /> : <ChevronDown />}
            interactionVariant='normal'
            fillContainer
            align='space-between'
            onClick={toggleOpen}
          />
        </S.StyledOutlinedButton>
        {isOpen && (
          <Textarea
            textareaSize='md'
            placeholder={answer}
            minHeight='15.5rem'
            disabled
            autoResize
            style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
          />
        )}
      </S.QuestionAnswerGroup>
    </S.DailyQuestionCard>
  );
}
