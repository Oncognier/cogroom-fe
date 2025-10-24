import { http, HttpResponse } from 'msw';

import { END_POINTS, HTTP_STATUS_CODE } from '@/constants/api';
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
  // 인증 이메일 전송
  http.post(END_POINTS.AUTH.EMAIL_VERIFICATION, async ({ request }) => {
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

  // 이메일 인증 완료 여부 확인
  http.get(END_POINTS.AUTH.EMAIL_CHECK_VERIFICATION, async ({ request }) => {
    const url = new URL(request.url);
    const userEmail = url.searchParams.get('userEmail');
    const verificationCode = url.searchParams.get('verificationCode'); // 교정 완료

    if (!userEmail || !verificationCode) {
      return new HttpResponse(JSON.stringify(checkEmailError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(checkEmailSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 이메일 인증 상태 조회
  http.get(END_POINTS.AUTH.EMAIL_STATUS, async ({ request }) => {
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

  // 회원가입
  http.post(END_POINTS.AUTH.SIGNUP, async ({ request }) => {
    const body = (await request.json()) as SignupRequest;

    if (!body.provider || !body.email || !body.signupToken) {
      return new HttpResponse(JSON.stringify(signupError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    // 회원가입 성공 시: 액세스/리프레시 토큰을 쿠키로 설정
    return new HttpResponse(JSON.stringify(signupSuccess), {
      status: HTTP_STATUS_CODE.OK,
      headers: new Headers([
        ['Set-Cookie', `accessToken=${mockAccessToken}; HttpOnly; Path=/; SameSite=Lax`],
        ['Set-Cookie', `refreshToken=${mockRefreshToken}; HttpOnly; Path=/; SameSite=Lax`],
        ['Content-Type', 'application/json'],
      ]),
    });
  }),

  // 로그인
  http.post(END_POINTS.AUTH.LOGIN, async ({ request }) => {
    const body = (await request.json()) as LoginRequest;

    if (!body.code || !body.provider) {
      return new HttpResponse(JSON.stringify(loginError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    // 기존 유저일 경우 주석 해제
    // return new HttpResponse(JSON.stringify(loginSuccess_ExistingUser), {
    //   status: HTTP_STATUS_CODE.OK,
    //   headers: new Headers([
    //     ['Set-Cookie', `accessToken=${mockAccessToken}; HttpOnly; Path=/; SameSite=Lax`],
    //     ['Set-Cookie', `refreshToken=${mockRefreshToken}; HttpOnly; Path=/; SameSite=Lax`],
    //     ['Content-Type', 'application/json'],
    //   ]),
    // });

    // 로그인 성공 시: 액세스/리프레시 토큰을 쿠키로 설정
    return new HttpResponse(JSON.stringify(loginSuccess_NewUser), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 로그아웃
  http.post(END_POINTS.AUTH.LOGOUT, async () => {
    // 로그아웃 시: 토큰 쿠키 모두 제거
    return new HttpResponse(JSON.stringify(logoutSuccess), {
      status: HTTP_STATUS_CODE.OK,
      headers: new Headers([
        ['Set-Cookie', 'accessToken=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax'],
        ['Set-Cookie', 'refreshToken=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax'],
        ['Content-Type', 'application/json'],
      ]),
    });
  }),

  // 토큰 재발급
  http.post(END_POINTS.AUTH.REISSUE, async () => {
    // 성공 케이스 사용 시 주석 해제
    // return new HttpResponse(JSON.stringify(reissueSuccess), {
    //   status: HTTP_STATUS_CODE.OK,
    //   headers: new Headers([
    //     ['Set-Cookie', `accessToken=${mockAccessToken}; HttpOnly; Path=/; SameSite=Lax`],
    //     ['Set-Cookie', `refreshToken=${mockRefreshToken}; HttpOnly; Path=/; SameSite=Lax`],
    //     ['Content-Type', 'application/json'],
    //   ]),
    // });

    // 실패 케이스 예시
    return new HttpResponse(JSON.stringify(reissueError), {
      status: HTTP_STATUS_CODE.UNAUTHORIZED,
    });
  }),
];
