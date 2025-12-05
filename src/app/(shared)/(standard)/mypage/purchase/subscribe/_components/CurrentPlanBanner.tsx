import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { UserSubscription } from '@/types/member';

import * as S from './CurrentPlanBanner.styled';

interface CurrentPlanBannerProps {
  subscription: UserSubscription | null;
}

export const CurrentPlanBanner = ({ subscription }: CurrentPlanBannerProps) => {
  const planId = subscription?.planId;
  const isFreePlan = planId === 3;
  const planName = isFreePlan ? '무료플랜' : subscription?.name || '무료플랜';

  return (
    <S.PlanBannerContainer>
      <S.PlanName>
        현재 코그룸 <S.CurrentPlanName>{planName}</S.CurrentPlanName>을 이용하고 있어요.
      </S.PlanName>
    </S.PlanBannerContainer>
  );
};
