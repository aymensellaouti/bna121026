import { CvPage } from "./cv-page/cv-page";
import { DetailsCvComponent } from "./details-cv/details-cv.component";

export const CV_ROUTES = [
  // Add detailCv route
  { path: 'cv', component: CvPage },
  { path: 'cv/:id', component: DetailsCvComponent },
];
