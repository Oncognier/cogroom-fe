import DotsVertical from '@/assets/icons/dots-vertical.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import IconButton from '@/components/atoms/IconButton/IconButton';
import SolidTag from '@/components/atoms/SolidTag/SolidTag';
import { Category, CATEGORY_META } from '@/constants/common';
import { DailyContent } from '@/types/daily';

import * as S from './DailyListRow.styled';

interface DailyListRowProps {
  daily: DailyContent;
  checked: boolean;
  onCheckToggle: (checked: boolean) => void;
}

export default function DailyListRow({ daily, checked, onCheckToggle }: DailyListRowProps) {
  const { assignedQuestionId, questionId, nickname, imageUrl, question, level, categories, answeredAt } = daily;

  return (
    <S.DailyListRow>
      <Checkbox
        size='nm'
        isChecked={checked}
        onToggle={onCheckToggle}
        interactionVariant='normal'
      />

      {nickname && imageUrl && (
        <S.MemberInfoWrapper>
          <AvatarPerson
            type='image'
            size='fillContainer'
            src={imageUrl}
          />
          <S.Nickname>{nickname}</S.Nickname>
        </S.MemberInfoWrapper>
      )}

      <S.TagWrapper>
        {categories.map((category) => (
          <SolidTag
            key={category}
            color={CATEGORY_META[category as Category].color}
            label={CATEGORY_META[category as Category].label}
          />
        ))}
      </S.TagWrapper>

      <S.Question>{question}</S.Question>

      <S.Text>{level}</S.Text>

      {answeredAt && <S.Text>{answeredAt}</S.Text>}

      <IconButton
        size='3rem'
        variant='normal'
        interactionVariant='normal'
      >
        <DotsVertical />
      </IconButton>
    </S.DailyListRow>
  );
}
