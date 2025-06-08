'use client';

import Image from 'next/image';
import { useState } from 'react';

import { WEEK_DAYS } from '@/app/daily/_constants/weekDays';
import { getCalendarMonthDates, getCalendarWeekDates, formatDateToYYYYMMDD } from '@/app/daily/_utils/formatDay';
import ChevronDown from '@/assets/icons/chevrondown.svg';
import ChevronUp from '@/assets/icons/chevronup.svg';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { DEFAULT_WATERDROP } from '@/constants/image';

import * as S from './Calendar.styled';

interface CalendarProps {
  streakDateList: string[];
}

export default function Calendar({ streakDateList }: CalendarProps) {
  const [isMonthly, setIsMonthly] = useState(false);
  const today = new Date();
  const dates = isMonthly
    ? getCalendarMonthDates(today.getFullYear(), today.getMonth() + 1)
    : getCalendarWeekDates(today);

  return (
    <S.CalendarCard>
      <S.CalendarContentWrapper>
        <S.Title>내 물방울 기록</S.Title>
        <S.CalendarWrapper>
          <S.MonthSelector>
            <p>
              {today.getFullYear()}년 {today.getMonth() + 1}월
            </p>

            {isMonthly ? (
              <S.BreadcrumbChevron onClick={() => setIsMonthly((prev) => !prev)}>
                <ChevronUp />
              </S.BreadcrumbChevron>
            ) : (
              <S.BreadcrumbChevron onClick={() => setIsMonthly((prev) => !prev)}>
                <ChevronDown />
              </S.BreadcrumbChevron>
            )}
          </S.MonthSelector>
          <S.Grid>
            {WEEK_DAYS.map((day) => (
              <S.WeekDay key={day}>{day}</S.WeekDay>
            ))}
            {dates.map((date) => {
              const streakSet = new Set(streakDateList);
              const formatted = formatDateToYYYYMMDD(date);
              const isAnswered = streakSet.has(formatted);
              return (
                <S.DateCell
                  key={date.toISOString()}
                  isAnswered={isAnswered}
                >
                  {isAnswered ? (
                    <Image
                      src={DEFAULT_WATERDROP}
                      alt='waterdrop'
                      width={13}
                      height={16}
                    />
                  ) : (
                    date.getDate()
                  )}
                </S.DateCell>
              );
            })}
          </S.Grid>
        </S.CalendarWrapper>
        <SolidButton
          label='리포트 보러가기'
          size='fillContainer'
          interactionVariant='normal'
          onClick={() => {
            // TODO: 리포트 페이지로 이동
          }}
        />
      </S.CalendarContentWrapper>
    </S.CalendarCard>
  );
}
