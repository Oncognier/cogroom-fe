import { http, HttpResponse } from 'msw';

import { END_POINTS_V1, HTTP_STATUS_CODE } from '@/constants/api';

import { getUserSummarySuccess } from '../data/member/getUserSummaryData';

export const memberHandlers = [
  http.get(END_POINTS_V1.MEMBERS.SUMMARY, async () => {
    return new HttpResponse(JSON.stringify(getUserSummarySuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),
];
