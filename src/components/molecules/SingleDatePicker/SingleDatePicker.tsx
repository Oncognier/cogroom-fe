'use client';

import React, { useState, useMemo } from 'react';

import ChevronLeft from '@/assets/icons/chevronleft.svg';
import ChevronRight from '@/assets/icons/chevronright.svg';
import { WEEK_DAYS } from '@/constants/common';
import { formatDayAsYYYYMM } from '@/utils/date/formatDay';
import { getCalendarMonthDateStrings } from '@/utils/date/getCalendar';

import * as S from './SingleDatePicker.styled';

interface SingleDatePickerProps {
  onClose?: () => void;
  onSelect: (date: Date) => void;
  selectedDate: Date | null;
  initialDate?: Date;
}

export default function SingleDatePicker({ onClose, onSelect, selectedDate, initialDate }: SingleDatePickerProps) {
  const today = new Date();
  const [viewDate, setViewDate] = useState(selectedDate || initialDate || today);

  const monthDates = useMemo(() => getCalendarMonthDateStrings(viewDate), [viewDate]);

  const handleDateClick = (date: Date) => {
    setViewDate(date);
    onSelect(date);
    onClose?.();
  };

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  return (
    <S.SingleDatePicker>
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
        {monthDates.map((dateStr) => {
          const currentDate = new Date(dateStr);
          return (
            <S.DateItem key={dateStr}>
              <S.Date
                isSelected={dateStr === selectedDate?.toDateString()}
                onClick={() => handleDateClick(currentDate)}
              >
                {currentDate.getDate()}
              </S.Date>
            </S.DateItem>
          );
        })}
      </S.DateList>
    </S.SingleDatePicker>
  );
}
