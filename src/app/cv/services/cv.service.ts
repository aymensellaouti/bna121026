import {  inject, Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_API } from '../../config/app-api.config';
import { APP_CONST } from '../../config/app-const.config';


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
    new Cv(9, 'Naouar', 'Kadhem', 'Ingénieur', '4444', '     ', 20),
    new Cv(10, 'sellaouti', 'skander', 'student', '4444', '     ', 7),
  ]);
  cvs = this.#cvs.asReadonly();
  httpClient = inject(HttpClient)
  // Gestion SelectedCv
  #selectedCv = signal<Cv | null>(null);
  selectedCv = this.#selectedCv.asReadonly();
  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getFakeCvs(): Cv[] {
    return this.cvs();
  }
  /**
   * Retourne la liste des cvs sous foorme d'un observable
   * @returns Cv[]
   */
  getCvs(): Observable<Cv[]> {
        return this.httpClient.get<Cv[]>(APP_API.cv);
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.#cvs().find(cv => cv.id == id) ?? null;
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvByIdFromApi(id: number): Observable<Cv> {
    return this.httpClient.get<Cv>(APP_API.cv + id);
  }

  /**
   *
   * Supprime un cv avec son id
   *
   * @param id
   * @returns Cv
   */
  deleteCvByIdFromApi(id: number): Observable<{count: number}> {
    // const token = localStorage.getItem(APP_CONST.token) ?? '';
    // const params = new HttpParams().set(APP_CONST.tokenParamName,token);
    // const headers = new HttpHeaders().set(APP_CONST.authHeadersName, token);
    return this.httpClient.delete<{ count: number }>(APP_API.cv + id  );
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): void {
    this.#cvs.update(cvs => cvs.filter(cvElement => cv != cvElement))
  }

  selectCv(cv: Cv) {
    this.#selectedCv.set(cv)
  }
}
