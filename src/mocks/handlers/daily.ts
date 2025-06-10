import { http, HttpResponse } from 'msw';

import { END_POINTS_V1, HTTP_STATUS_CODE } from '@/constants/api';
import { DailyAnswerRequest } from '@/types/daily';

import {
  dailyDataAnswered,
  dailyDataNotAnswered,
  patchDailyAnswerData,
  patchDailyAnswerEmptyFieldError,
  patchDailyAnswerLengthExceededError,
  postDailyAnswerData,
  postDailyAnswerEmptyFieldError,
  postDailyAnswerLengthExceededError,
  streakCalendarData,
} from '../data/daily/dailyData';

export const dailyHandlers = [
  // 질문 및 스트릭 정보 조회
  http.get(END_POINTS_V1.DAILY.QUESTIONS, async () => {
    // 답변 후
    return new HttpResponse(JSON.stringify(dailyDataAnswered), {
      status: HTTP_STATUS_CODE.OK,
    });

    // 답변 전
    // return new HttpResponse(JSON.stringify(dailyDataNotAnswered), {
    //   status: HTTP_STATUS_CODE.OK,
    // });
  }),

  // 답변 제출
  http.post(END_POINTS_V1.DAILY.ANSWERS, async ({ request }) => {
    const body = (await request.json()) as DailyAnswerRequest;

    if (!body.answer || body.answer.length === 0) {
      return new HttpResponse(JSON.stringify(postDailyAnswerEmptyFieldError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    if (body.answer.length > 100) {
      return new HttpResponse(JSON.stringify(postDailyAnswerLengthExceededError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(postDailyAnswerData), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 답변 수정
  http.patch(END_POINTS_V1.DAILY.ANSWERS, async ({ request }) => {
    const body = (await request.json()) as DailyAnswerRequest;

    if (!body.answer || body.answer.length === 0) {
      return new HttpResponse(JSON.stringify(patchDailyAnswerEmptyFieldError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    if (body.answer.length > 100) {
      return new HttpResponse(JSON.stringify(patchDailyAnswerLengthExceededError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(patchDailyAnswerData), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 스트릭 캘린더 조회
  http.get(END_POINTS_V1.STREAKS.CALENDAR, async () => {
    return new HttpResponse(JSON.stringify(streakCalendarData), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),
];
