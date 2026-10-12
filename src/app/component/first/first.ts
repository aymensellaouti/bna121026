import { Component, signal } from '@angular/core';
import { Seconf } from '../seconf/seconf';

@Component({
  // chneya nest7a9 fel html mta3i
  imports: [Seconf],
  // kifech tnadili
  selector: 'app-first',
  // El css mta3i
  styleUrl: './first.css',
  // El Html mta3i
  templateUrl: './first.html',
})
export class First {
  name = signal('amira');
  isHidden = signal(false)
  constructor() {

  }
  showHide() {
    this.isHidden.update(isHidden => !isHidden)
  }
}
