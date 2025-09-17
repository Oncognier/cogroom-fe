import { ApiResponse, PaginationResult } from './api';
import { Post } from './post';

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

export type UserProfile = {
  memberId: number;
  nickname: string;
  profileUrl?: string;
  description?: string;
};

export interface UserProfileResponse extends ApiResponse {
  result: UserProfile;
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

export interface UserCommunityRequest {
  page?: number;
  sort?: string;
  categoryId?: number;
  keyword?: string;
  startDate?: string;
  endDate?: string;
}

export interface UserPostListResponse extends ApiResponse {
  result: PaginationResult<Post>;
}

export interface UserCommentListResponse extends ApiResponse {
  result: PaginationResult<UserComment>;
}

export interface UserSaveListResponse extends ApiResponse {
  result: PaginationResult<Post>;
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
