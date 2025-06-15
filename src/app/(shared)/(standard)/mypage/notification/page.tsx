'use client';

import { useState } from 'react';

import SettingGroup from './_components/SettingGroup/SettingGroup';
import SettingItem from './_components/SettingGroup/SettingItem/SettingItem';
import * as S from './page.styled';

export default function Notification() {
  const [settings, setSettings] = useState({
    push: true,
    sound: true,
    news: true,
    streak: true,
    marketing: true,
  });

  const toggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <S.NotificationContainer>
      <SettingGroup title='사이트 알림'>
        <SettingItem
          label='푸시 알림'
          isActive={settings.push}
          onChange={() => toggle('push')}
        />
        <SettingItem
          label='소리 알림'
          isActive={settings.sound}
          onChange={() => toggle('sound')}
        />
      </SettingGroup>

      <SettingGroup title='카카오톡 알림'>
        <SettingItem
          label='중요한 소식 알림'
          isActive={settings.news}
          onChange={() => toggle('news')}
        />
        <SettingItem
          label='스트릭 리마인드 알림'
          description='시간 설정 10:00PM'
          isActive={settings.streak}
          onChange={() => toggle('streak')}
        />
        <SettingItem
          label='마케팅 수신 동의'
          isActive={settings.marketing}
          onChange={() => toggle('marketing')}
        />
      </SettingGroup>
    </S.NotificationContainer>
  );
}
