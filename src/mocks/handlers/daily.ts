import { http, HttpResponse } from 'msw';

import { END_POINTS_V1, HTTP_STATUS_CODE } from '@/constants/api';
import { DailyAnswerRequest } from '@/types/daily';

import {
  editDailyAnswerSuccess,
  editDailyAnswerError_EmptyField,
  editDailyAnswerError_LengthExceeded,
} from '../data/daily/editDailyAnswer';
import { getDailySuccess_NotAnswered, getDailySuccess_Answered } from '../data/daily/getDailyData';
import { getDailyHasAnswered_NotAnswered, getDailyHasAnswered_Answered } from '../data/daily/getDailyHasAnswered';
import {
  submitDailyAnswerSuccess,
  submitDailyAnswerError_EmptyField,
  submitDailyAnswerError_LengthExceeded,
} from '../data/daily/submitDailyAnswer';

export const dailyHandlers = [
  // 질문 및 스트릭 정보 조회
  http.get(END_POINTS_V1.DAILY.QUESTIONS, async () => {
    // 답변 후 dailyDataAnswered, 답변 전 dailyDataNotAnswered
    return new HttpResponse(JSON.stringify(getDailySuccess_NotAnswered), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 첫 답변 여부 조회 (답변 전)
  http.get(END_POINTS_V1.DAILY.HAS_ANSWERED, async () => {
    return new HttpResponse(JSON.stringify(getDailyHasAnswered_NotAnswered), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 답변 제출
  http.post(END_POINTS_V1.DAILY.ANSWERS, async ({ request }) => {
    const body = (await request.json()) as DailyAnswerRequest;

    if (!body.answer) {
      return new HttpResponse(JSON.stringify(submitDailyAnswerError_EmptyField), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    if (body.answer.length > 100) {
      return new HttpResponse(JSON.stringify(submitDailyAnswerError_LengthExceeded), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(submitDailyAnswerSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 답변 수정
  http.patch(END_POINTS_V1.DAILY.ANSWERS, async ({ request }) => {
    const body = (await request.json()) as DailyAnswerRequest;

    if (!body.answer) {
      return new HttpResponse(JSON.stringify(editDailyAnswerError_EmptyField), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    if (body.answer.length > 100) {
      return new HttpResponse(JSON.stringify(editDailyAnswerError_LengthExceeded), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(editDailyAnswerSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),
];
