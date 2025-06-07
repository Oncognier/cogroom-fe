import { ApiResponse } from './api';

export interface UserSummaryResponse extends ApiResponse {
  result: {
    nickname: string;
    imageUrl: string;
  };
}
