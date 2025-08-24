import * as S from './EmptyState.styled';

interface EmptyStateProps {
  icon: React.ReactNode;
  children?: React.ReactNode;
}

export default function EmptyState({ icon, children }: EmptyStateProps) {
  return (
    <S.EmptyState>
      <S.Icon>{icon}</S.Icon>
      {children}
    </S.EmptyState>
  );
}
