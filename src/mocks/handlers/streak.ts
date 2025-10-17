import { http, HttpResponse } from 'msw';

import { END_POINTS_V1, HTTP_STATUS_CODE } from '@/constants/api';

import { getStreakCalendarSuccess } from '../data/streak/getStreakCalendarData';
import { getStreakDaysSuccess } from '../data/streak/getStreakDaysData';

export const streakHandlers = [
  // 스트릭 캘린더 기록 조회
  http.get(END_POINTS_V1.STREAKS.CALENDAR, async () => {
    return new HttpResponse(JSON.stringify(getStreakCalendarSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 스트릭 연속 일수 조회
  http.get(END_POINTS_V1.STREAKS.DAILY_STREAK, async () => {
    return new HttpResponse(JSON.stringify(getStreakDaysSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),
];
