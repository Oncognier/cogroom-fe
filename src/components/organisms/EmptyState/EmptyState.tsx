import * as S from './EmptyState.styled';

interface EmptyStateProps {
  icon: React.ReactNode;
  hideMessage?: boolean;
}

export default function EmptyState({ icon, hideMessage = false }: EmptyStateProps) {
  return (
    <S.EmptyState>
      <S.Icon>{icon}</S.Icon>
      {!hideMessage && (
        <S.MessageWrapper>
          <S.MainMessage>X</S.MainMessage>
        </S.MessageWrapper>
      )}
    </S.EmptyState>
  );
}
