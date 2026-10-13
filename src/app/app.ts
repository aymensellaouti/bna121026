import { Component, signal } from '@angular/core';
import { First } from './component/first/first';
import { Seconf } from './component/seconf/seconf';
import { Two } from './component/two/two';
import { RotatingCard } from './component/rotating-card/rotating-card';
import { Counter } from './signals/counter/counter';
import { FirstSignalComponent } from './signals/first-signal/first-signal.component';
import { TtcComponent } from './signals/ttc/ttc.component';

@Component({
  imports: [First, Seconf, Two, RotatingCard, Counter, FirstSignalComponent, TtcComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('bna121026');
}
