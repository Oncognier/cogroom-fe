'use client';

import { useRouter } from 'next/navigation';

import MessageCircleX from '@/assets/icons/message-circle-x.svg';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';

export default function Posts() {
  const router = useRouter();

  const handleGoToCommunity = () => {
    router.push('/community');
  };

  return (
    <EmptyState
      icon={<MessageCircleX />}
      description='코그니어 커뮤니티에 첫 글을 써 보세요!'
      buttonLabel='커뮤니티 바로가기'
      buttonAction={handleGoToCommunity}
    />
  );
}
