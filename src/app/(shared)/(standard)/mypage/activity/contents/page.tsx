import ScriptX from '@/assets/icons/script-x.svg';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';

export default function Contents() {
  return (
    <EmptyState
      icon={<ScriptX />}
      hideMessage
    />
  );
}
