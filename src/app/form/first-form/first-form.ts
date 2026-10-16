import { Component, effect, signal } from '@angular/core';
import { form, FormField, maxLength, required } from '@angular/forms/signals';

export interface Section {
  name: string;
  level: number;
}

@Component({
  imports: [FormField],
  selector: 'app-first-form',
  styleUrl: './first-form.css',
  templateUrl: './first-form.html',
})
export class FirstForm {
  section = signal<Section>({
    name: 'GLLLLLL',
    level: 0
  })

  form = form(this.section, form => {
    required(form.name),
    required(form.level),
    maxLength(form.name, 4)
  });
  logFormEffec = effect(() => {
    console.log(this.form());
    console.log(this.form().valid());
    console.log({levelValid:this.form.name().valid()});
    console.log(this.form().value());

  })
}
