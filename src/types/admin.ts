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

export interface DeleteMemberRequest {
  memberIdList: number[];
}
