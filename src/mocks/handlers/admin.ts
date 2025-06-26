import { http, HttpResponse } from 'msw';

import { END_POINTS_V1, HTTP_STATUS_CODE } from '@/constants/api';
import { CreateDailyQuestionsRequest, DeleteMemberRequest } from '@/types/admin';

import { deleteMemberError, deleteMemberSuccess } from '../data/admin/deleteMemberData';
import { getMemberListSuccess } from '../data/admin/getMemberListData';
import { createDailyQuestionsError, createDailyQuestionsSuccess } from '../data/admin/createDailyQuestionsData';

export const adminHandlers = [
  http.get(END_POINTS_V1.ADMIN.MEMBERS.LIST, async () => {
    return new HttpResponse(JSON.stringify(getMemberListSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  http.delete(END_POINTS_V1.ADMIN.MEMBERS.DELETE, async ({ request }) => {
    const body = (await request.json()) as DeleteMemberRequest;

    if (!body.memberIdList) {
      return new HttpResponse(JSON.stringify(deleteMemberError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(deleteMemberSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  http.post(END_POINTS_V1.ADMIN.DAILY.QUESTIONS_CREATE, async ({ request }) => {
    const body = (await request.json()) as CreateDailyQuestionsRequest;

    if (!body.level || !body.categoryList) {
      return new HttpResponse(JSON.stringify(createDailyQuestionsError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(createDailyQuestionsSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),
];
