import { QueryClient } from '@tanstack/react-query';

import { prefetchDailyHasAnswered } from './daily/prefetchDailyHasAnswered';
import { prefetchDailyQuestions } from './daily/prefetchDailyQuestions';
import { prefetchStreakCalendar } from './streak/prefetchStreakCalendar';
import { prefetchStreakDays } from './streak/prefetchStreakDays';

export const prefetchDaily = async (queryClient: QueryClient) => {
  await Promise.all([
    prefetchDailyQuestions(queryClient),
    prefetchDailyHasAnswered(queryClient),
    prefetchStreakCalendar(queryClient),
    prefetchStreakDays(queryClient),
  ]);
};
