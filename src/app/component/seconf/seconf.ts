import { Component, effect, inject, input, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_ROUTES } from '../../config/app-routes.config';

@Component({
  imports: [],
  selector: 'app-seconf',
  styles: '',
  template: `
    <p>Hello {{name()}}</p>
  `,
})
export class Seconf {
  router = inject(Router);
  // acr = inject(ActivatedRoute);
  name = input('');
  blackListEffect = effect(() => {
    console.log(this.name());
    if (this.name() == 'aymen') this.router.navigate([APP_ROUTES.home])
  })
  constructor() {
    // console.log({ acr: this.acr.snapshot });
    // console.log(this.name());

    // const name = this.acr.snapshot.params['name'];
    //if (this.name() == 'aymen') this.router.navigate([APP_ROUTES.home])
    //this.name.set(name);
  }
}
