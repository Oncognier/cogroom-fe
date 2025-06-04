import { http, HttpResponse } from 'msw';

import { END_POINTS_V1, HTTP_STATUS_CODE } from '@/constants/api';
import { PostLogInRequestBody } from '@/types/auth';

import {
  accessToken,
  postLogInMockErrorResponse,
  postLogInMockResponse,
  refreshToken,
} from '../data/auth/PostLogInMockResponse';

export const authHandlers = [
  http.post(`${END_POINTS_V1.AUTH.LOGIN}`, async ({ request }) => {
    const body = (await request.json()) as PostLogInRequestBody;

    if (!body.code || !body.provider) {
      return new HttpResponse(JSON.stringify(postLogInMockErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(postLogInMockResponse), {
      status: HTTP_STATUS_CODE.OK,
      headers: new Headers([
        ['Set-Cookie', `accessToken=${accessToken}; Path=/`],
        ['Set-Cookie', `refreshToken=${refreshToken}; HttpOnly; Path=/`],
        ['Content-Type', 'application/json'],
      ]),
    });
  }),
];
