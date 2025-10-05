'use client';

import { useState } from 'react';

import SettingGroup from './_components/SettingGroup/SettingGroup';
import SettingItem from './_components/SettingGroup/SettingItem/SettingItem';
import TimeWheelPicker from './_components/TimeWheelPicker/TimeWheelPicker';
import * as S from './page.styled';

export default function Notification() {
  const [settings, setSettings] = useState({
    pushEnabled: false,
    soundEnabled: false,
    importantNewsEnabled: false,
    streakReminderEnabled: false,
    streakReminderTime: '23:30',
    marketingAgreementEnabled: false,
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // TODO: 추후 데일리 리마인드 api 연결
  const handleSelectStreakReminderTime = (hour: string, minute: string) => {
    setSettings((prev) => ({ ...prev, streakReminderTime: `${hour}:${minute}` }));
  };

  return (
    <S.NotificationContainer>
      <SettingGroup title='사이트 알림'>
        <SettingItem
          label='푸시 알림'
          isActive={settings.pushEnabled}
          onChange={() => toggle('pushEnabled')}
        />
        <SettingItem
          label='소리 알림'
          isActive={settings.soundEnabled}
          onChange={() => toggle('soundEnabled')}
        />
      </SettingGroup>

      <SettingGroup title='카카오톡 알림'>
        <SettingItem
          label='중요한 소식 알림'
          isActive={settings.importantNewsEnabled}
          onChange={() => toggle('importantNewsEnabled')}
        />
        <SettingItem
          label='스트릭 리마인드 알림'
          isActive={settings.streakReminderEnabled}
          onChange={() => toggle('streakReminderEnabled')}
        >
          <TimeWheelPicker
            streakTime={settings.streakReminderTime}
            disabled={!settings.streakReminderEnabled}
            onSelect={handleSelectStreakReminderTime}
          />
        </SettingItem>
        <SettingItem
          label='마케팅 수신 동의'
          isActive={settings.marketingAgreementEnabled}
          onChange={() => toggle('marketingAgreementEnabled')}
        />
      </SettingGroup>
    </S.NotificationContainer>
  );
}
