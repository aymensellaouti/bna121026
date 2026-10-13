import { Component, computed, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-first-signal',
  templateUrl: './first-signal.component.html',
  styleUrl: './first-signal.component.css',
})
export class FirstSignalComponent {
  x = signal(5);
  y = signal(7);
  z = computed(() =>this.x() + this.y());
  names = signal(['aymen','amira']);
  namesLength = computed(() => {
    return this.names().length;
  });
  addName() {
    this.names.update((newnames) =>[...newnames,'nourhene'])
  }
  doubleZ=computed(() => 2* this.z());
  constructor() {
    setInterval(() => {
      this.addName()
    },2000)
  }
}
