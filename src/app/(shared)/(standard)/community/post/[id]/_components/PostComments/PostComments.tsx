import * as S from './PostComments.styled';

interface PostCommentsProps {
  commentCount: number;
}

export default function PostComments({ commentCount }: PostCommentsProps) {
  return (
    <S.PostCommentsWrapper>
      <S.CommentsHeader>댓글 {commentCount}개</S.CommentsHeader>

      <S.EmptyComments>댓글 기능 개발 예정</S.EmptyComments>
    </S.PostCommentsWrapper>
  );
}
