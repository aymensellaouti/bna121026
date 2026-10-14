import { Component, inject, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvList } from '../cv-list/cv-list';
import { CvCard } from '../cv-card/cv-card';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/say-hello';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';

@Component({
  imports: [CvList, CvCard],
  selector: 'app-cv-page',
  styleUrl: './cv-page.css',
  templateUrl: './cv-page.html',
})
export class CvPage {
  toastr = inject(ToastrService);
  cvs = signal<Cv[]>([
    new Cv(1, 'sellaouti', 'aymen', 'teacher', '12324', 'rotating_card_profile2.png', 44),
    new Cv(2, 'gasmi', 'rihab', 'Ingénieur', '4444', '     ', 20),
    new Cv(3, 'gasmi', 'rihab', 'Ingénieur', '4444', '     ', 20),
    new Cv(4, 'Maghraoui', 'Tarek', 'Ingénieur', '4444', '     ', 20),
    new Cv(5, 'Ouerghi', 'Walid', 'Ingénieur', '4444', '     ', 20),
    new Cv(6, 'Bouzayene', 'Nourhene', 'Ingénieur', '4444', '     ', 20),
    new Cv(7, 'Zoghlami', 'Alaeddine', 'Ingénieur', '4444', '     ', 20),
    new Cv(8, 'Allani', 'Amira', 'Ingénieur', '4444', '     ', 20),
    new Cv(9, 'Naouar', 'Nadhem', 'Ingénieur', '4444', '     ', 20),
    new Cv(10, 'sellaouti', 'skander', 'student', '4444', '     ', 7),
  ]);
  loggerService = inject(LoggerService);
  helloService = inject(SayHelloService);
  cvService = inject(CvService)
  selectedCv = this.cvService.selectedCv;
  constructor() {
    this.helloService.hello();
    this.loggerService.logger('cc je suis la CvTech');
    this.toastr.info('cc je suis la CvTech');
  }
}
