import { Component } from '@angular/core';
import { filter, map, take, timer } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-test-rxjs',
  styleUrl: './test-rxjs.css',
  templateUrl: './test-rxjs.html',
})
export class TestRxjs {
  counter$ = timer(0,1000);

  constructor() {
    this.counter$
    .pipe(
      // 0 1 2 3 4 5 6 7 8 9 ....
      map((element) => element + 1),
      // 1 2 3 4 5 6 7 8 9 ..
      filter(x => x%2 == 0),
      take(2)
    )
    .subscribe({
      next:(value) => {
        console.log(value)
      },
      complete:() => {
        console.log('Oufa lflux');
      },
      error: (e) => {
        console.log('erreur');
      }
    })
  }
}
