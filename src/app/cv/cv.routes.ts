import { Routes } from "@angular/router";
import { AddCv } from "./add-cv/add-cv";
import { CvPage } from "./cv-page/cv-page";
import { DetailsCvComponent } from "./details-cv/details-cv.component";
import { authGuard } from "../auth/guards/auth-guard";

export const CV_ROUTES: Routes = [
  {path: 'cv',canActivateChild:[] , children: [
    { path: '', component: CvPage },
    { path: 'add', component: AddCv, canActivate: [authGuard] },
    { path: ':id', component: DetailsCvComponent },
  ]}
  // Add detailCv route
];
