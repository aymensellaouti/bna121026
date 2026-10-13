import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-rotating-card',
  styleUrl: './rotating-card.css',
  templateUrl: './rotating-card.html',
})
export class RotatingCard {
  // State de la page
  name = signal('sellaouti');
  firstname = signal('aymen');
  job = signal('enseignant');
  path = signal('rotating_card_profile3.png');
}
