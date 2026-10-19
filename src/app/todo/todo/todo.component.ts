import { Component, inject, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";
import { FormsModule } from "@angular/forms";
import { TestRxjs } from "../../rxjs/test-rxjs/test-rxjs";
import { HttpClient } from "@angular/common/http";
import { TodoApi } from "../model/todo-api.model";
import { APP_CONST } from "../../config/app-const.config";
import { FakeTodoService } from "../service/fake-todo.service";
import { SingleTodo } from "../single-todo/single-todo";

@Component({
  imports: [FormsModule, TestRxjs, SingleTodo],
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [{
    provide: TodoService,
    useClass: APP_CONST.env == 'dev'? FakeTodoService : TodoService
  }]
})
export class TodoComponent {
  todoService = inject(TodoService);
  // State
  todo = signal<Todo>(new Todo());
  todos = this.todoService.getTodos();
  todosApi = signal<TodoApi[]>([])
  constructor() {
    this.todoService.getTodosFromApi().subscribe({
      next: (todos) => {
        this.todosApi.set(todos)
      }
    });
  }
  addTodo() {
    this.todoService.addTodo(this.todo());
    this.todo.set(new Todo());
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
