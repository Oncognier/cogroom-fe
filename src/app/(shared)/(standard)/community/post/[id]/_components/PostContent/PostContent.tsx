import dompurify from 'dompurify';
import parse from 'html-react-parser';

import * as S from './PostContent.styled';

interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
  return <S.PostContentViewBox>{parse(dompurify.sanitize(content, { ADD_ATTR: ['style'] }))}</S.PostContentViewBox>;
}
