import Image from 'next/image';

import { DEFAULT_THUMBNAIL } from '@/constants/image';

import * as S from './Thumbnail.styled';
import type { ThumbnailStyleProps } from './Thumbnail.styled';

interface ThumbnailProps extends ThumbnailStyleProps {
  src?: string;
  alt?: string;
}

export default function Thumbnail({
  src = DEFAULT_THUMBNAIL,
  alt = 'thumbnail',
  ratio = '1_1',
  border = false,
  radius = false,
}: ThumbnailProps) {
  return (
    <S.Thumbnail
      ratio={ratio}
      border={border}
      radius={radius}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
      />
    </S.Thumbnail>
  );
}
