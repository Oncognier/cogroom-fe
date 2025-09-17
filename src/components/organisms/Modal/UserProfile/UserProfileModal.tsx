'use client';

import { useEffect } from 'react';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import Loading from '@/components/organisms/Loading/Loading';
import useGetUserProfile from '@/hooks/api/member/useGetUserProfile';
import { useAlertModalStore } from '@/stores/useModalStore';

import * as S from './UserProfileModal.styled';

export interface UserProfileModalProps {
  memberId: string;
}

export default function UserProfileModal({ memberId }: UserProfileModalProps) {
  const { data: profile, isLoading, error } = useGetUserProfile(memberId);
  const { open: openAlert } = useAlertModalStore();

  useEffect(() => {
    if (error instanceof HTTPError && error.code === 'MEMBER_NOT_FOUND_ERROR') {
      openAlert('alert', {
        message: '사용자를 찾을 수 없습니다.',
        type: 'alert',
      });
    }
  }, [error, openAlert]);

  if (isLoading) {
    return (
      <S.UserProfileModalContainer>
        <Loading />
      </S.UserProfileModalContainer>
    );
  }

  if (!profile) return;

  return (
    <S.UserProfileModalContainer>
      <S.ProfileSection>
        <AvatarPerson
          type='icon'
          size='lg'
          src={profile.profileUrl || undefined}
        />
        <S.UserName>{profile.nickname}</S.UserName>

        <S.IntroductionBox>
          <S.Introduction>{profile.description || ''}</S.Introduction>
        </S.IntroductionBox>
      </S.ProfileSection>
    </S.UserProfileModalContainer>
  );
}
