import { http, HttpResponse } from 'msw';

import { END_POINTS_V1, HTTP_STATUS_CODE } from '@/constants/api';
import { EditUserInfoRequest } from '@/types/member';

import { editUserInfoError, editUserInfoSuccess } from '../data/member/editUserInfoData';
import { getUserInfoSuccess } from '../data/member/getUserInfoData';
import { getUserSummarySuccess } from '../data/member/getUserSummaryData';

export const memberHandlers = [
  http.get(END_POINTS_V1.MEMBERS.SUMMARY, async () => {
    return new HttpResponse(JSON.stringify(getUserSummarySuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  http.get(END_POINTS_V1.MEMBERS.INFO, async () => {
    return new HttpResponse(JSON.stringify(getUserInfoSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  http.patch(END_POINTS_V1.MEMBERS.INFO_EDIT, async ({ request }) => {
    const body = (await request.json()) as EditUserInfoRequest;

    if (!body.email || !body.nickname) {
      return new HttpResponse(JSON.stringify(editUserInfoError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(editUserInfoSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),
];
