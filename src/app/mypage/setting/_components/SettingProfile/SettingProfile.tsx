'use client';

import { ChangeEvent, useRef } from 'react';

import SettingIcon from '@/assets/icons/setting.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import IconButton from '@/components/atoms/IconButton/IconButton';
import { useUploadFileToS3Mutation } from '@/hooks/api/file/useUploadFileToS3';

import S from './SettingProfile.styled';

interface SettingProfileProps {
  imageUrl?: string;
  onUploadComplete: (url: string) => void;
}

export default function SettingProfile({ imageUrl, onUploadComplete }: SettingProfileProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { uploadToS3, isPending } = useUploadFileToS3Mutation({
    onSuccess: onUploadComplete,
  });

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    uploadToS3({ file });
  };

  return (
    <S.SettingProfile>
      <AvatarPerson
        type='icon'
        size='fillContainer'
        src={imageUrl}
      />
      <S.SetImage>
        <IconButton
          size='3.6rem'
          variant='outlined'
          interactionVariant='normal'
          onClick={handleClick}
          isDisabled={isPending}
        >
          <SettingIcon />
        </IconButton>
        <input
          type='file'
          accept='image/*'
          ref={inputRef}
          onChange={handleFileChange}
          disabled={isPending}
          style={{ display: 'none' }}
        />
      </S.SetImage>
    </S.SettingProfile>
  );
}
