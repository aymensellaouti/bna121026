import { Routes } from '@angular/router';

import { authGuard } from '../auth/guards/auth-guard';

export const CV_ROUTES: Routes = [
  {
    path: 'cv',
    canActivateChild: [],
    children: [
      {
        path: '',
        loadComponent: () => import('./cv-page/cv-page').then((m) => m.CvPage),
      data: {
        preload: true
      } },
      {
        path: 'add',
        loadComponent: () => import('./add-cv/add-cv').then((m) => m.AddCv),
        canActivate: [authGuard],
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./details-cv/details-cv.component').then((m) => m.DetailsCvComponent),
      },
    ],
  },
  // Add detailCv route
];
