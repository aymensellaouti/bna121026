import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Auth } from '../service/auth';
import { APP_CONST } from '../../config/app-const.config';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next) => {
  //console.log({inInterceptor:req});
  const authService = inject(Auth);
  if (authService.isAuthenticated()) {
    const token = localStorage.getItem(APP_CONST.token) ?? '';
    const cloneReq = req.clone({
      setHeaders: {
        [APP_CONST.authHeadersName]: token
      }
    });
    return next(cloneReq);
  }

  return next(req);
};
