import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../service/auth';
import { APP_ROUTES } from '../../config/app-routes.config';

export const authGuard: CanActivateFn = (route, state) => {
  const authGuard = inject(Auth);
  const router = inject(Router);
  if (!authGuard.isAuthenticated()) {
    router.navigate([APP_ROUTES.login]);
    return false
  }
  return true;
};
