import { UserSubscription } from '@/types/member';

import * as S from './CurrentPlanBanner.styled';

interface CurrentPlanBannerProps {
  subscription: UserSubscription | null;
}

export const CurrentPlanBanner = ({ subscription }: CurrentPlanBannerProps) => {
  const planId = subscription?.planId;

  const getPlanName = (id: number | undefined) => {
    switch (id) {
      case 1:
        return '프리미엄 플랜(월간 구독)';
      case 2:
        return '프리미엄 플랜(연간 구독)';
      case 3:
        return '무료플랜';
      default:
        return '무료플랜';
    }
  };

  const planName = getPlanName(planId);

  return (
    <S.PlanBannerContainer>
      <S.PlanName>
        현재 코그룸 <S.CurrentPlanName>{planName}</S.CurrentPlanName>을 이용하고 있어요.
      </S.PlanName>
    </S.PlanBannerContainer>
  );
};
