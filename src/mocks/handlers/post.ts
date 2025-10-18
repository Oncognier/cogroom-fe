import { http, HttpResponse } from 'msw';

import { END_POINTS, HTTP_STATUS_CODE } from '@/constants/api';
import type { CreatePostRequest, UpdatePostRequest } from '@/types/post';

import { createPostSuccess, createPostError } from '../data/post/createPostData';
import { deletePostSuccess, deletePostError } from '../data/post/deletePostData';
import { getPostSuccess, getPostError } from '../data/post/getPostData';
import { getPostListSuccess } from '../data/post/getPostListData';
import { likePostSuccess, likePostError } from '../data/post/likePostData';
import { savePostSuccess, savePostError } from '../data/post/savePostData';
import { unlikePostSuccess, unlikePostError } from '../data/post/unlikePostData';
import { unsavePostSuccess, unsavePostError } from '../data/post/unsavePostData';
import { updatePostSuccess, updatePostError } from '../data/post/updatePostData';

export const postHandlers = [
  // 게시글 목록 조회
  http.get(END_POINTS.POSTS.ROOT, async () => {
    return new HttpResponse(JSON.stringify(getPostListSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 게시글 상세 조회
  http.get(END_POINTS.POSTS.BY_ID(':postId'), async ({ params }) => {
    const { postId } = params;
    if (!postId) {
      return new HttpResponse(JSON.stringify(getPostError), {
        status: HTTP_STATUS_CODE.NOT_FOUND,
      });
    }
    return new HttpResponse(JSON.stringify(getPostSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 게시글 작성
  http.post(END_POINTS.POSTS.ROOT, async ({ request }) => {
    const body = (await request.json()) as CreatePostRequest | undefined;

    if (!body?.title || !body?.content || !Number.isFinite(body?.categoryId)) {
      return new HttpResponse(JSON.stringify(createPostError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(createPostSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 게시글 수정
  http.patch(END_POINTS.POSTS.BY_ID(':postId'), async ({ params, request }) => {
    const { postId } = params;
    if (!postId) {
      return new HttpResponse(JSON.stringify(updatePostError), {
        status: HTTP_STATUS_CODE.NOT_FOUND,
      });
    }

    const body = (await request.json()) as UpdatePostRequest | undefined;
    if (!body?.title || !body?.content || !Number.isFinite(body?.categoryId)) {
      return new HttpResponse(JSON.stringify(updatePostError), {
        status: HTTP_STATUS_CODE.BAD_REQUEST,
      });
    }

    return new HttpResponse(JSON.stringify(updatePostSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 게시글 삭제
  http.delete(END_POINTS.POSTS.BY_ID(':postId'), async ({ params }) => {
    const { postId } = params;
    if (!postId) {
      return new HttpResponse(JSON.stringify(deletePostError), {
        status: HTTP_STATUS_CODE.NOT_FOUND,
      });
    }

    return new HttpResponse(JSON.stringify(deletePostSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 게시글 좋아요 등록
  http.post(END_POINTS.POSTS.LIKES(':postId'), async ({ params }) => {
    const { postId } = params;
    if (!postId) {
      return new HttpResponse(JSON.stringify(likePostError), {
        status: HTTP_STATUS_CODE.NOT_FOUND,
      });
    }

    return new HttpResponse(JSON.stringify(likePostSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 게시글 좋아요 취소
  http.delete(END_POINTS.POSTS.LIKES(':postId'), async ({ params }) => {
    const { postId } = params;
    if (!postId) {
      return new HttpResponse(JSON.stringify(unlikePostError), {
        status: HTTP_STATUS_CODE.NOT_FOUND,
      });
    }

    return new HttpResponse(JSON.stringify(unlikePostSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 게시글 저장
  http.post(END_POINTS.POSTS.SAVES(':postId'), async ({ params }) => {
    const { postId } = params;
    if (!postId) {
      return new HttpResponse(JSON.stringify(savePostError), {
        status: HTTP_STATUS_CODE.NOT_FOUND,
      });
    }

    return new HttpResponse(JSON.stringify(savePostSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),

  // 게시글 저장 취소
  http.delete(END_POINTS.POSTS.SAVES(':postId'), async ({ params }) => {
    const { postId } = params;
    if (!postId) {
      return new HttpResponse(JSON.stringify(unsavePostError), {
        status: HTTP_STATUS_CODE.NOT_FOUND,
      });
    }

    return new HttpResponse(JSON.stringify(unsavePostSuccess), {
      status: HTTP_STATUS_CODE.OK,
    });
  }),
];
