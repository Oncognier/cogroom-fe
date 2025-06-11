'use client';

import Calendar from '@/app/daily/_components/Calendar/Calendar';
import Question from '@/app/daily/_components/Question/Question';
import Streak from '@/app/daily/_components/Streak/Streak';
import Breadcrumb from '@/components/molecules/Breadcrumb/Breadcrumb';
import useGetDailyQuery from '@/hooks/api/daily/useGetDaily';
import useGetStreakDaysQuery from '@/hooks/api/streak/useGetStreakDays';

import * as S from './styled';

export default function Daily() {
  const { data: dailyData, isLoading } = useGetDailyQuery();
  const { data: streakData } = useGetStreakDaysQuery();

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
              assignedQuestionId={dailyData?.result.assignedQuestionId ?? 0}
              question={dailyData?.result.question ?? ''}
              answer={dailyData?.result.answer ?? ''}
            />
            <Calendar streakDateList={streakData?.result.streakDateList ?? []} />
          </>
        )}
      </S.DailyContentWrapper>
    </S.DailyPageWrapper>
  );
}
