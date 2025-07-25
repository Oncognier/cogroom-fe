'use client';

import Image from 'next/image';

import Loading from '@/components/organisms/Loading/Loading';
import { REPORT_IMAGE } from '@/constants/image';
import useGetUserDashboardQuery from '@/hooks/api/member/useGetUserDashboard';

import ContentRecordToggle from './_components/ContentRecordToggle/ContentRecordToggle';
import StreakSummaryCard from './_components/StreakSummaryCard/StreakSummaryCard';
import * as S from './page.styled';

export default function Dashboard() {
  const { data, isLoading, isError } = useGetUserDashboardQuery();

  if (isLoading || isError) return <Loading />;

  return (
    <S.DashboardContainer>
      <S.TextWrapper>
        <S.StreakWrapper>
          <S.StreakMessage>코그룸과</S.StreakMessage>
          <S.Highlight>{data?.signupDays}일째</S.Highlight>
          <S.StreakMessage>함께 했어요</S.StreakMessage>
        </S.StreakWrapper>
        <S.GreetingMessage>안녕하세요, {data?.nickname}님</S.GreetingMessage>
        <S.ChronotypeMessage>생각하는 방, 코그룸에서 한 방울씩 성장하는 나를 만나봐요</S.ChronotypeMessage>
      </S.TextWrapper>

      <S.Report>
        <Image
          src={REPORT_IMAGE}
          alt='streakBackground'
          fill
          style={{ objectFit: 'cover' }}
        />
      </S.Report>

      <S.SummarySectionWrapper>
        <StreakSummaryCard dailyStreak={data?.dailyStreak || 0} />
        <ContentRecordToggle />
      </S.SummarySectionWrapper>
    </S.DashboardContainer>
  );
}
