import { http, HttpResponse } from 'msw';

import { END_POINTS_V1, HTTP_STATUS_CODE } from '@/constants/api';
import { LoginRequest, SendEmailRequest, SignupRequest } from '@/types/auth';

import { checkEmailError, checkEmailSuccess } from '../data/auth/checkEmailData';
import { getEmailStatusError, getEmailStatusSuccess } from '../data/auth/getEmailStatusData';
import {
  loginError,
  loginSuccess_ExistingUser,
  loginSuccess_NewUser,
  mockAccessToken,
  mockRefreshToken,
} from '../data/auth/loginData';
import { logoutSuccess } from '../data/auth/logoutData';
import { reissueError, reissueSuccess } from '../data/auth/reissueTokenData';
import { sendEmailError, sendEmailSuccess } from '../data/auth/sendEmailData';
import { signupError, signupSuccess } from '../data/auth/signupData';

export const authHandlers = [
  http.get(END_POINTS_V1.AUTH.CHECK_EMAIL, async ({ request }) => {
    const url = new URL(request.url);
    const userEmail = url.searchParams.get('userEmail');
    const verificationCode = url.searchParams.get('userEmail');

    if (!userEmail || !verificationCode) {
      return new HttpResponse(JSON.stringify(checkEmailError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(checkEmailSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  http.get(END_POINTS_V1.AUTH.EMAIL_VERIFIED_STATUS, async ({ request }) => {
    const url = new URL(request.url);
    const email = url.searchParams.get('email');

    if (!email) {
      return new HttpResponse(JSON.stringify(getEmailStatusError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(getEmailStatusSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

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

    if (!body.provider || !body.email) {
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

  http.post(END_POINTS_V1.AUTH.LOGOUT, async () => {
    return new HttpResponse(JSON.stringify(logoutSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  http.post(END_POINTS_V1.AUTH.REISSUE_TOKEN, async () => {
    // 로그아웃 시 사용
    return new HttpResponse(JSON.stringify(reissueError), {
      status: HTTP_STATUS_CODE.UNAUTHORIZED,
    });

    // return new HttpResponse(JSON.stringify(reissueSuccess), {
    //   status: HTTP_STATUS_CODE.OK,
    //   headers: new Headers([
    //     ['Authorization', `Bearer ${mockAccessToken}`],
    //     ['Access-Control-Expose-Headers', 'Authorization'],
    //     ['Set-Cookie', `refreshToken=${mockRefreshToken}; HttpOnly; Path=/`],
    //     ['Content-Type', 'application/json'],
    //   ]),
    // });
  }),
];
