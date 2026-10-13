import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter {
increment() {
  this.counter.update(value => value + 1 )
}
reset() {
  this.counter.set(0)
}
  // State
  counter = signal(0);
}
