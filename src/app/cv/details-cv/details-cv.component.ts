import { Component, computed, effect, inject, input, OnInit, signal } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { DefaultImagePipe } from "../pipes/default-image-pipe";
import { APP_ROUTES } from "../../config/app-routes.config";
import { Router } from "@angular/router";

@Component({
  imports: [DefaultImagePipe],
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent implements OnInit {
  cvService = inject(CvService);
  router = inject(Router);
  id = input.required<number>();
  cv = signal<Cv | null>(null);
  // notfoundEffect = effect(() => {
  //   if (!this.cv()) {
  //     this.router.navigate([APP_ROUTES.cv]);
  //   }
  // });
  // effect bech ngérie traitement
  constructor() {

  }
  ngOnInit(): void {
    this.cvService.findCvByIdFromApi(this.id()).subscribe({
      next: cv => this.cv.set(cv),
      error: (e) => {
        this.router.navigate([APP_ROUTES.cv]);
      }
    });
  }
  // Todo: Récupérer l'id
  // Todo : Chercher le cv ayant cet id
  // Todo :  Méthode delete
  deleteCv() {
    const cv = this.cv()
    if (cv) {
      this.cvService.deleteCvByIdFromApi(cv.id).subscribe({
        next: () => {
          this.router.navigate([APP_ROUTES.cv]);
        }
      });
    }
  }
}
