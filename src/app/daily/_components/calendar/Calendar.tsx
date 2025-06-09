'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useMemo } from 'react';

import { WEEK_DAYS } from '@/app/daily/_constants/weekDays';
import { getCalendarMonthDates, getCalendarWeekDates } from '@/app/daily/_utils/getCalendar';
import ChevronDown from '@/assets/icons/chevrondown.svg';
import ChevronUp from '@/assets/icons/chevronup.svg';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { DEFAULT_WATERDROP } from '@/constants/image';
import { formatDateToYYYYMMDD } from '@/utils/formatDay';

import * as S from './Calendar.styled';

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
            {dates.map((date) => {
              const streakSet = new Set(streakDateList);
              const formatted = formatDateToYYYYMMDD(date.toDate());
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
                    date.date()
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
            router.push('/mypage/history');
          }}
        />
      </S.CalendarContentWrapper>
    </S.CalendarCard>
  );
}
