import { adminHandlers } from './admin';
import { authHandlers } from './auth';
import { dailyHandlers } from './daily';
import { fileHandlers } from './file';
import { memberHandlers } from './member';
import { streakHandlers } from './streak';

export const handlers = [
  ...authHandlers,
  ...dailyHandlers,
  ...memberHandlers,
  ...fileHandlers,
  ...streakHandlers,
  ...adminHandlers,
];
