import { Component, signal } from '@angular/core';
import { First } from './component/first/first';
import { Seconf } from './component/seconf/seconf';
import { Two } from './component/two/two';
import { RotatingCard } from './component/rotating-card/rotating-card';
import { Counter } from './signals/counter/counter';
import { FirstSignalComponent } from './signals/first-signal/first-signal.component';
import { TtcComponent } from './signals/ttc/ttc.component';
import { Pere } from './commInterCompo/pere/pere';
import { CvPage } from './cv/cv-page/cv-page';
import { MiniWordComponent } from './directive/mini-word/mini-word.component';

@Component({
  imports: [First, Seconf, Two, RotatingCard, Counter, FirstSignalComponent, TtcComponent, Pere, CvPage, MiniWordComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('bna121026');
}
