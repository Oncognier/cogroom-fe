import * as S from './EmptyState.styled';

interface EmptyStateProps {
  icon: React.ReactNode;
}

export default function EmptyState({ icon }: EmptyStateProps) {
  return (
    <S.EmptyState>
      <S.Icon>{icon}</S.Icon>
    </S.EmptyState>
  );
}
