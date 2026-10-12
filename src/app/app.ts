import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './component/first/first';
import { Seconf } from './component/seconf/seconf';

@Component({
  imports: [First, Seconf],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('bna121026');
}
