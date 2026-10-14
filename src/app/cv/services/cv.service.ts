import {  Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv';


@Injectable({
  providedIn: 'root',
})
export class CvService {
  // Centraliser la liste des cvs
  #cvs = signal([
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
  cvs = this.#cvs.asReadonly();
  // Gestion SelectedCv
  #selectedCv = signal<Cv | null>(null);
  selectedCv = this.#selectedCv.asReadonly();
  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Signal<Cv[]> {
    return this.cvs;
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    return false;
  }

  selectCv(cv: Cv) {
    this.#selectedCv.set(cv);
  }
}
