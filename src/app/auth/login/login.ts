import { Component, effect, OnDestroy, OnInit, signal } from '@angular/core';
import { CredentialsDto } from '../dto/credentials.dto';
import { email, form, minLength, required, FormField } from '@angular/forms/signals';

@Component({
  imports: [FormField],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login implements OnDestroy {
  credentials = signal<CredentialsDto>({
    email: '',
    password: ''
  });
  constructor() {
    const savedCredentials = localStorage.getItem('loginForm');
    if (savedCredentials) {
      this.credentials.set(JSON.parse(savedCredentials));
    }
  }
  ngOnDestroy(): void {
    localStorage.setItem('loginForm', JSON.stringify(this.credentials()));
  }
  // saveFormInLocalStorage = effect(() => {
  //   if (this.loginForm().valid()) {
  //     localStorage.setItem('loginForm', JSON.stringify(this.credentials()))
  //   }
  // })
  loginForm = form(this.credentials, form => {
    required(form.email);
    required(form.password);
    minLength(form.password, 4);
    email(form.email)
  });
}
