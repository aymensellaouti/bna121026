import { Component, computed, effect, inject, Injector, input, OnInit, Signal, signal } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { DefaultImagePipe } from "../pipes/default-image-pipe";
import { APP_ROUTES } from "../../config/app-routes.config";
import { Router } from "@angular/router";
import { Auth } from "../../auth/service/auth";
import { rxResource, toSignal } from "@angular/core/rxjs-interop";
import { tap } from "rxjs";

@Component({
  imports: [DefaultImagePipe],
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
})
export class DetailsCvComponent implements OnInit {
  cvService = inject(CvService);
  router = inject(Router);
  authService = inject(Auth);
  id = input.required<number>();
  cvRxResource = rxResource({
    params: () => ({ id: this.id() }),
    stream: ({params}) => this.cvService.findCvByIdFromApi(params.id),
  });
  // notfoundEffect = effect(() => {
  //   if (!this.cv()) {
  //     this.router.navigate([APP_ROUTES.cv]);
  //   }
  // });
  // effect bech ngérie traitement
  constructor() {}
  ngOnInit(): void {
    // this.cvService.findCvByIdFromApi(this.id()).subscribe({
    //   next: (cv) => this.cv.set(cv),
    //   error: (e) => {
    //     this.router.navigate([APP_ROUTES.cv]);
    //   },
    // });
    // console.log({id: this.id()});
    // this.cv = toSignal(this.cvService.findCvByIdFromApi(this.id()).pipe(
    //   tap(result => this.isLoading.set(false))
    // ), {
    //   initialValue: null,
    //   injector: this.injector
    // });
  }
  // Todo: Récupérer l'id
  // Todo : Chercher le cv ayant cet id
  // Todo :  Méthode delete
  deleteCv(cv: Cv) {
      this.cvService.deleteCvByIdFromApi(cv.id).subscribe({
        next: () => {
          this.router.navigate([APP_ROUTES.cv]);
        },
      });
    }
}
