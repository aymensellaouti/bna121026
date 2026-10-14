import { Component, signal } from '@angular/core';

@Component({
  imports: [],
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
