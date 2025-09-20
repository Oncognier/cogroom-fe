'use client';

import Upload from '@/assets/icons/upload.svg';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import Loading from '@/components/organisms/Loading/Loading';
import { DAILY_FEEDBACK_FORM_URL, DEFAULT_DAILY_QUESTION } from '@/constants/common';
import { DEFAULT_DAILY_BANNER } from '@/constants/image';
import useGetDailyHasAnsweredQuery from '@/hooks/api/daily/useGetDailyHasAnswered';
import useGetDailyQuestionsQuery from '@/hooks/api/daily/useGetDailyQuestions';
import useGetStreakCalendarQuery from '@/hooks/api/streak/useGetStreakCalendar';
import useGetStreakDaysQuery from '@/hooks/api/streak/useGetStreakDays';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAppModalStore } from '@/stores/useModalStore';

import Calendar from './_components/Calendar/Calendar';
import Question from './_components/Question/Question';
import Streak from './_components/Streak/Streak';
import * as S from './page.styled';

export default function Daily() {
  const { open } = useAppModalStore();
  const status = useAuthStore((s) => s.status);

  const { data: dailyData, isLoading: isDailyLoading } = useGetDailyQuestionsQuery();
  const { data: streakCalendarData, isLoading: isCalendarLoading } = useGetStreakCalendarQuery();
  const { data: streakDaysData, isLoading: isDaysLoading } = useGetStreakDaysQuery();
  const { data: hasAnsweredData, isLoading: isAnsweredLoading } = useGetDailyHasAnsweredQuery();

  const isLoading = isDailyLoading || isCalendarLoading || isDaysLoading || isAnsweredLoading;

  if (isLoading) return <Loading />;

  const handleShare = () => {
    if (status === 'unauthenticated') {
      open('login');
      return;
    }
    open('dailyShare', { dailyStreak: streakDaysData?.result.dailyStreak ?? 0 });
  };

  return (
    <>
      <S.DailyContainer>
        <Streak dailyStreak={streakDaysData?.result.dailyStreak ?? 0} />
        <Question
          assignedQuestionId={dailyData?.assignedQuestionId ?? 0}
          question={dailyData?.question ?? DEFAULT_DAILY_QUESTION}
          answer={dailyData?.answer ?? ''}
          hasAnswered={hasAnsweredData?.hasAnswered ?? false}
        />
        <Calendar
          streakDateList={streakCalendarData?.result.streakDateList ?? []}
          hasAnswered={hasAnsweredData?.hasAnswered ?? false}
        />
      </S.DailyContainer>
      <OutlinedButton
        label='공유하기'
        size='sm'
        color='secondary'
        iconRight={<Upload />}
        interactionVariant='normal'
        onClick={handleShare}
      />

      <S.BannerWrapper>
        <a
          href={DAILY_FEEDBACK_FORM_URL}
          target='_blank'
          rel='noopener noreferrer'
        >
          <S.BannerImage
            src={DEFAULT_DAILY_BANNER}
            alt='코그룸 피드백 참여하기 배너'
            width={798}
            height={244}
            priority
          />
        </a>
      </S.BannerWrapper>
    </>
  );
}
