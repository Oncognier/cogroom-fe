'use client';

import { useState, useEffect } from 'react';

import { getDaily, getStreakCalendar } from '@/api/dailyApis';
import Calendar from '@/app/daily/_components/calendar/Calendar';
import Question from '@/app/daily/_components/question/Question';
import Streak from '@/app/daily/_components/streak/Streak';
import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import { DailyQuestionResponse, StreakCalendarResponse } from '@/types/daily';

import * as S from './styled';

export default function Daily() {
  const [dailyData, setDailyData] = useState<DailyQuestionResponse | null>(null);
  const [calendarData, setCalendarData] = useState<StreakCalendarResponse | null>(null);

  const getDailyData = async () => {
    const data = await getDaily();
    setDailyData(data);
  };

  const getCalendarData = async () => {
    const data = await getStreakCalendar();
    setCalendarData(data);
  };

  useEffect(() => {
    getDailyData();
    getCalendarData();
  }, []);

  return (
    <S.DailyPageWrapper>
      <Breadcrumb
        items={[
          { name: '홈', href: '/' },
          { name: '데일리', href: '/daily' },
        ]}
      />
      <S.DailyContentWrapper>
        <Streak streaksDays={dailyData?.result.streakDays ?? 0} />
        <Question
          question={dailyData?.result.question ?? ''}
          answer={dailyData?.result.answer ?? ''}
        />
        <Calendar streakDateList={calendarData?.result.streakDateList ?? []} />
      </S.DailyContentWrapper>
    </S.DailyPageWrapper>
  );
}
