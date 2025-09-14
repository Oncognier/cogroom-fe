'use client';

import { useRouter } from 'next/navigation';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import useGetDailyQuestionsQuery from '@/hooks/api/daily/useGetDailyQuestions';
import { useAlertModalStore } from '@/stores/useModalStore';

import * as S from './CommunityActions.styled';

export default function CommunityActions() {
  const router = useRouter();
  const { data } = useGetDailyQuestionsQuery();
  const { open } = useAlertModalStore();

  const onClick = () => {
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

  return (
    <S.Container>
      <OutlinedButton
        label='데일리 공유'
        size='sm'
        color='primary'
        interactionVariant='normal'
        onClick={onClick}
      />

      <OutlinedButton
        label='글쓰기'
        size='sm'
        color='primary'
        interactionVariant='normal'
        onClick={() => router.push('/community/write?type=post')}
      />
    </S.Container>
  );
}
