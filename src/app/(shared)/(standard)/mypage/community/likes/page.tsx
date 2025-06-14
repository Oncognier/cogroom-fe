import MessageCircleX from '@/assets/icons/message-circle-x.svg';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';

export default function Likes() {
  return <EmptyState icon={<MessageCircleX />} />;
}
