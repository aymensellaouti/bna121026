import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-ttc',
  templateUrl: './ttc.component.html',
  styleUrl: './ttc.component.css',
})
export class TtcComponent {
  priceHt = signal(0);
  taxe = signal(18);
  qty = signal(1);
  message = computed(() => {
    if (this.totalTtc() > 1000) {
      return 'Flouss flouss chakhet 3anna';
    } else {
      return '';
    }
  });
  // à vérifier
  unitaireTtc = computed(() => (this.priceHt() * (100 + this.taxe())) / 100);
  discount = computed(() => {
    let discountPercent = 0;
    if (this.qty() > 10 && this.qty() <= 15) {
      discountPercent = 20;
    } else if (this.qty() > 15) {
      discountPercent = 30;
    }
    return (this.unitaireTtc() * discountPercent) / 100;
  });
  totalTtc = computed(() => (this.unitaireTtc() - this.discount()) * this.qty());
  redLimitEffect = effect(() => {
    if (this.totalTtc() > 1000) {
      alert('Attention !!!!');
    }
  });
  constructor() {
    effect(() => {
      if (this.qty() > 100) {
        console.log('Flouss flouss chakhet 3anna');
      }
    });
  }
}
