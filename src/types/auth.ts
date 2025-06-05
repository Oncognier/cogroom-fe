import { ApiResponse } from './api';

export interface PostLoginRequestBody {
  code: string;
  provider: string;
}

export interface PostLoginResponse extends ApiResponse {
  result: {
    email?: string;
    nickname?: string;
    needSignup: boolean;
  };
}

export interface PostSendEmailBody {
  email: string;
}

export interface PostEmailVerificationStatusBody {
  email: string;
}
