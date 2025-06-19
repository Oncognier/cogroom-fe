'use client';

import useGetDailyQuery from '@/hooks/api/daily/useGetDaily';
import useGetStreakDaysQuery from '@/hooks/api/streak/useGetStreakDays';

import Calendar from './_components/Calendar/Calendar';
import Question from './_components/Question/Question';
import Streak from './_components/Streak/Streak';
import * as S from './page.styled';

export default function Daily() {
  const { data: dailyData, isLoading } = useGetDailyQuery();
  const { data: streakData } = useGetStreakDaysQuery();

  return (
    <S.DailyContainer>
      {!isLoading && (
        <>
          <Streak streaksDays={streakData?.result.dailyStreak ?? 0} />
          <Question
            assignedQuestionId={dailyData?.result.assignedQuestionId ?? 0}
            question={dailyData?.result.question ?? ''}
            answer={dailyData?.result.answer ?? ''}
          />
          <Calendar streakDateList={streakData?.result.streakDateList ?? []} />
        </>
      )}
    </S.DailyContainer>
  );
}
