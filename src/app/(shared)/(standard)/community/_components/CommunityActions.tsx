'use client';

import { useRouter } from 'next/navigation';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import useGetDailyQuestionsQuery from '@/hooks/api/daily/useGetDailyQuestions';
import { useAuthStore } from '@/stores/useAuthStore';
import { useAlertModalStore, useAppModalStore } from '@/stores/useModalStore';

import * as S from './CommunityActions.styled';

export default function CommunityActions() {
  const router = useRouter();
  const { data } = useGetDailyQuestionsQuery();
  const { open } = useAlertModalStore();
  const { open: openAppModal } = useAppModalStore();
  const isAuth = useAuthStore((s) => s.isAuth());

  const onClickDaily = () => {
    if (!isAuth) {
      openAppModal('login');
      return;
    }

    if (data?.answer) {
      router.push('/community/write?type=daily');
      return;
    }

    open('alert', {
      message: '오늘의 데일리에 답해주세요!',
      type: 'confirm',
      confirmText: '답변하러 가기',
      onConfirm: () => {
        router.push('/daily');
      },
    });
  };

  const onClickWrite = () => {
    if (!isAuth) {
      openAppModal('login');
      return;
    }

    router.push('/community/write?type=post');
  };

  return (
    <S.Container>
      <OutlinedButton
        label='데일리 공유'
        size='sm'
        color='primary'
        interactionVariant='normal'
        onClick={onClickDaily}
      />

      <OutlinedButton
        label='글쓰기'
        size='sm'
        color='primary'
        interactionVariant='normal'
        onClick={onClickWrite}
      />
    </S.Container>
  );
}
