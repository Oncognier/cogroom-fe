import { ApiResponse } from './api';

export interface CheckEmailRequest {
  userEmail: string;
  verificationCode: string;
}

export interface GetEmailStatusRequest {
  email: string;
}

export interface GetEmailStatusResponse extends ApiResponse {
  result: boolean;
}

export interface LoginRequest {
  code: string;
  provider: string;
  state?: string;
}

export interface LoginResponse extends ApiResponse {
  result: {
    signupToken: string;
    socialUserInfo: {
      email: string;
      provider: string;
    };
    needSignup: boolean;
  };
}

export interface SendEmailRequest {
  email: string;
}

export interface SignupRequest {
  provider: string;
  signupToken: string;
  email: string;
}

export interface AdminLoginRequest {
  email: string;
  password: string;
}

export interface AdminLoginResponse extends ApiResponse {
  result: {
    needSignup: boolean;
  };
}
