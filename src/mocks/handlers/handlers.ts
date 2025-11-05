import { adminHandlers } from './admin';
import { authHandlers } from './auth';
import { commentHandlers } from './comment';
import { dailyHandlers } from './daily';
import { fileHandlers } from './file';
import { memberHandlers } from './member';
import { postHandlers } from './post';
import { streakHandlers } from './streak';

export const handlers = [
  ...authHandlers,
  ...memberHandlers,
  ...dailyHandlers,
  ...streakHandlers,
  ...postHandlers,
  ...commentHandlers,
  ...adminHandlers,
  ...fileHandlers,
];
