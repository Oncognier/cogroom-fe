import { http, HttpResponse } from 'msw';

import { END_POINTS_V1, HTTP_STATUS_CODE } from '@/constants/api';

import { getMemberListSuccess } from '../data/admin/getMemberListData';

export const adminHandlers = [
  http.get(END_POINTS_V1.ADMIN.MEMBERS.LIST, async () => {
    return new HttpResponse(JSON.stringify(getMemberListSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),
];
