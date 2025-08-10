import Image from 'next/image';

import { DEFAULT_AVATAR_IMAGE } from '@/constants/image';

import * as S from './AvatarPerson.styled';
import type { AvatarPersonStyleProps } from './AvatarPerson.styled';

interface AvatarPersonProps extends AvatarPersonStyleProps {
  src?: string;
  onClick?: () => void;
}

export default function AvatarPerson({ type, src = DEFAULT_AVATAR_IMAGE, size, onClick }: AvatarPersonProps) {
  return (
    <S.AvatarPerson
      type={type}
      size={size}
      onClick={onClick}
    >
      <S.AvatarImage
        src={src || DEFAULT_AVATAR_IMAGE}
        alt='avatar'
        fill
      />
    </S.AvatarPerson>
  );
}
