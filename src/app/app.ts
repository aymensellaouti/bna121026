import { Component, signal } from '@angular/core';
import { First } from './component/first/first';
import { Seconf } from './component/seconf/seconf';
import { Two } from './component/two/two';
import { RotatingCard } from './component/rotating-card/rotating-card';

@Component({
  imports: [First, Seconf, Two, RotatingCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('bna121026');
}
