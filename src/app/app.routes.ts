import { Routes } from '@angular/router';
import { First } from './component/first/first';
import { MiniWordComponent } from './directive/mini-word/mini-word.component';
import { TodoComponent } from './todo/todo/todo.component';
import { Color } from './component/color/color';
import { CvPage } from './cv/cv-page/cv-page';
import { CV_ROUTES } from './cv/cv.routes';
import { Seconf } from './component/seconf/seconf';
import { NF404 } from './component/nf404/nf404';
import { FirstForm } from './form/first-form/first-form';
import { Login } from './auth/login/login';

export const routes: Routes = [
  {path:'', component: First},
  ...CV_ROUTES,
  {path:'word', component: MiniWordComponent},
  {path:'todo', component: TodoComponent},
  {path:'color', component: Color},
  {path:'form', component: FirstForm},
  {path:'login', component: Login},
  {path:'hello/:name', component: Seconf},
  {path:'**', component: NF404},
  // Gérer la route 404 plus le composant
];
