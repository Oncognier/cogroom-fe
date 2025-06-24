import { InputHTMLAttributes } from 'react';

import SearchIcon from '@/assets/icons/search.svg';

import * as S from './Search.styled';
import type { SearchStyleProps } from './Search.styled';

export interface SearchProps extends SearchStyleProps, InputHTMLAttributes<HTMLInputElement> {}

export default function Search({ inputSize, interactionVariant, ...props }: SearchProps) {
  return (
    <S.SearchContainer>
      <S.IconWrapper>
        <SearchIcon />
      </S.IconWrapper>
      <S.Search
        type='text'
        inputSize={inputSize}
        interactionVariant={interactionVariant}
        {...props}
      />
    </S.SearchContainer>
  );
}
