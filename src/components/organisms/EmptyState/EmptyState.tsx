import ArrowRight from '@/assets/icons/arrowright.svg';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';

import * as S from './EmptyState.styled';

interface EmptyStateProps {
  icon: React.ReactNode;
  description?: string;
  buttonLabel?: string;
  buttonAction?: () => void;
}

export default function EmptyState({ icon, description, buttonLabel, buttonAction }: EmptyStateProps) {
  return (
    <S.EmptyState>
      <S.Icon>{icon}</S.Icon>
      <S.ContentWrapper>
        {description && <S.Description>{description}</S.Description>}
        {buttonLabel && (
          <SolidButton
            label={buttonLabel}
            onClick={buttonAction}
            size='sm'
            interactionVariant='normal'
            iconRight={<ArrowRight />}
          />
        )}
      </S.ContentWrapper>
    </S.EmptyState>
  );
}
