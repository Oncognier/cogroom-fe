import { http, HttpResponse } from 'msw';

import { END_POINTS_V1, HTTP_STATUS_CODE } from '@/constants/api';
import type { CheckNicknameRequest, EditUserInfoRequest } from '@/types/member';

import { checkNicknameError, checkNicknameSuccess } from '../data/member/checkNicknameData';
import { deleteUserPostError, deleteUserPostSuccess } from '../data/member/deleteUserPostData';
import { editUserInfoError, editUserInfoSuccess } from '../data/member/editUserInfoData';
import { getUserCommentListSuccess } from '../data/member/getUserCommentListData';
import { getUserDailySuccess } from '../data/member/getUserDailyData';
import { getUserDashboardSuccess } from '../data/member/getUserDashboardData';
import { getUserInfoSuccess } from '../data/member/getUserInfoData';
import { getUserLikeCommentListSuccess } from '../data/member/getUserLikeCommentListData';
import { getUserLikePostListSuccess } from '../data/member/getUserLikePostListData';
import { getUserPostListSuccess } from '../data/member/getUserPostListData';
import { getUserProfileSuccess } from '../data/member/getUserProfileData';
import { getUserSaveListSuccess } from '../data/member/getUserSaveData';
import { getUserSummarySuccess } from '../data/member/getUserSummaryData';
import { withdrawSuccess } from '../data/member/withdrawData';

export const memberHandlers = [
  // 사용자 요약 정보 조회
  http.get(END_POINTS_V1.MEMBERS.SUMMARY, async () => {
    return new HttpResponse(JSON.stringify(getUserSummarySuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 사용자 대시보드 정보 조회
  http.get(END_POINTS_V1.MEMBERS.DASHBOARD, async () => {
    return new HttpResponse(JSON.stringify(getUserDashboardSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 내 정보 조회
  http.get(END_POINTS_V1.MEMBERS.ME, async () => {
    return new HttpResponse(JSON.stringify(getUserInfoSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 다른 사용자 프로필 조회
  http.get(END_POINTS_V1.MEMBERS.PROFILE(':memberId'), async ({ params }) => {
    const { memberId } = params;
    if (!memberId) {
      // 필요 시 에러 페이로드가 있다면 교체
      return new HttpResponse(JSON.stringify({ code: 'BAD_REQUEST', message: 'memberId is required' }), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }
    return new HttpResponse(JSON.stringify(getUserProfileSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 내 데일리 질문 및 답변 조회
  http.get(END_POINTS_V1.MEMBERS.DAILY, async () => {
    return new HttpResponse(JSON.stringify(getUserDailySuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 내가 작성한 게시글 조회
  http.get(END_POINTS_V1.MEMBERS.POSTS, async () => {
    return new HttpResponse(JSON.stringify(getUserPostListSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 내가 저장한 게시글 조회
  http.get(END_POINTS_V1.MEMBERS.POSTS_SAVES, async () => {
    return new HttpResponse(JSON.stringify(getUserSaveListSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 내가 좋아요한 게시글 조회
  http.get(END_POINTS_V1.MEMBERS.POSTS_LIKES, async () => {
    return new HttpResponse(JSON.stringify(getUserLikePostListSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 내가 작성한 댓글 조회
  http.get(END_POINTS_V1.MEMBERS.COMMENTS, async () => {
    return new HttpResponse(JSON.stringify(getUserCommentListSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 내가 좋아요한 댓글 조회
  http.get(END_POINTS_V1.MEMBERS.COMMENTS_LIKES, async () => {
    return new HttpResponse(JSON.stringify(getUserLikeCommentListSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 내가 작성한 게시글 일괄 삭제
  http.delete(END_POINTS_V1.MEMBERS.POSTS, async ({ request }) => {
    const body = (await request.json()) as { postList?: number[] } | undefined;

    if (!body?.postList || body.postList.length === 0) {
      return new HttpResponse(JSON.stringify(deleteUserPostError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(deleteUserPostSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 사용자 정보 수정
  http.patch(END_POINTS_V1.MEMBERS.ME, async ({ request }) => {
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

  // 닉네임 중복 검사
  http.post(END_POINTS_V1.MEMBERS.NICKNAME_CHECK, async ({ request }) => {
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

  // 회원 탈퇴
  http.delete(END_POINTS_V1.MEMBERS.WITHDRAW, async () => {
    // 이전 요청에서 정의한 정책에 맞춰, 탈퇴 시 토큰 쿠키 제거
    return new HttpResponse(JSON.stringify(withdrawSuccess), {
      status: HTTP_STATUS_CODE.OK,
      headers: new Headers([
        ['Set-Cookie', 'accessToken=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax'],
        ['Set-Cookie', 'refreshToken=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax'],
        ['Content-Type', 'application/json'],
      ]),
    });
  }),
];
