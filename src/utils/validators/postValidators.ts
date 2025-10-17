import { VALIDATION_MESSAGE } from '@/constants/validationMessages';

export const regex = {
  title: /^[\p{L}\p{N}\p{P}\p{S}\p{Emoji}\s]+$/u,
};

export const validatePostTitle = (v: string): true | string => {
  if (!regex.title.test(v)) {
    return VALIDATION_MESSAGE.POST_TITLE_INVALID_CHARACTERS_ERROR;
  }
  return true;
};
