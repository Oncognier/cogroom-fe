import { AxiosResponse } from 'axios';

import { END_POINTS_V1 } from '@/constants/api';
import { ApiResponse } from '@/types/api';
import {
  CreateCommentRequest,
  CreateCommentResponse,
  CommentListRequest,
  CommentListResponse,
  UpdateCommentRequest,
  UpdateCommentResponse,
  DeleteCommentLikeResponse,
} from '@/types/comment';

import { axiosInstance } from './axios/axiosInstance';

/** 댓글 목록 조회 */
const getCommentList = async (postId: string, params: CommentListRequest) => {
  const { data } = await axiosInstance.get<CommentListResponse>(END_POINTS_V1.POSTS.COMMENTS.ROOT(postId), { params });
  return data.result;
};

/** 댓글 작성 */
const createComment = async (
  postId: string,
  { parentId, content, isAnonymous, mentionedList }: CreateCommentRequest,
) => {
  const { data } = await axiosInstance.post<CreateCommentRequest, AxiosResponse<CreateCommentResponse>>(
    END_POINTS_V1.POSTS.COMMENTS.ROOT(postId),
    { parentId, content, isAnonymous, mentionedList },
  );
  return data.result;
};

/** 댓글 수정 */
const updateComment = async (commentId: string, { content, isAnonymous, mentionedList }: UpdateCommentRequest) => {
  const { data } = await axiosInstance.patch<UpdateCommentRequest, AxiosResponse<UpdateCommentResponse>>(
    END_POINTS_V1.COMMENTS.BY_ID(commentId),
    { content, isAnonymous, mentionedList },
  );
  return data.result;
};

/** 댓글 삭제 */
const deleteComment = async ({ commentId }: { commentId: string }) => {
  const { data } = await axiosInstance.delete<null, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.COMMENTS.BY_ID(commentId),
  );
  return data;
};

/** 댓글 좋아요 등록 */
const toggleCommentLike = async (commentId: string) => {
  const { data } = await axiosInstance.post(END_POINTS_V1.COMMENTS.LIKES(commentId));
  return data.result;
};

/** 댓글 좋아요 취소 */
const deleteCommentLike = async (commentId: string) => {
  const { data } = await axiosInstance.delete<null, AxiosResponse<DeleteCommentLikeResponse>>(
    END_POINTS_V1.COMMENTS.LIKES(commentId),
  );
  return data.result;
};

export const commentApi = {
  getCommentList,
  createComment,
  updateComment,
  deleteComment,
  toggleCommentLike,
  deleteCommentLike,
};
