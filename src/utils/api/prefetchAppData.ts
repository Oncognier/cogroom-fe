import { QueryClient } from '@tanstack/react-query';

import { prefetchDailyHasAnswered } from './daily/prefetchDailyHasAnswered';
import { prefetchDailyQuestions } from './daily/prefetchDailyQuestions';
import { prefetchUserSummary } from './member/prefetchUserSummary';
import { prefetchStreakCalendar } from './streak/prefetchStreakCalendar';
import { prefetchStreakDays } from './streak/prefetchStreakDays';

export const prefetchAppData = async (queryClient: QueryClient) => {
  await Promise.all([
    prefetchDailyHasAnswered(queryClient),
    prefetchDailyQuestions(queryClient),
    prefetchStreakCalendar(queryClient),
    prefetchStreakDays(queryClient),
    prefetchUserSummary(queryClient),
  ]);
};
