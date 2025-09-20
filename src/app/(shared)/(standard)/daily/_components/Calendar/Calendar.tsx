'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState, useMemo } from 'react';

import ArrowRight from '@/assets/icons/arrowright.svg';
import ChevronDown from '@/assets/icons/chevrondown.svg';
import ChevronUp from '@/assets/icons/chevronup.svg';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { WEEK_DAYS } from '@/constants/common';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAppModalStore } from '@/stores/useModalStore';
import { getCalendarMonthDateStrings, getCalendarWeekDateStrings } from '@/utils/date/getCalendar';

import * as S from './Calendar.styled';
import DateCell from './DateCell/DataCell';
import FirstAnswerButton from './FirstAnswerButton/FirstAnswerButton';

interface CalendarProps {
  streakDateList: string[];
  hasAnswered: boolean;
}

export default function Calendar({ streakDateList, hasAnswered }: CalendarProps) {
  const router = useRouter();
  const { open } = useAppModalStore();
  const status = useAuthStore((s) => s.status);

  const today = new Date();
  const [isMonthly, setIsMonthly] = useState(false);
  const monthDates = useMemo(() => getCalendarMonthDateStrings(), []);
  const weekDates = useMemo(() => getCalendarWeekDateStrings(), []);
  const dates = isMonthly ? monthDates : weekDates;

  const [isFirstAnswer, setIsFirstAnswer] = useState(false);
  const prevHasAnsweredRef = useRef<boolean>(hasAnswered);

  const handleGoToReport = () => {
    if (status === 'unauthenticated') {
      open('login');
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
            {today.getFullYear()}년 {today.getMonth() + 1}월
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
                key={date}
                dateData={date}
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
            onClick={handleGoToReport}
            fillContainer
            iconRight={<ArrowRight />}
          />
        )}
      </S.CalendarContentWrapper>
    </S.CalendarCard>
  );
}
