import { CanActivateFn } from '@angular/router';

export const tourguideGuard: CanActivateFn = (route, state) => {
  return true;
};
