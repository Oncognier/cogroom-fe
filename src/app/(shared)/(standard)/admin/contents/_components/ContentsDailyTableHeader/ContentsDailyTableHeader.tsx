import Checkbox from '@/components/atoms/Checkbox/Checkbox';

import * as S from './ContentsDailyTableHeader.styled';

interface ContentsDailyTableHeaderProps {
  checked: boolean;
  onCheckToggle: (checked: boolean) => void;
}

export default function ContentsDailyTableHeader({ checked, onCheckToggle }: ContentsDailyTableHeaderProps) {
  return (
    <S.ContentsDailyTableHeader>
      <Checkbox
        size='nm'
        isChecked={checked}
        onToggle={onCheckToggle}
        interactionVariant='normal'
      />

      <S.CategoryText>카테고리</S.CategoryText>
      <S.ExpandText>질문 내용</S.ExpandText>
      <S.FixText>난이도</S.FixText>
    </S.ContentsDailyTableHeader>
  );
}
