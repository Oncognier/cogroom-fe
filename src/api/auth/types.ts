export interface PostLogInRequestBody {
  code: string;
  provider: string;
}

export interface PostLogInResponse {
  tokens: {
    accessToken: string;
  };
  needSignup: boolean;
}
