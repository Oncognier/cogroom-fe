'use client';

import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState, useMemo } from 'react';

import ArrowRight from '@/assets/icons/arrowright.svg';
import ChevronDown from '@/assets/icons/chevrondown.svg';
import ChevronUp from '@/assets/icons/chevronup.svg';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { WEEK_DAYS } from '@/constants/common';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAppModalStore } from '@/stores/useModalStore';
import { getCalendarMonthDates, getCalendarWeekDates } from '@/utils/getCalendar';

import * as S from './Calendar.styled';
import DateCell from './DateCell/DataCell';
import FirstAnswerButton from './FirstAnswerButton/FirstAnswerButton';

interface CalendarProps {
  streakDateList: string[];
  hasAnswered: boolean;
}

export default function Calendar({ streakDateList, hasAnswered }: CalendarProps) {
  const { isLoggedIn } = useAuthStore();
  const router = useRouter();
  const { open } = useAppModalStore();
  const today = dayjs();

  const [isMonthly, setIsMonthly] = useState(false);
  const monthDates = useMemo(() => getCalendarMonthDates(today), [today]);
  const weekDates = useMemo(() => getCalendarWeekDates(today), [today]);
  const dates = isMonthly ? monthDates : weekDates;

  const [isFirstAnswer, setIsFirstAnswer] = useState(false);
  const prevHasAnsweredRef = useRef<boolean>(hasAnswered);

  const handleGoToReport = () => {
    if (!isLoggedIn) {
      router.push('/login');
      return;
    }
    router.push('/mypage/activity');
  };

  useEffect(() => {
    if (!prevHasAnsweredRef.current && hasAnswered) {
      setIsFirstAnswer(true);
    }
    prevHasAnsweredRef.current = hasAnswered;
  }, [hasAnswered]);

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
        {isFirstAnswer ? (
          <FirstAnswerButton onClick={handleGoToReport} />
        ) : (
          <SolidButton
            label='리포트 보러가기'
            size='md'
            interactionVariant='normal'
            onClick={isLoggedIn ? handleGoToReport : () => open('login')}
            fillContainer
            iconRight={<ArrowRight />}
          />
        )}
      </S.CalendarContentWrapper>
    </S.CalendarCard>
  );
}
