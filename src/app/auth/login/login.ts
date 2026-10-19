import { Component, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { email, form, minLength, required, FormField, FormRoot } from '@angular/forms/signals';
import { Auth } from '../service/auth';
import { APP_CONST } from '../../config/app-const.config';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../config/app-routes.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login implements OnDestroy {
  credentials = signal<CredentialsDto>({
    email: '',
    password: '',
  });
  authService = inject(Auth);
  router = inject(Router);
  toastr = inject(ToastrService);
  constructor() {
    const savedCredentials = localStorage.getItem('loginForm');
    if (savedCredentials) {
      this.credentials.set(JSON.parse(savedCredentials));
    }
  }
  login() {
    this.authService.login(this.credentials()).subscribe({
      next: (response) => {
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        this.toastr.error('Veuillez vérifier vos credentials');
      },
    });
  }
  ngOnDestroy(): void {
    localStorage.setItem('loginForm', JSON.stringify(this.credentials()));
  }
  // saveFormInLocalStorage = effect(() => {
  //   if (this.loginForm().valid()) {
  //     localStorage.setItem('loginForm', JSON.stringify(this.credentials()))
  //   }
  // })
  loginForm = form(
    this.credentials,
    (form) => {
      required(form.email);
      required(form.password);
      minLength(form.password, 4);
      email(form.email);
    },
    {
      submission: {
        action: async (field) => {
          this.login();
        },
      },
    },
  );
}
