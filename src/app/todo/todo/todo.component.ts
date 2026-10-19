import { Component, inject, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";
import { FormsModule } from "@angular/forms";
import { TestRxjs } from "../../rxjs/test-rxjs/test-rxjs";
import { HttpClient } from "@angular/common/http";
import { TodoApi } from "../model/todo-api.model";

@Component({
  imports: [FormsModule, TestRxjs],
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
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
