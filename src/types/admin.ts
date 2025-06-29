import { ApiResponse, PaginationResult } from '@/types/api';

import { MemberRole } from './member';

export interface MemberListRequest {
  page?: number;
  startDate?: string;
  endDate?: string;
  keyword?: string;
}

export interface Member {
  memberId: number;
  nickname: string;
  email: string;
  imageUrl: string;
  createdAt: string;
  memberRole: MemberRole;
}

export interface MemberListResponse extends ApiResponse {
  result: PaginationResult<Member>;
}

export interface DailyQuestionsRequest {
  page?: number;
  level?: string[];
  category?: number[];
  keyword?: string;
}

export interface MemberDailyQuestion {
  assignedQuestionId: number;
  nickname: string;
  imageUrl: string;
  question: string;
  level: string;
  categories: string[];
  answeredAt: string;
}

export interface MemberDailyQuestionsResponse extends ApiResponse {
  result: PaginationResult<MemberDailyQuestion>;
}

export interface DailyQuestion {
  questionId: number;
  question: string;
  level: string;
  categories: string[];
}

export interface DailyQuestionsResponse extends ApiResponse {
  result: PaginationResult<DailyQuestion>;
}

export interface DeleteMemberRequest {
  memberIdList: number[];
}

export interface CreateDailyQuestionsRequest {
  level: string;
  categoryList: number[];
  questionList: { question: string }[];
}
