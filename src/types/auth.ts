import { ApiResponse } from './api';

export interface PostLoginRequestBody {
  code: string;
  provider: string;
}

export interface PostLoginResponse extends ApiResponse {
  result: {
    socialUserInfo: {
      provider: string;
      providerId: string;
      email: string;
      nickname: string;
    };
    needSignup: boolean;
  };
}

export interface PostSendEmailBody {
  email: string;
}

export interface PostEmailVerificationStatusBody {
  email: string;
}

export interface PostSignupBody {
  provider: string;
  providerId: string;
  email: string;
  nickname: string;
}
