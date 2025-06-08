import Image from 'next/image';

import { DEFAULT_WATERDROP } from '@/constants/image';

import * as S from './Streak.styled';
import { formatDayAsYYMMDD } from '../../_utils/formatDay';

interface StreakProps {
  streaksDays: number;
}

export default function Streak({ streaksDays }: StreakProps) {
  const today = new Date();

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
          <p>{streaksDays}</p>
        </S.CountWrapper>
        <S.MessageWrapper>
          <S.MessageContinue>연속</S.MessageContinue>
          <S.MessageDate>{streaksDays}일째</S.MessageDate>
          <S.Message>꾸준히 하고 계시네요, 앞으로도 저희와 함께 해요!</S.Message>
        </S.MessageWrapper>

        <S.DateText>{formatDayAsYYMMDD(today)}</S.DateText>
      </S.ContentWrapper>
    </S.StreakCard>
  );
}
