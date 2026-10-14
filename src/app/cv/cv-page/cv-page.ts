import { Component, inject, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvList } from '../cv-list/cv-list';
import { CvCard } from '../cv-card/cv-card';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/say-hello';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { EmbaucheComponent } from '../embauche/embauche.component';

@Component({
  imports: [CvList, CvCard, EmbaucheComponent],
  selector: 'app-cv-page',
  styleUrl: './cv-page.css',
  templateUrl: './cv-page.html',
})
export class CvPage {
  toastr = inject(ToastrService);
  cvService = inject(CvService)
  cvs = this.cvService.getCvs();
  loggerService = inject(LoggerService);
  helloService = inject(SayHelloService);
  selectedCv = this.cvService.selectedCv;
  constructor() {
    this.helloService.hello();
    this.loggerService.logger('cc je suis la CvTech');
    this.toastr.info('cc je suis la CvTech');
  }
}
