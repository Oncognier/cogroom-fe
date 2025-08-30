'use client';

import { useRouter } from 'next/navigation';

import MessageCircleX from '@/assets/icons/message-circle-x.svg';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';

export default function Comments() {
  const router = useRouter();

  const handleGoToCommunity = () => {
    router.push('/community');
  };

  return (
    <EmptyState
      icon={<MessageCircleX />}
      description='다른 코그니어 글에 댓글을 달아봐요'
      buttonLabel='댓글 달러가기'
      buttonAction={handleGoToCommunity}
    />
  );
}
