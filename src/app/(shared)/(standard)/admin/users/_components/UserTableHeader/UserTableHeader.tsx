import Checkbox from '@/components/atoms/Checkbox/Checkbox';

import * as S from './UserTableHeader.styled';

interface Props {
  checked: boolean;
  onCheckToggle: (checked: boolean) => void;
}

export default function UserTableHeader({ checked, onCheckToggle }: Props) {
  return (
    <S.UserTableHeader>
      <Checkbox
        size='nm'
        isChecked={checked}
        onToggle={onCheckToggle}
        interactionVariant='normal'
      />

      <S.FixText>프로필</S.FixText>
      <S.ExpandText>회원 정보</S.ExpandText>
      <S.FixText>가입일</S.FixText>
    </S.UserTableHeader>
  );
}
