'use client';

import Google from '@/assets/icons/google.svg';
import Kakao from '@/assets/icons/kakao.svg';
import Naver from '@/assets/icons/naver.svg';
import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import Input from '@/components/molecules/Input/Input';
import { GOOGLE_AUTH_API_URL, KAKAO_AUTH_API_URL, NAVER_AUTH_API_URL } from '@/constants/api';
import { useAppModalStore } from '@/stores/useModalStore';
import { useForm } from 'react-hook-form';

import * as S from './Login.styled';
import { useAdminLoginMutation } from '@/hooks/api/auth/useAdminLogin';

type AuthPlatform = 'kakao' | 'naver' | 'google';

type AdminLoginForm = {
  email: string;
  password: string;
};

export default function Login() {
  const { close } = useAppModalStore();

  // 포트원 심사용
  const { adminLogin } = useAdminLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<AdminLoginForm>({
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: AdminLoginForm) => {
    adminLogin({ email: data.email, password: data.password });
    close();
  };
  // 여기까지 제거

  const authUrls = {
    kakao: KAKAO_AUTH_API_URL,
    naver: NAVER_AUTH_API_URL,
    google: GOOGLE_AUTH_API_URL,
  } as const;

  const handleClick = (platform: AuthPlatform) => {
    const authUrl = authUrls[platform];
    if (authUrl) {
      window.location.href = authUrl;
      close();
    }
  };

  return (
    <S.LoginContainer>
      <S.TextWrapper>
        <S.TitleWrapper>
          <S.SubTitle>모든이의 내적성장을 돕습니다</S.SubTitle>
          <S.Title>코그룸 시작하기</S.Title>
        </S.TitleWrapper>
        <S.Description>
          코그룸은 단순한 학습이 아닌
          <br />
          나를 알아가고 이해하는 여정을 제공합니다
        </S.Description>
      </S.TextWrapper>

      <S.ButtonWrapper>
        {/* 포트원 심사용 */}
        <S.AdminLogin onSubmit={handleSubmit(onSubmit)}>
          <S.AdminInputWrapper>
            <Input
              inputSize='md'
              placeholder='아이디'
              {...register('email')}
            />
            <Input
              inputSize='md'
              placeholder='비밀번호'
              type='password'
              {...register('password')}
            />
          </S.AdminInputWrapper>

          <S.AdminButton
            type='submit'
            disabled={isSubmitting}
          >
            로그인
          </S.AdminButton>
        </S.AdminLogin>
        {/* 여기까지 제거 */}

        <SolidButton
          label='카카오로 시작하기'
          size='md'
          color='kakao'
          interactionVariant='normal'
          iconLeft={<Kakao />}
          onClick={() => handleClick('kakao')}
          fillContainer
        />

        <SolidButton
          label='네이버로 시작하기'
          size='md'
          color='naver'
          interactionVariant='normal'
          iconLeft={<Naver />}
          onClick={() => handleClick('naver')}
          fillContainer
        />

        <OutlinedButton
          label='구글로 시작하기'
          size='md'
          color='google'
          interactionVariant='normal'
          iconLeft={<Google />}
          onClick={() => handleClick('google')}
          fillContainer
        />
      </S.ButtonWrapper>
    </S.LoginContainer>
  );
}
