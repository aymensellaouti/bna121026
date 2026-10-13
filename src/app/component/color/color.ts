import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-color',
  styleUrl: './color.css',
  templateUrl: './color.html',
})
export class Color {
  defaultColor = 'red';
  color = signal(this.defaultColor);

  changeColor(newColorInput: HTMLInputElement) {
    this.color.set(newColorInput.value);
    newColorInput.value = '';
  }

  reset() {
    this.color.set(this.defaultColor);
  }
}
