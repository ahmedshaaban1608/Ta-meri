import { CanActivateFn } from '@angular/router';

export const touristGuard: CanActivateFn = (route, state) => {
  return false;
};
