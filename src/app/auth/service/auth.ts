import { inject, Service } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { Observable, tap } from 'rxjs';
import { LoginResponseDto } from '../dto/login-response.dto copy';
import { HttpClient } from '@angular/common/http';
import { APP_API } from '../../config/app-api.config';
import { APP_CONST } from '../../config/app-const.config';

@Service()
export class Auth {
  httpClient = inject(HttpClient);
  isAuthenticated(): boolean {
    return !!localStorage.getItem(APP_CONST.token);
  }
  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.httpClient.post<LoginResponseDto>(APP_API.login, credentials).pipe(
      tap(response => localStorage.setItem(APP_CONST.token, response.id))
    );
  }
  logout() {
    localStorage.removeItem(APP_CONST.token);
  }
}
