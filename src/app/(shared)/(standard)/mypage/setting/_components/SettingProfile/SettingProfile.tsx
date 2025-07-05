'use client';

import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import SettingIcon from '@/assets/icons/setting.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import IconButton from '@/components/atoms/IconButton/IconButton';
import { useDropdown } from '@/hooks/useDropdown';
import { useUploadFileToS3Mutation } from '@/hooks/api/file/useUploadFileToS3';
import { SettingFormFields } from '@/types/form';

import * as S from './SettingProfile.styled';
import MenuDropdown from './MenuDropdown/MenuDropdown';

interface SettingProfileProps {
  initialImageUrl?: string;
}

export default function SettingProfile({ initialImageUrl }: SettingProfileProps) {
  const { setValue, watch } = useFormContext<SettingFormFields>();

  const imageUrl = watch('imageUrl');
  const [preview, setPreview] = useState<string | undefined>(initialImageUrl);

  useEffect(() => {
    if (imageUrl) setPreview(imageUrl);
  }, [imageUrl]);

  const { mutate: uploadToS3, isPending } = useUploadFileToS3Mutation({
    onSuccess: ([url]) => {
      setValue('imageUrl', url, { shouldValidate: true });
      setPreview(url);
    },
  });

  const { isOpen, toggle, close, handleBlur, dropdownRef } = useDropdown();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const triggerSelect = () => fileInputRef.current?.click();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    uploadToS3({ files: [file] });
    close();
  };

  const handleResetToDefault = () => {
    setValue('imageUrl', undefined, { shouldValidate: true });
    setPreview(undefined);
    close();
  };

  return (
    <S.SettingProfile>
      <AvatarPerson
        type='icon'
        size='fillContainer'
        src={preview}
      />

      <input
        ref={fileInputRef}
        type='file'
        accept='image/*'
        style={{ display: 'none' }}
        onChange={handleFileChange}
        disabled={isPending}
      />

      <S.SetImage
        ref={dropdownRef}
        tabIndex={-1}
        onBlur={handleBlur}
      >
        <IconButton
          size='3.6rem'
          variant='outlined'
          interactionVariant='normal'
          onClick={toggle}
          isDisabled={isPending}
        >
          <SettingIcon />
        </IconButton>

        {isOpen && (
          <S.DropdownWrapper>
            <MenuDropdown
              triggerSelect={triggerSelect}
              onResetToDefault={handleResetToDefault}
              isUploading={isPending}
            />
          </S.DropdownWrapper>
        )}
      </S.SetImage>
    </S.SettingProfile>
  );
}
