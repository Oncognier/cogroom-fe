import { http, HttpResponse } from 'msw';

import { END_POINTS_V1, HTTP_STATUS_CODE } from '@/constants/api';
import { CreateDailyQuestionsRequest, DeleteMemberRequest } from '@/types/admin';

import { changeMemberRoleSuccess } from '../data/admin/changeMemberRoleData';
import { createDailyQuestionsError, createDailyQuestionsSuccess } from '../data/admin/createDailyQuestionsData';
import { deleteMemberError, deleteMemberSuccess } from '../data/admin/deleteMemberData';
import { getAdminCommentListSuccess } from '../data/admin/getAdminCommentListData';
import { getAdminPostListSuccess } from '../data/admin/getAdminPostListData';
import { getDailyQuestionsSuccess } from '../data/admin/getDailyQuestionsData';
import {
  getMemberDailyQuestionsError,
  getMemberDailyQuestionsSuccess,
} from '../data/admin/getMemberDailyQuestionsData';
import { getMemberListSuccess } from '../data/admin/getMemberListData';

export const adminHandlers = [
  // 회원 목록 조회
  http.get(END_POINTS_V1.ADMIN.MEMBERS.ROOT, async () => {
    return new HttpResponse(JSON.stringify(getMemberListSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 특정 회원의 데일리 질문/답변 조회
  http.get(END_POINTS_V1.ADMIN.MEMBERS.DAILY(':memberId'), async ({ params }) => {
    const { memberId } = params;

    if (!memberId) {
      return new HttpResponse(JSON.stringify(getMemberDailyQuestionsError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(getMemberDailyQuestionsSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 회원 권한 변경
  http.patch(END_POINTS_V1.ADMIN.MEMBERS.CHANGE_ROLE(':memberId'), async () => {
    return new HttpResponse(JSON.stringify(changeMemberRoleSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 회원 삭제
  http.delete(END_POINTS_V1.ADMIN.MEMBERS.ROOT, async ({ request }) => {
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

  // 데일리 질문 목록 조회
  http.get(END_POINTS_V1.ADMIN.DAILY.QUESTIONS, async () => {
    return new HttpResponse(JSON.stringify(getDailyQuestionsSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 데일리 질문 등록
  http.post(END_POINTS_V1.ADMIN.DAILY.QUESTIONS, async ({ request }) => {
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

  // 커뮤니티 게시글 목록 조회
  http.get(END_POINTS_V1.ADMIN.COMMUNITY.POSTS, async () => {
    return new HttpResponse(JSON.stringify(getAdminPostListSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 커뮤니티 댓글 목록 조회
  http.get(END_POINTS_V1.ADMIN.COMMUNITY.COMMENTS, async () => {
    return new HttpResponse(JSON.stringify(getAdminCommentListSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),
];
