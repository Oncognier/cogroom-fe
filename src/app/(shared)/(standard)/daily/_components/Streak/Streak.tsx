import Image from 'next/image';

import { DEFAULT_WATERDROP } from '@/constants/image';
import { formatDayAsSlashYYMMDD } from '@/utils/date/formatDay';

import * as S from './Streak.styled';

interface StreakProps {
  dailyStreak: number;
}

export default function Streak({ dailyStreak }: StreakProps) {
  const today = new Date();
  const formattedDate = formatDayAsSlashYYMMDD(today);

  return (
    <S.StreakCard>
      <S.ContentWrapper>
        <S.CountWrapper>
          <Image
            src={DEFAULT_WATERDROP}
            alt='waterdrop'
            width={11}
            height={14}
          />
          <p>{dailyStreak}</p>
        </S.CountWrapper>
        <S.MessageWrapper>
          <S.MessageContinue>연속</S.MessageContinue>
          <S.MessageDate>{dailyStreak}일째</S.MessageDate>
          <S.Message>코그룸에서 나만의 바다를 만들어보세요</S.Message>
        </S.MessageWrapper>

        <S.DateText>{formattedDate}</S.DateText>
      </S.ContentWrapper>
    </S.StreakCard>
  );
}
