import Switch from '@/components/atoms/Switch/Switch';

import * as S from './SettingItem.styled';

interface SettingItemProps {
  label: string;
  isActive: boolean;
  onChange: () => void;
  disabled?: boolean;
}

export default function SettingItem({ label, isActive, onChange, disabled }: SettingItemProps) {
  return (
    <S.SettingItem>
      <S.Label>{label}</S.Label>
      <Switch
        size='md'
        isActive={isActive}
        isDisabled={disabled}
        onChange={onChange}
      />
    </S.SettingItem>
  );
}
