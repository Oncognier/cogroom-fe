'use client';

import Calendar from '@/app/daily/_components/calendar/Calendar';
import Question from '@/app/daily/_components/question/Question';
import Streak from '@/app/daily/_components/streak/Streak';
import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import useGetDailyQuery from '@/hooks/api/daily/useGetDaily';
import useGetStreakDaysQuery from '@/hooks/api/streak/useGetStreakDays';

import * as S from './styled';

export default function Daily() {
  const { data: dailyData, isLoading } = useGetDailyQuery();
  const { data: calendarData } = useGetStreakDaysQuery();

  return (
    <S.DailyPageWrapper>
      <Breadcrumb
        items={[
          { name: '홈', href: '/' },
          { name: '데일리', href: '/daily' },
        ]}
      />
      <S.DailyContentWrapper>
        {!isLoading && (
          <>
            <Streak streaksDays={dailyData?.result.streakDays ?? 0} />
            <Question
              question={dailyData?.result.question ?? ''}
              answer={dailyData?.result.answer ?? ''}
            />
            <Calendar streakDateList={calendarData?.result.streakDateList ?? []} />
          </>
        )}
      </S.DailyContentWrapper>
    </S.DailyPageWrapper>
  );
}
