import { FieldValues, Path, UseFormSetError } from 'react-hook-form';
import { VALIDATION_FIELD_MAP, VALIDATION_MESSAGE, ValidationErrorKey } from '@/constants/validationMessages';
import { HTTPError } from '@/api/axios/errors/HTTPError';

export function setValidationError<FormFields extends FieldValues>(
  error: unknown,
  setError?: UseFormSetError<FormFields>,
) {
  if (!(error instanceof HTTPError)) return;

  const code = error.code as ValidationErrorKey;
  const field = VALIDATION_FIELD_MAP[code];

  if (field && setError) {
    setError(field as Path<FormFields>, {
      message: VALIDATION_MESSAGE[code],
    });
  } else {
    alert(error.message);
  }
}
