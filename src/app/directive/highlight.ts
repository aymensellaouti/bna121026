import { Directive, HostBinding, HostListener, input, Input, OnInit, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host:{
    '[style.backgroundColor]':'this.bgc()',
    '(mouseenter)':'this.onMouseEnter()',
    '(mouseleave)':'this.onMouseLeave()',
  }
})
export class Highlight implements OnInit {
  // Je modifie l'apparence et le comportement de
  // l'element sur lequel je suis

  in = input('yellow');

  out = input('red');
  //@HostBinding('style.backgroundColor')
  bgc = signal('');
  constructor() {
    console.log('appHighlight');
  }
  ngOnInit(): void {
    this.bgc.set(this.out());
  }

  //@HostListener('mouseenter')
  onMouseEnter() {
    this.bgc.set(this.in());
  }
  //@HostListener('mouseleave')
  onMouseLeave() {
    this.bgc.set(this.out());
  }
}
