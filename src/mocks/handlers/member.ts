import { http, HttpResponse } from 'msw';

import { END_POINTS_V1, HTTP_STATUS_CODE } from '@/constants/api';
import { CheckNicknameRequest, EditUserInfoRequest } from '@/types/member';

import { checkNicknameError, checkNicknameSuccess } from '../data/member/checkNicknameData';
import { editUserInfoError, editUserInfoSuccess } from '../data/member/editUserInfoData';
import { getUserCommentListSuccess } from '../data/member/getUserCommentListData';
import { getUserDailySuccess } from '../data/member/getUserDailyData';
import { getUserDashboardSuccess } from '../data/member/getUserDashboardData';
import { getUserInfoSuccess } from '../data/member/getUserInfoData';
import { getUserPostListSuccess } from '../data/member/getUserPostListData';
import { getUserSummarySuccess } from '../data/member/getUserSummaryData';
import { withdrawSuccess } from '../data/member/withdrawData';

export const memberHandlers = [
  http.get(END_POINTS_V1.MEMBERS.SUMMARY, async () => {
    return new HttpResponse(JSON.stringify(getUserSummarySuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  http.get(END_POINTS_V1.MEMBERS.DASHBOARD, async () => {
    return new HttpResponse(JSON.stringify(getUserDashboardSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  http.get(END_POINTS_V1.MEMBERS.INFO, async () => {
    return new HttpResponse(JSON.stringify(getUserInfoSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  http.get(END_POINTS_V1.MEMBERS.DAILY, async () => {
    return new HttpResponse(JSON.stringify(getUserDailySuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  http.get(END_POINTS_V1.MEMBERS.POSTS, async () => {
    return new HttpResponse(JSON.stringify(getUserPostListSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  http.get(END_POINTS_V1.MEMBERS.COMMENTS, async () => {
    return new HttpResponse(JSON.stringify(getUserCommentListSuccess), {
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

  http.post(END_POINTS_V1.MEMBERS.CHECK_NICKNAME, async ({ request }) => {
    const body = (await request.json()) as CheckNicknameRequest;

    if (!body.nickname) {
      return new HttpResponse(JSON.stringify(checkNicknameError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(checkNicknameSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  http.delete(END_POINTS_V1.MEMBERS.WITHDRAW, async () => {
    return new HttpResponse(JSON.stringify(withdrawSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),
];
