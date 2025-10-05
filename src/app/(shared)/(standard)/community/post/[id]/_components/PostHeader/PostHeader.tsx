import { formatRelativeKorean } from '@/utils/date/formatDay';
import { formatCountPlus } from '@/utils/formatText';

import * as S from './PostHeader.styled';

interface PostHeaderProps {
  title?: string;
  createdAt?: string;
  viewCount?: number;
}

export default function PostHeader({ title, createdAt, viewCount }: PostHeaderProps) {
  return (
    <S.PostTitleWrapper>
      <S.PostTitle>{title}</S.PostTitle>
      <S.PostSubTitleWrapper>
        <S.PostSubTitle>{formatRelativeKorean(createdAt)}</S.PostSubTitle>
        <S.PostSubTitle>조회수 {formatCountPlus(viewCount)}</S.PostSubTitle>
      </S.PostSubTitleWrapper>
    </S.PostTitleWrapper>
  );
}
