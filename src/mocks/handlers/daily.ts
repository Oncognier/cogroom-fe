import { http, HttpResponse } from 'msw';

import { END_POINTS_V1, HTTP_STATUS_CODE } from '@/constants/api';
import { DailyAnswerRequest } from '@/types/daily';

import {
  editDailyAnswerData,
  editDailyAnswerEmptyFieldError,
  editDailyAnswerLengthExceededError,
} from '../data/daily/editDailyAnswer';
import { dailyDataAnswered, dailyDataNotAnswered } from '../data/daily/getDailyData';
import {
  submitDailyAnswerData,
  submitDailyAnswerEmptyFieldError,
  submitDailyAnswerLengthExceededError,
} from '../data/daily/submitDailyAnswer';

export const dailyHandlers = [
  // 질문 및 스트릭 정보 조회
  http.get(END_POINTS_V1.DAILY.QUESTIONS, async () => {
    // 답변 후 dailyDataAnswered, 답변 전 dailyDataNotAnswered
    return new HttpResponse(JSON.stringify(dailyDataNotAnswered), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 답변 제출
  http.post(END_POINTS_V1.DAILY.ANSWERS, async ({ request }) => {
    const body = (await request.json()) as DailyAnswerRequest;

    if (!body.answer || body.answer.length === 0) {
      return new HttpResponse(JSON.stringify(submitDailyAnswerEmptyFieldError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    if (body.answer.length > 100) {
      return new HttpResponse(JSON.stringify(submitDailyAnswerLengthExceededError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(submitDailyAnswerData), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 답변 수정
  http.patch(END_POINTS_V1.DAILY.ANSWERS, async ({ request }) => {
    const body = (await request.json()) as DailyAnswerRequest;

    if (!body.answer || body.answer.length === 0) {
      return new HttpResponse(JSON.stringify(editDailyAnswerEmptyFieldError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    if (body.answer.length > 100) {
      return new HttpResponse(JSON.stringify(editDailyAnswerLengthExceededError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(editDailyAnswerData), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),
];
