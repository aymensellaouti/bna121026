import { Component, input } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  imports: [],
  selector: 'app-cv-item',
  styleUrl: './cv-item.css',
  templateUrl: './cv-item.html',
})
export class CvItem {
  cv = input.required<Cv>();
}
