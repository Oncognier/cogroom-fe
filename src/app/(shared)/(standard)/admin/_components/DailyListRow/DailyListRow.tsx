import { useState } from 'react';

import ChevronDown from '@/assets/icons/chevrondown.svg';
import ChevronUp from '@/assets/icons/chevronup.svg';
import DotsVertical from '@/assets/icons/dots-vertical.svg';
import AvatarPerson from '@/components/atoms/AvatarPerson/AvatarPerson';
import Checkbox from '@/components/atoms/Checkbox/Checkbox';
import IconButton from '@/components/atoms/IconButton/IconButton';
import SolidTag from '@/components/atoms/SolidTag/SolidTag';
import { Textarea } from '@/components/molecules/Textarea/Textarea.styled';
import { Category, CATEGORY_META, Level, LEVEL_META } from '@/constants/common';
import { DailyContent } from '@/types/daily';
import { formatDayAsSlashYYMMDD } from '@/utils/date/formatDay';

import * as S from './DailyListRow.styled';

interface DailyListRowProps {
  type?: 'row' | 'card';
  daily: DailyContent;
  checked: boolean;
  onCheckToggle: (checked: boolean) => void;
}

export default function DailyListRow({ type = 'row', daily, checked, onCheckToggle }: DailyListRowProps) {
  const { nickname, imageUrl, question, level, categories, answer, answeredAt } = daily;

  const [isOpen, setIsOpen] = useState(false);
  const canToggle = type === 'card' && Boolean(answer);

  const toggleOpen = () => {
    if (!canToggle) return;
    setIsOpen((prev) => !prev);
  };

  return (
    <S.DailyListRow>
      <S.QuestionInfoWrapper
        $variant={type}
        $open={isOpen}
      >
        <Checkbox
          size='nm'
          isChecked={checked}
          onToggle={onCheckToggle}
          interactionVariant='normal'
        />

        {nickname && (
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
              round
            />
          ))}
        </S.TagWrapper>

        <S.QuestionWrapper
          $clickable={canToggle}
          onClick={canToggle ? toggleOpen : undefined}
        >
          <S.Question>{question}</S.Question>
          {canToggle && <S.Icon>{isOpen ? <ChevronUp /> : <ChevronDown />}</S.Icon>}
        </S.QuestionWrapper>

        <S.Text>{LEVEL_META[level as Level]?.label}</S.Text>

        {answeredAt && <S.Text>{formatDayAsSlashYYMMDD(answeredAt)}</S.Text>}

        <IconButton
          size='3rem'
          variant='normal'
          interactionVariant='normal'
        >
          <DotsVertical />
        </IconButton>
      </S.QuestionInfoWrapper>

      {canToggle && isOpen && (
        <Textarea
          textareaSize='md'
          placeholder={answer}
          minHeight='15.5rem'
          disabled
          autoResize
          style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        />
      )}
    </S.DailyListRow>
  );
}
