import { ApiResponse } from './api';

export interface LoginRequest {
  code: string;
  provider: string;
}

export interface LoginResponse extends ApiResponse {
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

export interface SendEmailRequest {
  email: string;
}

export interface CheckEmailVerifiedRequest {
  email: string;
}

export interface SignupRequest {
  provider: string;
  providerId: string;
  email: string;
  nickname: string;
}
