import Circular from '@/assets/icons/circular.svg';

import * as S from './LoadingSpinner.styled';

export default function LoadingSpinner() {
  return (
    <S.LoadingSpinner>
      <S.LoadingIcon>
        <Circular />
      </S.LoadingIcon>
    </S.LoadingSpinner>
  );
}
