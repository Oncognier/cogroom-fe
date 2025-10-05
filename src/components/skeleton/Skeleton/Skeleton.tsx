import * as S from './Skeleton.styled';

interface SkeletonProps {
  width?: string;
  height?: string;
  margin?: string;
  borderRadius?: string;
}

export default function Skeleton(props: SkeletonProps) {
  return (
    <S.SkeletonLine
      width={props.width}
      height={props.height}
      margin={props.margin}
      borderRadius={props.borderRadius}
    />
  );
}
