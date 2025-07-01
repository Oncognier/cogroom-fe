'use client';

import { ChangeEvent, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import SettingIcon from '@/assets/icons/setting.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import IconButton from '@/components/atoms/IconButton/IconButton';
import { useUploadFileToS3Mutation } from '@/hooks/api/file/useUploadFileToS3';
import { SettingFormFields } from '@/types/form';

import * as S from './SettingProfile.styled';

export default function SettingProfile() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setValue, watch } = useFormContext<SettingFormFields>();

  const imageUrl = watch('imageUrl');
  const [preview, setPreview] = useState<string | undefined>(imageUrl);

  const { mutate: uploadToS3, isPending } = useUploadFileToS3Mutation({
    onSuccess: ([url]) => {
      setValue('imageUrl', url, { shouldValidate: true });
      setPreview(url);
    },
  });

  const handleClick = () => inputRef.current?.click();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));

    uploadToS3({ files: [file] });
  };

  return (
    <S.SettingProfile>
      <AvatarPerson
        type='icon'
        size='fillContainer'
        src={preview}
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
          ref={inputRef}
          type='file'
          accept='image/*'
          style={{ display: 'none' }}
          onChange={handleChange}
          disabled={isPending}
        />
      </S.SetImage>
    </S.SettingProfile>
  );
}
