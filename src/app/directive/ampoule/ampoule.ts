import { Component, signal } from '@angular/core';
import { Highlight } from '../highlight';
import { Rainbow } from '../rainbow';

@Component({
  imports: [Highlight, Rainbow],
  selector: 'app-ampoule',
  styleUrl: './ampoule.css',
  templateUrl: './ampoule.html',
})
export class Ampoule {
  isOn = signal(false);
  interrupteur() {
   this.isOn.update(value => !value)
  }
}
