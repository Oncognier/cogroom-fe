'use client';

import { useRouter } from 'next/navigation';

import MessageCircleX from '@/assets/icons/message-circle-x.svg';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';

export default function Likes() {
  const router = useRouter();

  const handleGoToCommunity = () => {
    router.push('/community');
  };

  return (
    <EmptyState
      icon={<MessageCircleX />}
      description='꼭 마음에 담아두고 싶던 글이 있나요?'
      buttonLabel='글 보러가기'
      buttonAction={handleGoToCommunity}
    />
  );
}
