import { VALIDATION_TYPE, ValidationType } from '@/constants/validationMessages';

export type ParsedError = {
  type?: ValidationType;
  message?: string;
};

export const parseErrorMessage = (error?: string): ParsedError => {
  if (!error) return {};

  const [type, ...rest] = error.split(':');
  const message = rest.join(':').trim();

  const isValidType = Object.values(VALIDATION_TYPE).includes(type as ValidationType);

  return {
    type: isValidType ? (type as ValidationType) : undefined,
    message: message || undefined,
  };
};
