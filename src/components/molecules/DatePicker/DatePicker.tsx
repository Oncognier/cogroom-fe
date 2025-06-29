'use client';

import dayjs, { Dayjs } from 'dayjs';
import React, { useState, useMemo } from 'react';

import ChevronLeft from '@/assets/icons/chevronleft.svg';
import ChevronRight from '@/assets/icons/chevronright.svg';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { WEEK_DAYS } from '@/constants/common';
import { formatDayAsYYYYMM } from '@/utils/formatDay';
import { getCalendarMonthDates } from '@/utils/getCalendar';

import * as S from './DatePicker.styled';

interface DatePickerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (date: Dayjs | null) => void;
  selectedDate: Dayjs | null;
}

export default function DatePicker({ isOpen, onClose, onSelect, selectedDate }: DatePickerProps) {
  const today = dayjs();
  const [viewDate, setViewDate] = useState(selectedDate || today);

  const monthDates = useMemo(() => getCalendarMonthDates(viewDate), [viewDate]);

  const handleDateClick = (date: Dayjs) => {
    setViewDate(date);
    onSelect(date);
  };
  const handlePrevMonth = () => {
    setViewDate(viewDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setViewDate(viewDate.add(1, 'month'));
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
            key={date.toISOString()}
            isSelected={selectedDate?.isSame(date, 'day') ?? false}
            onClick={() => {
              handleDateClick(date);
            }}
          >
            {date.date()}
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
