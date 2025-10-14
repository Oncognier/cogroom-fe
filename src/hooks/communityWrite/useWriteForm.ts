import { useForm, UseFormSetValue, UseFormWatch, UseFormReset, FieldErrors } from 'react-hook-form';

import { CommunityWriteFormData } from '@/types/communityWrite';

export interface UseWriteFormProps {
  defaultValues: CommunityWriteFormData;
}

export interface UseWriteFormReturn {
  methods: ReturnType<typeof useForm<CommunityWriteFormData>>;
  setValue: UseFormSetValue<CommunityWriteFormData>;
  watch: UseFormWatch<CommunityWriteFormData>;
  reset: UseFormReset<CommunityWriteFormData>;
  errors: FieldErrors<CommunityWriteFormData>;
}

export const useWriteForm = ({ defaultValues }: UseWriteFormProps): UseWriteFormReturn => {
  const methods = useForm<CommunityWriteFormData>({
    mode: 'onSubmit',
    defaultValues,
  });

  const {
    setValue,
    watch,
    reset,
    formState: { errors },
  } = methods;

  return {
    methods,
    setValue,
    watch,
    reset,
    errors,
  };
};
