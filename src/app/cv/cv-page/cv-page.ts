import { Component, inject, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvList } from '../cv-list/cv-list';
import { CvCard } from '../cv-card/cv-card';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/say-hello';

@Component({
  imports: [CvList, CvCard],
  selector: 'app-cv-page',
  styleUrl: './cv-page.css',
  templateUrl: './cv-page.html',
})
export class CvPage {
  cvs = signal<Cv[]>([
    new Cv(1, 'sellaouti', 'aymen', 'teacher', '12324', 'rotating_card_profile2.png', 44),
    new Cv(2, 'sellaouti', 'skander', 'student', '4444', '     ', 7),
    new Cv(3, 'sellaouti', 'skander', 'student', '4444', '     ', 7),
  ]);
  loggerService = inject(LoggerService);
  helloService = inject(SayHelloService);
  selectedCv = signal<Cv | null>(null);
  constructor() {
    this.helloService.hello();
    this.loggerService.logger('cc je suis la CvTech')
  }
}
