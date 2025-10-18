import { http, HttpResponse } from 'msw';

import { END_POINTS, HTTP_STATUS_CODE } from '@/constants/api';
import type { CreateCommentRequest, UpdateCommentRequest } from '@/types/comment';

import { createCommentSuccess, createCommentError } from '../data/comment/createCommentData';
import { deleteCommentSuccess, deleteCommentError } from '../data/comment/deleteCommentData';
import { deleteCommentLikeSuccess, deleteCommentLikeError } from '../data/comment/deleteCommentLikeData';
import { getCommentListSuccess } from '../data/comment/getCommentListData';
import { toggleCommentLikeSuccess, toggleCommentLikeError } from '../data/comment/toggleCommentLikeData';
import { updateCommentSuccess, updateCommentError } from '../data/comment/updateCommentData';

export const commentHandlers = [
  // 댓글 목록 조회
  http.get(END_POINTS.POSTS.COMMENTS.ROOT(':postId'), async ({ params }) => {
    const { postId } = params;
    if (!postId) {
      return new HttpResponse(JSON.stringify({ code: 'BAD_REQUEST', message: 'postId is required' }), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }
    return new HttpResponse(JSON.stringify(getCommentListSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 댓글 작성
  http.post(END_POINTS.POSTS.COMMENTS.ROOT(':postId'), async ({ params, request }) => {
    const { postId } = params;
    if (!postId) {
      return new HttpResponse(JSON.stringify({ code: 'BAD_REQUEST', message: 'postId is required' }), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    const body = (await request.json()) as CreateCommentRequest | undefined;
    if (!body?.content || body.content.trim().length === 0) {
      return new HttpResponse(JSON.stringify(createCommentError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(createCommentSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 댓글 수정
  http.patch(END_POINTS.COMMENTS.BY_ID(':commentId'), async ({ params, request }) => {
    const { commentId } = params;
    if (!commentId) {
      return new HttpResponse(JSON.stringify(updateCommentError), {
        status: HTTP_STATUS_CODE.NOT_FOUND,
      });
    }

    const body = (await request.json()) as UpdateCommentRequest | undefined;
    if (!body?.content || body.content.trim().length === 0) {
      return new HttpResponse(JSON.stringify(updateCommentError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(updateCommentSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 댓글 삭제
  http.delete(END_POINTS.COMMENTS.BY_ID(':commentId'), async ({ params }) => {
    const { commentId } = params;
    if (!commentId) {
      return new HttpResponse(JSON.stringify(deleteCommentError), {
        status: HTTP_STATUS_CODE.NOT_FOUND,
      });
    }

    return new HttpResponse(JSON.stringify(deleteCommentSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 댓글 좋아요 등록
  http.post(END_POINTS.COMMENTS.LIKES(':commentId'), async ({ params }) => {
    const { commentId } = params;
    if (!commentId) {
      return new HttpResponse(JSON.stringify(toggleCommentLikeError), {
        status: HTTP_STATUS_CODE.NOT_FOUND,
      });
    }

    return new HttpResponse(JSON.stringify(toggleCommentLikeSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 댓글 좋아요 취소
  http.delete(END_POINTS.COMMENTS.LIKES(':commentId'), async ({ params }) => {
    const { commentId } = params;
    if (!commentId) {
      return new HttpResponse(JSON.stringify(deleteCommentLikeError), {
        status: HTTP_STATUS_CODE.NOT_FOUND,
      });
    }

    return new HttpResponse(JSON.stringify(deleteCommentLikeSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),
];
