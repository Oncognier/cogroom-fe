import { FieldValues, Path, UseFormSetError } from 'react-hook-form';

import { HTTPError } from '@/api/axios/errors/HTTPError';
import { VALIDATION_FIELD_MAP, VALIDATION_MESSAGE, ValidationErrorKey } from '@/constants/validationMessages';
import { useAlertModalStore } from '@/stores/useModalStore';

export function setValidationError<FormFields extends FieldValues>(
  error: unknown,
  setError?: UseFormSetError<FormFields>,
) {
  if (!(error instanceof HTTPError)) return;

  const { open } = useAlertModalStore.getState();

  const code = error.code as ValidationErrorKey;
  const field = VALIDATION_FIELD_MAP[code];

  if (field && setError) {
    setError(field as Path<FormFields>, {
      message: VALIDATION_MESSAGE[code],
    });
  } else {
    open('error', { message: error.message });
  }
}
