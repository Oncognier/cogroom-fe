'use client';

import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useState, useMemo } from 'react';

import ChevronDown from '@/assets/icons/chevrondown.svg';
import ChevronUp from '@/assets/icons/chevronup.svg';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { WEEK_DAYS } from '@/constants/common';
import { getCalendarMonthDates, getCalendarWeekDates } from '@/utils/getCalendar';

import * as S from './Calendar.styled';
import DateCell from './DateCell/DataCell';

interface CalendarProps {
  streakDateList: string[];
}

export default function Calendar({ streakDateList }: CalendarProps) {
  const router = useRouter();
  const [isMonthly, setIsMonthly] = useState(false);
  const today = dayjs();

  const monthDates = useMemo(() => getCalendarMonthDates(today.year(), today.month() + 1), [today]);
  const weekDates = useMemo(() => getCalendarWeekDates(today), [today]);
  const dates = isMonthly ? monthDates : weekDates;

  return (
    <S.CalendarCard>
      <S.CalendarContentWrapper>
        <S.Title>내 물방울 기록</S.Title>
        <S.CalendarWrapper>
          <S.MonthSelector>
            {today.year()}년 {today.month() + 1}월
            <S.BreadcrumbChevron onClick={() => setIsMonthly((prev) => !prev)}>
              {isMonthly ? <ChevronUp /> : <ChevronDown />}
            </S.BreadcrumbChevron>
          </S.MonthSelector>
          <S.Grid>
            {WEEK_DAYS.map((day) => (
              <S.WeekDay key={day}>{day}</S.WeekDay>
            ))}
            {dates.map((date) => (
              <DateCell
                key={date.toISOString()}
                date={date}
                streakDateList={streakDateList}
              />
            ))}
          </S.Grid>
        </S.CalendarWrapper>
        <SolidButton
          label='리포트 보러가기'
          size='fillContainer'
          interactionVariant='normal'
          onClick={() => {
            router.push('/mypage/activity');
          }}
        />
      </S.CalendarContentWrapper>
    </S.CalendarCard>
  );
}
