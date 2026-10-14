import { Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  #embauchees = signal<Cv[]>([]);
  embauchees = this.#embauchees.asReadonly();
  getEmbauchees(): Signal<Cv[]> {
    return this.embauchees;
  }
  /**
   *
   * Permet d'embaucher des cvs
   *
   * @param cv - le Cv à embaucher
   * @returns {boolean} return true si embauchée false sinon
   */
  embaucher(cv: Cv): boolean {
    if (this.#embauchees().some(cvElement => cv == cvElement))
      return false;
    this.#embauchees.update(cvs => [...cvs, cv]);
    return true;
  }
}
