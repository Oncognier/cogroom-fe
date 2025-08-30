'use client';
import { useEffect, useRef, useState } from 'react';

import OutlinedButton from '@/components/atoms/OutlinedButton/OutlinedButton';
import SolidButton from '@/components/atoms/SolidButton/SolidButton';
import { formatToDigits } from '@/utils/formatText';

import * as S from './TimeSelect.styled';

interface AlarmSelectProps {
  streakTime: string;
  onSelect: (hour: string, minute: string) => void;
  onClose: () => void;
}

export default function TimeSelect({ streakTime, onSelect, onClose }: AlarmSelectProps) {
  const convertTimeToWheelIndices = (time: string) => {
    const [hour, minute] = time.split(':');
    const meridiem = parseInt(hour) >= 12 ? 1 : 0;
    return {
      hour: parseInt(hour) % 12,
      minute: parseInt(minute) / 10,
      meridiem,
    };
  };

  const { hour, minute, meridiem } = convertTimeToWheelIndices(streakTime);

  const [meridiemIndex, setMeridiemIndex] = useState(meridiem);
  const [hourIndex, setHourIndex] = useState(hour);
  const [minuteIndex, setMinuteIndex] = useState(minute);

  const meridiemList = ['AM', 'PM'];

  // TODO: 추후 무한 스크롤로 구현
  const hourList: string[] = Array.from({ length: 12 }, (_, i) => formatToDigits(i, 2));
  const minuteList: string[] = Array.from({ length: 6 }, (_, i) => formatToDigits(i * 10, 2));

  const meridiemRef = useRef<HTMLDivElement | null>(null);
  const hourRef = useRef<HTMLDivElement | null>(null);
  const minuteRef = useRef<HTMLDivElement | null>(null);

  const isProgScrollRef = useRef(false);

  // TODO: 추후 데일리 리마인드 api 연결
  const handleConfirm = () => {
    let selectedHour = hourList[hourIndex];
    if (meridiemIndex === 1) {
      selectedHour = (parseInt(hourList[hourIndex]) + 12).toString();
    }
    onClose();
    onSelect(selectedHour, minuteList[minuteIndex]);
  };

  const ITEM_PX = 36;

  const scrollToIndex = (ref: React.RefObject<HTMLDivElement | null>, index: number) => {
    const el = ref.current;
    if (!el) return;
    isProgScrollRef.current = true;
    el.scrollTo({ top: index * ITEM_PX });
    const t = setTimeout(() => {
      isProgScrollRef.current = false;
    }, 0);
    return () => clearTimeout(t);
  };

  useEffect(() => scrollToIndex(meridiemRef, meridiemIndex), [meridiemIndex]);
  useEffect(() => scrollToIndex(hourRef, hourIndex), [hourIndex]);
  useEffect(() => scrollToIndex(minuteRef, minuteIndex), [minuteIndex]);

  const makeScrollHandler =
    (selected: number, setSelected: React.Dispatch<React.SetStateAction<number>>) =>
    (e: React.UIEvent<HTMLDivElement>) => {
      if (isProgScrollRef.current) return;
      const top = (e.currentTarget as HTMLDivElement).scrollTop;
      const next = Math.round(top / ITEM_PX);
      if (next !== selected) setSelected(next);
    };

  const handleClick = (
    ref: React.RefObject<HTMLDivElement | null>,
    index: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    scrollToIndex(ref, index);
    setIndex(index);
  };

  return (
    <S.AlarmSelect>
      <S.Container>
        <S.TimeWrapper>
          <S.TextWrapper>
            <S.Title>데일리 스트릭 리마인드</S.Title>
            <S.SubTitle>잊지 않도록 알림을 보내드려요</S.SubTitle>
          </S.TextWrapper>
          <S.TimeInput>
            {meridiemList[meridiemIndex]} {hourList[hourIndex]}:{minuteList[minuteIndex]}
          </S.TimeInput>
        </S.TimeWrapper>
        <S.WheelPicker>
          <S.Wheel>
            <S.WheelScroll
              ref={meridiemRef}
              onWheel={makeScrollHandler(meridiemIndex, setMeridiemIndex)}
            >
              {meridiemList.map((m, i) => (
                <S.WheelItem
                  key={`meridiem-${m}`}
                  $selected={meridiemIndex === i}
                  onClick={() => handleClick(meridiemRef, i, setMeridiemIndex)}
                >
                  {m}
                </S.WheelItem>
              ))}
            </S.WheelScroll>
            <S.WheelSelection />
          </S.Wheel>
          <S.Wheel>
            <S.WheelScroll
              ref={hourRef}
              onWheel={makeScrollHandler(hourIndex, setHourIndex)}
            >
              {hourList.map((h, i) => (
                <S.WheelItem
                  key={`hour-${h}`}
                  $selected={hourIndex === i}
                  onClick={() => handleClick(hourRef, i, setHourIndex)}
                >
                  {h}
                </S.WheelItem>
              ))}
            </S.WheelScroll>
            <S.WheelSelection />
          </S.Wheel>
          <S.Wheel>
            <S.WheelScroll
              ref={minuteRef}
              onWheel={makeScrollHandler(minuteIndex, setMinuteIndex)}
            >
              {minuteList.map((mi, i) => (
                <S.WheelItem
                  key={`minute-${mi}`}
                  $selected={minuteIndex === i}
                  onClick={() => handleClick(minuteRef, i, setMinuteIndex)}
                >
                  {mi}
                </S.WheelItem>
              ))}
            </S.WheelScroll>
            <S.WheelSelection />
          </S.Wheel>
        </S.WheelPicker>
        <S.ButtonWrapper>
          <OutlinedButton
            size='sm'
            label='취소'
            interactionVariant='normal'
            color='assistive'
            fillContainer
            onClick={onClose}
          />
          <SolidButton
            size='sm'
            label='확인'
            interactionVariant='normal'
            fillContainer
            onClick={handleConfirm}
          />
        </S.ButtonWrapper>
      </S.Container>
    </S.AlarmSelect>
  );
}
