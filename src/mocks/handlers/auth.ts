import { http, HttpResponse } from 'msw';

import { END_POINTS_V1, HTTP_STATUS_CODE } from '@/constants/api';
import { CheckEmailVerifiedRequest, LoginRequest, SendEmailRequest, SignupRequest } from '@/types/auth';

import { checkEmailVerifiedError, checkEmailVerifiedSuccess } from '../data/auth/checkEmailVerifiedData';
import {
  loginError,
  loginSuccess_ExistingUser,
  loginSuccess_NewUser,
  mockAccessToken,
  mockRefreshToken,
} from '../data/auth/loginData';
import { sendEmailError, sendEmailSuccess } from '../data/auth/sendEmailData';
import { signupError, signupSuccess } from '../data/auth/signupData';
import { reissueSuccess } from '../data/auth/reissueTokenData';

export const authHandlers = [
  http.post(END_POINTS_V1.AUTH.LOGIN, async ({ request }) => {
    const body = (await request.json()) as LoginRequest;

    if (!body.code || !body.provider) {
      return new HttpResponse(JSON.stringify(loginError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(loginSuccess_NewUser), {
      status: HTTP_STATUS_CODE.OK,
    });

    // return new HttpResponse(JSON.stringify(loginSuccess_ExistingUser), {
    //   status: HTTP_STATUS_CODE.OK,
    //   headers: new Headers([
    //     ['Authorization', `Bearer ${mockAccessToken}`],
    //     ['Set-Cookie', `refreshToken=${mockRefreshToken}; HttpOnly; Path=/`],
    //     ['Content-Type', 'application/json'],
    //   ]),
    // });
  }),

  http.post(END_POINTS_V1.AUTH.SIGNUP, async ({ request }) => {
    const body = (await request.json()) as SignupRequest;

    if (!body.provider || !body.providerId || !body.email || !body.nickname) {
      return new HttpResponse(JSON.stringify(signupError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(signupSuccess), {
      status: HTTP_STATUS_CODE.OK,
      headers: new Headers([
        ['Authorization', `Bearer ${mockAccessToken}`],
        ['Set-Cookie', `refreshToken=${mockRefreshToken}; HttpOnly; Path=/`],
        ['Content-Type', 'application/json'],
      ]),
    });
  }),

  http.post(END_POINTS_V1.AUTH.SEND_EMAIL, async ({ request }) => {
    const body = (await request.json()) as SendEmailRequest;

    if (!body.email) {
      return new HttpResponse(JSON.stringify(sendEmailError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(sendEmailSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  http.post(END_POINTS_V1.AUTH.CHECK_EMAIL_VERIFIED, async ({ request }) => {
    const body = (await request.json()) as CheckEmailVerifiedRequest;

    if (!body.email) {
      return new HttpResponse(JSON.stringify(checkEmailVerifiedError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(checkEmailVerifiedSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  http.post(END_POINTS_V1.AUTH.REISSUE_TOKEN, async () => {
    return new HttpResponse(JSON.stringify(reissueSuccess), {
      status: HTTP_STATUS_CODE.OK,
      headers: new Headers([
        ['Authorization', `Bearer ${mockAccessToken}`],
        ['Access-Control-Expose-Headers', 'Authorization'],
        ['Set-Cookie', `refreshToken=${mockRefreshToken}; HttpOnly; Path=/`],
        ['Content-Type', 'application/json'],
      ]),
    });
  }),
];
