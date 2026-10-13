import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-two',
  styleUrl: './two.css',
  templateUrl: './two.html',
})
export class Two {
  twoWay = signal('init value');
  changeValue() {
    this.twoWay.set('newValue');
  }
}
