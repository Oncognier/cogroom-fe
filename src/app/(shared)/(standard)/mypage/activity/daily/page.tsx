'use client';

import ScriptX from '@/assets/icons/script-x.svg';
import EmptyState from '@/components/organisms/EmptyState/EmptyState';
import Loading from '@/components/organisms/Loading/Loading';
import useGetUserDailyQuery from '@/hooks/api/member/useGetUserDaily';

import DailyQuestionCard from './_components/DailyQuestionCard/DailyQuestionCard';
import * as S from './page.styled';

export default function Daily() {
  const { data, isLoading, isError } = useGetUserDailyQuery();

  if (isLoading || isError) return <Loading />;
  if (!data?.length) return <EmptyState icon={<ScriptX />} />;

  return (
    <S.DailyContainer>
      {data.map(({ question, answer, assignedDate }, index) => (
        <DailyQuestionCard
          key={assignedDate}
          question={question}
          answer={answer}
          assignedDate={assignedDate}
          initialOpen={index === 0}
        />
      ))}
    </S.DailyContainer>
  );
}
