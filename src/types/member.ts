import { ApiResponse, PaginationResult } from './api';

export type MemberRole = 'USER' | 'ADMIN' | 'CONTENT_PROVIDER';

export type SortType = 'latest' | 'oldest';

export type UserSummary = {
  nickname: string;
  imageUrl: string;
  memberRole: MemberRole;
};

export interface UserSummaryResponse extends ApiResponse {
  result: UserSummary;
}

export type UserInfo = {
  email: string;
  nickname: string;
  imageUrl?: string;
  phoneNumber?: string;
  description?: string;
};

export interface UserInfoResponse extends ApiResponse {
  result: UserInfo;
}

export interface EditUserInfoRequest extends UserInfo {}

export type UserDaily = {
  question: string;
  answer: string;
  assignedDate: string;
};

export interface UserDailyResponse extends ApiResponse {
  result: UserDaily[];
}

export interface UserDashboardResponse extends ApiResponse {
  result: {
    nickname: string;
    signupDays: number;
    dailyStreak: number;
  };
}

export interface CheckNicknameRequest {
  nickname: string;
}

export interface CheckNicknameResponse extends ApiResponse {
  result: boolean;
}

export interface WithdrawRequest {
  reason: string;
}

export interface UserCommentListRequest {
  page?: number;
  sort?: string;
  category?: number[];
  keyword?: string;
  startDate?: string;
  endDate?: string;
}

export interface UserCommentListResponse extends ApiResponse {
  result: PaginationResult<UserComment>;
}

export type UserComment = {
  commentId: number;
  comment: string;
  parentId: number | null;
  post: {
    postId: number;
    title: string;
  };
  createdAt: string;
  updatedAt: string;
};
