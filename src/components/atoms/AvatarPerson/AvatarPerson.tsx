'use client';

import Image from 'next/image';

import { DEFAULT_AVATAR_IMAGE } from '@/constants/image';

import S, { AvatarPersonStyleProps } from './AvatarPerson.styled';

interface AvatarPersonProps extends AvatarPersonStyleProps {
  src?: string;
}

export default function AvatarPerson({ type, src = DEFAULT_AVATAR_IMAGE, size }: AvatarPersonProps) {
  return (
    <S.AvatarPerson
      type={type}
      size={size}
    >
      <Image
        src={src}
        alt='avatar'
        fill
      />
    </S.AvatarPerson>
  );
}
