import { Routes } from '@angular/router';
import { First } from './component/first/first';
import { MiniWordComponent } from './directive/mini-word/mini-word.component';
import { TodoComponent } from './todo/todo/todo.component';
import { Color } from './component/color/color';
import { CvPage } from './cv/cv-page/cv-page';
import { CV_ROUTES } from './cv/cv.routes';

export const routes: Routes = [
  {path:'', component: First},
  ...CV_ROUTES,
  {path:'word', component: MiniWordComponent},
  {path:'todo', component: TodoComponent},
  {path:'color', component: Color},
];
