import { httpResource } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { APP_API } from '../../config/app-api.config';
import { TodoApi } from '../model/todo-api.model';

@Component({
  imports: [],
  selector: 'app-single-todo',
  styleUrl: './single-todo.css',
  templateUrl: './single-todo.html',
})
export class SingleTodo {
  id = signal(1);

  todoResource = httpResource<TodoApi>(() => `${APP_API.todos}`+this.id());
}
