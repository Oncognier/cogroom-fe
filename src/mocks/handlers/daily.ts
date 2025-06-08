import { http, HttpResponse } from 'msw';

import { END_POINTS_V1, HTTP_STATUS_CODE } from '@/constants/api';

import {
  dailyDataAnswered,
  dailyDataNotAnswered,
  dailyDataNotFoundError,
  dailyDataMemberNotFoundError,
  dailyDataServerError,
  patchDailyAnswerData,
  patchDailyAnswerError,
  patchDailyAnswerEmptyFieldError,
  patchDailyAnswerMemberNotFoundError,
  patchDailyAnswerServerError,
  postDailyAnswerData,
  postDailyAnswerError,
  postDailyAnswerEmptyFieldError,
  postDailyAnswerMemberNotFoundError,
  postDailyAnswerServerError,
  streakCalendarData,
  streakCalendarMemberNotFoundError,
  streakCalendarServerError,
} from '../data/daily/dailyData';

export const dailyHandlers = [
  // 질문 및 스트릭 정보 조회 (답변 전 dailyDataNotAnswered, 답변 후 dailyDataAnswered)
  http.get(END_POINTS_V1.DAILY.QUESTIONS, async () => {
    if (dailyDataNotAnswered.code === 'DAILY_QUESTION_NOT_FOUND') {
      return new HttpResponse(JSON.stringify(dailyDataNotFoundError), {
        status: HTTP_STATUS_CODE.NOT_FOUND,
      });
    }

    if (dailyDataNotAnswered.code === 'MEMBER_NOT_FOUND') {
      return new HttpResponse(JSON.stringify(dailyDataMemberNotFoundError), {
        status: HTTP_STATUS_CODE.NOT_FOUND,
      });
    }

    if (dailyDataNotAnswered.code === 'INTERNAL_SERVER_ERROR') {
      return new HttpResponse(JSON.stringify(dailyDataServerError), {
        status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
      });
    }

    return new HttpResponse(JSON.stringify(dailyDataNotAnswered), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 답변 제출
  http.post(END_POINTS_V1.DAILY.ANSWERS, async () => {
    if (postDailyAnswerData.code === 'ALREADY_ANSWERED') {
      return new HttpResponse(JSON.stringify(postDailyAnswerError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    if (postDailyAnswerData.code === 'EMTPY_FILED') {
      return new HttpResponse(JSON.stringify(postDailyAnswerEmptyFieldError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    if (postDailyAnswerData.code === 'MEMBER_NOT_FOUND') {
      return new HttpResponse(JSON.stringify(postDailyAnswerMemberNotFoundError), {
        status: HTTP_STATUS_CODE.NOT_FOUND,
      });
    }

    if (postDailyAnswerData.code === 'INTERNAL_SERVER_ERROR') {
      return new HttpResponse(JSON.stringify(postDailyAnswerServerError), {
        status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
      });
    }

    return new HttpResponse(JSON.stringify(postDailyAnswerData), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 답변 수정
  http.patch(END_POINTS_V1.DAILY.ANSWERS, async () => {
    if (patchDailyAnswerData.code === 'ANSWER_NOT_FOUND') {
      return new HttpResponse(JSON.stringify(patchDailyAnswerError), {
        status: HTTP_STATUS_CODE.NOT_FOUND,
      });
    }

    if (patchDailyAnswerData.code === 'EMTPY_FILED') {
      return new HttpResponse(JSON.stringify(patchDailyAnswerEmptyFieldError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    if (patchDailyAnswerData.code === 'MEMBER_NOT_FOUND') {
      return new HttpResponse(JSON.stringify(patchDailyAnswerMemberNotFoundError), {
        status: HTTP_STATUS_CODE.NOT_FOUND,
      });
    }

    if (patchDailyAnswerData.code === 'INTERNAL_SERVER_ERROR') {
      return new HttpResponse(JSON.stringify(patchDailyAnswerServerError), {
        status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
      });
    }

    return new HttpResponse(JSON.stringify(patchDailyAnswerData), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 스트릭 캘린더 조회
  http.get(END_POINTS_V1.STREAKS.CALENDAR, async () => {
    if (streakCalendarData.code === 'MEMBER_NOT_FOUND') {
      return new HttpResponse(JSON.stringify(streakCalendarMemberNotFoundError), {
        status: HTTP_STATUS_CODE.NOT_FOUND,
      });
    }

    if (streakCalendarData.code === 'INTERNAL_SERVER_ERROR') {
      return new HttpResponse(JSON.stringify(streakCalendarServerError), {
        status: HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
      });
    }

    return new HttpResponse(JSON.stringify(streakCalendarData), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),
];
