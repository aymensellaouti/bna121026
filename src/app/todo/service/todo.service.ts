import { inject, Injectable, Service, Signal, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerService } from "../../services/logger.service";
import { HttpClient } from "@angular/common/http";
import { TodoApi } from "../model/todo-api.model";
import { Observable } from "rxjs";
import { APP_API } from "../../config/app-api.config";

@Service()
export class TodoService {
  #todos = signal<Todo[]>([]);
  todos = this.#todos.asReadonly();
  loggerService = inject(LoggerService);
  httpClient = inject(HttpClient);
  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Signal<Todo[]> {
    return this.todos;
  }

  /**
   *
   * @returns Un observable des todos de l'api
   */
  getTodosFromApi(): Observable<TodoApi[]> {
    return this.httpClient.get<TodoApi[]>(APP_API.todos);
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    this.#todos.update((todos) => [...todos, todo]);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): void {
    this.#todos.update((todos) => todos.filter((todoElement) => todoElement != todo));
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    this.loggerService.logger({ todos: this.#todos() });
  }
}
