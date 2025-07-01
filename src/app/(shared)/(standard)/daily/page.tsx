'use client';

import Upload from '@/assets/icons/upload.svg';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Loading from '@/components/organisms/Loading/Loading';
import { DEFAULT_DAILY_QUESTION } from '@/constants/common';
import useGetDailyQuery from '@/hooks/api/daily/useGetDaily';
import useGetDailyHasAnsweredQuery from '@/hooks/api/daily/useGetDailyHasAnswered';
import useGetStreakCalendarQuery from '@/hooks/api/streak/useGetStreakCalendar';
import useGetStreakDaysQuery from '@/hooks/api/streak/useGetStreakDays';
import { useAppModalStore } from '@/stores/useModalStore';

import Calendar from './_components/Calendar/Calendar';
import Question from './_components/Question/Question';
import Streak from './_components/Streak/Streak';
import * as S from './page.styled';

export default function Daily() {
  const { open } = useAppModalStore();
  const { data: dailyData, isLoading: isDailyLoading } = useGetDailyQuery();
  const { data: streakCalendarData, isLoading: isCalendarLoading } = useGetStreakCalendarQuery();
  const { data: streakDaysData, isLoading: isDaysLoading } = useGetStreakDaysQuery();
  const { data: hasAnsweredData, isLoading: isAnsweredLoading } = useGetDailyHasAnsweredQuery();

  const isLoading = isDailyLoading || isCalendarLoading || isDaysLoading || isAnsweredLoading;

  if (isLoading) return <Loading />;

  return (
    <S.DailyContainer>
      <Streak dailyStreak={streakDaysData?.result.dailyStreak ?? 0} />
      <Question
        assignedQuestionId={dailyData?.result.assignedQuestionId ?? 0}
        question={dailyData?.result.question ?? DEFAULT_DAILY_QUESTION}
        answer={dailyData?.result.answer ?? ''}
        hasAnswered={hasAnsweredData?.result.hasAnswered ?? false}
      />
      <Calendar
        streakDateList={streakCalendarData?.result.streakDateList ?? []}
        hasAnswered={hasAnsweredData?.result.hasAnswered ?? false}
      />
      <S.ButtonWrapper>
        <OutlinedButton
          label='공유하기'
          size='sm'
          color='secondary'
          iconRight={<Upload />}
          interactionVariant='normal'
          onClick={() => open('dailyShare', { dailyStreak: streakDaysData?.result.dailyStreak ?? 0 })}
        />
      </S.ButtonWrapper>
    </S.DailyContainer>
  );
}
