import { useRouter } from 'next/navigation';

import DotsVertical from '@/assets/icons/dots-vertical.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import IconButton from '@/components/atoms/IconButton/IconButton';
import OutlinedTag from '@/components/atoms/OutlinedTag/OutlinedTag';
import SolidTag from '@/components/atoms/SolidTag/SolidTag';
import { USER_ROLE_META } from '@/constants/common';
import { useAlertModalStore } from '@/stores/useModalStore';
import { Member } from '@/types/admin';
import { formatDayAsSlashYYYYMMDD } from '@/utils/date/formatDay';
import { formatToDigits } from '@/utils/formatText';

import * as S from './UserListRow.styled';

interface UserListRowProps {
  member: Member;
  checked: boolean;
  onCheckToggle: (checked: boolean) => void;
}

export default function UserListRow({ member, checked, onCheckToggle }: UserListRowProps) {
  const router = useRouter();
  const { open } = useAlertModalStore();
  const { memberId, nickname, email, imageUrl, memberRole, createdAt } = member;
  const roleMeta = USER_ROLE_META[memberRole];

  const handleClickRow = () => {
    router.push(`/admin/users/${memberId}/daily`);
  };

  return (
    <S.UserListRow onClick={handleClickRow}>
      <Checkbox
        size='nm'
        isChecked={checked}
        onToggle={onCheckToggle}
        interactionVariant='normal'
        stopPropagation
      />

      <S.Text>{formatToDigits(memberId, 6)}</S.Text>

      <S.AvatarWrapper>
        <AvatarPerson
          type='image'
          size='md'
          src={imageUrl}
        />
      </S.AvatarWrapper>

      <S.UserInfoWrapper>
        <S.UserNameWithRole>
          <S.UserName>{nickname}</S.UserName>
          {roleMeta.tagType === 'solid' ? (
            <SolidTag
              color={roleMeta.color}
              label={roleMeta.label}
              onClick={() => open('changeRole', { memberId, nickname, currentRole: memberRole })}
              stopPropagation
            />
          ) : (
            <OutlinedTag
              color={roleMeta.color}
              label={roleMeta.label}
              onClick={() => open('changeRole', { memberId, nickname, currentRole: memberRole })}
              stopPropagation
            />
          )}
        </S.UserNameWithRole>
        <S.Email>{email}</S.Email>
      </S.UserInfoWrapper>

      <S.Text>{formatDayAsSlashYYYYMMDD(createdAt)}</S.Text>

      <IconButton
        size='3rem'
        variant='normal'
        interactionVariant='normal'
        stopPropagation
      >
        <DotsVertical />
      </IconButton>
    </S.UserListRow>
  );
}
