import { http, HttpResponse } from 'msw';

import { END_POINTS_V1, HTTP_STATUS_CODE } from '@/constants/api';
import { PostEmailVerificationStatusBody, PostLoginRequestBody, PostSendEmailBody, PostSignupBody } from '@/types/auth';

import {
  accessToken,
  postLoginMockErrorResponse,
  postLoginMockResponse_NewUser,
  refreshToken,
} from '../data/auth/postLoginMockResponse';
import { postSendEmailMockErrorResponse, postSendEmailMockResponse } from '../data/auth/postSendEmailMockResponse';
import {
  postCheckEmailVerificationStatusMockErrorResponse,
  postCheckEmailVerificationStatusMockResponse,
} from '../data/auth/postCheckEmailVerificationStatusMockResponse';
import { postSignupMockErrorResponse, postSignupMockResponse } from '../data/auth/postSignupMockResponse';

export const authHandlers = [
  http.post(`${END_POINTS_V1.AUTH.LOGIN}`, async ({ request }) => {
    const body = (await request.json()) as PostLoginRequestBody;

    if (!body.code || !body.provider) {
      return new HttpResponse(JSON.stringify(postLoginMockErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(postLoginMockResponse_NewUser), {
      status: HTTP_STATUS_CODE.OK,
      headers: new Headers([
        ['Set-Cookie', `accessToken=${accessToken}; Path=/`],
        ['Set-Cookie', `refreshToken=${refreshToken}; HttpOnly; Path=/`],
        ['Content-Type', 'application/json'],
      ]),
    });
  }),

  http.post(`${END_POINTS_V1.AUTH.SEND_EMAIL}`, async ({ request }) => {
    const body = (await request.json()) as PostSendEmailBody;

    if (!body.email) {
      return new HttpResponse(JSON.stringify(postSendEmailMockErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(postSendEmailMockResponse), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  http.post(`${END_POINTS_V1.AUTH.CHECK_EMAIL_VERIFICATION_STATUS}`, async ({ request }) => {
    const body = (await request.json()) as PostEmailVerificationStatusBody;

    if (!body.email) {
      return new HttpResponse(JSON.stringify(postCheckEmailVerificationStatusMockErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(postCheckEmailVerificationStatusMockResponse), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  http.post(`${END_POINTS_V1.AUTH.SIGNUP}`, async ({ request }) => {
    const body = (await request.json()) as PostSignupBody;

    if (!body.provider || !body.providerId || !body.email || !body.nickname) {
      return new HttpResponse(JSON.stringify(postSignupMockErrorResponse), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(postSignupMockResponse), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),
];
