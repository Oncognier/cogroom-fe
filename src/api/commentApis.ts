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

const createComment = async (
  postId: string,
  { parentId, content, isAnonymous, mentionedList }: CreateCommentRequest,
) => {
  const { data } = await axiosInstance.post<CreateCommentRequest, AxiosResponse<CreateCommentResponse>>(
    END_POINTS_V1.COMMENTS.CREATE(postId),
    {
      parentId,
      content,
      isAnonymous,
      mentionedList,
    },
  );

  return data.result;
};

const getCommentList = async (postId: string, params: CommentListRequest) => {
  const { data } = await axiosInstance.get<CommentListResponse>(END_POINTS_V1.COMMENTS.LIST(postId), {
    params,
  });

  return data.result;
};

const updateComment = async (commentId: string, { content, isAnonymous, mentionedList }: UpdateCommentRequest) => {
  const { data } = await axiosInstance.patch<UpdateCommentRequest, AxiosResponse<UpdateCommentResponse>>(
    END_POINTS_V1.COMMENTS.UPDATE(commentId),
    {
      content,
      isAnonymous,
      mentionedList,
    },
  );

  return data.result;
};

const deleteComment = async ({ commentId }: { commentId: string }) => {
  const { data } = await axiosInstance.delete<null, AxiosResponse<ApiResponse>>(
    END_POINTS_V1.COMMENTS.DELETE(commentId),
  );

  return data;
};

const toggleCommentLike = async (commentId: string) => {
  const { data } = await axiosInstance.post(END_POINTS_V1.COMMENTS.LIKE(commentId));

  return data.result;
};

const deleteCommentLike = async (commentId: string) => {
  const { data } = await axiosInstance.delete<null, AxiosResponse<DeleteCommentLikeResponse>>(
    END_POINTS_V1.COMMENTS.DELETE_LIKE(commentId),
  );

  return data.result;
};

export const commentApi = {
  createComment,
  getCommentList,
  updateComment,
  deleteComment,
  toggleCommentLike,
  deleteCommentLike,
};
