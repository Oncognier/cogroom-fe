'use client';

import * as S from './EmptyState.styled';

interface EmptyStateProps {
  icon: React.ReactNode;
}

export default function EmptyState({ icon }: EmptyStateProps) {
  return (
    <S.EmptyState>
      <S.Icon>{icon}</S.Icon>
      <S.MessageWrapper>
        <S.MainMessage>비어있어요</S.MainMessage>
        <S.Description>
          코그룸은 코그니어 유저들과의 보다 원활한
          <br />
          활동을 위해 열심히 노력하고 있어요
        </S.Description>
      </S.MessageWrapper>
    </S.EmptyState>
  );
}
