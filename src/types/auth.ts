export interface PostLogInRequestBody {
  code: string;
  provider: string;
}

export interface PostLogInResponse {
  code: number;
  message: string;
  result: {
    needSignup: boolean;
  };
}
