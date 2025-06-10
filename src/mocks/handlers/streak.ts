import { http, HttpResponse } from 'msw';

import { END_POINTS_V1, HTTP_STATUS_CODE } from '@/constants/api';

import { streakDaysData } from '../data/streak/getStreakDaysData';

export const streakHandlers = [
  http.get(END_POINTS_V1.STREAKS.CALENDAR, async () => {
    return new HttpResponse(JSON.stringify(streakDaysData), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),
];
