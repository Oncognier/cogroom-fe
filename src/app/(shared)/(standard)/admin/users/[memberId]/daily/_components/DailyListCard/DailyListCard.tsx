'use client';

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

import * as S from './DailyListCard.styled';

interface DailyListCardProps {
  daily: DailyContent;
  checked: boolean;
  onCheckToggle: (checked: boolean) => void;
}

export default function DailyListCard({ daily, checked, onCheckToggle }: DailyListCardProps) {
  const { nickname, imageUrl, question, level, categories, answer, answeredAt } = daily;

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((v) => !v);

  return (
    <S.DailyListCard>
      <S.QuestionInfoWrapper $open={isOpen}>
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

        <S.QuestionWrapper onClick={toggle}>
          <S.Question>{question}</S.Question>
          <S.Icon>{isOpen ? <ChevronUp /> : <ChevronDown />}</S.Icon>
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

      {isOpen && (
        <Textarea
          textareaSize='md'
          placeholder={answer ?? ''}
          minHeight='15.5rem'
          disabled
          autoResize
          style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        />
      )}
    </S.DailyListCard>
  );
}
