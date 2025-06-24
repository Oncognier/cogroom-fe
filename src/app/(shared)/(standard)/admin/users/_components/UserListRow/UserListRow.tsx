import DotsVertical from '@/assets/icons/dots-vertical.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import IconButton from '@/components/atoms/IconButton/IconButton';
import OutlinedTag from '@/components/atoms/OutlinedTag/OutlinedTag';
import SolidTag from '@/components/atoms/SolidTag/SolidTag';
import { USER_ROLE_META, UserRole } from '@/constants/common';

import * as S from './UserListRow.styled';

interface Props {
  name: string;
  email: string;
  role: UserRole;
  joinedAt: string;
  checked: boolean;
  onCheckToggle: (checked: boolean) => void;
}

export default function UserListRow({ name, email, role, joinedAt, checked, onCheckToggle }: Props) {
  const roleMeta = USER_ROLE_META[role];

  return (
    <S.UserListRow>
      <Checkbox
        size='md'
        isChecked={checked}
        onToggle={onCheckToggle}
        interactionVariant='normal'
      />

      <S.AvatarWrapper>
        <AvatarPerson
          type='image'
          size='md'
        />
      </S.AvatarWrapper>

      <S.UserInfoWrapper>
        <S.UserNameWithRole>
          <S.UserName>{name}</S.UserName>

          {roleMeta.tagType === 'solid' ? (
            <SolidTag
              color={roleMeta.color}
              label={roleMeta.label}
            />
          ) : (
            <OutlinedTag
              color={roleMeta.color}
              label={roleMeta.label}
            />
          )}
        </S.UserNameWithRole>

        <S.Email>{email}</S.Email>
      </S.UserInfoWrapper>

      <S.JoinedAt>{joinedAt}</S.JoinedAt>

      <IconButton
        size='3rem'
        variant='normal'
        interactionVariant='normal'
      >
        <DotsVertical />
      </IconButton>
    </S.UserListRow>
  );
}
