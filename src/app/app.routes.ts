import { Routes } from '@angular/router';

import { CvPage } from './cv/cv-page/cv-page';
import { CV_ROUTES } from './cv/cv.routes';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./component/first/first').then((m) => m.First) },
  ...CV_ROUTES,
  {
    path: 'word',
    loadComponent: () =>
      import('./directive/mini-word/mini-word.component').then((m) => m.MiniWordComponent),
  },
  {
    path: 'todo',
    loadComponent: () => import('./todo/todo/todo.component').then((m) => m.TodoComponent),
  },
  { path: 'color', loadComponent: () => import('./component/color/color').then((m) => m.Color) },
  {
    path: 'form',
    loadComponent: () => import('./form/first-form/first-form').then((m) => m.FirstForm),
  },
  { path: 'login', loadComponent: () => import('./auth/login/login').then((m) => m.Login) },
  {
    path: 'hello/:name',
    loadComponent: () => import('./component/seconf/seconf').then((m) => m.Seconf),
  },
  { path: '**', loadComponent: () => import('./component/nf404/nf404').then((m) => m.NF404) },
  // Gérer la route 404 plus le composant
];
