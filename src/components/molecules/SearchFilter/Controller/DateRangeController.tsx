'use client';

import { useController, useWatch, type Control } from 'react-hook-form';

import SelectDateRange from '@/components/molecules/SelectDateRange/SelectDateRange';

import type { FilterValues } from '../SearchFilter.types';

interface DateRangeControllerProps {
  control: Control<FilterValues>;
  startName: string;
  endName: string;
}

export default function DateRangeController({ control, startName, endName }: DateRangeControllerProps) {
  const { field: startField } = useController({ control, name: startName });
  const { field: endField } = useController({ control, name: endName });

  const start = useWatch({ control, name: startName }) as Date | null;
  const end = useWatch({ control, name: endName }) as Date | null;

  return (
    <SelectDateRange
      selectedStartDate={start || null}
      selectedEndDate={end || null}
      onStartDateChange={(d) => startField.onChange(d)}
      onEndDateChange={(d) => endField.onChange(d)}
    />
  );
}
