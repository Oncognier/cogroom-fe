import Checkbox from '@/components/atoms/Checkbox/Checkbox';

import * as S from './UserTableHeader.styled';

interface UserTableHeaderProps {
  checked: boolean;
  onCheckToggle: (checked: boolean) => void;
}

export default function UserTableHeader({ checked, onCheckToggle }: UserTableHeaderProps) {
  return (
    <S.UserTableHeader>
      <Checkbox
        size='nm'
        isChecked={checked}
        onToggle={onCheckToggle}
        interactionVariant='normal'
      />
      <S.FixText>회원 번호</S.FixText>
      <S.FixText>프로필</S.FixText>
      <S.ExpandText>회원 정보</S.ExpandText>
      <S.FixText>가입일</S.FixText>
    </S.UserTableHeader>
  );
}
