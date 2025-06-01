'use client';

export interface LoginProps {
  redirectTo?: string;
}

export default function Login({ redirectTo }: LoginProps) {
  return (
    <div>
      <h2>로그인</h2>
      <p>로그인 후 이동할 경로: {redirectTo ?? '홈'}</p>
    </div>
  );
}
