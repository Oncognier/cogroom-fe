'use client';

import useGetUserSubscription from '@/hooks/api/member/useGetUserSubscription';

import { CurrentPlanBanner } from './_components/CurrentPlanBanner';
import { PlanDescription } from './_components/PlanDescription';
import SettingGroup from '../../notification/_components/SettingGroup/SettingGroup';

export default function Subscribe() {
  const { data: subscription, error } = useGetUserSubscription();

  return (
    <>
      <SettingGroup title='나의 플랜'>
        <CurrentPlanBanner subscription={subscription ?? null} />
      </SettingGroup>
      <SettingGroup title='구독 관리'>
        <PlanDescription subscription={subscription ?? null} />
      </SettingGroup>
    </>
  );
}
