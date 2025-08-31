'use client';

import { useEffect, useState } from 'react';

import ChevronDown from '@/assets/icons/chevrondown.svg';
import ChevronUp from '@/assets/icons/chevronup.svg';
import { useDropdown } from '@/hooks/useDropdown';
import { formatToDigits } from '@/utils/formatText';

import TimeWheel from './TimeWheel/TimeWheel';
import * as S from './TimeWheelPicker.styled';

interface TimeWheelPickerProps {
  streakTime: string;
  disabled: boolean;
  onSelect: (hour: string, minute: string) => void;
}

export default function SelectAlarm({ streakTime, disabled, onSelect }: TimeWheelPickerProps) {
  const { isOpen, toggle, close, handleBlur, dropdownRef } = useDropdown();

  const [selectedStreakTime, setSelectedStreakTime] = useState(streakTime);

  const formatTime = (time: string) => {
    const [hour, minute] = time.split(':');
    const meridiem = parseInt(hour) >= 12 ? 'PM' : 'AM';
    const formattedHour =
      parseInt(hour) >= 12 ? formatToDigits(parseInt(hour) - 12, 2) : formatToDigits(parseInt(hour), 2);
    return `${formattedHour}:${minute} ${meridiem}`;
  };

  useEffect(() => {
    disabled && close();
  }, [disabled, close]);

  return (
    <S.TimeWheelPicker>
      <S.InputContainer
        ref={dropdownRef}
        onClick={() => !disabled && toggle()}
        onBlur={handleBlur}
        disabled={disabled}
      >
        <S.Text>시간 설정 {formatTime(streakTime)}</S.Text>
        <S.Icon>{isOpen ? <ChevronDown /> : <ChevronUp />}</S.Icon>
      </S.InputContainer>
      {isOpen && (
        <S.AlarmPopup>
          <TimeWheel
            streakTime={selectedStreakTime}
            onSelect={(hour, minute) => {
              setSelectedStreakTime(`${hour}:${minute}`);
              onSelect(hour, minute);
            }}
            onClose={close}
          />
        </S.AlarmPopup>
      )}
    </S.TimeWheelPicker>
  );
}
