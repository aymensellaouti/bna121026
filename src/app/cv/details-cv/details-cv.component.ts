import { Component, computed, effect, inject, input, signal } from "@angular/core";
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
export class DetailsCvComponent {
  cvService = inject(CvService);
  router = inject(Router);
  id = input.required<number>();
  cv = computed<Cv | null>(() => this.cvService.findCvById(this.id()));
  notfoundEffect = effect(() => {
    if (!this.cv()) {
      this.router.navigate([APP_ROUTES.cv]);
    }
  });
  // effect bech ngérie traitement
  constructor() {}
  // Todo: Récupérer l'id
  // Todo : Chercher le cv ayant cet id
  // Todo :  Méthode delete
  deleteCv() {
    const cv = this.cv()
    if (cv) {
      this.cvService.deleteCv(cv);
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
}
