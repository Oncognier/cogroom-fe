export interface PostLoginRequestBody {
  code: string;
  provider: string;
}

export interface PostLoginResponse {
  code: number;
  message: string;
  result: {
    email?: string;
    nickname?: string;
    needSignup: boolean;
  };
}
