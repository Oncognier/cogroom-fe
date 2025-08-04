'use client';

import React, { useState, useMemo } from 'react';

import ChevronLeft from '@/assets/icons/chevronleft.svg';
import ChevronRight from '@/assets/icons/chevronright.svg';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { WEEK_DAYS } from '@/constants/common';
import { formatDayAsYYYYMM } from '@/utils/date/formatDay';
import { getCalendarMonthDateStrings } from '@/utils/date/getCalendar';

import * as S from './DatePicker.styled';

interface DatePickerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (date: Date | null) => void;
  selectedDate: Date | null;
}

export default function DatePicker({ isOpen, onClose, onSelect, selectedDate }: DatePickerProps) {
  const today = new Date();
  const [viewDate, setViewDate] = useState(selectedDate || today);

  const monthDates = useMemo(() => getCalendarMonthDateStrings(), []);

  const handleDateClick = (date: Date) => {
    setViewDate(date);
    onSelect(date);
  };
  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, viewDate.getDate()));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, viewDate.getDate()));
  };

  if (!isOpen) return null;

  return (
    <S.DatePicker>
      <S.Heading>
        <S.HeadingIcon onClick={handlePrevMonth}>
          <ChevronLeft />
        </S.HeadingIcon>
        <S.HeadingText>{formatDayAsYYYYMM(viewDate)}</S.HeadingText>
        <S.HeadingIcon onClick={handleNextMonth}>
          <ChevronRight />
        </S.HeadingIcon>
      </S.Heading>
      <S.DateList>
        {WEEK_DAYS.map((day) => (
          <S.WeekDay key={day}>{day}</S.WeekDay>
        ))}
        {monthDates.map((date) => (
          <S.DateItem
            key={date}
            isSelected={selectedDate?.toISOString() === date}
            onClick={() => {
              handleDateClick(new Date(date));
            }}
          >
            {new Date(date).getDate()}
          </S.DateItem>
        ))}
      </S.DateList>
      <S.ButtonWrapper>
        <OutlinedButton
          label='취소'
          color='assistive'
          size='sm'
          interactionVariant='normal'
          fillContainer
          onClick={() => {
            onSelect(null);
            onClose();
          }}
        />
        <SolidButton
          label='적용'
          size='sm'
          color='primary'
          interactionVariant='normal'
          fillContainer
          onClick={() => {
            onSelect(selectedDate);
            onClose();
          }}
        />
      </S.ButtonWrapper>
    </S.DatePicker>
  );
}
