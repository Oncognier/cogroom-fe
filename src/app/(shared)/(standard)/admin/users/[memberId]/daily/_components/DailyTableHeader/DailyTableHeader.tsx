import Checkbox from '@/components/atoms/Checkbox/Checkbox';

import * as S from './DailyTableHeader.styled';

interface DailyTableHeaderProps {
  checked: boolean;
  onCheckToggle: (checked: boolean) => void;
}

export default function DailyTableHeader({ checked, onCheckToggle }: DailyTableHeaderProps) {
  return (
    <S.DailyTableHeader>
      <Checkbox
        size='nm'
        isChecked={checked}
        onToggle={onCheckToggle}
        interactionVariant='normal'
      />

      <S.FixText>작성자</S.FixText>
      <S.CategoryText>카테고리</S.CategoryText>
      <S.ExpandText>질문 내용</S.ExpandText>
      <S.FixText>난이도</S.FixText>
      <S.FixText>업데이트일</S.FixText>
    </S.DailyTableHeader>
  );
}
